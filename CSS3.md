# 一、 CSS3 选择器

##  1. 元素选择器

```
1. ID选择器 #id
2. 类选择器 .class
3. 标签选择器 h3
4. 组合选择器 .header,.footer
```
## 2. 关系选择器

```
1. 后代选择器：div p(在div的后代中找p标签)
2. 父子选择器：div>p(在div的子级中找p标签)
3. 相邻选择器：.test+p(查找.test后的第一个p标签)
4. 兄弟选择器：.test~p(查找.test后所有的同辈p标签)
```
## 3. 属性选择器

```
[class]:查找有class属性的p标签
p[class]:查找有class属性的p标签
p[class="header"]:查找有class属性，并且class属性只能是header的p标签
    <p class="header">
p[class~="header"]:查找有class属性，并且class的多个属性中有header即可的p标签
    <p class="header">
    <p class="header nav">
p[class^="header"]:查找有class属性，并且class必须以header开头的p标签
    <p class="header"></p>
    <p class="header1"></p>
    <p class="header-title"></p>
p[class$="header"]:查找class属性，并且class必须以header结尾的p标签
    <p class="header">
    <p class="abcheader">
    <p class="nav-header">
p[class*="header"]:查找class属性，并且class属性值中包含header的p标签
    <p class="header"></p>
    <p class="abcheader"></p>
    <p class="headerabc"></p>
    <p class="header-title"></p>
    <p class="abcheader-title"></p> 
p[class|="header"]:查找有class属性，并且class属性值是header，或者header-开头的p标签
    <p class="header"></p>
    <p class="header-title"></p>
    <p class="headerabc"></p>   不是以header-开头，匹配不到
```
## 4. 伪类选择器

```
1. 链接伪类选择符
    a:link:链接未点击之前的样式
    a:visited:链接点击之后的样式
    a:hover:鼠标移入链接的样式
    a:active:鼠标按下去的样式(激活)

    扩展：:hover和:active可以针对所有的标签做鼠标移入和鼠标按下去的样式设置
    注意：
    1. 按照上面四个顺序进行定义

2. 结构性伪类选择器
    // 在父元素找指定索引的子元素
    :first-child:匹配父元素的第一个子元素
    :last-child:匹配父元素的最后一个子元素
    :only-child:匹配父元素仅有的一个子元素
    :nth-child(n):匹配父元素的第n个子元素E，假设该子元素不是E，则选择符无效
    :nth-last-child(n):匹配父元素的倒数第n个子元素E，假设该子元素不是E，则选择符无效
    
    div
    	h3-1
    	p-2
    	h3-3
    	h3-4
    	p-5
    	p-6
    	
    	h3:first-child
    	p:first-child
    	
    	p:last-child
    	h3:last-child
    	p:nth-child(3)

    // 在同类型（兄弟）找指定索引的兄弟元素
    :first-of-type:匹配同类型中的第一个同级兄弟元素
    :last-of-type:匹配同类型中的最后一个同级兄弟元素
    :only-of-type:匹配同类型中的唯一的一个同级兄弟元素
    :nth-of-type(n):匹配同类型中的第n个同级兄弟元素
    :nth-last-of-type(n):匹配同类型中的倒数第n个同级兄弟元素
    	h3-1
    	p-2
    	h3-3
    	h3-4
    	p-5
    	p-6
    	
    	h3:first-0f-type
    	p:first-of-type
        
        p:last-of-type
        p:nth-of-type(2)

    odd(奇数)/even(偶数)
    n(奇数)/2n(偶数)

3. 用户界面(UI)元素状态伪类选择器
    :checked:匹配用户界面上处于选中状态的元素(用于input type为radio与checkbox时)
    :enabled:匹配用户界面上处于可用状态的元素
    :disabled:匹配用户界面上处于禁用状态的元素

4. 目标伪类选择符
    :target:匹配相关URL指向的E元素(通过锚点可以指向的目标)

5. 用户行为伪类选择符
    :focus:设置input在成为输入焦点时的样式
6. 语言伪类选择符
    :lang:匹配使用特殊语言的E元素
7. 否定伪类选择符
    :not(s):匹配不含有s选择符的元素E
8. 结构性伪类选择器
    :root:匹配E元素在文档的根元素。在HTML中，根元素永远是HTML html{}
    :empty:匹配没有任何子元素（包括text节点）的元素E
```
## 5. 伪对象选择器

```
1. ::before:设置在对象前（依据对象树的逻辑结构）发生的内容。
2. ::after:设置在对象后（依据对象树的逻辑结构）发生的内容。
    注意:
    ::before和::after必须和content属性一起使用
3. ::first-letter:设置对象内的第一个字符的样式
4. ::first-line:设置对象内的第一行的样式
5. ::placeholder:设置对象文字占位符的样式
6. ::selection:设置对象被选择时的样式
```

# 二、CSS3 属性

## 1. 尺寸（Dimension）

```
width:宽度
height:高度
  单位:
  1. px固定值大小
  2. 百分比（以父级容器大小设置）
max-width:最大宽度（宽度最大不能超过的值）
max-height:最大高度（高度最大不能超过的值）

min-width:最小宽度（宽度最低不能低于这个值）
min-height:最小高度（高度最低不能低于这个值）
```

