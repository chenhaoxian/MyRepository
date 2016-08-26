var connect = require("connect");

var app = connect();

//中间键
app.use(function(req,res,next){
	console.log("pre......");
	next();
});

//中间键
app.use("/about",function(req,res,next){
	req.uname = "hyman";
	console.log("about pre......");
	// next();

	//权限控制
	// res.end("invalid user...");
	// res.setHeader("Location","/aboutme");
});

// app.use("/aboutme",function(req,res){
// 	res.end("test");
// })

app.use("/about",function(req,res){

	res.end("this is about!" + req.uname);
});

// var uuid = require("node-uuid");
// for(var i=0; i<10;i++){
// 	console.log(uuid.v4);
// }

app.use("/",function(req,res){
	res.end("this is root!");
});



app.listen(3003);