<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<style>
.black_overlay {
	display: none;
	position: absolute;
	top: 0%;
	left: 0%;
	width: 100%;
	height: 100%;
	background-color: black;
	z-index: 1001;
	-moz-opacity: 0.8;
	opacity: .80;
	filter: alpha(opacity = 80);
}

.white_content {
	display: none;
	position: absolute;
	top: 25%;
	left: 25%;
	width: 50%;
	height: 50%;
	padding: 16px;
	border: 16px solid orange;
	background-color: white;
	z-index: 1002;
	overflow: auto;
}


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

</style>


</head>

<body>
<jsp:include page="header.jsp"></jsp:include>
	<h1 align="center">购物车</h1>
	<div align="center">
		<table>
			<th>品名</th>
			<th>数量</th>
			<th>价格</th>
			<th>小计</th>
			<tbody id="order_data_table">
				<c:forEach items="${orderList }" var="order">
					<tr align="center">
						<td align="center">${order.fName}</td>
						<td align="center">${order.fNum}</td>
						<td align="center">${order.fPrice}</td>
						<td align="center">${order.fNum*order.fPrice}</td>
					</tr>
				</c:forEach>
			</tbody>
			<tfoot>
				<tr>
					<td align="center">总计： ${cartCount } 元</td>
				</tr>
			</tfoot>
			<tfoot id="order_data_foot"></tfoot>
		</table>
	</div>
	<div align="center"><button id="" onclick="pay()">确认无误,点击购买</button></div><br>
	<div align="center"><button onclick="window.location.href='index.jsp'">返回首页</button></div>
	

	<script type="text/javascript" src="js/orderPage.js" charset="UTF-8"></script>

</body>
</html>