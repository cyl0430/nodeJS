//获取后缀名
exports.getName = function (fs,extname) {
    //以同步的方式读取文件
    var data = fs.readFileSync('./mime.json');
    /*
    * data.toString() 将 data 转化为字符串
    * JSON.parse() 再将其转化为对象
    * */
    var mimes = JSON.parse(data.toString());
    return mimes[extname] || 'text/html';
}