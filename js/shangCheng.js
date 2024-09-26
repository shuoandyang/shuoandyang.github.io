var a = document.getElementById("guoDongYe");
var b = document.getElementsByClassName("dongHua");
var c = document.getElementById("guoDong");
var time;
var chuShiZhi = -720;
run();
function run(){

    if (chuShiZhi<=-2800){
        chuShiZhi = -700;
    }

    var n = (chuShiZhi%-700==0)?n=2000 : n=1;
    chuShiZhi-=10;
    a.style.marginLeft = chuShiZhi + 'px';
    time =  setTimeout(run,n);




    var tushu = parseInt(chuShiZhi/-800);
    shu(tushu);

}
function shu(x){


    for (var i= 0; i<b.length;i++){
        b[i].style.opacity = 0.5;
    }
    b[x+1].style.opacity = 1;
}

var box = document.getElementsByClassName("box");
    c.onmousemove = function (){
        clearTimeout(time);
        for (var m=0;m<box.length;m++){

            box[m].style.opacity = 0.5;
            box[m].style.opacity = 0.5;
        }

    }
    c.onmouseout = function (){
        run();
        for (var k=0;k<box.length;k++) {
            box[k].style.opacity = 0;
            box[k].style.opacity = 0;
        }
    }

    var shuZhi=0;
    function qieHuaYan(x,y){
        let  a = x.parentNode;

        if (shuZhi>1){
            a.style.background = 'white';
            x.style.marginLeft = 0 + 'px';
            x.style.background = 'black';
            shuZhi=0;
            document.body.style.backgroundColor = 'white';
        }else {
            a.style.background = 'black';
            x.style.marginLeft = 70 + 'px';
            x.style.background = 'white';
            shuZhi=2;
            console.log(shuZhi);
            document.body.style.backgroundColor = 'black';
        }



    }


