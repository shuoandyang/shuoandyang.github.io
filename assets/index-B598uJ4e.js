import{B as re,p as F,s as Z,o as A,c as _,F as O,i as H,C as Y,b as g,t as k,u as m,e as G,n as oe,D as $,l as se,v as ae,k as ue,a as z}from"./index-Bx3SwnAl.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as j}from"./mk03neiRong-CUuUTSrw.js";import{u as le}from"./mk03huiFuWangZhan-Ck-BAVSL.js";import{u as ce}from"./mk04JiLu-BcWLKYgb.js";import"./xinXi-BzZkxiCJ.js";const K=re("jingXuan",()=>{let r=F({mame:"nh",shuJu:[{id:0,lianJie:"https://www.bilibili.com/",img:"/img/blbl.png",name:"哔哩哔哩",miaoShu:"教学质量非常好的短视频",zhuangTai:"点击进入",order:0},{id:29,lianJie:"https://www.csdn.net/",img:"/img/csnd.jpg",name:"博客",miaoShu:"解决问题",zhuangTai:"点击进入",order:0},{id:30,lianJie:"https://www.wenshushu.cn/",img:"/img/wenshushu.jpg",miaoShu:"免费||网盘",name:"文叔叔",zhuangTai:"点击进入",order:0},{id:31,lianJie:"https://dazi.kukuw.com/list___1_17272957_2.html",img:"/img/DZLX.jpg",name:"打字练习",miaoShu:"免费||网盘",zhuangTai:"点击进入",order:0},{id:32,lianJie:"https://github.com/",img:"/img/blbl.png",name:"github",miaoShu:"免费",zhuangTai:"点击进入",order:0},{id:33,lianJie:"https://www.iciba.com/",img:"/img/jscb.jpg",name:"金山词霸",order:0}]});function e(t){!r.shuJu.some(i=>i.id===t.id)&&(r.shuJu.shift(),r.shuJu.push(t))}return{jingXuanShuJu:r,tianJiaMeiRuJingXuanShuJu:e}},{persist:!0}),he={class:"jingXuan"},de=["href"],fe=["src"],ve={__name:"xm01meiRuJingXuan",setup(r){const{jingXuanShuJu:e}=Z(K());return(t,n)=>(A(),_("ul",he,[(A(!0),_(O,null,H(m(e).shuJu,i=>(A(),_("li",{key:i.id,style:Y(i)},[g("a",{href:i.lianJie,target:"_blank"},[g("img",{src:i.img,alt:""},null,8,fe),g("p",null,k(i.name),1)],8,de)],4))),128))]))}},pe=W(ve,[["__scopeId","data-v-14730825"]]),ge={class:"pcde",id:"pcde"},me=["onMousemove","onMouseleave","onClick"],Ae={__name:"xm02fenLei",setup(r){const{fenLeiGongNeng:e}=j();let t=F({name0:"显示全部",name1:"Ai类",name2:"游戏类",name3:"学习类",name4:"软件类",name5:"默认类"}),n=G("name0"),i=G("name0");function s(u){i.value=u}function o(u){n.value=u}function d(u){n.value=i.value}return(u,a)=>(A(),_("div",ge,[(A(!0),_(O,null,H(m(t),(l,c)=>(A(),_("button",{key:c,class:oe(m(n)===c?"b":""),onMousemove:h=>o(c),onMouseleave:h=>d(),onClick:h=>{s(c),m(e)(l)}},k(l),43,me))),128))]))}},_e=W(Ae,[["__scopeId","data-v-36923120"]]);function ee(r,e){return r(e={exports:{}},e.exports),e.exports}var D=ee(function(r){var e=Object.prototype.toString,t=Object.prototype.propertyIsEnumerable,n=Object.getOwnPropertySymbols;function i(s){return typeof s=="function"||e.call(s)==="[object Object]"||Array.isArray(s)}r.exports=function(s){for(var o=arguments.length,d=Array(o>1?o-1:0),u=1;u<o;u++)d[u-1]=arguments[u];if(!i(s))throw new TypeError("expected the first argument to be an object");if(d.length===0||typeof Symbol!="function"||typeof n!="function")return s;var a=!0,l=!1,c=void 0;try{for(var h,f=d[Symbol.iterator]();!(a=(h=f.next()).done);a=!0){var v=h.value,y=n(v),p=!0,w=!1,R=void 0;try{for(var C,L=y[Symbol.iterator]();!(p=(C=L.next()).done);p=!0){var E=C.value;t.call(v,E)&&(s[E]=v[E])}}catch(S){w=!0,R=S}finally{try{!p&&L.return&&L.return()}finally{if(w)throw R}}}}catch(S){l=!0,c=S}finally{try{!a&&f.return&&f.return()}finally{if(l)throw c}}return s}}),N=Object.freeze({__proto__:null,default:D,__moduleExports:D}),ye=N&&D||N,te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Q=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},I=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),J=ee(function(r){var e=Object.prototype.toString,t=function(o){return o!=="__proto__"&&o!=="constructor"&&o!=="prototype"},n=r.exports=function(o){for(var d=arguments.length,u=Array(d>1?d-1:0),a=1;a<d;a++)u[a-1]=arguments[a];var l=0;for(s(o)&&(o=u[l++]),o||(o={});l<u.length;l++)if(i(u[l])){var c=!0,h=!1,f=void 0;try{for(var v,y=Object.keys(u[l])[Symbol.iterator]();!(c=(v=y.next()).done);c=!0){var p=v.value;t(p)&&(i(o[p])&&i(u[l][p])?n(o[p],u[l][p]):o[p]=u[l][p])}}catch(w){h=!0,f=w}finally{try{!c&&y.return&&y.return()}finally{if(h)throw f}}ye(o,u[l])}return o};function i(o){return typeof o=="function"||e.call(o)==="[object Object]"}function s(o){return(o===void 0?"undefined":te(o))==="object"?o===null:typeof o!="function"}}),b=typeof window<"u"&&window!==null,M=function(){return b&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0):!1}(),T="event",V="observer";function x(r,e){if(r.length){var t=r.indexOf(e);return t>-1?r.splice(t,1):void 0}}function U(r,e){if(r.tagName!=="IMG"||!r.getAttribute("data-srcset"))return"";var t=r.getAttribute("data-srcset").trim().split(","),n=[],i=r.parentNode.offsetWidth*e,s=void 0,o=void 0,d=void 0;t.forEach(function(h){h=h.trim(),(s=h.lastIndexOf(" "))===-1?(o=h,d=99999):(o=h.substr(0,s),d=parseInt(h.substr(s+1,h.length-s-2),10)),n.push([d,o])}),n.sort(function(h,f){if(h[0]<f[0])return 1;if(h[0]>f[0])return-1;if(h[0]===f[0]){if(f[1].indexOf(".webp",f[1].length-5)!==-1)return 1;if(h[1].indexOf(".webp",h[1].length-5)!==-1)return-1}return 0});for(var u="",a=void 0,l=0;l<n.length;l++){u=(a=n[l])[1];var c=n[l+1];if(c&&c[0]<i){u=a[1];break}if(!c){u=a[1];break}}return u}var be=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return b&&window.devicePixelRatio||r};function we(){if(!b)return!1;var r=!0;function e(t,n){var i=new Image;i.onload=function(){var s=i.width>0&&i.height>0;n(s)},i.onerror=function(){n(!1)},i.src="data:image/webp;base64,"+{lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}[t]}return e("lossy",function(t){r=t}),e("lossless",function(t){r=t}),e("alpha",function(t){r=t}),e("animation",function(t){r=t}),r}var ke=function(){if(!b)return!1;var r=!1;try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",ne,e)}catch{}return r}(),Le={on:function(r,e,t){var n=arguments.length>3&&arguments[3]!==void 0&&arguments[3];ke?r.addEventListener(e,t,{capture:n,passive:!0}):r.addEventListener(e,t,n)},off:function(r,e,t){var n=arguments.length>3&&arguments[3]!==void 0&&arguments[3];r.removeEventListener(e,t,n)}},P=function(r,e,t){var n=new Image;if(!r||!r.src){var i=new Error("image src is required");return t(i)}r.cors&&(n.crossOrigin=r.cors),n.src=r.src,n.onload=function(){e({naturalHeight:n.naturalHeight,naturalWidth:n.naturalWidth,src:n.src}),n=null},n.onerror=function(s){t(s)}},B=function(r,e){return typeof getComputedStyle<"u"?getComputedStyle(r,null).getPropertyValue(e):r.style[e]},Ee=function(r){return B(r,"overflow")+B(r,"overflowY")+B(r,"overflowX")};function ne(){}var Se=function(){function r(e){Q(this,r),this.max=e||100,this._caches=[]}return I(r,[{key:"has",value:function(e){return this._caches.indexOf(e)>-1}},{key:"add",value:function(e){this.has(e)||(this._caches.push(e),this._caches.length>this.max&&this.free())}},{key:"free",value:function(){this._caches.shift()}}]),r}(),Te=function(){function r(e,t,n,i,s,o,d,u,a,l){Q(this,r),this.el=e,this.src=t,this.error=n,this.loading=i,this.bindType=s,this.attempt=0,this.cors=u,this.naturalHeight=0,this.naturalWidth=0,this.options=d,this.rect={},this.$parent=o,this.elRenderer=a,this._imageCache=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return I(r,[{key:"initState",value:function(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=this.src;this.src=e.src,this.loading=e.loading,this.error=e.error,this.filter(),t!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){for(var e in this.options.filter)this.options.filter[e](this,this.options)}},{key:"renderLoading",value:function(e){var t=this;this.state.loading=!0,P({src:this.loading,cors:this.cors},function(){t.render("loading",!1),t.state.loading=!1,e()},function(){e(),t.state.loading=!1,t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ne;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,t()):void this.renderLoading(function(){e.attempt++,e.options.adapter.beforeLoad&&e.options.adapter.beforeLoad(e,e.options),e.record("loadStart"),P({src:e.src,cors:e.cors},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),e.state.rendered=!0,e._imageCache.add(e.src),t()},function(n){!e.options.silent&&console.error(n),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"$destroy",value:function(){this.el=null,this.src="",this.error=null,this.loading="",this.bindType=null,this.attempt=0}}]),r}(),q="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",xe=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],Qe={rootMargin:"0px",threshold:0};(function(){function r(e){var t,n,i,s,o=e.preLoad,d=e.error,u=e.throttleWait,a=e.preLoadTop,l=e.dispatchEvent,c=e.loading,h=e.attempt,f=e.silent,v=f===void 0||f,y=e.scale,p=e.listenEvents,w=e.filter,R=e.adapter,C=e.observer,L=e.observerOptions;Q(this,r),this.version="__VUE_LAZYLOAD_NEXT_VERSION__",this.lazyContainerMananger=null,this.mode=T,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:v,dispatchEvent:!!l,throttleWait:u||200,preLoad:o||1.3,preLoadTop:a||0,error:d||q,loading:c||q,attempt:h||3,scale:y||be(y),listenEvents:p||xe,supportWebp:we(),filter:w||{},adapter:R||{},observer:!!C,observerOptions:L||Qe},this._initEvent(),this._imageCache=new Se(200),this.lazyLoadHandler=(t=this._lazyLoadHandler.bind(this),n=this.options.throttleWait,i=null,s=0,function(){if(!i){var E=Date.now()-s,S=this,ie=arguments,X=function(){s=Date.now(),i=!1,t.apply(S,ie)};E>=n?X():i=setTimeout(X,n)}}),this.setMode(this.options.observer?V:T)}return I(r,[{key:"config",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};J(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){return e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),b&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(e,t,n){var i=this;if(this.ListenerQueue.some(function(l){return l.el===e}))return this.update(e,t),$(this.lazyLoadHandler);var s=this._valueFormatter(t.value),o=s.src,d=s.loading,u=s.error,a=s.cors;$(function(){o=U(e,i.options.scale)||o,i._observer&&i._observer.observe(e);var l=Object.keys(t.modifiers)[0],c=void 0;l&&(c=(c=t.instance.$refs[l])?c.el||c:document.getElementById(l)),c||(c=function(f){if(b){if(!(f instanceof Element))return window;for(var v=f;v&&v!==document.body&&v!==document.documentElement&&v.parentNode;){if(/(scroll|auto)/.test(Ee(v)))return v;v=v.parentNode}return window}}(e));var h=new Te(e,o,u,d,t.arg,c,i.options,a,i._elRenderer.bind(i),i._imageCache);i.ListenerQueue.push(h),b&&(i._addListenerTarget(window),i._addListenerTarget(c)),$(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(e,t,n){var i=this,s=this._valueFormatter(t.value),o=s.src,d=s.loading,u=s.error;o=U(e,this.options.scale)||o;var a=this.ListenerQueue.find(function(l){return l.el===e});a?a.update({src:o,loading:d,error:u}):this.add(e,t,n),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),$(function(){return i.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=this.ListenerQueue.find(function(n){return n.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),x(this.ListenerQueue,t),t.$destroy&&t.$destroy())}}},{key:"removeComponent",value:function(e){e&&(x(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;M||e!==V||(e=T),this.mode=e,e===T?(this._observer&&(this.ListenerQueue.forEach(function(n){t._observer.unobserve(n.el)}),this._observer=null),this.TargetQueue.forEach(function(n){t._initListen(n.el,!0)})):(this.TargetQueue.forEach(function(n){t._initListen(n.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=this.TargetQueue.find(function(n){return n.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===T&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,i){n.el===e&&(n.childrenCount--,n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(i,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.listenEvents.forEach(function(i){return Le[t?"on":"off"](e,i,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t]||(e.Event.listeners[t]=[]),e.Event.listeners[t].push(n)},this.$once=function(t,n){var i=e;e.$on(t,function s(){i.$off(t,s),n.apply(i,arguments)})},this.$off=function(t,n){if(n)x(e.Event.listeners[t],n);else{if(!e.Event.listeners[t])return;e.Event.listeners[t].length=0}},this.$emit=function(t,n,i){e.Event.listeners[t]&&e.Event.listeners[t].forEach(function(s){return s(n,i)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=[];this.ListenerQueue.forEach(function(n,i){n.el&&n.el.parentNode&&!n.state.loaded||t.push(n),n.checkInView()&&(n.state.loaded||n.load())}),t.forEach(function(n){x(e.ListenerQueue,n),n.$destroy&&n.$destroy()})}},{key:"_initIntersectionObserver",value:function(){var e=this;M&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e){var t=this;e.forEach(function(n){n.isIntersecting&&t.ListenerQueue.forEach(function(i){if(i.el===n.target){if(i.state.loaded)return t._observer.unobserve(i.el);i.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var i=e.el,s=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(s?i.style[s]='url("'+o+'")':i.getAttribute("src")!==o&&i.setAttribute("src",o),i.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var d=new CustomEvent(t,{detail:e});i.dispatchEvent(d)}}}},{key:"_valueFormatter",value:function(e){var t,n=e,i=this.options.loading,s=this.options.error,o=this.options.cors;return(t=e)!==null&&(t===void 0?"undefined":te(t))==="object"&&(e.src||this.options.silent||console.error("Vue Lazyload Next warning: miss src with "+e),n=e.src,i=e.loading||this.options.loading,s=e.error||this.options.error),{src:n,loading:i,error:s,cors:o}}}]),r})();(function(){function r(e){Q(this,r),this.lazy=e,e.lazyContainerMananger=this,this._queue=[]}return I(r,[{key:"bind",value:function(e,t,n){var i=new Re(e,t,n,this.lazy);this._queue.push(i)}},{key:"update",value:function(e,t,n){var i=this._queue.find(function(s){return s.el===e});i&&i.update(e,t)}},{key:"unbind",value:function(e,t,n){var i=this._queue.find(function(s){return s.el===e});i&&(i.clear(),x(this._queue,i))}}]),r})();var Ie={selector:"img",error:"",loading:""},Re=function(){function r(e,t,n,i){Q(this,r),this.el=e,this.vnode=n,this.binding=t,this.options={},this.lazy=i,this._queue=[],this.update(e,t)}return I(r,[{key:"update",value:function(e,t){var n=this;this.el=e,this.options=J({},Ie,t.value),this.getImgs().forEach(function(i){n.lazy.add(i,J({},n.binding,{value:{src:i.getAttribute("data-src")||i.dataset.src,error:i.getAttribute("data-error")||i.dataset.error||n.options.error,loading:i.getAttribute("data-loading")||i.dataset.loading||n.options.loading}}),n.vnode)})}},{key:"getImgs",value:function(){return Array.from(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),r}();const Ce={class:"box"},$e=["id"],Oe=["href","onClick"],ze=["src"],Be={class:"shanChuJinRu"},je={class:"shanChuJinRuZhuangTai"},De=["onClick"],Je=["onClick"],He={__name:"xm03neiRong",setup(r){const{FenLeiShuJu:e}=Z(j()),{feiLeiShuJuShanChu:t,shanChuZhengGeShuZu:n,orderGengGai:i}=j(),{tianJiaMeiRuJingXuanShuJu:s}=K(),{huiFuTianJia:o}=le();return(d,u)=>(A(),_("div",Ce,[g("ul",null,[(A(!0),_(O,null,H(m(e),(a,l)=>se((A(),_("li",{key:a.id,style:Y(a),id:a.id,draggable:"true"},[g("a",{href:a.lianJie,target:"_blank",onClick:c=>{m(s)(a),m(i)(a.id)}},[g("div",null,[g("img",{src:a.img,alt:"图片被偷"},null,8,ze)]),g("h2",null,k(a.name),1),g("p",null,k(a.miaoShu),1),g("div",Be,[g("p",je,k(a.zhuangTai),1)])],8,Oe),g("p",{class:"shanChu",onClick:c=>{m(t)(a.name),m(o)(a)}},"删除",8,De),g("p",{class:"zhiDing",onClick:c=>m(i)(a.id)},k(a.order*-1),9,Je)],12,$e)),[[ae,a.fenLei]])),128))])]))}},We=W(He,[["__scopeId","data-v-c19bae4d"]]),Pe={__name:"index",setup(r){const{Gai:e}=ce();return ue(()=>{e(0)}),(t,n)=>(A(),_(O,null,[z(pe),z(_e),z(We)],64))}};export{Pe as default};