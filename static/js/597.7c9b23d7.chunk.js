"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(t,e,a){a.r(e);var c=a(439),n=a(791),r=a(689),i=a(184);e.default=function(){var t=(0,n.useState)(null),e=(0,c.Z)(t,2),a=e[0],o=e[1],s=(0,r.UO)().movieId;if((0,n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(s,"/credits?api_key=").concat("62c1f197bf5eba282c3324513a13b5fa","&language=en-US")).then((function(t){return t.json()})).then((function(t){o(t.cast)}))}),[s]),a)return(0,i.jsx)(i.Fragment,{children:a.map((function(t){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.profile_path),alt:"actor",width:"300px"}),(0,i.jsx)("p",{children:t.name}),(0,i.jsxs)("p",{children:["Character ",t.character," "]})]},t.cast_id)}))})}}}]);
//# sourceMappingURL=597.7c9b23d7.chunk.js.map