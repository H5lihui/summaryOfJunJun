/*
 * get请求
 * @param string url 请求的url地址
 * @param function callback 处理返回结果的回调函数
 */
function get(url,callback){
	// 1.将用户名发送到远程服务器
	var xhr = new XMLHttpRequest();
	xhr.open('get', url, true);
	xhr.send();

	// 2.接收结果
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			// 将json字符串转换json对象
			var msg = JSON.parse(xhr.responseText);

			callback(msg);	// 调用函数,msg不能改变，msg是上面的结果
		}
	}
}

/*
 * post请求
 * @param string url 请求的url地址
 * @param string data 请求的参数
 * @param function callback 处理返回结果的回调函数
 */
function post(url, data, callback){
	// 1.实例化XMLHttpRequest
	var xhr = new XMLHttpRequest();
	xhr.open('post', url, true);
	// get请求和post请求格式一致，
	// 但是post请求+并且传递数据必须 设置头信息，而且将数据写入到send中
	xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xhr.send(data);

	// 2.获取结果
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			// json字符串=》json对象
			var msg = JSON.parse(xhr.responseText);

			callback(msg);
		}
	}
}