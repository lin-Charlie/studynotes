import Vue from 'vue'
// 导入mint-ui组件库
import MintUI from "mint-ui";
// 导入mint-ui的样式表
import "mint-ui/lib/style.css";
// 全局配置组件库 Vue.use批量注册mint组件
Vue.use(MintUI);

// 导入mui样式表
import "../lib/mui/css/mui.css";

import 'lib-flexible/flexible.js'
// import '../postcss.config.js'

// 导入axios
import axios from "axios";
// 将axios挂载到Vue原型上
Vue.prototype.$axios = axios;

// 校验密码必须为数字和字母且6-16位
// ^ 匹配一行的开头位置
// (?![0-9]+$) 预测该位置后面不全是数字
// (?![a-zA-Z]+$) 预测该位置后面不全是字母
// [0-9A-Za-z] {8,16} 由8-16位数字或这字母组成
// $ 匹配行结尾位置
const regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
Vue.prototype.$RegExp = regExp;