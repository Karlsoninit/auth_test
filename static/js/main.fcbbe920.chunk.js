(this["webpackJsonpreact-auth"]=this["webpackJsonpreact-auth"]||[]).push([[0],{26:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),i=a.n(r),c=a(9),l=a(15),s=a(6),u=a(7),m=a.n(u),h=a(16);a(32),a(34);h.initializeApp({apiKey:"AIzaSyDrgILcTg4U4_Va7nYPGVqi_Iv3BnBGjE4",authDomain:"authorization-3e689.firebaseapp.com",databaseURL:"https://authorization-3e689.firebaseio.com",projectId:"authorization-3e689",storageBucket:"authorization-3e689.appspot.com",messagingSenderId:"820706513856",appId:"1:820706513856:web:1af7ebfaa57ab0025e2e25"});var g=h,p=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.awrap(g.firestore().collection("guides").get());case 2:r(!0);case 3:case"end":return e.stop()}}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"home"),a&&o.a.createElement("h2",null,"greate !!! you can registration with link :)"),o.a.createElement("button",{onClick:function(){return g.auth().signOut()}},"Sign out"))},f=function(e){var t=e.history,a=Object(n.useState)(!1),r=Object(c.a)(a,2),i=r[0],l=r[1],s=Object(n.useCallback)((function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),t=e.target.elements.email,a.next=4,m.a.awrap(g.auth().sendSignInLinkToEmail(t.value,{url:"https://karlsoninit.github.io/auth_test/register",handleCodeInApp:!0}));case 4:l(!0),localStorage.setItem("emailForSignIn",t.value);case 6:case"end":return a.stop()}}))}),[]);console.log("test isSignInWithEmailLink",g.auth().isSignInWithEmailLink(t.location.search)),console.log("test history.location.search outside:",t);return Object(n.useEffect)((function(){!function(){var e;m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!g.auth().isSignInWithEmailLink(t.location.search)){a.next=7;break}return e=localStorage.getItem("emailForSignIn"),console.log("test history.location.search inner confirmInWithLink :",t.location.search),a.next=5,m.a.awrap(g.auth().signInWithEmailLink(e,t.location.search));case 5:localStorage.removeItem("emailForSignIn"),console.log("story",t.location.search);case 7:case"end":return a.stop()}}))}()}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:s},o.a.createElement("input",{type:"email",name:"email"}),o.a.createElement("button",{type:"submit"},"register")),i&&o.a.createElement("h2",null,"your confirm code you can find in your",localStorage.getItem("emailForSignIn")))},b=function(e){return e?o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/",exact:!0,component:p}),o.a.createElement(s.a,{to:"/"})):o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/register",component:f}),o.a.createElement(s.a,{to:"/register"}))};var E=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){g.auth().onAuthStateChanged(r)}),[a]),console.log(a);var i=b(a);return o.a.createElement(l.a,null,i)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.fcbbe920.chunk.js.map