function ScoreManage(){
	
}

ScoreManage.prototype.init = function(){
	
	var self = this;
//	$('#courseName').autocomplete("${pageContext.request.contextPath}/jsp/student/course_name.jsp",self.courseNameOption);

	$('#lowMerchant_data_table tr:odd').css('background-color', '#CCCCCC');
	$('#lowMerchant_data_table tr:even').css('background-color','');
	$("#lowMerchant_data_table tr:odd").addClass("odd");
	$("#lowMerchant_data_table tr:even").addClass("even");
	
	$.ajax({
		type:"post",
		url:"../merchant/get/lowMerchant/"+page_score_num,
		data:{
			
		},
		dataType:"json",
		success:function(mList){
			var m_tbody = $("#lowMerchant_data_table");
			if(mList != null && mList != ''){
				var trs = "";
				$.each(mList,function(key,value){
					trs += "<tr>" +
							"<td>"+value.mPersonName+"</td>" +
							"<td>"+value.mTel+"</td>" +
							"<td>"+value.mBrand+"</td>" +
							"<td>"+value.mLocation+"</td>" +
							"<td>"+value.mScore+"</td>" +
							"<td>" +"<button onclick='putBlack("+value.mId+","+key+")' class='button button-rounded button-tiny' style='width: 95%'>拉黑</button><br>"+
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


ScoreManage.prototype.bindEvent = function(){

	$("#btn_next").click(function(){
		page_score_num = page_score_num + 1;
		$.ajax({
			type:"post",
			url:"../merchant/get/lowMerchant/"+page_score_num,
			data:{
			},
			dataType:"json",
			success:function(mList){
				var m_tbody = $("#lowMerchant_data_table");
				if(mList != null && mList !=''){
					m_tbody.empty();
					var trs = "";
					$.each(mList,function(key,value){
						trs += "<tr>" +
						"<td>"+value.mPersonName+"</td>" +
						"<td>"+value.mTel+"</td>" +
						"<td>"+value.mBrand+"</td>" +
						"<td>"+value.mLocation+"</td>" +
						"<td>"+value.mScore+"</td>" +
						"<td>" +"<button onclick='putBlack("+value.mId+","+key+")' class='button button-rounded button-tiny' style='width: 95%'>拉黑</button><br>"+
						"</td>" +
						"</tr>";
					});
					m_tbody.append(trs);
//					$("#div_test").append("<img class='img-circle' src='10.222.232.145:8080/imgs/15007115195/IDCard.jpg' style='width:100%;height:100%;'/>");
				}else{
					alert("没有数据啦 !");
					page_score_num = page_score_num - 1;
				}
			},
			error:function(){
				alert("error");
				page_score_num = page_score_num - 1;
			}
		});
	});
	
	$("#btn_previous").click(function(){
		page_score_num = page_score_num - 1;
		$.ajax({
			type:"post",
			url:"../merchant/get/allMerchant/"+page_score_num,
			data:{
			},
			dataType:"json",
			success:function(mList){
				var m_tbody = $("#lowMerchant_data_table");
				if(mList != null && mList !=''){
					m_tbody.empty();
					var trs = "";
					$.each(mList,function(key,value){
						trs += "<tr>" +
						"<td>"+value.mPersonName+"</td>" +
						"<td>"+value.mTel+"</td>" +
						"<td>"+value.mBrand+"</td>" +
						"<td>"+value.mLocation+"</td>" +
						"<td>"+value.mScore+"</td>" +
						"<td>" +"<button onclick='putBlack("+value.mId+","+key+")' class='button button-rounded button-tiny' style='width: 95% '>拉黑</button><br>"+
						"</td>" +
						"</tr>";
					});
					m_tbody.append(trs);
//					$("#div_test").append("<img class='img-circle' src='10.222.232.145:8080/imgs/15007115195/IDCard.jpg' style='width:100%;height:100%;'/>");
				}else{
					alert("已经是第一页啦 !");
					page_score_num = page_score_num + 1;
				}
			},
			error:function(){
				alert("error");
				page_score_num = page_score_num + 1;
			}
		});
	});
}

var scoreManage = new ScoreManage();

var data = [];

var page_score_num = 1;

$(document).ready(function(){

	scoreManage.init();	
	scoreManage.bindEvent();

});

function putBlack(mId,row){
	$.ajax({
		type:"post",
		url:"../merchant/put/putBlack/"+mId,
		data:{
		},
		//dataType:"json",
		success:function(msg){
			if(msg == "success"){
				alert("拉黑商家成功");
				$("#lowMerchant_data_table tr:eq("+row+")").hide();
			}else if(msg == "fail"){
				alert("拉黑商家失败");
			}
		},
		error:function(){
			alert("error");
		}
	});
}


