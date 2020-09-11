import moment from "moment";
import Vue from "vue";
// 定义全局时间过滤器
Vue.filter("timeFormat", function(datastr, formatData) {
  // 过滤器的处理函数中必须return
  return moment(datastr).format(formatData | "MMM Do YY");
  // moment：格式化时间的插件
});
// 过滤器的调用
// {{item.time | timeformat("YYYY-MM-DD HH:mm:ss");}}
