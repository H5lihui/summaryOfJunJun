# BOM：Browser Object Model => 浏览器对象模型

## 1. 概念
```
	定义浏览器内各个对象的关系,BOM就是有很多个对象组成的，描述之间的关系
```
## 2. 组成
	最大的对象 - window对象 = 属性和方法
		属性：
			1.全局变量
				不要使用length,top,name定义全局变量
	
			2. navigator：获取浏览器的相关信息
				navigator.userAgent:获取用户浏览器的信息（使用的设备，内核，浏览器）
			3. screen：屏幕信息
				screen.width
				screen.height
			4. history：访问过的历史记录信息
				history.go(1):前进
				history.go(-1)：后退
				history.go(0)：刷新
			5. location：页面的url地址信息
				window.location.href：获取当前页面的url地址
				location.href="1.html":设置跳转到指定的1.html页面
				location.reload():刷新
	
		方法：
			open()
			close()
			alert()
			confirm():确认对话框
			prompt():问答对话框
			clearinterval()
			clearTimeout()
			setInterval()
			setTimeout()
