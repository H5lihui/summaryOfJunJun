# 1.计算机基本理论知识：客户端，服务器，http协议/https协议，url
```
客户端：个人PC电脑，手机，平板，终端

服务器：远程联网的计算机设备

HTTP协议：超文本传输协议（HyperText Transfer Protocol）是互联网上应用最为广泛的一种网络协议，HTTP是一个客户端和服务器端请求和应答的标准
目的：提供一种发布和接收HTML页面的方法

HTTPS（全称：Hyper Text Transfer Protocol over Secure Socket Layer），是以安全为目标的HTTP通道，简单讲是HTTP的安全版

URL（Uniform Resource Locator）：统一资源定位符是对可以从互联网上得到的资源的位置和访问方法的一种简洁的表示，是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它
	https://www.baidu.com/index.html?username=zhangsan
	https://www.baidu.com/a/b/1.jpg
	http://www.liujunjun.com/a/b.js
```

# 2.HTML5页面的基础格式[其他头信息](http://www.w3school.com.cn/tags/tag_doctype.asp)
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>网页标题</title>
    </head>
    <body>
        这是网页的主要内容
    </body>
</html>

注意事项：
1. 文件必须是.html/.htm后缀名
2. HTML标签字母统一小写（少数的专有名词大写 DOCTYPE UTF）
3. 页面中meta,input,img,embed是单标签,其他都是双标签
4. 注意网页格式，使用tab代替4个空格进行缩进
```

# 3. 注释
```
格式：<!-- 注释内容 -->
作用：
1. 解释说明代码的含义（代码量达，后期维护，新人交接）
2. 调试代码
```

# 4.head内标签
```
// meta:定义关于 HTML 文档的元信息
<meta charset="UTF-8">
<meta name="author" content="作者">
<meta name="description" content="描述">
<meta name="keywords" content="关键字">
<meta http-equiv="refresh" content="3"> 3s之后刷新

// title:定义文档的标题。
<title>网站的标题</title>

// link:定义文档与外部资源的关系
<link href="图标所在的位置" rel="shortcut icon" type="image/x-icon">

// base:定义页面中所有链接的默认地址或默认目标
```

# 3.body内标签
## 基础标签
```
// 定义HTML标题 h1~h6 (header)
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>

注意:
1. h1在页面中权重最高，一个页面只出现一次
2. h2~h4根据实际情况使用，h3
3. h5~h6文字较小，也不需要分这么多层级标题，不推荐使用

// 定义段落 p(paragraph)
<p></p>
注意：
1. 定义文章的自然段落
2. 一个短句（价格，简短的描述）

// 定义简单的折行 br (break)
<br>

// 定义水平线 hr(horizontal)
<hr>
```

## 列表
```
// 定义无序列表 ul/li
<ul>
    <li></li>
</ul>

// 定义有序列表 ol/li
<ol>
    <li></li>
</ol>

// 定义定义列表 dl/dt/dd
<dl>
    <dt></dt>
    <dd></dd>
    <dd></dd>
</dl>
```

# 图像
```
定义图像：img
    必须的属性：
    src: 显示图像的URL
    alt：图像的替代文本

    可选的属性
    width：定义图像的宽度
    height：定义图像的高度
    usemap：将图像定义为客户端图像映射

定义图像映射：map/area
	// 图片的usemap属性和map的id/name属性保持一致
	<img src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">

	// 避免浏览器表现不一致，name和id属性保持一致
	<map name="planetmap" id="planetmap">
    	// rect:矩形     coords:矩形的点(左上角顶点横坐标，纵坐标，右下角横坐标，纵坐标)    href：链接地址    alt：图片描述
  		<area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
    	// circle:矩形     coords:(圆心横坐标，纵坐标，半径)    href：链接地址    alt：图片描述
  		<area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
	</map>

定义图像组合：figure/figcaption
    figure：规定独立的流内容（图像，图表，照片，代码）
    figcaption：为figure元素定义标题
    <figure>
    	<img src="" alt="">
    	<figcaption>对图片的补充说明</figcaption>
    </figure>
    
    img
    h3
