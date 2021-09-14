function Item(img, x, y, w, h, speed, game, itemIndex) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.speed = speed;
    this.cxt = game.cxt;
    this.game = game;
    this.itemIndex = itemIndex;
    this.isLife = true;

}
Item.prototype = {
    draw() {

        // 绘制发光效果
        this.cxt.save();
        this.cxt.beginPath();
        if (this.img == this.game.itemSourceArray[0]) {
            this.cxt.shadowColor = "#950101";
        } else if (this.img == this.game.itemSourceArray[1]) {
            this.cxt.shadowColor = "#D96A01";
        } else if (this.img == this.game.itemSourceArray[2]) {
            this.cxt.shadowColor = "#E4E402";
        } else if (this.img == this.game.itemSourceArray[3]) {
            this.cxt.shadowColor = "#1099C4";
        } else if (this.img == this.game.itemSourceArray[4]) {
            this.cxt.shadowColor = "#004F9E";
        }
        this.cxt.shadowBlur = "10";
        this.cxt.globalAlpha = 0.7;
        this.cxt.drawImage(this.img, this.x, this.y, this.w, this.h);
        this.cxt.restore();
        this.move();
        if (this.y > this.game.height) {

            this.isLife = false;

        }
    },
    move() {
        this.y += this.speed;
    }
}
