const mongoose = require("mongoose");
var Food = mongoose.model("food");

exports.findAllfood = function(req,res){
	console.log("===============");
	var page = parseInt(req.query.page);
	var per_page = parseInt(req.query.per_page);
	if(page == 0){
		res.json(null);
	}else{
		var query=Food.find({});
		query.limit(4);
		query.skip((page-1)*4);
		query.exec(function(err,foods){
			res.json(foods);
		});
	}
}

exports.allPassFood = function(req,res){
	Food.find({"fStatus":3},{_id:0,fId:1},function(err,food){
		res.json(food);
	})
}

exports.saveFood = function(body){
	var food_data = JSON.parse(body);
	console.log(food_data);
	var food = new Food(
			{
				"fId" : food_data.fId,
				"fName" : food_data.fName,
				"mId" : food_data.mId,
				"fViewPath" : food_data.fViewPath,
				"fStatus" : 2
			}
		);
	food.save(function(err){
		if(err){
			console.log("save food error");
		}else{
			console.log("save food success");
		}
	})
}

exports.updateFoodStatus = function(req,res){
	var fId = req.params.fId;
	var query = {"fId":fId};
	Food.update(query,{ $set: { "fStatus": req.body.fStatus }},function(err,food){
		console.log(food.ok);
		// res.send("success");
		res.json(food);
	});
}


