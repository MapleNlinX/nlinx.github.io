function Game(box) {
    this.box = box;
    this.width = 0;
    this.height = 0;
    this.cxt = box.getContext('2d');
    this.width = this.box.width = window.innerWidth;
    this.height = this.box.height = window.innerHeight;
    this.cxt.save();





    // 数值图片
    this.score = "000";
    this.numberArray = [];
    this.numberImg = [
        './img/0.png',
        './img/1.png',
        './img/2.png',
        './img/3.png',
        './img/4.png',
        './img/5.png',
        './img/6.png',
        './img/7.png',
        './img/8.png',
        './img/9.png'
    ]
    // 爆炸图片
    this.bombSource = [];
    this.bombArray = [];
    this.bombImg = [
        './img/b1.gif',
        './img/b2.gif',
        './img/b3.gif',
        './img/b4.gif',
        './img/b5.gif',
        './img/b6.gif',
        './img/b7.gif',
        './img/b8.gif',
        './img/b9.gif',
        './img/b10.gif',
        './img/b11.gif'
    ]

    //受击图片
    this.hitCgSoure = [];
    this.hitCgArray = [];
    this.hitCgImg = [
        './img/hitcg1_1.png',
        './img/hitcg1_2.png',
        './img/hitcg1_3.png',
        './img/hitcg1_4.png',

    ]

    // 背景图片
    this.bgImgArray = [];
    this.bgNow = '';
    this.bgY = 0;
    this.bgSpeed = 2;
    this.bgImg = [
        './img/bg_01.jpg',
        './img/bg_02.jpg',
        './img/bg_03.jpg',
        './img/bg_04.jpg',
        './img/bg_05.jpg'
    ]



    // 敌机图片
    this.bossIsLife = true;
    this.bossIsBuild = false;
    this.bossBulletArray = [];
    this.bossBulletTime = new Date().getTime();
    this.bossBulletRe = 800;
    this.bossBulletSpeed = 3.5;
    this.bossBulletHert = 5;
    this.bossPlane = null;
    this.bossBuffType = 0;
    this.bossBuffTime = new Date().getTime();
    this.bossBuffRe = 0;
    this.bossBuffBuildSpeed = 2000;
    this.bossBuff1 = 0;
    this.bossBuff2 = 0;
    this.buff1Switch = false;
    this.buff2Switch = false

    this.enemyImgArray = [];
    this.enemyTime = new Date().getTime();
    this.enemyArray = [];
    this.enemyBuildSpeed = 1000;//敌机生成速度
    this.enemySpeed = 3;//飞机速度
    this.enemyImg = [
        './img/dj1.png',
        './img/dj6.png',
        './img/dj10.png',
        './img/boss1.png'

    ]


    // 子弹图片
    this.bulletImg = [
        './img/bullet1.png',
        './img/bullet2.png',
        './img/bullet3.png',
        './img/bullet4.png',
        './img/bullet5.png',
        './img/bullet6.png'
    ];
    this.bulletType = 0;//子弹类型
    this.bulletSourceArray = [];
    this.bulletArray = [];//存储发出的子弹
    // this.bulletArray2 = [];
    this.bulletTime = new Date().getTime();
    this.bulletAngle = 0;
    this.bulletHuDu = 0;
    this.bulletAct = 15; //子弹伤害基数
    this.bulletBuildSpeed = 150; //子弹生成速度
    this.bulletSpeed = 10;//子弹速度
    this.bulletFly = 1;//子弹飞行模式



    //道具图片
    this.itemImg = [
        './img/item1.png',
        './img/item2.png',
        './img/item3.png',
        './img/item4.png',
        './img/item5.png',
    ];
    this.itemSourceArray = [];
    this.itemArray = [];
    this.itemTime = new Date().getTime();
    this.itemSpeed = 5
    this.itemGet1 = 0;
    this.itemGet2 = 0;
    this.itemGet3 = 0;
    this.itemGet4 = 0;
    this.itemBuildSpeed = 3000;




    // HP图片
    this.hpImg = './img/img_HP.png';
    this.myPlaneHp = 100;
    this.myPlaneMaxHp = 100
    this.hpSpurce = null;


    //死亡图片
    this.deadTime = new Date().getTime();
    this.continueTime = 0;
    this.deadImg = './img/dead1.png';
    this.deadbgImg = './img/deadbg1.jpg';


    //小飞机图片
    this.planeResImg = './img/plane.png';
    this.planeRes = 5; //小飞机数量
    this.planeResRe = 0;
    this.planeResMax = 5;

    //跟踪弹
    this.genzongBullet = 5;
    this.genzongBulletRe = 0;
    this.genzongBulletsMax = 5;

    //护盾图片
    this.shieldImg = './img/Shield1.png';
    this.isShield = false;

    // 飞机图片
    this.myPlaneImg = './img/myplane2.png';
    // 爆炸音效
    this.bombVoice = './audio/zd.mp3';
    this.voiceSource = null;
    this.voiceArrary = [];

    //冰冻音效
    this.itemVoice3 = './audio/theword.mp3';

    //背景音乐
    this.bgmVoice = './audio/bgm.mp3';



    // 加载属性
    this.loadNow = 0;//存储当前加载的资源序号
    this.loadCount = 50;//加载的资源总数
    this.isLoadEnd = false;//记录是否加载完成
    this.level = 0;//游戏难度
    this.isPlaying = true;
    this.isDead = false;
    this.isWin = false;


    // 加载图片资源
    this.loadImg = function (path) {
        var o = this;
        var img = new Image();
        img.src = path;
        img.onload = function () {
            o.loadNow++;
        }
        img.onerror = function () {
            window.alert(path + "图片加载错误");
        }
        return img;
    }
    //加载音频资源
    this.loadAudio = function (path) {
        var o = this;
        var audio = document.createElement('audio');
        audio.src = path;
        audio.onloadedmetadata = function () {
            o.loadNow++;
        }
        audio.onerror = function () {
            alert(path + "音频加载失败");
        }
        return audio;
    }

    this.createAudio = function () {
        var aud = new Audio();
        aud.src = this.voiceSource.src;
        return aud;
    }

    this.createBgm = function () {
        var aud = new Audio();
        aud.src = this.bgmSource.src;
        return aud;
    }



    //检测碰撞
    this.checkRun = function (hit, suffer) {

        var hitLiftX = hit.x;
        var hitRightX = hit.x + hit.w;
        var hitTopY = hit.y;
        var hitBottomY = hit.y + hit.h;
        var sufferLiftX = suffer.x;
        var sufferRightX = suffer.x + suffer.w;
        var sufferTopY = suffer.y;
        var sufferBottomY = suffer.y + suffer.h;
        if (hitLiftX > sufferRightX || hitRightX < sufferLiftX ||
            hitTopY > sufferBottomY || hitBottomY < sufferTopY) {
            return false;
        }

        return true
    }

    // 绘制加载进度
    this.init = function () {

        // this.width = this.box.width = window.innerWidth;
        // this.height = this.box.height = window.innerHeight;

        this.cxt.beginPath();
        this.cxt.fillStyle = "#000";
        this.cxt.fillRect(0, 0, this.width, this.height);
        this.cxt.closePath();

        var progressPercent = this.loadNow / this.loadCount;
        var progressWidth = this.width * 0.6 * progressPercent;
        var progressHeight = 20;
        var progressX = this.width * 0.2;
        var progressY = (this.height - 40) / 2;


        // 绘制进度条
        this.cxt.beginPath();
        // 绘制阴影

        this.cxt.shadowColor = "#F00";
        this.cxt.shadowBlur = "50";
        this.cxt.fillStyle = "#F00";
        this.cxt.fillRect(progressX, progressY, progressWidth, progressHeight);
        this.cxt.closePath();

        // 绘制进度框
        this.cxt.beginPath();
        this.cxt.strokeStyle = "#F00";
        this.cxt.strokeRect(progressX, progressY, this.width * 0.6, progressHeight);
        this.cxt.closePath();


        //绘制文本
        this.cxt.beginPath();
        this.cxt.fillStyle = "F00";
        this.cxt.font = "25px 微软雅黑";
        this.cxt.fillText(parseInt(progressPercent * 100) + '%', this.width / 2.07, this.height / 2 + progressHeight * 1.5);
        this.cxt.closePath();

        if (this.loadNow >= this.loadCount) {
            this.isLoadEnd = true;

        }

    }

    this.starGame = function () {
        var o = this;
        //加载数值图片
        this.numberImg.forEach(function (v) {
            o.numberArray.push(o.loadImg(v));
        });

        // 加载爆炸图片
        this.bombImg.forEach(function (v) {
            o.bombSource.push(o.loadImg(v));
        });

        //加载受击图片
        this.hitCgImg.forEach(function (v) {
            o.hitCgSoure.push(o.loadImg(v))
        });
        // 加载背景图片
        this.bgImg.forEach(function (v) {
            o.bgImgArray.push(o.loadImg(v));
        });

        //加载护盾图片
        this.shieldSource = this.loadImg(o.shieldImg);

        /*随机生成背景*/
        // var bgindex = parseInt(Math.random() * 4.99);
        // this.bgNow = o.bgImgArray[bgindex];
        this.bgNow = o.bgImgArray[this.level];
        o.bg1 = new Background(o.bgNow, 0, - o.height, o.width, o.height, o.cxt, o.bgSpeed);
        o.bg2 = new Background(o.bgNow, 0, 0, o.width, o.height, o.cxt, o.bgSpeed);

        // 加载敌机图片
        this.enemyImg.forEach(function (v) {
            o.enemyImgArray.push(o.loadImg(v));
        });

        // 加载爆炸音效
        this.voiceSource = this.loadAudio(o.bombVoice);

        //加载时间停止音效
        this.itemVoiceSource3 = this.loadAudio(o.itemVoice3);

        //加载背景音乐
        this.bgmSource = this.loadAudio(o.bgmVoice);

        //加载子弹图片
        this.bulletImg.forEach(function (v) {
            o.bulletSourceArray.push(o.loadImg(v));
        });

        //加载道具图片
        this.itemImg.forEach(function (v) {
            o.itemSourceArray.push(o.loadImg(v));
        })

        // 加载HP图片
        this.hpSpurce = this.loadImg(o.hpImg);

        // 加载飞机图片
        var pimg = this.loadImg(o.myPlaneImg);

        //加载小飞机图片
        this.planeResSource = this.loadImg(o.planeResImg);

        //加载死亡图片
        this.deadSource = this.loadImg(o.deadImg);

        //加载死亡背景图片
        this.deadBgSoure = this.loadImg(o.deadbgImg);

        //生成飞机
        this.myPlane = new MyPlane(pimg, o.width / 2 - 60, o.height - 100, 80, 80, o)
        this.box.addEventListener('mousemove', function (event) {
            var x = event.pageX;
            var y = event.pageY;
            o.myPlane.move(x, y);
        });

        //循环播放背景音乐
        o.bgmSource.play();
        o.bgmSource.addEventListener('ended', function () {
            o.bgmSource.play();
        });

        document.addEventListener('keydown', function (e) {
            console.log("keyCode" + e.keyCode);
            switch (e.keyCode) {

                case 80:
                    // 按P暂停或开始游戏
                    if (o.isPlaying) {
                        o.isPlaying = false;
                        o.pause();
                        cancelAnimationFrame(o.animationID);


                    } else {
                        if (o.isDead == false) {
                            animate();
                            o.isPlaying = true;
                        } else if (o.isDead == true || o.bossIsLife == false) {
                            location.reload();
                        }
                    }
                    break;
                case 81:
                    //按q释放跟踪飞镖
                    if (o.genzongBullet > 0 || o.genzongBulletRe <= o.genzongBulletsMax) {
                        o.buildGenZongBullet();

                    }
                    break;

                case 49:
                    //按1切换普通子弹
                    o.bulletType = 0;
                    break;
                case 50:
                    //按2切换强力子弹
                    if (o.level >= 1) {
                        o.bulletType = 1;
                    }
                    break;
                case 51:
                    //按3切换击退子弹

                    if (o.level >= 2) {
                        o.bulletType = 2;
                    }
                    break;
                case 52:
                    //按4切换穿透子弹
                    if (o.level >= 4) {
                        o.bulletType = 4;
                    }
                    break;
                case 87:
                    //按w飞机向上移动
                    o.planeKeyMove("up");
                    break;
                case 83:
                    //按s飞机向上移动
                    o.planeKeyMove("down");
                    break;
                case 65:
                    //按a飞机向上移动
                    o.planeKeyMove("left");
                    break;
                case 68:
                    //按d飞机向上移动
                    o.planeKeyMove("right");
                    break;
            }
        });

        animate();
        function animate() {

            if (!o.isLoadEnd) {
                o.init();

            } else {

                o.cxt.restore();
                // if (o.isDead == true) {
                //     cancelAnimationFrame(o.animationID);
                // }
                o.play();


            } if (o.isDead == false && o.isWin == false) {
                o.animationID = requestAnimationFrame(animate);
            }
            //暂停 ： cancelAnimationFrame(o.animationID);



        }
    }




    this.play = function () {

        var o = this;
        this.bg1.draw();
        this.bg2.draw();
        this.myPlane.draw();
        this.drawHp();
        this.drawScore();
        this.gameLevel();
        if (o.bossIsBuild == true) {
            this.drawBossHp();
        }







        // 生成子弹
        var currentTime = new Date().getTime();
        if (currentTime - this.bulletTime > this.bulletBuildSpeed) {
            /*创建子弹*/


            /*1.开挂子弹*/
            // this.bulletAngle = (this.bulletAngle + 3) % 360;
            // this.bulletHuDu = Math.tan(this.bulletAngle * (Math.PI) / 180);
            // var bulletX = this.myPlane.x + 30 + this.bulletHuDu * 100;
            // var bulletX2 = this.myPlane.x + 30 - this.bulletHuDu * 100;

            /*2.普通子弹*/
            if (currentTime - o.itemGet1 < 3000) {

            } else {
                o.bulletFly = 1;
            }
            var bulletX = this.myPlane.x + this.myPlane.w / 2;
            if (this.bulletFly == 2) {
                var bullet = new Bullet(this.bulletSourceArray[this.bulletType]
                    , bulletX - this.bulletSourceArray[this.bulletType].width
                    , this.myPlane.y - this.bulletSourceArray[this.bulletType].height / 2
                    , this.bulletSourceArray[this.bulletType].width
                    , this.bulletSourceArray[this.bulletType].height,
                    o.cxt, o.bulletSpeed, o.bulletAct, o);

                var bullet2 = new Bullet(this.bulletSourceArray[this.bulletType]
                    , bulletX
                    , this.myPlane.y - this.bulletSourceArray[this.bulletType].height / 2
                    , this.bulletSourceArray[this.bulletType].width, this.bulletSourceArray[this.bulletType].height,
                    o.cxt, o.bulletSpeed, o.bulletAct, o);
                this.bulletArray.push(bullet);
                this.bulletArray.push(bullet2);

            }
            else if (this.bulletFly == 1) {
                var bullet = new Bullet(this.bulletSourceArray[this.bulletType]
                    , bulletX - this.bulletSourceArray[this.bulletType].width / 2
                    , this.myPlane.y - this.bulletSourceArray[this.bulletType].height / 2
                    , this.bulletSourceArray[this.bulletType].width, this.bulletSourceArray[this.bulletType].height,
                    o.cxt, o.bulletSpeed, o.bulletAct, o);
                this.bulletArray.push(bullet);
            }
            this.bulletTime = currentTime;
        }
        this.bulletArray.forEach(function (bull, index) {
            if (bull.img == o.bulletSourceArray[3]) {
                bull.draw3(o.enemyArray[0])
            } else {
                bull.draw();
            }
            o.enemyArray.forEach(function (en, i) {
                //判断打击
                if (o.checkRun(bull, en)) {

                    //打击音效
                    if (en.enemyType == 3 && o.buff1Switch == true) {
                        //bossBuff无敌阶段 子弹无效
                    }
                    else if (en.enemyType == 3 && o.buff2Switch == true) {
                        console.log("开");
                        //子弹反弹  我放子弹特性无效
                        en.hp -= bull.hurt;
                        bull.isLife = false;
                        var bossBullet = new Bullet(o.bulletSourceArray[5]
                            , en.x + en.w / 2 - o.bulletSourceArray[5].width / 2
                            , en.y + en.h - 10
                            , o.bulletSourceArray[5].width
                            , o.bulletSourceArray[5].height
                            , o.cxt
                            , o.bossBulletSpeed
                            , o.bossBulletHert
                            , o
                        );
                        o.bossBulletArray.push(bossBullet);

                    }
                    else {
                        o.voiceArrary.push(o.createAudio());

                        if (bull.img == o.bulletSourceArray[2]) {
                            // en.speed = -30;
                            en.y -= 30;
                            en.hp -= bull.hurt;
                            bull.isLife = false;
                        }
                        else if (bull.img == o.bulletSourceArray[4]) {
                            en.hp -= bull.hurt / 10;
                        }
                        else if (bull.img == o.bulletSourceArray[1]) {
                            en.hp -= bull.hurt * 2;
                            // console.log(bull.hurt * 2);
                            bull.isLife = false;
                        }
                        else {
                            en.hp -= bull.hurt;
                            bull.isLife = false;
                        }


                        var hc = new HitCg(o.hitCgSoure, bull.x + bull.w / 2, bull.y + bull.h / 2 - 30, o);
                        o.hitCgArray.push(hc);

                        if (en.hp <= 0) {
                            if (en.enemyType == 3 && en.part1 == true) {
                                en.part1 = false;
                                en.hp = 3000;
                            } else {
                                en.isLife = false;
                                var bo = new Bomb(o.bombSource, en.x + en.w / 2, en.y + en.h / 2, o);
                                o.bombArray.push(bo);
                                o.enemyArray.splice(i, 1);
                                //积分
                                o.addScore(en.enemyType);
                                if (en.enemyType == 3) {
                                    o.bossIsLife = false;
                                }
                            }
                        }
                    }
                }
            });

            if (!bull.isLife) {
                o.bulletArray.splice(index, 1);
            }
        });


        //生成boss子弹
        if (o.bossIsBuild == true && o.bossIsLife == true && o.bossPlane.y >= 100) {
            if (currentTime - o.bossBulletTime > o.bossBulletRe) {
                var bossBullet = new Bullet(o.bulletSourceArray[5]
                    , o.bossPlane.x + o.bossPlane.w / 2 - o.bulletSourceArray[5].width / 2
                    , o.bossPlane.y + o.bossPlane.h * 0.8
                    , o.bulletSourceArray[5].width
                    , o.bulletSourceArray[5].height
                    , o.cxt
                    , o.bossBulletSpeed
                    , o.bossBulletHert
                    , o
                );
                o.bossBulletArray.push(bossBullet);
                o.bossBulletTime = currentTime;
            }
        }
        //检测boss子弹撞击
        this.bossBulletArray.forEach(function (bb, index) {
            if (o.checkRun(bb, o.myPlane)) {
                bb.isLife = false;
                if (o.isShield == false) {
                    o.myPlaneHp -= o.bossBulletHert;
                }
                var hc = new HitCg(o.bombSource, bb.x + bb.w / 2, bb.y + bb.h / 2 + 30, o);
                o.hitCgArray.push(hc);
            } else {
                o.bulletArray.forEach(function (b, i) {
                    if (o.checkRun(b, bb)) {
                        bb.isLife = false;
                        b.isLife = false;
                        o.bulletArray.splice(i, 1);
                        var hc = new HitCg(o.bombSource, bb.x + bb.w / 2, bb.y + bb.h / 2 + 30, o);
                        o.hitCgArray.push(hc);
                    }
                });
            }
            if (!bb.isLife) {
                o.bossBulletArray.splice(index, 1);
            } else {
                bb.bossdraw();
            }
        });

        /*生成敌机*/
        //按难度等级选择生成敌机类型
        switch (this.level) {
            case 0:
                var enemyIndex = parseInt(Math.random() * 0.99 + 2);
                break;
            case 1:
                var enemyIndex = parseInt(Math.random() * 1.99 + 1);
                break;
            case 2:
                var enemyIndex = parseInt(Math.random() * 2.99);
                break;
            case 3:
                var enemyIndex = parseInt(Math.random() * 2.99);
                break;
            case 4:
                var enemyIndex = parseInt(Math.random() * 2.99);
                break;
        }
        var enemyX = parseInt(Math.random() * (o.width - (o.enemyImgArray[enemyIndex].width) / 1.3));
        if (currentTime - this.enemyTime > this.enemyBuildSpeed) {
            // 创建敌人
            var enemyPlane = new EnemyPlane(
                enemyIndex,
                o.enemyImgArray[enemyIndex]
                , enemyX
                , -(o.enemyImgArray[enemyIndex].height) / 1.3
                , (o.enemyImgArray[enemyIndex].width) / 1.3
                , (o.enemyImgArray[enemyIndex].height) / 1.3
                , o.enemySpeed, o);

            var isBuild = true;
            o.enemyArray.forEach(function (en) {
                if (o.checkRun(enemyPlane, en)) {
                    isBuild = false;
                }
            });
            if (isBuild == true) {
                this.enemyArray.push(enemyPlane);
            }
            this.enemyTime = currentTime;

        }
        // 绘制敌人
        this.enemyArray.forEach(function (emeny, index) {
            if (!emeny.isLife) {
                o.enemyArray.splice(index, 1);
            } else {
                emeny.draw();
            }

            // console.log(o.enemyArray.length);

        });

        //检测敌我碰撞
        this.enemyArray.forEach(function (emeny, index) {
            if (o.checkRun(o.myPlane, emeny)) {

                if (o.isShield == false) {

                    if (o.myPlaneHp <= 0) {

                        o.score = "000";
                        o.deadTime = new Date().getTime();
                        o.continueTime = 1500;
                        o.drawDead();
                    }
                    else {
                        o.myPlaneHp -= 10;
                    }
                }
                else {
                    o.addScore(emeny.enemyType)
                }

                if (emeny.enemyType == 3) {
                }
                else {
                    o.enemyArray.splice(index, 1);
                    emeny.isLife = false;
                    var bo = new Bomb(o.bombSource, emeny.x + emeny.w / 2, emeny.y + emeny.h / 2, o);
                    o.bombArray.push(bo);
                }
            }
        });

        //播放音效
        this.voiceArrary.forEach(function (vo, index) {
            vo.play();
            o.voiceArrary.splice(index, 1);

        });

        /*生成道具 */
        var itemIndex = parseInt(Math.random() * 4.99);
        var itemX = parseInt(Math.random() * (o.width - (o.itemSourceArray[itemIndex].width * 0.6)));
        if (currentTime - this.itemTime > this.itemBuildSpeed) {
            var it = new Item(o.itemSourceArray[itemIndex]
                , itemX, -o.itemSourceArray[itemIndex].height
                , o.itemSourceArray[itemIndex].width * 0.6
                , o.itemSourceArray[itemIndex].height * 0.6
                , o.itemSpeed
                , o
                , itemIndex)

            o.itemArray.push(it);
            this.itemTime = currentTime;

        }
        this.itemArray.forEach(function (item, index) {
            if (!item.isLife) {
                o.itemArray.splice(index, 1);
            } else {
                item.draw();
            }
        });
        /*检测道具拾取*/
        this.itemArray.forEach(function (item, index) {
            if (o.checkRun(o.myPlane, item)) {
                item.isLife = false;
                o.itemArray.splice(index, 1);
                switch (item.itemIndex) {
                    case 0:
                        // 回血
                        o.myPlaneHp += 10
                        if (o.myPlaneHp >= o.myPlaneMaxHp) {
                            o.myPlaneHp = o.myPlaneMaxHp;
                        }
                        break;
                    case 1:
                        //双发
                        o.itemGet1 = new Date().getTime();
                        o.bulletFly = 2;
                        break;
                    case 2:
                        //攻击增加
                        o.itemGet2 = new Date().getTime();
                        break;
                    case 3:
                        // 冰冻
                        o.itemVoiceSource3.play();
                        o.itemGet3 = new Date().getTime();

                        break;
                    case 4:
                        //护盾
                        o.itemGet4 = new Date().getTime();
                        break;

                }

            }
        });

        //检测是否通关
        if (o.bossIsLife == false) {
            // o.isPlaying = false;
            o.winGame();


        }

        //护盾时间
        if (currentTime - o.itemGet4 < 2000) {
            o.isShield = true;
        } else {
            o.isShield = false;
        }

        //小飞机恢复
        if (currentTime - o.planeResRe > 1000) {
            if (o.planeRes < o.planeResMax) {
                o.planeRes++
                o.planeResRe = currentTime;
            }
        }
        if (o.planeRes < 0) {
            o.planeRes = o.planeResMax;
            o.drawDead();
        }

        //跟踪弹恢复
        if (currentTime - o.genzongBulletRe > 1500) {
            if (o.genzongBullet < o.genzongBulletsMax) {
                o.genzongBullet++
                o.genzongBulletRe = currentTime;
            }
        }

        //绘制小飞机
        for (var i = 0; i < o.planeRes; i++) {
            this.cxt.drawImage(o.planeResSource
                , i * o.planeResSource.width / 3 + 15
                , o.height - o.planeResSource.height / 3 - 15
                , o.planeResSource.width / 3
                , o.planeResSource.height / 3);
        }

        //绘制跟踪弹存量
        for (var i = 0; i < o.genzongBullet; i++) {
            this.cxt.drawImage(
                o.bulletSourceArray[3]
                , i * o.bulletSourceArray[3].width + 25
                , o.bulletSourceArray[3].height + 10
                , o.bulletSourceArray[3].width
                , o.bulletSourceArray[3].height
            )
        }

        //攻击力增加时间
        if (currentTime - o.itemGet2 < 2000) {
            o.bulletAct = 30;
            // console.log(o.bulletAct);
        } else {
            o.bulletAct = 15;
            // console.log(o.bulletAct);
        }


        //执行冰冻
        if (currentTime - o.itemGet3 < 3500) {

            o.enemyBuildSpeed = 5000;
            o.itemBuildSpeed = 5000;
            o.bossBulletRe = 5000;
            o.bg1.speed = 0;
            o.bg2.speed = 0;
            o.enemyArray.forEach(function (en) {
                en.speed = 0;
            });
            o.bossBulletArray.forEach(function (b) {
                b.speed = 0;
            })

            o.cxt.globalAlpha = 0.3;
        } else {

            o.enemyBuildSpeed = 1000;
            o.itemBuildSpeed = 3000;
            o.bossBulletRe = 800;
            o.bg1.speed = 2;
            o.bg2.speed = 2;
            o.enemyArray.forEach(function (en) {
                en.speed = o.enemySpeed;
            })
            o.bossBulletArray.forEach(function (b) {
                b.speed = o.bossBulletSpeed;
            })
            o.cxt.globalAlpha = 1;
        }





        //boss二阶段buff
        if (o.bossIsBuild == true) {
            if (o.bossPlane.part1 == false) {
                // console.log(currentTime - o.bossBuffTime);
                if (currentTime - o.bossBuffTime > o.bossBuffBuildSpeed) {
                    o.bossBuffType = parseInt(Math.random() * 2.99);
                    // console.log(o.bossBuffType);
                    switch (o.bossBuffType) {
                        case 0:


                            break;
                        case 1:
                            o.bossBuff1 = new Date().getTime();

                            break;
                        case 2:
                            o.bossBuff2 = new Date().getTime();

                            break;
                    }
                    o.bossBuffTime = currentTime;
                }
            }
        }

        //执行bossBuff1  透明无伤
        if (currentTime - o.bossBuff1 < 1000) {
            o.buff1Switch = true;

        } else {
            o.buff1Switch = false;

        }

        //执行bossBuff2 子弹反弹
        if (currentTime - o.bossBuff2 < 1000) {
            o.buff2Switch = true;
            // console.log("开");
        } else {
            o.buff2Switch = false;
            // console.log("关");
        }



        // //绘制死亡画面
        // if (currentTime - o.deadTime < o.continueTime) {

        //     this.cxt.drawImage(this.deadSource, o.width / 2 - this.deadSource.width / 4,
        //         o.height / 2 - this.deadSource.height / 4, this.deadSource.width / 2, this.deadSource.height / 2);
        // }


        //绘制爆炸
        this.bombArray.forEach(function (bom, index) {
            this.o = this;
            if (!bom.isLife) {
                o.bombArray.splice(index, 1);
            } else {
                bom.draw();
            }
        });

        //绘制打击
        this.hitCgArray.forEach(function (hc, index) {
            this.o = this;
            if (!hc.isLife) {
                o.hitCgArray.splice(index, 1);
            } else {
                hc.draw();
            }
        })
    }



    //生成跟踪弹
    this.buildGenZongBullet = function () {
        var o = this;
        var bulletX = this.myPlane.x + this.myPlane.w / 2;
        var bullet = new Bullet(this.bulletSourceArray[3]
            , bulletX - this.bulletSourceArray[3].width
            , this.myPlane.y - this.bulletSourceArray[3].height / 2
            , this.bulletSourceArray[3].width
            , this.bulletSourceArray[3].height,
            o.cxt, o.bulletSpeed, o.bulletAct, o);
        o.genzongBullet--;
        this.bulletArray.push(bullet);
    }

    //死亡初始化
    this.drawDead = function () {
        var o = this;
        //死亡后属性重置
        // o.enemyArray.forEach(function (e) {
        //     e.isLife = false;
        // });
        // o.itemArray.forEach(function (i) {
        //     i.isLife = false;
        // });
        // o.bulletArray.forEach(function (i) {
        //     i.isLife = false;
        // });
        // o.bulletArray2.forEach(function (i) {
        //     i.isLife = false;
        // });
        // o.itemGet1 = 0;
        // o.itemGet2 = 0;
        // o.itemGet3 = 0;
        // o.itemGet4 = 0;


        //绘制死亡背景
        // o.cxt.globalAlpha = 0.5;
        o.cxt.globalAlpha = 1;
        o.cxt.drawImage(o.deadBgSoure, 0, 0, o.width, o.height);
        o.cxt.restore();

        //先设置透明度 再restore 就可以设置透明度
        // o.cxt.globalAlpha = 0.5;
        o.cxt.drawImage(o.deadSource, o.width / 2 - o.deadSource.width / 4,
            o.height / 2 - o.deadSource.height / 4, o.deadSource.width / 2, o.deadSource.height / 2);
        // o.cxt.restore();

        o.cxt.beginPath();
        o.cxt.fillStyle = "F00";
        o.cxt.font = "35px 楷体";
        var str = "请按\"P\"键重来"
        o.cxt.fillText(str, o.width / 2, o.height / 2 - o.deadSource.height / 4 + o.deadSource.height / 2 + 40);
        o.cxt.closePath();
        o.genzongBullet = o.genzongBulletsMax;
        o.myPlaneHp = o.myPlaneMaxHp;
        o.planeRes = -1;
        o.genzongBullet = -1;
        o.isPlaying = false;
        o.isDead = true;
        // cancelAnimationFrame(o.animationID);
    }

    // 打印血量
    this.drawHp = function () {
        var o = this;
        this.cxt.fillStyle = "#f00";
        this.cxt.fillRect(60, 25, o.myPlaneHp * 3, 20);
        this.cxt.strokeStyle = "#f00";
        this.cxt.strokeRect(60, 25, o.myPlaneMaxHp * 3, 20);
        this.cxt.drawImage(this.hpSpurce, 20, 20
            , this.hpSpurce.width, this.hpSpurce.height);
    }

    //打印boss血量
    this.drawBossHp = function () {

        var o = this;
        this.cxt.save();
        if (o.bossPlane.part1 == true) {
            this.cxt.shadowColor = "#2E64FE";
            this.cxt.shadowBlur = "20";
            this.cxt.fillStyle = "#2E64FE";
            this.cxt.strokeStyle = "#2E64FE";
        } else {
            this.cxt.shadowColor = "#f00";
            this.cxt.shadowBlur = "20";
            this.cxt.fillStyle = "#f00";
            this.cxt.strokeStyle = "#f00";
        }


        this.cxt.fillRect(o.width * 0.2, 10, o.width * 0.6 * o.bossPlane.hp / 3000, 10);
        this.cxt.strokeRect(o.width * 0.2, 10, o.width * 0.6, 10);
        this.cxt.restore();

    }

    //计算积分
    this.addScore = function (enemyType) {

        var add = 0;
        //不同类型积分不同
        switch (enemyType) {
            case -1: add = -100;
                break;
            case 0: add = 300
                break;
            case 1: add = 200
                break;
            case 2: add = 100
                break;
        }
        var numScore = parseInt(this.score);
        numScore += add;
        if (numScore < 0) {
            numScore = 0;
        }
        this.score = numScore + "";
    }


    //设置游戏难度
    this.gameLevel = function () {
        var o = this;
        var numScore = parseInt(this.score);
        if (numScore >= 0 && numScore < 1000) {
            o.level = 0;
            // o.bulletType = 0;


        }
        else if (numScore >= 1000 && numScore < 2000) {
            o.level = 1;
            o.enemyBuildSpeed = 800;
            // o.bulletType = 0;
        }
        else if (numScore >= 2000 && numScore < 3000) {
            o.level = 2;
            o.enemyBuildSpeed = 600;

            // o.bulletType = 0;
        }
        else if (numScore >= 3000 && numScore < 4000) {
            o.level = 3;
            o.enemyBuildSpeed = 500;

            // o.bulletType = 0;
        }
        else if (numScore >= 4000) {
            o.level = 4;
            o.enemyBuildSpeed = 400;
            if (o.bossIsBuild == false) {

                o.bossPlane = new EnemyPlane(
                    3,
                    o.enemyImgArray[3]
                    , o.width / 2 - (o.enemyImgArray[3].width / 2) * 3
                    , -(o.enemyImgArray[3].height) * 3
                    , (o.enemyImgArray[3].width) * 3
                    , (o.enemyImgArray[3].height) * 3
                    , o.enemySpeed, o);
                o.enemyArray.push(o.bossPlane);
                o.bossIsBuild = true;
            }
            //boss二阶段  (放这里不受冰冻效果)
            if (o.bossPlane.part1 == false) {
                o.bossPlane.speed = o.enemySpeed * 2;
                o.bossBulletSpeed = 4;
                o.bossBulletRe = 600;
                o.bossBulletHert = 10;
            }

            // o.bulletType = 0;
        }
        this.bgNow = this.bgImgArray[this.level];
        this.bg1.img = this.bgNow;
        this.bg2.img = this.bgNow;
    }

    //绘制通关页面
    this.winGame = function () {
        var o = this;
        o.cxt.globalAlpha = 1;
        o.cxt.drawImage(o.deadBgSoure, 0, 0, o.width, o.height);
        o.cxt.restore();
        o.cxt.beginPath();
        o.cxt.fillStyle = "F00";
        o.cxt.font = "400px 楷体";
        var str2 = "秀"
        o.cxt.fillText(str2, o.width / 2 - 250, o.height / 2 + 30, 800, 800);
        o.cxt.closePath();
        o.cxt.beginPath();
        o.cxt.fillStyle = "F00";
        o.cxt.font = "35px 楷体";
        var str = "通关成功！  " + "可按\"P\"键重新挑战！"
        o.cxt.fillText(str, o.width / 2 - 300, o.height / 2 + 130, 500, 50);
        o.cxt.closePath();
        o.genzongBullet = o.genzongBulletsMax;
        o.myPlaneHp = o.myPlaneMaxHp;
        o.planeRes = -1;
        o.genzongBullet = -1;
        o.isPlaying = false;
        o.isDead = true;
        o.isWin = true;
    }



    //绘制暂停页面
    this.pause = function () {
        var o = this;
        o.cxt.save();
        o.cxt.beginPath();
        o.cxt.shadowColor = "#FFF";
        o.cxt.shadowBlur = "50";
        o.cxt.fillStyle = 'rgba(255,255,255,0.5)';
        o.cxt.arc(o.width / 2, o.height / 2, 50, 0, 2 * Math.PI, true);
        o.cxt.closePath();
        o.cxt.fill();
        o.cxt.fillStyle = 'rgba(255,0,0,1)';
        o.cxt.font = "30px 楷体";
        o.cxt.fillText("暂停", o.width / 2 - 30, o.height / 2 + 10);
        o.cxt.restore();
    }

    // 打印分数
    this.drawScore = function () {
        var o = this;
        var num = parseInt(o.score);
        var x = 1;
        var index = 0;
        for (var i = 0; i < o.score.length; i++) {

            index = parseInt(num / x % 10)
            o.cxt.drawImage(o.numberArray[index], o.width - 30 - 45 * (i + 1), 20, o.numberArray[index].width, o.numberArray[index].height)
            x *= 10;
        }
    }

    this.planeKeyMove = function (dir) {
        var o = this;
        var movespeed = 50;
        switch (dir) {
            case "up":
                o.myPlane.move(o.myPlane.x + o.myPlane.w / 2, o.myPlane.y + o.myPlane.h / 2 + - movespeed)
                break;
            case "down":
                o.myPlane.move(o.myPlane.x + o.myPlane.w / 2, o.myPlane.y + o.myPlane.h / 2 + movespeed)
                break;
            case "left":
                o.myPlane.move(o.myPlane.x + o.myPlane.w / 2 - movespeed, o.myPlane.y + o.myPlane.h / 2)
                break;
            case "right":
                o.myPlane.move(o.myPlane.x + o.myPlane.w / 2 + movespeed, o.myPlane.y + o.myPlane.h / 2)
                break;
        }
    }
}

window.onload = function () {
    var gamebox = document.getElementById('gamebox');
    var game = new Game(gamebox);
    game.starGame();

}