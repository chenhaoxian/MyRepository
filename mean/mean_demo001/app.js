var db = require("./config/mongoose");
var app = require("./config/express"); 

app.listen(3009,function(){
	console.log("server start.....");
});
// db.disconnect();