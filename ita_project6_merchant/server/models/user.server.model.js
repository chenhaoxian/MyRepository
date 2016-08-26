//建立数据模型，挂到mongoose的model上

const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	uname:String,
	age:Number
});

mongoose.model("user",UserSchema);

