const mongoose = require("mongoose");
//require("../models/user.server.model");
require("../models/merchant.server.model");
require("../models/food.server.model");
require("../models/order.server.model");

mongoose.Promise = global.Promise;
var db= mongoose.connect("mongodb://zha-ita112-w7:27017/ita_p6_merchant");


module.exports = db;
