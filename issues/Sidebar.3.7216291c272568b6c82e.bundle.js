(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{642:function(e,t,a){"use strict";a.r(t),a.d(t,"SidebarComponent",function(){return h});var n=a(2),r=a.n(n),i=a(443),c=a(461),l=a.n(c),s=a(352),o=a(95),d="https://slide.hiroppy.me",u=["twitter"],m=function(e){return"".concat(e).padStart(2,"0")},h=function(e){return r.a.createElement(i.slide,{isOpen:e.isOpen,disableAutoFocus:!0,onStateChange:e.onStateChange,outerContainerId:"root",pageWrapId:"webslides"},r.a.createElement("div",{className:"sidebar-social"},Array.isArray(u)&&u.map(function(e){return"twitter"===e?r.a.createElement("a",{key:"twitter",href:"https://twitter.com/intent/tweet","aria-label":"".concat("issues"," ").concat(d)},r.a.createElement(s.l,null)):"hatena"===e?r.a.createElement("a",{key:"hatena",href:"http://b.hatena.ne.jp/entry/".concat(d),className:"fa fa-hatena"}):void 0})),r.a.createElement("div",{className:"sidebar-control"},window.slide&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.c,{onClick:function(){return e.goTo(0)},className:"sidebar-cursor"}),r.a.createElement("span",null,"".concat(m(e.currentIndex+1)," / ").concat(m(window.slide.slides.length))),r.a.createElement(o.e,{onClick:function(){return e.goTo(window.slide.slides.length-1)},className:"sidebar-cursor"}))),r.a.createElement("div",{className:"sidebar-tools"},r.a.createElement(o.d,{style:{width:26,height:26},onClick:function(){l.a.enabled&&l.a.toggle()},className:"sidebar-cursor"}),r.a.createElement(o.a,{onClick:function(){return e.runPresentationMode()},style:{width:19,height:19,marginTop:1},className:"sidebar-cursor"}),r.a.createElement("a",{href:"https://github.com/hiroppy/fusuma.git",target:"_blank",rel:"noopener","aria-label":"github"},r.a.createElement(s.d,{style:{width:20,height:20,marginTop:3,color:"#f5f5f5"}}))),r.a.createElement("ul",{className:"sidebar-contents"},e.contents.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:"#slide=".concat(e.index)},e.title))})))}}}]);