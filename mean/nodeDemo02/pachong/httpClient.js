const http =require("http");
var cheerio = require("cheerio");

var options = {
  hostname: 'bbs.csdn.net',
  port: 80,
  path: '/home',
  method: 'get',
  headers: {

  }
};


var file = "";
var req = http.request(options, function(res){
  res.on('data',function(chunk){

    
    file += chunk.toString();

    
  })


  res.on("end",function(req,res){
    var $ = cheerio.load(file);
    $(".recom_tech h4, .recom_life h4").each(function(i,item){
        console.log("\n"+":::"+$(item.children[1]).text()+":::");
        $(item.parentNode).find("ul li").each(function(i,item1){
          console.log();
          console.log("作 者:"+$(item1).find(".writer").text());
          console.log("推荐者:"+$(item1).find("a").eq(1).text());
          console.log("标 题:"+$(item1).find(".title").text());
          console.log("类 型:"+$(item1).find(".classfiy").text()); 
        })
    });
    $(".hot_bbs h4").each(function(i,item){
        console.log("\n"+":::"+$(item.children[2]).text().trim()+":::");
        $(item.parentNode).find("ul").eq(i).find("li").each(function(i,item1){
          console.log();
          console.log("标 题:"+$(item1).find(".title").text());
          console.log("类 型:"+$(item1).find(".classfiy").text()); 
        })
    });
  
  })
  
 
});

req.end();
