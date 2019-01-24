/*1.安装
* cnpm install cookie-parser --save-dev
* 2.引入
* var cookieParser = require('cookie-parser')
* 3.设置中间件
* app.use(cookieParser())
* 4.设置cookie
* res.cookie('参数1','参数2',{参数3})
* 参数1 设置cookie的名
* 参数2 设置cookie的值
* 参数3 关于cookie的事件
* domain        域名
*                   配置域名：打开 C:\Windows\System32\drivers\etc 下的 hosts 文件，在其中添加 127.0.0.1       www.express.cn 即可
*                   如何访问：打开浏览器，输入 www.express.cn:8081 即可
*                   格式：res.cookie('参数1','参数2',{domain:'.express.cn'})
*                        参数3中的xx.cn需和配置的域名保持一致
* name=value    键值对，可以设置要保存的 key/value, 注意 这里的name是唯一的，不能和其他的属性项的名字一样
* expires       过期时间（秒）
* maxAge        最大失效时间，设置在多少秒后失效
* secure        当secure值为true时，cookie在http中是无效的，在https中才有效
* path          只有在当前路径下才有效
* httpOnly      如果为true即代表只有服务端（后台）可以设置，客户端（前端）不可以设置
* singed        表示是否签名cookie，即表示是否加密cookie  即将signed属性设置为true
*               加密的步骤：
*               1.修改中间件
*                   app.use(cookieParser('signed'));
*               2.设置加密属性
*                   res.cookie('name','signed',{signed:true})
*               3.调用加密后的cookie
*                   req.signedCookies
* eg：
* res.cookie('name','zhangsan',{maxAge:9000000,httpOnly:true})
* 5.获取cookie
* req.cookies.name
* */

var express = require('express'),
    cookieParser = require('cookie-parser'),
    app = express();

/*不需要加密*/
/*app.use(cookieParser());*/
/*注意 如果下方需要给cookie加密，这里必须添加参数，参数可任意*/
app.use(cookieParser('signed'));

app.get('/',function (req,res) {
    var cookieObj_false = req.cookies.name,//获取未加密的cookie
        cookieObj_true = req.signedCookies;//获取加密后的cookie
    console.log(cookieObj_true)
    res.send('cookie :');
});

/*domain 域名 设置多个共享域名*/
app.get('/domain',function (req,res) {
    res.cookie('name','domain',{maxAge:9000000,domain:'.express.cn'})
    res.send('domain');
});

/*maxAge 设置失效时间*/
app.get('/maxAge',function (req,res) {
    res.cookie('name','set',{maxAge:9000000})
    res.send('设置cookie成功');
});

/*path 只有在当前路径下有效,才可以访问*/
app.get('/path',function (req,res) {
    res.cookie('name','path',{path:'/path'})
    res.send('设置cookie成功--path');
});

/*singed 当值为true时表示要加密cookie*/
app.get('/signed',function (req,res) {
    res.cookie('name','signed',{signed:true})
    res.send('设置cookie成功--signed');
});

app.listen(8081,'127.0.0.1')