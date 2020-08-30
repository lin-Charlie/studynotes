// function formApi(api) {
//   return "htttp:/" + api;
// }
// exports.formApi = formApi;
/*======================================================================*/
// 封装静态服务器和路由 routes
function demo1() {
  const url = require("url");
  const path = require("path");
  const fs = require("fs");

  let routes = {
    //获取静态网页资源
    static: (req, res, staticPath) => {
      // 获取请求的网页名称
      let pathname = url.parse(req.url).pathname;
      // 获取网页名称的后缀
      let extname = path.extname(pathname);
      // 根据后缀取得对应的请求格式 异步操作应该有问题（async await）
      function getFileName(extname) {
        return new Promise((resolve, reject) => {
          fs.readFile("./name.txt", (err, data) => {
            let type = JSON.parse(data.toString());
            resolve(type.extname);
          });
        });
      }
      // 获取返回的请求格式数据
      let filename = getFileName(extname);
      // 获取静态网页文件
      let data = fs.readFileSync("./" + staticPath + pathname);
      res.writeHead(200, {
        // 显示请求格式
        "Content-type": "" + filename + ';charset = "utf-8"',
      });
      // 显示网页
      res.end(data);
    },
    // 路由设置
    login: (req, res) => {
      //执行登录
      res.end();
    },
    news: (req, res) => {
      // 新闻界面
      res.end();
    },
    resgin: (req, res) => {
      // 注册界面
      res.end();
    },
  };
  return routes;
}
//module.exports = demo1();
/*======================================================================*/
//类似express的路由封装 app
function demo2() {
  const url = require("url");
  const { request } = require("http");

  let obj = {};
  // 区分get和post对象
  obj._get = {};
  obj._post = {};
  let app = function (req, res) {
    let pathname = url.parse(req.url).pathname;
    let method = req.method.toLowerCase(); //获取请求方法
    if (obj["_" + method][pathname]) {
      if (method == "get") {
        obj._get[pathname](req, res);
      } else {
        //获取post传来的值
        let postData = "";
        req.on("data", (statdata) => {
          postData += statdata;
        });
        // 将值绑定到req.body上
        req.on("end", () => {
          req.body = postData;
          console.log(req.body);
          // 执行
          obj._post[pathname](req, res);
        });
      }
    }
  };

  app.get = function (str, func) {
    obj._get[str] = func;
  };
  app.post = function (str, func) {
    obj._post[str] = func;
  };
  return app;
}

module.exports = demo2();

/*======================================================================*/
/*======================================================================*/
/*======================================================================*/
