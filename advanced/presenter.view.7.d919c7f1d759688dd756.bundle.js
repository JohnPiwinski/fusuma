(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{365:function(e,n,t){"use strict";t.d(n,"a",function(){return d}),t.d(n,"c",function(){return v}),t.d(n,"d",function(){return p}),t.d(n,"b",function(){return h});var r=t(3),a=t.n(r),i=t(442),o=t(352),u=t(95);t(366),t(391);function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=["#444","#3498db","#ff874d","#67a2a0"],l=null,f=null,d=Object(r.memo)(function(e){var n=e.toolbar,t=e.disabled,d=e.hideGrid,v=Object(r.useRef)(),p=c(Object(r.useState)(s[0]),2),h=p[0],m=p[1],g=function(){window.localStorage.setItem("fusumaCanvasCoordinate",v.current.getSaveData())},w=function(){var e=window.localStorage.getItem("fusumaCanvasCoordinate");l!==e&&(v.current.loadSaveData(e,!0),l=e)};return Object(r.useEffect)(function(){return f=n?setInterval(g,1e3):setInterval(w,1e3),function(){f&&clearInterval(f)}},[]),a.a.createElement(a.a.Fragment,null,n&&a.a.createElement("div",{className:"fusuma-canvas-toolbar"},a.a.createElement(u.b,{onClick:function(){v.current.clear()},size:"32"}),a.a.createElement(o.m,{onClick:function(){v.current.undo()}}),a.a.createElement("div",{style:{background:h},onClick:function(){s=s.concat(s.splice(0,1)),m(s[0])},className:"fusuma-canvas-toolbar-color"})),a.a.createElement(i.a,{ref:v,className:"fusuma-canvas",canvasWidth:"100%",canvasHeight:"100%",loadTimeOffset:0,brushColor:h,disabled:t,hideGrid:d,lazyRadius:0,brushRadius:8}))});function v(){return JSON.parse(window.localStorage.getItem("fusumaCanvasEvent"))}function p(e){window.addEventListener("storage",function(n){"fusumaCanvasEvent"===n.key&&e(JSON.parse(n.newValue))})}function h(e){window.localStorage.setItem("fusumaCanvasEvent",JSON.stringify(e))}},366:function(e,n,t){var r=t(367);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(63)(r,a);r.locals&&(e.exports=r.locals)},367:function(e,n,t){},383:function(e,n,t){"use strict";function r(e,n,t,r,a,i,o){try{var u=e[i](o),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,a)}function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",function(){return o});var o=function(){function e(){var n=this;if(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"setupRecording",function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(n.handlerRecording)}),i(this,"handlerRecording",function(e){var t=[];n.stream=e,n.mediaRecorder=new MediaRecorder(e,{}),n.mediaRecorder.addEventListener("dataavailable",function(e){e.data.size>0&&t.push(e.data)}),n.mediaRecorder.addEventListener("stop",function(){n.finishedProcess=!0,n.url=URL.createObjectURL(new Blob(t,{type:"audio/webm"}))})}),i(this,"startRecording",function(){n.mediaRecorder.start(),n.finishedProcess=!1,n.url=null}),i(this,"stopRecording",function(){return new Promise(function(e){n.mediaRecorder.stop();var t=setInterval(function(){n.finishedProcess&&(clearInterval(t),e(n.url))},100)})}),i(this,"disposeRecording",function(){n.mediaRecorder.stream.getTracks().forEach(function(e){return e.stop()}),n.finishedProcess=!1,n.url=null}),!navigator.mediaDevices.getUserMedia)throw new Error("Not supported");this.url=null,this.finishedProcess=!1}var n,t,o;return n=e,(t=[{key:"startCapturing",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.next=4,navigator.mediaDevices.getDisplayMedia(n);case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}},e,null,[[1,7]])}),function(){var n=this,t=arguments;return new Promise(function(a,i){var o=e.apply(n,t);function u(e){r(o,a,i,u,c,"next",e)}function c(e){r(o,a,i,u,c,"throw",e)}u(void 0)})});return function(e){return n.apply(this,arguments)}}()},{key:"stopCapturing",value:function(e){e.srcObject.getTracks().forEach(function(e){return e.stop()}),e.srcObject=null}}])&&a(n.prototype,t),o&&a(n,o),e}()},601:function(e,n,t){var r=t(602);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(63)(r,a);r.locals&&(e.exports=r.locals)},602:function(e,n,t){},646:function(e,n,t){"use strict";t.r(n);var r=t(3),a=t.n(r),i=t(92);function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiType=navigator.presentation&&navigator.presentation.receiver?"presentation":"localStorage","presentation"===this.apiType&&this.setUp()}var n,t,r;return n=e,(t=[{key:"registerEvent",value:function(e,n){navigator.presentation.receiver.connectionList.then(function(t){t.connections.forEach(function(t){t.addEventListener(e,n)}),t.addEventListener("connectionavailable",function(e){n(e.connection)})})}},{key:"setUp",value:function(){this.registerEvent("close",function(e){console.log(e)})}},{key:"onChangePage",value:function(e){"presentation"===this.apiType?this.registerEvent("message",function(n){var t=JSON.parse(n.data).page;e(t)}):window.addEventListener("storage",function(n){if("page"===n.key){var t=JSON.parse(n.newValue).page;e(t)}})}}])&&o(n.prototype,t),r&&o(n,r),e}(),c=t(365),s=t(383);t(601);function l(e,n,t,r,a,i,o){try{var u=e[i](o),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,a)}function f(e){return function(){var n=this,t=arguments;return new Promise(function(r,a){var i=e.apply(n,t);function o(e){l(i,r,a,o,u,"next",e)}function u(e){l(i,r,a,o,u,"throw",e)}o(void 0)})}}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=null,p=null,h=null,m=null,g=Object(r.memo)(function(e){var n=e.slides,t=e.hash;v||(v=new u).onChangePage(function(e){window.slide&&(window.slide.goToSlide(e),p&&h&&y(h))});var o=d(Object(r.useState)(!1),2),l=o[0],g=o[1],w=function(){var e=f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=7;break}return p=new s.a,e.next=4,p.startCapturing({video:{displaySurface:"monitor"}});case 4:return e.abrupt("return",e.sent);case 7:throw new Error("Capturing has already run.");case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),y=function(e){p&&e&&(e.pause(),p.stopCapturing(e),m.style.opacity=1,p=null,m=null,h=null)},b=function(){var e=f(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=document.querySelectorAll("#webslides .fusuma-screen"))){e.next=3;break}return e.abrupt("return");case 3:t.forEach(function(e){var n=d(e.children,2),t=n[0],r=n[1];r.addEventListener("click",f(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=10;break}return e.next=3,w();case 3:n=e.sent,r.srcObject=n,r.play(),h=r,(m=t).style.opacity=0,n.getVideoTracks()[0].onended=function(){y(r)};case 10:case"end":return e.stop()}},e)})))});case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){b(),g("start"===Object(c.c)().status)},[]),a.a.createElement("div",{className:"fusuma-presenter-view"},l&&a.a.createElement(c.a,{disabled:!0,hideGrid:!0}),a.a.createElement(i.a,{slides:n,hash:t,showIndex:!1}))});n.default=g}}]);