// 建立数据模型，挂到mongoose的model上
const mongoose = require("mongoose");
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
	uname:String,
	age:Number,
	hash: String,
	salt: String
});

UserSchema.methods.validCount = function () {
	
}

UserSchema.methods.setPassword =function(password){
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 1000,64).toString('hex');
};

UserSchema.methods.validPassword = function(password) {
	var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
	return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
	var expiry = new Date();
	expiry.setDate(expiry.getDate() + 7); //将过期时间设为7天
		return jwt.sign({
		_id: this._id,
		email: this.email,
		name: this.name,
		exp: parseInt(expiry.getTime() / 1000),
	}, 'thisIsSecret' ); //"thisIsSecret"是密钥
};

mongoose.model("user",UserSchema);
