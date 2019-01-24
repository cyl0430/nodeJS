// 采用回调函数的方式解决异步
var fs = require('fs');
/*
    // 如果此时直接将读取文件的方法封装会产生异步的问题,异步会导致获取不到数据
    function getData(){
        fs.readFile('mime.json',function (err,data) {
            return data.toString();
        });
    }
    console.log(getData())// 如果此时直接调用,得到的结果是 undefined
*/

// 正确的操作流程是 -- 采用回调函数的方式解决异步
function getData(callback) {
    fs.readFile('mime.json',function (err,data) {
        callback(data);
    });
}
getData(function (result) {
    console.log(result.toString());
});