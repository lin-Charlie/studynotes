const http = require("http");
const url = require("url");
const fs = require("fs");

/*===================================================================*/
/*
const routes = require("./tools");
//注册服务器
routes.static(req, res, "make");
// 配置、启动路由
let pathname = url.parse(req.url).pathname;
routes[pathname](req, res);
*/
/*===================================================================*/
/*
const app = require("./tools");
//ejs模块 后端数据渲染
const ejs = require("ejs");
//注册服务器
http.createServer(app).listen(8000);
// 配置路由
app.get("/", (req, res) => {
  res.writeHead(200, { "Content-type": 'text/html;charset="utf-8' });
  res.end("首页");
});

app.get("/news", (req, res) => {
  res.writeHead(200, { "Content-type": 'text/html;charset="utf-8' });
  res.end("news");
});

app.get("/login", (req, res) => {
  ejs.renderFile("../view/form.ejs", {}, (err, data) => {
    res.writeHead(200, { "Content-type": 'text/html;charset="utf-8' });
    res.end(data);
  });
});

app.post("/dologin", (req, res) => {
  console.log(req.body);
  res.writeHead(200, { "Content-type": 'text/html;charset="utf-8' });
  res.end(req.body);
});
*/
/*===================================================================*/
//引入mongodb
const { MongoClient } = require("mongodb");
// 定义地址
const geturl = "mongodb://127.0.0.1:27017";
// 定义数据库
const dbname = "webdata";
// 实例化MongoClient,传入地址
const client = new MongoClient(geturl, { useUnifiedTopology: true });
/*连接数据库的第二种方法
  MongoClient.connect(geturl, { useUnifiedTopology: true }, 
  (err, client) => {});*/
// 连接数据库
client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("111");

  let db = client.db(dbname);
  // 查找数据
  db.collection("user")
    .find({ age: 21 })
    .toArray((err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
      client.close();
    });
  /*
    // 添加数据
  db.collection("user").insertOne({ name: "lin1", age: 21 }, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    client.close();
  });

  // 修改数据
  db.collection("user").updateOne({}, {}, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
  // 删除数据 deleteMany 多条数据
  db.collection("user").deleteOne({},(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
  // 操作完成后关闭数据库
  client.close();
  */
});
