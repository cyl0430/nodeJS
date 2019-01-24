var _obj = {},
    http = require('http'),
    url = require('url'),
    app = function (req,res) {
        // 获取 url
        var pathnameObj = url.parse(req.url).pathname,
            isLength = pathnameObj.length;//判断url
        console.log(req.method)
        if(isLength > 1){
            //如果大于1 则说明不是首页
            // 处理url 即去除前边的 / 和后缀名以及参数
            pathnameObj = (pathnameObj.replace('/','')).split('.')[0];
            //去重
            if(pathnameObj != 'favicon'){
                console.log(pathnameObj)
                if(_obj[pathnameObj]){
                    _obj[pathnameObj](req,res)//执行login方法
                    res.end(pathnameObj);
                }else{
                    //这里执行404
                    res.end('on fount rount')
                }
            }
        }else{
            //小于 1 说明是首页
            if(_obj['home']){
                _obj["home"](req,res)//执行login方法
                res.end('home');
            }else{
                res.end('on fount home')
            }
        }
    };
//给 app 添加方法
app.get = function (string,callback) {
    _obj[string] = callback;
}

//只要有请求就会触发app方法
http.createServer(app).listen(8082);


//注册首页
app.get('home',function (req,res){
    console.log('home')
});

//注册 login 方法
app.get('login',function (req,res){
    console.log('login_get')
});

