function Bullet(img, x, y, w, h, cxt, speed, hurt, game) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.cxt = cxt;
    this.speed = speed;
    this.hurt = hurt;
    this.isLife = true;
    this.game = game
}
Bullet.prototype = {
    draw() {
        this.cxt.drawImage(this.img, this.x, this.y, this.w, this.h);
        this.move();
    },

    move() {
        //子弹抖动
        // var shuijizidan = parseInt(Math.random() * 30 - 15);
        this.y -= this.speed;
        // this.x -= shuijizidan;

        if (this.y < 0) {
            this.isLife = false;
        }
    },
    draw2() {
        this.cxt.drawImage(this.img, this.x, this.y, this.w, this.h);
        this.move2();
    },
    move2() {
        // 子弹抖动
        // var shuijizidan = parseInt(Math.random() * 30 - 15);
        this.y -= this.speed;
        // this.x += shuijizidan;
        if (this.y < 0) {
            this.isLife = false;
        }

    },

    draw3(enemy) {

        this.cxt.drawImage(this.img, this.x, this.y, this.w, this.h);
        this.move3(enemy);
    },
    move3(enemy) {
        this.enemy = enemy;

        if (this.enemy == null) {
            this.y -= this.speed;
        } else {

            if (this.x > this.enemy.x) {
                this.x -= this.speed;
            } else {
                this.x += this.speed;
            }

            if (this.y > this.enemy.y) {
                this.y -= this.speed;
            } else {
                this.y += this.speed;
            }
        }
        if (this.y < 0) {
            this.isLife = false;
        }
    },
    bossdraw() {

        this.cxt.save();
        this.cxt.beginPath();
        // 绘制阴影
        this.cxt.shadowColor = "#F00";
        this.cxt.shadowBlur = "20";
        this.cxt.globalAlpha = 0.7;
        this.cxt.drawImage(this.img, this.x, this.y, this.w, this.h);
        this.cxt.closePath();
        this.cxt.restore();
        this.bossbulletmove();
    },
    bossbulletmove() {

        this.y += this.speed;
        if (this.y > this.game.height) {
            this.isLife = false;
        }
    }

}