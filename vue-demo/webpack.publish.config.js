const path = require("path");
/*注意的是 webpack.config.js这个文件夹名字是默认的，不能写错，否则会报错；当然，
有时候我们是比较任性的，我就想其他名字命名这个配置文件不行吗？
（比如webpackconfig.js） 当然可以，只需要这样操作就可以了
这行命令的意思是，webpack帮我打包的时候，以webpackconfig.js这个文件为配置文件
npx webpack  --config webpackconfig.js
*/
// webpack底层就是node开发的

// 将页面托管到内存中的插件
// const htmlWebpackPlugin = require("html-webpack-plugin");
// 导入webpack模块
const webpack = require("webpack");

/*Vue Loader 的配置和其它的 loader 不太一样。除了通过一条规则将 vue-loader 
应用到所有扩展名为 .vue 的文件上之外，请确保在你的 webpack 配置中添加 
Vue Loader 的插件：
*/
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/main.js", //入口文件
  // entry: path.join(__dirname, "./src/main.js"),

  /*多入口文件(区分第三方包)
  entry: {
    app: path.join(__dirname, "./src/main.js"), //主文件入口
    vendors: ["jquery"],
  }, //第三方包的名称*/

  output: {
    //出口文件
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    //插件数组
    /*new htmlWebpackPlugin({
      //创建一个把HTML首页托管到内存中的插件
      template: path.join(__dirname, "./src/index.html"), //要把那个页面作为模板复制一份
      // 托管到内存中
      filename: "index.html", //将来在内存中复制出来的页面的名称
      minify: {
        //压缩选项
        removeComments: true, //移除注释
        collapseWhiltespace: true, //合并空白字符
        removeAttributeQuotes: true, //移除属性节点的引号
      },
    }),*/
    new VueLoaderPlugin(),
    /*这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 
    文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用
    到 .vue 文件里的 <script> 块。*/

    /* 1.抽离第三方包
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendors",
        filename: "vendors.js", //指定抽离出来的第三方包的文件名
     }),
     2.压缩文件
    new webpack.optimize.UglifyJsPlugin({
       compress()
     })*/
  ],
  // 配置处理非js文件的loader
  module: {
    rules: [
      //配置非js文件与loader之间的关系
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      //匹配以.css结尾的文件 test--匹配 use--使用
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.jpg|png$/, use: ["url-loader"] }, //处理样式表中的图片
      // 处理ES高级语法需要的babel规则 exclude排除一些不需要的转换的文件,必需的
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
      },
      // 匹配vue文件
      { test: /\.vue$/, use: "vue-loader" },
      // 处理样式中字体文件路径的问题，引用bootstrap中的图标库时
      { test: /\.woff|ttf|woff2|eot|svg$/, use: "url-loader" },
    ],
  },

  /*devServer: {
    //不推荐
    //webpack-dev-server插件运行时的指令
    open: true,
    port: 3000,
    host: "127.0.0.1",
    hot: true, //需要配合webpack插件
  },*/
};
// 工具的热启动
// node --> nodemon/supervicer
// webpack --> webpack-dev-server 实时监听项目改变并自定编译项目代码

/*使用webpack-dev-server工具自动打包好的bundle并没有存放到实际磁盘中，被托管到
内存中，可认为项目根目录中的虚拟的、看不见的(webpack output is served from /)*/
