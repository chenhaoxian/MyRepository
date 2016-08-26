//配置Express的中间件，将APP闯入到路由控制系统
const express = require("express");

const session = require("express-session");
const bodyParser = require("body-parser");

var app= express();

app.use(express.static("./public"));
app.use(session({secret:"abc"}));
app.use(bodyParser.json());//Content-Type : application/json
app.use(bodyParser.urlencoded());
require("../routes/merchant.server.route")(app);
require("../routes/food.server.route")(app);
require("../routes/order.server.route")(app);
require("../routes/common.server.route.js")(app);
require("../routes/ws.server.route")(app);



module.exports = app;