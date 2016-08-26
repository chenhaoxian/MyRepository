//构造
function myMath(){
	this.sum=sum;
	this.multi=multiply;
}

function sum(a,b){
	return a+b;
}

function multiply(a,b){
	return a*b;
}

exports=module.exports=myMath;
// exports.sum = sum;
// exports.multi = multiply;
