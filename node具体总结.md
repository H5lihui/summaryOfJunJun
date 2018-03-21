1.当前电脑模拟前后端（客户端和服务器端）
2.客户端和服务器端
	客户端：浏览器 - html+css+js
	服务器端：远程的电脑 - 后端语言+数据库
	
	关系：客户端请求服务器端，将请求的内容从服务器端下载回来，解析之后让用户看到

3.服务器端 = 后端程序 + 数据库
	后端程序：js，其他（php，java，python不会）
		后端程序js：跟我们之前学习的ECMAScript就是一致的，在此基础上增加了部分功能
		var a = 3;
		if () {}
		for () {}
	
	数据库：MySQL/MariaDB，其他（mongodb，oracle，postgresql）

4.安装Node，执行js文件
	node js文件

5.由node衍生出的npm，下载各种模块非常方便快捷
	5.1 单一下载
		npm install jquery
		npm install jquery@1.12.4
	
		npm install jquery --save:下载并写入到package.json的dependencies中
		npm install jquery --save-dev:下载并写入到package.json的devDependencies中
	
	5.2 多个同时下载
		1.npm init:生成package.json文件
		2.将需要的模块写入到dependencies或者devDependencies中
		3.npm install:下载 dependencies或者devDependencies中的内容
	
	npm uninstall jquery 卸载


注意：学习的时候，先看他到底怎么用就可以，不需要向以后用在哪些地方

6.buffer
	new Buffer(number):定义有number个长度的buffer数据(仓库)
	new Buffer(string):定义有指定string内容的buffer数据（仓库）
	
	var buf = new Buffer(10);
	buf.length:获取buffer长度
	buf.toString():将buffer数据转换为字符串

7.全局对象
8.模块 = 对象
	模块分类：
		系统模块：系统内置好的模块（C++）
			9.文件处理
			10.url
			11.querystring
			12.path   
			13.http
		自定义模块（js）
			第三方模块：其他组织或者个人写的模块，我们拿来直接用
				ejs
				mysql
				mongoose
			自己写的模块
				module.exports/require
				exports/require
	
	以前都是当前的js文件定义对象，当前的js文件直接调用对象
	
	Cannot find module 'Person'：找不到Person模块
		解决办法：
		1.在当前的文件前面添加./Person
		2.名字写错了，自己核对名字
		3.名字没有写错，就是没有下载
	
	现在：
		// 第一种方式：通过module.exports定义
		新建一个Person.js文件，在内部通过module.exports定义一个对象
			module.exports = {
				username:"",
				say:function(){}
			}
	
			注意：称Person.js就是一个模块
		新建一个getPerson.js文件，通过require('./Person.js')引入这个对象，进行使用
			var obj = require('./Person.js');
			obj.username
			obj.say();
	
		// 第二种方式：通过exports定义
		新建Girl.js文件
			exports.username = '';
			exports.say = function(){}
	
		新建一个getGirl.js，通过require引入
			reuqire('./Girl.js');

9.文件处理 = 文件夹和文件
	文件夹：directory
	文件：file
	
	为什么之前的JS不学习这个文件处理呢？
		JS在浏览器执行，假如JS本身就可以处理文件，不安全，隐私遭到泄露
	
		现在JS运行在服务器端，JS就必须有文件处理能力，接收用户主动传递的头像，文件，电影等内容，原生JS没有文件处理能力，nodejs的作者通过c++语言给js赋予了文件读取的能力，这就出现了require('fs')
	
	file system:文件系统
	
	// 引入文件系统模块
	var fs = require('fs');
	
	文件夹的处理：directory
		创建文件夹：make directory = mkdir(dirname,callback)
			callback(err)
		删除文件夹：remove directory = rmdir(dirname,callback)
			callback(err);
		读取文件夹: read directory = readdir(dirname,callback) 
			callback(err,results) 
				results:读取的结果组成的数组
	
	文件处理: file
		读取文件内容：read file = readFile(filename,callback)
			callback(err,results)
		向文件写入内容：write file = writeFile(filename,content,callback)
			filename:文件名
			content:写入的内容
			callback(err):
	
			注意：
			1.写入的文件不存在，则直接创建
			2.写入的时候，会清空原理的内容（覆盖写）
		给文件追加内容：append file = appendFile(filename,content,callback)
			注意：
			1.将内容追加到文件的末尾（追加写）
			2.追加的文件不存在，则创建
		删除文件：unlink(filename,callback)
	
	文件夹和文件共同的处理
		修改名字：rename(oldname,newname,callback)
		获取状态：stat(name,callback)
			callback(err,status)
				status.isDirectory():判断是否是文件夹
				status.isFile():判断是否是文件
		监听
	
	 Cannot read property 'toString' of undefined:不能读取undefined的toString属性