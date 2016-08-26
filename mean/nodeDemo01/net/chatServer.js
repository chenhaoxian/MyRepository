var net = require("net");
var server = net.createServer();

var MyMap = require("./Map.js");
var m = new MyMap();
// m.put("a","aaa");
// m.put("b","bbb");
// m.put("c","ccc");
clientList = [];


server
.on("connection",function(sk){
	// clientList.push(sk);
	sk.name = sk.remoteAddress + ":" + sk.remotePort;
	console.log(sk.name);
	sk.write("please input your account :\n");

	sk.on("data",function(chunk){
		var s = chunk.toString().trim();
		if(s.split(":").length == 2){
			if(s.split(":")[1] != "all"){
				var msg = s.split(":")[0].trim();
				var user = s.split(":")[1].trim();
				m.get(user).write(msg);
			}else{
				var msg = s.split(":")[0].trim();
				console.log(m.size());
				// m.eachMap().write(msg);
				for(var i=0; i<m.eachMap().length;i++){
					m.eachMap()[i].write(msg);
				}
			}
		}else if(s.split(":").length == 1){
			m.put(s,sk);
			sk.write("hello , " +s);
		}
		
		if(s.indexOf("bye") >= 0){
			sk.destroy();
		}
	});
})
.on("close",function(){
	console.log("one chat exit....");
});

server.listen(4445);