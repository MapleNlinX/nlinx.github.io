function MyPlane(img, x, y, w, h, game) {

    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.game = game;
    this.cxt = game.cxt;

}
MyPlane.prototype = {
    draw() {
        this.cxt.drawImage(this.img, this.x, this.y, this.w, this.h);
        if (this.game.isShield == true) {
            this.cxt.drawImage(this.game.shieldSource, this.x - 12, this.y - 12, this.w * 1.3, this.h * 1.3)
        }
    },
    move(x, y) {
        this.x = x - this.w / 2;
        if (this.x < 0) {
            this.x = 0;
        }
        var maxWidth = this.game.width - this.w;
        if (this.x > maxWidth) {
            this.x = maxWidth;
        }
        this.y = y - this.h / 2;
        if (this.y < 0) {
            this.y = 0;
        }
        var maxHeight = this.game.height - this.h;
        if (this.y > maxHeight) {
            this.y = maxHeight;
        }
    }

}