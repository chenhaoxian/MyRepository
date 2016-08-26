function login_check(){
	var userEmail = document.getElementById("userEmail").value;
	var password = document.getElementById("password").value;
	
	if(userEmail == ""){
		alert("邮箱不能为空");
	}else if(password == ""){
		alert("密码不能为空");
	}else {
		var reg = /(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$)|(^$)/;
		if(!reg.test(userEmail)){
			alert("请输入正确邮箱格式!");
		}else{
			var xhr = CreateXmlHttp();
			xhr.open("get", "loginServlet?userEmail="+userEmail+"&password="+password, true);
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					var result = xhr.responseText;
					if(result == "success"){
						alert("登录成功！");
						//cookieUtil.set('user_cookies',"user_cookies",setCookieDate(1));
						window.location.href="index.jsp";
						
					}else{
						alert("登录失败！");
					}
					
				}
			}
		}
	}
	
}

