(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(5),i=n.n(s),o=(n(11),n(2)),a=function(e){var t=e.name,n=e.email,r=e.id;return Object(c.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"funny robot"})," ",Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(c.jsx)("div",{children:t.map((function(e,n){return Object(c.jsx)(a,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},h=(n(4),function(e){var t=e.searchChange;return Object(c.jsx)("div",{children:Object(c.jsx)("input",{id:"searchbox",type:"search",placeholder:"search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t})})}),j=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",height:"80vh"},children:e.children})},l=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(""),a=Object(o.a)(i,2),l=a[0],u=a[1],d=Object(r.useState)(0),f=Object(o.a)(d,2),g=f[0],O=f[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){s(e)})),console.log(g)}),[g]);var m=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return n.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("img",{src:"https://fontmeme.com/permalink/201202/2b05458e27d8a5df9a4b631e27c77ef9.png",width:"400px"}),Object(c.jsx)(h,{searchChange:function(e){u(e.target.value)}})," ",Object(c.jsx)("button",{onClick:function(){return O(g+1)},children:"Click Me!"})," ",Object(c.jsxs)(j,{children:[Object(c.jsx)(b,{robots:m})," "]})]}):Object(c.jsx)("h1",{children:"Loading..."})},u=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))});i.a.render(Object(c.jsx)(l,{}),document.getElementById("root")),u()},4:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.38526524.chunk.js.map