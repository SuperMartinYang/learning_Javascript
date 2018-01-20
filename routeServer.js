var http = require('http');
var url = require('url');

function start(route){
	//创建一个内部函数用于相应请求
	function onRequest(request,response){
		//对请求的url进行转义得到请求的路径名-->得到“ / ”
		var pathname = url.parse(request.url).pathname;
		//打印请求的路径
		console.log('Request for '+pathname+' received.');
		//将“ / ”传给route
		route(pathname);
		//设置响应头
		response.writeHead(200,{'Content-type':'text/plain'});
		//设置响应内容
		response.write('Hello world');
		//请求结束
		response.end();
	}
	//设置监听端口8888，onRequest作为Server
	http.createServer(onRequest).listen(8888);
	//打印监听过程
	console.log('Server has started.');
}
//将start函数作为routeRoute的公开接口
exports.start = start;