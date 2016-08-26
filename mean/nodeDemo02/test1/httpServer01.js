// var http = require("http");

// var server = http.createServer();

// server.on("request",function(req,res){
// 	res.write("I am Server .");
// 	res.end("end..");
// });

// server.listen(3000,function(){
// 	console.log("server start...");
// });

//============================================================
// var http = require("http");

// var server = http.createServer();

// server.on("request",function(req,res){
// 	res.setHeader("Content-Type","application/json");
// 	// res.writeHeader(200, {"Set-Cookie": "text/html"});
// 	// res.writeHead({"Action":"hyman","xx":"tttt"});
// 	res.statusCode = 302;
// 	res.setHeader("Location","http://www.baidu.com");
// 	res.write("I am Server .");
// 	res.end("end..");
// });

// server.listen(3000,function(){
// 	console.log("server start...");
// });


//=======================================================
// var http = require("http");

// var server = http.createServer();

// server.on("request",function(req,res){
// 	var method = req.method;
// 	var rline = req.url;
// 	console.log(rline);
// 	var fs = require("fs");//引包  引模块
// 	var fns = fs.read("."+rline);
// 	console.log(fns);
// 	res.write(fns);
// 	// var headers = req.headers;
// 	// req.on("data",function(chunk){
// 	// 	console.log(chunk.toString());
// 	// })
// 	// res.write(method+"...........\n");
// 	// res.write(rline+"...........\n");
// 	// res.write(JSON.stringify(headers));

// });

// server.listen(3000,function(){
// 	console.log("server start...");
// });


//============================================================
const http = require("http");
const url=require("url");
const start =  __dirname  + "/public";
const fs = require("fs");
var server = http.createServer();

server.on("request",function(req,res){
	var l =req.url;
	var fpath = url.parse(l).pathname;
	fpath = start + "/" + fpath;
	console.log(fpath);
	fs.createReadStream(fpath).pipe(res);
});

server.listen(3000,function(){
	console.log("server start...");
});