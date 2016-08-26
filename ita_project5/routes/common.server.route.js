//传入express的server，将路径信息分配到controller上

const s = require("../controller/common.server.controller.js");

function fn(app){

	app.route("/common/tels")
	.get(s.getAllTel);

	app.route("/common/merchant/:tel")
	.get(s.searchMerchant);

	app.route("/common/:mId")
	.put(s.updateMerchant);
}

module.exports = fn;