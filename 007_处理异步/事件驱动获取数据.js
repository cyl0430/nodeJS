var fs = require('fs'),
    events = require('events'),
    EventEmitter = new events.EventEmitter();
//封装 读取文件
function getData(path) {
    fs.readFile(path,function (err,data) {
        //触发
        EventEmitter.emit('listen',data.toString());
    });
}
//监听数据
EventEmitter.on('listen',function (mime) {
    console.log(mime)
});
//调用
getData('mime.json');