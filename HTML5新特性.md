res.render('index'):views下的index.html
res.render('users/index'):views下的users的index.html

res.redirect('/users'):跳转到

<a href="/users">xxx</a>
<a href="/shops/collect">xxx</a>
<a href="/types/create">分类添加</a>
<form action="/articles/create" method="post">

13天：
HTML5新特性：7天
6天：闭包，this关键字，原型，移动端

# HTML5新特性
原有：div ul ol dl span a img
    div
新增加：header,nav,main,footer,aside,placeholder,autocomplete,email,number
    fieldset legend mark embed figure figcaption
    <figure>
        <img src="1.jpg" alt="">
        <figcaption>苍老师</figcaption>
    </figure>
    
    HTML5注重：语义性

CSS3:
    宽度，margin，padding，背景，文字。。。
    背景：
        background-repeat:cover(完全覆盖，部分超出) contain(背景图片必须全部在容器内，可能容器部分没有背景图片)
        background-origin
        background-clip
        background-size
    渐变
    变换：transform:平移旋转缩放
    过渡：transition
    动画：animation
    弹性盒子

HTML5 != 标签
HTML5 = HTML5标签 + CSS所有内容 + JS

## 1.HTML5新标签的语义性
```
- header、footer、section、article、aside、nav
- address、figure/figcaption、mark、time、embed、fieldset/legend
- audio/video/source
- Canvas

<figure>
    <img src="1.jpg" alt="">
    <figcaption>刘亦菲</figcaption>
</figure>

<h3>标题</h3>
<p>段落</p>
<ul></ul>
<div></div>:没有意义的盒子,框,容器 => div+css

<div class="header"></div>  => <header>头部内容</header>
<div class="footer"></div>  => <footer>尾部内容</footer>
<div class="nav"></div> => <nav>导航内容</nav>

<article></article>：文章标签
<section></section>:区块标签
<aside></aside>：边标签

中大型网站为了兼容所有的用户，所以升级代码的时候，比较谨慎
但是在移动端，HTML5的新标签都可以正常使用

PC端：暂时还是div+css
移动端：HTML5新标签布局

优点：
1. HTML结构更加明确，清晰
2. 有利于搜索引擎对网页内容的识别
```

## 2.标签新属性
- **dataset(IE11，火狐谷歌)**
- **classList(火狐谷歌最新，IE10以上)**
    - obj.classList.length获取class类的个数
    - obj.classList.add():添加class类
    - obj.classList.remove():移出class类
    - obj.classList.contains():判断是否包含指定class类
    - obj.classList.toggle():切换class类

# HTML5提供的新API
## 2.音频(audio)和视频(video)
### 2.1 标签属性
- 音视频：autoplay、controls、loop、muted、preload、src
- 视频：width、height、poster

### 2.2 方法
- play()：开始播放音频／视频
- pause()：暂停当前播放的音频／视频

### 2.3 事件属性
#### 2.3.1 只读属性
- duration：返回当前的总时长
- currentSrc：返回当前URL
- ended：返回是否已结束
- paused：返回是否已暂停

#### 2.3.2 获取并可修改的属性
- autoplay：设置或返回是否自动播放
- controls：设置或返回是否显示控件（比如播放/暂停等）
- loop：设置或返回是否是循环播放
- muted：设置或返回是否静音
- currentTime：设置或返回当前播放位置（以秒计）
- volume：设置或返回音量
- playbackRate：设置或返回播放速度

### 2.4 事件
- durationchange:当音频/视频的时长已更改时
- ended:当目前的播放列表已结束时
- pause:当音频/视频已暂停时
- play:当音频/视频已开始或不再暂停时
- ratechange:当音频/视频的播放速度已更改时
- timeupdate:当目前的播放位置已更改时
- volumechange:当音量已更改时
```
案例
1. 网页的视频（爱奇艺，慕课网）
2. 网页的音乐播放器(酷狗)
```

