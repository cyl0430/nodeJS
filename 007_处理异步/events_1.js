// 只监听一个事件
var events = require('events'),
    EventEmitter = new events.EventEmitter();

//开始监听 但是不会主动执行
EventEmitter.on('to_parent',function (data) {
    console.log(data)
});

setTimeout(function () {
    // 触发 EventEmitter.on() 方法 即 在这里才开始执行该方法
    EventEmitter.emit('to_parent','发送的数据');
},1000)