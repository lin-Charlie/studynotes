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
// 导入axios
import axios from "axios";
// 将axios挂载到Vue原型上
Vue.prototype.$axios = axios;
axios.create({
  baseURL: "http://127.0.0.1:3000/", //设置默认根路径
});

// 定义全局时间过滤器
// Vue.filter("timeFormat", function(datastr,formatData) {
//   // 过滤器的处理函数中必须return
//   return moment(datastr).format(formatData);
//   // moment：格式化时间的插件
// });
// 过滤器的调用
// {{item.time|timeformat('YYYY-MM-DD HH:mm:ss')}}

const vm = new Vue({
  el: ".app",
  render: (c) => c(App),
  // 使用render渲染的组件为根组件，将来其他组件只能在app内部中去渲染
  router,
});
