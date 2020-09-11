import Vue from "vue";

// 导入axios
import axios from "axios";
// 将axios挂载到Vue原型上
Vue.prototype.$axios = axios;
axios.create({
  baseURL: "http://127.0.0.1:3000/", //设置默认根路径
});

// 导入mint-ui组件库
import MintUI from "mint-ui";
// 导入mint-ui的样式表
import "mint-ui/lib/style.css";
// 全局配置组件库 Vue.use批量注册mint组件
Vue.use(MintUI);
// 导入mui样式表
import "../lib/mui/css/mui.min.css";

// 导入全局过滤器
import "./filter.js";
