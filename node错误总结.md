1.
	str1 is not defined:str1没有被定义
	age is not defined:
	data is not defined
	users is not defined
		在html文件中，就是对应users.js没有给我传值
		age没有被定义

		可能原因：单词写错了，根本没有定义

2.
	missing ) after argument list:在参数的后面丢失了）

	{username:"zhangsan}
	{username=""}
	{username:abc}

	{username:""

	[{}{}{}{}]

3. 
D:\wamp\www\H535\04-Node\node07\app\routes\users.js:15：users.js第15行
	Invalid or unexpected token: 无效或者不期望出现的符号

	标点符号写错了

4.
	obj.say is not a function:obj.say不是一个函数
		say单词写错了
		obj单词写错了

		obj没有say方法

5. Invalid shorthand property initializer：对象初始化定义出错
	invalid:无效
	shorthand: 快速定义对象
	property:属性
	initializer:初始化

	{username:"zhangsan"}

6. Unexpected token {:不期望出现的{

7.Can't set headers after they are sent.
	当他们被发送之后，不能再设置头信息

8.Port 3000 is already in use:3000端口已经被使用
	问题解决办法：已经开了一个项目，端口是3000，又开启一个项目，端口号还是3000

9.Cannot overwrite `User` model once compiled.
	在node中不能覆盖User模型（User只能定义一次）
	将User定义不要放在路由中，放在文件最上面

10. Error: Failed to lookup view "error" in views directory "D:\wamp\www\H535\04-Node\node07\app\views"：在views目录下找不到error.html页面

11. E11000 duplicate key error index: blog.users.$username_1 dup key: { : "zhangsan" }'
	zhangsan这个值重复了，而mongodb不让重复的名字进去，所以报错

12.Error: Cannot find module 'mongoose'
	找不到mongoose模块
	为什么：因为你么有下载 npm i mongoose

13. Cast to ObjectId failed for value "abcd1234" at path "_id" for model "User"
	给_id设置abcd1234的值是错误的

遇到错误：
1.如果在黑窗口启动项目，出现报错，马上ctrl+c停止项目，根据错误提示，检验项目问题（一般都是语法错误）

2.如果黑窗口没有报错，则需要检查自己的代码问题
	访问的是哪个路由，就去对应的路由中检查问题

