// 注意：这里的vue和网页中引用的vue不同
import Vue from "vue";

import Home from "./components/tabbar/home.vue";
import Ger from "./components/tabbar/ger.vue";
import Content from "./components/tabbar/content.vue";
import Message from "./components/tabbar/message.vue";
import Download from "./components/layer2route/download.vue";
import DoloadInfo from "./components/layer2route/DoloadInfo.vue";
import Search from "./components/search/search.vue";
import Shop from "./components/shop/shop.vue";
import Shopinfo from "./components/shop/shopinfo.vue";
import Shopdec from "./components/shop/shopdec.vue";
// 导入路由模块
import VueRouter from "vue-router";
// 安装
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" }, //设置默认路径
    { path: "/home", component: Home },
    { path: "/ger", component: Ger },
    { path: "/content", component: Content },
    { path: "/message", component: Message },
    { path: "/home/download", component: Download },
    // 利用props传递参数
    { path: "/home/DoloadInfo/:id", component: DoloadInfo, props: true },
    { path: "/home/search", component: Search },
    { path: "/home/shop", component: Shop },
    { path: "/home/shopinfo/:id", component: Shopinfo, props: true },
    { path: "/home/shopdec/:id", component: Shopdec, props: true },
  ],
  linkActiveClass: "mui-active", //设置路由被激活时的类名(点击等)
});
export default router;
