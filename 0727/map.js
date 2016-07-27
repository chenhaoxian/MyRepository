(function(){

function Map(){
	this.obj = {};
}

Map.prototype = {
	constructor:Map,
	put:function(key,value){
		this.obj[key] = value;
	},
	remove: function(key){
		for(attr in this.obj){
			if(attr == key){
				delete this.obj[key];
			}
		}

	},
	size:function(){
		var c = 0;
		for(attr in this.obj){
			c++;
		}
		return c;

	},
	get:function(key){
		if(this.obj[key] || this.obj[key]==0 ||this.obj[key]==false){
			return this.obj[key];
		}else {
			return null;
		}
	},
	eachMap:function(fn){
		for(attr in this.obj){
			fn(attr,this.obj[attr]);
		}
	}
}

// Map map = new Map();
var map = new Map();
map.put("001","kobe");
map.put("002","curry");

map.put(0,false);

function show(key,value){
	console.log(key+" "+value);
}


map.remove("001");
console.log(map.get(0));


map.eachMap(show);











})();