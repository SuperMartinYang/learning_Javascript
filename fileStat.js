var fs = require('fs');

fs.stat('./File.js',function(err,stats){
	console.log(stats.isFile());
	console.log(stats.isDirectory());
	console.log(stats.isFIFO());
	console.log(stats.isSocket());
})