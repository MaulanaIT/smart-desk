(this["webpackJsonpsmart-desker"]=this["webpackJsonpsmart-desker"]||[]).push([[0],{169:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return i}));var n=r(13),a=r(39),i=(r(29),function(t,e,r,i,s){var c=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:r,onMove:function(t){var e=t.deltaX/c.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,r=c.innerWidth,a=e/r,i=t.velocityX,o=r/2,u=i>=0&&(i>.2||t.deltaX>o),d=(u?1-a:a)*r,h=0;if(d>5){var f=d/Math.abs(i);h=Math.min(f,540)}s(u,a<=0?.01:Object(n.j)(0,a,.9999),h)}})})}}]);
//# sourceMappingURL=0.81cb6a87.chunk.js.map