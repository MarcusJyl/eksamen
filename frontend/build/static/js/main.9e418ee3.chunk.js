(this.webpackJsonpsecurity_frontend=this.webpackJsonpsecurity_frontend||[]).push([[0],{25:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),r=n(27),a=n.n(r),o=n(7),i=n(15),j=(n(34),["btn--primary","btn--outline","btn--test"]),l=["btn--medium","btn--large"],b=function(e){var t=e.children,n=e.type,c=e.onClick,r=e.buttonStyle,a=e.buttonSize,o=(e.link,j.includes(r)?r:j[0]),i=l.includes(a)?a:l[0];return Object(s.jsx)("button",{className:"btn ".concat(o," ").concat(i),onClick:c,type:n,children:t})},u=n(11);n(35);var d=function(e){var t=e.userRole,n=Object(c.useState)(!1),r=Object(o.a)(n,2),a=r[0],j=r[1],l=Object(c.useState)(!0),d=Object(o.a)(l,2),h=d[0],O=d[1],x=function(){return j(!1)},f=Object(c.useState)(Object(i.a)(t)),p=Object(o.a)(f,2),m=p[0],g=p[1],v=function(){window.innerWidth<=960?O(!1):O(!0)};function k(e){var t=e.text,n=e.path;return Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(u.b,{to:"/".concat(n),className:"nav-links",onClick:x,children:t})})}return Object(c.useEffect)((function(){v()}),[]),Object(c.useEffect)((function(){return g(Object(i.a)(t))}),[t]),window.addEventListener("resize",v),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbar-container",children:[Object(s.jsxs)(u.b,{to:"/",className:"navbar-logo",onClick:x,children:["BANDEN",Object(s.jsx)("i",{className:"fab fa-typo3"})]}),Object(s.jsx)("div",{className:"menu-icon",onClick:function(){return j(!a)},children:Object(s.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(s.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(s.jsx)(k,{text:"Home",path:""}),m.includes("admin")?Object(s.jsx)(k,{text:"Edit Book",path:"edit-book"}):Object(s.jsx)(s.Fragment,{}),Object(s.jsx)("li",{children:Object(s.jsx)(u.b,{to:"/signin",className:"nav-links-mobile",onClick:x,children:"SING IN"})})]}),h&&Object(s.jsx)(u.b,{to:"/signin",className:"btn-mobile",children:Object(s.jsx)(b,{buttonStyle:"btn--outline",link:"/signin",children:"SING IN"})})]})})})},h=(n(41),n(6)),O=n(13),x=n(8),f=function(){var e=function(){return localStorage.getItem("jwtToken")};return{setToken:function(e){localStorage.setItem("jwtToken",e)},getToken:e,loggedIn:function(){var t=null!=e();return console.log(t),t},logout:function(){localStorage.removeItem("jwtToken")}}}();function p(e){return e.ok?e.json():Promise.reject({status:e.status,fullError:e.json()})}var m=function(e,t,n){var s={method:e,headers:{"Content-type":"application/json",Accept:"application/json"}};return t&&f.loggedIn&&(s.headers["x-access-token"]=f.getToken()),n&&(s.body=JSON.stringify(n)),s};var g=f,v="https://marcusravnjensen.dk/tomcat/eksamen3sem",k="https://marcusravnjensen.dk/tomcat/eksamen3sem/api/book/";var N={login:function(e,t){var n=m("POST",!0,{username:e,password:t});return fetch(v+"/api/login",n).then(p).then((function(e){g.setToken(e.token)}))},fetchUserRole:function(e){var t=m("GET",!0);return fetch(v+"/api/info/"+e,t).then(p)},setToken:function(e){return e.setToken(e)},getToken:function(){return g.getToken()},loggedIn:function(){return g.loggedIn()},logout:function(){return g.logout()},signup:function(e,t){var n=m("POST",!0,{username:e,password:t});return fetch("http://localhost:8080/jpareststarter/api/signup",n).then(p)}};n(25);function w(e){var t=e.login,n=e.user,r=Object(c.useState)({username:"",password:""}),a=Object(o.a)(r,2),i=a[0],j=a[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Login"}),Object(s.jsxs)("form",{onChange:function(e){j(Object(x.a)(Object(x.a)({},i),{},Object(O.a)({},e.target.id,e.target.value)))},className:"form__group",children:[Object(s.jsx)("div",{className:"input",children:Object(s.jsx)("input",{type:"input",className:"form__field",placeholder:"Name",name:"username",id:"username",required:!0})}),Object(s.jsx)("div",{className:"input",children:Object(s.jsx)("input",{type:"input",className:"form__field",placeholder:"Password",name:"password",id:"password",required:!0})}),Object(s.jsx)("button",{onClick:function(e){e.preventDefault(),t(i.username,i.password)},children:"Login"})]}),"Loading..."!==n?n:Object(s.jsx)(s.Fragment,{children:" "}),Object(s.jsx)(u.b,{to:"/signup",children:"Sign-up"})]})}function y(e){var t=e.user,n=e.setUser,r=e.setUserRole,a=e.setLoggedIn,o=e.userRole;return Object(c.useEffect)((function(){a(!0);try{N.fetchUserRole("user").then((function(e){r(Object(i.a)(e.roles)),n(e.name)})).catch((function(e){})),N.fetchUserRole("admin").then((function(e){r(Object(i.a)(e.roles)),n(e.name)})).catch((function(e){}))}catch(e){a(!1),console.log(e)}}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Data Received from server"}),Object(s.jsxs)("h3",{children:["Hello ",t]}),Object(s.jsxs)("h3",{children:["Your role is ",o.map((function(e){return Object(s.jsxs)(s.Fragment,{children:[" ",e," "]})}))]})]})}var S=function(e){var t=e.login,n=e.setUser,c=e.user,r=e.loggedIn,a=e.logout,o=e.setUserRole,i=e.userRole,j=e.setLoggedIn;return Object(s.jsx)("div",{className:"login",children:r?Object(s.jsxs)("div",{children:[Object(s.jsx)(y,{userRole:i,setUser:n,user:c,setUserRole:o,setLoggedIn:j}),Object(s.jsx)("button",{onClick:a,children:"Logout"})]}):Object(s.jsx)(w,{login:t,user:c})})};var C=n(46);function L(e){var t=e.books,n=e.setBooks;return Object(c.useEffect)((function(){var e=m("GET",!0);fetch(k+"all",e).then(p).then((function(e){var t;(t=console).log.apply(t,Object(i.a)(e)),n(Object(i.a)(e))}))}),[]),Object(s.jsxs)(C.a,{striped:!0,bordered:!0,hover:!0,className:"m-5",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"isbn"}),Object(s.jsx)("td",{children:"Title"}),Object(s.jsx)("td",{children:"author"}),Object(s.jsx)("td",{children:"publisher"}),Object(s.jsx)("td",{children:"publish year"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.isbn}),Object(s.jsx)("td",{children:e.title}),Object(s.jsx)("td",{children:e.authors}),Object(s.jsx)("td",{children:e.publisher}),Object(s.jsx)("td",{children:e.publishYear})]},e.isbn)}))})]})}var I=function(e){e.login;var t=e.user,n=Object(c.useState)({username:"",password1:"",password2:""}),r=Object(o.a)(n,2),a=r[0],i=r[1],j=Object(c.useState)(""),l=Object(o.a)(j,2),b=l[0],d=l[1];return Object(s.jsxs)("div",{className:"login",children:[Object(s.jsx)("h2",{children:"Sign-up"}),Object(s.jsxs)("form",{onChange:function(e){i(Object(x.a)(Object(x.a)({},a),{},Object(O.a)({},e.target.id,e.target.value)))},className:"form__group",children:[Object(s.jsx)("div",{className:"input",children:Object(s.jsx)("input",{type:"input",className:"form__field",placeholder:"Name",name:"username",id:"username",required:!0})}),Object(s.jsx)("div",{className:"input",children:Object(s.jsx)("input",{type:"password",className:"form__field",placeholder:"Password",name:"password1",id:"password1",required:!0})}),Object(s.jsx)("div",{className:"input",children:Object(s.jsx)("input",{type:"password",className:"form__field",placeholder:"Password",name:"password2",id:"password2",required:!0})}),Object(s.jsx)("button",{onClick:function(e){e.preventDefault(),a.password1.length>0&&a.password2.length>0&&a.username.length>0?a.password1===a.password2?N.signup(a.username,a.password1).then((function(e){return console.log(e)})).catch((function(e){e.status?e.fullError.then((function(e){d(e.message)})):d("Network error")})):d("Password doesn't match"):d("You must write in all fields")},children:"Login"})]}),"Loading..."!==t?t:Object(s.jsx)(s.Fragment,{children:" "}),Object(s.jsx)(u.b,{to:"/signup",children:"Sign-up"}),Object(s.jsx)("p",{children:b})]})};n(42);var E=n(47),T=n(48);function R(e){e.books;var t={isbn:"",title:"",authors:"",publishers:"",publishYear:""},n=Object(c.useState)(Object(x.a)({},t)),r=Object(o.a)(n,2),a=r[0],i=r[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Add Book"}),Object(s.jsxs)(E.a.Group,{onChange:function(e){i(Object(x.a)(Object(x.a)({},a),{},Object(O.a)({},e.target.id,e.target.value)))},className:"m-5",children:[Object(s.jsx)(E.a.Label,{for:"isbn",children:"First name:"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Control,{type:"text",id:"isbn",name:"fname"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Label,{for:"title",children:"Last name:"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Control,{type:"text",id:"title",name:"lname"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Label,{for:"authors",children:"Last author:"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Control,{type:"text",id:"authors",name:"lname"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Label,{for:"publishers",children:"publisher"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Control,{type:"text",id:"publishers",name:"lname"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Label,{for:"publishYear",children:"publishYear:"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Control,{type:"text",id:"publishYear",name:"lname"}),Object(s.jsx)("br",{}),Object(s.jsx)(T.a,{type:"button",onClick:function(e){e.preventDefault();var n=m("POST",!0,a);fetch(k,n).then(p).then((function(e){i(Object(x.a)({},t))})).catch((function(e){e.status?e.fullError.then((function(e){return alert(e.message)})):console.log("Network error")}))},children:"Send"})]})]})}function _(e){var t=e.books,n=Object(c.useState)(""),r=Object(o.a)(n,2),a=r[0],i=r[1],j=Object(c.useState)({}),l=Object(o.a)(j,2),b=l[0],u=l[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Select book in table to be editet"}),Object(s.jsxs)(C.a,{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"isbn"}),Object(s.jsx)("td",{children:"Title"}),Object(s.jsx)("td",{children:"author"}),Object(s.jsx)("td",{children:"publisher"}),Object(s.jsx)("td",{children:"publish year"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsxs)("tr",{onClick:function(){return t=e,u(Object(x.a)({},t)),void console.log(t);var t},children:[Object(s.jsx)("td",{children:e.isbn}),Object(s.jsx)("td",{children:e.title}),Object(s.jsx)("td",{children:e.authors}),Object(s.jsx)("td",{children:e.publisher}),Object(s.jsx)("td",{children:e.publishYear})]},e.isbn)}))})]}),Object(s.jsx)("h1",{children:"Edit info"}),Object(s.jsxs)(E.a.Group,{onChange:function(e){u(Object(x.a)(Object(x.a)({},b),{},Object(O.a)({},e.target.id,e.target.value)))},className:"m-5",children:[Object(s.jsx)(E.a.Label,{for:"isbn",children:"First name:"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Control,{value:b.isbn,type:"text",id:"isbn"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Label,{for:"title",children:"Last name:"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Control,{value:b.title,type:"text",id:"title",name:"lname"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Label,{for:"authors",children:"Last author:"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Control,{value:b.authors,type:"text",id:"authors",name:"lname"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Label,{for:"publishers",children:"publisher"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Control,{value:b.publisher,type:"text",id:"publishers",name:"lname"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Label,{for:"publishYear",children:"publishYear:"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Control,{value:b.publishYear,type:"text",id:"publishYear",name:"lname"}),Object(s.jsx)("br",{}),Object(s.jsx)(T.a,{type:"button",onClick:function(e){e.preventDefault();var t=m("PUT",!0,b);fetch(k+b.id,t).then(p).then((function(e){u({})})).catch((function(e){e.status?e.fullError.then((function(e){return alert(e.message)})):console.log("Network error")}))},children:"Send"})]}),Object(s.jsx)("h1",{children:"Delete Book"}),Object(s.jsxs)(E.a.Group,{onChange:function(e){i(e.target.value)},className:"m-5",children:[Object(s.jsx)(E.a.Label,{for:"bookId",children:"ID of book to be deleted:"}),Object(s.jsx)("br",{}),Object(s.jsx)(E.a.Control,{type:"text",id:"bookId"}),Object(s.jsx)("br",{}),Object(s.jsx)(T.a,{type:"button",onClick:function(e){e.preventDefault();var t=m("DELETE",!0);fetch(k+a,t).then(p).then((function(e){})).catch((function(e){e.status?e.fullError.then((function(e){return alert(e.message)})):console.log("Network error")}))},children:"Delete"})]})]})}var U=function(){var e=Object(c.useState)("Loading..."),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(o.a)(a,2),j=i[0],l=i[1],b=Object(c.useState)([]),O=Object(o.a)(b,2),x=O[0],f=O[1],p=Object(c.useState)([]),m=Object(o.a)(p,2),g=m[0],v=m[1],k=function(e,t){N.login(e,t).then((function(e){l(!0)})).catch((function(e){e.status?e.fullError.then((function(e){r(e.message)})):console.log("Network error")}))},w=function(){N.logout(),r("Loading..."),l(!1),f([])};return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(u.a,{children:[Object(s.jsx)(d,{userRole:x}),Object(s.jsxs)(h.c,{children:[Object(s.jsx)(h.a,{path:"/",exact:!0,children:Object(s.jsx)(L,{books:g,setBooks:v})}),Object(s.jsxs)(h.a,{path:"/edit-book",children:[Object(s.jsx)(R,{books:g}),Object(s.jsx)(_,{books:g})]}),Object(s.jsx)(h.a,{path:"/signin",children:Object(s.jsx)(S,{userRole:x,setUserRole:f,login:k,setUser:r,user:n,loggedIn:j,logout:w,setLoggedIn:l})}),Object(s.jsx)(h.a,{path:"/signup",children:Object(s.jsx)(I,{userRole:x,setUserRole:f,login:k,setUser:r,user:n,loggedIn:j,logout:w,setLoggedIn:l})})]})]})})};n(44);a.a.render(Object(s.jsx)(U,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.9e418ee3.chunk.js.map