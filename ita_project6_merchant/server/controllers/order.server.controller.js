const mongoose=require("mongoose");
var Order=mongoose.model("order");
var request = require("request");
var properties = require("../config/properties");
var moment = require('moment');

//--查询历史订单--
exports.findAllOrder=function(req,res){
	var merchant=req.session.merchant;

	Order.find({mId:merchant._id})
	.where({oStatus:{$in:[2,3,4]}})
	.exec(function(err,orders){
	if(!err){
			res.json({data: orders,msg:'SUCCESS'});
		}else{
			res.json({error:'findAllOrder error!'})
		}		
	})
}

//--查询未处理的订单--
exports.findNewOrder=function(req,res){
	var merchant=req.session.merchant;
	Order.find({mId:merchant._id})
	.where({oStatus:1})
	.exec(function(err,orders){
	if(!err){
			console.log(orders);
			res.json({data: orders,msg:'SUCCESS'});
		}else{
			res.json({error:'findNewOrder error!'})
		}		
	})
}

//--接单或者拒绝,修改订单状态--
exports.UpdateOrderStatus=function(req,res){
	var oStatus=req.body.oStatus;
	Order.findOne({_id:req.params.id},function(err,order){
		order.oStatus=oStatus;
		if(oStatus=2){
			order.confirmTime=moment().format();
		}
		else if(oStatus=4){
			order.confirmTime=moment().format();
			order.finishTime=moment().format();
		}
		order.save(function(err){
			console.log(order);
			if(!err){
				res.json({data: order,msg:'SUCCESS'});
			}else{
				res.json({error:"update order error"});
			}
	})		
	})
}


//--查询投诉订单--
exports.findComplaintOrder=function(req,res){
	var merchant=req.session.merchant;
	console.log(merchant._id);
	Order.find({"mId":merchant._id,"complaint":{$nin:[null],$exists:true}},function(err,orders){
		if(!err){
				res.json({data: orders,msg:'SUCCESS'});
			}else{
				console.log(err);
				res.json({error:"findComplaint error"});
			}
	})
	}


//--获取投诉结果，webservice请求A端--
exports.findResult=function(req,res){	
	//console.log("findResult");
	var wsUrl=properties.wsGetOrderResult+req.params.id;
    request(wsUrl, function (err, response, body) {
    var o=JSON.parse(body);
    if(!err){
				res.json({data: o.oStatus,msg:'SUCCESS'});
			}else{
				res.json({error:"findResult error"});
			}
})
}
