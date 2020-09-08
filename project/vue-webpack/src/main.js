console.log("ok");

// 注意：这里的vue和网页中引用的vue不同
import Vue from "vue";

import app from "./components/App.vue";
// 导入路由模块
import VueRouter from "vue-router";
// 安装
Vue.use(VueRouter);
// 默认使用过import导入到vue不支持如下方式定义组件，只支持使用.vue模板定义的组件
// 默认加载vue.runtime.common.js而非vue.js，官方不推荐这种方式因为不优雅，更
// 主要没有把组件化的思想发挥到极致
/*const login = {
  template: "<h2>这是一个组件</h2>",
};*/

import router from "./router.js";
/*封装为一个模块----js代码相关的叫模块 UI相关的叫组件
// 导入路由相关组件
import Login from "./components/login.vue";
import Reg from "./components/reg.vue";
// 路由规则
const router = new VueRouter({
  routes: [
    { path: "/login", component: Login },
    { path: "/reg", component: Reg },
  ],
});*/

const vm = new Vue({
  el: ".app",
  render: (c) => c(app),
  // 使用render渲染的组件为根组件，将来其他组件只能在app内部中去渲染
  router,
});
