// console.log(i);//JS变量提升
// for(var i=0; i<10; i++){

// }



// function test(){
// 	for(var i=0;i<9;i++){

// 	}
// 	console.log(i);
// }
// test();


function test(){
	(function(){
		for(var i=0;i<9;i++){

		}
	})();//函數立即執行 執行完彈棧
	console.log(i);
}
test();