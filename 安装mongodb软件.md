# MongoDB
## 1.安装mongodb服务并配置自启动
### 1.1. 在MongoDB目录下手动新建并复制data/db目录路径（数据存储的位置）
```在此C:\Program Files\MongoDB\Server目录下新建data\db目录```

### 1.2. 安装mongodb服务
```
1.打开cmd命令窗口
	32位系统：mongod --dbpath="C:\Program Files\MongoDB\Server\3.2\data\db"  --logpath="C:\Program Files\MongoDB\Server\3.2\data\log.txt" --serviceName MongoDB --journal --storageEngine=mmapv1 --install
	64位系统：mongod --dbpath="C:\Program Files\MongoDB\Server\3.2\data\db"  --logpath="C:\Program Files\MongoDB\Server\3.2\data\log.txt" --serviceName MongoDB --install

	注意：执行完成不要有信息
2.开启mongodb
	net start MongoDB  
```

### 1.3 解释上述命令
```
1. dbpath：数据库路径
2. logpath：日志路径(也放在data目录下)
3. serviceName：服务名称
4. journal：32位默认禁用日志，因为未来的将限制日志最大存储量（64位不需要）
5. storageEngine：存储引擎默认为WiredTiger storage  engine,32位系统不支持 WiredTiger storage engine）64位不支持数据存储引擎
6. install：安装(remove删除，reinstall重装)

win8和win10问题：
安装没有报错，但是安装不成功，则一般是权限问题，请利用管理员身份打开命令提示符（http://jingyan.baidu.com/article/ceb9fb10b53ab88cac2ba05b.html）
```
