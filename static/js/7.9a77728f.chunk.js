(this.webpackJsonpbimark=this.webpackJsonpbimark||[]).push([[7],{39:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s}));var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"buy_product",payload:{producto:e,cant:t}}},r=function(){return{type:"pay_product",payload:[]}},a=function(e){return{type:"remove_product",payload:e}},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"increment_product",payload:{id:e,cant:t}}},s=function(e){return{type:"decrement_product",payload:e}}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(49),r=n.n(c),a=n(50);function i(e){return s.apply(this,arguments)}function s(){return(s=Object(a.a)(r.a.mark((function e(t){var n,c,a,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.prev=1,e.next=4,fetch(t,n).then((function(e){return e}));case 4:return c=e.sent,a=c.json(),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(43);var c=n(55),r=n.n(c),a=function(e,t){switch(e){case"success":n("Confirmaci\xf3n",t||"\xa1Se ha realizado con \xc9xito!");break;case"error":n("Error",t||"\xa1Ocurri\xf3 un Error!");break;case"info":n("Informaci\xf3n",t||"Informaci\xf3n gen\xe9rica")}function n(t,n){r.a.fire({title:t,text:n,icon:e,confirmButtonText:"OK"})}}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(8),r=n(51),a=(n(44),n(0),n(3)),i=["children"],s=function(e){var t=e.children,n=Object(r.a)(e,i);return Object(a.jsx)("button",Object(c.a)(Object(c.a)({id:"buttonAgregar"},n),{},{children:t}))}},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(47),n(0);var c=n(13),r=n(39),a=n(41),i=n(20),s=n(42),o=n(3),d=function(e){var t=e.element,n=e.skeleton,d=Object(c.b)(),u=Object(c.c)((function(e){return e.reducer_product.ids})),l=Object(c.c)((function(e){return e.reducer_product.product}));if(t)var j=t.id,b=t.nombre,f=t.imagen,p=t.precio,O=t.descuento,h=t.precioFinal;return Object(o.jsx)("article",{className:"card",children:t?Object(o.jsxs)(o.Fragment,{children:[O&&Object(o.jsx)("span",{className:"descuento",children:"Desc. del ".concat(O,"%")}),Object(o.jsx)("div",{className:"contenedor-imagen",children:Object(o.jsx)("img",{src:f,alt:b})}),Object(o.jsx)("span",{className:"nombre_producto",children:b}),Object(o.jsx)("div",{className:"precio_producto",children:O?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("del",{children:Object(o.jsxs)("span",{className:"precio",children:["$ ",p,Object(o.jsx)("sup",{children:"00"})]})}),Object(o.jsxs)("span",{className:"precio_descuento",children:["$ ",h,Object(o.jsx)("sup",{children:"00"})]})]}):Object(o.jsxs)("span",{className:"precio",children:["$ ",p,Object(o.jsx)("sup",{children:"00"})]})}),Object(o.jsxs)("div",{className:"contenedor-botones",children:[Object(o.jsx)(s.a,{className:"agregar",onClick:function(){return function(e){u.includes(j)?d(Object(r.c)(j)):(d(Object(r.a)(e)),Object(a.a)("success","Se agreg\xf3 1 unidad de este Producto ")),l.map((function(e){e.id===j&&Object(a.a)("success","Se agreg\xf3 ".concat(e.cantidad," unidades de este Producto "))}))}(t)},children:"Agregar"}),Object(o.jsx)("button",{className:"ver",children:Object(o.jsx)(i.b,{to:"/productos/".concat(j),children:"Ver"})})]})]}):n})}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(0);var c=n(56),r=n(3),a=function(){return Object(r.jsxs)("div",{className:"contendor-skeletonCard",style:{height:"100%"},children:[Object(r.jsx)(c.a,{width:"100%",height:"60%"}),Object(r.jsx)(c.a,{width:"100%",height:"20%"}),Object(r.jsx)(c.a,{width:"45%",height:"15%",inline:!0,style:{marginLeft:"7px"}}),Object(r.jsx)(c.a,{width:"45%",height:"15%",inline:!0,style:{marginLeft:"6px"}})]})}},47:function(e,t,n){},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(38),r=n(0),a=function(e,t){var n=Object(r.useState)(!1),a=Object(c.a)(n,2),i=a[0],s=a[1];return Object(r.useEffect)((function(){window.addEventListener("resize",(function(){window.screen.availWidth>=e&&window.screen.availWidth<t?s(!0):s(!1)})),window.screen.availWidth>=e&&window.screen.availWidth<t&&s(!0)}),[]),i}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(53);var c=n(3),r=function(e){var t=e.message;return Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(c.jsx)("span",{className:"titulo",children:t.toUpperCase()})})}},53:function(e,t,n){},54:function(e,t,n){},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(38),r=(n(54),n(0)),a=n(45),i=n(40),s=n(46),o=n(3),d=function(e){var t=e.category,n=Object(r.useState)(null),d=Object(c.a)(n,2),u=d[0],l=d[1];Object(r.useEffect)((function(){l(null),Object(i.a)("".concat("https://server-bimark.herokuapp.com","/api/categoria/").concat(t)).then((function(e){return l(e)}))}),[t]);return Object(o.jsx)("div",{className:"grid-destacados",children:u?u.map((function(e){return Object(o.jsx)(a.a,{element:e},e.id)})):function(e){for(var t=[],n=1;n<=e;n++)t.push(Object(o.jsx)(a.a,{skeleton:Object(o.jsx)(s.a,{})},n));return t}(10)})}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(38),r=n(0),a=n(68),i=n(69),s=n(40),o=n(45),d=n(48),u=n(46),l=n(3),j=function(e){var t=e.category,n=Object(d.a)(0,600),a=Object(d.a)(600,950),i=Object(d.a)(950,1500),j=Object(d.a)(1500,2e3),f=Object(r.useState)(null),p=Object(c.a)(f,2),O=p[0],h=p[1];Object(r.useEffect)((function(){var e="ofertas"!==t?"categoria/".concat(t):t;Object(s.a)("".concat("https://server-bimark.herokuapp.com","/api/").concat(e)).then((function(e){h(e.map((function(e){return Object(l.jsx)("li",{className:"glide__slide",children:Object(l.jsx)(o.a,{element:e},e.id)},e.id)})))}))}),[]);var m=function(e){for(var t=[],n=1;n<=e;n++)t.push(Object(l.jsx)(o.a,{skeleton:Object(l.jsx)(u.a,{})},n));return t};return Object(l.jsx)(r.Fragment,{children:O?Object(l.jsx)(b,{ofertas:O}):Object(l.jsxs)(l.Fragment,{children:[n&&Object(l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2,1fr)"},children:m(2)}),a&&Object(l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)"},children:m(3)}),i&&Object(l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)"},children:m(4)}),j&&Object(l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(5,1fr)"},children:m(5)})]})})},b=function(e){var t=e.ofertas;return Object(r.useEffect)((function(){new a.a(".glide",{type:"carousel",autoplay:2e3,startAt:1,dragThreshold:50,breakpoints:{600:{perView:2},950:{perView:3},1500:{perView:4},2e3:{perView:5}}}).mount({Controls:i.a})}),[]),Object(l.jsxs)("div",{className:"glide",style:{position:"relative"},children:[Object(l.jsx)("div",{className:"glide__track","data-glide-el":"track",style:{overflow:"hidden"},children:Object(l.jsx)("ul",{className:"glide__slides",style:{display:"grid",gridTemplateColumns:"repeat(".concat(t.length+13,",1fr)")},children:t})}),Object(l.jsxs)("div",{"data-glide-el":"controls",children:[Object(l.jsx)("button",{"data-glide-dir":"<",style:{position:"absolute",bottom:"50%",left:"5px",background:"#F53E3E",borderRadius:"5px",padding:"5px"},children:Object(l.jsx)("i",{style:{color:"#fff",fontSize:"25px"},className:"fas fa-chevron-left"})}),Object(l.jsx)("button",{"data-glide-dir":">",style:{position:"absolute",bottom:"50%",right:"5px",background:"#F53E3E",borderRadius:"5px",padding:"5px"},children:Object(l.jsx)("i",{style:{color:"#fff",fontSize:"25px"},className:"fas fa-chevron-right"})})]})]})}},70:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);n(70);var c=n(52),r=n(59),a=n.p+"static/media/abstract-blur-in-supermarket.e9ddc16e.jpg",i=n.p+"static/media/personas.d4d8eaa4.jpg",s=n(0),o=n(3),d=function(){return Object(o.jsxs)("div",{className:"grid_gallery",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:a,alt:"imagen con blur"})}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:i,alt:"personas comprando"})})]})},u=n.p+"static/media/28991.5efcb748.jpg",l=(n(25),n(62));t.default=function(){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)("div",{className:"banner",children:Object(o.jsx)("img",{src:u,alt:"banner"})}),Object(o.jsx)(c.a,{message:"\xa1\xa1 ofertas imperdibles !!"}),Object(o.jsx)(l.a,{category:"ofertas"}),Object(o.jsx)(c.a,{message:"productos destacados"}),Object(o.jsx)(r.a,{category:"lacteos"}),Object(o.jsx)(c.a,{message:"en bimark nos interesa lo que te conviene"}),Object(o.jsx)(d,{})]})}}}]);
//# sourceMappingURL=7.9a77728f.chunk.js.map