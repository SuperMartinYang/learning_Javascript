var http = require('http');
var fs = require('fs');
var url = require('url');

//创建服务器
http.createServer(function(request,response){
	//解析请求，包括文件名
	var pathname = url.parse(request.url).pathname;
	//输出请求的文件名
	console.log("Request for "+pathname+" received!");
	//从文件系统中读取请求的文件
	fs.readFile(pathname.substr(1),function(err,data){
		if(err){
			//发生错误：HTTP状态码：404
			console.log(err);
			//Content-Type:text/plain
			response.writeHead(404,{'Content-Type':'text/plain'});
		}else{
			//成功请求：HTTP状态码：200
			console.log('success!');
			response.writeHead(200,{'Content-Type':'text/html'});
			response.write(data.toString());
		}
		response.end();
	});
}).listen(8888);

console.log('Server is running at http://localhost:8888');