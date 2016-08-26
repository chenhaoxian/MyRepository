const mongoose = require("mongoose");
var User = mongoose.model("user");

exports.findAllUser = function(req,res){

}
exports.addUser = function(req,res){
	var u = new User(req.body);
	u.save(function(err){
		if(!err){
			res.json(u);
		}else{
			res.json({error:"addUser"});
		}
	});
}
exports.loadUser = function(req,res){
	User.findOne({_id:req.params.id},function(err,user){
		res.json(user);
	});
}
exports.updateUser = function(req,res){
	
}
exports.deleteUser = function(req,res){
	
}

