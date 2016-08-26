const mongoose=require("mongoose")

var MerchantSchema=new mongoose.Schema({
    mPersonName:String,
    mTel:String,
    mIdCard:String,
    mCardPath:String,
    mLocation:String,
    mBrand:String,
    mLogoPath:String,
    mPassword:String,
    mStark:Number,
})

mongoose.model("merchant",MerchantSchema);