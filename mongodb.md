# MongoDB

## 1.数据库：
```
仓库：存储东西
数据库：存储数据

数据库分类：
SQL(结构化查询语言)：MySQL MariaDB postgresql oracle sqlserver
NoSQL：Redis memcached(内存数据库) MongoDB(文档类型的数据库)

mongodb数据由键值对组成：
	{"username":"zhangsan","age":20,"sex":"男"}
```



## mongodb安装完成之后，在cmd通过mongo进入到数据操作界面

mongo=>show dbs(显示所有的数据库)=>use taobao(选择一个数据库或者是新建一个数据库)(use这个数据库然后db.dropDatabase()：删除当前数据库)=>show collections展示该数据库所有的集合（db.users.drop()：删除users集合）=>db.users.find()/db.users.insert()/db.users.update()/db.users.count():查看当前集合的文档数

## 2.细分结构

- 2.1 数据库：database(dbname)
- 2.2 集合：collection(users,users...)
- 2.3 文档：document(集合中的一条数据)
- 2.4 字段：field(一条数据中的字段)

## 3.常见命令
### 3.1 针对库集合的操作
- show dbs：展示当前MongoDB中所有的数据库(local,test)
- use dbname：切换到dbname库
- db：查看当前处于哪个数据库
- db.dropDatabase()：删除当前数据库
- show collections：展示当前库中所有的集合

### 3.2 增删改查
> 集合结构:_id,姓名,年龄,性别,班期,爱好
#### 3.2.1 添加数据（insert）
```
// 添加数据
// _id:当数据存储到MongoDB中，mongodb会自动给数据(文档)分配一个24位的随机的"不重复"的字符串
db.users.insert({username:"zhangsan",age:20,sex:"男"});
```

// modify:修改 （modified）
// insert:添加
// update:修改
#### 3.2.2 修改数据（update）
```
// 直接修改(不管三七二十一，直接将数据修改只剩下为username）
db.users.update({username:"zhangsan"},{username:"lisi"})

// {$set:{key:value}}:修改zhangsan为lisi（age，sex不会发生变化）
db.users.update({username:"zhangsan"},{$set:{username:"lisi"}})

// {$inc:{key:value}}:给年龄为30岁的人增加5岁
db.users.update({age:30},{$inc:{age:5}});

// {$unset:{key:value}}:删除zhangsan的年龄字段
db.users.update({username:"zhangsan"},{$unset:{age:""}})

// {$push:{key:value}}：向zhangsan用户的爱好中添加“唱歌”
db.users.update({username:"zhangsan"},{$push:{likes:"唱歌"}});

// {$pushAll:{key:arr}}:向zhangsan用户的爱好中添加跳舞和打游戏
db.users.update({username:"zhangsan"},{$pushAll:{likes:["跳舞","打游戏"]}})"}})

// {$addToSet:{key:{$each:arr}}}:向zhangsan用户的爱好中添加敲代码，Lol，CF
db.users.update({username:"zhangsan"},{$addToSet:{likes:{$each:['敲代码','LoL','CF']}}})

// {$pop:{likes:1}}:删除likes中最后一个元素
db.users.update({username:"zhangsan"},{$pop:{likes:1}})
// {$pop:{likes:-1}}:删除likes中第一个元素
db.users.update({username:"zhangsan"},{$pop:{likes:-1}})

// {$pull:{likes:'LOL'}}:删除likes中的"LOL"元素
db.users.update({username:"zhangsan"},{$pull:{likes:'LOL'}})

// {$pullAll:{likes:['CF','打游戏']}}:删除likes中的'CF'和'打游戏'
db.users.update({username:"zhangsan"},{$pullAll:{likes:['打游戏','CF']}})

// {multi:true}:修改所有的符合条件的数据（不加第三个multi参数，则默认修改一条数据）
db.users.update({username:"zhangsan"},{$set:{username:"zhaoliu"}},{multi:true}
// {upsert:true}:如果集合存在该数据，则执行修改，不存在该数据则执行添加
db.users.update({username:"tianqi"},{username:"zhaoliu"},{upsert:true})
```

#### 3.2.3 删除
```
// 只删除指定数据，不删除表
db.collection.remove({username:"zhangsan"}) 
// 删除所有数据，不删除集合
db.collection.remove({})：
// 连集合一并删除，删除索引
db.collection.drop()：
```

#### 3.2.4 查询数据
```
// 查询所有数据
db.users.find();

// 查询username为zhangsan的用户
db.users.find({username:"zhangsan"})

// $gt $gte $lt $lte $ne
// 查询年龄小于18的用户
db.users.find({age:{$lt:18}})
// 查询年龄大于18的用户
db.users.find({age:{$gt:18}})
// 查询年龄大于18，小于30的用户
db.users.find({age:{$lt:30,$gt:18}})

// and并列条件
// 查询年龄18，名称是zhangsan的用户
db.users.find({age:18,username:"zhangsan"})

// $or或条件
// 年龄小于18 或 年龄大于30
db.users.find({$or:[{age:{$lt:18}},{age:{$gt:30}}]})

// $in
// 查询在18期和19期的学生
db.users.find({classid:{$in:['18期','19期']}})

// 查询用户名称含有a字符的用户（正则）
db.users.find({username:/a/});

// 年龄升序
db.users.find().sort({age:1})
// 年龄降序
db.users.find().sort({age:-1})

// 只输出两条数据
db.users.find().limit(2)
// 跳过2条数据，在输出2条
db.users.find().skip(2).limit(2)

// 查看当前users（集合）中有多少条数据（文档）
db.users.count():
```

#### 3.2.5 索引：普通索引和唯一索引
```
// 创建索引
db.users.createIndex({username:1}):系统自动给username排序，我们只需要告诉mongodb谁是索引

// 获取索引
db.users.getIndexes();

// 删除索引
db.users.dropIndex({username:1})

// 设置索引为唯一索引
db.users.createIndex({username:1},{unique:true})

注意：
    1._id:系统自动生成的全局的唯一索引
	2.一个字段值不能既是普通索引，又是唯一索引
	3.mongodb区分数字和数字字符串 2999和"2999"不一样
```

#### 3.2.7 数据的导入和导出：必须先退出mongo命令窗口
```
导出：mongodump -d dbname -o 存放路径(c:/data)
	mongodump -d jd -o ./data
	jd: 导出的原数据库
	./data: 导出的新数据库
导入：mongorestore -d dbname 存放路径(c:/data/test)
	mongorestore -d taobao ./data/jd
	taobao: 导入的新数据库
	./data/jd: 导入的原数据库
```
