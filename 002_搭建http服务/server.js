//引入http模块
var http = require('http'),
    app = http.createServer(function (req, res) {
    // req 获取URL信息 res 浏览器的返回信息
    // 发送 HTTP 头部 
    // HTTP 状态值:200:OK / Content-Type 输出类型 / 内容类型:text/plain
    res.writeHead(200, {
        'Content-Type': 'text/html;charset="utf-8"'
    });
    res.write('你好 node.js');
    res.end();//结束响应
});
app.listen(8081,'127.0.0.1');//监听8080端口
console.log('搭建 http 服务器')
