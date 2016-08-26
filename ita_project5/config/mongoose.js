const mongoose = require("mongoose");

require("../models/merchant.server.model");
require("../models/food.server.model");
require("../models/order.server.model");

var db = mongoose.connect("mongodb://localhost:27017/ita_project6");

module.exports = db; //暴露db
