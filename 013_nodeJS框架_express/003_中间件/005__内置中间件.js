var ejs = require('ejs'),
    express = require('express'),//引入express
    app = new express();//实例化

//ejs渲染
app.set('view engine','ejs');
/*内置中间件
* express.static() 托管静态资源中间件*/
app.use(express.static('public'));

app.get('/',function (req,res) {
    res.render('index');
})

app.use(function (req,res) {
    res.status(404).send('这是404 表示路有没有匹配到');
})

app.listen('8081','127.0.0.1');