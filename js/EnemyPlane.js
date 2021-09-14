function EnemyPlane(enemyType, img, x, y, w, h, speed, game) {
    this.enemyType = enemyType;
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.cxt = game.cxt;
    this.hp = 0;
    this.speed = speed;
    this.isLife = true;
    this.game = game;
    this.bossmoveLR = 0;
    this.part1 = true;
    //不同类型不同血量
    switch (enemyType) {
        case 0:
            this.hp = 80;
            break;
        case 1:
            this.hp = 40;
            break;
        case 2:
            this.hp = 10;
            break;
        case 3:
            this.hp = 3000;
    }
}
EnemyPlane.prototype = {
    draw() {
        if (this.enemyType == 3 && this.game.buff1Switch == true) {
            this.cxt.save();
            this.cxt.globalAlpha = 0.2;
            console.log("透明");
            this.cxt.drawImage(this.img, this.x, this.y, this.w, this.h);
            this.cxt.restore();
        }
        else if (this.enemyType == 3 && this.game.buff2Switch == true) {
            this.cxt.save();
            this.cxt.shadowColor = "#E4E402";
            this.cxt.shadowBlur = "10";
            this.cxt.drawImage(this.img, this.x, this.y, this.w, this.h);
            this.cxt.restore();
        }
        else {
            this.cxt.save();
            this.cxt.drawImage(this.img, this.x, this.y, this.w, this.h);
            this.cxt.restore();
        }


        if (this.enemyType == 3) {
            this.bossmove();
        } else {
            this.move();
        }
        if (this.y > this.game.height) {

            this.isLife = false;
            //扣分
            this.game.addScore(-1);
            this.game.planeRes--;
            this.game.planeResRe = new Date().getTime();
        }
    },
    move() {

        this.y += this.speed;
        // if (this.speed < this.game.enemySpeed) {
        //     // this.speed += 0.2;
        //     if (this.speed > this.game.enemySpeed) {
        //         this.speed = this.game.enemySpeed;
        //     }
        // }
    },
    bossmove() {
        if (this.y >= 100) {
            if (this.bossmoveLR == 0) {
                this.x -= this.speed;
                if (this.x <= 20) {
                    this.bossmoveLR = 1;
                }

            } else if (this.bossmoveLR == 1) {
                this.x += this.speed;
                if (this.x >= this.game.width - this.w - 20) {
                    this.bossmoveLR = 0;
                }
            }

        } else {
            this.y += this.speed;
        }

    }

}