## 2. 字体（Font）

```
font-size:字体大小(***)
  1.px
  2.百分比（参照父标签字体大小）

  注意：
  1.不要小于12px
  2.默认是16px
font-style:设置字体样式
  normal:正常（默认）
  italic:斜体
  oblique:斜体
font-variant:设置字体是否是小型的大写字母
  normal:正常
  small-caps:小型的大写字母
font-weight：设置字体的粗细(***)
  normal:正常
  bold:粗体
  100-900的整数
font-family:设置字体的名称(***)
    微软雅黑
font：复合属性（***）
    要求：必须有字体大小(font-size)和字体名称(font-family)
    font: 24px/30px "微软雅黑";
```

## 3. 文本（Text）

```
text-align:设置文字的水平对齐方式（***）
  left:左对齐
  center:居中对齐
  right：右对齐
  justify:两端对齐
text-indent:设置文字首行缩进（***）
  2em:缩进两个汉字
line-height:设置行高：（***）
  px
  百分比(以自身字体大小为参照)
vertical-align：设置当前内容的垂直方向位置
  1.固定值px 正上移动 负值下移动
  2.百分比   正上移动 负值下移动 
    移动的距离：移动的百分比*当前标签的行高（被继承）
  3.固定单词(https://www.cnblogs.com/xiaohuochai/p/5271217.html)
    baseline：把当前盒的基线与父级盒的基线对齐。如果该盒没有基线，就将底部外边距的边界和父级的基线对齐
	sub：把当前盒的基线降低到合适的位置作为父级盒的下标（该值不影响该元素文本的字体大小）
	super：把当前盒的基线提升到合适的位置作为父级盒的上标（该值不影响该元素文本的字体大小）
	text-top：把当前盒的top和父级的内容区的top对齐
	text-bottom：把当前盒的bottom和父级的内容区的bottom对齐
	middle：把当前盒的垂直中心和父级盒的基线加上父级的半height对齐
	top：把当前盒的top与行盒的top对齐
	bottom：把当前盒的bottom与行盒的bottom对齐
white-space:设置文字的格式显示
  nowrap:强制内容在同一行显示（***）

text-transform:设置英文字母的大小写
  lowercase:小写字母
  uppercase:大写字母
  capitalize:首字母大写

// 下面的两个都是针对长单词，遇到边界默认不换行，但是由于这两个的设置，强制换行
word-wrap:break-all
overflow-wrap/word-wrap:break-word

word-spacing:设置单词的间距（英文单词）
letter-spacing:设置字符之间的间距（每个英文字母和汉字之间的间距）
```

## 4. 外补白（Margin）

```
margin-top:检索或设置对象顶边的外延边距
margin-right:检索或设置对象右边的外延边距
margin-bottom:检索或设置对象底边的外延边距
margin-left:检索或设置对象左边的外延边距

margin:检索或设置对象四边的外延边距
  4个值：上 右 下 左
  3个值：上 左右 下
  2个值：上下 左右
  1个值：上下左右
  
单位：
    1.固定值px
    2.百分比:参照包含块元素的宽度
```

## 5. 内补白（Padding）

```
padding-top:检索或设置对象顶边的内补白
padding-right:检索或设置对象右边的内补白
padding-bottom:检索或设置对象底边的内补白
padding-left:检索或设置对象左边的内补白

padding:检索或设置对象四边的内部边距
  4个值：上 右 下 左
  3个值：上 左右 下
  2个值：上下 左右
  1个值：上下左右
  
单位：
  1.固定值px 
  2.百分比:参照包含块元素的宽度
```

## 6. 边框（Border）

```
// 四边分别设置三种边框属性(厚度->width，样式->style，颜色->color)
border-top-width
border-top-style
border-top-color

// 针对每个边统一设置边框属性
border-top
border-right
border-bottom
border-left

// 针对四个边框统一设置边框属性
border-width
border-style
border-color

// 所有的边都是同一个边框属性
border:厚度 样式 颜色
    厚度：固定值
    样式:
        none：无轮廓
        hidden：隐藏边框
        solid：实线轮廓
        dashed：虚线轮廓
        double：双线轮廓
        dotted：点状轮廓
        groove：3D凹槽轮廓
        ridge：3D凸槽轮廓
        inset：3D凹边轮廓
        outset：3D凸边轮廓
    颜色：
        固定单词
        16进制
        rgba

border-radius:设置圆角边框
    1.px
    2.百分比（以容器的宽高为参照）
box-shadow:设置盒子阴影
    横向偏移 纵向偏移 模糊值 外延值 颜色 是否为内阴影(inset)
```

## 7. 布局（Display）

