var http = require('http'),//引入http模块
    plug = require('./piug.js'),//引入自定义js
    tools = require('./tools'),//引入自定义js -- 省略后缀名也是可以的
    url = require('url'),//引入url模块 用于处理 多次请求 的问题
    app = http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset="utf-8"'
        });

        //在页面中显示的文字
        res.write('你好 common.js');
        //为了避免多次请求,需要对其进行处理
        if(req.url != '/favicon.ico'){
            console.log(plug)
            console.log(tools.sayHello());
        }

        res.end();//结束响应
    });
app.listen(8081,'127.0.0.1'); //监听8081端口
console.log('引入 Common.js')
