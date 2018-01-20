/**所有的异步I/O操作完成时都会发送一个事件到事件队列
许多的对象都会分发事件：一个net.server对象会在每次有新连接时分发一个时间，一个fs.readStream对象会在文件被打开的时候发出一个时间，所有的这些时间的对象都是events.EventEmitter的实例
*/
var events = require('events');
var eventEmitter = new events.EventEmitter();
//监听器 1
var listener1 = function listener1(){
	console.log('监听器 listener1 执行。');
}

//监听器 2
var listener2 = function listener2(){
	console.log('监听器 listener2 执行。');
}

//绑定 connection 事件，处理函数listener1
eventEmitter.addListener('connection',listener1);

//绑定 connection 事件，处理函数listener2
eventEmitter.on('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听器监听连接事件。');

//处理 connection 事件
eventEmitter.emit('connection');

//移除banding的listener1函数
eventEmitter.removeListener('connection',listener1);
console.log('listener1 不再受监听。');

//触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听器监听连接事件。');

console.log('程序执行完毕');