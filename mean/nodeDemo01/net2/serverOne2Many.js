var net = require("net");
var server = net.createServer();

var MyMap = require("./Map.js");
var m = new MyMap();

server
.on("connection",function(sk){

	sk.name = sk.remoteAddress + ":" + sk.remotePort;
	console.log(sk.name);
	sk.write("please input your account :\n");

	sk.on("data",function(chunk){
		var s = chunk.toString().trim();
		if(s.split(":").length == 2){
			var msg = s.split(":")[0].trim();
			var user = s.split(":")[1].trim();
			m.get(user).write(msg);
		}else if(s.split(":").length == 1){
			m.put(s,sk);
			sk.write("hello , " +s);
		}else if(s.split(":").length == 3 && s.split(":")[2]=="all"){
			var msg = s.split(":")[0].trim();
			var user = s.split(":")[1].trim();
			m.get(user).write(msg);
		}
		
		if(s.indexOf("bye") >= 0){
			sk.destroy();
		}
	});
})
.on("close",function(){
	console.log("one chat exit....");
});

server.listen(3002); 