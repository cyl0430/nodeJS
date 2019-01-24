var tools = {
    add:function (x,y) {
        return x+y
    },
    sayHello:function () {
        return '你好 tools.js'
    }
}

// 法一:(不推荐)
// exports.tools = tools;

// 法二:(推荐)
module.exports = tools;