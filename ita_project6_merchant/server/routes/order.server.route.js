const c=require("../controllers/order.server.controller");
function fn(app){

	app.route("/order/new")
	.get(c.findNewOrder);

	app.route("/order/complaint")
	.get(c.findComplaintOrder);

	app.route("/order/:id")
	.get(c.findResult)
	.put(c.UpdateOrderStatus);

	app.route("/order")
	.get(c.findAllOrder);




	

}
module.exports=fn;