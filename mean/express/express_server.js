const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

var app = express();

//  ========================================static
app.use(express.static("public"));
app.use(session({secret:"abc"}));
app.use(bodyParser.urlencoded());  //表单数据


app.get("/",function(req,res){
	req.session.uname = "hyman";
	res.send("root");
});

app.all("/about",function(req,res,next){
	// res.write("about all");
	console.log("about all");
	next();
});

app.get("/about",function(req,res){
	res.send("about get" +req.session.uname);
});
app.post("/about",function(req,res){
	var o = req.body;
	res.json(o)
	// res.send("about post");
	// res.json(o);
});

//============================================!!!!!!!!!!!!!!!!!!!!!!!!
app.get("/find",function(req,res){
	var o = {uname:"hyman",age:100};
	res.jsonp(o);
})

//======================file 
app.get("/dl",function(req,res){
	res.download("./ttt.data");
})

//================
app.route("/book")
.post(function(req,res){

});
// .get(function(req,res){

// })


//get url data 
app.route("/book/:id")
.get(function(req,res){
	var id = req.params.id;
	res.send("id:"+id);
});

//?bname=a&price=100
app.get("/boo",function(req,res){
	var q = req.query;
	res.json(q);
})












app.listen(3005);