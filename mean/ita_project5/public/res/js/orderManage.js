function OrderManage(){
	
}

OrderManage.prototype.init = function(){
	var self = this;
	
	$.ajax({
		type:"post",
		url:"../../order/get/allOrder/"+page_order,
		data:{
		},
		dataType:"json",
		success:function(oList){
			var m_tbody = $("#div_order_data");
			if(oList != null && oList !=''){
				m_tbody.empty();
				var trs = "";
				$.each(oList,function(key,value){
					trs += "<tr align='center' id='order_tr_"+value.oId+"'>" +
							"<td>"+value.oId+"</td>" +
							"<td>"+value.mBrand+"</td>" +
							"<td class='toggle' onclick='showOrhidd("+value.oId+")'><span type='button' id='"+value.oId+"' style='margin-left:15px;'><i class='fa fa-lg fa-angle-down fa-angle-double-up'></i></span></td>"+
							"</td>" +
							"</tr>" +
							"<tr align='center' class='form' id='f"+value.oId+"' style='display:none; background-color: #f5f5f5'>" +
							"<td colspan='3'><div id='oMsg_'"+value.oId+"></div></td>" +
							"</tr>" ;
				});
				m_tbody.append(trs);
//				$("#div_test").append("<img class='img-circle' src='10.222.232.145:8080/imgs/15007115195/IDCard.jpg' style='width:100%;height:100%;'/>");
			}else{
				alert("没有数据啦 !");
				page_order = page_order - 1;
			}
		},
		error:function(){
			alert("error");
			page_order = page_order - 1;
		}
	});
	
}


OrderManage.prototype.bindEvent = function(){
	
	$("#btn_next").click(function(){
		page_order = page_order + 1;
		$.ajax({
			type:"post",
			url:"../../order/get/allOrder/"+page_order,
			data:{
			},
			dataType:"json",
			success:function(oList){
				var m_tbody = $("#div_order_data");
				if(oList != null && oList !=''){
					m_tbody.empty();
					var trs = "";
					$.each(oList,function(key,value){
						trs += "<tr align='center' id='order_tr_"+value.oId+"'>" +
								"<td>"+value.oId+"</td>" +
								"<td>"+value.mBrand+"</td>" +
								"<td class='toggle' onclick='showOrhidd("+value.oId+")'><span type='button' id='"+value.oId+"' style='margin-left:15px;'><i class='fa fa-lg fa-angle-down fa-angle-double-up'></i></span></td>"+
								"</td>" +
								"</tr>" +
								"<tr align='center' class='form' id='f"+value.oId+"' style='display:none; background-color: #f5f5f5'>" +
								"<td colspan='3'><div id='oMsg_'"+value.oId+"></div></td>" +
								"</tr>" ;
					});
					m_tbody.append(trs);
//					$("#div_test").append("<img class='img-circle' src='10.222.232.145:8080/imgs/15007115195/IDCard.jpg' style='width:100%;height:100%;'/>");
				}else{
					alert("没有数据啦 !");
					page_order = page_order - 1;
				}
			},
			error:function(){
				alert("error");
				page_order = page_order - 1;
			}
		});
	});
	
	$("#btn_previous").click(function(){
		page_order = page_order - 1;
		$.ajax({
			type:"post",
			url:"../../order/get/allOrder/"+page_order,
			data:{
			},
			dataType:"json",
			success:function(oList){
				var m_tbody = $("#div_order_data");
				if(oList != null && oList !=''){
					m_tbody.empty();
					var trs = "";
					$.each(oList,function(key,value){
						trs += "<tr align='center' id='order_tr_"+value.oId+"'>" +
								"<td>"+value.oId+"</td>" +
								"<td>"+value.mBrand+"</td>" +
								"<td class='toggle' onclick='showOrhidd("+value.oId+")'><span type='button' id='"+value.oId+"' style='margin-left:15px;'><i class='fa fa-lg fa-angle-down fa-angle-double-up'></i></span></td>"+
								"</td>" +
								"</tr>" +
								"<tr align='center' class='form' id='f"+value.oId+"' style='display:none; background-color: #f5f5f5'>" +
								"<td colspan='3'><div id='oMsg_'"+value.oId+"></div></td>" +
								"</tr>" ;	
					});
					m_tbody.append(trs);
//					$("#div_test").append("<img class='img-circle' src='10.222.232.145:8080/imgs/15007115195/IDCard.jpg' style='width:100%;height:100%;'/>");
				}else{
					alert("已经第一页啦 ");
					page_order = page_order + 1;
				}
			},
			error:function(){
				alert("error");
				page_order = page_order + 1;
			}
		});
	});
}

