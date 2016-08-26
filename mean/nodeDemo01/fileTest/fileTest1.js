var fs = require("fs");//引包  引模块

//==================================================

// var out1 = fs.createWriteStream("./data.txt");
// out1.write("abc");

//=====================================================
// var fs = require("fs");
// var out1 = fs.createWriteStream("./data.txt");
// out1.write("abc",function(){
// 	console.log("finish....");
// });


//==========================================================
// var in1 = fs.createReadStream("./data.txt");
// in1.on("data",function(chunk){
// 	console.log(chunk.toString("utf8"));
// });
// in1.on("end",function(){
// 	console.log("end...");
// })


///=======================================================
// var out1 = fs.createWriteStream("./data1.txt");
// var in1 = fs.createReadStream("./data.txt","utf-8");
// // in1.on("data",function(chunk){
// // 	// console.log(chunk);
// // 	out1.write(chunk);
// // });
// // in1.on("end",function(){
// // 	console.log("end...");
// // });

// //文件copy
// in1.pipe(out1);

//文件删除
// fs.unlink("./data1.txt",function(){
// 	console.log('ok');
// })

//文件夹删除
//var path = ".";
// deleteFolder = function(path) {
//     var files = [];
//     if( fs.existsSync(path) ) {
//         files = fs.readdirSync(path);
//         files.forEach(function(file,index){
//             var curPath = path + "/" + file;
//             if(fs.statSync(curPath).isDirectory()) { // recurse
//                 deleteFolderRecursive(curPath);
//             } else { // delete file
//                 fs.unlinkSync(curPath);
//             }
//         });
//         fs.rmdirSync(path);
//     }
// };
// console.log(__dirname);
// fs.rmdir("../f1",function(){
// 	console.log("ok");
// })
//========================================================================
function listFile(path){
	var fns = fs.readdirSync(path);
	fns.forEach(function(item){
		var cp = path +　"/" + item;
		var b = fs.statSync(cp).isDirectory();
		console.log((b?"b":"-") + "\t" + item);
		
		if(b){
			listFile(cp);
		}
	});
}
listFile(__dirname);
