1. 变量和函数的特点
	全局变量和全局函数是window对象的属性
	全局变量和全局函数可以被提前调用
		全局变量被提前调用，不会报错，值是undefined
		全局函数可以被提前调用
		未定义的变量直接调用报错

		var username = '张三丰';

	    function test() {
	        /*
			函数内部和外部都有username变量，以函数内部的username为主
	    	*/
	        console.log(username); // undefined
	        var username = '李四';
	        console.log(username); // 李四
	    }
	    test();

2. 对象的特点：引用赋值和普通赋值
	引用赋值：对象，数组，函数 
	普通赋值：字符串，数值，布尔值，Null,undefined

3. 函数：call()/apply()

4. this关键字
	1. this指向调用函数的对象（最重要）
		var user = {
			username:"zhangsan",
			say: function(){
				console.log(this.username);
			}
		}
		user.say();	// zhangsan  this指向say前的user对象
	2. this指向new（实例化）之后的p对象（次重要）
		function Person(){
			this.username = 'zhangsan';
			this.say = fucntion(){
				console.log(this.username);
			}
		}
		var p = new Person();
		p.username
		p.say();
	3. apply和call（次次重要）
		var obj1 = { value: 'zhangsan' };
	    var value = '田七';

	    // 全局函数 - window对象的方法
	    function getValue() {
	        console.log(this.value);
	    }
	    getValue(); // 田七
	    // 强制的将getValue中的this指向指定的对象
	    getValue.call(obj1); // zhangsan
	    getValue.apply(obj1); // zhangsan
	 4. 匿名函数，局部函数中的this都指向了window（了解）

5. 闭包(closure)
	闭包：通过函数，延长局部变量的生命周期
	缺点：内存得不到释放，导致内存泄露
	
	function demo(){
		var num = 3;

		function test(){
			console.log(num);
		}

		return test;
	}
	var fun = demo();
	fun();	// 3
	
6. 原型
	// 构造函数:内部的属性和方法在实例对象中不共享
	function Person(){
		this.username = 'zhangsan';
		this.say = function(){}
	}

	// 原型对象:内部的属性和方法在实例对象中共享
	Person.prototype.age = 18;
	Person.prototype.eat = function(){}

	// 实例对象:获取构造函数和原型对象中所有的属性和方法
	var p = new Person();

	console.log(Person.prototype == p.__proto__)
	console.log(Person.prototype.constructor == Person)

	var p1 = new Person();
	var p2 = new Person();
	console.log(p1 == p2);		// false
	p1.username == p2.username // true
	p1.say == p2.say // false

	p1.age == p2.age  // true
	p1.eat == p2.eat  // true 共享同一块内存地址

7. 原型链
	JS中的所有对象都可以通过原型链连接到Object
    而且实例对象拥有原型链上所有原型对象的方法和属性

8. 继承
	构造函数继承:只继承Human构造函数内的属性和方法
		function Human(){}
		function Student(){
			Human.call(this)
		}
	原型链继承：继承Human构造函数和Human原型对象中所有的属性和方法
		function Human(){}

		Student.prototype = new Human()
		function Student(){}

