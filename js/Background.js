function Background(img, x, y, w, h, cxt, speed) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.cxt = cxt;
    this.speed = speed;
}

Background.prototype = {
    draw() {
        var o = this;
        if (o.y >= o.h) {
            o.y = -o.h;
        }
        o.y += o.speed;
        this.cxt.drawImage(o.img, o.x, o.y, o.w, o.h);
    }
}



