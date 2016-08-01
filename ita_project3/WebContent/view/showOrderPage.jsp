<%@page import="java.util.List,java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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

</style>

</head>

<body>
<jsp:include page="header.jsp"></jsp:include>
	<h1 align="center">订单</h1>

	<c:forEach items="${orderMap }" var="order">
		<div align="center">
			<table class="table">
				<tr>
					<td>商品名</td>
					<td>数量</td>
					<td>单价</td>
					<td>小计</td>
				</tr>
				<c:forEach items="${order.value}" var="list">
				<tr>
					<!-- <td colspan="1">${pMap.key}</td> -->
					<td colspan="1">${list.fName}</td>
					<td colspan="1">${list.fNum}</td>
					<td colspan="1">${list.fPrice}</td>
					<td colspan="1">${list.fNum*list.fPrice}</td>
				</tr>
				
				</c:forEach>
				<tr>
					<td>支付时间： ${order.key} </td>   
				 	<td>总价:
					 	 <c:forEach items="${oPriceMap }" var="oPriceMap">
					 	 	<c:if test="${oPriceMap.key == order.key}">
					 	 		${oPriceMap.value }
					 	 	</c:if>
					 	</c:forEach>
				 	</td>
				 </tr>
				 <tr>--------------------------------------------------------</tr>
			</table>
		</div>
	</c:forEach>
	<div align="center"><button onclick="window.location.href='index.jsp'">返回首页</button></div>
	<script type="text/javascript" src="js/orderPage.js" charset="UTF-8"></script>

</body>
</html>