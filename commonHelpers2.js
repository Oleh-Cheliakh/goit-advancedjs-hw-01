import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{P as o,t as i}from"./assets/vendor-c4bdc8af.js";const c=document.querySelector("iframe"),r=new o(c);localStorage.getItem("videoplayer-current-time")&&r.setCurrentTime(localStorage.getItem("videoplayer-current-time"));const m=i(function(e){try{let t=e.percent===1?0:e.seconds;localStorage.setItem("videoplayer-current-time",t)}catch(t){console.log(t)}},1e3);r.on("timeupdate",e=>{m(e)});
//# sourceMappingURL=commonHelpers2.js.map
