const Stomp = require("stomp-client");
var properties=require("../config/properties.js");
var client=new Stomp(properties.jmsServerPath,properties.jmsServerPort, "", "");

module.exports.send=function(msg){
	client.connect(function(sessionId){
	//生产者
    client.publish(properties.mqQueue,msg,function () {
        client.disconnect();
    });

})
}
