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
            //路径 写入的内容 回调
            fs.writeFile('1.txt','你好 fs.writeFile',function (err) {
              if(err){
                  console.log(err);
                  return false;
              }
              console.log('写入成功')
            });

        }

        res.end();//结束响应
    });
app.listen(8081,'192.168.1.121'); //监听8081端口
console.log('fs.writeFile 创建写入文件')
