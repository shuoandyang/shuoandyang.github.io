//鼠标滚轮改变导航背景色
document.documentElement.onmousewheel = function (event) {  //dom滚动事件

    let scrollY = document.documentElement.scrollTop; //获取dom滚动位置
    let gunDong = event.wheelDelta;     //获取滚动方向

    if (gunDong > 0 && scrollY < 100) {

        document.getElementById("daoHao").style.backgroundColor = 'rgb(0,0,0,0)'
    } else {

        document.getElementById("daoHao").style.backgroundColor = 'rgb(0,0,0,0.85)'
    }

}

//无缝滚动

let chuShi = 0;


gunDong()
function gunDong(){

    //重新开始
    if (chuShi<-3000){
        chuShi=0;
    }

    //停顿
    let n = chuShi%1515===0?2000:5;
    setTimeout(gunDong,n)

    //赋值
    $(".wuFeng").css("margin-left", chuShi+'px');

    //减少变量
    chuShi-=5

    let a = Math.floor(chuShi/-1515);
    yanSe(a)
}

//改变图片上的下方颜色
function yanSe(a){

    $(".tuXian").css("background-color","#b2b2b2")
    if (a===0){
        $(".tuXian:eq(0)").css("background-color","orangered")
    }else {
        $(".tuXian:eq(1)").css("background-color","orangered")
    }

}

//点击切换
let dianJI = document.querySelector('.wuFeng');

dianJI.onclick = function (){
    let a = Math.floor(chuShi/-1515);
    if (a===0){
        $(".wuFeng").css("margin-left", -1515+'px');
        chuShi = -1515;
    }else {
        $(".wuFeng").css("margin-left", -3030+'px');
        chuShi = -3030;
    }
}



