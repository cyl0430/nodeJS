// 监听多个事件
var events = require('events'),
    EventEmitter = new events.EventEmitter();

//开始监听 但是不会主动执行
EventEmitter.on('to_one',function (data) {
    console.log(data)
    EventEmitter.emit('to_two','给to_two发送的数据');
});
EventEmitter.on('to_two',function (data) {
    console.log(data);
});

// 触发 EventEmitter.on() 方法 即 在这里才开始执行该方法
EventEmitter.emit('to_one','给to_one发送的数据');
