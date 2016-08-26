var db = require("./config/mongoose");
var app = require("./config/express");
var jms = require("./config/jms");
var logger = require("./utils/logger");

app.listen(3010,function(){
	console.log("server start.....");
});
// db.disconnect();