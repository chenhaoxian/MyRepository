const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost:27017/hyman_0818");

var app = express();

var BookSchema = new mongoose.Schema({
	bname:String,
	price:Number
});

var Book = mongoose.model("book",BookSchema);

app.use(session({secret:"abc"}));
app.use(bodyParser.urlencoded());  


app.route("/book")
.get(function(req,res){
	Book.find({},function(err,book){
		console.log(book);
		res.json(book);
		//db.disconnect();
	});
})
.post(function(req,res){
	var o = req.body;
	console.log(o);
	var b = new Book({"bname":o.bname,"price":o.price});
	b.save(function(err){
		res.send("ok");
		//db.disconnect();
	});
	
})
.delete(function(req,res){
	Book.remove({},function(err,book){
		console.log("success");
		//db.disconnect();
	})

})

app.route("/book/:id")
.get(function(req,res){
	var id = req.params.id;
	Book.findById(id,function(err,book){
		res.json(book);
	});
})
.put(function(req,res){
	var id = req.params.id;
	var o = req.body;
	var book = new Book();
	book._id = id;
	book.bname = o.bname;
	book.price = o.price;

	Book.findByIdAndUpdate(book._id,book,function(err,oldBook){
		res.json(book);
	});
	// Book.update({"_id":id},)
})
.delete(function(req,res){
	var id = req.params.id;
	Book.remove({"_id":id},function(err,book){
		console.log("success");
		res.send("ok");
		//db.disconnect();
	})
});


app.listen(3008);