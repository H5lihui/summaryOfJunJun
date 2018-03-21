var mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog');

// 定义数据字段
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	username: String,
	password: String,
	sex: String,
	likes: Array,
	position: String,
	intro: String,
	avatar: String
	/*
	timestamps:自动添加时间
		创建时间：createdAt
		最后一次修改时间：updatedAt
	*/
}, {timestamps:true});

// 将User导出
exports.User = mongoose.model('User', UserSchema);