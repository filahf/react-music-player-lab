(this["webpackJsonpreact-music-player"]=this["webpackJsonpreact-music-player"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/demo.bd0a16a6.mp3"},function(e,t,n){e.exports=n.p+"static/media/hey.21f4f5d2.mp3"},function(e,t,n){e.exports=n.p+"static/media/summer.fd79b114.mp3"},function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=(n(18),n(6)),l=n(3),s=n(2),u=n(10),m=n.n(u),d=n(11),p=n.n(d),f=n(12),E=n.n(f);n(8);var v=function(e){return c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"filler",style:{width:"".concat(e.percentage,"%")}}))},b=[m.a,p.a,E.a],w=new(window.AudioContext||window.webkitAudioContext),h=document.createElement("audio"),k=0;function y(e){h.src=e}y(b[k]);var N=w.createMediaElementSource(h),g=w.createGain();N.connect(g).connect(w.destination);var x=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(0),u=Object(i.a)(o,2),m=u[0],d=u[1];Object(a.useEffect)((function(){setInterval((function(){return function(){var e=h.currentTime/h.duration*100;d(e)}()}),1),h.ended&&r(!1)}),[]);var p=function(){!1===n?(r(!0),h.play()):(r(!1),h.pause())};return c.a.createElement("div",null,c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"Track ",k+1," "),c.a.createElement(v,{percentage:m}),c.a.createElement("div",{className:"controls"},c.a.createElement("div",{className:"button",onClick:function(){--k<0&&(k=b.length-1),y(b[k]),h.play(),r(!0)}},c.a.createElement(s.a,{icon:l.a,color:"white"})),!1!==n?c.a.createElement("div",{className:"button",onClick:p},c.a.createElement(s.a,{icon:l.c,color:"white"})):c.a.createElement("div",{className:"button",onClick:p},c.a.createElement(s.a,{icon:l.d,color:"white"})),c.a.createElement("div",{className:"button",onClick:function(){++k>b.length-1&&(k=0),y(b[k]),h.play(),r(!0)}},c.a.createElement(s.a,{icon:l.b,color:"white"})))))};o.a.render(c.a.createElement(x,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.138874f9.chunk.js.map