(this.webpackJsonpbimark=this.webpackJsonpbimark||[]).push([[9],{39:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return a}));var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"buy_product",payload:{producto:e,cant:t}}},r=function(e){return{type:"remove_product",payload:e}},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"increment_product",payload:{id:e,cant:t}}},a=function(e){return{type:"decrement_product",payload:e}}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(49),r=n.n(c),i=n(50);function a(e){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(r.a.mark((function e(t){var n,c,i,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.prev=1,e.next=4,fetch(t,n).then((function(e){return e}));case 4:return c=e.sent,i=c.json(),e.abrupt("return",i);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(43);var c=n(55),r=n.n(c),i=function(e,t){switch(e){case"success":n("Confirmaci\xf3n",t||"\xa1Se ha realizado con \xc9xito!");break;case"error":n("Error",t||"\xa1Ocurri\xf3 un Error!");break;case"info":n("Informaci\xf3n",t||"Informaci\xf3n gen\xe9rica")}function n(t,n){r.a.fire({title:t,text:n,icon:e,confirmButtonText:"OK"})}}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(8),r=n(51),i=(n(44),n(0),n(3)),a=["children"],s=function(e){var t=e.children,n=Object(r.a)(e,a);return Object(i.jsx)("button",Object(c.a)(Object(c.a)({id:"buttonAgregar"},n),{},{children:t}))}},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(47),n(0);var c=n(13),r=n(39),i=n(41),a=n(20),s=n(42),u=n(3),o=function(e){var t=e.element,n=e.skeleton,o=Object(c.b)(),d=Object(c.c)((function(e){return e.reducer_product.ids})),j=Object(c.c)((function(e){return e.reducer_product.product}));if(t)var l=t.id,b=t.nombre,f=t.imagen,h=t.precio,p=t.descuento,O=t.precioFinal;return Object(u.jsx)("article",{className:"card",children:t?Object(u.jsxs)(u.Fragment,{children:[p&&Object(u.jsx)("span",{className:"descuento",children:"Desc. del ".concat(p,"%")}),Object(u.jsx)("div",{className:"contenedor-imagen",children:Object(u.jsx)("img",{src:f,alt:b})}),Object(u.jsx)("span",{className:"nombre_producto",children:b}),Object(u.jsx)("div",{className:"precio_producto",children:p?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("del",{children:Object(u.jsxs)("span",{className:"precio",children:["$ ",h,Object(u.jsx)("sup",{children:"00"})]})}),Object(u.jsxs)("span",{className:"precio_descuento",children:["$ ",O,Object(u.jsx)("sup",{children:"00"})]})]}):Object(u.jsxs)("span",{className:"precio",children:["$ ",h,Object(u.jsx)("sup",{children:"00"})]})}),Object(u.jsxs)("div",{className:"contenedor-botones",children:[Object(u.jsx)(s.a,{className:"agregar",onClick:function(){return function(e){d.includes(l)?o(Object(r.c)(l)):(o(Object(r.a)(e)),Object(i.a)("success","Se agreg\xf3 1 unidad de este Producto ")),j.map((function(e){e.id===l&&Object(i.a)("success","Se agreg\xf3 ".concat(e.cantidad," unidades de este Producto "))}))}(t)},children:"Agregar"}),Object(u.jsx)("button",{className:"ver",children:Object(u.jsx)(a.b,{to:"/productos/".concat(l),children:"Ver"})})]})]}):n})}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var c=n(56),r=n(3),i=function(){return Object(r.jsxs)("div",{className:"contendor-skeletonCard",style:{height:"100%"},children:[Object(r.jsx)(c.a,{width:"100%",height:"60%"}),Object(r.jsx)(c.a,{width:"100%",height:"20%"}),Object(r.jsx)(c.a,{width:"45%",height:"15%",inline:!0,style:{marginLeft:"7px"}}),Object(r.jsx)(c.a,{width:"45%",height:"15%",inline:!0,style:{marginLeft:"6px"}})]})}},47:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(58),n(0);var c=n(3),r=function(e){var t,n=e.categoria;n.includes("_")?t=n.split("_").join(" "):t=n;return Object(c.jsx)("div",{className:"bandera-categoria",children:Object(c.jsxs)("span",{children:["Categoria ",t]})})}},58:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var c=n(38),r=(n(54),n(0)),i=n(40),a=n(45),s=n(57),u=n(46),o=n(3);t.default=function(){var e=Object(r.useState)(null),t=Object(c.a)(e,2),n=t[0],d=t[1];Object(r.useEffect)((function(){Object(i.a)("".concat("https://server-bimark.herokuapp.com","/api/ofertas")).then((function(e){return d(e)}))}),[]);return Object(o.jsx)(r.Fragment,{children:Object(o.jsx)("section",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(s.a,{categoria:"OFERTAS"}),Object(o.jsx)("div",{className:"grid-destacados",children:n?n.map((function(e){return Object(o.jsx)(a.a,{element:e},e.id)})):function(e){for(var t=[],n=1;n<=e;n++)t.push(Object(o.jsx)(a.a,{skeleton:Object(o.jsx)(u.a,{})},n));return t}(10)})]})})})}}}]);
//# sourceMappingURL=9.36d76b47.chunk.js.map