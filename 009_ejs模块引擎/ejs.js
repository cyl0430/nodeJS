var http = require('http'),
    url = require('url'),
    ejs = require('ejs'),
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
                var params_msg = '我是后台的数据',
                    params_list = ['11','22','33'],
                    params_html = '<h2>ejs解析html<h2>'
                /*
                * ejs.renderFile('url',{},function(){})
                * 这三个参数分别为
                * url 要渲染的页面路径
                * {}  后台逻辑最后要渲染到前端页面的数据
                *  function 回调*/
                ejs.renderFile('./views/index.ejs',{
                    msg:params_msg,
                    list:params_list,
                    html:params_html
                },function (err,data) {
                    res.end(data)
                });
            }else{
                res.end('都回到首页');
            }
        }
    });
app.listen(8081,'127.0.0.1');//监听8081端口
