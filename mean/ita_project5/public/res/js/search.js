function Search(){
	
}

Search.prototype.init = function(){
	$.ajax({
		type:"post",
		url:"../search/get/telList",
		data:{},
		cache : false,
		dataType: "json",
		processData : true,
		async: false,
		success: function(result){
//			alert(result);
			tel_data = result;
		},
		error : function(){
			alert("获取电话列表失败！");
		}
	});
	
	$("#input_tel").autocomplete(tel_data, {
		width: 400,
		onFindValue: function(){
		},
		matchContains: true,
		highlight: false,
		scroll: true,
		scrollHeight: 300,
		formatItem: function(row) {
	    	return row[0];
		  },
		  formatResult: function(row) {
	    	return row[0];
	  	}
	});
}


Search.prototype.bindEvent = function(){
	var tbody = $("#merchant_data_table");
	
	$("#btn_search_tel").click(function(){
			var input_tel = $.trim($("#input_tel").val());
			if(input_tel == "" || input_tel == null){
				alert("请输入电话号码");
			}else{
				tbody.empty();
				$.ajax({
					type: "post",
					url: "../search/merchant/"+input_tel,
					data: {
					},
					cache: true,
					dataType : "json",
					success: function(data){
//						alert(data);
						if(data != null){
							var resultRow = "<tr align='center' >" +
									"<td>"+data.mPersonName+"</td>" +
									"<td>"+data.mTel+"</td>" +
									"<td>"+data.mIdCard+"</td>" +
									"<td>"+data.mBrand+"</td>" +
									"<td>"+data.mLocation+"</td>" ;
							if(data.mStatus == 2 ){
								resultRow += "<td>通过审核</td>" +
										"<td><button class='button button-tiny' id='btn_m_"+data.mId+"' onclick='updateMerchantStatus("+data.mId+",4)'>拉黑</td></tr>";
							}else if(data.mStatus == 4){
								resultRow += "<td>黑名单</td>"+
								"<td><button id='btn_m_"+data.mId+"' class='button button-tiny' onclick='updateMerchantStatus("+data.mId+",2)'>拉白</td></tr>";
							}
//									"<td>"+data.mTel+"</td>" +
//									"<td>"+data.mTel+"</td>" +
//									"</tr>";
							tbody.append(resultRow);
	//						$("#btn_previous").attr("disabled","disabled");
	//						$("#btn_next").attr("disabled","disabled");
						}else{
							var resultRow = "<tr><td>no data found!</td></tr>";
							tbody.append(resultRow);
						}
					},
					error : function(){
						alert("对不起，没有这个电话！");
					}
				});
			}
		});
}

var search = new Search();

var tel_data = [];

$(document).ready(function(){

	search.init();	
	search.bindEvent();

});

function updateMerchantStatus(mId, status){
	$.ajax({
		type:"post",
		url:"../search/merchant/update/"+mId+"/"+status,
		data:{
		},
		success: function(msg){
			if(msg == "success"){
//				$(t).addClass('button-raised button-primary');
//				$(t).text("取消推荐");
//				$(t).attr('onclick','cancelDish('+t+','+fId+')');
//				$(t).attr('onclick', '').unbind('click').click( function () { cancelDish(t,fId);});  
				$("#merchant_data_table").empty();
			}
		}
	})
}

