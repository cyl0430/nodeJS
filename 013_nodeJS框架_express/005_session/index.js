/*session 保存在服务器中
* 1.安装
*   cnpm install express-session --save-dev
* 2.引入
*   var session = require('express-session')
* 3.设置中间件
*   app.use(session({
        secret:'keyboard cat',
        resave:false,
        saveUninitialized:true,
        cookie:{
            secure:true
        }
    }));
* 4.设置session
*   req.session.cookie名='cookie值'
* 5.获取session
*   if(req.session.userinfo){
        res.send('设置成功');
    }else{
        res.send('未登录');
    }
*   */

var express = require('express'),
    session = require('express-session'),
    app = express();

//配置中间件
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:false //当值为true时 只有在https下才可以访问
    }
}));

app.get('/',function (req,res) {
    if(req.session.userinfo){
        res.send('设置成功');
    }else{
        res.send('未登录');
    }
});

app.get('/session',function (req,res) {
    //设置session
    req.session.userinfo='zhangsna';
    res.send('设置成功');
});

app.listen(8081,'127.0.0.1')