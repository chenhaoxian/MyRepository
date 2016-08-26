var db = require("./server/config/mongoose");
var app = require("./server/config/express");


app.listen(3006,function(){
    console.log("server start .....");
});


// db.disconnect();