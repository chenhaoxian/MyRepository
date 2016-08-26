const c=require("../controllers/food.server.controller");
function fn(app){

	app.route("/food")
	.post(c.addFood)
	.get(c.findFood)

	app.route("/food/:id")
	.put(c.pushFood)
	.delete(c.deleteFood)

}
module.exports=fn;