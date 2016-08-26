// 建立数据模型，挂到mongoose的model上
const mongoose = require("mongoose");

var OrderSchema = new mongoose.Schema({
	oId : String,
	mBrand : String,
	oStatus : Number
});

mongoose.model("order",OrderSchema);
