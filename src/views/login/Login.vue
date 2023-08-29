<template>
  <div class="login">
    <div class="out">
      <div class="logo">
        <img src="@/assets/images/logo1.jpg" alt="" />
      </div>

      <div class="inner">
        <el-form
          label-width="120px"
          :model="formData"
          :rules="rules"
          status-icon
          ref="validateForm"
        >
          <el-form-item label="用户名:" prop="username">
            <el-input
              v-model="formData.username"
              placeholder="请输入用户名"
              clearable
            ></el-input>
          </el-form-item>

          <el-form-item :label="`密\xa0\xa0\xa0\xa0码:`" prop="password">
            <el-input
              v-model="formData.password"
              type="password"
              placeholder="请输入密码"
              clearable
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmitForm('validateForm')"
              >确认登录</el-button
            >
            <el-button @click="onReset('validateForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { loginAxios } from "@/network/networks";
export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 4,
            max: 10,
            message: "长度在 4 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 提交表单
    onSubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$message.success("提交成功！");

          // axios({
          //   url: "https://ku.qingnian8.com/dataApi/vueadmin/login.php",
          //   method: "post",
          //   params: this.formData,
          // }).then((res) => {
          //   if (res.status === 200) {
          //     if (res.data.code === "401") {
          //       this.$message.error(res.data.txt);
          //     } else {
          //       localStorage.setItem("token", res.data.token);
          //       this.$router.push("/home");
          //       this.$message.success(res.data.txt);
          //     }
          //   }
          // });
          loginAxios(this.formData).then((res) => {
            if (res.status === 200) {
              if (res.data.code === "401") {
                this.$message.error(res.data.txt);
              } else {
                window.localStorage.setItem("token", res.data.token);
                this.$router.push("/home");
                this.$message.success(res.data.txt);
              }
            }
          });
        } else {
          this.$message.error("请正确填写用户名和密码格式");
        }
      });
    },
    // 重置表单
    onReset(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  background-color: #0d3f67;
  height: 100%;
  position: relative;
  .out {
    width: 460px;
    height: 340px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    .logo {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      left: calc(50% - 60px);
      top: -60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      img {
        width: 100%;
      }
    }
    .inner {
      min-height: 200px;
      padding-top: 100px;
      padding-right: 50px;
    }
  }
}
</style>