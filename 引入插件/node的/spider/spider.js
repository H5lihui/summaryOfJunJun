// 1.引入模块
var request = require('request'),
	cheerio = require('cheerio');	// 服务器端的解析dom的模块

exports.get = function(url){
	return new Promise(function(resolve,reject){
		// 2.偷数据
		request(url, function(err,response,body){
			if (err) {
				reject(err);
			} else {
				var $ = cheerio.load(body);

				resolve($);
			}
		})
	})
}

// get().then()

/*
$('.pruwrap').each(function(){
	// a链接的title获取
	console.log($(this).find('dt').children('a').attr('title'));
	// 图片地址
	console.log($(this).find('dt').children('a').children('img').attr('src'));
	console.log($(this).find('.price').text());
})
*/