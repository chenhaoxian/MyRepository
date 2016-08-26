/**
 * Created by CHENHY on 8/24/2016.
 */

const mongoose = require("mongoose");
var Merchant = mongoose.model("merchant");
var Food = mongoose.model("food");
var Order = mongoose.model("order");
var request = require("request");

exports.getMerchantById = function (req, res) {
    Merchant.findOne({"mId":req.params.mId},function (err, merchant) {
        if(!err){
            res.json(merchant);
        }else{
            console.log(err);
            res.json(null);
        }
    })
}

exports.getPassMerchant = function (req, res) {
    Merchant.find({"mStatus":req.query.mStatus},function (err, merchants) {
        if(!err){
            res.json(merchants);
        }else{
            res.json(null);
        }
    })
}

exports.getPassFood = function (req, res) {
    Food.find({"fStatus":req.query.fStatus},function (err, foods) {
        if(!err){
            res.json(foods);
        }else{
            res.json(null);
        }
    })
}

exports.getOrderDetails = function(req,res){
    request("http://10.222.232.157:8888/ws/order/"+req.params.oId, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var order_data = JSON.parse(body);
            res.json(order_data);
        }
    })
}

exports.getOrderById = function (req, res) {
    var oId = req.params.oId;
    Order.findOne({"oId":oId},function(err,order){
        if(!err){
            res.json(order);
        }else{
            res.json(null);
        }
    })
}