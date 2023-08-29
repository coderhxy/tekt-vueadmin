import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

// 全局前置守卫
// 一直在一个地方出错，就是没写return next()里面的return
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }
  let token = window.localStorage.getItem('token')
  if (!token) {
    return next('/login')
  }
  next()
})

export default router