# 2.全屏和取消全屏
```
// 全屏
// ele:全屏的对象
function requestFullscreen(ele) {
    // 全屏兼容代码
    if (ele.requestFullscreen) {
        ele.requestFullscreen();
    } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
    } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
    } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
    }
}

// 取消全屏
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
}

## 1.3  判断是否全屏
<pre>
function fullscreen() {
    return document.fullscreen ||
        document.webkitIsFullScreen ||
        document.mozFullScreen ||
        document.msFullscreenElement ||
        false;
}
</pre>
```

## 3.拖放
```
1.执行拖放事件，必须添加draggable="true"

2.拖放事件
    拖对象
        ondragstart:当拖动开始的时候
        ondrag:当拖动的时候
        ondragend：当拖动结束的时候
    放对象
        ondragenter:当拖对象进入放对象的时候
        ondragleave:当拖对象离开放对象的时候
        ondragover:当拖对象在放对象上移动的时候
        ondrop:当放下拖对象的时候
3.设置拖放时的数据
    ent.dataTransfer:拖放传输数据对象

    // 此处的key和value必须是字符串类型的参数
    ent.dataTransfer.setData(key, value)

    ent.dataTransfer.getData(key)

    // IE不支持
    e.dataTransfer.setDragImage(imgObj,起始点横坐标,起始点纵坐标)
    
    图片默认有拖放功能
```

## 4.文件读取
```
// 1.实例化文件读取对象
var reader = new FileReader();

// 2.读取文件数据（其他读取数据方式）
reader.readAsDataURL(fileObj);

// 3.文件读取完成
reader.onload = function(){
    // this.result:获取读取之后的结果
}

// 4.文件读取进程事件
reader.onprogress = function(ent){
    // 当前进度:ent.loaded
    // 总长度:ent.total
}
```

## 5.web worker:将任务分派出去，让其他页面来做
```
主文件
// 1.实例化worker对象
var worker = new worker(js文件);
// 2.给JS文件发送任务
worker.postMessage(value);
// 3.等待接收js文件传回的数据
worker.onmessage = function(e){
    console.log(e.data)
}

worker：
self.onmessage = function(e){
    // 获取前台传递的数据
    e.data

    // 回复主文件内容
    self.postMessage(value);
}
```

## 6.地理位置
```
var str = '';
navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
    str += '经度:' + position.coords.longitude + '<br>';
    str += '纬度 :' + position.coords.latitude + '<br>';
    str += '准确度 :' + position.coords.accuracy + '<br>';
    str += '海拔 :' + position.coords.altitude + '<br>';
    str += '行进方向 :' + position.coords.heading + '<br>';
    str += '地面速度 :' + position.coords.speed + '<br>';
    str += '时间戳:' + new Date(position.timestamp) + '<br>';
}, function(error) {
    console.log(error);
});

百度地图API（http://lbsyun.baidu.com/index.php?title=jspopular）
```

### 7.本地存储 Web Storage
#### 7.1 使用cookie存储数据的缺点
- 大小限制：cookie的大小被限制为4KB
- 带宽资源：每次的HTTP请求都会将本地的cookie发送，占据部分带宽
- 复杂性：正确操作cookie有一定的复杂性
#### 7.2 在客户端本地保存数据的功能
-   **sessionStorage** : 将数据保存在session对象中
    > session:指用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间内保存的数据对象，不支持切换页面
```
// 设置数据
sessionStorage.setItem(key,value)
// 获取数据
sessionStorage.getItem(key)
// 移除指定数据
sessionStorage.removeItem(key)
// 清空所有数据
sessionStorage.clear();
```
-   **localStorage**
    > 将数据保存在客户端本地的硬件设备(一般就是硬盘)，即使浏览器被关闭了，该数据仍然存在，下次da kai打开浏览器访问网站仍然存在
```
// 设置数据
localStorage.setItem(key,value)
// 获取数据
localStorage.getItem(key)
// 移除指定数据
localStorage.removeItem(key)
// 清空所有数据
localStorage.clear();
```
#### storage事件