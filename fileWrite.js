var fs = require('fs');

fs.writeFile('./input.txt','杨省辉更新啦！',function(err){
	if(err){
		return console.log(err);
	};

	console.log('写入成功！');
	fs.readFile('./input.txt',function(err,data){
		if(err){
			return console.log(err);
		}

		console.log('异步读取文件数据：'+data.toString());
	});
});