```

# 链接
```
// 定义链接：a
<a href="" target=""></a>
  href: 规定链接的目标URL
  	
  target：规定在何处打开目标URL
 	 _self:默认当前窗口
  	_blank:新窗口打开
  	_parent:在父级窗口打开
  	_top:在顶级
```

# 相对路径和局对路径
```
相对路径：
    images/1.jpg: 当前images文件夹下1.jpg（兄弟images）
    ./images/1.jpg: 当前images文件夹下1.jpg（兄弟images）
    ../images/1.jpg: 上一级images文件夹下1.jpg（叔叔辈images）

绝对路径：
    https://www.baidu.com/logo.png（绝对路径）
```

# 格式标签
```
// 定义文档作者或拥有者的联系信息：address
// 定义带有标号的文本：mark
// 定义小号文本：small
// 定义一个日期/时间：time
    datetime="":规定日期 / 时间。否则，由元素的内容给定日期 / 时间

// 定义粗体文本：b
// 定义斜体文本：i
// 定义强调文本：em
// 定义语气更为强烈的强调文本：strong

// 定义上标：sup
// 定义下标：sub

// 定义被删除文本：del
// 定义被插入文本：ins

// 定义缩写：abbr
// 允许设置一段文本，使其脱离其父元素的文本方向设置：bdi
// 定义文本的方向：bdo
// 定义块引用：blockquote
// 定义引用：cite
```

# 音视频
```
// 定义音频：audio
    src: 音频文件的URL
    controls：显示音频控件
    autoplay：音频就绪后马上播放
    loop：每当音频结束后重新播放
    muted：静音
    preload：当网页加载时，音频是否默认被加载以及如何被加载。

// 定义视频：video
    src: 音频文件的URL
    controls：显示音频控件
    autoplay：音频就绪后马上播放
    loop：每当音频结束后重新播放
    muted：静音
    width：宽度
    height：高度
    poster：规定视频正在下载时显示的图像
    preload：当网页加载时，音频是否默认被加载以及如何被加载。
        auto：当页面加载后载入整个音频
        meta：当页面加载后载入元数据
        none：当页面加载后不载入音频

// 定义音频和视频的媒体资源：source
    src：媒体文件的URL
    type：媒体文件的MIME类型 image/jpeg image/gif text/html text/css
        视频：video/ogg     video/mp4     video/webm
        音频：audio/ogg     audio/mpeg

注意：
1. 在音频、视频，canvas标签之间放置文本内容，浏览器不支持的时候可以显示文本内容
```

## 表格
```
// 定义表格 table
<table></table>
    width:设置表格宽度
    border:设置表格边框厚度
// 定义表格标题 caption
<caption></caption>

// 定义表格中的行 tr
<tr></tr>

// 定义表格中的表头单元格 th
<th></th>
// 定义表格中的单元格 td
<td></td>
    colspan:合并的列数
    rowspan:合并的行数

// 定义表格中的表头内容 thead
<thead></thead>

// 定义表格中的主体内容 tbody
<tbody></tbody>

// 定义表格中的脚注内容 tfoot
<tfoot></tfoot>

// 设置表格中一个或多个列的属性值 col
<col span="2">

// 定义表格中列的样式 colgroup 
<colgroup></colgroup>

注意：
1. table的直接 子级 thead,tbody,tfoot,tr,caption,col
2. tr的子级是 td/th
3. td/th可以是任何内容
```

# 表单
```
// 定义一个HTML表单，用于用户输入：form
	action:表单提交的地址
	method:表单提交的方式（GET和POST方式）
	get和post的区别
	1. get传参在url地址中显示，post不显示（相对安全） - get查询数据
	2. get传参大小有限制，post理论上没有限制，除非服务器自己限制 - post增删改

// 定义单行输入控件（元素）：input
    type:设置当前单行文本域的类型
                    text:普通文本（用户名，详细地址）
                    password:密码（设置密码）
                    radio:单选按钮
                    checkbox:多选按钮
                        让单选和多选默认选中，则添加checked属性
                    submit:提交按钮
                    reset:重置按钮
                    hidden:隐藏域（不能被用户看到修改，但是后端必须使用的内容）
                    file:文件域（点击之后选择文件）
                        => accept="image/*" 设置接受文件的类型
                    image:上传文件的按钮
                        => alt="" 设置图片文本
                    email:邮箱
                    number:数字
                    url:url地址
                    tel:电话
                    range:进度条
                    color：颜色
                    // 针对手机端有特殊的优化（https://www.cnblogs.com/johnl/p/4857307.html）
                    date：日期
                    time：时间
                    month: 月
                    week: 周
                    datetime-local:本地日期和时间
                    
                name：表单元素的名字（主要是跟后台相关，但是我们在开发过程中加上名字）
                value：给表单赋予的默认的值
