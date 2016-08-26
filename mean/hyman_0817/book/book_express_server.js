const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
var uuid = require('node-uuid');  

const HashMap = require("HashMap");
const map = new HashMap();

var app = express();

//=======================init========================
const Book = require("./book.js");
for(var i=1; i<=10;i++){
	var book = new Book(uuid.v4(),"book"+i,i);
	map.set(book.id,book);
	console.log(book.id+"..."+book.bname+"..."+i);
}

app.use(express.static("public"));
app.use(session({secret:"abc"}));
app.use(bodyParser.urlencoded());  


app.route("/book")
.get(function(req,res){
	var allStr = "";
	map.forEach(function(value, key) {
	    allStr += JSON.stringify(value)+"\n";
	});
	res.send(allStr);
})
.post(function(req,res){
	var o = req.body;
	console.log(o.bname);
	var book = new Book(uuid.v4(),o.bname,o.price);
	map.set(book.id,book);
});

app.route("/book/:id")
.get(function(req,res){
	var id = req.params.id;
	// console.log(id);
	// console.log(map.get(id));
	res.json(map.get(id));
});

app.route("/book/get/:id")
.get(function(req,res){
	var id = req.params.id;
	// console.log(id);
	// console.log(map.get(id));
	res.json(map.get(id));
});

app.route("/book/put/:id/:bname/:price")
.get(function(req,res){
	var id = req.params.id;
	var bname = req.params.bname;
	var price = req.params.price;
	// var o = req.body;
	var book = new Book(id,bname,price);
	map.set(id,book);
});

app.route("/book/delete/:id")
.get(function(req,res){
	var id = req.params.id;
	map.remove(id);
});

app.listen(3008);