```
display:设置内容的展示形式
    none:不展示，隐藏（隐藏之后，不占据原位置）
    	visibility:hidden:占据原位置
    	opacity:0:占据原位置
    	
    inline:行内元素
        1.不独占一行
        2.不能设置宽高
        3.不能设置margin-top和margin-bottom
        代表标签：span,a,strong,b,i,em,mark,time
    inline-block:行内块元素
        1.不独占一行
        2.可以设置宽高
        代表标签：img input textarea button select
    block:块元素
        1.独占一行
        2.可以设置宽高
        代表标签：div,h1~h6,p,ul,ol,dl,table
        
        
float:设置内容浮动
    left:左浮动
    right:右浮动
    注意；
    1.设置元素浮动之后，浮动元素会变为内联块元素（不独占一行，可以设置宽高）
    2.浮动之后，会脱离文档流（其他内容会补充）
clear:设置清除浮动
    left:清除左浮动
    right:清除右浮动
    both:清除两侧浮动（推荐）
visibility:设置元素是否展示
    visible:展示（默认）
    hidden:隐藏（隐藏之后，依然占据原位置）
overflow:内容超出的处理
    visible:默认处理，超出显示
    hidden:超出隐藏
    scroll: 不管内容超不超出，滚动
    auto:自动 
        如果内容超出：显示滚动条
        内部不超出：不显示滚动条
overflow-x:在横向上对于超出内容的处理
overflow-y:在纵向上对于超出内容的处理
```

## 8. 定位（Position）

```
position:relative 相对定位
    1.参照标准是自己的原位置
    2.位置改变之后，依然占据原来的空间，不会影响其他元素

    top：
    正：在自身基础上向下移动
    负: 在自身基础上向上移动
    left：
    正：在自身基础上向右移动
    负：在自身基础上向左移动

    bottom:跟top值相反
    正：在自身基础上向上移动
    负：在自身基础上向下移动
    right:
    正：在自身基础上向左移动
    负：在自身基础上向右移动

position:absolute 绝对定位
    1.会脱离文档流，不占据原来的位置（后面的内部自动补充）
    2.针对相对定位和绝对定位
        1.如果父级（祖辈）有定位(任何定位都行)：子级的绝对定位参照标准是 父级
        2.如果父级（祖辈）没有定位(任何定位都行)：子级的绝对定位参照标准是 body    
position:fixed 固定定位
    1.脱离文档流，不占据原来的位置
    2.以浏览器窗口为参照
z-index：设置定位的层叠顺序(值越大，越靠上)
```

## 9. 背景（Background）

```
background-color：背景颜色
background-image: 背景图片 
    url(图片路径)
background-repeat: 是否重复
    repeat:重复
    no-repeat:不重复
    repeat-x:X轴重复
    repeat-y:Y轴重复
    round:背景图像自动缩放直到适应且填充满整个容器(有可能拉伸图片)
    space:背景图像以相同的间距平铺且填充满整个容器或某个方向

background-size:设置背景图像的大小
    1.固定值:px
    2.百分比：容器宽度的百分比
    3.固定单词
        auto:默认图片原大小
        cover:将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器。 (背景图片必须完全覆盖容器，可能会有一部分图片看不到)
        contain: 将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内
        （背景图片在容器等比例缩放，一定能看到全部的图片样式，容器可能会出现部分没有背景图片）

background-attachment:设置背景图像随什么滚动
    scroll:正常滚动（默认）容器设置了滚动，内容发生滚动，图片跟着内容不移动
    fixed:浏览器滚动，但是背景图片不动
    local:容器设置了滚动，内容发生滚动，图片跟着内容移动

background-origin:设置背景图片的起始位置
    content-box:从内容区域开始
    padding-box:从padding区域开始
    border-box:从border区域开始

background- :设置背景图的裁剪位置
    content-box:裁剪content内容之外的背景图片
    padding-box:裁剪padding之外的背景图片
    border-box:裁剪border之外的背景图片

background：复合属性
    用法1：background: red url(1.jpg) no-repeat scroll center center...;
    用法2：
        background: url(1.jpg) no-repeat,
              url(2.jpg) no-repeat 20px 20px,
              url(3.jpg) no-repeat 20px 20px
              ...;
        注意：位置靠后，背景图片的层级越低
```

## 10. 文本装饰

```
text-decoration:检索或设置对象中的文本的装饰
    none:指定文本无装饰
    underline:指定文字的装饰是下划线
    overline:指定文字的装饰是上划线
    line-through:指定文字的装饰是贯穿线
text-shadow:设置或检索对象中文本的文字是否有阴影及模糊效果
    none:无阴影
    阴影水平偏移值 垂直偏移值 模糊值 颜色
```

## 11. 书写模式

```
// 两个属性结合起来，完成文字在容器最右侧，而且文字的顺序反向
direction:rtl;  
unicode-bidi: bidi-override;

hello world
																	dlrow olleh

writing-mode: 书写模式
    horizontal-tb:从左到右，从上到下(默认)
    vertical-lr:从上到下，从左到右
    vertical-lr:从上到下，从右到左(类似于中国古时候的书信格式)
```

## 12. 列表

```
list-style:设置列表项目的内容
    none; 列表无样式(推荐)
list-style-image:设置或检索作为对象的列表项标记的图像
    list-style-image:url(1.jpg);
list-style-position:设置或检索作为对象的列表项标记如何根据文本排列
    list-style-position:outside;列表项目标记放置在文本以外，且环绕文本不根据标记对齐
    list-style-position:inside;列表项目标记放置在文本以内，且环绕文本根据标记对齐
list-style-type:设置或检索对象的列表项所使用的预设标记
    disc:实心圆
    circle:空心圆
    square:实心方块
    decimal:阿拉伯数字
    ...
```

## 13. 表格

