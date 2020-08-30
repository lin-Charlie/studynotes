const http = require("http");
const { MongoDB } = require("mongodb");
const getUrl = "http:/127.0.0.1:27017";
const dbname = "vuebase";
const url = require("url");
const { resolve } = require("path");
const { rejects } = require("assert");

http.createServer().listen(3000);

var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World");
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");

const client = new MongoDB(
  getUrl,
  { useUnifiedTopology: true },
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    let db = client.db(dbname);
    db.collection("user")
      .find()
      .toArray(async (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        return new Promise((resolve, reject) => {
          if (reject) {
            console.log(reject);
            return;
          }
          resolve(data);
        });
        const { data } = await data;
      });
  }
);
