<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
 <style>
        body{
            margin: 0px;
            padding: 0px;
        }
        
        #div1{
            height: 40;
            width: 100%;
            margin-top: 0;
            background-color: darkgrey;
            overflow : hidden;
        }
        
        #div1 button{
         float : right;
         }
        
        #div2{
           height: 40;
            width: 100%;
            margin-top: 0;
            background-color: darkgrey;
            overflow : hidden;
        }
        #div2 button{
         float : right;
         }
        button {
              color: #666;
              background-color: #EEE;
              border-color: #EEE;
              border-radius : 5px;
              font-weight: 300;
              font-size: 16px;
              font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
              text-decoration: none;
              text-align: center;
              line-height: 40px;
              height: 40px;
              padding: 0 40px;
              margin: 5px 2px;
              display: inline-block;
              appearance: none;
              cursor: pointer;
              border: none;
              -webkit-box-sizing: border-box;
                 -moz-box-sizing: border-box;
                      box-sizing: border-box;
              -webkit-transition-property: all;
                      transition-property: all;
              -webkit-transition-duration: .3s;
                      transition-duration: .3s;
}
    </style>
</head>

<body>

	<c:choose>
		<c:when test="${sessionScope.user==null}">
			<div id="div1">
				<button onclick="showdiv();" id="btn_login">登录</button>
				<!-- style="display: none; "-->
				<button id="btn_register" onclick="go_register()">注册</button>
			</div>
		</c:when>
		<c:otherwise> 
		<div id="div2">
			你好： ${sessionScope.user.username} 
        	<button id="btn_signout" onclick="signOut()">登出</button>
			<button id="btn_checkOrder" onclick="window.location.href='showOrderServlet'">查看订单</button>
			</div>
		</c:otherwise>
		
	</c:choose>



	<script type="text/javascript">
    function go_register(){
    	window.location.href="view/registerPage.jsp";
    }
    
    </script>
</body>
</html>