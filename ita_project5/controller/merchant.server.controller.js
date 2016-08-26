const mongoose = require("mongoose");
var Merchant = mongoose.model("merchant");
var Food = mongoose.model("food");

exports.findAllMerchant = function(req,res){
	var page = parseInt(req.query.page);
	var per_page = parseInt(req.query.per_page);
	var type = parseInt(req.query.type);
	if(page == 0){
		res.json(null);
	}else{
		if(type != 0){
			var query=Merchant.find({});
			query.where({"mStatus":1});
			query.limit(per_page);
			query.skip((page-1)*per_page);
			query.exec(function(err,merchants){
				if(!err){
					res.json(merchants);
				}else{
					console.log(err);
					res.json({});
				}
			});
		}else{
			var query=Merchant.find({});
			query.where('mScore').lt(5);
			query.where('mStatus').lt(4);
			query.limit(per_page);
			query.skip((page-1)*per_page);
			query.exec(function(err,merchants){
				if(!err){
					res.json(merchants);
				}else{
					console.log(err);
					res.json({});
				}
			});
		}
	}

}


exports.saveMerchant = function(body){
	var merchant_data = JSON.parse(body);
	console.log(merchant_data);
	var merchant = new Merchant(
		{
			"mId":merchant_data.mId,
			"mPersonName":merchant_data.mPersonName,
			"mTel":merchant_data.mTel,
			"mIdCard" : merchant_data.mIdCard ,
			"mCardPath" : merchant_data.mCardPath,
			"mLocation":merchant_data.mLocation,
			"mBrand" :merchant_data.mBrand,
			"mStatus" : 1,
			"mScore" : 10
		}
	);
	merchant.save(function(err){
		if(err){
			console.log("save merchant error");
		}else{
			console.log("save merchant success");
		}
	})
}

exports.updateMerchantScore = function(body){
	// var mId = parseInt(body.split("#")[0]);
	var mId = body.split("#")[0];
	var score = parseFloat(body.split("#")[1]);
	Merchant.update({"mId":mId},{ $set: { "mScore": score }},function(err,merchant){
		if(!err){
			console.log(merchant);
			res.json(merchant);
		}else{
			res.json(merchant);
		}
	})
}

exports.getAllMerchantStatus = function(req,res){
	Merchant.find({},{_id:0,mStatus:1},function(err,merchant){
		var statusStr = "";
		for(var i=0; i<merchant.length; i++){
			statusStr += (merchant[i].mStatus + ",");
		}
		res.send(statusStr);
	})
}

exports.getMerchantStatus = function(req,res){
	Merchant.find({"mId":req.params.mId},{_id:0,mStatus:1},function(err,merchant){
		if(!err){
			console.log(merchant[0].mStatus);
			res.json(merchant);
		}
	})
}


exports.updateMerchantStatus = function(req,res){
	var mId = req.params.mId;
	var mStatus = req.body.mStatus;
	var query = {"mId":mId};
	Merchant.update(query,{ $set: { "mStatus": mStatus }},function(err,merchant){
		if(!err){
			if(req.body.mStatus == 4){
				Food.remove({"mId":mId},function(err){
					// res.send("success");
					// res.json(merchant);
				});
			}
			res.json(merchant);
		}
	});
}