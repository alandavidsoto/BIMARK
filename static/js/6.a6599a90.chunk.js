(this.webpackJsonpbimark=this.webpackJsonpbimark||[]).push([[6],{39:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"d",(function(){return r})),c.d(t,"c",(function(){return i})),c.d(t,"b",(function(){return a}));var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"buy_product",payload:{producto:e,cant:t}}},r=function(e){return{type:"remove_product",payload:e}},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"increment_product",payload:{id:e,cant:t}}},a=function(e){return{type:"decrement_product",payload:e}}},40:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(49),r=c.n(n),i=c(50);function a(e){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(r.a.mark((function e(t){var c,n,i,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>1&&void 0!==a[1]?a[1]:{},e.prev=1,e.next=4,fetch(t,c).then((function(e){return e}));case 4:return n=e.sent,i=n.json(),e.abrupt("return",i);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}},41:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));c(43);var n=c(55),r=c.n(n),i=function(e,t){switch(e){case"success":c("Confirmaci\xf3n",t||"\xa1Se ha realizado con \xc9xito!");break;case"error":c("Error",t||"\xa1Ocurri\xf3 un Error!");break;case"info":c("Informaci\xf3n",t||"Informaci\xf3n gen\xe9rica")}function c(t,c){r.a.fire({title:t,text:c,icon:e,confirmButtonText:"OK"})}}},42:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(8),r=c(51),i=(c(44),c(0),c(3)),a=["children"],s=function(e){var t=e.children,c=Object(r.a)(e,a);return Object(i.jsx)("button",Object(n.a)(Object(n.a)({id:"buttonAgregar"},c),{},{children:t}))}},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));c(47),c(0);var n=c(13),r=c(39),i=c(41),a=c(20),s=c(42),o=c(3),d=function(e){var t=e.element,c=e.skeleton,d=Object(n.b)(),u=Object(n.c)((function(e){return e.reducer_product.ids})),l=Object(n.c)((function(e){return e.reducer_product.product}));if(t)var j=t.id,b=t.nombre,h=t.imagen,p=t.precio,f=t.descuento,O=t.precioFinal;return Object(o.jsx)("article",{className:"card",children:t?Object(o.jsxs)(o.Fragment,{children:[f&&Object(o.jsx)("span",{className:"descuento",children:"Desc. del ".concat(f,"%")}),Object(o.jsx)("div",{className:"contenedor-imagen",children:Object(o.jsx)("img",{src:h,alt:b})}),Object(o.jsx)("span",{className:"nombre_producto",children:b}),Object(o.jsx)("div",{className:"precio_producto",children:f?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("del",{children:Object(o.jsxs)("span",{className:"precio",children:["$ ",p,Object(o.jsx)("sup",{children:"00"})]})}),Object(o.jsxs)("span",{className:"precio_descuento",children:["$ ",O,Object(o.jsx)("sup",{children:"00"})]})]}):Object(o.jsxs)("span",{className:"precio",children:["$ ",p,Object(o.jsx)("sup",{children:"00"})]})}),Object(o.jsxs)("div",{className:"contenedor-botones",children:[Object(o.jsx)(s.a,{className:"agregar",onClick:function(){return function(e){u.includes(j)?d(Object(r.c)(j)):(d(Object(r.a)(e)),Object(i.a)("success","Se agreg\xf3 1 unidad de este Producto ")),l.map((function(e){e.id===j&&Object(i.a)("success","Se agreg\xf3 ".concat(e.cantidad," unidades de este Producto "))}))}(t)},children:"Agregar"}),Object(o.jsx)("button",{className:"ver",children:Object(o.jsx)(a.b,{to:"/productos/".concat(j),children:"Ver"})})]})]}):c})}},46:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));c(0);var n=c(56),r=c(3),i=function(){return Object(r.jsxs)("div",{className:"contendor-skeletonCard",style:{height:"100%"},children:[Object(r.jsx)(n.a,{width:"100%",height:"60%"}),Object(r.jsx)(n.a,{width:"100%",height:"20%"}),Object(r.jsx)(n.a,{width:"45%",height:"15%",inline:!0,style:{marginLeft:"7px"}}),Object(r.jsx)(n.a,{width:"45%",height:"15%",inline:!0,style:{marginLeft:"6px"}})]})}},47:function(e,t,c){},48:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(38),r=c(0),i=function(e,t){var c=Object(r.useState)(!1),i=Object(n.a)(c,2),a=i[0],s=i[1];return Object(r.useEffect)((function(){window.addEventListener("resize",(function(){window.screen.availWidth>=e&&window.screen.availWidth<t?s(!0):s(!1)})),window.screen.availWidth>=e&&window.screen.availWidth<t&&s(!0)}),[]),a}},52:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));c(53);var n=c(3),r=function(e){var t=e.message;return Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)("span",{className:"titulo",children:t.toUpperCase()})})}},53:function(e,t,c){},62:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var n=c(38),r=c(0),i=c(68),a=c(69),s=c(40),o=c(45),d=c(48),u=c(46),l=c(3),j=function(e){var t=e.category,c=Object(d.a)(0,600),i=Object(d.a)(600,950),a=Object(d.a)(950,1500),j=Object(d.a)(1500,2e3),h=Object(r.useState)(null),p=Object(n.a)(h,2),f=p[0],O=p[1];Object(r.useEffect)((function(){var e="ofertas"!==t?"categoria/".concat(t):t;Object(s.a)("".concat("https://server-bimark.herokuapp.com","/api/").concat(e)).then((function(e){O(e.map((function(e){return Object(l.jsx)("li",{className:"glide__slide",children:Object(l.jsx)(o.a,{element:e},e.id)},e.id)})))}))}),[]);var m=function(e){for(var t=[],c=1;c<=e;c++)t.push(Object(l.jsx)(o.a,{skeleton:Object(l.jsx)(u.a,{})},c));return t};return Object(l.jsx)(r.Fragment,{children:f?Object(l.jsx)(b,{ofertas:f}):Object(l.jsxs)(l.Fragment,{children:[c&&Object(l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2,1fr)"},children:m(2)}),i&&Object(l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)"},children:m(3)}),a&&Object(l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)"},children:m(4)}),j&&Object(l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(5,1fr)"},children:m(5)})]})})},b=function(e){var t=e.ofertas;return Object(r.useEffect)((function(){new i.a(".glide",{type:"carousel",autoplay:2e3,startAt:1,dragThreshold:50,breakpoints:{600:{perView:2},950:{perView:3},1500:{perView:4},2e3:{perView:5}}}).mount({Controls:a.a})}),[]),Object(l.jsxs)("div",{className:"glide",style:{position:"relative"},children:[Object(l.jsx)("div",{className:"glide__track","data-glide-el":"track",style:{overflow:"hidden"},children:Object(l.jsx)("ul",{className:"glide__slides",style:{display:"grid",gridTemplateColumns:"repeat(".concat(t.length+13,",1fr)")},children:t})}),Object(l.jsxs)("div",{"data-glide-el":"controls",children:[Object(l.jsx)("button",{"data-glide-dir":"<",style:{position:"absolute",bottom:"50%",left:"5px",background:"#F53E3E",borderRadius:"5px",padding:"5px"},children:Object(l.jsx)("i",{style:{color:"#fff",fontSize:"25px"},className:"fas fa-chevron-left"})}),Object(l.jsx)("button",{"data-glide-dir":">",style:{position:"absolute",bottom:"50%",right:"5px",background:"#F53E3E",borderRadius:"5px",padding:"5px"},children:Object(l.jsx)("i",{style:{color:"#fff",fontSize:"25px"},className:"fas fa-chevron-right"})})]})]})}},63:function(e,t,c){},64:function(e,t,c){"use strict";t.a=c.p+"static/media/add.5b4f4653.svg"},65:function(e,t,c){"use strict";t.a=c.p+"static/media/minus.10d5e9c2.svg"},86:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var n=c(38),r=(c(26),c(86),c(0)),i=c(2),a=c(40),s=(c(63),c(64)),o=c(65),d=c(3),u=function(e){var t=e.handlerAcumulador,c=e.acumulador;return Object(d.jsxs)("div",{className:"cantidad",children:[Object(d.jsx)("button",{onClick:function(){return t("minus")},children:Object(d.jsx)("img",{src:o.a,alt:"minus"})}),Object(d.jsx)("span",{children:c}),Object(d.jsx)("button",{onClick:function(){return t("add")},children:Object(d.jsx)("img",{src:s.a,alt:"add"})})]})},l=c(13),j=c(39),b=c(41),h=c(62),p=c(52),f=c(42),O=c(56);t.default=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),c=t[0],s=t[1],o=Object(r.useState)(null),m=Object(n.a)(o,2),x=m[0],g=m[1],v=Object(i.f)(),y=Object(l.c)((function(e){return e.reducer_product.ids})),w=Object(l.b)();return Object(r.useEffect)((function(){Object(a.a)("".concat("https://server-bimark.herokuapp.com","/api/productos/").concat(v.id)).then((function(e){return g(e[0])}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("section",{className:"container-producto",children:[Object(d.jsx)("div",{className:"container-imagen",children:x?Object(d.jsx)("img",{src:x.imagen,alt:x.nombre}):Object(d.jsx)(O.a,{width:"100%",height:"100%"})}),Object(d.jsxs)("div",{className:"container-descripcion",children:[x?Object(d.jsx)("h2",{children:x.nombre}):Object(d.jsx)(O.a,{height:"50px",width:"80%",style:{marginBottom:"3%"}}),x?Object(d.jsxs)("div",{className:"container-precio",children:[Object(d.jsxs)("span",{className:"precio-final",children:["$ ",x.precioFinal,",00"]}),x.descuento&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"precio-anterior",children:Object(d.jsxs)("del",{children:["$ ",x.precio,",00"]})}),Object(d.jsxs)("span",{className:"cartel-descuento",children:["-",x.descuento,"%"]})]})]}):Object(d.jsx)(O.a,{height:"40px",width:"70%",style:{marginBottom:"3%"}}),x?Object(d.jsx)(u,{elemento:x,handlerAcumulador:function(e){switch(e){case"add":s(c+1);break;case"minus":c>0&&s(c-1)}},acumulador:c}):Object(d.jsx)(O.a,{height:"40px",width:"60%",style:{marginBottom:"3%"}}),x?Object(d.jsx)(f.a,{className:"agregar_carrito",onClick:function(){return function(){var e=c,t=x;y.includes(t.id)?w(Object(j.c)(t.id,e)):w(Object(j.a)(t,e)),Object(b.a)("success","Se agrego ".concat(e," U. de este Producto"))}()},children:"Agregar al carrito"}):Object(d.jsx)(O.a,{height:"40px",width:"50%",style:{marginBottom:"3%"}})]})]}),Object(d.jsx)(p.a,{message:"Productos relacionados"}),x?Object(d.jsx)(h.a,{category:x.categoria}):Object(d.jsx)(O.a,{height:"250px"})]})})}}}]);
//# sourceMappingURL=6.a6599a90.chunk.js.map