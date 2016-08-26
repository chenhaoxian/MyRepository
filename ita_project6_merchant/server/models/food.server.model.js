const mongoose=require("mongoose")

var FoodSchema=new mongoose.Schema({
    fName:String,
    mId:String,
    fPrice:Number,
    fViewPath:String,
    fStatus:Number
})

mongoose.model("food",FoodSchema);