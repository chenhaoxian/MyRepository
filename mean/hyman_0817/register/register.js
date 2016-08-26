var http = require("http");
const bodyParser = require("body-parser");
var querystring = require("querystring");

var options={
	hostname:'zha-ita107-w7',
	port:8082,
	path:'/WeekFourClient/regist',
	method:'Post',
	headers:{
	'Content-Type': 'application/x-www-form-urlencoded'
	 // 'Content-Length': postData.length
	}
}

var a = [];

for(var i = 0; i<10; i++){
	var postData = querystring.stringify({
		'cLocation':'tetet'+i,	
		'cPassword':'33',
		'cPersonName':'etre',
		'cTel':'15544'+i
	});
	a.push(postData);
}



for(var i =0; i<a.length; i++){
	// console.log(a[i]);
	// req.write(a[i]);

	var req = http.request(options, (res) => {
	  console.log(`STATUS: ${res.statusCode}`);
	  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
	  res.setEncoding('utf8');
	  res.on('data', (chunk) => {
	    console.log(`BODY: ${chunk}`);
	  });
	  res.on('end', () => {
	    console.log('No more data in response.')
	  })
	});

	req.on('error', (e) => {
	  console.log(`problem with request: ${e.message}`);
	});

	// write data to request body
	req.write(a[i]);

	req.end();
}
