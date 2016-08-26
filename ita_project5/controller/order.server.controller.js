const mongoose = require("mongoose");
var Order = mongoose.model("order");
var Merchant = mongoose.model("merchant");
var Food = mongoose.model("food");
var request = require('request');
var common = require("../config/common.js");


exports.findAllOrder = function(req,res){
	var page = parseInt(req.query.page);
	var per_page = parseInt(req.query.per_page);
	if(page==0){
		res.json(null);
	}else{
		var query=Order.find({});
		query.where({"oStatus":1});
		query.limit(4);
		query.skip((page-1)*4);
		query.exec(function(err,orders){
			if(!err){
				res.json(orders);
			}else{
				res.json(null);
			}
		});
	}
}


exports.saveOrder = function(body){
	var oId = body.split("#")[0];
	var mBrand = body.split("#")[1];
	var order = new Order(
			{
				"oId" : oId,
				"mBrand" : mBrand,
				"oStatus" : 1
			}
		);
	order.save(function(err){
		if(err){
			console.log("save order error");
		}else{
			console.log("save order success");
		}
	})
}

exports.getOrderDetails = function(req,res){
	request(common.urlToGetOrderDetail+req.params.oId, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    var order_data = JSON.parse(body);
	    res.json(order_data);
	  }
	})
}


exports.updateOrderStatus = function(req,res){
	console.log("------------------");
	var oId = req.params.oId;
	var status = req.body.oStatus;
	var query = {"oId":oId};
	Order.update(query,{ $set: { "oStatus": status }},function(err,order){
		if(status == 4){
			var mId = req.body.mId;
			var query1 = {"mId":mId};
			Merchant.update(query1,{ $set: { mStatus: 4 }},function(err,merchant){
				Food.remove({"mId":mId},function(err){
					// res.json(order);
				})
			});
		}
		res.json(order);
	});
}

