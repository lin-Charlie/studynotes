// 项目JS的入口文件
// 浏览器中，在一个JS中导入另外的JS文件是不行的
// 为了解决浏览器天生没有模块的问题，ES6中提出了import和export的概念
// 注意：ES6中使用import导入其他模块的语法，chrome不支持

// 在webpack中一切文件皆模块
import "../src/js/jquery-1.11.3"; //导入模块

// jQuery入口函数
$(function () {
  $("li:odd").css("backgroundColor", "pink");
  $("li:even").css("backgroundColor", "yellow");
});

// 引入css文件
// import mystyle from "./css/index.css";
// 今后推荐下面引入写法
import "./css/index.css";

import "./css/index.scss";

class Person {
  constructor(name) {
    // name是实例属性 只能通过实例来访问的属性
    this.name = name;
  }
  sayMyName() {
    console.log(this.name);
  }
  // static关键字，专门用来创建静态属性
  static info = "这是静态属性";
}
// 直接使用构造函数点出来的属性
Person.info = "这是静态属性";

let person = new Person("zb");
person.sayMyName();
// console.log(Person.info);
/*export default {
  name: "zc",
  age: 12,
};导出模块*/

// 默认情况下，webpack只能处理.js文件
// 如果想要使用webpack打包非js文件，需要在项目中配置合适的loader
