var http = require('http'),
    url = require('url'),
    app = http.createServer(function (req, res) {
        //1.中文解码 utf-8
        res.writeHead(200, {
            'Content-Type': 'text/html;charset="utf-8"'
        });
        //2.得到当前页面的url
        var pathname = url.parse(req.url).pathname;
        //3.去重
        if(pathname != '/favicon.ico'){
            //4.判断url
            if(pathname == '/login' || pathname == '/login.html'){
                res.end('显示login页面')
            }else if(pathname == '/resgison' || pathname == '/resgison.html'){
                res.end('显示注册页面');
            }else{
                res.end('都回到首页');
            }
        }
    });
app.listen(8081,'127.0.0.1');//监听8081端口
