/**
stream 是一个抽象接口，node中有很多对象实现了这个接口，例如，对HTTP服务器发起请求的request对象就是一个Stream，还有一个stdout（标准输出）
*/
var fs = require('fs');
var data = '';

//创建一个可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码为utf8
readerStream.setEncoding('UTF8');

//设置流事件-->data,end,and error
readerStream.on('data',function(chunk){
	data+=chunk;
});

readerStream.on('end',function(){
	console.log(data);
});

readerStream.on('error',function(err){
	console.log(err.stack);
});

console.log('程序执行完毕');