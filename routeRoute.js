//设置路由函数
function route(pathname){
	console.log('About to route a request for '+pathname);
}
//将route函数作为借口
exports.route = route;