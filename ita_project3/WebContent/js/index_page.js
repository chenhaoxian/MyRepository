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
			var food_tbody = document.getElementById("food_table_data");
			var result = xhr.responseText;
			data = JSON.parse(result);
			data.forEach(function(item){
				var tr = document.createElement("tr");
				tr.id = item.fId;
				var td_img = document.createElement("td");
				var td_fName = document.createElement("td");
				var td_fPrice = document.createElement("td");
				var td_buy = document.createElement("button");
				var img_food = document.createElement("img");
				td_buy.id = item.fId;
				td_buy.innerHTML = "购买"
				img_food.src = item.fImagePath;
				td_fName.innerHTML = item.fName;
				td_fPrice.innerHTML = item.fPrice;
				td_img.appendChild(img_food);
				tr.appendChild(td_img);
				tr.appendChild(td_fName);
				tr.appendChild(td_fPrice);
				tr.appendChild(td_buy);
				food_tbody.appendChild(tr);
			});

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
