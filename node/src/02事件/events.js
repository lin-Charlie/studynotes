// 事件在node中的应用
let fs = require('fs')
var events = require('events')
let e = new events.EventEmitter()
// 绑定事件（订阅）
e.on('hello',(data)=>{
    console.log(data)
})
// 同步操作
fs.readFile('text.txt',{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
        // 添加自定义事件
        data = `同步事件操作：${data}`
        // 事件触发
        e.emit('hello',data)
    }
})

// 异步操作
function lcReadFile(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,{encoding:"utf-8"},(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

lcReadFile('text.txt').then((data)=>{
    data = `异步事件操作：${data}`
    e.emit('hello',data)
})