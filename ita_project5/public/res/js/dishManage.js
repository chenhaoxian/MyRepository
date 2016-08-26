function DishManage(){

}

DishManage.prototype.init = function(){
	var self = this;

	$.ajax({
		type:"get",
		// url:"../../../routes/user/"+page,
		url:"food?page="+page+"&per_page=4",
		data:{
		},
		dataType:"json",
		success:function(fList){
			var f_div = $("#div_dish_data");
			if(fList != null && fList != ''){
				var temp = "";
				$.each(fList,function(key,value){
					temp += "<div class='g_6' ><div class='span4'><table style='width: 100%'><tr><td align='center' >" +  //style='border:1px solid #ccc;'
						"<img style='box-shadow: 1px 1px 8px #ccc;width:250px ;height:180px ;' class='img-circle' src='" + picPathHeader+
						value.fViewPath+
						"'/>"+
						"<p>商品名称："+value.fName+"</p>"+
						"<p>商家ID："+value.mId+"</p>";
					if(value.fStatus == 3){
						temp += "<p><button onclick='cancelDish(this,\""+value.fId+"\")' class='button button-pill button-raised button-primary'>取消推荐</button></p>";
					}else{
						temp += "<p><button onclick='pushDish(this,\""+value.fId+"\")' class='button button-pill'>推荐</button></p>";
					}
					temp += "</td></tr></table></div></div>";
					//temp += "<div class='g_6'><div class='span4'><button>test</button></div></div>";
				});
				f_div.append(temp);
			}else{
				var temp = "<tr><td>no record found!</td></tr>";
				f_div.append(temp);
			}
		},
		error:function(){
			alert("error");
		}
	});
}


DishManage.prototype.bindEvent = function(){
	$("#btn_next").click(function(){
		page = page + 1;
		$.ajax({
			type:"get",
			url:"food?page="+page+"&per_page=4",
			data:{
			},
			dataType:"json",
			success:function(fList){
				var f_div = $("#div_dish_data");
				if(fList != null && fList !=''){
					f_div.empty();
					var temp = "";
					$.each(fList,function(key,value){
						temp += "<div class='g_6'><div class='span4'><table style='width: 100%'><tr><td align='center'>" +
							"<img style='box-shadow: 1px 1px 8px #ccc;width:250px ;height:180px ;' class='img-circle' src='" + picPathHeader+
							value.fViewPath+
							"'/>"+
							"<p>商品名称："+value.fName+"</p>"+
							"<p>商家ID："+value.mId+"</p>";
						if(value.fStatus == 3){
							temp += "<p><button onclick='cancelDish(this,\""+value.fId+"\")' class='button button-pill button-raised button-primary'>取消推荐</button></p>";
						}else{
							temp += "<p><button onclick='pushDish(this,\""+value.fId+"\")' class='button button-pill'>推荐</button></p>";
						}
						temp += "</td></tr></table></div></div>";
						//temp += "<div class='g_6'><div class='span4'><button>test</button></div></div>";
					});
					f_div.append(temp);
				}else{
					alert("没有数据啦 !");
					page = page - 1;
				}
			},
			error:function(){
				alert("error");
			}
		});
	});


	$("#btn_previous").click(function(){
		page = page - 1;
		$.ajax({
			type:"get",
			url:"food?page="+page+"&per_page=4",
			data:{
			},
			dataType:"json",
			success:function(fList){
				var f_div = $("#div_dish_data");
				if(fList != null && fList !=''){
					f_div.empty();
					var temp = "";
					$.each(fList,function(key,value){
						temp += "<div class='g_6'><div class='span4'><table style='width: 100%'><tr><td align='center'>" +
							"<img style='box-shadow: 1px 1px 8px #ccc;width:250px ;height:180px ;' class='img-circle' src='" + picPathHeader+
							value.fViewPath+
							"' />"+
							"<p>商品名称："+value.fName+"</p>"+
							"<p>商家ID："+value.mId+"</p>";
						if(value.fStatus == 3){
							temp += "<p><button onclick='cancelDish(this,\""+value.fId+"\")' class='button button-pill button-raised button-primary'>取消推荐</button></p>";
						}else{
							temp += "<p><button onclick='pushDish(this,\""+value.fId+"\")' class='button button-pill'>推荐</button></p>";
						}
						temp += "</td></tr></table></div></div>";
						//temp += "<div class='g_6'><div class='span4'><button>test</button></div></div>";
					});
					f_div.append(temp);
				}else{
					alert("已经是第一页啦 !");
					page = page + 1;
				}
			},
			error:function(){
				alert("error");
			}
		});
	});

}

var dishManage = new DishManage();

var data = [];

var page = 1;

$(document).ready(function(){

	dishManage.init();
	dishManage.bindEvent();

});

function cancelDish(t,fId){
	//$(this).addClass('classname');
	$.ajax({
		type:"put",
		url:"/food/"+fId,
		data:{
			"fStatus" : 2
		},
		dataType:"json",
		success:function(msg){
			if(msg.ok == 1){
				//alert("取消推荐成功");
				$(t).removeClass('button-raised button-primary');
				$(t).text("推荐");
				$(t).removeAttr('onclick');
				$(t).attr('onclick', '').unbind('click').click( function () { pushDish(t,fId);});
			}else{
				alert("操作失败");
			}
		},
		error : function(){
			alert("error");
		}
	});

}

function pushDish(t,fId){
	$.ajax({
		type:"put",
		url:"/food/"+fId,
		data:{
			"fStatus" : 3
		},
		dataType:"json",
		success:function(msg){
			if(msg.ok == 1){
				//alert("设置推荐菜品成功");
				$(t).addClass('button-raised button-primary');
				$(t).text("取消推荐");
				$(t).attr('onclick','cancelDish('+t+','+fId+')');
				$(t).attr('onclick', '').unbind('click').click( function () { cancelDish(t,fId);});
			}else{
				alert("操作失败");
			}
		},
		error : function(){
			alert("error");
		}
	});
}


