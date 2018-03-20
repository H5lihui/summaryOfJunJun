# 1.JS引入
```
外联式：<script src=""></script>
内联式：<script>JS代码</script>
内嵌式：<a href="javascript:void(0)" onclick="alert('ok')">点击</a>
注意：内联式和外联式不能混搭
```

# 2.调试程序
```
1. console.log():将内容输出到浏览器的控制台
	console.dir();
2. alert():将内容通过对话框弹出到浏览器
3. document.write():将内容直接输出到浏览器
```

# 3.注释
```
单行注释：//
多行注释：/**/
    注释作用：
    1.辅助自己理解代码
    2.帮助团队成员理解代码
    3.调试代码问题
```

# 3. JS中需要注意事项
1. JS严格区分大小写
2. JS语句末尾添加;结束
3. 尽可能少的定义全局变量

# 4.变量 - "变化"的量
## 规则：
1. 由字母数字下划线和$组成
2. 不能以数字开头
3. 严格区分大小写
4. 不能使用关键字和保留字（if,while,for,switch,case,break...）

## 案例
```
// 申明变量
var username = 'zhangsan';

// 同时申明多个变量
var username = 'zhangsan', age = 30, sex = '男';

// 申明变量但是不赋值
var username;

// 不使用var申明变量（不推荐）
username = 'zhangsan';
```

# 5.数据类型 - 以typeof检测出来的结果为分类标准
## 字符串（string）
1. 使用单引号和双引号定义字符串
2. 单双引号需要注意的内容
    1. 单双引号没有区别，都不解析变量
    2. 单双引号可以相互嵌套
    3. 不可以嵌套自身，除非使用转义字符转义

## 数值（number）
- 整型
- 浮点型（不用浮点数做精确计算和大额计算，有计算损耗）
- NaN(Not a number)
  - NaN与任何值运算都为NaN
  - NaN与任何值都不想等，包括自身
  - isNaN():判断一个值是否是NaN


## 布尔值（boolean）
- true：真
- false：假

## 未定义（undefined）
- 未定义的变量
- 定义但是未赋值的变量

## 对象（object）
```
三种：
- null：空对象
- array：数组（一种特殊的对象，整个JS学习阶段跟对象分离，别认为是对象）
- 创建对象
    - {}
    - new Object()
    - new 函数名()
```

## 函数（function）
```
function demo(){}
typeof demo;    // function
```

# 6.数据类型的相互转换
## 6.1 其他类型 => 字符串：String()
> 注意：对象转为字符串：[Object Object]

## 6.2 其他类型 => 布尔值：Boolean()
- '',0,0.0,NaN,false,null,undefined "只有"这几个值转换为布尔值为false
- "其余都"为真 "0"

## 其他转化为数值 <mark>不包含进制之间的转化</mark>
- Number()
1. 普通字符串->NaN
2. 纯数字字符串,数值->原型输出
3. 空字符串'',空格字符串' ',null->0
4. true->1  false->0
5. undefined->NaN
- parseInt()
- 从第一个字符开始查找，直到找到非法字符(非数字)截止，返回找到的数字
- parseFloat()
- 从第一个字符开始查找，直到找到非法字符(除数字和第一个小数点之外的字符)截止，返回找到的数字

# 7.运算符
## 算术运算符 + - * / % ++ --
```
1. 特殊的+
    ＋号两边是纯数字：＋代表加法运算
    除此之外，＋都是连接运算

2. 纯数字的除+外其余正常运算

3. ++ --
    num1 + num2++:num2先和num1做加法运算，然后num2在自身增加1（先运算再自增1）
    num1 + ++num2:num先自增1，然后在和num1做加法运算（先自增1再运算）
```

## 赋值运算符 = += -= *= /= %=
```
var sum = 0;
sum += 5;    // 等价于 sum = sum + 5
sum -= 5;    // 等价于 sum = sum - 5;
sum *= 5;    // 等价于 sum = sum * 5;
sum /= 5;    // 等价于 sum = sum / 5;
sum %= 5;    // 等价于 sum = sum % 5;

注意：
    sum += 5（数字+法运算）
    sum += '5'（字符串+连接运算）
```

