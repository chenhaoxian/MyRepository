/**
 * Created by CHENHY on 8/24/2016.
 */
const ws = require("../controller/ws.server.controller");

function fn(app){

    app.route("/ws/merchant")
        .get(ws.getPassMerchant);

    app.route("/ws/merchant/:mId")
        .get(ws.getMerchantById);

    app.route("/ws/food")
        .get(ws.getPassFood);

    app.route("/ws/order/:oId")
        .get(ws.getOrderById);

    app.route("/ws/detail/:oId")
        .get(ws.getOrderDetails);



}

module.exports = fn;