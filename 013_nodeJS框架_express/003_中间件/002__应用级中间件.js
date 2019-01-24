var ejs = require('ejs'),
    express = require('express'),//引入express
    app = new express();//实例化

/*应用级中间件
* 功能 : 匹配任何路由*/
app.use(function (req,res,next) {
    console.log(new  Date())
    /*正常来说只要匹配到一个路由就不再继续匹配
    * 现在,如果要在 应用级中间件 匹配后继续匹配,需要添加
    * 1.参数添加 next
    * 2.在回调中添加 next() 即可继续匹配*/
    next();
})

/*
    此时代表的是 路由中间件 ,仅匹配路由 /
    app.use('/',function (req,res,next) {
    console.log(new  Date())
    next();
})*/

app.get('/',function (req,res) {
    res.send('应用级中间件');
})

app.listen('8081','127.0.0.1');