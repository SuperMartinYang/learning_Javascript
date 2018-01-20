var server = require('./routeServer');
var router = require('./routeRoute');

//调用routeServer的server接口，以及routeRoute的route接口
server.start(router.route);