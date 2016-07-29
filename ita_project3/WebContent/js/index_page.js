function Index() {

}
var Index_Page = new Index();
var data = [];
Index.prototype.init = function() {
	var self = this;
	var xhr = CreateXmlHttp();
	xhr.open("POST", "searchFoodServlet", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var result = xhr.responseText;
			data = JSON.parse(result);
//			data.forEach(function(item){
//				alert(item.fName);
//			});
			for(var item in data){
				alert(item+'...'+data[item].fName);
			}
		}
		
	}
}



Index.prototype.bindEvent = function() {
	var self = this;
}



 window.onload=function(){
	 Index_Page.init();
	 Index_Page.bindEvent();
 }

function CreateXmlHttp() {
	var xhrobj = false;
	try {
		xhrobj = new ActiveXObject("Msxml2.XMLHTTP"); // ie msxml3.0+
	} catch (e) {
		try {
			xhrobj = new ActiveXObject("Microsoft.XMLHTTP"); // ie msxml 2.6
		} catch (e2) {
			xhrobj = false;
		}
	}
	if (!xhrobj && typeof XMLHttpRequest != 'undefined') { // firefox opera 8.0
		// safari
		xhrobj = new XMLHttpRequest();
	}
	return xhrobj;
}
