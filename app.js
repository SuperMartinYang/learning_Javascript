//Module dependencies
//引入模块
//express用于构建一个http应用
var express = require('express');
//http用于创建服务器
var http = require('http');
//path用于路径连接（处理路径）
var path = require('path');
//util用于
var util = require('util');
//引入自定义的路由文件routes.js
var routes = require('./routes');
//var User = require('./modules/user.js');
var settings = require('./Settings');
//引入连接mongodb的模块
var MongoStore = require('connect-mongo')(express);
//引入连接flash的模块
var flash = require('connect-flash');
//实例一个express对象
var app = express();

app.set('appTitle','杨省辉的个人记账系统');
app.locals.gAppTitle = settings.appName;
//这个没有使用
app.locals.gPageSize = settings.pageSize;
//all environments
//设置端口为 process.env.PORT 或 3000 
app.set('port',process.env.PORT||8484);
//设置views文件夹为视图views文件的目录
app.set('views',path.join(__dirname,'views'));
//设置视图模版引擎为 ejs
app.set('view engine','ejs');
//connect 内建的中间件，使用默认的 favicon 图标
//也可以在favicon（__dirname）中设置自己的favicon图标
app.use(express.favicon());
//connect 内建的中间件，在终端显示简单的不同颜色的日志
app.use(express.logger('dev'));
//使用express中的json函数
app.use(express.json());
//使用express中的bodyParser函数
app.use(express.bodyParser());
//使用express中urlencoded函数
app.use(express.urlencoded());
//methodOverride用于重载方法
app.use(express.methodOverride());
//用于解析cookie
app.use(express.cookieParser());
//使用flash
app.use(flash());
//设置会话session
app.use(express.session({
	"secret":settings.cookieSecret,
	"store":new MongoStore({
		db:settings.db
	})
}))
//设置匿名函数为登录拦截器，并使用
app.use(function(req,res,next){
	//跟踪；
	//console.log("req.method ="+req.method);
	//console.log("req.url ="+req.url);
	//console.log("req.originalUrl ="+req.originalUrl);
	//获取请求request中的除域名的url部分
	var url = req.originalUrl;
	//定义一个登陆拦截器，如果是下列几个文件，但是没有session的话，则拦截
	if((url =="/month"||url=="/stat"||url=="/list"||url=="/record")&&!req.session.user){
		console.log("登录拦截提示：必须登录，才能执行此项操作");
		//打印错误信息
		req.flash('error','请登录!');
		//重定向到登录界面
		return res.redirect('/login');
	}

	//获取session中user值
	res.locals.user = req.session.user;

	//获取flash的错误信息
	var error = req.flash('error');
	//如果有错误信息，则放到locals的error中
	res.locals.error = error.length?error:null;
	//console.log("转移flash中的error值："+error); 

	//获取flash的成功信息
	var success = req.flash('success');  
	//如果有成功信息，则放到返回response中locals的error中
  	res.locals.success = success.length?success:null;  
	//console.log('转移flash中的success值：'+success);
	//设置response的session为request中的session
	res.locals.session = req.session;
	next();
})
//使用路由
app.use(app.router);
//使用静态文件路径public
app.use(express.static(path.join(__dirname,'public')));
//console.log(util.inspect(app));

//development only ，当请求返回的是development时
if('development' == app.get('env')){
	//则可以使用errorhandler模块
	app.use(express.errorHandler());
}

//console.log('注册路由');

//将app作为参数传递给路由
routes(app);

//使用http来创建一个监听端，用createServer创建一个app服务器，设置listen端口为app的port，回调的函数执行控制台打印
http.createServer(app).listen(app.get('port'),function(){
	console.log();
	console.log();
	console.log('************************************');
	console.log('****MY FIRST NODE.JS APPLICATION****');
	console.log('************************************');
	console.log('====服务器启动，监听端口'+app.get('port')+"============");
})