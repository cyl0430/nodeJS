var http = require('http'),
    fs = require('fs'),//系统模块 -- 操作文件
    path = require('path'),//系统模块 -- path.extname('xx') 得到目标的后缀名
    mime = require('./plug/getName.js'),//封装的获取后缀名的方法
    url = require('url'),//获取url模块
    app = http.createServer(function (req, res) {
        /*req.url 获取当前的url*/
        /*
        url.parse(xx).pathname 在这里推荐使用 url.parse(xx).pathname 提前解析url
        原因 : 为了完美的获取url的数据,
        假如url是 xx.json?v=20171022 那么在浏览器中打开 127.0.0.1:8080/xx.json?v=20171022 会获取不到数据
        如果提前解析过url 那么在浏览器中打开 127.0.0.1:8080/xx.json?v=20171022 会获取到数据
        */
        var pathname = url.parse(req.url).pathname,//拿到浏览器地址
            extname = '';//获取文件的后缀名
        if(pathname == '/'){
            pathname = '/index.html' //设置默认加载的首页路径
        }
        extname =  path.extname(pathname);
        //避免重复请求
        if(pathname != '/favicon.ico' ){
            console.log(pathname)
            //文件操作 获取static下的index.html
            fs.readFile('static' + pathname,function (error,data) {
                if(error){
                    //没有这个文件,则跳转至404页面
                    fs.readFile('static/404.html',function (err,data404) {
                        //1.发起请求
                        res.writeHead(404, {
                            'Content-Type': 'text/html;charset="utf-8"'
                        });
                        //2.将该文件的内容显示在web页面上
                        res.write(data404);
                        //3.结束响应
                        res.end();
                    });
                    return false;
                }else{
                    //有这个文件 则返回这个文件
                    //1.根据文件的后缀名设置文件的类型
                    var mimeObj = mime.getName(fs,extname);
                    //2.发起请求
                    res.writeHead(200, {
                        'Content-Type': '' + mimeObj + ';charset="utf-8"'
                    });
                    //3.将该文件的内容显示在web页面上
                    res.write(data);
                    //4.结束响应
                    res.end();
                }
            });
        }
    });
app.listen(8081,'127.0.0.1');

