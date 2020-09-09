// 注意：这里的vue和网页中引用的vue不同
import Vue from "vue";
// 导入mint-ui组件库
import MintUI from "mint-ui";
// 导入mint-ui的样式表
import "mint-ui/lib/style.css";
// 全局配置组件库 Vue.use批量注册mint组件
Vue.use(MintUI);
// 导入mui样式表
import "../lib/mui/css/mui.min.css";
// 导入路由对象
import App from "./components/App.vue";
import router from "./router.js";

const vm = new Vue({
  el: ".app",
  render: (c) => c(App),
  // 使用render渲染的组件为根组件，将来其他组件只能在app内部中去渲染
  router,
});
