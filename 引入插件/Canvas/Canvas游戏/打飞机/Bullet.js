/**
	子弹类
*/



var BulletFly=function(){
	this.lastBulletFly=0;
}
BulletFly.prototype={
	execute:function(sprite,context,time){
		if(this.lastBulletFly!==0){
			sprite.top+=sprite.moveY*((time-this.lastBulletFly)/1000);
			//检测飞机是否飞出屏幕
			if(sprite.top<=0){
				//取消对象显示
				sprite.visible=false;
			}
		}
		this.lastBulletFly=time;
	}
}


function createBullet(name,Px,Py){
	
		//飞机需要的图片
	var allUrl='gameArts.png';
	var BulletOption={w:5,h:15,hp:1,x:Px,y:Py,moveY:-400};
	var BulletCells=[
					{x:499,y:0,w:5,h:15}
				];
	//声明精灵图片列表变量
	
	var Bullet=new Sprite(name,new SpritePainter(allUrl,BulletCells),[new BulletFly()]);
	
	Bullet.width=BulletOption.w;
	Bullet.height=BulletOption.h;
	Bullet.left=BulletOption.x;
	Bullet.top=BulletOption.y;
	Bullet.moveY=BulletOption.moveY;
	Bullet.hp=BulletOption.hp;
	
	return Bullet;
}
