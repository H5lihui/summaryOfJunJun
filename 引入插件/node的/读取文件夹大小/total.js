// 需求：获取file文件夹的大小
var fs = require('fs');


function getDirSize(dirname) {
    // 1.获取file文件夹下所有的文件
    var files = fs.readdirSync(dirname); // ['1.txt','2.html'...]

    // 2.获取所有文件的大小
    var sum = 0;
    for (var i = 0; i < files.length; i++) {
        var info = fs.statSync(dirname + '/' + files[i]);

        // 读取的这个是文件
        if (info.isFile()) {
            // 直接统计文件大小
            sum += info.size;
        } else {
            // 进入该文件夹，继续循环统计文件大小
            // 为了获取每个子级文件夹的文件总大小
            // sum+=将所有的子级文件夹下文件总大小做累加求和
            sum += getDirSize(dirname + '/' + files[i]);
        }
    }
    return sum;
    // getDirSize()调用之后目的就是返回当前文件夹下所有文件的大小    
}
var total = getDirSize('file');
console.log(total);