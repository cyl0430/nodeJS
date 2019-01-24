// 封装路由
var ejs = require('ejs'),
    fs = require('fs'),
    app = {
        login:function (req,res) {
            //form表单提交 -- 登录页面的操作
            ejs.renderFile('./views/form.ejs',{},function (err,data) {
                res.end(data)
            });
        },
        list:function (req,res) {
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
        },
        home:function (req,res) {
            ejs.renderFile('./views/index.ejs',{},function (err,data) {
                res.end(data)
            });
        },
    };
module.exports = app;