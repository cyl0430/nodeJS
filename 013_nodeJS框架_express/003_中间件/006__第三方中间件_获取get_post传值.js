/*第三方中间件 又称 模块
* body-parser 获取post提交的数据
* 1.安装
* cnpm install body-parser --save-dev
* 2.调用
* var bodyParser = require('body-parser')
* 3.设置中间件
*   获取表单提交的数据
*       app.use(bodyParser.urlencoded({extended:false}))
*   获取json数据
*       app.use(bodyParser.json())
* 4.req.body   获取post表单提交的数据
*   req.query  获取get表单提交的数据*/
var ejs = require('ejs'),
    express = require('express'),//引入express
    bodyParser = require('body-parser'),
    app = new express();//实例化

// 配置中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//配置ejs
app.set('view engine','ejs');

app.get('/',function (req,res) {
    res.send('第三方中间件');
})

app.get('/login',function (req,res) {
    res.render('login');
});

app.post('/doPost',function (req,res) {
    var form_post = req.body;//获取form表单post提交的数据
    console.log(form_post);
    res.send('提交成功');
});

app.get('/doGet',function (req,res) {
    var form_get = req.query;
    console.log(form_get);
    res.send('提交成功');
});


app.listen('8081','127.0.0.1');