//鼠标经过显示logo开始
        $(function () {
            let shouJi = $("ul#shouJI li")

            //显示
            shouJi.on("mouseenter", "a", function () {
                $("#yin").slideDown(200)
            })
            //隐藏
            $("ul#xian").mouseleave(function () {
                $("#yin").slideUp()
            })
            //隐藏
            shouJi.mouseleave(function () {
                $("#yin").slideUp()
            })


        })
//鼠标经过显示logo结束

//无缝滚动开始
        let chuShi = 0;  //初始图片参数
        let img = document.getElementById("box2").getElementsByTagName("img");
        // 计时器控制图片位置
        setInterval(() => {
            if (chuShi >= img.length || chuShi<0) {
                chuShi = 0

            }
            qieHuan(chuShi)
            anNiu(chuShi)
            chuShi++;
        }, 3000)

        qieHuan(0)

        //根据参数切换图片
        function qieHuan(a) {
            if (a>img.length) a=img.length;
            for (let i = 0; i < img.length; i++) {
                img[i].className = " ";
            }
                img[a].className = 'op';
        }

  //四个按钮的
        let anNiuDom = $("#zha_annu li");
        //图片位置
        $(anNiuDom).on('click',function(){
            chuShi=this.value
            qieHuan(chuShi)
            anNiu()
        })
        //颜色
        function anNiu(){
            //颜色
            $(anNiuDom).css("background-color"," rgb(176,176,176,0)")
          $("#zha_annu li:eq("+chuShi+")").css("background-color","white")
        }
   //左右切换
        //控制左
        $(".zha_dianJiKua li:eq(1)").click(function (){
            chuShi--;
            if (chuShi<0) chuShi=img.length-1;
            anNiu()
            qieHuan(chuShi)
        })
        //控制右边
        $(".zha_dianJiKua li:eq(0)").click(function (){
            chuShi++;
            if (chuShi>=img.length-1)chuShi = 0;
            anNiu()
            qieHuan(chuShi)

        })

//无缝滚动结束
//鼠标经过文字栏显示开始
$(function () {
    let wenZiLan = $("ul#wenZiLan")

    //显示
    wenZiLan.on("mouseenter", "li", function () {
        $("#wenZiLanYin").show()
    })
    //隐藏
    $("ul#xian").mouseleave(function () {
        $("#wenZiLanYin").hide()
    })
    //隐藏
    wenZiLan.mouseleave(function () {
        $("#wenZiLanYin").hide()
    })


})

//鼠标经过文字栏显示结束

//第七盒子鼠标经过开始
    let a = $(".qiYe");
    a.mousemove(function (){

        a.css({
            "color":"#b0b0b0",
            "border-bottom":"0px solid var(--zi-or)"
        })
        $(this).css({
            "color":"#ff6700",
            "border-bottom":"2px solid var(--zi-or)"
        });
        console.log(this)
    })
//第七盒子鼠标经过结束

