function SuggestPanel(spid) {
	this.element = document.getElementById(spid);
	//["","",""]
	this.spData =[];
	//{"qu":[asdasd,sss,sss],"s":[]}
	this.cacheData = new Map();
}
SuggestPanel.prototype.clear = function() {
	this.element.innerHTML = "";
}
SuggestPanel.prototype.show = function() {
	var spElement = this.element;
	this.spData.forEach(function(item,index,array){
		var p = document.createElement("p");
		p.innerHTML = item;
		spElement.appendChild(p);
	});
}
SuggestPanel.prototype.hasCache = function(query) {
	return this.cacheData.get(query);
}
SuggestPanel.prototype.cache = function(key,value) {
	this.cacheData.put(key, value) ;
}
SuggestPanel.prototype.showFromCache = function(query){
	var spElement = this.element;
	var data = this.cacheData.get(query);
	
	data.forEach(function(item,index,array){
		var p = document.createElement("p");
		p.innerHTML = item;
		spElement.appendChild(p);
	});
}
