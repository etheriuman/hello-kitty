(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1e546950":"8d860f7d","chunk-2d0a3a99":"58665963","chunk-d9b03188":"db379966","chunk-27ab5e20":"96db509b","chunk-2d212bc4":"c3c86d02","chunk-6d745e1c":"73f2daaa"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1e546950":1,"chunk-d9b03188":1,"chunk-27ab5e20":1,"chunk-6d745e1c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1e546950":"9ebe32bf","chunk-2d0a3a99":"31d6cfe0","chunk-d9b03188":"82946493","chunk-27ab5e20":"1b907bea","chunk-2d212bc4":"31d6cfe0","chunk-6d745e1c":"0116eff4"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/hello-kitty/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"12ab":function(e,t,n){},"2fa3":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("3d20"),a=n.n(r),o=a.a.mixin({toast:!0,position:"top-start",showConfirmButton:!1,timer:3e3})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=(n("7b17"),n("ab8b"),{name:"App"}),i=c,u=(n("034f"),n("2877")),s=Object(u["a"])(i,a,o,!1,null,null,null),l=s.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("caad"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-page-wrapper container w-100"},[n("div",{staticClass:"row justify-content-center my-5"},[e._m(0),n("form",{staticClass:"login-form col-8 my-5",on:{submit:function(t){return t.preventDefault(),e.loginSubmited.apply(null,arguments)}}},[n("div",{staticClass:"form-group mb-3"},[n("label",{attrs:{for:"account"}},[e._v("帳號")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],staticClass:"form-control",attrs:{type:"text",id:"account","aria-describedby":"emailHelp"},domProps:{value:e.account},on:{input:function(t){t.target.composing||(e.account=t.target.value)}}})]),n("div",{staticClass:"form-group mb-3"},[n("label",{attrs:{for:"password"}},[e._v("密碼")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[e._v("登入")])])])])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo text-center"},[n("h2",[e._v("Hello! Kitty")])])}],m=n("2fa3"),h={name:"ArtzyMan",account:"artzycool",password:"12344321",key:"430e08ac-f8ba-429b-be6e-28202c71b252"},g={name:"login",data:function(){return{account:"",password:"",loginIsReady:!1}},methods:{loginSubmited:function(){this.checkLoginInput(),this.loginIsReady&&(m["a"].fire({icon:"success",title:"歡迎登入，".concat(h.name)}),localStorage.setItem("key",h.key),this.$router.push("/cats"))},checkLoginInput:function(){this.account?this.password?this.account===h.account?this.password===h.password?this.loginIsReady=!0:m["a"].fire({icon:"warning",title:"密碼有誤"}):m["a"].fire({icon:"warning",title:"請輸入正確帳號"}):m["a"].fire({icon:"warning",title:"請輸入密碼"}):m["a"].fire({icon:"warning",title:"請輸入帳號"})}}},v=g,b=Object(u["a"])(v,f,p,!1,null,"40373b0e",null),y=b.exports;r["a"].use(d["a"]);var k=[{name:"root",path:"/",redirect:"/login"},{name:"log-in",path:"/login",component:y},{name:"cats",path:"/cats",component:function(){return Promise.all([n.e("chunk-1e546950"),n.e("chunk-d9b03188")]).then(n.bind(null,"3ce0"))}},{name:"self-cats",path:"/cats/self",component:function(){return Promise.all([n.e("chunk-1e546950"),n.e("chunk-2d0a3a99")]).then(n.bind(null,"02ab"))}},{name:"likes-cats",path:"/cats/likes",component:function(){return n.e("chunk-6d745e1c").then(n.bind(null,"1b5b"))}},{name:"upload-cats",path:"/cats/upload",component:function(){return n.e("chunk-27ab5e20").then(n.bind(null,"d7f2"))}},{name:"not-found",path:"*",component:function(){return n.e("chunk-2d212bc4").then(n.bind(null,"aa4b"))}}],w=new d["a"]({routes:k});w.beforeEach((function(e,t,n){console.log(e.name);var r=localStorage.getItem("key"),a=["log-in"];r&&a.includes(e.name)&&localStorage.removeItem("key"),r||a.includes(e.name)?n():n("/login")}));var _=w,x=n("1da1"),C=n("2909"),j=(n("96cf"),n("2f62")),O=n("f8c8");r["a"].use(j["a"]);var S=new j["a"].Store({state:{favourites:[]},mutations:{setFavourites:function(e,t){e.favourites=Object(C["a"])(t)}},actions:{fetchFavourites:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,O["a"].getAllFavourites();case 4:if(r=t.sent,200===r.status){t.next=7;break}throw new Error;case 7:n("setFavourites",r.data),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()}}});n("12ab");r["a"].config.productionTip=!1,new r["a"]({router:_,store:S,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},f8c8:function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r),o="https://api.thecatapi.com/v1",c=9,i="Desc",u=a.a.create({baseURL:o});u.interceptors.request.use((function(e){var t=localStorage.getItem("key");return t&&(e.headers["x-api-key"]=t),e}),(function(e){return Promise.reject(e)}));var s={getAllImages:function(e){var t={limit:c,order:i,page:e};return u.get("/images/search",{params:t})},getUploadImages:function(e){if(void 0!==e){var t={limit:c,order:i,page:e};return u.get("/images",{params:t})}return u.get("/images")},uploadImage:function(e){return u.post("/images/upload",e,{headers:{"Content-Type":"multipart/form-data"}})},addFavourite:function(e){return u.post("/favourites",{image_id:e})},deleteFavourite:function(e){return u.delete("/favourites/".concat(e))},getAllFavourites:function(e){if(void 0!==e){var t={limit:c,order:i,page:e};return u.get("/favourites",{params:t})}return u.get("/favourites")}};t["a"]=s}});
//# sourceMappingURL=app.8a1c64a0.js.map