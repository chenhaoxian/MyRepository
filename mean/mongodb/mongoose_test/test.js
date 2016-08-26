var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost:27017/oocl01");

var UserSchema = new mongoose.Schema({
	uname:String,
	age:Number
});

var User = mongoose.model("users",UserSchema);

// var u = new User({uname:"Hyman",age:100});
// u.save(function(err){
// 	db.disconnect();
// });

// User.find({},function(err,users){
// 	console.log(users);
// 	db.disconnect();
// })

// User.find({uname:"Hyman"},function(err,users){
// 	console.log(users);
// 	db.disconnect();
// })

// User.findOne({uname:"Hyman"},function(err,users){
// 	console.log(users);
// 	db.disconnect();
// })

// User.find({age:{$gt:9}},"uname age -_id",function(err,users){
// 	console.log(users);
// 	db.disconnect();
// })

// User.find({},function(err,users){
// 	{}
// 	console.log(users);
// 	db.disconnect();
// })

// User.find({})
// .where("age").gte(9)
// .sort("age")
// .exec(function(err,users){
// 	console.log(users);
// 	db.disconnect();
// })


//==============================update
//way1
// User.findOne({_id:"57b554dbb5520d0aa0cf6f25"},function(err,user){
// 	user.uname= "tom";
// 	user.save(function(){
// 		db.disconnect();
// 	})
// })

//way2
// var u = new User();
// u._id = "57b554dbb5520d0aa0cf6f25";
// u.uname = "kobe";
// u.age = 23;

// User.findByIdAndUpdate(u._id,u,function(err,oldUser){
// 	console.log(oldUser);
// 	db.disconnect();
// });

//==========================remove====
var uid = "57b554dbb5520d0aa0cf6f25";
User.findOne({"_id":uid})
.exec(function(err,user){
	console.log(user);
	user.remove(function(err){
		db.disconnect();
	})
})