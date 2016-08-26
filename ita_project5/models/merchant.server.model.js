// 建立数据模型，挂到mongoose的model上
const mongoose = require("mongoose");

var MerchantSchema = new mongoose.Schema({
	mId:String,
	mPersonName:String,
	mTel:String,
	mIdCard : String ,
	mCardPath : String,
	mLocation:String,
	mBrand :String,
	mStatus : Number,
	mScore : Number
});

mongoose.model("merchant",MerchantSchema);
