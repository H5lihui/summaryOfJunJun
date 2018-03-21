# 整个Express项目框架搭建步骤
## 1.下载express框架
```
1. npm install express-generator -g （安装 安装express的工具-生成框架文件目录的命令。只需要执行一次）
2. express blog -e （自动化创建项目，-e采用ejs模板引擎）
3. 进入到blog文件夹：cd blog
4. 根据package.json文件的依赖，下载对应的模块 npm i
```

## 2.目录结构
```
bin：命令执行目录
node_modules：模块存放目录
public：公共目录，存放CSS，JS，图片，音视频等资源
routes：路由文件目录
views：存放模板目录（1.html，2.html...）
app.js：项目的启动文件
package.json：当前项目依赖关系和相关配置
```

## 3.下载项目依赖模块
```

下载 npm i supervisor

1.修改package.json
"scripts": {
    "start": "supervisor ./bin/www"    // 每次修改及时生效
}
```

## 4.修改模板引擎的后缀名
```
4.1 app.js中第15行改为下列两行代码
    app.engine('html', require('ejs').__express);
    app.set('view engine', 'html');

4.2 修改views目录下的文件后缀名为html
```

## 5.进入到项目目录并启动 
```
cd 项目名称(blog)
npm start
```

# Express使用     
## 1.核心
```
routes：存放当前的路由文件(index.js)
	router.get('/',function(req,res){})
		在浏览器中访问地址：http://localhost:3000/
		或者 <a href="/">首页/路径</a>
		或者 $.get('/')
		在html页面中省略了:http://localhost:3000
	router.post('/doLogin',function(req,res){})
		表单地址是：<form action="http://localhost:3000/doLogin"></form>
		或者：$.post('/doLogin')
		在html页面中省略了:http://localhost:3000

views:存放当前的模板文件（html文件） 
	// 实际访问Url地址：http://localhost:3000/
	router.get('/',function(req,res){
		// 给客户端响应views/index.html页面
		res.render('index');
		// 给客户端响应"Hello world"字符串 
		res.end('Hello world'); 
		// 给客户端响应json数据 
		res.json({"username":"刘俊俊"});
	})
    
public:存放css，js，image文件
	在html文件的表示方式:第一个/表示的是public目录（必须加上，如果没有加，暂时没问题，但是以后可能会出现遗留问题-不加表示的是相对路径）
	<link rel="stylesheet" href="/css/style.css"/>
	<script src="/js/main.js"></script>
	<img src="/images/1.jpg">

app.js:引入各种模块，进行各模块的配置信息等
```

# 路由
## 概念功能      
```
路由 = 请求方式 + 请求路径 =》 引导用户去完成相关操作
路由功能（相关操作）
1. 访问某个页面（首页）
2. 执行某个功能（添加数据，修改数据，删除数据）
3. 返回Ajax请求数据
```

## request请求对象
```     
=============================    
// post请求
req.body：接收post请求传递的参数

// get请求
req.params:获取"localhost/zhangsan/20/男" 的参数
req.query:获取"localhost?username=zhangsan&age=20"的参数
====================================

// cookie只要被存储，每次的访问该网站都会被通过互联网传递到服务器
req.cookies:获取当前网站的cookie数据
req.ip:获取用户的IP地址
```

## response响应对象
```
res.render(模板页面,{username:"zhangsan"})：响应一个模板页面,并通过第二个参数给模板页面赋值
res.send([data])：返回字符串
res.redirect()：// 重定向
	res.redirect('back')
	res.redirect('/users')
	res.redirect('http://www.baidu.com')
res.json()：给客户端响应一个json数据
```    