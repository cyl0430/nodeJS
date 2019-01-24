/*中间件 : 就是匹配路由之前和路由之后做的一系列的操作
* ------------------------------------------------
* 应用级中间件--在实际项目中,最常见的是应用于 权限判断
* 例如 :
* 判断是否登录 如果登录,则继续执行 反之 跳转到登录页面
* ------------------------------------------------
* 路由中间件
* 例如 :
* app.get('/',function (req,res,next) {
*   console.log('跳转至/之前的操作')
*   next();
* })
* app.get('/',function (req,res) {
*   res.send('路由中间件');
* })
* ------------------------------------------------
* 错误处理中间件 匹配所有路由
* app.use(function (req,res) {
*     res.status(404).send('这是404 表示路有没有匹配到');
* })
* ------------------------------------------------
* 内置中间件
* 最常用
* express.static() 托管静态资源中间件
* ------------------------------------------------
* 第三方中间件
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
*   req.query  获取get表单提交的数据
* */