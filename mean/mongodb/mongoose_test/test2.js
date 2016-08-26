var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost:27017/oocl02");

var DepartSchema = new mongoose.Schema({
	dname:String
});
var Depart = mongoose.model("depart",DepartSchema);

var UserSchema = new mongoose.Schema({
	uname:String,
	depart:{type:mongoose.Schema.Types.ObjectId,ref:"depart"}
});

var User = mongoose.model("users",UserSchema);

var depart = new Depart({
	dname:"IT"
});
// depart.save(function(err){
// 	var user = new User();
// 	user.uname = "hyman";
// 	user.depart = depart;
// 	user.save(function(err){
// 		db.disconnect();
// 	})
// })

User.findOne({uname:"hyman"})
.populate("depart")
.exec(function(err,user){
	console.log(user);
	db.disconnect();
})