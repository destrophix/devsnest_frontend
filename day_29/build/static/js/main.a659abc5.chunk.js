(this.webpackJsonpday_29=this.webpackJsonpday_29||[]).push([[0],{13:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(4),i=c.n(a),o=(c(13),c(2)),s=function(e){return{type:"UPDATE_VALUE",payload:e}},d=function(e){return{type:"UPDATE_ERROR",payload:e}},l=function(e){return{type:"UPDATE_LOADING",payload:e}},u=c(1),j=function(){var e=Object(o.c)((function(e){return e.place})),t=Object(o.b)();return Object(u.jsx)("div",{className:"input-city",children:Object(u.jsxs)("div",{className:"place",children:[Object(u.jsx)("input",{type:"text",placeholder:"City",value:e,onChange:function(e){t(s(e.target.value))}}),Object(u.jsx)("button",{onClick:function(){t(l(!0)),t(function(e){return function(t){fetch("http://api.weatherapi.com/v1/forecast.json?key=d9714335618d4d118ab45619212807&q=".concat(e)).then((function(e){return e.json()})).then((function(e){return t(l(!1)),e.location?(t(d("")),t({type:"UPDATED_PLACEDATA",payload:e})):(t(d("WRONG QUERY")),t({type:"UPDATED_PLACEDATA",payload:""}))}))}}(e)),t(s(""))},children:"Submit"})]})})},b=function(){var e=Object(o.c)((function(e){return e.placeData})),t=new Date;return Object(u.jsxs)("div",{className:"current-weather",children:[Object(u.jsxs)("div",{className:"place-info",children:[Object(u.jsx)("h1",{children:e.location.name}),Object(u.jsx)("p",{children:["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()}),Object(u.jsx)("img",{src:e.current.condition.icon,alt:"weather"}),Object(u.jsx)("div",{children:e.current.condition.text})]}),Object(u.jsxs)("div",{className:"stats",children:[Object(u.jsxs)("div",{children:[e.current.temp_c,"\xb0"]}),Object(u.jsxs)("p",{children:[e.forecast.forecastday[0].day.maxtemp_c,"\xb0 /"," ",e.forecast.forecastday[0].day.mintemp_c,"\xb0"]})]})]})},p=function(){return Object(u.jsx)("div",{className:"weather-card",children:Object(u.jsx)(b,{})})},h=function(){var e=Object(o.c)((function(e){return e.placeData})),t=Object(o.c)((function(e){return e.error})),c=Object(o.c)((function(e){return e.loading}));return Object(u.jsx)("div",{children:c?Object(u.jsx)("p",{className:"weather-card",children:"Loading ..."}):t?Object(u.jsx)("p",{className:"weather-card",children:t}):""===e?Object(u.jsx)("div",{children:e}):Object(u.jsx)(p,{})})};var O=function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(j,{}),Object(u.jsx)(h,{})]})},y=c(3),f=c(8),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Mumbai",t=arguments.length>1?arguments[1]:void 0;return"UPDATE_VALUE"===t.type?t.payload:e},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"UPDATED_PLACEDATA"===t.type?t.payload:e},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"UPDATE_ERROR"===t.type?t.payload:e},A=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"UPDATE_LOADING"===t.type?t.payload:e},D=Object(y.b)({place:v,placeData:x,error:m,loading:A}),g=Object(y.c)(D,Object(y.a)(f.a));i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(o.a,{store:g,children:Object(u.jsx)(O,{})})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a659abc5.chunk.js.map