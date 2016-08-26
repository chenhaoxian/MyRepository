// 建立数据模型，挂到mongoose的model上
const mongoose = require("mongoose");

var FoodSchema = new mongoose.Schema({
	fId : String,
	fName : String ,
	mId : String,
	fViewPath : String,
	fStatus : Number
});

mongoose.model("food",FoodSchema);