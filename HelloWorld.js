var http=require("http");

http.createServer(function (request,response){
	//发送HTTP头部
	//HTTP状态值200 :OK
	//内容类型text/plain
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end('HELLO WORLD\n');
}).listen(8888);

//中断打印如下信息
console.log('Server running at http://127.0.0.1:8888/');