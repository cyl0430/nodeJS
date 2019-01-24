var http = require('http'),
    url = require('url'),
    ejs = require('ejs'),
    fs = require('fs'),
    route = require('./module/route'),
    app = http.createServer(function (req, res) {
        //1.中文解码 utf-8
        res.writeHead(200, {
            'Content-Type': 'text/html;charset="utf-8"'
        });
        //2.得到当前页面的url
        var pathname = url.parse(req.url).pathname;
        //3.去重
        if(pathname != '/favicon.ico'){
            //去除 /
            pathname = pathname.replace('/','');
            //去除后缀名
            pathname = pathname.split('.')[0];
            console.log(pathname)
            /*在此处如果发现url没有在route.js中定义,则返回首页
            * 用 try...catch...来解决*/
            try{
                //如果url在route.js中定义
                route[pathname](req, res);
            }catch(err){
                //如果url未在route.js中定义
                console.log('err : ' + err)
                route['home'](req, res);
            }
        }
    });
app.listen(8081,'127.0.0.1');