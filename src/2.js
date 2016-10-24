var koa = require('koa');
var app = koa();
// x-response-time
app.use(function*(next) {
    var start = new Date();
    console.log('start1', start);
    yield next;
    var ms = new Date() - start;
    console.log('ms1', ms);
    this.set('X-Response-Time', ms + 'ms');
});
// logger
app.use(function*(next) {
    var start = new Date();
    console.log('start2', start);
    yield next;
    var ms = new Date() - start;
    console.log('ms2', ms);
    console.log('%s %s - %s', this.method, this.url, ms);
});
// response
app.use(function*() {
    console.log('response1');
    this.body = 'Hello World!';
    console.log('response2');
});
app.listen(3000);