
//引入express模块
var express = require('express');
//引入cookie解析模块
var cookieParser = require('cookie-parser');
//实例一个express框架的对象
var app = express();
//这个对象使用cookie解析的对象
app.use(cookieParser());
//设置get请求根目录的响应
app.get('/',function(req,res){
	//在控制台输出请求的cookie
	console.log('Cookies:',req.cookiels)
})
//设置监听端口为8888
app.listen(8888);