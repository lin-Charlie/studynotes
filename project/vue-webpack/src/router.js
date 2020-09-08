import VueRouter from "vue-router";

// 导入路由相关组件
import Login from "./components/login.vue";
import Reg from "./components/reg.vue";
// 路由规则
const router = new VueRouter({
  routes: [
    { path: "/login", component: Login },
    { path: "/reg", component: Reg },
  ],
});

export default router;
