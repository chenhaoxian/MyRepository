//传入express的server，将路径信息分配到controller上

const c = require("../controller/merchant.server.controller");

function fn(app){

    // app.route("/merchant/:param")
    // .get(c.findAllMerchant)
    // .put(c.updateMerchantStatus);

    // app.route("/lowMerchant/:page_score_num")
    // .get(c.findAllLowMerchant);

    // app.route("/mStatus")
    // .get(c.getAllMerchantStatus);

    // app.route("/mStatus/:mId")
    // .get(c.getMerchantStatus);

    app.route("/merchant")
        .get(c.findAllMerchant);

    app.route("/merchant/:mId")
        .put(c.updateMerchantStatus);

    app.route("/mStatus")
        .get(c.getAllMerchantStatus);

    app.route("/mStatus/:mId")
        .get(c.getMerchantStatus);

}

module.exports = fn;