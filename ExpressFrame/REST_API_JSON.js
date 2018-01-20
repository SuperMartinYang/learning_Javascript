/**
REST即表述性状态传递
表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计
就是RESTful。需要注意的是，REST是设计风格而不是标准。REST通常基于使用HTTP，URI，
和XML（标准通用标记语言下的一个子集）以及HTML（标准通用标记语言下的一个应用）这
些现有的广泛流行的协议和标准。REST 通常使用 JSON 数据格式。
*/
var express = require('express');
var app = express();
var fs = require('fs');
//获取用户列表
app.get('/listUsers',function(req,res){
	fs.readFile(__dirname+'/'+'user.json','utf8',function(err,data){
		console.log(data);
		res.end(data);
	})
})
//添加用户
var user = {
	'user4':{
		'name':'yang',
		'password':'password4',
		'profession':'profession4',
		'id':4
	}
}

app.get('/addUser',function(req,res){
	//读取已存在的数据
	fs.readFile(__dirname+'/'+'user.json','utf8',function(err,data){
		data = JSON.parse(data);
		data['user4'] = user['user4'];
		console.log(data);
		fs.writeFile(__dirname+'/'+'user.json',data,function(err){
			if(err){
				console.log(err);
			}
		})
		res.end(JSON.stringify(data));
	})
})
//读取指定用户
app.get('/:id',function(req,res){
	fs.readFile(__dirname+'/'+'user.json','utf8',function(err,data){
		data = JSON.parse(data);
		var user = data['user'+req.params.id];
		console.log(user);
		res.end(JSON.stringify(user));
	})
})
//删除用户
app.get('/deleteUser?:id',function(req,res){
	fs.readFile(__dirname+'/'+'user.json','utf8',function(err,data){
		data = JSON.parse(data);
		delete data['user'+req.params.id];
		console.log(data);
		res.end(JSON.stringify(data));
	})
})

var server = app.listen(8888,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('应用实例，访问地址为http://%s:%s',host,port);
})