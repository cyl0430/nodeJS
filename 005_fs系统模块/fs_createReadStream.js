// console.log('fs.createReadStream 流的方式读取文件')
const fs = require('fs');

var readStream = fs.createReadStream('1.txt'),
    str = '';//保存数据
readStream.on('data',function (dataObj) {
    // data : 读取的目标文件的内容
    str += dataObj;
});

readStream.on('end',function (endObj) {
    console.log('读取完成 :' + str)
});

readStream.on('error',function (errorObj) {
    console.log('读取失败 : ' + errorObj)
});