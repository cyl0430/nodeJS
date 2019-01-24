var http = require('http'),
    url = require('url'),
    ejs = require('ejs'),
    fs = require('fs'),
    app = http.createServer(function (req, res) {
        //1.中文解码 utf-8
        res.writeHead(200, {
            'Content-Type': 'text/html;charset="utf-8"'
        });
        //2.得到当前页面的url
        var pathname = url.parse(req.url).pathname;
        //3.去重
        if(pathname != '/favicon.ico'){
            // console.log(pathname)
            //4.判断url
            if(pathname == '/login' || pathname == '/login.html'){
                //form表单提交 -- 登录页面的操作
                ejs.renderFile('./views/form.ejs',{},function (err,data) {
                    res.end(data)
                });
            }if(pathname == '/list' || pathname == '/list.ejs' || pathname == '/list.ejs'){
                //处理 表单提交后的操作
                var query_get = '',//获取 GET 下表单的数据
                    query_post = '',//获取 POST 下表单的数据
                    isType = '';//获取传值的方式
                isType = req.method;
                if(isType == 'GET'){
                    //get下获取数据的方法
                    query_get = url.parse(req.url).query;
                    res.end(query_get);
                }else if(isType == 'POST'){
                    //post下获取数据的方法
                    var dataObj = '';//存储表单中的数据
                    req.on('data',function (result) {
                        dataObj += result;
                    });
                    req.on('end',function () {
                        console.log('表单中的数据为 : ' + dataObj)
                        //这里采用写入文件的方式代替实际项目中应该写入数据库的操作
                        fs.appendFile('login.txt',dataObj+'\n',function (err) {
                            if(err){
                                console.log(err);
                                return false;
                            }
                            console.log('写入数据成功')
                        });
                        // 在 res.end 中使用js的方法
                        // res.end('<script>alert("登陆成功");history.back()</script>');
                        res.end(dataObj);
                    });
                }
            }else{
                //如果输入非规定的url 则强制跳转至首页
                ejs.renderFile('./views/index.ejs',{},function (err,data) {
                    res.end(data)
                });
            }
        }
    });
app.listen(8081,'127.0.0.1');