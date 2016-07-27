function sayName(){
	console.log(this.name);
}

var o1={
	name:"hyman",
	sayName:function(){
		console.log(this.name);
	}
}

var o2 ={
	name:'kobe',
	sayName:o1.sayName.apply(this)
}

o1.sayName();
o1.sayName.apply(o2);
