(this["webpackJsonpreact-auth"]=this["webpackJsonpreact-auth"]||[]).push([[0],{26:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),c=a.n(o),i=a(9),l=a(15),u=a(6),s=a(7),m=a.n(s),h=a(16);a(32),a(34);h.initializeApp({apiKey:"AIzaSyDrgILcTg4U4_Va7nYPGVqi_Iv3BnBGjE4",authDomain:"authorization-3e689.firebaseapp.com",databaseURL:"https://authorization-3e689.firebaseio.com",projectId:"authorization-3e689",storageBucket:"authorization-3e689.appspot.com",messagingSenderId:"820706513856",appId:"1:820706513856:web:1af7ebfaa57ab0025e2e25"});var g=h,p=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.awrap(g.firestore().collection("guides").get());case 2:o(!0);case 3:case"end":return e.stop()}}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"home"),a&&r.a.createElement("h2",null,"greate !!! you can registration with link :)"),r.a.createElement("button",{onClick:function(){return g.auth().signOut()}},"Sign out"))},f=function(e){var t=e.history,a=Object(n.useState)(!1),o=Object(i.a)(a,2),c=o[0],l=o[1],u=Object(n.useCallback)((function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),t=e.target.elements.email,a.next=4,m.a.awrap(g.auth().sendSignInLinkToEmail(t.value,{url:"http://localhost:3000/register",handleCodeInApp:!0}));case 4:l(!0),localStorage.setItem("emailForSignIn",t.value);case 6:case"end":return a.stop()}}))}),[]);return Object(n.useEffect)((function(){!function(){var e;m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!g.auth().isSignInWithEmailLink(t.location.search)){a.next=6;break}return e=localStorage.getItem("emailForSignIn"),a.next=4,m.a.awrap(g.auth().signInWithEmailLink(e,t.location.search));case 4:localStorage.removeItem("emailForSignIn"),console.log("story",t.location.search);case 6:case"end":return a.stop()}}))}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:u},r.a.createElement("input",{type:"email",name:"email"}),r.a.createElement("button",{type:"submit"},"register")),c&&r.a.createElement("h2",null,"your confirm code you can find in your",localStorage.getItem("emailForSignIn")))},b=function(e){return e?r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:p}),r.a.createElement(u.a,{to:"/"})):r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/register",component:f}),r.a.createElement(u.a,{to:"/register"}))};var E=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){g.auth().onAuthStateChanged(o)}),[a]),console.log(a);var c=b(a);return r.a.createElement(l.a,null,c)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.fc9b27ba.chunk.js.map