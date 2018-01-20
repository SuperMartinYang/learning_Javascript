//web的客户端访问模块

var http = require('http');

//用于请求的选项
var options = {
	host:'localhost',
	port:'8888',
	path:'/basicjs.html'
};

//处理相应的回掉函数
var callback = function(response){
	//不断更新数据
	var body = '';
	response.on('data',function(data){
		body += data;
	});
	response.on('end',function(){
		console.log(body);
	});
}

//向服务器发起请求
var req = http.request(options,callback);
req.end();