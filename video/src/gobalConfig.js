import Vue from 'vue'
// 导入mint-ui组件库
import MintUI from "mint-ui";
// 导入mint-ui的样式表
import "mint-ui/lib/style.css";
// 全局配置组件库 Vue.use批量注册mint组件
Vue.use(MintUI);

// import NutUI from '@nutui/nutui';
// import '@nutui/nutui/dist/nutui.css';

// NutUI.install(Vue);
// 导入mui样式表
import "../lib/mui/css/mui.min.css";

import 'lib-flexible/flexible.js'
// import '../postcss.config.js'

// 导入axios
import axios from "axios";
// 将axios挂载到Vue原型上
Vue.prototype.$axios = axios;
axios.create({
//   baseURL: "http://172.16.12.10:8080/", //设置默认根路径
});