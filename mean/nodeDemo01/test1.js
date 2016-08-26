function fn1(cb){
	setTimeout(cb,3000);
}

function fn2(){
	console.log("fn2");
}

fn1(fn2);

console.log("end");
