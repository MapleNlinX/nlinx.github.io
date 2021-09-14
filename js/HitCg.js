function HitCg(imgArr, x, y, game) {
    this.imgArr = imgArr;
    this.x = x;
    this.y = y;
    this.game = game;
    this.cxt = game.cxt;
    this.playNow = 0;
    this.isLife = true;
}
HitCg.prototype = {
    draw() {
        var o = this;
        var img = this.imgArr[this.playNow];

        this.cxt.drawImage(img, o.x - img.width / 2, o.y - img.height / 2, img.width, img.height);
        o.playNow++;

        if (o.playNow >= o.imgArr.length - 1) {
            o.isLife = false;
        }
    }
}