```
table-layout:设置或检索表格的布局算法
    auto:默认的自动算法(根据表格内容自适应)
    fixed:固定布局算法(单元格宽度固定)
border-collapse:设置或检索表格的行盒单元格的边是合并还是独立
    separate:边框独立
    collapse:相邻边被合并
border-spacing:设置或检索当表格边框独立时，行和单元格的边框在横向和纵向上的间距
    固定值
    注意：
        1. 相当于标签属性(cellspacing)-单元格边距
        2. 只有设置border-collapse:seperate时生效
        3. 一个值：横纵单元格间距
            两个值：横向间距 纵向间距
caption-side:设置或检索表格的caption对象是在表格的那一边
    top：caption在表格的上边
    bottom：caption在表格的下边
empty-cells:设置或检索当表格的单元格无内容时，是否显示该单元格的边框
    hide:指定当表格的单元格无内容时，隐藏该单元格的边框
    show:指定当表格的单元格无内容时，显示该单元格的边框
```

## 14. 内容

```
content:用来和:after及:before伪元素一起使用，在对象前或后显示内容
    1. 插入字符串
    2. attr():插入标签的属性值
    3. url():使用指定的绝对或相对地址插入一个外部资源（图像，声频，视频或浏览器支持的其他任何资源）
```

## 15. 用户界面

```
text-overflow:设置文字超出样式
    clip:超出裁剪
    ellipsis:超出以省略号代替
        注意：
            1.如果要做超出为省略号，必须满足的条件
            white-space:nowrap; // 文字必须在同一行
            overflow:hidden;    // 设置超出隐藏
            text-overflow:ellipsis;
outline:设置外阴影
    1.none:无(input,textarea去除外阴影)
    2.5px solid red;设置5px的外阴影
    注意：
        1.跟border的区别
            border占据布局位置
            outline不占据布局位置(不支持圆角设置)
cursor：设置鼠标的样式
    help:？形状
    pointer:小手状
    progress：箭头+转圈
    wait:转圈
    cell:十字
zoom：设置缩放

resize:设置容器可以被用户调节尺寸
    none:取消容器可以被用户调节尺寸
    horizontal：可以调节宽度
    vertical:可以调节高度
    both：宽高都可以调节

user-select:none;设置内容不能被用户选中
```

## 16. 多列

```
column:列宽 列数
column-width:设置或检索对象每列的宽度
column-count:设置或检索对象的列数

column-gap:设置或检索对象的列与列之间的间隙
column-span:设置或检索对象元素是否横跨所有列
column-fill:设置或检索对象所有列的高度是否统一
    auto:自适应
    balance:所有列的高度以其中最高的一列统一

column-rule:设置或检索对象的列与列之间的边框
column-rule-width:设置或检索对象的列与列之间的边框厚度
column-rule-style:设置或检索对象的列与列之间的边框样式
column-rule-color:设置或检索对象的列与列之间的边框颜色

// 在当前元素之前断行并产生新列
-moz-column-break-before:always;
-webkit-column-break-before:always;
column-break-before:always;

// 在当前元素之后断行并产生新列
-moz-column-break-after:always;
-webkit-column-break-after:always;
column-break-after:always;
```

## 17. 变换 transform

```
transform：设置或检索对象的转换
    // 2D
    // 平移
    translate(x,y)
    translateX(x)
    translateY(y)
    
    // 旋转
    rotate(角度deg/弧度rad/圈turn)
    
    // 缩放
    scale(2,2)
    scaleX(2)
    scaleY(.5)
    
    // 扭曲
    skew()
    skewX()
    skewY()
    
    // 矩阵
    matrix()
    
    // 3D
    // 平移
    translate3D()
    translateZ()
    
    // 旋转
    rotateX()
    rotateY()
    rotateZ()
    rotate3D()
    
    // 缩放
    scaleZ()
    scale3D()
    
    // 以一个4*4矩阵的形式指定一个3D变换
    matrix3D()
    
    // perspective():指定透视距离

transform-origin：设置或检索对象以某个原点进行转换
    固定值
    百分比
    固定单词
        left/center/right
        top/center/bottom
transform-style：指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化
    flat:指定子元素在此元素所在平面内
    perserve-3d:指定子元素在三维空间内
    
    注意：
    1. 当该属性值为「preserve-3d」时，元素将会创建局部堆叠上下文
    2. 决定一个变换元素看起来是处在三维空间还是平面内，需要该元素的父元素上定义 <' transform-style '> 属性
perspective:指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定
    none:
    固定值
    
perspective-origin:指定透视点的位置
    固定值
    百分比
    固定单词
    
backface-visibility:指定元素背面面向用户时是否可见
    visible:指定元素背面课件，允许显示正面的镜像
    hidden:指定元素背面不可见
    注意：
    1.直接在要显示与隐藏的元素上设置该属性，不要在父级上设置
```

## 18. 过渡

```
transition-property:过渡属性
    注意：
    1.使用可以进行过渡的属性
    2.过渡前后都必须设置可以过渡的属性
    div{top:0,transition:top 2s;}
    div:hover{top:10px}
transition-duration:过渡时间
    时间
transition-timing-function:过渡动画类型
    linear:线性渐变
    ease:平滑过渡
    ease-in:先慢再慢
    ease-out:先快后慢
    ease-in-out:先慢再快再慢
transition-delay:过渡延迟时间

transition:过渡属性 过渡时间 动画类型 延迟时间;
    注意
    1.必须有过渡属性和过渡时间
```

