jquery:JavaScript query（js查询选择器）
	document.getElementsByTagName('div');
	document.querySelector('div');
	
	// jquery是别人封装好的一个函数库，完成特效的时候特别的方便
	$('div')
	$('#box')
	$('li')
	$('.shop ul li')
	
	$('li').mouseover(function(){}).mouseout(function(){}).click()
	
	document.documentElement.clientHeight
	$(window).height()
	
	jQuery核心宗旨：write less ,do more 写的更好，做的更多
		jquery.min.js:84.6kb
		jquery.js:261kb
			两个代码是一模一样的
			jquery.js是内部有注释和回车换行
	我们学习的是：定义了哪些函数
	
	jquery:1.7 1.8 1.10. 1.11.3 1.12.4
	jquery:2.0+
	jquery:3.2.1
	
	jquery2.0以上不支持IE8


jQuery内容：
1. 选择器
   基本选择器：#id .class 标签 div,h3,p
   层级选择器：
   	div p:后代
   	div>p:父子
   	.a+p：相邻
   	.a~p：兄弟
   基本筛选选择器：
   	eq():等于
   	lt():小于
   	gt():大于
   	
   	:odd:奇数
   	:even:偶数
   	
   	p:not(.a)：除class="a"之外的p标签
   打酱油的选择器：
   	*-child：必须是孩子
   	*-type：兄弟间查找
   	[]属性选择器
   	:input/:radio...

2. 事件

   ```
   $('btn').click(function(){
   	// 点击了btn,$(this)就是btn对象
     	$(this)
   })

   $('#menu li').mouseover(function(){}).mouseout(function(){})

   // 原生JS中IE8不支持pageX
   e.pageX
   e.pageY

   e.clientX
   e.clientY

   e.key
   e.keyCode
   ```

3. 动画效果

   ```
   时间词：
   	固定单词：slow normal fast
   	时间：2000 
   	
   原理：指定的时间内：宽度，高度，透明度的改变
   show():展示
   hide()：隐藏
   toggle():切换显示与隐藏

   滑动：指定的时间内：高度的改变
   slideDown():下滑
   slideUp():上滑
   slideToggle():切换上滑和下滑

   淡入淡出:指定的时间内透明度的改变
   fadeIn()
   fadeOut()
   fadeToggle()
   fadeTo(时间，目的值)

   自定义动画
   animate(目的值，总时间，动画类型, 动画完成之后的回调函数)

   两个关键函数
   delay():延迟时间
   stop():停止动画
   	stop(true,true):停止动画，并立即执行完成
   ```


1. 属性

   ```
   // attr()对属性进行 添加，修改，删除，获取
   attr('href')：获取href属性
   attr('href','baidu.com'):设置href属性
   removeAttr('href'):删除href属性

   prop('checked'):针对单选和多选按钮：选中为true，不选中为false

   // 关于class
   addClass('a'):添加class="a"
   removeClass('a'):移出class="a"
   toggleClass('a'):切换class="a"

   // 关于值
   $('p').text():获取p标签内的文本（不包含子标签）
   $('p').text('1234546'):设置p标签内的文本

   $('p').html():获取p标签的所有内容（包含子标签）
   $('p').html('<span>abcd</span>'):设置p标签的所有内容（包含子标签）

   $('input').val():获取input的value值
   $('input').val('1234'):设置因叛徒的value值
   ```

2. css

   ```
   css('width'):获取宽度（带单位）
   css('width',500):设置宽度

   offset():获取距离页面的边距，结果是对象：{top:10,left:10}
   position():获取距离有定位的父级的边距，结果是对象 {top:10,left:10}

   // 获取滚动的距离
   scrollLeft()
   scrollTop()

   // 设置滚动距离
   scrollLeft(100)
   scrollTop(100)

   // 获取整个浏览器的滚动距离
   $(window).scrollTop()

   $('.box').width()/$('.box').height():获取div的宽度和高度（不包含border和padding）
   $('.box').innerWidth()/$('.box').innerHeight():获取宽度和高度（包含padding）
   $('.box').outerWidth()/$('.box').outerHeight():获取宽度和高度（包含padding和border）

   $(window).width()/$(window).height():浏览器宽高
   $(document).width()/$(document).height():文档宽高
   ```

3. 对象访问

   ```
   // 获取每个li的内容
   $('li').each(function(){
     	console.log($(this).text());
   })

   // 获取对象的个数
   $('li').length

   // 获取当前对象所在的索引值
   $('.a').index()
   ```


1. 外部插入：在指定的li的前面或者后面加入

   ```
   after()
   insertAfter()
   before()
   insertBefore()
   ```

2. 内部插入:在ul的子级的开始或者末尾加入

   ```
   append()
   appendTo()
   prepend()
   prependTo()
   ```


1. 包裹

2. 替换

3. 删除

   ```
   remove():删除自身
   empty():删除内容
   ```


1. 克隆

   ```
   clone():克隆标签，属性，内容
   clone(true):克隆标签，属性，内容，事件
   ```

   筛选

   ```
   eq()
   hasClass()
   has()
   filter()
   is()

   next()
   prev()
   parent()
   parent()
   siblings()
   find()
   children()
   ```

   ​

