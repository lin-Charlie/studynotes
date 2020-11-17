_nodejs_
服务器端的程序语言
单进程单线程应用程序
能够接收和处理网络请求
事件驱动、异步执行提高 IO 的处理速度和效率
_特点：_ 1.事件驱动 2.非阻塞 i/o 模型(异步) 3.轻量和高效
_事件驱动_
node 本身提供了事件对象帮助我们快速订阅者模式/观察者模式
[事件订阅]
event.on()
[事件触发]
event.emit()
===================================================================
_express_
npm install -S express
[express 应用程序生成器]
npm install -S express-generator
[新建项目]
express --view=ejs 项目名称
[public:存放静态资源
routes：路由操作
views：存放 ejs 模板引擎
app.js：主文件]
[启动项目]
SET DEBUG=项目名称:\* & npm start
_=================================================================_
_express_
const app = express();
[请求方式：]
get\post\put(主要修改数据)\delete(主要删除数据)
[动态路由] "/xx/:id" (:id)任意值需要 req.params["id"]获取请求值
express 使用 ejs
app.set("view engine","ejs") 配置模板引擎

let username = "xxx" 模拟从数据库获取的数据
res.render("index",{
username:username 将数据渲染到页面上
}) 使用，默认渲染路径 view

app.set("view",**dirname+"/views") 指定模板位置
修改文件后缀名为 html
app.engine("html",ejs.**express) 配置后缀
app.set("view engine","html") 修改引擎为 html

app.use(express.static("/xxx/xx")) 配置静态文件托管
app.listen(3000)
===================================================================
_协议栈：_
通信需要多层上的多种协议，这些协议按照层次顺序组合在一起构成协议栈/协议族
_协议作用：_
建立对等层之间的虚拟通信
实现层次之间的无关性
_B/S C/S 模式_
Browser/Server 浏览器看抖音
Client/Server APP 看抖音
_ajax 的不同写法_
ES5：getAjax(url,(res)=>{})
Promise:
return new Promise((resolve,reject)=>{
\$.get(url)
}).then((res)=>{})
async_await:
async ()=>{
let data = await get(url)
}
=================================================================

_HTTP 模块_
var http = require("http");
request：获取 url 传来的信息
response：给浏览器响应信息

