(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(4),s=c(1),b=(c(9),c(10),c(11),c(0)),d=function(t){var e=t.isActive,c=t.title,n=t.id,a=t.setActiveTabId;return Object(b.jsx)("li",{className:e?"is-active":"","data-cy":"Tab",children:Object(b.jsx)("button",{type:"button",className:"no-style-button",onClick:function(){return a(n)},tabIndex:0,onKeyPress:function(t){"Enter"===t.key&&a(n)},children:Object(b.jsx)("a",{href:"#".concat(n),"data-cy":"TabLink",children:c})})})},o=function(t){var e=t.tabs,c=t.activeTabId,n=t.setActiveTabId;return Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)(d,{id:t.id,title:t.title,isActive:c===t.id,setActiveTabId:n},t.id)}))})})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){var t=Object(s.useState)(r[0].id),e=Object(i.a)(t,2),c=e[0],n=e[1],a=r.find((function(t){return t.id===c}));return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:a?"Selected tab is ".concat(a.title):"No tab selected"}),Object(b.jsx)(o,{tabs:r,activeTabId:c,setActiveTabId:n}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:a?a.content:"No tab selected"})]})};a.a.render(Object(b.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.168a0a5d.chunk.js.map