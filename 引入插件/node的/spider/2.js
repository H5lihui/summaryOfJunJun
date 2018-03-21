var spider = require('./spider.js');

spider.get('http://e.dangdang.com/original_index_page.html?originalSex=man').then(function($){
	$('.index_yuanchuangcell_module').each(function(){
		console.log($(this).find('.author').text());
		console.log($(this).find('.title').text());
		console.log($(this).find('.des').text());
		console.log('img',$(this).find('.bookcover').find('img').attr('src'));
	})
})