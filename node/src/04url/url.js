const url = require('url')

let httpUrl = 'https://www.mi.com/buy/detail?product_id=12609'
let dataUrl = url.parse(httpUrl)
url.resolve(str1,str2)//URL拼接

console.log(dataUrl)