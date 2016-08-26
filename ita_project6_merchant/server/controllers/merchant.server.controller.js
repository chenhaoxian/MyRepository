const mongoose = require("mongoose");
var Merchant = mongoose.model("merchant");
var request = require("request");
var JMS = require("../jms/jms.js");
var properties = require("../config/properties")
var registImg = require("../config/uploadImg");


//从session获得商家信息
exports.loadMerchant = function (req, res) {

    if(req.session.merchant){
        var wsUrl = properties.wsGetMerchantStatus + req.session.merchant._id;
        // console.log(wsUrl);
        request(wsUrl, function (error, response, body) {
            var b = JSON.parse(body);
            if(b){
                // 密码不发到前台
                // delete b.mPassword;
                // b._id = b.mId;
                req.session.merchant.mStatus = b.mStatus;
                // req.session.merchant = b;
                res.json(req.session.merchant);
            }else{
                res.json({error: "error"});
            }
        })
    }

    // console.log(req.session.merchant);
    // res.json(req.session.merchant)
}

//--验证旧密码--
exports.checkmPassword = function (req, res) {
    console.log("checkmPassword");
    var mTel = req.body.mTel;
    var mPassword = req.body.mPassword;
    Merchant.findOne({"mTel": mTel}, function (err, merchant) {
        console.log(merchant);
        if (mPassword == merchant.mPassword) {
            res.json({msg: 'SUCCESS'})
        } else {
            res.json({error: "checkmPassword error"})
        }
    })
}


//--注册存商家信息--JMS发送--
exports.regist = function (req, res) {
    var m = new Merchant(req.body);
    // console.log("*************"+req.body);
    var fileName = req.files.file.path;
    var name = fileName.substring(fileName.lastIndexOf("\\") + 1, fileName.length);
    // var name = req.files.file.path.split('\\')[6];
    m.mCardPath = name;
    m.mLogoPath = name;

    m.save(function (err) {
        if (!err) {
            registImg.saveImage(name, req.files.file.path);

            Merchant.findOne({mTel: m.mTel}, function (err, m1) {
                var merchant = {};
                merchant._id = m1._id;
                merchant.mId = m1._id;
                merchant.mPersonName = m.mPersonName;
                merchant.mTel = m.mTel;
                merchant.mIdCard = m.mIdCard;
                merchant.mCardPath = m.mCardPath;
                merchant.mLocation = m.mLocation;
                merchant.mBrand = m.mBrand;

                JMS.send(JSON.stringify(merchant));
                merchant.mStatus = 1;
                req.session.merchant = merchant;
                res.json({data: merchant, msg: 'SUCCESS'})
                console.log('save merchant success')
            })


        } else {
            res.json({error: "add merchant error"});
            console.log({msg: 'ERROR'});
        }
    })
}

//--更新密码--
exports.resetPassword = function (req, res) {
    var mPassword = req.body.mPassword;
    var merchant = req.session.merchant;
    Merchant.findOne({_id: merchant._id}, function (err, merchant) {
        merchant.mPassword = mPassword;
        merchant.save(function (err) {
            if (!err) {
                res.json({msg: 'SUCCESS'});
            } else {
                res.json({error: "resetPassword error"});
            }
        })
    })
}


//--注册验证电话是否存在-- 
exports.checkmTel = function (req, res) {
    var mTel = req.body.mTel
    Merchant.findOne({mTel: mTel}, function (err, merchant) {
        if (err) {
            res.json({error: "error"});
        } else if (!merchant) {
            res.json({error: "checkmTel error"})
        } else if (merchant) {
            res.json({msg: 'SUCCESS'})
        }
    })
};

//--登录--
exports.login = function (req, res) {
    console.log("in")
    var mTel = req.body.mTel;
    var mPassword = req.body.mPassword;
    Merchant.findOne({mTel: mTel,mPassword:mPassword}, function (err, merchant) {
        console.log("in1")
        if(merchant){
            var wsUrl = properties.wsGetMerchantStatus + merchant._id;
            console.log(wsUrl);
            request(wsUrl, function (error, response, body) {
                var b = JSON.parse(body);
                if(b){
                    // 密码不发到前台
                    // delete merchant.mPassword;
                    // b._id = b.mId;
                    console.log("in")
                    req.session.merchant = merchant;
                    req.session.merchant.mStatus = b.mStatus;
                    res.json({data: req.session.merchant, msg: 'SUCCESS'})
                }else{
                    console.log("in")
                    res.json({error: "error"});
                }
            })
        }else{
            res.json({error: "error"});
        }

        /*var wsUrl = properties.wsGetMerchantStatus + merchant._id;
        console.log(wsUrl);
        request(wsUrl, function (error, response, body) {
            var b = JSON.parse(body);
            if (b) {
                if (err) {
                    res.json({error: "error"});
                }
                else if (!merchant) {
                    res.json({error: "error"})
                } else {
                    if (mPassword != merchant.mPassword) {
                        res.json({error: "error"})
                    } else {
                        // 密码不发到前台
                        delete b.mPassword;
                        b._id = b.mId;
                        req.session.merchant = b;
                        res.json({data: b, msg: 'SUCCESS'})
                    }
                }
            }
            else {
                res.json({error: "error"});
            }
        })*/
    })

}

//--注销 get--
exports.logout = function (req, res) {
    req.session.destroy();
    res.json({msg: 'SUCCESS'});

}


//--查看商家信息--
exports.getInformation = function (req, res) {
    var merchant = req.session.merchant;
    Merchant.findOne({_id: merchant._id}, function (err, merchant) {
        if (!err) {
            res.json({data: merchant, msg: 'SUCCESS'})
            // res.json(merchant);
        } else {
            res.json({error: "findMerchant error"});
        }
    })
}

//--查询商家评分--
exports.findmStark = function (req, res) {
    var merchant = req.session.merchant;
    Merchant.findOne({_id: merchant._id}, function (err, merchant) {
        var m = merchant.mStark;
        if (!err) {
            res.json({data: m, msg: 'SUCCESS'});
        } else {
            res.json({error: "findmStark error"});
        }
    })
}


//--更新商家信息--
exports.updateInformation = function (req, res) {

    var merchant = req.session.merchant;

    if (req.files.file) {
        var fileName = req.files.file.path;
        var name = fileName.substring(fileName.lastIndexOf("\\") + 1, fileName.length);
        merchant.mCardPath = name;
        merchant.mLogoPath = name;
        registImg.saveImage(name, req.files.file.path);
    }

    merchant.mLocation = req.body.mLocation;
    merchant.mBrand = req.body.mBrand;

    console.log("updateMerchant");

    var uid = merchant._id;

    Merchant.findByIdAndUpdate(uid, merchant, function (err, oldMerchant) {
        Merchant.find({_id: uid}, function (err, merchant) {
            if (!err) {
                res.json({data: merchant, msg: 'SUCCESS'});
            } else {
                res.json({error: "update merchant error"});
            }
        })
    })
}


// exports.filterLogin = function(req, res, next) {
//     console.log('Request URL:', req.originalUrl);
//     if(req.session.merchant){
//         next();
//     }else{
//         res.json({msg:'ERROR'})
//     }
// };