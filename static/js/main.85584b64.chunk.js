(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{22:function(e,t,a){e.exports=a(52)},44:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),o=a.n(r),l=a(5),u=a.n(l),s=a(19),i=a(3),m=a(6),h=a.n(m),f=(a(44),function(e){var t=e.options,a=e.handleChange,n=e.handleClick,r=e.tagName;return c.a.createElement("form",{className:"form"},c.a.createElement("select",{className:"select",defaultValue:r,onChange:a},c.a.createElement("option",{value:""},"Random"),t),c.a.createElement("button",{className:"btn",onClick:function(e){return n(e)}},"Generate quote!"))}),p=function(e){var t=e.handleClick,a=e.handleChange,n=e.allTags,r=e.tagName,o=n.map((function(e){var t=e.name;return t=t[0].toUpperCase()+t.slice(1),c.a.createElement("option",{key:e._id,value:e.name},t)}));return c.a.createElement(f,{options:o,handleChange:a,handleClick:t,tagName:r})},d=(a(45),function(){return c.a.createElement("div",{className:"loadingspinner"})}),v=a(20),b=a(21),E=(a(50),function(e){var t=e.author,a=e.quote;return c.a.createElement("div",null,c.a.createElement("div",{className:"quote-text"},c.a.createElement("div",{className:"quote-content"},c.a.createElement(v.a,{icon:b.a})," "+a)),c.a.createElement("div",{className:"quote-name"},c.a.createElement("span",{className:"author"},t)))}),g=(a(51),function(){var e=Object(n.useState)("there goes quote"),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("there goes author"),l=Object(i.a)(o,2),m=l[0],f=l[1],v=Object(n.useState)(""),b=Object(i.a)(v,2),g=b[0],j=b[1],N=Object(n.useState)([]),k=Object(i.a)(N,2),O=k[0],q=k[1],C=Object(n.useState)({}),w=Object(i.a)(C,2),x=(w[0],w[1]),S=Object(n.useState)(!1),y=Object(i.a)(S,2),B=y[0],J=y[1];Object(n.useEffect)((function(){fetch("https://api.quotable.io/tags").then((function(e){return e.json()})).then((function(e){q(e)}))}),[]);var T=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,e.prev=1,J(!0),x({}),""===g){e.next=10;break}return e.next=7,h()("https://api.quotable.io/random/?tags=".concat(g));case 7:e.t0=e.sent,e.next=13;break;case 10:return e.next=12,h()("https://api.quotable.io/random");case 12:e.t0=e.sent;case 13:a=e.t0,t||(f(a.data.author),r(a.data.content)),e.next=20;break;case 17:e.prev=17,e.t1=e.catch(1),x(!1);case 20:return J(!1),e.abrupt("return",(function(){t=!0}));case 22:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"main"},B?c.a.createElement(d,null):c.a.createElement("div",{className:"quote"},c.a.createElement(E,{quote:a,author:m}),c.a.createElement(p,{handleClick:function(e){e.preventDefault(),T()},handleChange:function(e){var t=e.target.value;j(t)},allTags:O,tagName:g}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.85584b64.chunk.js.map