## 19. 动画

```
animation-name:动画的名称(名称由@keyframes提供)
animation-duration:动画的总时间
animation-timing-funciton:动画类型
    linear:线性过渡
    ease:平滑过渡
    ease-in:先慢后快
    ease-out:先快后慢
    ease-in-out:先慢再快再慢
    animation-delay:动画的延迟时间
animation-iteration-count:设置动画的执行次数
    number:指定的次数
    infinite:无限循环
animation-direction:设置动画是否反向运动
    normal:默认执行
    reverse:反向执行
    alternate:先正向执行，再反向执行，循环执行
    alternate-reverse:先反向执行，再正向执行，循环执行
animation-fill-mode:设置动画结束时的状态
    normal:正常
    forwards:设置结束状态为动画停止的样式
    backwards：设置动画状态为动画开始前的样式

animation:动画名称 动画时间 动画类型 延迟时间 执行次数 执行方向 停止的状态;
    注意：
    1.必须有动画名称和动画时间

动画定义：
// @keyframes固定格式，名称自定义
@keyframes width {
    // 从...开始
    from {
        width:200px;
    }
    // 到...结束
    to {
        width:500px;
    }
}

@keyframes change {
    0% {
        width:200px;
    }
    30%{
        width:250px;
    }
    80%{
        width:250px;
    }
    100% {
        width:300px;
    }
}
```

## 20. 媒体查询

```
@media screen and (width:800) {}
@media screen and (min-width:400px) and (max-width:900px)
@media screen and (device-width:1024px) and (device-height:600px){ … }
@media screen and (orientation:portrait){ … }
    portrait:竖屏(高度>=宽度)
    landscape:横屏(高度<宽度)
@media screen and (resolution){ … } 分辨率
@media screen and (min-resolution:1) and (max-resolution:2){ … }    分辨率

媒体查询
两类查询条件（W3C规定的media query4草案）
    1.媒体类型（media type）
        all：所有设备（默认）
        print：打印设备
        speech：能够独处页面的屏幕阅读设备，通常仅供残疾人士使用
        screen：除打印和屏幕阅读设备以外的所有的设备
    2.媒体特征表达式（media feature expression）
        width
        max-width
        min-width
        device-width
        aspect-ratio
        color
        resolution
    
    3.媒体查询中的逻辑
    总结：媒体查询就是样式表的if语句，通过判断表达式的真假来执行特定的分支
    与（and）：@media only screen and (max-width:600px){}
    或（or）：,表示或者的意思
        @media only screen, (max-width:600px){}
    非（not）：对当前媒体查询条件取反操作
        注意：
            1.not all and (max-width:600px)：not的优先级比and低，所以先and再not

    4.媒体查询的策略
    4.1 顺序
        4.1.1 多个媒体查询，规则都能匹配成功，从后往前匹配，匹配成功立即终止
        4.1.2 适配(320以下，321-1024，1024以上)
            // =>移动优先
            html{}
            @media (min-width:320px){}
            @media (min-width:1024px){}
            
            // 桌面优先
            html {} // 超出1024的页面
            @media (max-width:1024px) {}    // 320-1024的页面
            @media (max-width:320px) {} // 低于320的页面
```

## 21. 伸缩盒（Flexible Box）（新）

## 22. Only IE

## 23. Only webkit

# 三、取值与单位

## 1. 长度

```
em:针对父级
rem:针对HTML标签的字体大小
px
vh
vw
```

## 2. 角度

```
deg:角度
rad:弧度
turn:圈数
```

## 3. 时间

```
s:秒数
ms:毫秒数
```

## 4. 颜色

```
单词
rgb/rgba
    r:红色
    g:绿色
    b:蓝色
16进制(HEX)
hsl/hsla
    H：Hue(色调)。0(或360)表示红色,120表示绿色,240表示蓝色。取值为：0-360
    S：Saturation(饱和度)。取值为：0.0% - 100.0%
    L：Lightness(亮度)。取值为：0.0% - 100.0%
transparent
```

## 5. 文本

```
content:""
background-image:url(字符串)
inherit:继承
```

## 6. 函数

```
calc()
    1.IE9+,火狐谷歌支持
    2.支持+ - * /，符合数学运算优先级运算
    3.运算符前后添加一个空格
```

## 7. 图像

