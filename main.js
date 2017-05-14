   //   轮播幻灯片
               
                var theContainer = document.getElementById('the-container');
                var theList = document.getElementById('the-list');
                var buttons = document.getElementById('buttons').getElementsByTagName('span');
                var thePrev = document.getElementById('the-prev');
                var theNext = document.getElementById('the-next');
                var index = 1;
                var timer;

                function theAnimate(theOffset) {
                    //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
                    //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
                    var theNewLeft = parseInt(theList.style.left) + theOffset;
                    theList.style.left = theNewLeft + 'px';
                    //无限滚动判断
                    if (theNewLeft > -460) {
                        theList.style.left = -1840 + 'px';
                    }
                    if (theNewLeft < -1840) {
                        theList.style.left = -460 + 'px';
                    }
                }

                function play() {
                    //重复执行的定时器
                    timer = setInterval(function () {
                        theNext.onclick();
                    }, 2000)
                }

                function stop() {
                    clearInterval(timer);
                }

                function buttonsShow() {
                    //将之前的小圆点的样式清除
                    for (var i = 0; i < buttons.length; i++) {
                        if (buttons[i].className == "on") {
                            buttons[i].className = "";
                        }
                    }
                    //数组从0开始，故index需要-1
                    buttons[index - 1].className = "on";
                }
                thePrev.onclick = function () {
                    index -= 1;
                    if (index < 1) {
                        index = 4
                    }
                    buttonsShow();
                    theAnimate(460);
                };
                theNext.onclick = function () {
                    //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
                    index += 1;
                    if (index > 4) {
                        index = 1
                    }
                    theAnimate(-460);
                    buttonsShow();
                };
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].onclick = function () {
                        //优化，当前图片点击当前的小圆点不执行以下代码。
                        if (this.className == "on") {
                            return;
                        }
                        /* 这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法 */
                        /* 由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
                        var clickIndex = parseInt(this.getAttribute('index'));
                        var theOffset = 460 * (clickIndex - index); //这个index是当前图片停留时的index
                        theAnimate(theOffset);
                        index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
                        buttonsShow();
                    }
                }
                theContainer.onmouseover = stop;
                theContainer.onmouseout = play;
                play();
      
                //  tab选项卡
                var divLi = document.getElementById("getLi");
                var allLi = divLi.getElementsByTagName('li');
                var Div = document.getElementById("show")
                var aDiv = Div.getElementsByTagName("div");
                for (var i = 0; i < allLi.length; i++) {
                    allLi[i].index = i; //注意，这里让index等于i是为了点击时切换到相应的div
                    allLi[i].onclick = function () {
                        for (var j = 0; j < allLi.length; j++) {
                            aDiv[j].style.display = "none";
                            allLi[j].style.color = "#93B4C2";
                            allLi[j].style.borderBottom = "none"
                        };
                        this.style.color = "#fff";
                        this.style.borderBottom = "2px solid #E99149";
                        aDiv[this.index].style.display = "block";
                    }
                };

                    //  相册轮播
                    var list = document.getElementById('list');
                    var prev = document.getElementById('prev');
                    var next = document.getElementById('next');

                    function animate(offset) {
                        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
                        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
                        var newLeft = parseInt(list.style.left) + offset;
                        list.style.left = newLeft + 'px';
                        if (newLeft < -920) {
                            list.style.left = -184 + 'px';
                        }
                        if (newLeft > -184) {
                            list.style.left = -920 + 'px';
                        }

                    }
                    prev.onclick = function () {
                        animate(184);
                    }
                    next.onclick = function () {
                        animate(-184);
                    }

                    // table鼠标滑动画出特效
                    var tBody = document.getElementById("tBody");
                    var rows = tBody.getElementsByTagName("tr")
                    for (var i = 0; i < rows.length; i++) {
                        rows[i].onmouseover = function () {

                            this.style.backgroundColor = "#394E5E";

                        }
                        rows[i].onmouseout = function () {
                            this.style.backgroundColor = ""

                        }
                    }