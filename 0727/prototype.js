(function(){

function Person(name,age){
	this.name = name;
	// this.sex = sex;
	this.age = age;
}
var adam = {
	constructor:Person,
	introduce:function(){
		return "name:"+this.name+" age:"+this.age;
	}
}

Person.prototype = adam;

var p1 = new Person();
console.log(adam.isPrototypeOf(p1));
console.log(Object.getPrototypeOf(p1));

var pro = Object.getPrototypeOf(p1);
pro.eyeCounts = 2;

var p2 = new Person();
console.log(p2.eyeCounts);

var pro2 = Object.getPrototypeOf(p1);
pro2.eyeCounts = 3;
console.log(p1.eyeCounts); //原型东西公用


console.log(p2.hasOwnProperty("name"));

Object.defineProperty(Person.prototype,'constructor',{
	'enumerable': false,
	'value':Person
});

for(p in p2){
	console.log(p);
}


})();