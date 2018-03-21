/*
	敌人小飞机精灵
*/




//声明行为对象构造方法  飞行
var EnemyFly=function(){
	this.lastEnemyFly=0;
}
EnemyFly.prototype={
	execute:function(sprite,context,time){
		if(this.lastEnemyFly!==0){
			sprite.top+=sprite.moveY*((time-this.lastEnemyFly)/1000);
			//检测飞机是否飞出屏幕
			if(sprite.top>=context.canvas.height+sprite.height){
				sprite.visible=false;
			}
		}
		this.lastEnemyFly=time;
	}
}

//声明行为对象构造方法  爆炸
var EnemyBomb=function(){
	this.lastEnemyBomb=0;
	//绘制动作中一个图片的时间
	this.cycle=300;
}

EnemyBomb.prototype={
	execute:function(sprite,context,time){
		//结束一次图片的绘制  飞机生存时不切换图片
		if(time-this.lastEnemyBomb>this.cycle && sprite.hp==0){
			sprite.painter.advance();
			this.lastEnemyBomb=time;
		}
	}
}


var Enemy=function(name,painter,behaviors,option){
	//敌机声明
	this.hp=option.hp || 1;
	this.type=option.hp.type || '';
	this.live=true;
	
	
}
Enemy.prototype=new Sprite();




