(this.webpackJsonpday_24=this.webpackJsonpday_24||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),j=c(16),s=c.n(j),r=(c(22),c(7)),i=c(2),a=c(10),b=c(1),l=o.a.createContext(),d=l;function h(e){var t=e.children,c=Object(n.useState)(!1),o=Object(a.a)(c,2),j=o[0],s=o[1],r=Object(n.useState)(!1),i=Object(a.a)(r,2),d=i[0],h=i[1],O={loggedIn:j,loading:d,toggle:function(){h(!0),new Promise((function(e){setTimeout(e,1e3)})).then((function(){h(!1),s(!j)}))}};return Object(b.jsx)(l.Provider,{value:O,children:t})}function O(){var e=Object(n.useContext)(d);return Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h1",{children:"Home"}),Object(b.jsx)("h2",{children:"If not logged in cant access, Profile & Dashboard"}),e.loading?Object(b.jsx)("p",{children:"Loading..."}):Object(b.jsx)("button",{onClick:e.toggle,children:e.loggedIn?"Logout":"Login"})]})}function x(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2);t[0],t[1];return Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("h1",{children:"About: Public Route"})})}function u(){var e=Object(n.useContext)(d);return Object(b.jsx)("div",{className:"content",children:e.loggedIn?Object(b.jsx)("h1",{children:"Profile"}):Object(b.jsx)(i.a,{to:"/"})})}function g(){var e=Object(n.useContext)(d);return Object(b.jsx)("div",{className:"content",children:e.loggedIn?Object(b.jsx)("h1",{children:"Dashboard: Private Route"}):Object(b.jsx)(i.a,{to:"/"})})}var f=function(){return Object(b.jsxs)(r.a,{children:[Object(b.jsxs)("ul",{className:"navbar",children:[Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/about",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/profile",children:"Profile"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/dashboard",children:"Dashboard"})})]}),Object(b.jsx)(i.d,{children:Object(b.jsxs)(h,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/",component:O}),Object(b.jsx)(i.b,{exact:!0,path:"/about",component:x}),Object(b.jsx)(i.b,{exact:!0,path:"/profile",component:u}),Object(b.jsx)(i.b,{exact:!0,path:"/Dashboard",component:g})]})})]})};s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.b08e0e17.chunk.js.map