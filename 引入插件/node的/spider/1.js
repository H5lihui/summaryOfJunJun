var spider = require('./spider.js');

spider.get('http://search.lefeng.com/search/showresult?keyword=%E9%9D%A2%E8%86%9C').then(function($){
	$('.pruwrap').each(function(){
		// a链接的title获取
		console.log($(this).find('dt').children('a').attr('title'));
		// 图片地址
		console.log($(this).find('dt').children('a').children('img').attr('src'));
		console.log($(this).find('.price').text());
	})
})