# 注意事项
```
1.设为Flex布局之后，子元素的float，clear和vertical-align属性都讲失效
2.采用Flex布局的元素，称为Flex容器（Flex container），所有的子元素成为容器成员，称为Flex项目（Flex item）
3.容器默认存在两根轴：水平的主轴和垂直的交叉轴
4.主轴的开始位置叫做main start，结束位置叫做main end
5.交叉轴的开始位置叫做cross start，结束位置叫做cross end
6.单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size
```
![Flex容器和Flex项目](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

# 容器的属性
## 1.flex-direction:决定主轴的方向（即子项目的排列方向）
```
row（默认值）：主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端。
column：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿。
```
![Flex-direction的使用](
http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)

## 2.flex-wrap:换行
```
nowrap(默认)：不换行
wrap:换行，第一行在上方
wrap-reverse:换行，第一行在下方
```

## 3.flex-flow:是flex-direction和flex-wrap属性的简写

## 4.justify-content：定义了项目在主轴上的对齐方式
```
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
```
![justify-content的使用](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)

## 5.align-items：定义项目在交叉轴上如何对齐
```
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
```
![align-items](
http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

## 6.align-content：定义多根轴线的对齐方式（一根轴线不生效）
```
flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。
```
![align-content的使用](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)

# 子项目属性
## 1.order：定义项目的排列顺序。数值越小，排列越靠前，默认为0
## 5.flex属性
```
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
```

## 6.align-self属性：定义单个项目的对齐方式，可以覆盖align-items属性
```
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
```
![align-self](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png)


针对父级容器的设置
	display:flex

	flex-wrap:是否换行
	flex-direction:子项的排列方向
	justify-content:子项在水平方向的排列
	align-content:多行子项在水平方向的排列
	align-items:统一设置单行子项在水平方向的排列

针对子项的设置
	flex:设置子项的比例关系
		flex:1
	order:设置子项在兄弟间的排列顺序
		负值 auto 0 正值
	align-self:单独设置每个子项在垂直方向的排列