function Counter(){
	var i = 0;
	return function(){
		return i++;
	}
}

var c1 = Counter();
var c2 = Counter();
for(var i=0; i<10; i++){
	c1();
}

console.log(c1());
console.log(c2());
console.log(c2());
console.log(c2());