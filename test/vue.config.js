const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: true,
  devServer: {
    proxy: {
      "/service240": {
        target: "http://192.168.1.240:9009/productionOperation",
        ws: false, //代理websockets
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: {
          //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          "^/service240": "",
        },
      },
      "/service161": {
        //这里最好有一个 /
        target: "http://192.168.1.161:9009/productionOperation",
        ws: false, //如果要代理 websockets，配置这个参数
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/service161": "",
        },
      },
      "/service103": {
        target: "http://192.168.1.103:9009/productionOperation",
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/service103": "",
        }
      },
      "/service205": {
        target: "http://192.168.1.205:9009/productionOperation",
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/service205": "",
        }
      },
      "/service232": {
        target: "http://192.168.1.232:9009/productionOperation",
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/service232": "",
        }
      },
      "/management":{
        target:"http://192.168.1.204:9988/management",
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/management": "",
        }
      }
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  chainWebpack(config) {
    config.plugins.delete("prefetch");
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    // set preserveWhitespace
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();

    config.when(process.env.NODE_ENV !== "development", (config) => {
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial", // only package third parties that are initially dependent
          },
          elementUI: {
            name: "chunk-elementUI", // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk("single");
    });
  },
};
