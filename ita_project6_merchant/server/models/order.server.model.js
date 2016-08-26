/**
 * Created by CHENHY on 8/24/2016.
 */


const mongoose = require("mongoose");

var OrderSchema=new mongoose.Schema({
    cId:String,
    mId:String,
    foodInfo:[{}],
    oStatus:Number,
    startTime:Date,
    confirmTime:Date,
    finishTime:Date,
    oStark:Number,
    complaint:String,
    merchant:{},
    client:{}

});

mongoose.model("order",OrderSchema);