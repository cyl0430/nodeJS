var ejs = require('ejs'),
    express = require('express'),//引入express
    app = new express();//实例化

app.get('/',function (req,res) {
    res.send('错误处理中间件');
})

/*错误处理中间件 匹配所有路由*/
app.use(function (req,res) {
    res.status(404).send('这是404 表示路有没有匹配到');
})

app.listen('8081','127.0.0.1');