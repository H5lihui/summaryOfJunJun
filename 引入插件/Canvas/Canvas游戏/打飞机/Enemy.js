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
			//更新状态
			if(sprite.painter.cellIndex==sprite.painter.cells.length-1){
				sprite.visible=false
			}
			this.lastEnemyBomb=time;
		}
	}
}




var createEnemy=function(name){

		//飞机需要的图片
	var allUrl='gameArts.png';
	var smallOption={w:40,h:30,moveY:parseInt(Math.random()*100)+100,hp:1,score:500};
	var middleOption={w:46,h:60,moveY:parseInt(Math.random()*50)+80,hp:2,score:1000};
	var bigOption={w:110,h:170,moveY:parseInt(Math.random()*80)+80,hp:3,score:2000};
	var smallCells=[
						{x:80,y:655,w:35,h:30},
						{x:45,y:655,w:35,h:30},
						{x:418,y:731,w:40,h:30},
						{x:473,y:723,w:40,h:50}
					];
	var middleCells=[
						{x:0,y:569,w:46,h:60},
						{x:432,y:413,w:46,h:61},
						{x:432,y:538,w:46,h:63},
						{x:432,y:599,w:46,h:58},
						{x:432,y:478,w:46,h:59}
					];
	var bigCells=[
					{x:110,y:736,w:110,h:170},
					{x:221,y:857,w:110,h:170},
					{x:310,y:680,w:110,h:170},
					{x:0,y:754,w:110,h:170},	
					{x:322,y:340,w:110,h:170},
					{x:322,y:170,w:110,h:170},
					{x:322,y:340,w:110,h:170},
					{x:322,y:510,w:110,h:170},
					{x:322,y:0,w:110,h:170}
				];
	//声明精灵图片列表变量
	var cells;
	if(name=='samllEnemy'){
		cells=smallCells;
		info=smallOption;
	}else if(name=='middleEnemy'){
		cells=middleCells;
		info=middleOption;
	}else if(name=='bigEnemy'){
		cells=bigCells;
		info=bigOption;
	}
	
	var Enemy=new Sprite(name,new SpritePainter(allUrl,cells),[new EnemyFly(),new EnemyBomb()]);
	
	Enemy.width=info.w;
	Enemy.height=info.h;
	Enemy.left=info.w*Math.floor(Math.random()*(320/info.w));
	Enemy.top=-info.h;
	Enemy.moveY=info.moveY;
	Enemy.hp=info.hp;
	Enemy.score=info.score;
	//alert(Enemy.score);
	return Enemy;
}

//飞机的几个状态  visible 是否可见   animating 是否处于动画中 hp  气血  ---->有效装机  气血>0
