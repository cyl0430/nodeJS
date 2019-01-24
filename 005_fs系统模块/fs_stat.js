var http = require('http'),//引入http模块
    url = require('url'),//引入url模块 用于处理 多次请求 的问题
    fs = require('fs'),
    app = http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset="utf-8"'
        });

        //在页面中显示的文字
        res.write('你好 common.js');
        //为了避免多次请求,需要对其进行处理
        if(req.url != '/favicon.ico'){

            //判断目标是文件还是目录
            fs.stat('html',function (err,stats) {
                if(err){
                    console.log(err);
                    return false;
                }
                console.log('文件:' + stats.isFile());// false
                console.log('目录:' + stats.isDirectory());//true
            });

        }

        res.end();//结束响应
    });
app.listen(8081,'192.168.1.121'); //监听8081端口
console.log('fs.stat 判断目标的类型')
