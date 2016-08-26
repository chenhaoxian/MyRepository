const c=require("../controllers/merchant.server.controller");
function fn(app){

	app.route("/merchant/loadMerchant")
	.get(c.loadMerchant)

	app.route("/merchant/login")
	.post(c.login)

	app.route("/merchant/regist")
	.post(c.regist)

	app.route("/merchant/checkPassword")
	.post(c.checkmPassword)

	app.route("/merchant/checkTel")
	.post(c.checkmTel)

	app.route("/merchant/mStark")
	.get(c.findmStark)

	app.route("/merchant/logout")
	.get(c.logout)

	app.route("/merchant")
	.get(c.getInformation)
	.put(c.updateInformation)

	app.route("/merchant/resetPassword")
	.put(c.resetPassword)

}
module.exports=fn;