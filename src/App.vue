<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/* 注意这里是为也后面写的页面继承这个高度，后面的页面要想高度100%，就也是用height：100% */
body,
html,
#app {
  height: 100%;
}
li {
  list-style: none;
}
</style>
