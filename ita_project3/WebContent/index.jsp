<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>

<style type="text/css">
body {
	margin: 0;
	padding: 0;
}

.Header {
	height: 100px;
}

.Left {
	float: left;
	width: 50px;
	height: 300px;
}

.Right {
	float: right;
	width: 450px;
	height: 300px;
}

.Center {
	margin: 0 200px;
	width: 500px;
	height: 300px;
}

.Content {
	min-width: 700px;
	_width: expression(( document.documentElement.clientWidth ||
		document.body.clientWidth)>1000?"1000px":"");
}
</style>
</head>
<body>
	<div class="Header">test</div>

	<div class="Content">
		<div class="left">test</div>
		
		<div class="Right">
			<h1>购物车</h1>
			<table>
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

<script type="text/javascript" src="js/index_page.js"></script>

</body>
</html>