http.createServer(function (request, response) {
console.log(request.url); //获取 url
[(200, { "Content-Type": "text/html;charset='utf-8'"});//设置响应头、状态码、文件类型 html、字符集 utf-8]
response.writeHead(200, { "Content-Type": "text/plain" });
response.write(); //页面输出
response.write('<head><meta charset="UTF-8"></head>'); //解决页面显示乱码
response.end("Hello World");//结束响应
})
.listen(8081);

_path 模块_
path.extname() 获取后缀名
=================================================================
_url 模块使用_
const url = require('url')
url.parse('http://xxxxxxxxxxxxx'，true)//解析网址
//自定义模块
通过 exports.自定义属性名=要暴露的方法和属性名||module.exports=
(单个方法建议 exports，对象建议 module.exports)
暴露方法和属性，才能让其他引用
通过 require 的方式引入封装的模块
可以使用暴露的方法和属性
=================================================================
_npm 命令_
npm init --yes 生成配置信息 (package.json 文件) 项目目录里运行
npm install module name --save 保存安装包依赖 dependencies{'依赖包的信息'}
npm uninstall module name
npm list 已安装包列表
npm info 安装包信息
npm install module name@1.1.1 指定安装版本
=================================================================
_fs 模块_ (err,data)=>{}不是非要写 注意 fs 里的方法是异步的
fs.stat('',(errr,data)=>{data.isFile()/data.isDirectory}) 检测文件还是目录
fs.mkdir('',()=>{}) 创建目录
fs.writeFile('','写入内容',()=>{}) 创建写入文件
fs.appendFile('filename','content',()=>{}) 追加文件
fs.readFile('filename',(err,data)=>{}) 读取文件
fs.readdir('dirname',(err,data)=>{})
fs.rename('oldPath','newPath',callback) 1.重命名/2.移动文件
fs.rmdir() 删除目录 空目录
fs.unlink() 删除文件 \*/

var readStream = fs.createReadStream('filePath') 以流的方式读取文件
readStream.on('data',(data)=>{}) 监听读取状态
readStream.on('end',()=>{console.log(data)}) 结束读取时
readStream.on('error',(err)=>{console.log(err)}) 监听错误

var writeStream = fs.createWriteStream('filePath') 以流的方式写入文件
writeStream.write(data) 写入数据
writeStream.end() 标记文件末尾 写了才能运行下面的 finish
writeStream.on('finish',()=>{console.log('写入完成')}) 需要 end 触发

_管道流 流的复制_
var readStream = fs.createReadStream('filePath')
var writeStream = fs.createWriteStream('filePath')
readStream.pipe(writeStream)
console.log('复制完成')
=================================================================
_promise 和 async await_
//var p = new Promise(function (resolve, reject) {});
//p.then(function () {},function () {});

// async function test(){
// return new Promise(function(){})
// }
// async function main(){
// var data = await test(); await 必须在异步函数中使用
// console.log(data);
// }
=================================================================
_ejs 模块_
ejs.readFile('path',{},(err,data)=>{})*/
/*获取 get 传值
var getValue = url.parse(req.url,true).query
consolve.log(getValue.page)

获取 post 传值
let postData = '';
流的方式读取
req.on('data',(stat)=>{
postData += stat;
})
req.on('end',()=>{
postData = JSON.parse(postData)
})

=================================================================
/_MongoDB_/
/\*
show.dbs 显示数据库
use dataname 切换数据库(也是新增一个数据库，但必须给数据库中添加一条数据)
show.collections 显示集合(mysql 叫表)
db.集合名(表名).insert({"":"","age":20}) 添加数据 JSON 格式
db.集合名(表名).find() 显示集合里的数据
find({"name":"xxx","age":20})指定查询
{"age":{$gt:20}} 大于20 $gte 等于
{"age":{$lt:20}} 小于20 $lte 等于
{"age":{$gte:20 $lte:24}} 大于=20 并且小于=24
{"name":/mongo/} name 中包含 mongo /^mongo/开头
({},{name:1}) 指定列 /{},{age:1}
find(xxxx).sort({"age":1}) 升序 -1 降序
find(xxxx).count() 统计
find(xxxx).limt(5) 前 5 条数据 .skip(6) 6 条以后数据
($or:[{"name":"xxx"},{"name":"xxxx"}]) 或者
db.集合名(表名).drop(); 删除集合 
db.dropDatabase() 当前数据所在数据库
db.集合名(表名).remove({条件}) 删除某条数据
            .remove({条件}，{justOne:true})只删除一条
db.集合名(表名).update({"":""},{$set:{"":""}})前面是条件，后面是修改(添加)的数据
注意：不包含$set关键字则完整替换
db.集合名(表名).update({"":""},{$set:{"":""}},{multi:true})批量修改
\*/

_索引 查询时间变短_
db.集合名(表名).ensureIndex({"添加索引的字段":1})设置索引 1:排序方式(-1)
.ensureIndex({"添加索引的字段":1,"age":1})复合索引
(注意：只以后面字段查询不会命中索引，以前面或复合则能命中索引
在使用复合索引时就需要将前 n 个索引一起写上)
.ensureIndex({"添加索引的字段":1},{"name":""})指定索引名称
db.集合名(表名).getIndex() 获取索引集合
db.集合名(表名).dropIndex({"添加索引的字段":1}) 删除索引
db.集合名(表名).ensureIndex({"age":1},{"unique":true})唯一索引

_创建超级用户_
use admin
db.creatUser({
user:'admin',
pwd:'123456'
roles:[{role:'root',db:'admin'}]
})
其他库创建其他用户
use webdata
db.creatUser({
user:'webadmin',
pwd:'123456'
roles:[{role:'dbOwner',db:'webdata'}]
})
配置
security:
authorization:enabled
连接
mongo admin -u xxx -p xxx
show users 查看用户
db.dropUser("username") 删除用户
db.updataUser("username"，{pwd,"123xxx"})
db.auth("username","pwd") 验证

_聚合管道_
db.集合名(表名).aggregate([{$match:{'name':""}},{$group:{}}])
管道操作符：
$project  增加、删除、重命名字段 :{"":1} 只显示列
$match 条件匹配，满足条件才进入下一阶段
$limit  限制结果数量
$skip 跳过文档数量
$sort   条件排序
$group 条件组合结果 统计
\$lookup:{} 引入其他集合(表)的数据
{from:"集合名(表名)",
localFiled:"",
foreignFiled:"",
as:"items" 关联表数据所存位置
}

_=================================================================_
[数据的动态显示]
req.query 获取 get 传值
app.set("view engine","ejs") 配置模板引擎

let username = "xxx" 模拟从数据库获取的数据
res.render("index",{
username:username 将数据渲染到页面上
}) 使用，默认渲染路径 view

动态页面显示数据----绑定数据

<p><%=username.name%>--<%=age%></p>
<%if(){%>
处理语句 js语法
<%}%>
<h2><%-xxxx%></h2> 可以不解析 html标签
<%- include("ejs文件")%> 引入其他模板文件

_=================================================================_
_中间件_
应用级中间件 (权限判断)
app.user((req,res,next)=>{//匹配所有路由
next();//匹配完成仍然向下匹配
})
路由级中间件*/
错误处理中间件(路由匹配完成后)
app.user((req,res,next)=>{
res.status(404).send("404")
})
/*内置中间件*/
app.use(express.static("/xxx/xx"))
/*第三方中间件*/
body-parse 中间件---获取 post 数据
/*=================================================================*/
const cookie = require("cookie-parser")
/*配置 cookie 中间件*/
app.use(cookie())
// 设置 cookie
res.cookie("name","value",{maxAge:1000*60\*60,path})
//maxAge 过期时间 path 设置哪些路由访问 cookie domain 多个域名共享
// 获取 cookie
let data = req.cookies.name

_=================================================================_
