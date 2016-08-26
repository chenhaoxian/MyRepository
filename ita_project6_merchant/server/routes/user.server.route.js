//传入Express的server,将路径信息分配到controller上
const c = require("../controllers/user.server.controller");

function fn(app){
	app.route("/user")
	.get(c.findAllUser)
	.post(c.addUser);

	app.route("/user/:id")
	.get(c.loadUser)
	.put(c.updateUser)
	.delete(c.deleteUser);
}

module.exports = fn;