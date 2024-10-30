//第二个盒子 鼠标经过显示logo开始
        $(function () {
            let shouJi = $("ul#shouJI li")

            //显示
            shouJi.on("mouseenter", "a", function () {
                $("#yin").slideDown()
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

// 购物车效果开始---------------------------
    let button = $(".goWuChuBin"); //获取需要的元素
    let shuLian = 0; //记录购物车最终数量

    //动画最终位置
    button.click(function (){
        $(this).append("<span class=\"goWuChu\">①</span>") //添加一个方框

        let a = $(this).children("span") //获取需要动画的方框
        let b = $("#goWuChu")   //获取目标坐标
        let c = $("#goWuChuYuan") //获取购买数量

        shuLian++;  //点击机会增加购物车数量



        //获取目标坐标
        let bx = parseInt(b.offset().top);
        let by = parseInt(b.offset().left);

        //获取被点击的元素坐标
        let ax = parseInt(a.offset().top)
        let ay = parseInt(a.offset().left)

        //计算需要移动的距离
        let top = bx-ax;
        let left = by-ay+40;

        //进行移动
        $(a).animate({   //执行动画
            top:  top + "px",
            left : left + "px",
        },250,function (){  //执行完删除元素
            $(a).remove() //删除

            c.html(shuLian) //// 在购物车设置一个圆圈
            c.css({
                "color":"var(--zi--bai)"

            })
        })

    })


// 购物车效果结------------------------------


// 展开购物车界面结束------------------
    //获取点击展开购物车  获取的li
    $(".rightGoWuChuApp").click(function (){
        $(".goWuChuJieMian").toggle()
    })


    //获取点击展开购物车
    $("#goWuChuBeiJing").click(function () {  //开启按钮


        $(".goWuChuJieMian").show(500)

    })
    //获取关闭按钮事件
    $(".zha_anNu").click(function (){ //关闭按钮

        $(".goWuChuJieMian").hide(500)
    })


// 展开购物车界面结束----------------------

//购物车发送请求存储到指定用户购物车数据库信息开始------------------

let shu = 0; // 共计的数量初始值
let jia = 0; //合计初始值
let shuLiangShu = 0; //已经选择初始值
let shangPinShuLiang = 1; //商品数量初始值




    //继承上面获取的button
    button.click(function (){

        let name = $(".name").html() //获取请求参数

        $.ajax({
            url:"http://localhost:8080/fwq/shangPin",
            type: "get",
            dataType:"json",
            data:{"name":name},
            success: function (shuJujson){
                table(shuJujson.tuPin, shuJujson.name, shuJujson.jinE);
            },
            error:function (){
                alert("请求失败")
            },
            contentType: "application/json",


        })

        shu++
        gongJiShuLiang(shu)
    })

//往表格添加加数据
function table(x, y, z) {

    let table = document.querySelector(".biaoBox");
    let tr = table.insertRow(0);

    let tr00 = tr.insertCell(0);
    tr00.innerHTML = "<input  class='quanXuan' name='chk' onclick='gongJi(this)'  type='checkbox''>";

    // 图片路径
    let luJing = x;
    let tiPin = '<img src="' + luJing + '" alt="">';
    let tr01 = tr.insertCell(1);
    tr01.innerHTML = tiPin;

    let tr02 = tr.insertCell(2);
    tr02.innerText = y;

    let tr03 = tr.insertCell(3);
    tr03.innerText = z;

    shangPinShuLiang = 1;
    let tr04 = tr.insertCell(4);
    tr04.innerHTML = "<div class='jiaJian'><span onclick='jianQu(this)'>-</span><span>1</span><span onclick='tianJia(this)'>+</span></div>";

    let tr05 = tr.insertCell(5);
    tr05.innerHTML = "<input class='shanChu' type = 'button'  onclick='shanChu(this)' value = '删除'/>";

    let zoJinEe = z * 1; //单个商品总价格
    jia += zoJinEe
    heJi(jia)

}

//添加数量操作
function tianJia(a) {

    //往总价增加
    let shangPinDanJia= a.parentNode.parentNode.parentNode.children[3].innerText; //获取每个商品单价
    console.log(shangPinDanJia)
    jia +=shangPinDanJia*1;
    heJi(jia);


    a.parentNode.children[1].innerText++; //选择的是商品数量

}

//减去操作
function jianQu(a) {

    let shu = a.parentNode.children[1].innerText; //选择的是数量
    if (shu > 1) {
        a.parentNode.children[1].innerText--;
    }

    //往总价减少
    let shangPinDanJia= a.parentNode.parentNode.parentNode.children[3].innerText; //获取每个商品单价
    if (shu>1){
        jia-=shangPinDanJia;
        heJi(jia);
    }



}


// 删除操作
function shanChu(a) {
    // 点击删除
    let tr = a.parentNode.parentNode;
    tr.style.display = 'none';

    // 删除减去合计的数字
    let td = a.parentNode.parentNode.children[3].innerText
    jia -= td * 1
    heJi(jia)

    // 删除减去总商品的数字
    shu--;
    gongJiShuLiang(shu)

    //删除时 减去已选择数量
    let xuanZeKuang = a.parentNode.parentNode.children[0].children[0]
    if (xuanZeKuang.checked) {
        shuLiangShu--;
        gongJiShu(shuLiangShu);
    }

    //删除 减少 前面页面购物车圆点的数量
    shuLian--;
    $("#goWuChuYuan").html(shuLian)

}


// 全选框
function quanXuanShanChu(a) {
    shuLiangShu = 0;
    let name = document.getElementsByName("chk");
    for (let shuLiang = 0; shuLiang < name.length; shuLiang++) {
        if (name[0].checked) {
            shuLiangShu = shuLiang;
            name[shuLiang].checked = true;
        } else {
            shuLiangShu = 0;
            name[shuLiang].checked = false
        }
    }
    gongJiShu(shuLiangShu);


}


// 已经选择
function gongJi(a) {

    console.log(a)
    if (a.checked) {
        shuLiangShu++
    } else {
        shuLiangShu--
    }
    gongJiShu(shuLiangShu)
}


//共计更改数量的更改
function gongJiShuLiang(a) {
    document.getElementById("gongJiShuLiang").innerText = a;
}

//已经选择数量的更改
function gongJiShu(a) {
    document.getElementById("gongji").innerText = a;

}

//一共钱数 合计：

function heJi(a) {
    document.getElementById("heJi").innerText = a;
}


//购物车发送请求存储到指定用户购物车数据库信息结束-------------



