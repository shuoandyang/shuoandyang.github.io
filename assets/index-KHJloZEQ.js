import{e as v,k as M,l as S,v as V,u as s,o as p,c as f,b as e,n as x,m as B,s as D,p as I,t as c,r as w,a as _,q as y,x as b,y as J,z as C,j as T,F as $,i as N,A as z}from"./index-Bx3SwnAl.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as L}from"./userShuJu-CbBS90hw.js";import{u as Q}from"./mk03neiRong-CUuUTSrw.js";import{u as E}from"./mo01TianQi-B4rOY6ci.js";import{u as R}from"./mk04JiLu-BcWLKYgb.js";import"./xinXi-BzZkxiCJ.js";const U={__name:"xm01daoHang",setup(g){let u=v(!0),o=v("");M(()=>{document.documentElement.onmousewheel=a=>{let n=document.documentElement.scrollTop;a.wheelDelta<0?(u.value=!1,o.value="b"):n<210?(u.value=!0,o.value="a"):u.value=!0}});function l(){scrollTo(0,0)}function i(){B.push({path:"sheZhi"})}return(a,n)=>S((p(),f("div",{class:x(s(o))},[n[0]||(n[0]=e("ul",null,[e("li",null,"你好")],-1)),e("ul",null,[e("li",{onClick:l},"回到顶部"),e("li",{onClick:i},"设置")])],2)),[[V,s(u)]])}},Z=k(U,[["__scopeId","data-v-d54ed94e"]]),q={class:"flip-clock"},F={class:"flip-card"},H={class:"flip-card"},A={class:"flip-card"},G={class:"flip-card"},K={class:"flip-card"},X={class:"flip-card"},Y={class:"flip-card"},O={class:"flip-card"},P={class:"flip-card"},W={__name:"xm02daoJiShi01",setup(g){const{JiShiQiShuJuS:u}=D(L());v("xm01daoJiShi");let o=I({day0:"0",day1:"0",day2:"0",hour0:"0",hour1:"0",min0:"0",min1:"0",sec0:"0",sec1:"0"});return M(()=>{setInterval(()=>{let l=u.value,i=new Date().getTime()/1e3,a=Math.floor(l-i),n=Math.floor(a/3600/24),d=Math.floor(a/3600%24),m=Math.floor(a/60%60),t=Math.floor(a%60);n<10?n="00"+n:n<100&&(n="0"+n),d<10&&(d="0"+d),m<10&&(m="0"+m),t<10&&(t="0"+t),o.day0=n.toString().slice(0,1),o.day1=n.toString().slice(1,2),o.day2=n.toString().slice(2,3),o.hour0=d.toString().slice(0,1),o.hour1=d.toString().slice(1,2),o.min0=m.toString().slice(0,1),o.min1=m.toString().slice(1,2),o.sec0=t.toString().slice(0,1),o.sec1=t.toString().slice(1,2)},1e3)}),(l,i)=>(p(),f("div",q,[e("div",F,c(s(o).day0),1),e("div",H,c(s(o).day1),1),e("div",A,c(s(o).day2),1),i[0]||(i[0]=e("em",{class:"divider"},":",-1)),e("div",G,c(s(o).hour0),1),e("div",K,c(s(o).hour1),1),i[1]||(i[1]=e("em",{class:"divider"},":",-1)),e("div",X,c(s(o).min0),1),e("div",Y,c(s(o).min1),1),i[2]||(i[2]=e("em",{class:"divider"},":",-1)),e("div",O,c(s(o).sec0),1),e("div",P,c(s(o).sec1),1)]))}},j=k(W,[["__scopeId","data-v-78c29829"]]),tt={key:0,target:"_blank",method:"get",action:"https://cn.bing.com/"},et={__name:"xm03souSuo",setup(g){const{fenLeiGongNeng:u}=Q(),{souSuoTianQi:o}=E();let l=v(""),i=v(0);function a(m){i.value=m}let n=v(0);function d(m){n.value=m}return(m,t)=>{const h=w("router-link");return p(),f("div",null,[e("ul",null,[e("li",null,[_(h,{to:"/",onClick:t[0]||(t[0]=r=>{d(0),a(0),s(u)("")}),class:x(s(i)===0?"ma":"")},{default:y(()=>t[10]||(t[10]=[T("百度搜索")])),_:1},8,["class"])]),e("li",null,[_(h,{to:"/",onClick:t[1]||(t[1]=r=>{d(1),a(1),s(u)(s(l))}),class:x(s(i)===1?"ma":"")},{default:y(()=>t[11]||(t[11]=[T("站内搜索")])),_:1},8,["class"])]),e("li",null,[_(h,{to:"/tianQi",onClick:t[2]||(t[2]=r=>{d(2),a(2)}),class:x(s(i)===2?"ma":"")},{default:y(()=>t[12]||(t[12]=[T(" 天气搜索 ")])),_:1},8,["class"])])]),s(n)===0?(p(),f("form",tt,[S(e("input",{class:"ss",type:"text",placeholder:"百度一下?","onUpdate:modelValue":t[3]||(t[3]=r=>J(l)?l.value=r:l=r),name:"q"},null,512),[[b,s(l)]]),t[13]||(t[13]=e("input",{class:"tt",type:"submit",value:"搜索！"},null,-1))])):s(n)===1?(p(),f("form",{key:1,class:"to",onSubmit:t[6]||(t[6]=C(()=>{},["prevent"]))},[S(e("input",{class:"ss",type:"text",placeholder:"今天想要了解什么呢",onKeyup:t[4]||(t[4]=r=>s(u)(s(l))),"onUpdate:modelValue":t[5]||(t[5]=r=>J(l)?l.value=r:l=r)},null,544),[[b,s(l)]]),t[14]||(t[14]=e("input",{class:"tt",type:"submit",value:"搜索！"},null,-1))],32)):(p(),f("form",{key:2,class:"to",target:"_blank",onSubmit:t[9]||(t[9]=C(()=>{},["prevent"]))},[S(e("input",{class:"ss",type:"text",placeholder:"请输入城市名","onUpdate:modelValue":t[7]||(t[7]=r=>J(l)?l.value=r:l=r)},null,512),[[b,s(l)]]),e("input",{class:"tt",type:"submit",value:"搜索！",onClick:t[8]||(t[8]=r=>s(o)(s(l)))})],32))])}}},st=k(et,[["__scopeId","data-v-8759b683"]]),ot={__name:"xm04JiLu",setup(g){const{JiLuShuJuS:u}=D(R());return(o,l)=>{const i=w("router-link");return p(),f("ul",null,[(p(!0),f($,null,N(s(u),a=>(p(),z(i,{to:a.to,key:a.id},{default:y(()=>[e("li",null,c(a.name),1)]),_:2},1032,["to"]))),128))])}}},lt=k(ot,[["__scopeId","data-v-3f702cc4"]]),ct={__name:"index",setup(g){return(u,o)=>{const l=w("router-view");return p(),f($,null,[_(Z),_(j),_(st),_(lt),_(l)],64)}}};export{ct as default};