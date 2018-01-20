var express = require('express');
var app = express();

//在主页GET请求输出'hello get'
app.get('/',function(req,res){
	console.log('主页GET请求');
	res.send('hello get');
})

//POST请求
app.post('/',function(req,res){
	console.log('主页POST请求');
	res.send('hello post')
})

//del_user页面相应
app.delete('/del_user',function(req,res){
	console.log('/del_user相应DELETE请求');
	res.send('删除页面');
})

app.get('/list_user',function(req,res){
	console.log('/list_user相应GET请求');
	res.send('用户列表页面');
})

app.get('/ab*cd',function(req,res){
	console.log('/ab*cd相应GET请求');
	res.send('正则匹配');
})

var server = app.listen(8888,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('应用实例，访问地址为http://%s:%s',host,port)
})