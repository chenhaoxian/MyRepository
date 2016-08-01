<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@page import="java.util.*" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 <link rel="stylesheet" href="css/index.css" type="text/css">
  <link rel="stylesheet" href="css/index_page.css" type="text/css">
<title>Insert title here</title>

<style type="text/css">
body {
font-family:黑体,隶书;
font-size:13pt;
color: gainsboro;
	margin: 0;
	padding: 0;
	background-image: url(images/project_1.jpg) ;
	background-attachment:fixed;background-repeat:no-repeat;background-size:cover;-moz-background-size:cover;-webkit-background-size:cover;
}

.Header {
	height: 100px;
}

.Left {
	float: left;
	width: 20px;
	height: 300px;
}

.Right {
	float: right;
	width: 500px;
	height: 300px;
}

.Center {
	margin: 0 200px;
	width: 500px;
	height: 300px;
}

.Content {
	margin-top: 50;
	min-width: 700px;
	_width: expression(( document.documentElement.clientWidth || 
		 document.body.clientWidth)>1000?"1000px":"");
}

#bg {
	display: none;
	position: absolute;
	top: 0%;
	left: 0%;
	width: 100%;
	height: 100%;
	background-color: black;
	z-index: 1001;
	-moz-opacity: 0.7;
	opacity: .70;
	filter: alpha(opacity = 70);
}

#show {
	display: none;
	position: absolute;
	top: 25%;
	left: 22%;
	width: 53%;
	height: 49%;
	padding: 8px;
	border: 8px solid #E8E9F7;
	background-color: white;
	z-index: 1002;
	overflow: auto;
}

#food_table img {
	max-width: 250px;
	width: 250px;
	width: expression(document.body.clientWidth > 170 ? "170px" : "auto");
	max-height: 210px;
	height: 210px;
	height: expression(document.body.clientWidth > 180 ? "180px" : "auto");
	overflow: hidden;
}

#food_table td {
	
}

#food_table button {
	background-color: #1B9AF7;
	border-color: #1B9AF7;
	color: #FFF;
}

#cart_table td {
	max-width: 100px;
	width: 100px;
	width: expression(document.body.clientWidth > 170 ? "170px" : "auto");
	max-height: 100px;
	height: 100px;
	height: expression(document.body.clientWidth > 180 ? "180px" : "auto");
	overflow: hidden;
}

#cart_table button {
	background-color: #1B9AF7;
	border-color: #1B9AF7;
	color: #FFF;
}

</style>
</head>

<body>
<jsp:include page="view/header.jsp"></jsp:include>

<br><br><br><br>
	<section>
		<div class="Content">
		
		<div class="Right">
			<h1>购物车</h1>
			<table id="cart_table">
				<th>品名</th><th>减少</th><th>数量</th><th>增加</th><th>价格</th><th>小计</th>
				<tbody id="shoppingcart_table_data"></tbody>
				
				<tfoot id="shoppingcart_table_foot"></tfoot>
			</table>
		</div>

		<div class="Center">
			<table id="food_table">
				<tbody id="food_table_data"></tbody>
			</table>
		</div>

	</div>

	</section>
	

<div id="show" align="center">
	<h1 align="center">请登录</h1>
	<br><br><br>
	邮箱：<input id="userEmail" type="text"><br><br>
	密码：<input id="password" type="password"><br><br><br>
	<button id="btn_login" onclick="login_check()">登录</button><br><br><br><br>
	<br>
	<input id="btnclose" type="button" value="Close" onclick="hidediv();" /><br>
</div>
	
	
	
	<script type="text/javascript" src="js/index_page.js"></script>
	
	
	<script language="javascript" type="text/javascript">

		function showdiv() {
			//document.getElementById("bg").style.display = "block";
			document.getElementById("show").style.display = "block";
		}
		function hidediv() {
			//document.getElementById("bg").style.display = 'none';
			document.getElementById("show").style.display = 'none';
		}
	</script>
	
	<script type="text/javascript" src="js/login.js"></script>

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


</body>
</html>