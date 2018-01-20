/**
util是一个node.js核心模块，提供常用函数的集合，用于弥补核心JavaScript的功能过于精简的不足
*/
//util.inherits方法只会继承prototype中的方法，其他都不会继承
var util = require('util');
function Base(){
	this.name = 'base';
	this.base = 1992;
	this.sayHello = function(){
		console.log('Hello '+this.name);
	};
}

Base.prototype.showName = function(){
	console.log(this.name);
}

function Sub(){
	this.name = 'sub';
}

util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

util.isError(new Error());
util.isDate(new Date());