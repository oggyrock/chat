(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(4),s=n.n(a),r=n(13),i=n.n(r),o=(n(22),n(12)),u=n.n(o),j=n(14),l=n(9),d=(n(24),n(8)),b=(n(25),n(28),n(15)),h=n(16);d.a.initializeApp({apiKey:"AIzaSyCrSZXU-8UnKyBVZ2K7VTWQ5Wil7kY1nxI",authDomain:"chat-11f5e.firebaseapp.com",databaseURL:"https://chat-11f5e.firebaseio.com",projectId:"chat-11f5e",storageBucket:"chat-11f5e.appspot.com",messagingSenderId:"875437241790",appId:"1:875437241790:web:83369f76ff254d185ff5ef"});var f=d.a.auth(),p=d.a.firestore();function m(){return Object(c.jsx)("button",{className:"signin",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;f.signInWithPopup(e)},children:"Sign in with Google"})}function O(){return f.currentUser&&Object(c.jsx)("button",{className:"signout",onClick:function(){return f.signOut()},children:"Sign out"})}function x(){var e=Object(a.useRef)(),t=p.collection("messages"),n=t.orderBy("createdAt").limit(25),s=Object(h.a)(n,{idField:"id"}),r=Object(l.a)(s,1)[0],i=Object(a.useState)(""),o=Object(l.a)(i,2),b=o[0],m=o[1],O=function(){var n=Object(j.a)(u.a.mark((function n(c){var a,s,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),a=f.currentUser,s=a.uid,r=a.photoURL,n.next=4,t.add({text:b,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:s,photoURL:r});case 4:m(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"chat",children:[r&&r.map((function(e){return Object(c.jsx)(g,{message:e},e.id)})),Object(c.jsx)("div",{className:"dummy",ref:e})]}),Object(c.jsx)("label",{className:"wrapper",children:Object(c.jsxs)("form",{className:"form",children:[Object(c.jsx)("input",{value:b,onChange:function(e){return m(e.target.value)}}),Object(c.jsx)("button",{onClick:O,children:"Send"})]})})]})}function g(e){var t=e.message,n=t.text,a=t.uid,s=t.photoURL,r=a===f.currentUser.uid?"sent":"received";return Object(c.jsxs)("div",{className:"message ".concat(r),title:"yo",children:[Object(c.jsx)("img",{src:s,alt:""}),Object(c.jsx)("span",{children:n})]})}var v=function(){var e=Object(b.a)(f),t=Object(l.a)(e,1)[0];return console.log(t),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"background"}),t&&Object(c.jsxs)("header",{className:"header",children:[Object(c.jsxs)("div",{className:"user",children:[Object(c.jsx)("img",{src:t.photoURL,alt:""}),Object(c.jsx)("span",{children:t.displayName})]}),Object(c.jsx)(O,{})]}),Object(c.jsx)("section",{children:t?Object(c.jsx)(x,{}):Object(c.jsx)(m,{})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),N()}},[[30,1,2]]]);
//# sourceMappingURL=main.15c9774e.chunk.js.map