# DOM

```
DOM：Document Object model文档对象模型
作用：描述HTML页面中所有的标签对象及标签属性内容等对象的关系

BOM = 全局属性+navigator+screen+history+location+document
```

## 1 获取并改变HTML标签

```
document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()

document.querySelector('css选择器#box .a div'):匹配复合条件的第一个元素
document.querySelectorAll()：匹配所有的复合条件的元素
ID名直接获取（IE8部分不支持）
```

## 2 获取并改变HTML属性

```
// 获取和修改系统属性
obj.src
obj.title
obj.href

// 获取，修改，添加，删除所有的系统属性和自定义属性
obj.getAttribute()
obj.setAttribute()
obj.removeAttribute()
```

## 3 获取并改变CSS样式

```
obj.style.width:只能获取行内的样式，不能获取应用到标签最终的样式

获取最终的样式（兼容）
function getStyle(obj, attr){
  	return document.defaultView ? document.defaultView.getComputedStyle(obj)[attr] : obj.currentStyle[attr];
}
```

## 4 事件处理

- 鼠标事件
```
- onclick
- ondblclick
- oncontextmenu：右击
- onmouseover/onmouseenter
- onmouseout/onmouseleave
- onmousedown
- onmouseup
- onmousemove
```

- 键盘事件
```
onkeydown
    1. 获取系统按键：esc，tab，backspace，shift，alt，ctrl等系统
    2. 获取的字母都是大写字母
onkeyup
onkeypress
    1. 除了回车和空格，其余的系统按键不能获取
    2. 获取的字母区分大小写
```

- 表单事件
```
onfocus
onblur
oninput
onsubmit
onchange
onreset
onselect
	单行文本域的默认值：inputObj.value
	select：selectObj.value
	radio：radioObj.value
	checkbox:checkboxObj.value
	
	获取单选和多选是否选中：radioObj.checked(true|false)
```

- 框架对象事件
```
onload
onresize
onerror
onscroll
```

- 鼠标键盘属性值
```
// 获取点击的位置距页面的左边距和上边距
e.pageX
e.pageY

// 获取点击的位置距浏览器的左边距和上边距
e.clientX
e.clientY

// 获取点击的位置距点击对象的左边距和上边距
e.offsetX
e.offsetY

键盘事件属性
key:返回按键的值
keyCode:返回按键对应的ASCII值

// 用户按下三键，返回true，否则为false
shiftKey
ctrlKey
altKey
```

- 标签属性
```
下面的这些属性都没有单位

// 获取div的宽度和高度（包含padding和border）
div.offsetWidth
div.offsetHeight

// 获取浏览器的宽度和高度
document.documentElement.clientWidth
document.documentElement.clientHeight

// 获取页面的宽度和高度
document.documentElement.scrollWidth
document.documentElement.scrollHeight

// 父级有定位，则获取box左上角距父级的左边距和上边距
// 父级没有定位，则获取box左上角距页面的左边距和上边距
box.offsetLeft
box.offsetTop

// 获取box的内容滚动的距离
box.scrollLeft
box.scrollTop

// 设置box的内容滚动的距离
box.scrollLeft = 100
box.scrollTop = 100

// 获取页面的滚动距离
document.documentElement.scrollTop || document.body.scrollTop

// 设置页面的滚动距离
document.documentElement.scrollTop = 100
document.body.scrollTop = 100
```

- 事件冒泡
```
原生JS(ECMAScript+dom+bom)
    // 兼容所有的浏览器
    var e = ent || window.event; 
    e.cancelBubble = true

    // 兼容IE9+，火狐谷歌浏览器
    e.stopPropagation();

jquery:
    e.stopPropagation()
    return false;
区别：
1. return false;代表终止函数，之后的代码将不执行
2. e.stopPropagation():阻止事件冒泡，之后的代码继续执行
```

- 默认行为
```
常见的默认行为：
1. 鼠标点击a链接跳转
2. 右击页面显示右击菜单
3. 提交表单表单跳转
4. 按下键盘输入字符

// 阻止a链接跳转（如果要用a链接做点击事件，务必将这里禁止）
<a href="javascript:;">百度</a>
<a href="javascript:void(0);">百度</a>

// 表单
formObj.onsubmit = function(){
    // 验证不通过，阻止表单提交
    return false;
}

document.oncontextmenu = function(){
    // 阻止浏览器右键菜单
    return false;
}
			
// 兼容IE8+，火狐谷歌浏览器
ent ? ent.preventDefault() : window.event.returnValue = false;
return false;

绝大多数的框架都支持return false;
ent.preventDefault();

return false的缺点：
	一旦遇到return false，代码就终止执行，所以return false必须放在函数的末尾
ent.preventDefault()优点：
	阻止默认行为，不管放在函数中的那个地方，都不影响函数的继续执行
```

# DOM节点操作

## 标签元素的属性
```
- nodeName:
- nodeType:
- nodeValue:

- className:
- attributes:
- innerHTML:

- parentNode:
- childNodes/children:
- firstChild/firstElementChild:
- lastChild/lastElementChild:
- nextSibling/nextElementSibling:
- previousSibling/previousElementSibling:
```

## 标签元素的方法
```
- div.appendChild(节点=标签+属性+文本)：在div的末尾追加一个节点
- div.insertBefore(加入的节点，在...前面的节点):在...（第二个参数）的前面加入节点（第一个参数）
- replaceChild()
- removeChild()
- cloneNode()
```
