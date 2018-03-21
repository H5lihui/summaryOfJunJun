用户不会打开黑窗口，进行数据的添加，修改，删除，查询操作（增删改查）

步骤
1. 用户看到一个表单，输入自己的名字和密码
2. 点击按钮，将名字和密码提交到服务器
3. 提交到nodejs写好的服务器代码，nodejs将名字和密码通过连接数据库，将数据保存进去

# Mongoose:封装好的NodeJS操作MongoDB库
```
别人写好的mongoose仓库，我们需要下载才能使用
npm install mongoose 
```   

```
// 1.引入mongoose模块
var mongoose = require('mongoose');

// 2.连接mongoose
mongoose.connect('mongodb://localhost:27017/数据库名');

// 3.实例化User模型（集合和名称差一个复数）
var User = mongoose.model('User', { username: String, age: Number, sex: String });
```

## 查询数据
```
// 4.查询所有数据
User.find(callback);
    callback(err,data)

// 5.根据条件查询数据
User.find(condition,callback)
    condition:查询结果
    callback(err,data)

// 6.查询一条数据
User.findOne(condition,callback)
    condition:查询结果
    callback(err,data)
    
// 7.获取数据总条数
User.count(condition,callback)
    condition:查询结果
    callback(err,total)
        total:数据总条数
```

## 添加数据
```
// 4.添加数据
User.create(data,callback)
    data:添加数据（json格式）
    callback(err,res)
```

## 修改数据
```
// 第一种：直接修改数据
User.update(condition,data,callback)
    condition:修改条件
    data：修改数据
    callback(err,res)
```

## 删除数据
```
User.remove(condition,callback)
    condition:删除条件
    callback(err,res)
```