"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[129],{129:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(439),i=n(791),a=n(87),c=n(689),u="Home_link__VwutQ",l=n(184),o=function(){var e=(0,i.useState)(null),t=(0,r.Z)(e,2),n=t[0],o=t[1],s=(0,c.TH)();return(0,i.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/all/day?api_key=62c1f197bf5eba282c3324513a13b5fa").then((function(e){return e.json()})).then((function(e){o(e.results)}))}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Trending Today"}),(0,l.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(a.rU,{to:"/movies/".concat(e.id),state:s,className:u,children:e.title||e.name})},e.id)}))})]})}}}]);
//# sourceMappingURL=129.75faab87.chunk.js.map