// 定义下拉框：select/option
        select:
            name属性
            multiple:设置为多选下拉框
        option
            value属性
                    让下拉框中某一个默认选中，用selected属性
// 定义多行文本框：textarea
        textarea默认值直接写在textarea标签之间

// 表单form内的标签的共有属性
    placeholder=""：设置表单默认提示的内容（只要有输入内容，立即消失）
    	不会被提交到服务器，聚焦输入内容就隐藏
    value
    	会被提交到服务器

    autofocus:自动聚焦
    autocomplete="on|off":设置是否关闭自动提示
    readonly:只读（只看不改，可以向服务器提交数据）
    disabled:禁用（只看不改，不可以向服务器提交数据）
    required:设置内容为必填项
    pattern: 用户提交的时候，通过正则验证用户提交内容
    maxlength: 设置内容输入的最大长度
    formaction:覆盖表单的action属性（submit／image）
    formenctype:覆盖表单的enctype属性（submit／image）
    	enctype="multipart/form-data":表单中有文件的时候
    formmethod：覆盖表单的method属性（submit／image）
    formnovalidate：覆盖表单的novalidate属性（表单提交时不验证）
    formtarget：覆盖表单的target属性（submit／image）
            _blank/_self
    
// button:点击按钮的需要注意
    1.在表单中出现（没有type属性）：默认具有提交表单的功能
    2.在表单中出现（type="submit"）：默认具有提交表单的功能
    3.在表单中出现（type="button"）：不具有提交表单的功能
    input type="button":没有提交功能
    input type="submit"
        
// 定义input元素的标注：label
	<label for="username">用户名：</label>
	<input type="text" name="username" id="username">
	
	<label><input tpye="radio" name="sex" value="1">男</label>
// 定义围绕表单中元素的边框：fieldset

// 定义fieldset元素的标题：legend
```

# HTML5语义性标签
```
// 定义文档中的节：div
// 定义文档中的节：span

// 定义文档中的头部部分：header
// 定义文档中的底部部分：footer
// 定义文档中的某个区域：section
// 定义文章内容：article
// 定义<article> 标签外的内容：aside（aside 的内容应该与附近的内容相关）
// 定义导航链接：nav
```

# 程序
```
// 定义客户端脚本：script

// 定义针对不支持客户端脚本的用户替代内容：noscript

// 定义了一个容器，用来嵌入外部应用或者互动程序（插件）：embed

跟flash相关的标签属性
// 定义嵌入的对象：object
// 定义对象的参数：param
```

# HTML5定义但是支持不好的标签
```
meter:定义度量衡。仅用于已知最大和最小值的度量
    value
    max
    min
    optimum
    high
    low
progress:定义运行中的任务进度
    value
    max
    min
input/datalist:<input> 元素可能的选项列表
    <input list="cars" />
    <datalist id="cars">
        <option value="BMW">宝马</option>
        <option value="Ford">福特</option>
        <option value="Volvo">沃尔沃</option>
    </datalist>
details/summary:规定了用户可见的或者隐藏的需求的补充细节
    <details>
        <summary>这是一个标题</summary>
        <p>这是我的内容1</p>
        <p>这是我的内容2</p>
        <p>这是我的内容3</p>
        <p>这是我的内容4</p>
    </details>
dialog:对话框
    <dialog>
        用户名：
        <input type="text" name="usenrame">
        <br>
        <br> 密码：
        <input type="password" name="password">
        <br>
        <br>
        <input type="submit" value="提交">
    </dialog>
```

# 公共属性

[所有公共属性一览](http://www.runoob.com/tags/ref-standardattributes.html)

```
id
class
title
data-type
	obj.dataset.type:获取和设置值
style
draggable="true"
```

