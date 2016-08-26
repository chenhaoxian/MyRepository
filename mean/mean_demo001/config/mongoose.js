const mongoose = require("mongoose");

require("../models/user.server.model");

var db = mongoose.connect("mongodb://localhost:27017/oocl03");

module.exports = db; //暴露db
