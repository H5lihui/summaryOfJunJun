后端开发语言

```
php/.net/jsp
java
c
nodejs - js
python
```

数据库

```
mysql/mariadb
mongodb
postgresql
sqllite
```

# NodeJS第一天-Node介绍

## NodeJS发展
### 作者：Dyan Dahl
- 跟编程无关的纽约博士
- 退学->南美洲
- web性能专家
- Google V8出现 - javascript解析器


# Node是什么
**一个平台：集成了Google的V8引擎，让JS运行在服务器端的平台**

### Node发展
- 第一阶段（2009年）：Ryan Dahl个人开发
- 第二阶段（2010年-2014年）：Joyent公司资助，Dlyan Dahl负责技术工作(0.10)
- 第三阶段（2014年-2015年）：Node技术人才自立门户，创立IO.js(0-3)
- 第四阶段（2015年）：IO.JS和NodeJS合并，步入快车道(NodeJS基金会)
- 目前，[NodeJS版本](https://github.com/nodejs/node/blob/master/CHANGELOG.md)
> **使用稳定版本：v8.9.3**

	LTS：long technology support长期技术支持（3年）
	不加LTS：激进版本，增加很多的新功能，这些功能还么有完全的权威测试

## 功能
- (**)复杂逻辑的网站|社交网站的大规模WEB应用
- (*)WebSocket（端游，页游）
- (***)基于Node的前端自动化工具（webpack，gulp）
- 网络爬虫

## 安装
1. 官网下载(v8.9.3)：[NodeJS官网](http://nodejs.cn/)
2. 直接安装
3. 测试是否成功
   1. 按下win+R,输入cmd，打开命令行工具
      1. 在命令行输入node -v,显示v8.9.3，表示成功
   2. 顺带输入npm -v,显示 5.5.1，查看NPM版本
   3. dir：查看当前文件夹的目录结构
   4. cd c:/a/b/c:进入到c盘下a/b/c目录下
   5. d:切换到d盘

## NPM（Node Package Manager）：Node JS包管理工具
- Node安装成功，默认就安装了NPM

### 功能
- 安装，卸载，更新，查看，搜索，发布包

### 命令
1. 安装下载模块
```
npm install jquery			下载jquery
npm i jquery				简写的下载jQuery
npm install jquery@1.11.3	下载指定版本jquery

dependencies:项目开发过程和上线之后都需要依赖的文件

npm install jquery --save-dev	下载jQuery并且将jQuery写入Package.json中的devDependencies中
devDependencies:开发过程中以来的文件，在项目上线之后，就不需要了
```

1. 同时下载多个模块

   ```
   1.npm init(或者当前目录下新建package.json)，内容如下
   {
     "name": "myapp",     		package名字(自定义)
     "version": "1.0.0",     	package的版本（自定义）
     "description": "",     	描述（自定义）
     "main": "main.js",     	主入口文件(自定义)
     "dependencies": {     	package的应用依赖模块，及别人要使用这个package，至少需要安装哪些东西。

       "jquery": "1.8.3",    	下载jquery
       "bootstrap":"\*",		下载bootstrap
       "angular":"\*"			下载angularJS
     },
     "author": "张三",  			作者
     "license": "ISC"     		授权
   }

   2.npm install:下载
   ```

2. 卸载 npm uninstall jquery

3. 查看包的信息
   - npm ls:查看安装的包
   - npm ls jquery:查看jquery包的特性
   - npm info jquery:查看jquery包的详细信息

4. 更新包 npm update jquery

5. 查看npm当前配置 npm config list

### 注意事项
- package.json文件默认是当前文件夹的名字，name值不能使用大写字母（小写字母和数字组合）

- 下载失败 - 确定网络是否畅通
  设置淘宝镜像：npm config set registry=https://registry.npm.taobao.org
  设置官方镜像：npm config set registry=https://registry.npmjs.org(默认)

- 版本号理解（jquery-1.12.4）
  - 主版本号：不兼容的程序修改	做了大改变
  - 副版本号：向下兼容的功能性新增，增加了功能
  - 补丁版本号：向下兼容的bug的修复，修复了存在的bug

- 常见版本号理解
  - ^4.11.1	=> 4.11.1 <= version < 5.0.0:比较激进
  - 4.11.1：就是4.11.1版本
  - ~4.11.1 => 4.11.1 <= version < 4.2.0:比较温和，尽可能兼容
  - *:最新的版本

- NPM下载目录问题
  - 上级目录有node_modules,文件就会被下载到上级的node_modules

- 全局安装(global)
  ```
  npm install supervisor -g（执行）
  npm install bower -g
  npm install grunt-cli -g
  ```








