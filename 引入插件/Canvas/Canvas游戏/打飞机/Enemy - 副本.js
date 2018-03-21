/*
	敌人小飞机精灵
*/

//飞机需要的图片
var cells=[{x:80,y:655,w:35,h:30},{x:45,y:655,w:35,h:30},{x:418,y:731,w:40,h:30},{x:473,y:723,w:40,h:50}];


//声明绘制器
var enemySpritePainter=new SpritePainter('gameArts.png',cells);


//声明行为对象构造方法  飞行
var EnemyFly=function(){
	this.lastEnemyFly=0;
}
EnemyFly.prototype={
	execute:function(sprite,context,time){
		if(this.lastEnemyFly!==0){
			sprite.top+=sprite.moveY*((time-this.lastEnemyFly)/1000);
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
		if(time-this.lastEnemyBomb>this.cycle && sprite.visible==false){
			sprite.painter.advance();
			this.lastEnemyBomb=time;
		}
	}
}


//飞行对象


var Enemy1=new Sprite('Enemy',enemySpritePainter,[new EnemyFly(),new EnemyBomb()]);
var Enemy2=new Sprite('Enemy',enemySpritePainter,[new EnemyFly(),new EnemyBomb()]);
Enemy1.left=0; 	
Enemy1.moveY=100; 	
Enemy2.left=100; 	
Enemy2.moveY=50; 	
