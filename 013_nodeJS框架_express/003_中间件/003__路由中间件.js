var ejs = require('ejs'),
    express = require('express'),//引入express
    app = new express();//实例化

// 路由中间件
app.get('/',function (req,res,next) {
    console.log('跳转至/之前的操作')
    next();
})

app.get('/',function (req,res) {
    res.send('路由中间件');
})

//获取get下url的参数
app.get('/params',function (req,res) {
    /*url格式 http://www.express.cn:8081/params?city=测试*/
    var params = req.query.city;
    console.log(params)
    res.send('获取url路径');
})

app.listen('8081','127.0.0.1');