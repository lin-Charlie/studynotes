const path = require('path')

let strPath = 'https://www.mi.com/service/newsdata/1.html'
let arr = ['/www.baidu.com','qiandan','vue']

let info = path.dirname(strPath)
// 拼接字段  path.resolve(...arr)
let info1 = path.join(__dirname,...arr)

// console.log(path)
console.log(info,info1)
/*==========================================================================*/
const os = require('os')
console.log(os.cpus())//获取操作系统的cpu数据
console.log(os.totalmem())//获取操作系统的内存数据
/*==========================================================================*/
//__dirname:获取当前执行文件的目录
//__filename:获取当前执行文件