## 比较运算符 == === != !== > < <= > >=

## 逻辑运算符
- &&（两真为真，其余都为假）
- ||（两假为假，其余都为真）
- ! （取反）

## 条件运算符（三元运算符）
3==3 ? value1 : value2;

# 8.流程控制-条件语句
## if条件语句(范围判断)
```
// 定义变量
var age = 24;

// 只有if判断
if (age < 18) {
console.log('小弟弟，你好小');
}

// if...else...判断
if (age < 18) {
// 当年龄小于18岁的时候，执行此段代码
console.log('年龄小于18岁');
} else {
// 当年龄大于等于18岁的时候，执行此段代码
console.log('年龄大于18岁');
}

// if...else if...else...
if (age < 18) {
console.log('年龄小于18岁');
} else if (age >= 18 && age < 24) {
console.log('年龄在18(包含)到24(不包含)岁之间');
} else if (age >= 24 && age < 30) {
console.log('年龄在24(包含)到30(不包含)岁之间');
} else {
console.log('年龄大于等于30岁');
}
```

## switch语句（具体值判断）
```
var month = 1;
switch (month) {
case 1:
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:
console.log('31天');
break;
case 4:
case 6:
case 9:
case 11:
console.log('30天');
break;
case 2:
console.log('28天');
break;
default:
console.log('输入的月份有问题');
}

月份是1 3 5 7 8 10 12的时候，程序输出31天，并break(打断)，不再执行下面的代码
月份是4 6 9 11的时候，程序输出30天，并break(打断)，不再执行下面的代码
如果都不是，程序输出"输入的月份有问题"
```

# 4.流程控制－循环语句
# for循环
```
for (var i = 0; i < 10; i++) {
console.log(i);
}
```

## while循环
```
var i = 0;
while (i < 10) {
console.log(i);
i++;
}
```

## do...while循环
```
var i = 0;
do {
console.log(i);
i++;
} while (i < 10);
无论条件是否成立，都先执行一次do中的代码
```

## break和continue语句
```
// break:终止循环
for (var i = 0; i < 10; i++) {
if (i == 4) {
break;
}

console.log(i);
}
// 最终的结果是：0 1 2 3

// 跳过当前循环继续执行下一次的循环
for (var i = 0; i < 10; i++) {
if (i == 4) {
continue;
}

console.log(i);
}
// 最终的结果是：0 1 2 3 5 6 7 8 9
```

# 5.函数
## 功能（为什么用）
- 减少代码重复书写的次数
- 提升开发效率，缩短开发时间

## 函数定义
```
// 1.普通函数
function demo(){
console.log('第一种定义函数方式');
}

// 2.匿名函数
function(){
console.log('第二种定义函数方式');
}

// 3.使用Function定义函数
new Function('x','y','return x+y;');
```

## 函数的特点
- 函数名定义规则：由字母数字下划线$组成，不能以数字开头,区分大小写,不能使用系统关键字和保留字命名
- 定义函数而不调用等于没写
- 函数可以先调用后定义
- 同名函数会覆盖，不会报错
- 变量的作用域
  - 在函数外申明的变量为全局变量，函数内可以直接调用
  - 在函数内使用var申明的变量为局部变量，只能在函数内调用
  - 在函数内不使用var，直接定义变量为全局变量

- 参数个数
  - 形参 > 实参：多余的形参的值为undefined
  - 实参 > 形参：多余的实参被忽略

- argument函数内置对象 
  - 函数中内置的的所有参数组成的对象

- return 关键字
  - 返回值
  - 终止函数运行


## 函数结果值两种类型
```
1.功能函数 执行一个功能，而不需要返回值
function test(){
	alert('ok');
}
var t = test();
alert(t);    // ???
2.返回值函数
function demo(){
	return 'ok';
}
var d = demo();
alert(d);    // ???
```

## 回调函数
- 概念：函数A作为参数(函数引用)传递到另一个函数B中，并且这个函数B执行函数A。我们就说函数A叫做回调函数


- 理解：调用函数之后，该函数都不知道要做什么，就使用回调函数，让回调函数根据实际情况来写代码

