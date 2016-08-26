const mongoose = require("mongoose");
var User = mongoose.model("user");

// var jms = require("../config/jms");
// var queue = require('../config/properties')
//
// exports.testJMS = function (req,res) {
// 	jms.connect(function(sessionId) {
// 		jms.publish(queue.registerDestination, 'Oh herrow');
// 	});
// }



exports.findAllUser = function(req,res){
	User.find(function(err,users){
		if(!err){
			res.json({data: users,msg:'SUCCESS'});
		}else{
			res.json({error:'findAllUser error!'})
		}
	})

}

exports.addUser = function(req,res){
	var u = new User(req.body);
	u.save(function(err){
		if(!err){
			res.json({data:u,msg:'SUCCESS'})
			// res.json(u);
		}else{
			res.json({error:"addUser error"});
		}
	})
}


exports.deleteUser = function(req,res){
	User.remove({_id:req.params.id},function(err){
		if(!err){
			res.json({msg:'SUCCESS'});
		}else{
			res.json({error:"delete user error"});
		}
	})
}


exports.loadUser = function(req,res){
	User.findOne({_id:req.params.id},function(err,user){
		res.json(user);
	})

}

exports.updateUser = function(req,res){
	User.findByIdAndUpdate(req.params.id,req.body,function(err,oldUser){
		req.body.id = req.params.id;
		// res.json(req.body);
		User.find({},function (err,u) {
			if(!err){
				res.json({data: u,msg:'SUCCESS'});
			}else{
				res.json({error:"update user error"});
			}
		})
	})

}


