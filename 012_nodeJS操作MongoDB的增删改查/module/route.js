// 封装路由 增删改查
var ejs = require('ejs'),
    fs = require('fs'),
    MongoClient = require('mongodb').MongoClient, //引入数据库
    urlObj = 'mongodb://localhost:27017/jscyl',//连接具体的数据库 jscyl
    app = {
        //首页
        home:function (req,res) {
            ejs.renderFile('./views/home.ejs',{},function (err,data) {
                res.end(data)
            });
        },
        //登录
        login:function (req,res) {
            //form表单提交 -- 登录页面的操作
            ejs.renderFile('./views/form.ejs',{},function (err,data) {
                res.end(data)
            });
        },
        //增加
         add:function (req,res) {
            //处理 表单提交后的操作
            var query_get = '',//获取 GET 下表单的数据
                query_post = '',//获取 POST 下表单的数据
                isType = '';//获取传值的方式
            isType = req.method;
            if(isType == 'GET'){
                //get下获取数据的方法
                query_get = url.parse(req.url).query;
                res.end(query_get);
            }else if(isType == 'POST'){
                //post下获取数据的方法
                var dataObj = '',//存储表单中的数据
                    usernameObj = '',
                    pwdObj = '';
                req.on('data',function (result) {
                    dataObj += result;
                });
                req.on('end',function () {
                    // console.log('表单中的数据为 : ' + dataObj)
                    usernameObj = (dataObj.split('&')[0]).split('=')[1];
                    pwdObj = (dataObj.split('&')[1]).split('=')[1];
                    //连接数据库
                    MongoClient.connect(urlObj,function (err,db) {
                        if(err){
                            console.log(err)
                            return false;
                        }
                        //增加数据
                        db.collection('jscyl').insert({
                            //增加的具体内容
                            'username':usernameObj,
                            'pwd':pwdObj
                        },function (error,result) {
                            //回调
                            if(error){
                                console.log(error)
                                return false;
                            }
                            //增加数据成功
                            res.end('增加数据成功: ' + usernameObj + ' / ' + pwdObj);
                            db.close();//关闭数据库
                        });
                    })
                });
            }
        },
        //删除
        delete:function (req,res) {
            MongoClient.connect(urlObj,function (err,db) {
                if(err){
                    console.log('err : ' + err)
                    return false
                }
                /*如果是需要删除相同条的第一条,将 remove 替换成 deleteOne 即可*/
                db.collection('jscyl').remove({
                    'username':'100'
                },function (error,result) {
                    if(error){
                        console.log('error : ' + error)
                        return false;
                    }
                    res.end('删除成功');
                    db.close();//关闭数据库
                });
            });
        },
        //修改
        edit:function (req,res) {
            //连接数据库
            MongoClient.connect(urlObj,function (err,db) {
                if(err){
                    console.log(err)
                    return false;
                }
                //修改数据
                /*db.collection(xx).update({a},{$set:{b},function(){c}})
                * xx 数据库名
                * a 条件 即 修改前的数据
                * b 修改后的数据
                * c 修改完成的回调*/
                db.collection('jscyl').update({'username':'2'},{$set:{
                    'username':'10'
                    }},function (error,result) {
                    //回调
                    if(error){
                        console.log(error)
                        return false;
                    }
                    //修改成功
                    res.end('修改成功');
                    db.close();//关闭数据库
                });
            })
        },
        //查询
        lookup:function (req,res) {
            //连接数据库
            MongoClient.connect(urlObj,function (err,db) {
                if(err){
                    console.log('err:' + err)
                    return false;
                }
                var result = db.collection('jscyl').find({},{'username':1}),
                    list= [];
                result.each(function (error,doc) {
                    if(error){
                        console.log(error)
                        return
                    }else{
                        if(doc != null){
                            //得到查询的数据
                            list.push(doc)
                        }else{
                            console.log('循环结束')
                            //循环结束后开始渲染数据
                            ejs.renderFile('views/home.ejs',{
                                list:list
                            },function (errors,data) {
                                res.end(data);
                                db.close();
                            });
                        }
                    }
                });
            })
        }
    };
module.exports = app;