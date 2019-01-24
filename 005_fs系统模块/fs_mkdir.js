var http = require('http'),//引入http模块
    url = require('url'),//引入url模块 用于处理 多次请求 的问题
    fs = require('fs'),
    app = http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset="utf-8"'
        });

        //为了避免多次请求,需要对其进行处理
        if(req.url != '/favicon.ico'){
            // 接收的参数
            // path   将创建目录的路径
            // mode   目录权限(读写权限) 默认0777
            // callback 回调 传递异常参数err
            //这个函数只有首次才会成功,其他会报错 即 提示该文件已经被创建 因此以后这里还要做判断该文件是否已被创建
            fs.mkdir('css',function (err) {
                if(err){
                    console.log(err);
                    return false;
                }
                console.log('创建目录成功')
            });

        }

        res.end();//结束响应
    });
app.listen(8081,'192.168.1.121'); //监听8081端口
console.log('fs.mkdir 创建目录')
