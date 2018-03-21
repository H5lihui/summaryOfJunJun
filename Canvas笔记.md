Canvas:浏览器提供的在页面画图的API（属性和方法）
	
	引用：
	1. 游戏
	2. 图表（折线图，饼状图，柱状图）
	3. 圆圈进度展示，钟表...

canvas各种图形
	1. 矩形
		ctx.fillRect(起始点横坐标，起始点纵坐标，宽度，高度)
		ctx.strokeRect(起始点横坐标，起始点纵坐标，宽度，高度)
		ctx.clearRect(起始点横坐标，起始点纵坐标，宽度，高度)

	2. 直线
		ctx.moveTo(100,100);
		ctx.lineTo(200,200);
		ctx.stroke();

	3. 虚线
		ctx.setLineDash([5,10]);
		ctx.moveTo(100,100);
		ctx.lineTo(200,100);
		ctx.stroke()

	4. 圆
		ctx.arc(圆心横坐标，纵坐标，半径，起始弧度，结束弧度，顺(false)逆(true)时针);
		ctx.stroke() 	// 边框圆
		ctx.fill() 	// 填充圆

	5. 文字绘制
		// 设置字体大小（字体大小和字体名称）
        ctx.font = '28px 微软雅黑';

        // 设置文字的水平对齐方式(left,center,right)
        ctx.textAlign = 'left';

        // 设置文字的垂直对齐方式(top,middle,bottom)
        ctx.textBaseline = 'top';

		ctx.fillText(文字,文字起始点横坐标,纵坐标) 	填充文字
		ctx.strokeText(文字,文字起始点横坐标,纵坐标) 边框文字

	6. 曲线绘制
		ctx.moveTo(x,y):起始点
		ctx.arcTo(控制点1的x，控制点1的y，结束点的x，结束点的y)
		ctx.stroke():边框曲线
		ctx.fill():填充曲线

canvas方法
	beginPath()/closePath()
		1. 连接起点和终点
		2. 结束线段绘制

	save()/restore()：
		save():将之前的样式保存
		... 很多代码
		... 代码设置线条厚度，填充颜色，边框颜色等...
		resotre():将save()保存的样式恢复

	平移旋转缩放：
		平移：translate()
		旋转：rotate()
		缩放：scale()

	clip():裁剪

	toDataURL()：将canvas绘制的图形转为base64编码的图片，直接赋予图片的src地址

canvas属性：
	文字属性：
		textAlign
		font
		textBaseline
	阴影
		shadowColor
		shadowBlur
		shadowOffsetX
		shadowOffsetY
	填充颜色
		fillStyle
	边框
		strokeStyle
		lineWidth

canvas处理图片
	drawImage(img, 图片左上角定点的横坐标，纵坐标)
	drawImage(img, 图片左上角定点的横坐标，纵坐标, 图片宽度，图片高度)
	drawImage(img, 图片的起始横坐标,纵坐标,图片某个元素的宽,高度,canvas画布的起始横坐标，纵坐标，图片在canvas画布占据的宽，高度)