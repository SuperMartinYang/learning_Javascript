/**
	domain 简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的异常
	domain模块，拔出力多个不同的IP的操作作为一个组。注册时间和毁掉到domain，
	当发生一个错误时间或抛出一个错误时，domain对象会被通知，
	不会丢失上下文，也不到值程序出错立即退出，与process.on('uncaughtException')不同
*/
//导入events模块中的EventEmitter类
var EventEmitter = require('events').EventEmitter;
//导入domain模块
var domain = require('domain');
//实例化EventEmitter类
var emitter1 = new EventEmitter();

//创建域,并添加对error事件的监听函数
domain1 = domain.create();
domain1.on('error',function(err){
	console.log('domain1 处理这个错误('+err.message+')');
})

//显示绑定,将事件实例 和 域绑定到一起
domain1.add(emitter1);
//设置事件实例 对 error的监听
emitter1.on('error',function(err){
	console.log('监听器处理此错误('+err.message+')');
})
//调用事件的emit（发射），并添加一个错误，错误的内容是“通过监听器处理”
emitter1.emit('error',new Error('通过监听器处理'));
//移除事件的对error的监听函数
emitter1.removeAllListeners('error');
//再次调用事件的emit函数，这个时候事件已经没有监听器去监听错误，此时域去接管错误
emitter1.emit('error',new Error('通过domain1处理'));
//新建一个域
var domain2 = domain.create();
//设置域的监听error事件的函数
domain2.on('error',function(err){
	console.log('domain2 处理这个错误('+err.message+')');
})
//隐式绑定，域运行的内部，通过建立一个事件，并抛出错误，被域接收
domain2.run(function(){
	var emitter2 = new EventEmitter();
	emitter2.emit('error',new Error('通过domain2处理'));
})
//域移除对事件emitter1的监听
domain1.remove(emitter1);
//再次发出错误的时候就没有东西监听了，（没有自身的监听函数，也没有域）
emitter1.emit('error',new Error('转换为异常，系统崩溃！'));