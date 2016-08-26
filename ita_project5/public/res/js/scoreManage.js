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
		type:"get",
		url:"merchant?page="+page+"&per_page=4&type=0",
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
						"<td>" +"<button onclick='putBlack(\""+value.mId+"\","+key+")' class='button button-rounded button-tiny' style='width: 95%'>拉黑</button><br>"+
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
		page = page + 1;
		$.ajax({
			type:"get",
			url:"merchant?page="+page+"&per_page=4&type=0",
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
							"<td>" +"<button onclick='putBlack(\""+value.mId+"\","+key+")' class='button button-rounded button-tiny' style='width: 95%'>拉黑</button><br>"+
							"</td>" +
							"</tr>";
					});
					m_tbody.append(trs);
//					$("#div_test").append("<img class='img-circle' src='10.222.232.145:8080/imgs/15007115195/IDCard.jpg' style='width:100%;height:100%;'/>");
				}else{
					alert("没有数据啦 !");
					page = page - 1;
				}
			},
			error:function(){
				alert("error");
				page = page - 1;
			}
		});
	});

	$("#btn_previous").click(function(){
		page = page - 1;
		$.ajax({
			type:"get",
			url:"merchant?page="+page+"&per_page=4&type=0",
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
							"<td>" +"<button onclick='putBlack(\""+value.mId+"\","+key+")' class='button button-rounded button-tiny' style='width: 95% '>拉黑</button><br>"+
							"</td>" +
							"</tr>";
					});
					m_tbody.append(trs);
//					$("#div_test").append("<img class='img-circle' src='10.222.232.145:8080/imgs/15007115195/IDCard.jpg' style='width:100%;height:100%;'/>");
				}else{
					alert("已经是第一页啦 !");
					page = page + 1;
				}
			},
			error:function(){
				alert("error");
				page = page + 1;
			}
		});
	});
}

var scoreManage = new ScoreManage();

var data = [];

var page = 1;

$(document).ready(function(){

	scoreManage.init();
	scoreManage.bindEvent();

});

function putBlack(mId,row){
	$.ajax({
		type:"put",
		url:"merchant/"+mId,
		data:{
			"mStatus":4
		},
		dataType:"json",
		success:function(msg){
			if(msg.ok == 1){
				alert("拉黑商家成功");
				$("#lowMerchant_data_table tr:eq("+row+")").hide();
			}else {
				alert("拉黑商家失败");
			}
		},
		error:function(){
			alert("error");
		}
	});
}


