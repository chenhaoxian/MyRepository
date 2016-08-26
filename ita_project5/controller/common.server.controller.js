const mongoose = require("mongoose");
var Merchant = mongoose.model("merchant");
var Food = mongoose.model("food");

exports.getAllTel = function(req,res){
	console.log("------");
	Merchant.find({"mStatus":{$in:[2,4]}},{_id:0,mTel:1},function(err,merchants){
		if(!err){
			console.log(merchants);
			res.json(merchants);
		}else{
			res.json(null);
		}
	})
}

exports.searchMerchant = function(req,res){
	var mTel = req.params.tel;
	console.log(mTel);
	Merchant.findOne({"mTel":mTel,"mStatus":{$in:[2,4]}},function(err,merchant){
		console.log(merchant);
		res.json(merchant);
	})
}

exports.updateMerchant = function(req,res){
	var mStatus = req.body.mStatus;
	Merchant.update({"mId":req.params.mId},{ $set: { "mStatus": mStatus }},function(err,merchant){
		if(mStatus == 4){
			Food.remove({"mId":req.params.mId},function(err){
				// res.send("success");
				res.json(merchant);
			})
		}else{
			res.json(merchant);
		}
	});
}

