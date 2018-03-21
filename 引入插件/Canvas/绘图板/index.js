// 设置默认是那个类型
var tool="drawingPens";
// 设置工具是那个
var _this=null;
// 设置默认笔触color
var color='#000';
// 设置默认笔触width
var width=1;	
window.onload=function(){	
	var aImg=document.getElementById('img').getElementsByTagName('button');
	var aTool=document.getElementById('tool').getElementsByTagName('li'); 
	var aShape=document.getElementById('shape').getElementsByTagName('li');
	var aSize=document.getElementById('size').getElementsByTagName('li');
	var aColor=document.getElementById('color').getElementsByTagName('li');

	change(aTool);
	change(aShape);
	penStyle(aSize,false);
	penStyle(aColor,true);

	var canvas=document.getElementById('canvas');
	var context=canvas.getContext('2d');
	// 清除画布
	aImg[1].onclick=function(){
		context.clearRect(0,0,canvas.width,canvas.height);
	}
	canvas.onmousedown=down;
}




/************************public**************************/
// 获取非行内元素属性
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}
// 获取canvas光标
function coorDinate(canvas,x,y){
	var canvasBox=canvas.getBoundingClientRect();
	var canvasX=x-canvasBox.left;
	var canvasY=y-canvasBox.top;
	return{
		x:canvasX,
		y:canvasY
	}
}




/************************实现功能*************************/
function down(e){
	var canvas=document.getElementById('canvas');
	var context=canvas.getContext('2d');
	var coordinateout=coorDinate(canvas,e.clientX,e.clientY);
	var startX=coordinateout.x;
	var startY=coordinateout.y;
	context.strokeStyle=color;
	context.lineWidth=width;
	context.fillStyle=color;
	// document.title=coordinateout.x;
	// 绘画笔 
	if(tool=='drawingPens'){
		context.beginPath();
		context.moveTo(startX,startY);
	// 橡皮擦
	}else if(tool=='eraser'){
			context.clearRect(startX,startY,width*4,width*4);
	// 油漆桶
	}else if(tool=='paintBucket'){
			context.fillRect(0,0,canvas.width,canvas.height);
	// 文字
	}else if(tool=='textEntry'){
			context.font=width*3+'px 微软雅黑';
			var textContent=window.prompt('请输入文字','');
			if(textContent){
			context.fillText(textContent,startX,startY);
			}
	}
	var coor;
	canvas.onmousemove=function(e){
		var coordinate=coorDinate(canvas,e.clientX,e.clientY);
		// document.title=coordinate.x+'---'+coordinate.y;
		// 绘画笔 
		if(tool=='drawingPens'){
			context.lineTo(coordinate.x,coordinate.y);
			context.stroke();
		// 橡皮擦
		}else if(tool=='eraser'){
			context.clearRect(coordinate.x,coordinate.y,width*4,width*4);
		}
		coor=coordinate;
		
	}
	canvas.onmouseup=function(){
		// 放大镜
		if(tool=='magnifier'){
			var scale=window.prompt('请输入缩放的倍数百分比','');
			if(scale){
				var scaleX=canvas.width*(scale/100);
				var scaleY=canvas.height*(scale/100);
					canvas.style.width=parseInt(scaleX)+'px';
					canvas.style.height=parseInt(scaleY)+'px';
				return false;
			}
		}
		if(coor){
			// 空心圆
			if(tool=='georama'){
				context.beginPath();
				context.arc(startX,startY,Math.sqrt(Math.pow((coor.x-startX),2)+Math.pow((coor.y-startY),2)),Math.PI/180*0,Math.PI/180*360,false);
				context.stroke();
			// 空心矩形
			}else if(tool=='outlinedRectangle'){
				context.strokeRect(startX,startY,coor.x-startX,coor.y-startY);
			// 实心圆 
			}else if(tool=='solidDisc'){
				context.beginPath();
				context.arc(startX,startY,Math.sqrt(Math.pow((coor.x-startX),2)+Math.pow((coor.y-startY),2)),Math.PI/180*0,Math.PI/180*360,false);
				context.fill();
			// 实心矩形
			}else if(tool=='filledRectangle'){
				context.fillRect(startX,startY,coor.x-startX,coor.y-startY);
			// 直线
			}else if(tool=='linear'){
				context.beginPath();
				context.moveTo(startX,startY);
				context.lineTo(coor.x,coor.y);
				context.stroke();
			// 空心三角 
			}else if(tool=='hollowTriangular'){
				context.beginPath();
				context.moveTo(coor.x,coor.y);
				context.lineTo(startX-(coor.x-startX),coor.y);
				context.lineTo(startX,startY-Math.sqrt(Math.sqrt(coor.x-startX,2)+Math.sqrt(coor.y-startY,2)));
				context.closePath();
				 context.stroke();
			}
		}
		canvas.onmousemove=null;
		canvas.onmouseup=null;
	}
	  // return false;
}







/**************更改tool和shape的背景颜色并检测他使用什么工具***********/
function change(name){
	var canvas=document.getElementById('canvas');
	var context=canvas.getContext('2d');
	for(var i=0;i<name.length;i++){
		name[i].onclick=function(){
			changeBg(name,this);
			tool=this.attributes['id'].value;
			var ifTool=this.parentNode.parentNode.attributes['id'].value;
			// console.log(name);

			if(ifTool=='tool'){
				canvas.style.cursor='url(./images/'+tool+'1.PNG), default';
			}else{
				canvas.style.cursor=' crosshair';
			}
		}
	}
}
function changeBg(name,yoName){
	if(_this!=null){
		_this.className='';
	}
	yoName.className+=' pubColor';
	_this=yoName;
	// console.log(_this);
}





/***************更改size和color的描边和背景以及获取颜色和笔触*************/
function penStyle(name,ifCol){
	var aa=ifCol;
	for(var i=0;i<name.length;i++){
		name[i].index=i;
		name[i].onclick=function(){
			// 获取颜色
			if(aa==true){
				color=getStyle(this,'backgroundColor');
				// console.log(color);
			}
			// 设置笔触
			if(aa==false){
				width=this.index*2+3;
				// console.log(width);
			}
		for(var i=0;i<name.length;i++){
				name[i].className='';
			}
			this.className=' pubColor';	
		}
	}
}