// var net = require("net");
// var readline = require("readline");
// // var rl = readline.createInterface({
// // 	input: process.stdin,
// // 	output:process.stdout
// // });
// // rl.on("line",function(cmd){
// // 	console.log("your type is : "+ cmd);
// // });


// var socket = new  net.Socket();
// socket.connect(4445,"127.0.0.1",function(){
// 	socket.write("I am hyman\n");
// });

// //注册data数据的回调函数
// socket.on("data",function(chunk){
// 	console.log(chunk.toString());
// });

// var rl = readline.createInterface({
// 	input: process.stdin,
// 	output:process.stdout
// });
// rl.on("line",function(cmd){
// 	// console.log("your type is : "+ cmd);
// 	if(cmd == "bye"){
// 		socket.destroy();
// 		process.exit(0);
// 	} 
// });


var net=require("net");
var socket=new net.Socket();

socket.connect(4444,"127.0.0.1",function(){
socket.write("I am vicky\n");//网络耗时,连接上以后马上回调
});
//接收
//socket.setDefaultEncoding("utf8;//转码
socket.on(data,function(chunk){
console.log(chunk.toString());
}) //注册data事件的回调函数，给socket注册，socket是eventmitt对象

// //?执行顺序？？？？
// //
// //var net=require(net);
var readline=require(readline);
var rl=readline.createInterface({
input:process.stdin,
output:process.stdout
});
rl.on('line',function(cmd){
//console.log(Your name is+cmd)
socket.write(cmd+\n);
if(cmd==bye){
socket.destroy();
process.exit(0);
}
});