```
// 三个函数
function demo(m,n){
	console.log(m+n)
}

function test(m,n){
	document.write(m+n);
}

function aaa(){
	document.getElementById('box').innerHTML = m+n;
}

// 一个函数 + 多个回调函数
function demo(m,n,cb){
	var res = m + n;

	cb(m+n);
}

demo(3,5,function(res){
	console.log(res);
});

demo(3,5,function(res){
	alert(res);
})

demo(3,5,function(res){
	document.write(res);
})

demo(3,5,function(res){
	document.getElementById('box').innerHTML = res;
})
```

## 递归函数
- 自己调用自己
- 必须有终止条件
```
// 理解递归函数
1.上课着，xx睡觉
    2.梦见自己看金瓶梅，看着看着又睡着了
        3.梦见自己是西门官人，然后和金莲在一起，睡着了
            4.突然感觉要上厕所，一泻千里
            4.结果感觉床湿了，然后就醒了
        3.金莲发现床湿了，然后给了一巴掌，武松又回来了，然后慌忙就醒了
    2.XX梦见自己看金瓶梅，没意思了，醒来吧
1.继续上课

// 代码理解
function demo(m){
console.log(m);

// 特点1：必须有终止条件（没有则是死循环）
if (m > 0) {
// 特点2：必须是自己调用自己
demo(m-1);
}
        
        // 因为递归函数demo()的调用，让此处的打印一直处于等待状态，直到递归调用结束，就会调用这里的打印，而且是从内向外打印
console.log(m);
}
```

## 系统函数
- eval()：将JS字符串作为代码执行
- encodeURI()：转换URL地址
- decodeURI()
- escape()
- unescape()

# 6 数组
## 定义
```
// 1.简单定义
var cars = ['BMW', 'BYD', 'Benz'];

// 2. 创建数组的方式
var cars = new Array();
cars[0] = 'BMW';
cars[1] = 'BYD';
cars[2] = 'BenZ';

// 3.直接定义数组
var cars = new Array('BMW', 'BYD', 'Benz');
```

## 数组的那些坑（特点）
- 1.通过 length 获取和改变数组元素的长度
```
arr.length:获取数组元素的长度
arr.length = 10:设置数组元素的长度为10
```
- 2.数组的下标是从0开始并且是连续的 - 意味着可以通过循环来进行循环(迭代、遍历)
- 3.通过 数组名[索引] 的形式可以获取和改变数组对应的元素值
```
arr[0]:获取第1个元素
arr[0] = 20:设置第1个元素的值为20
```
- 4.new Array(10):不是定义数组有一个元素，值为10，而是定义有10个元素长度的数组

# 7. 对象 = 属性(变量) + 方法（函数）
## 定义
```
// 第一种：使用{}定义对象
var obj = {
    username:"zhangsan",
    age:20,
    say:function(){

    }
}

// 第二种：使用new Object定义
var obj = new Object();
obj.username = 'zhangsan';
obj.say = function(){}

// 第三种：使用函数定义
function Person(){
    this.username = 'zhangsan';
    this.say = function(){

    }
}
var p = new Person();
p对象有username属性和say方法
```

## 特点
```
1. 调用属性和方法
对象名.属性名
对象名.方法名

对象名[属性名]：obj['username'] => 等价于obj.username

2.属性名和方法名都必须符合变量的定义规则

3.属性和属性之间，属性和方法之间，方法和方法之间 用,来连接

4.属性名和属性值之间，方法名和方法之间使用 : 来连接

5.属性值如果是字符串，必须添加""
```

## 循环对象属性和数组元素
```
// 循环获取对象中的属性和属性值（用于对象中只有属性的对象）
var obj = {username:"zhangsan",age:18,sex:"男"};
for (var i in obj) {
	console.log(i,obj[i]);
}

// 循环获取数组中的元素下标和元素
var arr = ['zhangsan','lisi','wangwu'];
for (var i = 0; i < arr.length; i++) {
	console.log(i,arr[i]);
}

// 循环获取数组的元素下标和元素（不需要知道数组元素的长度，但是效率比普通for循环差）
for (var i in arr) {
	console.log(i,arr[i]);
}

// 循环获取数组的元素下标和元素（不需要知道数组元素的长度，但是效率比普通for循环差）
arr.forEach(function(value,key){
    // value:每个数组元素的值 key：每个数组元素的索引
    console.log(value,key)
})
```

