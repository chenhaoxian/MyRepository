function Index(){
	
}

Index.prototype.init = function(){
	
	var self = this;
//	$('#courseName').autocomplete("${pageContext.request.contextPath}/jsp/student/course_name.jsp",self.courseNameOption);

	$('#merchant_data_table tr:odd').css('background-color', '#CCCCCC');
	$('#merchant_data_table tr:even').css('background-color','');
	$("#merchant_data_table tr:odd").addClass("odd");
	$("#merchant_data_table tr:even").addClass("even");
	
	$.ajax({
		type:"post",
		url:"../merchant/get/allMerchant/"+page_num,
		data:{
			
		},
		dataType:"json",
		success:function(mList){
			var m_tbody = $("#merchant_data_table");
			if(mList != null && mList != ''){
				var trs = "";
				$.each(mList,function(key,value){
					trs += "<tr>" +
							"<td><img class='img-circle' src='http://10.222.232.145:8080/imgs/"+value.mCardPath+"' style='width:200px;height:150px;'/></td>" +
							"<td>"+value.mIdCard+"</td>" +
							"<td>"+value.mPersonName+"</td>" +
							"<td>"+value.mTel+"</td>" +
							"<td>"+value.mBrand+"</td>" +
							"<td>"+value.mLocation+"</td>" +
							"<td>" +"<button onclick='passMerchant("+value.mId+","+key+")' class='button button-pill button-tiny' style='width: 95%'>Pass</button><br>"+"<button onclick='refuseMerchant("+value.mId+","+key+")' class='button button-pill button-tiny' style='width: 95%; MARGIN-TOP: 10PX;'>Refuse</button>"+
							"</td>" +
							"</tr>";
				});
				m_tbody.append(trs);
//				$("#div_test").append("<img class='img-circle' src='10.222.232.145:8080/imgs/15007115195/IDCard.jpg' style='width:100%;height:100%;'/>");
			}else{
				var tr = "<tr><td>no record found!</td></tr>";
				m_tbody.append(tr);
			}
		},
		error:function(){
			alert("error");
		}
	});
}


Index.prototype.bindEvent = function(){

	$("#btn_next").click(function(){
		page_num = page_num + 1;
		$.ajax({
			type:"post",
			url:"../merchant/get/allMerchant/"+page_num,
			data:{
			},
			dataType:"json",
			success:function(mList){
				var m_tbody = $("#merchant_data_table");
				if(mList != null && mList !=''){
					m_tbody.empty();
					var trs = "";
					$.each(mList,function(key,value){
						trs += "<tr>" +
								"<td><img class='img-circle' src='http://10.222.232.145:8080/imgs/"+value.mCardPath+"' style='width:200px;height:150px;'/></td>" +
								"<td>"+value.mIdCard+"</td>" +
								"<td>"+value.mPersonName+"</td>" +
								"<td>"+value.mTel+"</td>" +
								"<td>"+value.mBrand+"</td>" +
								"<td>"+value.mLocation+"</td>" +
								"<td>" +"<button onclick='passMerchant("+value.mId+","+key+")' class='button button-pill button-tiny' style='width: 95%'>Pass</button><br>"+"<button onclick='refuseMerchant("+value.mId+","+key+")' class='button button-pill button-tiny' style='width: 95%; MARGIN-TOP: 10PX;'>Refuse</button>"+
								"</td>" +
								"</tr>";
					});
					m_tbody.append(trs);
//					$("#div_test").append("<img class='img-circle' src='10.222.232.145:8080/imgs/15007115195/IDCard.jpg' style='width:100%;height:100%;'/>");
				}else{
					alert("没有数据啦 !");
					page_num = page_num - 1;
				}
			},
			error:function(){
				alert("error");
				page_num = page_num - 1;
			}
		});
	});
	
	$("#btn_previous").click(function(){
		page_num = page_num - 1;
		$.ajax({
			type:"post",
			url:"../merchant/get/allMerchant/"+page_num,
			data:{
			},
			dataType:"json",
			success:function(mList){
				var m_tbody = $("#merchant_data_table");
				if(mList != null && mList !=''){
					m_tbody.empty();
					var trs = "";
					$.each(mList,function(key,value){
						trs += "<tr>" +
								"<td><img class='img-circle' src='http://10.222.232.145:8080/imgs/"+value.mCardPath+"' style='width:200px;height:150px;'/></td>" +
								"<td>"+value.mIdCard+"</td>" +
								"<td>"+value.mPersonName+"</td>" +
								"<td>"+value.mTel+"</td>" +
								"<td>"+value.mBrand+"</td>" +
								"<td>"+value.mLocation+"</td>" +
								"<td>" +"<button onclick='passMerchant("+value.mId+","+key+")' class='button button-pill button-tiny' style='width: 95%'>Pass</button><br>"+"<button onclick='refuseMerchant("+value.mId+","+key+")' class='button button-pill button-tiny' style='width: 95%; MARGIN-TOP: 10PX;'>Refuse</button>"+
								"</td>" +
								"</tr>";
					});
					m_tbody.append(trs);
//					$("#div_test").append("<img class='img-circle' src='10.222.232.145:8080/imgs/15007115195/IDCard.jpg' style='width:100%;height:100%;'/>");
				}else{
					alert("已经是第一页啦 !");
					page_num = page_num + 1;
				}
			},
			error:function(){
				alert("error");
				page_num = page_num + 1;
			}
		});
	});
}

var index = new Index();

var data = [];

var page_num = 1;

$(document).ready(function(){

	index.init();	
	index.bindEvent();

});

function passMerchant(mId,row){
	$.ajax({
		type:"post",
		url:"../merchant/put/passStatus/"+mId,
		data:{

		},
		//dataType:"json",
		success:function(msg){
			if(msg == "success"){
				alert("商家注册成功");
				$("#merchant_data_table tr:eq("+row+")").hide();
			}else if(msg == "fail"){
				alert("商家注册失败");
			}
		},
		error:function(){
			alert("error");
		}
	});
}

function refuseMerchant(mId,row){
	$.ajax({
		type:"post",
		url:"../merchant/put/refuseStatus",
		data:{
			"mId":mId
		},
		//dataType:"json",
		success:function(msg){
			if(msg == "success"){
				alert("已经拒绝成功");
				$("#merchant_data_table tr:eq("+row+")").hide();
			}else if(msg == "fail"){
				alert("操作失败");
			}
		},
		error:function(){
			alert("error");
		}
	});
}
