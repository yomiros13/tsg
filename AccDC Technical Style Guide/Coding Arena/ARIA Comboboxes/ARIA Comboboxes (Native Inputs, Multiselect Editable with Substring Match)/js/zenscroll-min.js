window.noZensmooth=true;(function(a,b){if(typeof define==="function"&&define.amd){define([],b())}else{if(typeof module==="object"&&module.exports){module.exports=b()}else{a.zenscroll=b()}}}(this,function(){var c=function(e){return function(l,k,h){if(!l){return false}var j,f="undefined",g=document.defaultView;if(g&&g.getComputedStyle){if(l==document){l=document.body}j=g.getComputedStyle(l,"");if(j){f=j.getPropertyValue(k)}if(f==="smooth"){return true}}return false}(e,"scroll-behavior")};if(typeof window==="undefined"||!("document" in window)){return{}}var b=function(q,n,o){n=n||999;if(!o&&o!==0){o=9}var i;var s=function(t){i=t};var g=document.documentElement;var p=function(){if(q){return q.scrollTop}else{return window.scrollY||g.scrollTop}};var r=function(){if(q){return Math.min(q.offsetHeight,window.innerHeight)}else{return window.innerHeight||g.clientHeight}};var l=function(t){if(q){return t.offsetTop}else{return t.getBoundingClientRect().top+p()-g.offsetTop}};var h=function(){clearTimeout(i);s(0)};var e=function(w,x,z){h();if(c(q?q:document.body)){(q||window).scrollTo(0,w);if(z){z()}}else{var u=p();var y=Math.max(w,0)-u;x=x||Math.min(Math.abs(y),n);var v=new Date().getTime();(function t(){s(setTimeout(function(){var A=Math.min((new Date().getTime()-v)/x,1);var B=Math.max(Math.floor(u+y*(A<0.5?2*A*A:A*(4-A*2)-1)),0);if(q){q.scrollTop=B}else{window.scrollTo(0,B)}if(A<1&&(r()+B)<(q||g).scrollHeight){t()}else{setTimeout(h,99);if(z){z()}}},9))})()}};var m=function(u,v,w){var t=l(u)-o;e(t,v,w);return t};var f=function(v,x,u){var t=v.getBoundingClientRect().height;var z=l(v);var w=z+t;var B=r();var y=p();var A=y+B;if((z-o)<y||(t+o)>B){m(v,x,u)}else{if((w+o)>A){e(w-B+o,x,u)}else{if(u){u()}}}};var k=function(t,u,v,w){e(Math.max(l(t)-r()/2+(v||t.getBoundingClientRect().height/2),0),u,w)};var j=function(u,t){if(u){n=u}if(t===0||t){o=t}};return{setup:j,to:m,toY:e,intoView:f,center:k,stop:h,moving:function(){return !!i},getY:p}};var a=b();if("addEventListener" in window&&!(c(document.body)||window.noZensmooth)){if("scrollRestoration" in history){history.scrollRestoration="manual";window.addEventListener("popstate",function(e){if(e.state&&"scrollY" in e.state){a.toY(e.state.scrollY)}},false)}var d=function(h,g){try{history.replaceState({scrollY:a.getY()},"");history.pushState({scrollY:g},"",window.location.href.split("#")[0]+h)}catch(f){}};window.addEventListener("click",function(h){var g=h.target;while(g&&g.tagName!=="A"){g=g.parentNode}if(!g||h.which!==1||h.shiftKey||h.metaKey||h.ctrlKey||h.altKey){return}var e=g.getAttribute("href")||"";if(e.indexOf("#")===0){if(e==="#"){h.preventDefault();a.toY(0);d("",0)}else{var f=g.hash.substring(1);var i=document.getElementById(f);if(i){h.preventDefault();d("#"+f,a.to(i))}}}},false)}return{createScroller:b,setup:a.setup,to:a.to,toY:a.toY,intoView:a.intoView,center:a.center,stop:a.stop,moving:a.moving}}));