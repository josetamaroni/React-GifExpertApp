(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),o=n(0),u=function(t){var e=t.categorias,n=t.setCategories,r=Object(a.useState)(""),c=Object(i.a)(r,2),u=c[0],j=c[1];return Object(o.jsxs)("div",{className:"form_form",children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.includes(u.trim())||u.trim().length>2&&(n((function(t){return[u].concat(Object(s.a)(t))})),j(""))},children:[Object(o.jsx)("span",{children:"Search: "}),Object(o.jsx)("input",{type:"text",value:u,onChange:function(t){j(t.target.value)}})]})]})},j=n(10),l=function(t){var e=t.id,n=t.title,a=t.url;return Object(o.jsxs)("div",{id:e,className:"card animate__animated animate__fadeIn animate__slower 5s",children:[Object(o.jsx)("img",{src:a,alt:n}),Object(o.jsxs)("p",{onClick:function(){return t={title:n,url:a,text:"te comparto un gif"},void(navigator.share?navigator.share(t).then((function(){return console.log("Successful share")})).catch((function(t){return console.log("Error sharing",t)})):(alert("Does not support sharing"),console.log("Does not support sharing")));var t},children:[" ",n," "]})]})},d=n(6),f=n.n(d),p=n(8),h=function(){var t=Object(p.a)(f.a.mark((function t(e){var n,a,r,c,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=100&api_key=kVDysAzfApLqZDIzJh0tt7KuRSTXR7zI"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){h(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",e," "]}),c&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(o.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(o.jsx)(l,Object(j.a)({},t),t.id)}))})]})},b=function(){var t=Object(a.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{setCategories:r,categorias:n}),Object(o.jsx)("hr",{}),n.map((function(t){return Object(o.jsx)(m,{category:t},t)}))]})};n(17);c.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b1f3b6f9.chunk.js.map