// var url=require("url");
// var s="http://localhost:3000/index.html";
// var rs=url.parse(s,true);
// console.log(rs.pathname);


var cheerio = require("cheerio");
var html = "<ul><li>abc</li><li>ggg</li></ul>";
var $=cheerio.load(html);
$("li").each(function(i,item){
	console.log($(item).text());
});