```
1. linear-gradient(角度|边或角,颜色)
        第一个参数：
            角度：
                30deg
            边或角:
                to top(0deg)
                to right(90deg)
                to bottom(180deg)
                to left(270deg)
                to top right(45deg)
        第二个参数：color stop
            red,green:从开始到末尾都是红->绿过渡
            red 20%,green 80%:（20%之前是全红，20%-80%之间是红->绿过渡,80%之后是全绿）
            red 50px,green 250px（50px之前是全红，50-250之间是红->绿过渡,250px以后是全绿）
            red 50px,green 250px（50px之前是全红，50-250之间是红->绿过渡,250px以后是全绿）
            red 20%,green 40%,blue 80%(20%前全红,20%-40%红->绿过渡,40%-80%蓝到绿过渡,80%后全蓝)
            
2. repeating-linear-gradient()
        线性渐变本质是 0-100都会设置颜色
        重复线性渐变本质是 0-指定值颜色渐变，然后就是重复，参数是一样的
        red 0,green 10%,blue 20%:(0-10%是红->绿过渡,10%-20%是绿->蓝过渡,20%-30%是蓝->红过渡,依次重复)
        
3. radial-gradient(参数1,参数2)
        参数1：设置图形是圆还是椭圆，圆心位置在哪里，画的圆到容器的边还是容器的角结束过渡
        // 圆
        circle:设置圆形,圆心默认在容器的中心，默认到角结束过渡效果
        circle at top left:设置圆形，圆心在左上角，默认到角结束过渡效果
        circle at 20px 20px:设置圆形，圆心在20px 20px处，默认到角结束过渡效果
        circle closest-side:圆心在容器中心
            closest-side： 指定径向渐变的半径长度为从圆心到离圆心最近的边 
            closest-corner： 指定径向渐变的半径长度为从圆心到离圆心最近的角 
            farthest-side： 指定径向渐变的半径长度为从圆心到离圆心最远的边 
            farthest-corner： 指定径向渐变的半径长度为从圆心到离圆心最远的角 
            
        // 使用100px代替了上面的circle
        100px:设置圆形的半径大小
        100px at bottom right:设置圆形，圆心在右下角，圆心半径为100px
        
        // 椭圆
        ellipse:设置椭圆，椭圆的中间圆心位置在容器中心，默认到角结束过渡效果
        ellipse closest-corner at 100px 100px:椭圆圆心在100px,100px处，到最近的角结束过渡
        
4. repeating-radial-gradient()
        径向渐变本质是 0-100都会设置颜色
        重复径向渐变本质是 0-指定值颜色渐变，然后就是重复，参数是一样的
        red 0,green 10%,blue 20%:(0-10%是红->绿过渡,10%-20%是绿->蓝过渡,20%-30%是蓝->红过渡,依次重复)
    技巧：重复性线性渐变和径向渐变 首尾颜色一致可以 完美过度(不会生硬)
```

## 8. 数字

```
number：行高，透明度
integer：z-index
percentage
```

# 四、语法与规则

```
1. !important:提升指定样式规则的应用优先权

2. @import:指定导入的外部样式表及目标媒体
    不推荐使用
    原因：加载完style标签之后，再加载@import引入的css
3. @charset "UTF-8";
    注意：
    1. 在外部样式表文件内使用。指定该样式表使用的字符编码
    2. 尾部的分号是必填项
4. @media:与媒体查询结合使用
5. @font-face:设置嵌入HTML文档的字体
    @font-face {
        font-family: 'diyfont'; // font-family就可以直接使用的字体格式
        src: url('diyfont.eot'); /* IE9+ */
        src: url('diyfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('diyfont.woff') format('woff'), /* chrome、firefox */
            url('diyfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
            url('diyfont.svg#fontname') format('svg'); /* iOS 4.1- */
    }
    
    // 针对上述字体的说明
    .eot:微软开发的用于嵌入网页的字体，IE专用字体格式
    .woff:W3C组织推荐的标准，web字体最佳格式
    .ttf:Mac OS和Windows操作系统中最常见的字体格式
    .svg:W3C组织制定的开放标准的图形格式
```

# 五、CSS3属性的继承

```
继承性：字体、颜色，文本样式可以继承父级的样式

注意：
1. 但是a连接有默认样式，优先级比继承性高
2. vertical-align不能被继承

<div>
    <span>Hello world</span>
    <a href="">Hello world</a>
</div>
div{color:red;}
    span会显示为红色
    a会显示为默认的蓝色
```

# 六、选择器优先级

```
1.定义优先级的权重
    !important         10000
    行内样式          1000
    ID              100
    class选择器      10
    属性选择器        10
    伪类选择器        10
    元素选择器        1
    伪对象            1
    通配符            0
    
    <div id="parent">
        <span class="child"></span>
    </div>
    #parent span {color:red;}
    .child {color:blue;}
    
    class选择器比span标签的优先级高，但是由于有#parent的影响，前者权重为101，后者的仅为10，所以显示红色

2.优先级权重一样，后来者居上
3.继承的样式优先级低于指定样式
    <div>
        <span>Hello world</span>
    </div>
    div {
        color:red;
    }
    span {
        // span默认继承div的字体颜色，但span也设置了字体颜色，优先级高于继承值，span内的字体显示为蓝色
        color: blue;
    }
```

# 七、CSS规范

## 1. 命名规范

```
1.使用英文（header），而非中文拼音(toubu)
2.尽量不缩写，除非一看是英文单词
3.命名统一规范(推荐使用中划线)
	header
		header-left
		header-logo
4.为避免重复，取用父元素的class名为前缀
    <div class="header">
        <div class="header-left"></div>
    </div>
    
    <div>
    	// item:一个选项的意思
    	<div class="item"></div>
    </div>
```

## 2. 书写规范

