//传入express的server，将路径信息分配到controller上

const f = require("../controller/food.server.controller");

function fn(app){

	// app.route("/food/:params")
	// .get(f.findAllfood)
	// .put(f.updateFoodStatus);

	// app.route("/passFood")
	// .get(f.allPassFood);

	// app.route("/food")
	// .get(f.allPassFood);
	// .put(f.updateFoodStatus);

	app.route("/food") //分页 前台food?page_dish=
	.get(f.findAllfood);

	app.route("/food/:fId")
	// .get(f.allPassFood)
	.put(f.updateFoodStatus);  //{"fId":XXX,"fStatus":XXX}

}

module.exports = fn;