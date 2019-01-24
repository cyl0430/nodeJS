nodeJS 搭建后台服务

**********************************************************

启动node

1.安装 node 确认是否安装成功

node -v 确认版本号

2.在 需要运行的js 的同目录下打开终端,执行命令

node xx.js

即可在终端中得到你 目标js 的结果

eg :

假如需要启动 index.js

index.js 中的内容是     console.log('hello world !')

假如我们需要看 js效果,此时在当前目录下打开终端,执行

node index.js

即可在终端中看到  打印出了 hello world !

*******************************************************

创建本地服务

js: 

	//引入http模块
	var http = require('http'),
	    app = http.createServer(function (req, res) {
	    // req 获取URL信息 res 浏览器的返回信息
	    // 发送 HTTP 头部
	    // HTTP 状态值:200:OK / Content-Type 输出类型 / 内容类型:text/plain
	    res.writeHead(200, {
	        'Content-Type': 'text/html;charset="utf-8"'
	    });
	    res.write('你好 node.js');//在页面中显示的文字
	    res.end();//结束响应 必须得有这一句 否则 页面会处于一直加载的情况
	});
	app.listen(8081,'127.0.0.1');//监听8080端口
	console.log('搭建 http 服务器') //这一行仅仅是为了便于看到 node 命令已经执行

执行命令:

	node xx.js


*******************************************************

cnpm安装node.js自启动工具 supervisor


1.在根目录下打开终端输入命令

cnpm install -g supervisor 全局安装supervisor

2.安装完毕之后 supervisor 就会代替 node 执行,如如果我们现在要运行 url.js 只需要执行

supervisor url.js  

即可