# 9.内置对象
## 9.1 Array对象
- arr.length：获取数组元素的长度
- arr.join(str)：将arr以指定字符连接成字符串
- arr.push():在数组末尾推入指定元素
- arr.pop()：弹出并返回数组末尾元素
- arr.shift()：弹出并返回数组第一个元素
- arr.unshift()：在数组开头处添加指定元素
- arr.sort([函数:排序规则])：排序（默认采用字符串顺序排序，数字排序则需要通过自定义函数实现）
- arr.reverse()：数组元素顺序反转
- arr.indexOf()：获取指定元素在数组中的位置，不存在返回-1
- arr.lastIndexOf()：获取指定元素最后一次出现的位置，不存在返回-1
- arr.slice(起始位置,结束位置):获取数组中指定的片段(不包含结束位置)
- arr.splice(起始位置,长度):从数组中添加或删除元素。
- arr.every():检测数值元素的每个元素是否都符合条件。
- arr.map():通过指定函数处理数组的每个元素，并返回处理后的数组。
- arr.filter():检测数值元素，并返回符合条件所有元素的数组。
- arr.some():检测数组元素中是否有元素符合指定条件。

## 9.2 Boolean对象

## 9.3 Date对象
- var d = new Date()：获取当前的日期对象
```
new Date()
new Date(时间戳)
new Date('2016/8/19 5:28:30'):注意这种格式的兼容性
new Date(2016,7,19,5,28,19,178)
```
- d.getFullYear()：年
- d.getMonth()：月（0-11）
- d.getDate()：日（1-31）
- d.getHours()：小时（0-23）
- d.getMinutes()：分钟（0-59）
- d.getSeconds()：秒数（0-59）
- d.getTime():时间戳

## 9.4 Math对象
属性
- PI:圆周率
  方法
- Math.abs()：绝对值
- Math.ceil()：进一取整
- Math.floor()：舍去取整
- Math.round()：四舍五入
- Math.max()：获取最大值
- Math.min()：获取最小值
- Math.random()：获取随机数
```
function rand(m,n){
return Math.floor(Math.random()*(n-m+1)+m);
}
```

## 9.5 Number对象
- MAX_VALUE:最大的数
- MIN_VALUE:最小的数
- num.toFixed(num):保留指定的小数位

## 9.6 String对象
- str.length:字符串的长度
- str.split(str)：将字符串以指定字符切割

- str.search(str|reg)：在字符串中搜索指定字符，返回对应的位置，不存在返回-1
- str.match(str|reg):在字符串中匹配指定字符，存在返回数组，不存在返回null
- str.replace(str1|reg,str2)：用str2替换str1的值

- str.slice(start,end):获取字符串中指定的片段(不包含结束位置)
- str.indexOf(str)：获取字符串中指定字符的位置，不存在返回-1
- str.lastIndexOf(str)：获取字符串中指定字符最后出现的位置，不存在返回-1
- str.charAt(num):获取指定位置的字符

- str.charCodeAt(num):指定位置的字母对应的Unicode编码
- String.fromCharCode():将Unicode编码转为字符

## 9.7 RegExp对象
### 元字符
```
[a-z]:任意一个小写字母
[0-9]:任意一个数字
[abcd0123]:abcd0123这几个字符中任意一个
[\w]:任意一个 字母数字_
[\d]:任意一个 数字
[^0-9]:除数字之外，任意一个字符
. :任意一个字符（除\r\n之外，不加[]）
```
### 量词
```
{1,3}
{1,}
{1}

*:任意数量(0,1,2,3...) => {0,}
+:至少一个    => {1,}
?:至多一个    => {0,1}

^[0-9]:必须是以数字开头
[0-9]$:必须是以数字结尾
^[0-9]{4,10}$:必须是4-10位的数字
```

### 模式修正符
```
g:全局匹配
i:不区分大小写
m:多行匹配
```
- reg.test(str):使用正则表达式检验str是否符合要求
