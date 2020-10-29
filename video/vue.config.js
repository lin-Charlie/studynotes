module.exports = {
    devServer: {
      proxy: {
        // '/vms': {
        //   target: "http://172.16.12.20:8081", 
        //   changeOrigin: true,
        //   logLevel: "debug"
        // },
        '/': {
          target: "http://123.57.172.247:8081", //这个是新的，本地的地址
          changeOrigin: true,
          logLevel: "debug"
        },
      }
    },
    // vue cli3.0需要在项目根目录下配置webpack  包括反向代理以及打包文件路径
    publicPath: './',
    // eslint-loader 是否在保存的时候检查
    // lintOnSave: false, //关闭eslint
  }