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

function pay(){
	var xhr = CreateXmlHttp();
	xhr.open("get", "orderBuyServlet", true);
	//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(null);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//var cart_tbody = document.getElementById("shoppingcart_table_data");
			var result = xhr.responseText;
			if(result == "success"){
				alert("支付成功！");
				window.location.href="index.jsp";
//				var num = 3;
//		        window.onload = function(){
//		            var s = window.setinterval(function(){
//		                document.getelementbyid("s").innerhtml=num;
//		                num--;
//		                if(num<=0){
//		                    window.close();
//
//		                }
//		            }, 1000);            
//		        }
			}else{
				alert("支付失败");
				window.location.href="index.jsp";
			}
		}
	}
}


