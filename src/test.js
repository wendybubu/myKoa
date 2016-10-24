var app = require('koa')();
var helloWorld = require('koa-hello-world');
app.use(helloWorld()).listen(1234);