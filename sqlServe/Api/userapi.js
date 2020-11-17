const sqlinfo = require('../sqldb.js');
const express = require('express')
// express()
const mysql = require('mysql')
const router = express.Router()

let con = mysql.createConnection(sqlinfo.mysql)

con.connect();

let jsonData = (res,data)=>{
	if(typeof data ==='undefined'){
		res.json({
			code:'1',
			msg:"操作失败"
		})
	}else{
		res.json(data)
	}
}

router.get('/selectUser',(req,res)=>{
	let database = req.query.base||"user"
	let selectUser = "select * from user"
	// 请求查询如果带参数的话
	if(req.query.id){
		let id = req.query.id
		selectUser = "select * from "+database+" where id = "+ id +"";
	}
	console.log(selectUser)
	// res.append('Access-Control-Allow-Origin','*')
	// res.append('Access-Control-Allow-Content-Type','*')
	con.query(selectUser,function(err,result){
		if(err){
			console.log('数据库连接失败：'+err.message)
		}
		jsonData(res,result)
	})
})
router.post('/adduser',(req,res)=>{
	
})
module.exports=router