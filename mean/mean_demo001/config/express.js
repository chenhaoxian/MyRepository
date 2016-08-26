//配置Express的中间件，将APP闯入到路由控制系统
const express = require("express");

const session = require("express-session");
const bodyParser = require("body-parser"); 

var app= express();

app.use(express.static("../public"));
app.use(session({secret:"abc"}));
app.use(bodyParser.urlencoded());
require("../routes/user.server.route")(app);


module.exports = app;


