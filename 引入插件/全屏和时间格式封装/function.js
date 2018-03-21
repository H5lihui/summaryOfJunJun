// 格式化时间
function formatTime(time) {
    // 获取分钟数
    var minute = Math.floor(time / 60);
    if (minute < 10) {
        minute = '0' + minute;
    }

    // 获取秒数
    var second = Math.floor(time % 60);
    if (second < 10) {
        second = '0' + second;
    }

    return minute + ':' + second;
}

// ele:全屏的对象
function requestFullscreen(ele) {
    // 全屏兼容代码
    if (ele.requestFullscreen) {
        ele.requestFullscreen();
        // 兼容谷歌和Safari浏览器
    } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
    } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
    } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
    }
}

// 取消全屏
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
}

// 判断是否是全屏
function fullscreen() {
    return document.fullscreen ||
        document.webkitIsFullScreen ||
        document.mozFullScreen ||
        document.msFullscreenElement ||
        false;
}