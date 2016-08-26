// const EventEmitter = require("events");

// var myE1 = new EventEmitter();

// myE1.on("click",function(event){
// 	console.log("click..."+event.uname)
// });

// myE1.emit("click",{uname:"hyman"});
// myE1.emit("click",{uname:"vicky"});

//============================================================================
// function slow(){
// 	for(var i=0;i<1000000000;i++){};
// 		console.log("show,,");
// }

// function tt(cb){
// 	setTimeout(cb,100);
// }

// tt(slow);

// console.log("end...");

//=============================================================================
// const querystring = require("querystring");
// var m = querystring.parse('foo=bar&baz=qux&baz=quux&corge');
// console.log(m);

//===============================================================================
// var my = require("../util/mathUtil");
// var x1 = my.sum(1,2);
// console.log(x1);


//============================================================================================
// var my = require("../util/mathUtil1");
// var x1 = my.sum(1,2);
// console.log(x1);


//============================================================================================
// var MyMath = require("../util/mathUtil2");
// var mm = new MyMath();

// var x1 = mm.sum(4,6);
// console.log(x1);


//============================================================================================
// var MyMath = require("../util/mathUtil2");
// var MyMath1 = require("../util/mathUtil2");
// console.log(MyMath == MyMath1);
// var m = new MyMath();

// var x1 = m.sum(4,6);
// console.log(x1);


//===============================================
// function test1(){
// 	setTimeout((dd)=>{console.log("xxx..."+dd)},2000)
// }
// test1();

//=============================================API
// console.log(__dirname);
// console.log(__filename);



// -------------------------------------------Buffer
// var b1 = Buffer.alloc(8);
// console.log(b1);

// var b1=Buffer.from("abc",'utf16le');
// console.log(b1.toString());
// console.log(b1.toString("utf16le"));

//-------------------------------------------------Stream
var name = "hyman";
var in1 = null;
in1.on("error",function(chunk){

});