/**
 * Created by CHENHY on 8/23/2016.
 */
var ejs = require("ejs");
ejs.renderFile("template.ejs",{title:"hyman"},function (err,rs) {
    console.log(rs);
})