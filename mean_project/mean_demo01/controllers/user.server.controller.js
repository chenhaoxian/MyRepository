const mongoose = require("mongoose");
var User = mongoose.model("user");

exports.findAllUser = function(req,res){
	User.find(function(err,users){
		res.json(users);
	});
}
exports.addUser = function(req,res){
	var u = new User(req.body);
	console.log(u);
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
	User.findByIdAndUpdate(req.params.id,req.body,function(err,oldUser){
		req.body.id=req.params.id;
		res.json(req.body);
	});
}
exports.deleteUser = function(req,res){
	User.remove({_id:req.params.id},function(err){
		if(!err){
			res.json({});
		}else{
			res.json({error:"deleteUser"});
		}
	})
}

exports.goTemp = function (req,res) {
	var title = "hyman";
	res.render("template",{title:title});
}

exports.testSave = function (req, res) {
	var u = new User(req.body);
	u.setPassword(req.body.password);
	var jj = u.validPassword("ttt");
	console.log(jj);
	u.save(function(err){
		if(!err){
			res.json(u);
		}else{
			res.json({error:"addUser"});
		}
	});
}

exports.checkPassword = function (req, res) {
	var u = new User();
	var jj = u.validPassword("ttt");
	console.log(jj);
}