```
1.影响文档流属性（布局属性）：display，position，float，clear
2.自身盒模型：width、height，padding，margin，border，overflow
3.文本属性：font，line-height，text-align，text-indent，vertical-align
4.装饰属性：color，background-color，opacity，cursor
5.其他属性：content,transition,transform,animation,list-style等

div {
    display: inline-block;
    position: absolute;
    left: 10px;
    top: 10px;
    float: left;
    
    width: 100px;
    height: 100px;
    margin: 10px;
    padding: 10px;
    border: 10px solid red;
    
    font:24px "微软雅黑";
    line-height: 24px;
    text-align: center;
    
    color: red;
    background-color: red;
    
    transition: all 3s;
}
```

## 3. 注释规范

```
1. 每个CSS文件的头部注释
    /*
     * @description：说明
     * @author：作者
     * @update：更新时间，如2017-10-22 18：30
     */

2. 针对某块内容的注释
    /* 导航部分 start */
    /* 导航部分 end */
```

## 4. CSS reset

```
reset.css:不管三七二十一，直接将所有的标签的样式都初始化
normalize.css:将所有浏览器的标签默认样式一致化

不同的浏览器对于标签的展示有不同的解释，比如button按钮,标签行高,针对新标签的识别等，为了保证各个浏览器的内容都是统一的，后来出了reset.css，将所有的CSS样式全部重置，从而保证浏览器统一

normalize.css的优点：
    1. 保护有用的浏览器默认样式而不是完全去掉它们
    2. 一般化的样式：为大部分HTML元素提供
    3. 修复浏览器自身的bug并保证各浏览器的一致性(http://jerryblog-image.b0.upaiyun.com/blog/css-reset-debugging.png)
    4. 优化CSS可用性：用一些小技巧
    5. 解释代码：用注释和详细的文档来  
```

# 八、CSS3重点内容以及技巧使用

## 1. 三种不同类型元素

```
内联元素
    1.可以与其他行内元素位于同一行
    2.可以容纳其他行内元素，不可以容纳块元素（无法预知的结果）
    3.无法定义高度和宽度
    4.可以定义marign-left和marign-right，无法定义margin-top和margin-bottom
内联块元素
    1.可以与其他行内元素位于同一行
    2.可以容纳其他元素
    3.可以定义宽度和高度
    4.可以定义四个方向的margin
块元素:
    1.独占一行
    2.可以容纳其他元素
    3.可以定义宽度和高度
    4.可以定义四个反向的margin
```

## 2. 页面的水平和垂直居中 

1. 针对单行文本

   ```
   水平居中:text-align:center;
   垂直居中:line-height:与行的高度相等
   ```

2. 针对多行文本

   ```
   水平居中:text-align:center;
   垂直居中:
       <div class="box">
           <!-- 多行文字的水平和垂直居中 -->
           <div class="text">
           由于方法3设置font-size为0的局限性，块级元素里面无法放置文本。方法4主要通过新增元素来实现垂直居中效果，该方法也可用于图片的水平垂
           </div>
           <i></i>
       </div>

    .box {
           width: 400px;
           height: 400px;
           text-align: center;
       }

       .box .text {
           display: inline-block;
           width: 300px;    // 高度自适应
           line-height: 1.5;
           background-color: #ddd;
           vertical-align: middle;
       }

       .box i {
        // 设置.text的兄弟i标签为内联块标签，且行高为100，并且为垂直居中，则.text就可以进行垂直居中
           display: inline-block;
           height: 100%;
           vertical-align: middle;
       }
   ```

3. 针对内联块元素（图片和display:inline-block）

   ```
   左右居中:text-align:center;
   垂直居中:
       方法1：
       <div class="box">
           <img src="images/1.jpg" width="200" alt="">
       </div>
       .box {
           width: 300px;
           height: 300px;
           text-align: center;
           // 必须设置行高和高度相等
           line-height: 300px;
           // 有匿名文字x的影响，所以图片不能真正的垂直居中，设置字体大小为0，则绝对垂直居中
           font-size: 0;
           border: 1px solid blue;
       }

       .box img {
           // 必须设置图片自身为vertical-align:middle;
           vertical-align: middle;
       }

       方法2：
       display: table-cell;
       vertical-align: middle;
   ```

4. 针对有宽度的div

   ```
   水平居中:margin:0 auto;
   垂直居中:
    方法1:有没有宽高没关系，都可以进行居中，要求父级设置相对定位，否则是针对当前页面
    div {
        position: absolute;
           top: 0;
           bottom: 0;
           left: 0;
           right: 0;
           margin: auto;
           width: 50%;
           height: 30%;
    }
    
    方法2:需要知道宽高
    div {
        position: absolute;
           top: 50%;
           left: 50%;
           height: 300px;
           width: 200px;
           margin-left: -100px;
           margin-top: -150px;
    }
   ```

## 3. 清除浮动

```
// HTML结构
<div class="box">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item">
        <a href="">移入显示.item-content</a>
        <div class="item-content"></div>
    </div>
</div>

// CSS结构
.box .item {
    float: left;
}

解决办法：
1. 给.box设置overflow:hidden
    问题：如果鼠标移入a链接，显示.item-content,而.item-content在.box外面，则不能正常显示
2. 在.item的末尾设置一个空<div class="clearfix"></div>
    .clearfix {clear:both;}
3. 使用伪对象选择器
    .box::after{
        display: block;
        clear: both;
        content: "";
    }
```

