(function(){

//原型链
function Person(name,age){
	this.name = name;
	this.age = age;
}

var adam = {
	constructor:Person,
	introduce:function(){
		return "name:" + this.name+ " age:" + this.age;
	}
}



Person.prototype = adam;
var p1 = new Person();
function Automan(name,age,power){
	Person.call(this,name,age);
	this.power = power;
	// this.introduce = function(){
	// 	return "name1:" + this.name+ " age:" + this.age;
	// }
}

// var automanprototype = {
// 	introduce:function(){
// 		return "name:" + this.name+ " age:" + this.age;
// 	}
// }

Automan.prototype = p1;

var automan = new Automan("hyman",12,100);
console.log(automan.introduce());



})();