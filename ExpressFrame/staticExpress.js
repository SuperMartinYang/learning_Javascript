//静态路径可以让某个文件夹成为一个站点，供别人访问
var express = require('express');
var app = express();

app.use(express.static('public'));
//设置默认的访问相应
app.get('/',function(req,res){
	res.send('hello world');
})

var server = app.listen(8888,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('应用实例，访问地址为http://%s,%s',host,port);
})