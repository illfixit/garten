(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s.n(r),a=s(44),i=s.n(a),c=(s(60),s(1)),o=s(51),u=function(e){var t=Object(r.useRef)(e.startStep);Object(r.useEffect)(function(){s(document.querySelector(".radius"),t.current*(180/11.5))},[e.timerActive]);var s=function(e,t){var s="rotate(".concat(t,"deg) scale(1) skewX(0deg) skewY(0deg)");e.style.webkitTransform=s,e.style.MozTransform=s,e.style.msTransform=s,e.style.OTransform=s,e.style.transform=s,e.parentElement.style.background="conic-gradient(mediumslateblue ".concat(t,"deg, rosybrown 0deg)")};return n.a.createElement(o.a,{onPan:function(r){if("radius"===r.target.className||"radiusCircle"===r.target.className){var n;"radius"===r.target.className&&(n=r.target.parentElement.getBoundingClientRect()),"radiusCircle"===r.target.className&&(n=r.target.parentElement.parentElement.getBoundingClientRect());var a=(r.center.x-n.x)/n.width-.5,i=.5-(r.center.y-n.y)/n.height,c=180*Math.atan2(i,a)/3.1415;c<-180&&(c=-180),c>180&&(c=180);var o=0;c<=90&&c>=-180&&(o=90-c),c>90&&c<=180&&(o=450-c),o>0&&o<10&&(o=0);var u=Math.floor(o/(180/11.5)),l=o-u>=.5?u+1:u;t.current=Math.abs(t.current-l)>3?t.current:l,s(document.querySelector(".radius"),t.current*(180/11.5)),e.setTimeStep(t.current),e.setStartStep(t.current)}}},n.a.createElement("div",{className:"radius".concat(e.timerActive?" hidden":"")},n.a.createElement("div",{className:"radiusCircle".concat(e.timerActive?" hidden":"")})))},l=function(e){var t=e.startStep,s=e.timeStep,a=e.setTimeStep,i=e.timerActive,o=e.setTimerActive,u=e.currentActivity,l=e.setCurrentActivity,m=e.GIFSArray,S=e.currentGIF,d=e.numberOfSessions,A=e.currentSession,v=e.setCurrentSession,g=e.autoSwitch,p=e.setAutoSwitch,f=Object(r.useState)(60*(5+5*t)),y=Object(c.a)(f,2),b=y[0],I=y[1],E=Object(r.useState)(0),C=Object(c.a)(E,2),O=C[0],F=C[1];a(t);var G=function(e){return e.toString().padStart(2,"0")},N=new Audio("./static/sounds/uplifting-flute.mp3");Object(r.useEffect)(function(){I(60*(5+5*s))},[s,t]),Object(r.useEffect)(function(){return i?F(setInterval(function(){!0===i&&I(function(e){return document.getElementsByClassName("plantContainer")[0].style.background="conic-gradient(mediumslateblue ".concat(e/(60*(5+5*t))*360,"deg, rosybrown 0deg)"),e-1})},1e3)):(a(s),I(60*(5+5*s)),clearInterval(O)),function(){return clearInterval(O)}},[i]);var h=Math.floor(b/60),w=b-60*Math.floor(b/60);return 0===b&&i&&(N.play(),clearInterval(O),A<d&&("pause"===u&&v(A+1),l("pause"===u?"session":"pause"),o(g)),A===d&&("session"===u?(l("pause"===u?"session":"pause"),o(g)):"pause"===u&&(p(!1),o(!1)))),b<=0&&(h=0,w=0),n.a.createElement("div",{className:"timerContainer"},n.a.createElement("div",{className:"timerBackground ".concat("session"===u?"sessionBackground":"pauseBackground"),style:{backgroundImage:"url(".concat(m[S],")")}}),n.a.createElement("div",{className:"timer"},G(h),":",G(w)),n.a.createElement("div",{className:"timerText"},"session"===u?"Session ".concat(A,"/").concat(d):"Pause"))},m=s(50),S=function(e){var t=function(t){var s=t.target.parentElement.parentElement.firstChild.innerText-1;s>=0&&s<=e.GIFSArray.length&&(e.setCurrentGIF(s),document.getElementById("".concat(e.currentActivity,"Background"))&&(document.getElementById("".concat(e.currentActivity,"Background")).style.backgroundImage="url(".concat(e.GIFSArray[s],")")))},s=function(t){var s=t.target.parentElement.parentElement.firstChild.innerText-1;if(console.log(s,e.currentGIF),s>=0&&s<=e.GIFSArray.length&&s!==e.currentGIF){var r=e.GIFSArray.filter(function(e,t){return t!==s});e.setGIFSArray(r),localStorage.setItem("".concat(e.currentActivity,"GIFSArray"),JSON.stringify(r)),s<e.currentGIF&&e.setCurrentGIF(e.currentGIF-1)}};return n.a.createElement("div",{className:"settingsContainer"},e.GIFSArray.map(function(e,r){return n.a.createElement("div",{className:"settings_options",key:"".concat(e.slice(0,5)+e.slice(-5))},n.a.createElement("p",null,r+1),n.a.createElement("img",{className:"gif_preview",alt:"gif_preview",src:e}),n.a.createElement("div",{className:"settings_button_container"},n.a.createElement("button",{className:"settings_button",onClick:t},"Use"),n.a.createElement("button",{className:"settings_button delete_button",onClick:s},"Delete")))}),n.a.createElement("div",{className:"input_container settings_options"},n.a.createElement("input",{id:"url_input",className:"background_input",placeholder:"Paste GIF's URL here"}),n.a.createElement("button",{className:"settings_button",onClick:function(t){var s=document.getElementById("url_input").value,r=[].concat(Object(m.a)(e.GIFSArray),[s]);s.trim()&&e.setGIFSArray(r),localStorage.setItem("".concat(e.currentActivity,"GIFSArray"),JSON.stringify(r)),document.getElementById("url_input").value=""}},"Add")))},d=function(e){return n.a.createElement("div",{className:"sessionSettings"},n.a.createElement("div",{className:"settings_options"},n.a.createElement("p",null,"Auto start next session/pause?"),n.a.createElement("div",{className:"autoStartButtonsContainer"},n.a.createElement("button",{className:"autoStartButtons ".concat(e.autoSwitch?"autoStartButtonsActive":""),onClick:function(){return e.setAutoSwitch(!0)}},"Yes"),n.a.createElement("button",{className:"autoStartButtons ".concat(e.autoSwitch?"":"autoStartButtonsActive"),onClick:function(){return e.setAutoSwitch(!1)}},"No"))),n.a.createElement("div",{className:"settings_options"},n.a.createElement("p",null,"How many sessions today?"),n.a.createElement("button",{id:"lessSessions",className:"sessionSettingsButton",onClick:function(){e.numberOfSessions>1&&e.numberOfSessions>e.currentSession&&e.setNumberOfSessions(e.numberOfSessions-1)}},"-"),n.a.createElement("p",{id:"numberOfSessions"},e.numberOfSessions),n.a.createElement("button",{id:"moreSessions",className:"sessionSettingsButton",onClick:function(){e.setNumberOfSessions(e.numberOfSessions+1),e.setAutoSwitch(!0)}},"+")),n.a.createElement("div",{className:"settings_options"},n.a.createElement("p",null,"Number of current session"),n.a.createElement("button",{id:"minusCurrentSession",className:"sessionSettingsButton",onClick:function(){e.currentSession>1&&(e.setCurrentSession(e.currentSession-1),e.setAutoSwitch(!0))}},"-"),n.a.createElement("p",{id:"numberOfSessions"},e.currentSession),n.a.createElement("button",{id:"plusCurrentSession",className:"sessionSettingsButton",onClick:function(){e.setCurrentSession(e.currentSession+1),e.currentSession>e.numberOfSessions-1&&e.setNumberOfSessions(e.numberOfSessions+1)}},"+")))},A=function(e){var t=e.timerActive,s=e.setTimerActive,r=e.setAutoSwitch;return t?n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"mainScreenButtons",onClick:function(){s(!1),r(!1)}},"Give Up")):n.a.createElement("button",{className:"mainScreenButtons",onClick:function(){return s(!0)}},"Start")},v=function(e){var t=Object(r.useState)(e.startStep),s=Object(c.a)(t,2),a=s[0],i=s[1],o=null;return Object(r.useEffect)(function(){document.querySelector(".plantContainer")&&(o=document.querySelector(".plantContainer").getBoundingClientRect())},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"plantContainer ".concat((e.timerActive,""))},n.a.createElement(u,{plantContainerBoundaries:o,setTimeStep:i,timerActive:e.timerActive,startStep:e.startStep,setStartStep:e.setStartStep}),n.a.createElement("div",{className:"plant"},n.a.createElement(l,{startStep:e.startStep,timeStep:a,setTimeStep:i,timerActive:e.timerActive,setTimerActive:e.setTimerActive,currentActivity:e.currentActivity,setCurrentActivity:e.setCurrentActivity,GIFSArray:e.GIFSArray,currentGIF:e.currentGIF,numberOfSessions:e.numberOfSessions,currentSession:e.currentSession,setCurrentSession:e.setCurrentSession,autoSwitch:e.autoSwitch,setAutoSwitch:e.setAutoSwitch}))),n.a.createElement(A,{timerActive:e.timerActive,setTimerActive:e.setTimerActive,setAutoSwitch:e.setAutoSwitch}),n.a.createElement(d,{currentSession:e.currentSession,setCurrentSession:e.setCurrentSession,numberOfSessions:e.numberOfSessions,setNumberOfSessions:e.setNumberOfSessions,autoSwitch:e.autoSwitch,setAutoSwitch:e.setAutoSwitch,timerActive:e.timerActive,setTimerActive:e.setTimerActive}),n.a.createElement(S,{currentActivity:e.currentActivity,GIFSArray:e.GIFSArray,setGIFSArray:e.setGIFSArray,currentGIF:e.currentGIF,setCurrentGIF:e.setCurrentGIF}))},g=function(e){return n.a.createElement(v,{currentActivity:e.currentActivity,setCurrentActivity:e.setCurrentActivity,startStep:e.sessionStartStep,setStartStep:e.setSessionStartStep,GIFSArray:e.GIFSArray,setGIFSArray:e.setGIFSArray,currentGIF:e.currentGIF,setCurrentGIF:e.setCurrentGIF,numberOfSessions:e.numberOfSessions,setNumberOfSessions:e.setNumberOfSessions,currentSession:e.currentSession,setCurrentSession:e.setCurrentSession,autoSwitch:e.autoSwitch,setAutoSwitch:e.setAutoSwitch,timerActive:e.timerActive,setTimerActive:e.setTimerActive})},p=function(e){return n.a.createElement(v,{currentActivity:e.currentActivity,setCurrentActivity:e.setCurrentActivity,startStep:e.pauseStartStep,setStartStep:e.setPauseStartStep,GIFSArray:e.GIFSArray,setGIFSArray:e.setGIFSArray,currentGIF:e.currentGIF,setCurrentGIF:e.setCurrentGIF,numberOfSessions:e.numberOfSessions,setNumberOfSessions:e.setNumberOfSessions,currentSession:e.currentSession,setCurrentSession:e.setCurrentSession,autoSwitch:e.autoSwitch,setAutoSwitch:e.setAutoSwitch,timerActive:e.timerActive,setTimerActive:e.setTimerActive})},f=function(e){var t=e.currentActivity,s=e.setCurrentActivity;return n.a.createElement("div",{className:"sessionControlContainer",onClick:function(e){"pause"===e.target.id?(document.getElementById("session").classList.remove("sessionControlActive"),document.getElementById("pause").classList.add("sessionControlActive"),s("pause")):"session"===e.target.id&&(document.getElementById("pause").classList.remove("sessionControlActive"),document.getElementById("session").classList.add("sessionControlActive"),s("session"))}},n.a.createElement("p",{id:"session",className:"sessionControlButtons ".concat("session"===t?"sessionControlActive":"")},"Session"),n.a.createElement("p",{id:"pause",className:"sessionControlButtons ".concat("pause"===t?"sessionControlActive":"")},"\xa0Pause\xa0"))},y=function(e){var t=Object(r.useState)("pause"),s=Object(c.a)(t,2),a=s[0],i=s[1],o=Object(r.useState)(1),u=Object(c.a)(o,2),l=u[0],m=u[1],S=Object(r.useState)(9),d=Object(c.a)(S,2),A=d[0],v=d[1],y=Object(r.useState)(2),b=Object(c.a)(y,2),I=b[0],E=b[1],C=Object(r.useState)(1),O=Object(c.a)(C,2),F=O[0],G=O[1],N=Object(r.useState)(!0),h=Object(c.a)(N,2),w=h[0],j=h[1],B=Object(r.useState)(!1),k=Object(c.a)(B,2),T=k[0],_=k[1];Object(r.useEffect)(function(){null!==localStorage.getItem("pauseGIFSArray")&&localStorage.getItem("pauseGIFSArray")!==[]&&void 0!==localStorage.getItem("pauseGIFSArray")||localStorage.setItem("pauseGIFSArray",JSON.stringify(["https://media0.giphy.com/media/XPdR7H122vZ1C/giphy.gif?cid=790b7611f6dfedca30056047728a8ae9027975ad8723943a&rid=giphy.gif&ct=g"])),null!==localStorage.getItem("sessionGIFSArray")&&localStorage.getItem("sessionGIFSArray")!==[]&&void 0!==localStorage.getItem("sessionGIFSArray")||localStorage.setItem("sessionGIFSArray",JSON.stringify(["https://i.pinimg.com/originals/ab/e1/72/abe17294582423e00db65c85aba185d8.gif"]))},[]);var J=Object(r.useState)(JSON.parse(localStorage.getItem("pauseGIFSArray"))||["https://media0.giphy.com/media/XPdR7H122vZ1C/giphy.gif?cid=790b7611f6dfedca30056047728a8ae9027975ad8723943a&rid=giphy.gif&ct=g"]),P=Object(c.a)(J,2),R=P[0],x=P[1],M=Object(r.useState)(JSON.parse(localStorage.getItem("sessionGIFSArray"))||["https://i.pinimg.com/originals/ab/e1/72/abe17294582423e00db65c85aba185d8.gif"]),L=Object(c.a)(M,2),q=L[0],H=L[1],U=Object(r.useState)(0),X=Object(c.a)(U,2),Y=X[0],Z=X[1],z=Object(r.useState)(0),D=Object(c.a)(z,2),K=D[0],Q=D[1];return n.a.createElement("div",{className:"mainScreenContainer"},n.a.createElement(f,{currentActivity:a,setCurrentActivity:i}),"session"===a?n.a.createElement(g,{currentActivity:a,setCurrentActivity:i,sessionStartStep:A,setSessionStartStep:v,GIFSArray:q,setGIFSArray:H,currentGIF:Y,setCurrentGIF:Z,numberOfSessions:I,setNumberOfSessions:E,currentSession:F,setCurrentSession:G,autoSwitch:w,setAutoSwitch:j,timerActive:T,setTimerActive:_}):n.a.createElement(p,{currentActivity:a,setCurrentActivity:i,pauseStartStep:l,setPauseStartStep:m,GIFSArray:R,setGIFSArray:x,currentGIF:K,setCurrentGIF:Q,numberOfSessions:I,setNumberOfSessions:E,currentSession:F,setCurrentSession:G,autoSwitch:w,setAutoSwitch:j,timerActive:T,setTimerActive:_}))};var b=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(y,null))};i.a.createRoot(document.getElementById("root")).render(n.a.createElement(b,null))},52:function(e,t,s){e.exports=s(103)},60:function(e,t,s){}},[[52,2,1]]]);
//# sourceMappingURL=main.88b92f9d.chunk.js.map