(function(e){function n(n){for(var r,u,c=n[0],i=n[1],s=n[2],f=0,d=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},u={app:0},o={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e544a":"44ab5d80","chunk-34862a05":"4bf689cf","chunk-40f93e9d":"24a46665","chunk-637270ba":"52f0e264","chunk-adcdea82":"dd32d86b","chunk-b65a486e":"d5df5624","chunk-b7fa6660":"d56480f4","chunk-e07fecee":"c2ff196c"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-34862a05":1,"chunk-40f93e9d":1,"chunk-637270ba":1,"chunk-adcdea82":1,"chunk-b65a486e":1,"chunk-b7fa6660":1,"chunk-e07fecee":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0e544a":"31d6cfe0","chunk-34862a05":"d15ffc53","chunk-40f93e9d":"91b600ec","chunk-637270ba":"c1145a0f","chunk-adcdea82":"39f014a3","chunk-b65a486e":"5b79faff","chunk-b7fa6660":"93747183","chunk-e07fecee":"8077d288"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],f=s.getAttribute("data-href");if(f===r||f===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete u[e],l.parentNode.removeChild(l),t(a)},l.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){u[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=a);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var d=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",d.name="ChunkLoadError",d.type=r,d.request=u,t[1](d)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var l=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"0439":function(e,n,t){t("7db0"),t("a434"),e.exports={userInfo:function(e,n){e.user=n},addUnreadMsg:function(e,n){var t=e.unreadMsgList.find((function(e){return e.friendId===n.friendId}));console.log(t);var r={content:n.content,time:n.time};t?t.msgList.push(r):(t={friendId:n.friendId,msgList:[r]},e.unreadMsgList.push(t))},removeUnreadMsg:function(e,n){var t=e.unreadMsgList[n].msgList;t.splice(0,t.length)},currentTalkChange:function(e,n){e.currentTalk=n},currentTalkIdListAdd:function(e,n){e.currentTalkIdList.push(n)}}},"0c6d":function(e,n,t){"use strict";t.r(n),t.d(n,"request",(function(){return o}));var r=t("bc3a"),u=t.n(r);function o(e){var n=u.a.create({baseURL:"/api",timeout:5e3});return n.interceptors.request.use((function(e){return window.localStorage.getItem("token")&&(e.headers.Authorization="Bearer "+window.localStorage.getItem("token")),e}),(function(e){console.log(e)})),n.interceptors.response.use((function(e){return e.data}),(function(e){console.log(e)})),n(e)}},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},o=[],a={},c=a,i=(t("034f"),t("2877")),s=Object(i["a"])(c,u,o,!1,null,null,null),f=s.exports,d=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),l=d["a"].prototype.push;d["a"].prototype.push=function(e){return l.call(this,e).catch((function(e){return e}))},r["default"].use(d["a"]);var h=[{path:"/",redirect:"/home"},{path:"/home",component:function(){return t.e("chunk-40f93e9d").then(t.bind(null,"b3d7"))},children:[{path:"/",component:function(){return t.e("chunk-34862a05").then(t.bind(null,"1ddd"))}},{path:"talk/:friendId",component:function(){return t.e("chunk-adcdea82").then(t.bind(null,"c592"))}},{path:"addfriend",component:function(){return t.e("chunk-e07fecee").then(t.bind(null,"3611"))}},{path:"setting",component:function(){return t.e("chunk-b65a486e").then(t.bind(null,"278d"))}}]},{path:"/login",component:function(){return t.e("chunk-637270ba").then(t.bind(null,"5326"))}},{path:"/register",component:function(){return t.e("chunk-b7fa6660").then(t.bind(null,"935e"))}},{path:"/socket",component:function(){return t.e("chunk-2d0e544a").then(t.bind(null,"9481"))}}],p=new d["a"]({mode:"history",base:"/",routes:h}),g=p,m=t("2f62"),b=t("94d5"),k=t.n(b),v=t("63e0"),y=t.n(v),w=t("0439"),T=t.n(w);r["default"].use(m["a"]);var L=new m["a"].Store({state:{user:{},unreadMsgList:[],currentTalk:0,currentTalkIdList:[]},actions:y.a,mutations:T.a,getters:k.a}),I=t("5c96"),x=t.n(I);t("c69f");r["default"].use(x.a);var O=t("5132"),P=t.n(O),S=t("8e27"),j=t.n(S);r["default"].use(new P.a({debug:!0,connection:j()("ws://127.0.0.1:4000")})),r["default"].config.productionTip=!1,new r["default"]({router:g,store:L,render:function(e){return e(f)}}).$mount("#app")},"63e0":function(e,n,t){var r=t("c973").default;t("96cf");var u=t("c24f"),o=u.getUserInfo;e.exports={A_currentTalkChange:function(e,n){return r(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o(n);case 2:r=t.sent,e.commit("currentTalkChange",r.data);case 4:case"end":return t.stop()}}),t)})))()}}},"85ec":function(e,n,t){},"94d5":function(e,n){e.exports={currentTalk:function(e){return e.currentTalk}}},c24f:function(e,n,t){var r=t("0c6d"),u=r.request;function o(e){return u({url:"/user/info/"+e})}function a(){return u({url:"/user/info"})}function c(){return u({url:"/user/list"})}function i(e,n){return u({url:"/user/search",params:{type:e,keyword:n}})}function s(e){return u({url:"/user/add/"+e,method:"POST"})}function f(e,n,t,r,o){return u({url:"/user/info",method:"POST",data:{username:e,age:n,city:t,intro:r,sex:o}})}function d(e,n){return u({url:"/user/password",data:{password:e,newPassword:n},method:"PATCH"})}e.exports={getUserInfo:o,getfirendsList:c,getMyInfo:a,searchUser:i,addFriend:s,updateUserInfo:f,updatePassword:d}},c69f:function(e,n,t){}});
//# sourceMappingURL=app.f4351475.js.map