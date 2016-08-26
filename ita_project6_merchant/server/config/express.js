//配置express的中间件，将app传入路由控制系统

const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const path = require("path");
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();
// var filter = require('../controllers/merchant.server.controller');
/*var registImg =  require("./uploadImg");
var mongoose = require("mongoose");
var Merchant=mongoose.model("merchant");*/

// var users = require("../routes/user.server.route");
// var foods = require("../routes/food.server.route");
// var orders = require("../routes/order.server.route");
// var mer = require("../routes/merchant.server.route"); 

var app = express();
app.use(express.static("./public"));
app.use(session({secret:"abc"}));
app.use(cookieParser());
app.use(bodyParser.json());//Content-Type:application/json
app.use(bodyParser.urlencoded());//uname=aaa&age=12
app.use(multipartyMiddleware);
// 登录拦截器
// app.use(function(req,res,next){
// 	var url=req.originalUrl;
//     console.log(url);  
// 	 if(url !="/merchant/login"&&url !="/merchant/regist"&&url!="/merchant/checkTel"&&!req.session.merchant){
//        //console.log("checked... true.......");
// 	  // res.redirect("../merchant/login");
//      res.json({msg:"error!"})
//      return;
// 	}
// 	next();
// })

//require("../routes/user.server.route")(app);
require("../routes/merchant.server.route")(app);
require("../routes/food.server.route")(app);
require("../routes/order.server.route")(app);

// app.use('/users',users);
// app.use('/merchant',filter.filterLogin,mer);
// app.use('/orders',filter.filterLogin,orders);
// app.use('/food',filter.filterLogin,foods);

/*app.route("/upload")
    .post(function (req,res) {
        var merchant = new Merchant(req.body);
        var m = req.body;

        //merchant.mCardPath = req.files.file.originalFilename;
        var name = req.files.file.path.split('\\')[6];
        console.log(name);
        merchant.mCardPath = name;
        merchant.mLogoPath = name;

        // merchant.mLogoPath = req.files.file2.originalFilename;
        // var name1 = req.files.file2.path.split('\\')[6];
        // console.log(name1);
        // merchant.mLogoPath = name1;

        // logoImage.saveImage(req.files.file.originalFilename,req.files.file.path)
        merchant.save(function (err,merchant) {
            if(!err){
                console.log('save merchant success')
                registImg.saveImage(name,req.files.file.path);
                res.json({msg:'SUCCESS'})
            }else{
                console.log({msg:'ERROR'})
                res.json({msg:'ERROR',data:'mname is exists'})
            }
        })
    })
    .get(function (req,res) {
        console.log("upl...post");
        res.json({size:0});
    })*/


module.exports = app;