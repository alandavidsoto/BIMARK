(this.webpackJsonpbimark=this.webpackJsonpbimark||[]).push([[11],{38:function(t,e,A){"use strict";A.d(e,"a",(function(){return n}));var r=A(21);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var A=[],r=!0,n=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(A.push(c.value),!e||A.length!==e);r=!0);}catch(a){n=!0,o=a}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return A}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40:function(t,e,A){"use strict";A.d(e,"a",(function(){return c}));var r=A(49),n=A.n(r),o=A(50);function c(t){return i.apply(this,arguments)}function i(){return(i=Object(o.a)(n.a.mark((function t(e){var A,r,o,c=arguments;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A=c.length>1&&void 0!==c[1]?c[1]:{},t.prev=1,t.next=4,fetch(e,A).then((function(t){return t}));case 4:return r=t.sent,o=r.json(),t.abrupt("return",o);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}},48:function(t,e,A){"use strict";A.d(e,"a",(function(){return o}));var r=A(38),n=A(0),o=function(t,e){var A=Object(n.useState)(!1),o=Object(r.a)(A,2),c=o[0],i=o[1];return Object(n.useEffect)((function(){window.addEventListener("resize",(function(){window.screen.availWidth>=t&&window.screen.availWidth<e?i(!0):i(!1)})),window.screen.availWidth>=t&&window.screen.availWidth<e&&i(!0)}),[]),c}},49:function(t,e,A){t.exports=A(61)},50:function(t,e,A){"use strict";function r(t,e,A,r,n,o,c){try{var i=t[o](c),a=i.value}catch(s){return void A(s)}i.done?e(a):Promise.resolve(a).then(r,n)}function n(t){return function(){var e=this,A=arguments;return new Promise((function(n,o){var c=t.apply(e,A);function i(t){r(c,n,o,i,a,"next",t)}function a(t){r(c,n,o,i,a,"throw",t)}i(void 0)}))}}A.d(e,"a",(function(){return n}))},61:function(t,e,A){var r=function(t){"use strict";var e,A=Object.prototype,r=A.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function a(t,e,A){return Object.defineProperty(t,e,{value:A,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(k){a=function(t,e,A){return t[e]=A}}function s(t,e,A,r){var n=e&&e.prototype instanceof b?e:b,o=Object.create(n.prototype),c=new Q(r||[]);return o._invoke=function(t,e,A){var r=l;return function(n,o){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===n)throw o;return L()}for(A.method=n,A.arg=o;;){var c=A.delegate;if(c){var i=E(c,A);if(i){if(i===j)continue;return i}}if("next"===A.method)A.sent=A._sent=A.arg;else if("throw"===A.method){if(r===l)throw r=d,A.arg;A.dispatchException(A.arg)}else"return"===A.method&&A.abrupt("return",A.arg);r=f;var a=u(t,e,A);if("normal"===a.type){if(r=A.done?d:h,a.arg===j)continue;return{value:a.arg,done:A.done}}"throw"===a.type&&(r=d,A.method="throw",A.arg=a.arg)}}}(t,A,c),o}function u(t,e,A){try{return{type:"normal",arg:t.call(e,A)}}catch(k){return{type:"throw",arg:k}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",f="executing",d="completed",j={};function b(){}function g(){}function p(){}var w={};a(w,o,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(N([])));m&&m!==A&&r.call(m,o)&&(w=m);var y=p.prototype=b.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function A(n,o,c,i){var a=u(t[n],t,o);if("throw"!==a.type){var s=a.arg,l=s.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){A("next",t,c,i)}),(function(t){A("throw",t,c,i)})):e.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return A("throw",t,c,i)}))}i(a.arg)}var n;this._invoke=function(t,r){function o(){return new e((function(e,n){A(t,r,e,n)}))}return n=n?n.then(o,o):o()}}function E(t,A){var r=t.iterator[A.method];if(r===e){if(A.delegate=null,"throw"===A.method){if(t.iterator.return&&(A.method="return",A.arg=e,E(t,A),"throw"===A.method))return j;A.method="throw",A.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var n=u(r,t.iterator,A.arg);if("throw"===n.type)return A.method="throw",A.arg=n.arg,A.delegate=null,j;var o=n.arg;return o?o.done?(A[t.resultName]=o.value,A.next=t.nextLoc,"return"!==A.method&&(A.method="next",A.arg=e),A.delegate=null,j):o:(A.method="throw",A.arg=new TypeError("iterator result is not an object"),A.delegate=null,j)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function N(t){if(t){var A=t[o];if(A)return A.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,c=function A(){for(;++n<t.length;)if(r.call(t,n))return A.value=t[n],A.done=!1,A;return A.value=e,A.done=!0,A};return c.next=c}}return{next:L}}function L(){return{value:e,done:!0}}return g.prototype=p,a(y,"constructor",p),a(p,"constructor",g),g.displayName=a(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},x(O.prototype),a(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,A,r,n,o){void 0===o&&(o=Promise);var c=new O(s(e,A,r,n),o);return t.isGeneratorFunction(A)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(y),a(y,i,"Generator"),a(y,o,(function(){return this})),a(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var A in t)e.push(A);return e.reverse(),function A(){for(;e.length;){var r=e.pop();if(r in t)return A.value=r,A.done=!1,A}return A.done=!0,A}},t.values=N,Q.prototype={constructor:Q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var A in this)"t"===A.charAt(0)&&r.call(this,A)&&!isNaN(+A.slice(1))&&(this[A]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var A=this;function n(r,n){return i.type="throw",i.arg=t,A.next=r,n&&(A.method="next",A.arg=e),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var a=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(a&&s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var A=this.tryEntries.length-1;A>=0;--A){var n=this.tryEntries[A];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,j):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),j},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var A=this.tryEntries[e];if(A.finallyLoc===t)return this.complete(A.completion,A.afterLoc),T(A),j}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var A=this.tryEntries[e];if(A.tryLoc===t){var r=A.completion;if("throw"===r.type){var n=r.arg;T(A)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,A,r){return this.delegate={iterator:N(t),resultName:A,nextLoc:r},"next"===this.method&&(this.arg=e),j}},t}(t.exports);try{regeneratorRuntime=r}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},83:function(t,e,A){},84:function(t,e,A){},85:function(t,e,A){},86:function(t,e,A){},90:function(t,e,A){"use strict";A.r(e);var r=A(0),n=(A(83),A(3)),o=function(){return Object(n.jsxs)("footer",{className:"footer",style:{marginTop:"5%"},children:[Object(n.jsxs)("div",{className:"redes",children:[Object(n.jsx)("h2",{style:{fontFamily:"tahoma"},children:"REDES"}),Object(n.jsxs)("span",{children:["Facebook \xa0 ",Object(n.jsx)("i",{className:"fab fa-facebook-square"})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{children:["Instagram \xa0 ",Object(n.jsx)("i",{class:"fab fa-instagram-square"})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{children:["Linkedin \xa0 ",Object(n.jsx)("i",{class:"fab fa-linkedin"})]}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{className:"creditos",children:[Object(n.jsx)("h2",{style:{fontFamily:"tahoma"},children:"AUTOR"}),"Sitio web creado por Alan David Soto.",Object(n.jsx)("br",{}),"Contacto \xa0",Object(n.jsx)("a",{href:"mailto:alansoto2015@outlook.com",children:"alansoto2015@outlook.com"})]})]})},c=A(38),i=(A(84),A(20)),a=A.p+"static/media/loupe.65f9f0c7.png",s=(A(85),function(t){var e=t.color,A=void 0===e?"#333":e;return Object(n.jsx)("div",{className:"loader",style:{borderLeftColor:A,borderTopColor:A}})}),u=A(40),l=function(){var t=Object(r.useRef)(),e=Object(r.useState)([]),A=Object(c.a)(e,2),o=A[0],l=A[1],h=Object(r.useState)(!1),f=Object(c.a)(h,2),d=f[0],j=f[1];return Object(n.jsxs)("form",{className:"formulario",style:{position:"relative"},children:[Object(n.jsx)("input",{ref:t,type:"text",placeholder:"Busca Tu producto Aqui",onChange:function(t){t.preventDefault();var e=t.target.value.toLowerCase();e.length>=3?(j(!0),Object(u.a)("".concat("https://server-bimark.herokuapp.com","/api/productos?search=").concat(e)).then((function(t){l(t)})).finally((function(){return j(!1)}))):l([])}}),Object(n.jsx)("span",{className:"button",children:d?Object(n.jsx)(s,{color:"#3584FB"}):Object(n.jsx)("img",{src:a,alt:"buscador",srcSet:""})}),o.length>0&&Object(n.jsx)("div",{style:{zIndex:"200",position:"absolute",top:"100%",width:"100%",background:"white",boxShadow:"1px 10px 12px #aaa",padding:"5px"},children:o.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(i.b,{to:"/productos/".concat(e.id),onClick:function(){t.current.value="",l([])},style:{fontSize:"0.7em",color:"#333"},children:e.nombre})})}))})]})},h=function(){return Object(n.jsx)("div",{className:"row-navbar",children:Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("h2",{style:{color:"#fff"},children:"Men\xfa"}),Object(n.jsx)("div",{style:{width:"100%",height:"2px",background:"#ccc"}}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/",children:"Inicio"})}),Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/productos",children:"Productos"})}),Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/ofertas",children:"Ofertas"})}),Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/nosotros",children:"Nosotros"})})]})]})})},f=(A(86),A(13)),d=A.p+"static/media/cart.1a3f86a8.png",j=function(){var t=Object(f.c)((function(t){return t.reducer_product.product}));return Object(n.jsx)("div",{className:"content_carrito_user",children:Object(n.jsxs)(i.b,{to:"/carrito",className:"carrito",children:[Object(n.jsx)("img",{src:d,alt:"Imagen de un icono de carrito de compras"}),t.length>0&&Object(n.jsx)("span",{className:"indicador_carrito",children:t.length})]})})},b=A(48),g=function(){var t=Object(r.useState)(!1),e=Object(c.a)(t,2),A=(e[0],e[1]);return Object(n.jsxs)("header",{className:"cabecera_mobile",children:[Object(n.jsx)(h,{}),Object(n.jsxs)("div",{className:"row-header",children:[Object(n.jsx)("div",{onClick:function(){var t=document.querySelector(".row-navbar");t.style.left="0%",A(!0),document.body.style.overflow="hidden",t.addEventListener("click",(function(e){"row-navbar"!=e.target.className&&"A"!=e.target.tagName||(t.style.left="-100%",document.body.style.overflow="scroll")}))},className:"hamburger",children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAQAAABecRxxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflDA0AMxhawOgrAAAC/ElEQVR42u3UQQ2AABADQeCPf6EIABWkj51R0FxyexwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN53rA864XwM49/sBrfQBgRwAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+dq4HPO96Aezc4w+81gcAdgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgZ+d6wPOuF8DOPf7Aa30AYEcAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJwPA84Gvhywu64AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTItMTNUMDA6NTE6MjQrMDA6MDCM9qQmAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTEyLTEzVDAwOjUxOjI0KzAwOjAw/ascmgAAAABJRU5ErkJggg==",alt:"menu"})}),Object(n.jsxs)(i.b,{className:"h1",to:"/",children:[Object(n.jsx)("span",{children:"B"}),"IMARK"]}),Object(n.jsx)(j,{})]}),Object(n.jsx)(l,{})]})},p=function(){return Object(n.jsxs)("header",{className:"cabecera_desktop",children:[Object(n.jsx)("div",{className:"row-navbar",children:Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/productos",children:"Productos"})}),Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/ofertas",children:"Ofertas"})}),Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/nosotros",children:"Nosotros"})})]})})}),Object(n.jsxs)("div",{className:"row-header",children:[Object(n.jsxs)(i.b,{className:"h1",to:"/",children:[Object(n.jsx)("span",{children:"B"}),"IMARK"]}),Object(n.jsx)(l,{}),Object(n.jsx)(j,{})]})]})},w=function(){var t=Object(b.a)(950,2e3);return Object(n.jsx)(n.Fragment,{children:t?Object(n.jsx)(p,{}):Object(n.jsx)(g,{})})};e.default=function(t){var e=t.children;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w,{}),e,Object(n.jsx)(o,{})]})}}}]);
//# sourceMappingURL=11.c6870b29.chunk.js.map