var http = require('http'),//引入http模块
    url = require('url'),//引入url模块 用于处理 多次请求 的问题
    fs = require('fs'),
    app = http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset="utf-8"'
        });

        //为了避免多次请求,需要对其进行处理
        if(req.url != '/favicon.ico'){

            fs.readdir('html',function (err,data) {
                if(err){
                    console.log(err);
                    return false;
                }else{
                    console.log(data);
                    var dataArr = data,
                        isUpload = dataArr.indexOf('upload');
                    console.log(isUpload)
                    if(isUpload == -1){
                        //不存在,则创建
                        fs.mkdir('html/upload',function () {
                            console.log('创建成功')
                        });
                    }else{
                        console.log('已经存在')
                    }
                }
            });

        }

        res.end();//结束响应
    });
app.listen(8081,'127.0.0.1'); //监听8081端口
console.log('判断 html 文件夹下有没有 upload 目录,如果存在就提示已经存在 反之就创建upload目录')
