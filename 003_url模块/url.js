var http = require('http'),//引入http模块
	url = require('url');//引入URL模块
http.createServer(function (req, res) {
    // req 获取URL信息 res 浏览器的返回信息
    // 发送 HTTP 头部 
    // HTTP 状态值:200:OK / Content-Type 输出类型 / 内容类型:text/plain
    res.writeHead(200, {
        'Content-Type': 'text/html;charset="utf-8"'
    });


    //在页面中显示的文字
    res.write('你好 node.js');
    // req.url 获取浏览器URL输入的信息 该数据在终端中显示,不在浏览器中显示
    if(req.url != '/favicon.ico'){
    	//避免多次请求
    	//第一个参数是地址
    	//第二个参数 是否将其转化为对象
    	var result = url.parse(req.url,true)
    	//假如此时浏览器中的网址为 http://192.168.1.121:8081/?params=1
    	console.log(result.query)// { params: '1' }
    	console.log(result.query.params)// 1
    }

    res.end();//结束响应
}).listen(8081);//监听8081端口
console.log('搭建 http 服务器')
