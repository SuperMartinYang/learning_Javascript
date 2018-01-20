var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write(util.inspect(url.parse(req.url,true)));
	res.end();
}).listen(3000);