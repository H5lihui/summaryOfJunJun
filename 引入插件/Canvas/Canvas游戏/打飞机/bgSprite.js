/*
	背景对象  自定义精灵(特殊)
	context：绘图环境
	option: 背景相关坐标和宽高设置
*/

function BgSprite(option){
	this.url=option.url;
	this.x=option.x || 0;
	this.y=option.y || 0;
	this.w=option.w || 0;
	this.h=option.h || 0;
	this.moveX=option.moveX || 0;
	this.moveY=option.moveY || 0;
	this.img=new Image();
	this.img.src=option.url;
	this.lastTime=0;
}

BgSprite.prototype={
	paint:function(context){
		context.drawImage(this.img,0,0,this.w,this.h,this.x,this.y,this.w,this.h);
		context.drawImage(this.img,0,0,this.w,this.h,this.x,this.y-this.h,this.w,this.h);
	},
	update:function(context,time){
		if(this.lastTime!=0){
			this.y+=this.moveY*((time-this.lastTime)/1000);
			if(this.y>=this.h){
				this.y=0;
			}
		}
		this.lastTime=time;
	}
}

var bgsprite=new BgSprite({w:320,h:568,moveY:30,url:'gameArts.png'});

function drawBackground(context,time){
	bgsprite.update(context,time);
	bgsprite.paint(context);
}