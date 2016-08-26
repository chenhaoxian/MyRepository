var net = require("net");

var socket = new net.Socket();
socket.connect(4445,"127.0.0.1",function(){
	// socket.write("welcome!");
});
socket.on("data",function(chunk){
	console.log(chunk.toString());
});

var readline=require("readline");
var rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

rl.on("line",function(cmd){
	// console.log("Your name is  :"+cmd)
	// socket.write(cmd+"\n");
	socket.write(cmd+"\n");
	if(cmd=="bye"){
		socket.destroy();
		process.exit(0);
	}
});