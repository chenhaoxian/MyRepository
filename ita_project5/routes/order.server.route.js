//传入express的server，将路径信息分配到controller上

const o = require("../controller/order.server.controller");

function fn(app){
	// app.route("/order/:params")
	// .get(o.findAllOrder)
	// .put(o.updateOrderStatus);

	// app.route("/order/getOrderDetails/:oId")
	// .get(o.getOrderDetails);

	app.route("/order")
	.get(o.findAllOrder);

	app.route("/order/:oId")
		// .get(o.getOrderDetails)
		.put(o.updateOrderStatus);

	// app.route("/order/status")
	// .put(o.updateOrderStatus);



}				

module.exports = fn;