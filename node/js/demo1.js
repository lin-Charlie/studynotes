const fs = require("fs");
const { dirname } = require("path");
/*=================================================================*/
//创建目录，有则不操作
// let path = "./make";
// fs.stat(path, (err, stat) => {
//   if (err) {
//     fs.mkdir(path, (err) => {
//       console.log(err);
//     });
//     return;
//   }
//   if (stat.isDirectory()) {
//     console.log(222);
//   } else {
//     fs.mkdir(path, (err) => {
//       console.log(111);
//     });
//   }
// });
/*=================================================================*/
// 输出文件夹下的目录
var path = "../make";
var dirArr = [];
// fs.readdir(path, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   (function getDir(i) {
//     if (i == data.length) {
//       console.log(dirArr);
//       return;
//     }
//     fs.stat(path + "/" + data[i], (err, stat) => {
//       if (stat.isDirectory()) {
//         console.log(data[i]);
//         dirArr.push(data[i]);
//       }
//       getDir(i + 1);
//     });
//   })(0);
// });
/*async await版本*/
// async function isDir(fileName) {
//   return new Promise((resolve, reject) => {
//     fs.stat(fileName, (err, data) => {
//       if (err) {
//         console.log(err);
//         reject(err);
//         return;
//       }
//       if (data.isDirectory()) {
//         resolve(true);
//       } else {
//         resolve(false);
//       }
//     });
//   });
// }

// function main() {
//   fs.readdir(path, async (err, stat) => {
//     for (var i = 0; i < stat.length; i++) {
//       if (await isDir(path + "/" + stat[i])) {
//         dirArr.push(stat[i]);
//       }
//     }
//     console.log(dirArr);
//   });
// }
// main();
/*=================================================================*/
var data = "";
for (var i = 0; i < 20; i++) {
  data += "111213\n";
}
var writeStream = fs.createWriteStream("../make/123.txt");
writeStream.write(data);
writeStream.end();
writeStream.on("finish", () => {
  console.log("写入完成");
});
/*=================================================================*/
/*=================================================================*/
/*=================================================================*/
/*=================================================================*/
