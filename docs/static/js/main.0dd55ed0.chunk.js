(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.categorias,n=e.setCategories,r=Object(a.useState)(""),c=Object(i.a)(r,2),o=c[0],j=c[1];return Object(u.jsxs)("div",{className:"form_form",children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.includes(o.trim())||o.trim().length>2&&(n((function(e){return[o].concat(Object(s.a)(e))})),j(""))},children:[Object(u.jsx)("span",{children:"Search: "}),Object(u.jsx)("input",{type:"text",value:o,onChange:function(e){j(e.target.value)}})]})]})},j=n(10),d=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn animate__slower 5s",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsxs)("p",{children:[" ",t," "]})]})},l=n(6),f=n.n(l),m=n(8),p=function(){var e=Object(m.a)(f.a.mark((function e(t){var n,a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=100&api_key=kVDysAzfApLqZDIzJh0tt7KuRSTXR7zI"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",t," "]}),c&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(u.jsx)(d,Object(j.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o,{setCategories:r,categorias:n}),Object(u.jsx)("hr",{}),n.map((function(e){return Object(u.jsx)(b,{category:e},e)}))]})};n(17);c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0dd55ed0.chunk.js.map