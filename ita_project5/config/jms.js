var Stomp = require('stomp-client');
var merchantController = require("../controller/merchant.server.controller");
var orderController = require("../controller/order.server.controller");
var foodController = require("../controller/food.server.controller");
var logger = require('../utils/logger');

var ita_p5_mq = "/queue/ita_p6_mq";

var client = new Stomp('127.0.0.1', 61613);

client.connect(function(sessionId) {
    client.subscribe(ita_p5_mq, function(body, headers) {
		logger.info(body);
      if(body.indexOf("#") >= 0 ){
      	var patrn=/^\d*#\d+(\.\d+)?$/;
    		if (patrn.exec(body)){
    			console.log("merchant score");
    			merchantController.updateMerchantScore(body);
    		}else {
    			console.log("complaint order data ");
          		orderController.saveOrder(body);
    		}
      }else if(body.indexOf("{") >= 0 ){
		  console.log("{ is contain");
      	if(body.indexOf("fId") > 0){
      		console.log("food data");
			foodController.saveFood(body);
      	}else{
      		console.log("merchant data");
      		merchantController.saveMerchant(body);
      	}
      }
    });
});