var orderManage = new OrderManage();

var data = [];

var page_order = 1;

$(document).ready(function(){

	orderManage.init();	
	orderManage.bindEvent();

});

function showOrhidd(oId){
	$('#'+oId).children('i').toggleClass('fa-angle-down');
	$('#f'+oId).animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
    }, "normal");
	$("#oMsg_"+oId).empty();
	$.ajax({
		type:"post",
		url:"../../order/get/orderDetailByOid/"+oId,
		data:{},
		success:function(vOrder){
			var div_oMsg = $("#oMsg_"+oId);
			var trs = "";
			var date1 = new Date(vOrder.startTime).Format("yyyy-MM-dd hh:mm:ss");
			var date2 = new Date(vOrder.confirmTime).Format("yyyy-MM-dd hh:mm:ss");
			var date3 = new Date(vOrder.finishTime).Format("yyyy-MM-dd hh:mm:ss");
			trs = "<p>用户下单时间："+date1+"</p>" +
					"<p>商家确认时间："+date2+"</p>" +
					"<p>用户确认时间："+date3+"</p>"+
					"<p>投诉信息："+vOrder.complaint+"</p>" +
					"<p><table ><tbody><tr><td>食物名称</td><td>食物价格</td><td>食物数量</td></tr>";
			$.each(vOrder.foodList,function(key,value){
				trs += "<tr align='center'>" +
						"<td>"+value.fName+"</td>" +
						"<td>"+value.fPrice+"</td>" +
						"<td>"+value.num+"</td>" +
						"</tr>" ;	
			});
			trs += "</tbody></table></p>";
			trs += "<p><select id='select_"+oId+"'>" +
					"<option value ='2'>驳回投诉</option>"+
					"<option value ='3'>扣除押金</option>"+
					"<option value ='4'>拉黑商家</option>"+
					"</select></p>" +
					"<p><button onclick='handleOrder("+oId+","+vOrder.mId+")'>确认</button></p>";
			div_oMsg.append(trs);
			

			
		}
	})
}


Date.prototype.Format = function(fmt) 
{ //author: meizz 
  var o = { 
    "M+" : this.getMonth()+1,                 //月份 
    "d+" : this.getDate(),                    //日 
    "h+" : this.getHours(),                   //小时 
    "m+" : this.getMinutes(),                 //分 
    "s+" : this.getSeconds(),                 //秒 
    "q+" : Math.floor((this.getMonth()+3)/3), //季度 
    "S"  : this.getMilliseconds()             //毫秒 
  }; 
  if(/(y+)/.test(fmt)) 
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  for(var k in o) 
    if(new RegExp("("+ k +")").test(fmt)) 
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
  return fmt; 
}

function handleOrder(oId,mId){
//	alert(oId);
//	alert($("#select_"+oId).find("option:selected").attr("value"));
	var select_value = $("#select_"+oId).find("option:selected").attr("value");
	var toUrl = "";
	if(select_value == 2){
		
		toUrl = "../../order/put/rejectOrder/"+oId;
	}else if(select_value == 3){
		toUrl = "../../order/put/deductOrder/"+oId;
	}else if(select_value == 4){
		toUrl = "../../order/put/blackOrder/"+oId+"/"+mId;
	}
	$.ajax({
		type:"post",
		url:toUrl,
		data:{},
		success:function(msg){
			if(msg == "success"){
				$("#order_tr_"+oId).hide();
				$("#f"+oId).hide();
			}else{
				alert("fail");
			}
		},
		error:function(){
			alert("error");
		}
	})

}


