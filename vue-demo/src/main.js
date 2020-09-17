// 注意：这里的vue和网页中引用的vue不同
import Vue from "vue";
// 导入vuex
import Vuex from "vuex";
// 安装vuex
Vue.use(Vuex);

//创建一个公共的状态对象
const store = new Vuex.Store({
  // state可以看做Vue中的data
  state: {
    // 这里面存储的就是需要共享的数据
    count: 0,
    // 这样全局就有了一个count值
  },
});

new Vue({
  el: "",
  data: {},
  store, //将创建的共享状态对象挂载到Vue实例上，
  // 这样所有组件就可以直接从store中获取全部数据
});

// 导入全局配置
import "./globalConfig.js";

// 导入路由对象
import App from "./components/App.vue";
import router from "./router.js";

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
