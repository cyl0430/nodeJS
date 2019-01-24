var express = require('express'),//引入express
    app = new express();//实例化
app.get('/home',function (req,res) {
    res.end('home');
});

// 动态路由 http://127.0.0.1:8081/detail/223/333
app.get('/detail/:id/:number',function (req,res) {
    //获取动态路由的传值
    var idObj = req.params.id,
        numberObj = req.params.number;
    console.log(idObj + ' ' + numberObj)
    res.end('idObj');
});

// get传值 http://127.0.0.1:8081/product?id=11
app.get('/product',function (req,res) {
    //获取动态路由的传值
    var idObj = req.query.id;
    console.log(idObj)
    res.end('idObj');
});


app.listen(8081,'127.0.0.1')

