1.npm的使用
	下载文件
	下载指定版本的文件
	生成package.json文件：npm init/npm i
	将镜像地址设置为淘宝镜像地址

2.模块：js有很多不能使用，比如说文件处理，网络处理，node的作者就写了很多模块，来提升js的能力
	node内置的模块：fs,querystring,path,http（c++）
	自定义模块：第三方和自己写的

	Person.js文件

	// 第一种模块的导入导出
		// Person.js:通过module.exports将对象导出
		module.exports = {
			username:"zhangsan",
			say: function(){

			}
		}

		// getPerson.js获取Person.js文件的对象
		var p = require('./Person.js');

		p.username
		p.say()

	// 第二种模块的导入和导出
		// Girl.js:通过exports将属性或者方法导出
		exports.username = 'zhangsan';
		exports.study= function(){
			console.log('');
		}

		// getGirl.js:通过require将属性和方法接收
		var g = require('./Girl.js');
		g.username
		g.study();

3.buffer
	new Buffer(10):有10个长度的Buffer数据
	new Buffer('hello world'):指定字符串的Buffer数据

	buf.length:长度
	buf.toString():转换为字符串

4. 全局对象：global
	setInterval()/setTimeout()
	clearInteval()/clearTimeout()
	__filename:获取当前文件的绝对路径（包含文件名）
	__dirname:获取当前文件的绝对路径（不包含文件名）
	
5. fs文件处理模块