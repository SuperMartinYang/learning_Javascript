var express = require('express');
var app = express();
//引入body解析模块
var bodyParser = require('body-parser');

//创建application/x-www-form-urlencode编码解析，对body解析的实例，设置extended为false（不扩展）
var urlencodeParser = bodyParser.urlencoded({extended:false});
//使用public目录作为根目录
app.use(express.static('public'));
//get页面indexPOST.html页面响应
app.get('/indexPOST.html',function(req,res){
	res.sendFile(__dirname+'/'+'indexPOST.html');
})
//post请求/process_post时的响应，urlencodeParser用来设置body的解析模式，回调函数用来显示请求响应
app.post('/process_post',urlencodeParser,function(req,res){
	//输出JSON格式
	response = {
		first_name:req.body.first_name,
		last_name:req.body.last_name
	};

	console.log(response);
	res.end(JSON.stringify(response));
})

var server = app.listen(8888,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('应用实例，访问地址http://%s:%s',host,port);
})