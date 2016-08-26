function Index() {
}
var Index_Page = new Index();

window.onload=function(){
	 Index_Page.init();
	 Index_Page.bindEvent();
}

Index.prototype.init = function() {
	var self = this;
	var xhr = CreateXmlHttp();
	xhr.open("POST", "searchFoodServlet", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var food_tbody = document.getElementById("food_table_data");
			var cart_tbody = document.getElementById("shoppingcart_table_data");
			var result = xhr.responseText;
			var food_data ;
			var cart_data ;
			var cart_json = [];
			if(result.indexOf("#") != -1){
				cart_data = result.split("#")[0];
				food_data = result.split("#")[1];
				cart_json = JSON.parse(cart_data);
			}else{
				food_data = result;
			}
			var food_json = JSON.parse(food_data);
			cookieUtil.set('food_data',food_data,setCookieDate(1));
			food_json.forEach(function(item){
				var tr = document.createElement("tr");
				tr.id = "food_tr_"+item.fId;
				var td_img = document.createElement("td");
				var td_fName = document.createElement("td");
				var td_fPrice = document.createElement("td");
				var td_buy = document.createElement("button");
				var img_food = document.createElement("img");
				td_buy.id = item.fId;
				td_buy.innerHTML = "购买";
				td_buy.value = item.fPrice;
				td_buy.onclick=function (){ 
					Index_Page.buyFood(this.id,this.value); 
				};
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

			if(cart_json != null){
				cart_json.forEach(function(item){
					var tr = document.createElement("tr");
					tr.id = "cart_tr_"+item.fId;
					var td_fName = document.createElement("td");
					var td_cut = document.createElement("td");
					var td_fNum = document.createElement("td");
					td_fNum.id = "cart_fNum_"+item.fId;
					var td_add = document.createElement("td");
					var td_fPrice = document.createElement("td");
					var td_count = document.createElement("td");
					td_count.id = "cart_count_"+item.fId;
					td_fName.innerHTML = item.fName;
					td_fNum.innerHTML = item.fNum;
					td_fPrice.innerHTML = item.fPrice;
					td_count.innerHTML = item.fNum*item.fPrice;
					var btn_cut = document.createElement("button");
					var btn_add = document.createElement("button");
					btn_cut.innerHTML = "cut";
					btn_cut.value = item.fId + "#" + item.fPrice;
					btn_cut.onclick=function (){ 
						Index_Page.cutFood(this.value); 
					};
					btn_add.innerHTML = "add";
					btn_add.id = "cart_btn_add_"+item.fId;
					btn_add.value = item.fId + "#" + item.fPrice;
					btn_add.onclick=function (){ 
						Index_Page.addFood(this.value); 
					};
					td_cut.appendChild(btn_cut);
					td_add.appendChild(btn_add);
					tr.appendChild(td_fName);
					tr.appendChild(td_cut);
					tr.appendChild(td_fNum);
					tr.appendChild(td_add);
					tr.appendChild(td_fPrice);
					tr.appendChild(td_count);
					cart_tbody.appendChild(tr);
					count = count + item.fNum*item.fPrice;
				});
				showCartFoot(count);
			}
		}
	}
}

Index.prototype.checkOut = function(value){
	window.location.href='orderServlet?count='+value;
}

Index.prototype.addFood = function(value){
	var fId = parseInt(value.split("#")[0]);
	var fPrice = parseInt(value.split("#")[1]);
	var xhr = CreateXmlHttp();
	xhr.open("POST", "addFoodServlet?fId="+fId, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var result = xhr.responseText;
			if(result == "success"){
				var cart_fNum = document.getElementById("cart_fNum_"+fId);
				var cart_count = document.getElementById("cart_count_"+fId);
				cart_fNum.innerHTML = parseInt(cart_fNum.innerText)+1;
				cart_count.innerHTML = parseInt(cart_count.innerText)+fPrice;	
				count = count + fPrice;
				showCartFoot(count);
			}else{
				alert("添加失败");
			}
		}
	}
}

Index.prototype.cutFood = function(value){
	var fId = parseInt(value.split("#")[0]);
	var fPrice = parseInt(value.split("#")[1]);
	var xhr = CreateXmlHttp();
	xhr.open("POST", "cutFoodServlet?fId="+fId, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//var cart_tbody = document.getElementById("shoppingcart_table_data");
			var result = xhr.responseText;
			if(result == "success"){
				var cart_tr = document.getElementById("cart_tr_"+fId);
				var cart_fNum = document.getElementById("cart_fNum_"+fId);
				var cart_count = document.getElementById("cart_count_"+fId);
				if(parseInt(cart_fNum.innerText) == 1){
					cart_tr.parentNode.removeChild(cart_tr);
				}else{
					cart_fNum.innerHTML = parseInt(cart_fNum.innerText)-1;
					cart_count.innerHTML = parseInt(cart_count.innerText)-fPrice;
				}
				count = count - fPrice;
				showCartFoot(count);
			}else{
				alert("减少失败");
			}
		}
	}
}

