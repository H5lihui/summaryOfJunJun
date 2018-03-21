canvas技术点

1.canvas可以绘制的图形
	1.直线
		ctx.moveTo(横，纵)
		ctx.lineTo(横，纵)
		ctx.stroke()
	2.虚线
		ctx.setLineDash([5,10])
		ctx.moveTo(横，纵)
		ctx.lineTo(横，纵)
		ctx.stroke()
	3.矩形
		ctx.fillRect(横坐标，纵坐标，宽度，高度)
		ctx.strokeRect(横坐标，纵坐标，宽度，高度)
	4.圆
		ctx.arc(横坐标，纵坐标，半径，起始弧度，结束弧度，绘制方向);

			弧度：2PI（整圆） PI(半圆)
	5.曲线
		moveTo(第一组控制点横坐标，纵坐标);
		arcTo(第二组点横坐标，纵坐标，第三组点横坐标，纵坐标，圆弧半径)

		// 二次贝塞尔曲线
		ctx.moveTo(第一组点横坐标，纵坐标);
        ctx.quadraticCurveTo(第二组点横坐标，纵坐标，第三组点横坐标，纵坐标)

		// 三次贝塞尔曲线
        ctx.moveTo(第一组点横坐标，纵坐标);
        ctx.bezierCurveTo(第二组点横坐标，纵坐标，第三组点横坐标，纵坐标，第四组点横坐标，纵坐标);
        ctx.stroke();

	6.文字
		strokeText(text,文字左上角横坐标，纵坐标)
		fillText(text,文字左上角横坐标，纵坐标)

2.canvas的方法
	1.beginPath()/closePath()
		特点1：开关路径，可以让结束点和起点连接
		特点2：避免stroke()和fill()进行多次绘制
	2.save()/restore()
		特点：将save()和restore()之间的代码完全隔离，之间设置的任何样式不会超出这个范围
	3.
		translate:平移
		scale：缩放
		rotate：旋转
		
3.canvas的属性
	lineWidth:线厚度
	strokeStyle:线颜色
	fillStyle:填充颜色

	globalAlpha：全局透明度
	globalCompositeOperation：图片合成
	shadowColor/shadowBlur/shadowOffsetX/shadowOffsetY:阴影

	有关文字的属性
	font
	textBaseline:垂直对其方式
	textAlign:水平对齐方式

4.图片绘制
	drawImage(img,x,y,w,h)
	createPattern(img,'no-repeat|repeat')
	getImageData(x,y,w,h)
	putImageData(obj,x,y)
	createImageData(w,h)

