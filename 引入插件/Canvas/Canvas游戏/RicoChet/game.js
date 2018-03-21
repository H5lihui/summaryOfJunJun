(function() {
    var ctx = null;

    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60)
            };
    })();

    var Game = {
        canvas: document.getElementById('canvas'),

        setup: function() {
            ctx = this.canvas.getContext('2d');

            this.width = this.canvas.width;

            this.height = this.canvas.height;

            Screen.welcome();
            this.canvas.addEventListener('click', this.runGame, false);
            Ctrl.init();
        },

        runGame: function() {
            Game.canvas.removeEventListener('click', Game.runGame, false);
            Game.init();
            Game.animate();
        },

        animate: function() {
            // 跟书不一样，需要测试
            Game.play = requestAnimationFrame(Game.animate);
            Game.draw();
        },

        // 游戏中各元素的初始化
        init: function() {
            // 这里的顺序不能颠倒
            // 背景
            Background.init();
            // 统计分数
            Hud.init();
            // 砖块
            Bricks.init();
            // 小球
            Ball.init();
            // 球拍
            Paddle.init();

        },

        draw: function() {
            ctx.clearRect(0, 0, this.width, this.height);

            Background.draw();
            Bricks.draw();
            Paddle.draw();
            Ball.draw();
            Hud.draw();
        },

        // 每当关卡增加时，触发升级逻辑
        levelUp: function() {
            Hud.lv += 1;
            Bricks.init();
            Ball.init();
            Paddle.init();
        },

        // 砖块限制最高为5行
        levelLimit: function(lv) {
            return lv > 5 ? 5 : lv;
        },

        restartGame: function() {
            Game.canvas.removeEventListener('click', Game.restartGame, false);
            Game.init();
        }

    };

    // 背景图
    var Background = {
        init: function() {
            // 定义变量作为标志服，确定绘画结束继续下一次绘制
            this.ready = false;

            // 创建一个背景图
            this.img = new Image();
            this.img.src = 'background.jpg';
            this.img.onload = function() {
                Background.ready = true;
            }
        },
        draw: function() {
            if (this.ready) {
                ctx.drawImage(this.img, 0, 0);
            }
        }
    };

    // 砖块
    var Bricks = {
        gap: 2, // 砖块之间的缝隙
        col: 5, // 一共的列数
        w: 80, // 砖的宽度
        h: 15, // 砖的高度
        init: function() {

            // 砖块行数现在和所处关卡匹配起来
            this.row = 2 + Game.levelLimit(Hud.lv);
            this.total = 0;



            this.count = [this.row];
            for (var i = this.row; i--;) {
                this.count[i] = [this.col];
            }
        },
        draw: function() {
            var i, j;

            for (i = this.row; i--;) {
                for (j = this.col; j--;) {
                    // 砖块被销毁的时候
                    if (this.count[i][j] !== false) {
                        if (Ball.x >= this.x(j) && Ball.x <= (this.x(j) + this.w) && Ball.y >= this.y(i) && Ball.y <= (this.y(i) + this.h)) {
                            this.collide(i, j);
                            continue;
                        }
                        //  根据砖块所属的行号，使同一列砖块的颜色形成漂亮的渐变
                        ctx.fillStyle = this.gradient(i);
                        // 重新绘制各个小砖块
                        ctx.fillRect(this.x(j), this.y(i), this.w, this.h);
                    }
                }
            }

            if (this.total === (this.row * this.col)) {
                Game.levelUp();
            }
        },
        collide: function(i, j) {
            Hud.score += 1;
            this.total += 1;
            // 如果发生重叠，将其设定为false，并将小球的y坐标取负
            this.count[i][j] = false;
            Ball.sy = -Ball.sy;
        },
        // 根据缝隙和行号判断x轴
        x: function(row) {
            return (row * this.w) + (row * this.gap);
        },
        y: function(col) {
            return (col * this.h) + (col * this.gap);
        },
        gradient: function(row) {
            switch (row) {
                case 0: // purple
                    return this.gradientPurple ?
                        this.gradientPurple :
                        this.gradientPurple = this.makeGradient(row, '#bd06f9', '#9604c7');
                case 1: // red
                    return this.gradientRed ?
                        this.gradientRed :
                        this.gradientRed = this.makeGradient(row, '#F9064A', '#c7043b');
                case 2: // green
                    return this.gradientGreen ?
                        this.gradientGreen :
                        this.gradientGreen = this.makeGradient(row, '#05fa15', '#04c711');
                default: // orange
                    return this.gradientOrange ?
                        this.gradientOrange :
                        this.gradientOrange = this.makeGradient(row, '#faa105', '#c77f04');
            }
        },

        makeGradient: function(row, color1, color2) {
            var y = this.y(row);
            var grad = ctx.createLinearGradient(0, y, 0, y + this.h);
            grad.addColorStop(0, color1);
            grad.addColorStop(1, color2);

            return grad;
        }
    };

    // 小球
    var Ball = {
        // 不变的量，所以单独列出来
        r: 10,
        // init中是需要重置的量
        init: function() {
            // 小球的横坐标
            this.x = 120;
            // 小球的纵坐标
            this.y = 120;
            // 小球的速度要和当前所处的关卡匹配起来
            // 小球在x轴的增量
            this.sx = 1 + (0.4 * Hud.lv);
            // 小球在y轴的增量
            this.sy = -1.5 - (0.4 * Hud.lv);
        },
        draw: function() {
            this.edges();
            this.collide();
            this.move();

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            ctx.closePath();

            ctx.fillStyle = '#eee';
            ctx.fill();
        },

        edges: function() {
            // 游戏容器上边界
            if (this.y < 1) {
                this.y = 1;
                this.sy = -this.sy;
            } else if (this.y > Game.height) {
                this.sy = this.x = 0;
                this.y = this.x = 1000;

                //游戏结束
                Screen.gameover();
                Game.canvas.addEventListener('click', Game.restartGame, false);
                return;
            }

            if (this.x < 1) {
                this.x = 1;
                this.sx = -this.sx;
            } else if (this.x > Game.width) {
                this.x = Game.width - 1;
                this.sx = -this.sx;
            }
        },
        collide: function() {
            // 判断小球和球拍的界限，如果有坐标重复的地方，则是碰撞
            if (this.x >= Paddle.x && this.x <= (Paddle.x + Paddle.w) && this.y >= Paddle.y && this.y <= (Paddle.y + Paddle.h)) {
                // 碰撞之后，改变小球的递进值
                this.sx = 7 * ((this.x - (Paddle.x + Paddle.w / 2)) / Paddle.w);
                this.sy = -this.sy;
            }
        },
        move: function() {
            // 小球动起来
            this.x += this.sx;
            this.y += this.sy;
        }
    };

    // 球拍
    var Paddle = {
        w: 90,
        h: 20,
        r: 9,
        init: function() {
            this.x = 100;
            this.y = 210;
            this.speed = 4;
        },
        draw: function() {
            this.move();

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.arcTo(this.x + this.w, this.y, this.x + this.w, this.y + this.r, this.r);

            ctx.lineTo(this.x + this.w, this.y + this.h - this.r);
            ctx.arcTo(this.x + this.w, this.y + this.h, this.x + this.w - this.r, this.y + this.h, this.r);

            ctx.lineTo(this.x + this.r, this.y + this.h);
            ctx.arcTo(this.x, this.y + this.h, this.x, this.y + this.h - this.r, this.r);

            ctx.lineTo(this.x, this.y + this.r);
            ctx.arcTo(this.x, this.y, this.x + this.r, this.y, this.r);

            ctx.closePath();
            ctx.fillStyle = this.gradient();
            ctx.fill();
        },

        move: function() {
            if (Ctrl.left && (this.x < Game.width - (this.w / 2))) {
                this.x += this.speed;
            } else if (Ctrl.right && this.x > -this.w / 2) {
                this.x += -this.speed;
            }
        },
        gradient: function() {
            if (this.gradientCache) {
                return this.gradientCache;
            }

            this.gradientCache = ctx.createLinearGradient(this.x, this.y, this.x, this.y + 20);
            this.gradientCache.addColorStop(0, '#eee');
            this.gradientCache.addColorStop(1, '#999');

            return this.gradientCache;
        }
    };

    // 控制
    // 已经在Game对象中创建了控制器侦测，但为了避免混淆，
    var Ctrl = {
        init: function() {
            window.addEventListener('keydown', this.keyDown, true);
            window.addEventListener('keyup', this.keyUp, true);
            window.addEventListener('mousemove', this.movePaddle, true);

            Game.canvas.addEventListener('touchstart', this.movePaddle, false);
            Game.canvas.addEventListener('touchmove', this.movePaddle, false);
            Game.canvas.addEventListener('touchmove', this.stopTouchScroll, false);
        },

        stopTouchScroll: function() {
            event.preventDefault();
        },

        movePaddle: function(event) {
            // 鼠标指针的x坐标
            var mouseX = event.pageX;
            // 从浏览器窗口的左边界到Canvas元素的距离
            var canvasX = Game.canvas.offsetLeft;

            var paddleMid = Paddle.w / 2;

            if (mouseX > canvasX && mouseX < canvasX + Game.width) {
                var newX = mouseX - canvasX;
                // 偏移球拍的新位置，以便让球拍与鼠标指针对齐
                newX -= paddleMid;

                // 劫持已有的Paddle对象，更换新的x坐标值
                Paddle.x = newX;
            }
        },

        keyDown: function(event) {
            switch (event.keyCode) {
                case 39:
                    Ctrl.left = true;
                    break;
                case 37:
                    Ctrl.right = true;
                    break;
                default:
                    break;
            }
        },

        keyUp: function() {
            switch (event.keyCode) {
                case 39:
                    Ctrl.left = false;
                    break;
                case 37:
                    Ctrl.right = false;
                    break;
                default:
                    break;
            }
        }
    };

    var Hud = {
        init: function() {
            this.lv = 1;
            this.score = 0;
        },

        draw: function() {
            ctx.font = "12px helvetica,arial";
            ctx.fillStyle = 'white';
            ctx.textAlign = 'left';
            ctx.fillText('Score:' + this.score, 5, Game.height - 5);
            ctx.textAlign = 'right';
            ctx.fillText('Lv:' + this.lv, Game.width - 5, Game.height - 5);
        }
    }

    // 欢迎界面
    var Screen = {
        welcome: function() {
            this.text = '欢迎你来到打砖块的世界';
            this.textSub = '点击开始';
            this.textColor = '#fff';

            this.create();
        },

        create: function() {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, Game.width, Game.height);

            ctx.fillStyle = this.textColor;
            ctx.textAlign = 'center';
            ctx.font = '40px 微软雅黑';
            ctx.fillText(this.text, Game.width / 2, Game.height / 2);

            ctx.fillStyle = '#999';
            ctx.font = '20px 新宋体';
            ctx.fillText(this.textSub, Game.width / 2, Game.height / 2 + 30);
        },

        gameover: function() {
            this.text = 'Game over';
            this.textSub = 'click to retry';
            this.textColor = 'red';

            this.create();
        }
    }

    window.onload = function() {
        Game.setup();
    }
})();