Index.prototype.buyFood = function(fId,fPrice){
	var xhr = CreateXmlHttp();
	xhr.open("POST", "buyFoodServlet?fId="+fId, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//var cart_tbody = document.getElementById("shoppingcart_table_data");
			var result = xhr.responseText;
			if(result == "fail"){
				alert("请先登录！");
			}else{
				var cart_tr = document.getElementById("cart_tr_"+fId);
				var cart_fNum = document.getElementById("cart_fNum_"+fId);
				var cart_count = document.getElementById("cart_count_"+fId);
				alert("已经存入购物车");
				if(cart_tr){
					cart_fNum.innerHTML = parseInt(cart_fNum.innerText)+1;
					cart_count.innerHTML = parseInt(cart_count.innerText)+parseInt(fPrice);	
					count = count + parseInt(fPrice);
				}else{
					var cart_tbody = document.getElementById("shoppingcart_table_data");
					cart_json = JSON.parse(result);
					cart_json.forEach(function(item){
						var tr = document.createElement("tr");
						tr.id = "cart_tr_"+item.fId;
						var td_fName = document.createElement("td");
						var td_cut = document.createElement("td");
						var td_fNum = document.createElement("td");
						td_fNum.id = "cart_fNum_"+item.fId;
						var td_add = document.createElement("td");
						var td_fPrice = document.createElement("td");
						var td_count = document.createElement("td");
						td_count.id = "cart_count_"+item.fId;
						td_fName.innerHTML = item.fName;
						td_fNum.innerHTML = item.fNum;
						td_fPrice.innerHTML = item.fPrice;
						td_count.innerHTML = item.fNum*item.fPrice;
						var btn_cut = document.createElement("button");
						var btn_add = document.createElement("button");
						btn_cut.innerHTML = "cut";
						btn_cut.value = item.fId + "#" + item.fPrice;
						btn_cut.onclick=function (){ 
							Index_Page.cutFood(this.value); 
						};
						btn_add.innerHTML = "add";
						btn_add.id = "cart_btn_add_"+item.fId;
						btn_add.value = item.fId + "#" + item.fPrice;
						btn_add.onclick=function (){ 
							Index_Page.addFood(this.value); 
						};
						td_cut.appendChild(btn_cut);
						td_add.appendChild(btn_add);
						tr.appendChild(td_fName);
						tr.appendChild(td_cut);
						tr.appendChild(td_fNum);
						tr.appendChild(td_add);
						tr.appendChild(td_fPrice);
						tr.appendChild(td_count);
						cart_tbody.appendChild(tr);
						count = count + parseInt(fPrice);
					});
				}
				showCartFoot(count);
			}
		}
	}
}

Index.prototype.bindEvent = function() {
	var self = this;
}

var data = [];
var count = 0;
var flag = false;
//var sp = new SuggestPanel("food_table");



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

function showCartFoot(count){
	var cart_foot = document.getElementById("shoppingcart_table_foot");
	cart_foot.innerHTML = "总计：" + count + " 元";
	if(count != 0){
		var tr_checkOut = document.createElement("tr");
		var td_checkOut = document.createElement("td");
		var btn_checkOut = document.createElement("button");
		btn_checkOut.innerHTML = "pay";
		btn_checkOut.value = count;
		btn_checkOut.onclick = function(){
			Index_Page.checkOut(this.value); 
		};
		td_checkOut.appendChild(btn_checkOut);
		tr_checkOut.appendChild(td_checkOut);
		cart_foot.appendChild(tr_checkOut);
	}
}

function signOut(){
	var xhr = CreateXmlHttp();
	xhr.open("get", "signOutServlet", true);
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//var cart_tbody = document.getElementById("shoppingcart_table_data");
			var result = xhr.responseText;
			if(result == "success"){
				alert("登出成功");
				window.location.href="index.jsp";
//				document.getElementById("div2").style.display = "none";
//				document.getElementById("div1").style.display = 'block';
			}else{
				alert("登出失败");
			}
		}
	}
}

var cookieUtil={
        set :function(name,value,expires,path,domain,secure){
            var cookieText=encodeURIComponent(name)+'='+
                        encodeURIComponent(value);
            if(expires instanceof Date){
                cookieText+=';expires='+expires.toGMTString();
            }
            if(path){
                cookieText+=';path='+path;
            }
            if(domain){
                cookieText+=';domain='+domain;
            }
            if(secure){
                cookieText+=';secure';
            }
            document.cookie=cookieText;        
        },
        get:function(name){
            var cookieName=encodeURIComponent(name)+'=',
                cookieStart=document.cookie.indexOf(cookieName),
                cookieValue=null;
            if(cookieStart>-1){
                var cookieEnd=document.cookie.indexOf(';',cookieStart);
                if(cookieEnd==-1){
                    cookieEnd=document.cookie.length;
                }
                cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd))
            }
            return cookieValue;
        },
        unset:function(name,path,domain,secure){
            this.set(name,'',new Date(0),domain,path)
        }
    }
     function setCookieDate(day){
         var date=null;
         if(typeof day=='number'&&day>0){
             date=new Date();
             date.setDate(date.getDate()+day);
         }else{
            throw new Error('!!')         
         }
         return date;
     } 