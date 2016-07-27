(function(){

//工厂
function createPerson(name,sex,age){
	var o = {};
	o.name = name;
	o.sex = sex;
	o.age = age;
	o.introduce = function(){
		return "name:"+name+"sex:"+sex+"age:"+age;
	}
	return o;
}
// var p1 = createPerson("hyman","male",20);
// var p2 = createPerson("hyman2","male",30);
// console.log(p1.introduce());
// console.log(p2.introduce());

//构造
function Person(name,sex,age){
	this.name = name;
	this.sex = sex;
	this.age = age;
	this.introduce = function(){
		return "name:"+name+" sex:"+sex+" age:"+age;
	}
}

// var p1 = new Person("hyman","male",23);

// console.log(p1.introduce());

//原型模式
function Person1(){

}
Person1.prototype.name="kobe";
Person1.prototype.age = 33;
Person1.prototype.introduce = function(){
	return "name:"+this.name+" age:"+this.age;
}

// var p1 = new Person1();
// var p2 = new Person1();
// console.log(p1.introduce());
// console.log(p2.introduce());
// console.log(p1.introduce == p2.introduce);


//方法放原型，对象构造生成
function Person2(name,age){
	this.name = name;
	// this.sex = sex;
	this.age = age;
}
Person2.prototype = {
	constructor:Person2,
	introduce:function(){
		return "name:"+this.name+" age:"+this.age;
	}
}

// Person2.prototype.introduce = function(){
// 	return "name:"+this.name+" age:"+this.age;
// }
var p1 = new Person2("hyman1",1);
var p2 = new Person2("hyman2",2);
console.log(p1.introduce());
console.log(p2.introduce());
console.log(p1.introduce == p2.introduce);
console.log(Person2.prototype.constructor);

























})()