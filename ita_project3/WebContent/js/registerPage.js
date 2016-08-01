function checkInput(){
	var username = document.getElementById("username").value;
	var userEmail = document.getElementById("userEmail").value;
	var password = document.getElementById("userPassword").value;
	var re_password = document.getElementById("re_userPassword").value;

	if(username == ""){
		alert('用户名不能为空！');
	}else if(userEmail == ""){
		alert("邮箱不能为空！");
	}else if(password == ""){
		alert("密码不能为空！");
	}else if(re_password == ""){
		alert("请输入密码！");
	}else {
		if(password != re_password){
			alert("两次密码输入值不一样！");
		}else{ 
			var reg = /(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$)|(^$)/;
			if(!reg.test(userEmail)){
				alert("请输入正确邮箱格式!");
			}else{
//				window.location.href="registerServlet?username="+username+"&userEmail="+userEmail+"&password="+password;
				
				var xhr = CreateXmlHttp();
				xhr.open("get", "../registerServlet?username="+username+"&userEmail="+userEmail+"&password="+password, true);
				xhr.send(null);
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4 && xhr.status == 200) {
						var result = xhr.responseText;
						if(result == "success"){
							alert("注册成功！");
							window.location.href="../index.jsp";
							document.getElementById("btn_login").style.display = 'none';
							document.getElementById("btn_register").style.display = 'none';
							document.getElementById("btn_signout").style.display = 'block';
						}else if(result == "emailerror"){
							alert("该邮箱已经被注册!");
						}else{
							alert("注册失败！");
						}
					}
				}
				
			}
		}
	}
	
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

