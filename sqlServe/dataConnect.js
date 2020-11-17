const userApi = require('./Api/userapi.js');
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

/*在http请求种，POST、PUT、PATCH三种请求方法中包含着请求体，也就是所谓的request，
在Nodejs原生的http模块中，请求体是要基于流的方式来接受和解析。
body-parser是一个HTTP请求体解析的中间件，使用这个模块可以解析JSON、Raw、文本、
URL-encoded格式的请求体*/

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// express 允许跨域访问
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
// 后端api路由
app.use('/api',userApi)

app.listen(3000,'localhost')
// console.log(app)