## 4. 元素充满整个容器

```
// 让元素充满整个容器
html,body{height:100%;margin:0;}
#test{height:100%;}

// 让元素充满容器，留天留地和留左边
.box {
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 100px;
    width: 100%;
    background-color: red;
}
```

## 5. 有关%的使用 - 以谁为参照

```
width,height,font-size:相对于父元素的相同属性计算而来
line-height：相对于当前元素的font-size计算
vertical-align：相对于当前元素的line-height计算的
背景图片定位：相对于 容器宽度-背景图片宽度的百分比
```

## 6. vertical-align和line-height扯不清的关系

![内容区和行内框](http://images2015.cnblogs.com/blog/740839/201602/740839-20160219152043831-1132174404.jpg)

```
上述的图
div {
  font-size: 15px;
  line-height: 21px;
}
// 15px是内容区域
// 21-15=6px是间距区域

1.行高针对内联元素和内联块元素有效，对于块标签内的内联元素和内联块有效(因为继承的缘故)
2.有关的几个概念
    内容区:对于行内非替换元素或匿名文本某一部分，font-size确定了内容区的高度
    行内框:内容区加上行间距等于行内框
    行框:行中最高行内框的顶端到最低行内框底端之间的距离，而且各行框的顶端挨着上一行行框的底端
```

## 7. 层叠级别 

```
一个容器内有背景，边框，内容，定位，浮动元素时的层叠顺序：
1. 负z-index：z-index为负值的“内部元素”
2. 背景和边框（父级）：当前层叠上下文的背景和边框
3. 块盒子：普通文档流下的块盒子（h3,div,p,ul,li...）
4. 浮动盒子：非定位的浮动元素(float:left)
5. 行内盒子：普通文档流下的行内盒子(文字)
6. z-index：0
7. z-index为正直
```

## 8. BFC(Block Formatting Context)

```
1. 块级格式上下文(BFC)概念
    1. 是一个独立的渲染区域，只有块盒子参与
    2. 它规定了内部是如何布局的，并且这个渲染区域与外部区域毫不相干
    
2. 创建BFC需要具备下面的任何一个条件
    1.float:left|right
    2.position:absolute|fixed
    3.overflow:auto|hidden|scroll
    4.display:inline-block|table-cell
    
    将标签设置为上面的某一个属性，则该元素就是一个BFC（独立的渲染区域）

5. BFC作用
    1. 创建BFC避免垂直外边距(margin-bottom和margin-top)的叠加
    2. 创建BFC清除浮动|避免文字环绕
    3. 利用BFC创建两列布局

    用途：
    1.创建BFC避免垂直外边距叠加
        <div class="one"></div>
        <div class="two"></div>
        one和two两个会出现外边距叠加

        <div class="one"></div>
        <div class="box" style="overflow:hidden;">    // 设置这个为BFC
            <div class="two"></div>
        </div>
        one和two两个不会出现外边距叠加：因为one和two处于同步的BFC中，不会发生垂直边距的叠加
        假如box没有overflow：hidden，也会出现叠加：因为上面第二点：相邻的margin-top和margin-bottom会叠加（不是相邻的兄弟）

    2.清除浮动
        1.避免父级高度塌陷
        根据上述第六个结论：计算BFC高度时，其内部浮动子元素的高度也会参与计算
        
        2.BFC避免文字环绕
        左边图片，右侧文字
        <div>
            <img src="1.jpg" alt="" style="float:left;">
            <div>hello world</div>
        </div>    // 内部div的文字会环绕图片

        <div>
            <img src="1.jpg" alt="" style="float:left;">
            <div style="overflow:hidden;">hello world</div>
        </div>    
        // 内部div的文字不会环绕图片，跟图片是并列关系
        因为：上面第四点：在一个BFC内部，如果存在内部元素是一个新的BFC，并且存在内部元素是浮动元素，则该BFC的区域不会与float元素的区域重叠

    3.实现自适应布局
    方法一：负margin技术实现自适应左右两列布局
    方法二：
    .left{float:left;}
    .right{overflow:hidden;}
    <div class="left"></div>
    <div class="right"></div>
```

# 九、CSS3知识点

```
1. CSS(Cascading Style Sheets)：层叠样式表
    作用：给HTML标签添加样式
2. CSS引入方式
    内嵌式
    内联式
    外链式
3. 浏览器前缀
    谷歌浏览器：-webkit-
    火狐浏览器：-moz-（mozilla）
    IE浏览器：-ms-(microsoft)
4. link与import的区别
    1. link是HTML标签，import是CSS中的语法
    2. 当页面被加载的时候，link引入的css文件被加载，@import引入的css文件必须等css全部加载完成之后再加载该css文件
5. CSS手册符号的特殊含义
    [] 意思是表明一个block
    || 意思是在block当中几个元素可以分别或者同时出现，顺序不限
    ? 意思是这个block可有可无
    | 意思是几个选项中可以出现一个
    / 是font里面的写法，这里的意思是 font-size/line-height，也就是font:12px/1.6em这样的。
    {} 表示取值范围，类似正则表达式的。{1,4}表示1-4位
```

