var ejs = require('ejs'),
    express = require('express'),//引入express
    app = new express();//实例化

/*配置模板
  使用ejs模板渲染的前提
  格式不变
 */
app.set('view engine','ejs');
/*控制公共文件header的静态资源的公共路径
* 一般在根目录下创建静态资源公共文件 public
* 格式一 : app.use(express.static('xx'))
* eg : app.use(express.static('public'));
* 调用 : 在公共文件 header.ejs 中这样引入 css/js/img 文件
* <link rel="stylesheet" href="css/header.css">
*  格式二 : 配置虚拟目录
*  app.use('/static',express.static('xx'));
*  eg : app.use('/static',express.static('public'));
*  调用:
*  <link rel="stylesheet" href="static/css/header.css">
* */
app.use(express.static('public'));

app.get('/',function (req,res) {
    //渲染模板
    var listObj = ['111','222','333'];
    res.render('index',{
        list:listObj
    });
    // res.send('ejs的演示')
})

app.listen('8081','127.0.0.1');