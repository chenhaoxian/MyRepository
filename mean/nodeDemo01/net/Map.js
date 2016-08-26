function Map(){
	this.obj = {};
}


Map.prototype = {
	constructor:Map,
	put:function(key,value){
		this.obj[key] = value;
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
	eachMap:function(){
		var a = [];
		for(attr in this.obj){
			a.push( this.obj[attr]);
		}
		return a;
	}
}



exports=module.exports=Map;