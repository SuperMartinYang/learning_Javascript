var express = require('express');
var app = express();
//设置使用同目录下的public目录为静态目录（访问的根目录）
app.use(express.static('public'));
//设置get请求/indexGET.html页面的相应（即发送__dirname/index.html文件）__dirname就是设置的静态路径
app.get('/indexGET.html',function(req,res){
	res.sendFile(__dirname+'/'+'indexGET.html');
})
//设置get请求/process_get页面的响应
app.get('/process_get',function(req,res){
	//输出json格式
	response = {
		//req.query.first_name获取request中query(请求的内容放在query中)中的first_name
		first_name:req.query.first_name,
		last_name:req.query.last_name
	};
	//控制台输出response
	console.log(response);
	//response响应回去JSON格式的response
	res.end(JSON.stringify(response));
})
//设置监听端口，并且在回调函数中控制台打印地址端口信息
var server = app.listen(8888,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('应用实例，访问地址为http://%s,%s',host,port);
})