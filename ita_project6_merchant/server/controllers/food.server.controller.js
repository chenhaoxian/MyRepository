const mongoose=require("mongoose");
var Food=mongoose.model("food");
var JMS=require("../jms/jms.js");
var foodImg =  require("../config/uploadImg");

//--查看当前商家的所有菜品信息--
exports.findFood=function(req,res){
	var merchant = req.session.merchant;
	console.log(merchant);
	Food.find({mId:merchant._id},function(err,foods){
		if(!err){
			res.json({data:foods,msg:'SUCCESS'})
		}else{
			res.json({error:"addFood error"});
		}
	})
}

//--添加菜品--
exports.addFood=function(req,res){
	var f = new Food(req.body);
	var fileName = req.files.file.path;
	var name = fileName.substring(fileName.lastIndexOf("\\") + 1,fileName.length);
	f.fViewPath = name;
	f.fStatus = 1;
	f.mId = req.session.merchant._id;

	f.save(function(err){
		if(!err){
			foodImg.saveImage(name,req.files.file.path);
			res.json({data:f,msg:'SUCCESS'})
		}else{
			res.json({error:"addFood error"});
		}
	})
}

//--菜品下架--
exports.deleteFood=function(req,res){
	Food.remove({_id:req.params.id},function(err){
		if(!err){
			res.json({msg:'SUCCESS'});
		}else{
			res.json({error:"delete food error"});
		}
	})
}

//--菜品推荐，通过JMS将菜品信息发送到A端--jms--
exports.pushFood=function(req,res){
	Food.findOne({_id:req.params.id},function(err,food){
		food.fStatus=2;
		food.save(function(err){
			console.log("WS Food");
			var f={};
			f.fId=food._id;
			f.fName=food.fName;
			f.mId=food.mId;
			f.fViewPath=food.fViewPath;
			console.log(f);
			JMS.send(JSON.stringify(f));
			if(!err){
				res.json({msg:'SUCCESS'});
			}else{
				res.json({error:"update food error"});
			}
		})
	})
}

