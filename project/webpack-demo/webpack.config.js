const path = require("path");
/*注意的是 webpack.config.js这个文件夹名字是默认的，不能写错，否则会报错；当然，
有时候我们是比较任性的，我就想其他名字命名这个配置文件不行吗？
（比如webpackconfig.js） 当然可以，只需要这样操作就可以了
这行命令的意思是，webpack帮我打包的时候，以webpackconfig.js这个文件为配置文件
npx webpack  --config webpackconfig.js
*/
// webpack底层就是node开发的

// 将页面托管到内存中的插件
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js", //入口文件
  // entry: path.join(__dirname, "./src/main.js"),
  output: {
    //出口文件
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    //插件数组
    new htmlWebpackPlugin({
      //创建一个把HTML首页托管到内存中的插件
      template: path.join(__dirname, "./src/index.html"), //要把那个页面作为模板复制一份
      // 托管到内存中
      filename: "index.html", //将来在内存中复制出来的页面的名称
    }),
  ],
  // 配置处理非js文件的loader
  module: {
    rules: [
      //配置非js文件与loader之间的关系
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      //匹配以.css结尾的文件 test--匹配 use--使用
    ],
  },

  devServer: {
    //不推荐
    //webpack-dev-server插件运行时的指令
    open: true,
    port: 3000,
    host: "127.0.0.1",
    hot: true, //需要配合webpack插件
  },
};
// 工具的热启动
// node --> nodemon/supervicer
// webpack --> webpack-dev-server 实时监听项目改变并自定编译项目代码

/*使用webpack-dev-server工具自动打包好的bundle并没有存放到实际磁盘中，被托管到
内存中，可认为项目根目录中的虚拟的、看不见的(webpack output is served from /)*/
