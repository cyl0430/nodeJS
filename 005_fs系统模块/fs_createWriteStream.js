// console.log('fs.writerStream 流的方式写入文件')
const fs = require('fs');

var data = '我是被写入的内容',
    writerStream = fs.createWriteStream('1.txt');

writerStream.write(data,'utf8');

//标记写入完成
writerStream.end();

writerStream.on('finish',function () {
    console.log('写入完成')
});

writerStream.on('error',function () {
    console.log('写入失败');
});