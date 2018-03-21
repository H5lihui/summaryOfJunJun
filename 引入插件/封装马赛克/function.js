/*
 * 功能：获取指定像素点的颜色值
 * @param Object obj ：获取的图片对象数据
 * @param Number x: 获取的指定坐标点的横坐标
 * @param Number y: 获取的指定坐标点的纵坐标
 * @return Array color: 指定坐标点的颜色值
 */
function getPixelColor(obj, x, y) {
    // 像素点索引值 = 纵坐标*每行的像素点个数 + 横坐标
    var index = y * obj.width + x;

    var color = [];
    color.push(obj.data[4 * index + 0]);
    color.push(obj.data[4 * index + 1]);
    color.push(obj.data[4 * index + 2]);
    color.push(obj.data[4 * index + 3]);

    // 返回获取的颜色值
    return color;
}

/*
 * 功能：设置指定像素点（坐标点）的颜色值
 * @param Object obj ：图片对象数据
 * @param Number x: 获取的指定坐标点的横坐标
 * @param Number y: 获取的指定坐标点的纵坐标
 * @param Array color: 修改的颜色数组
 * 
 * @return Object obj: 返回修改之后的对象
 */
function setPixelColor(obj, x, y, color) {
    // 对应坐标点的索引值(10,5)
    var index = y * obj.width + x;

    obj.data[4 * index + 0] = color[0];
    obj.data[4 * index + 1] = color[1];
    obj.data[4 * index + 2] = color[2];
    obj.data[4 * index + 3] = color[3];

    // 返回修改的对象
    return obj;
}

/*
   功能：获取随机数
*/
function rand(m, n) {
    return Math.floor(Math.random() * (n - m + 1) + m)
}

/* 马赛克函数 */
function Masaike(ctx, x, y, w, h, num) {
    console.log(h);
    // 100*100范围的像素点
    var res = ctx.getImageData(x, y, w, h);

    // 计算组数量
    var groupX = Math.floor(w / num);
    var groupY = Math.floor(h / num);

    // i和j是组的循环
    for (var i = 0; i < groupX; i++) {
        for (var j = 0; j < groupY; j++) {
            // 从每组中随机找一个像素点
            var randX = i * num + rand(0, num - 1);
            var randY = j * num + rand(0, num - 1);

            // 索取随机像素点的颜色
            var color = getPixelColor(res, randX, randY);

            // 然后将随机的像素点颜色值交给同组的其他兄弟像素点
            for (var m = 0; m < num; m++) {
                for (var n = 0; n < num; n++) {
                    setPixelColor(res, i * num + m, j * num + n, color);
                }
            }
        }
    }

    ctx.putImageData(res, x, y);
}