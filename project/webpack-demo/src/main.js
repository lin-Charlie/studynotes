// 项目JS的入口文件
// 浏览器中，在一个JS中导入另外的JS文件是不行的
// 为了解决浏览器天生没有模块的问题，ES6中提出了import和export的概念
// 注意：ES6中使用import导入其他模块的语法，chrome不支持

// 在webpack中一切文件皆模块
import $ from "../../js/jquery-1.12.4"; //导入模块

// 引入css文件
import mystyle from "./css/index.css";

// jQuery入口函数
$(function () {
  console.log("success");
  $("li:odd").css("backgroundColor", "pink");
  $("li:even").css("backgroundColor", "yellow");
});
/*export default {
  name: "zc",
  age: 12,
};导出模块*/

// 默认情况下，webpack只能处理.js文件
// 如果想要使用webpack打包非js文件，需要在项目中配置合适的loader
