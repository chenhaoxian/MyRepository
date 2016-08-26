const http = require("http");
const url=require("url");
const start =  __dirname + "/public";
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