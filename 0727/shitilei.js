(function(){

//稳妥模式
function Person(name,sex,age){
	var obj = {};
	var name = name;
	var sex = sex;
	var age = age;

	obj.getName = function(){
		return name;
	}
	
	obj.setName = function(n){
		name = n;
	}
	return obj;
}
var p1 = new  Person("kobe","male","44");
// var p1 = new Person("kobe","male,"33");

console.log(p1.name);
console.log(p1.getName());
p1.setName("hyman");
console.log(p1.getName());





})();