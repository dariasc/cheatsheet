(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{7818:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var i=t(5893),r=t(3422),s=t.n(r);function a(e){return(0,i.jsx)("kbd",{className:s().box,children:e.content})}},6146:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var i=t(5893),r=t(7294),s=t(7818),a=t(4799),c=t.n(a),d=t(5802),o=t.n(d),l=[{angle:.5,dist:2e3},{angle:1,dist:1e3},{angle:1.5,dist:665},{angle:2,dist:500},{angle:2.5,dist:400},{angle:3,dist:335},{angle:3.5,dist:285},{angle:4,dist:250},{angle:4.5,dist:220},{angle:5,dist:200}],u={overworld:{factor:1,next:"nether"},nether:{factor:8,next:"overworld"}};function h(){var e=(0,r.useState)("overworld"),n=e[0],t=e[1];(0,r.useEffect)((function(){var e=function(e){"Space"===e.code&&t(u[n].next)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}));var a=u[n].factor;return(0,i.jsxs)("div",{className:o().container,children:[(0,i.jsx)("h1",{className:o().title,children:"triangulation"}),(0,i.jsx)("h1",{children:n}),(0,i.jsxs)("table",{className:"".concat(o().table," ").concat(c().table),children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"\u03d1"}),(0,i.jsx)("th",{children:"\u0394"})]})}),(0,i.jsx)("tbody",{children:l.map((function(e,n){return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.angle.toFixed(1)}),(0,i.jsx)("td",{children:Math.floor(e.dist/a)})]},n)}))})]}),(0,i.jsxs)("div",{className:o().keybinds,children:[(0,i.jsx)(s.Z,{content:"space"})," ",(0,i.jsxs)("span",{children:["- ",u[n].next]})]})]})}},1517:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sheet/triangulation",function(){return t(6146)}])},5802:function(e){e.exports={container:"Sheet_container__1-wYk",title:"Sheet_title__vZzUP",keybinds:"Sheet_keybinds__qO5Y_",table:"Sheet_table__2mISM"}},3422:function(e){e.exports={box:"Keybind_box__25EaU"}},4799:function(e){e.exports={table:"Triangulation_table__3Npxd"}}},function(e){e.O(0,[774,888,179],(function(){return n=1517,e(e.s=n);var n}));var n=e.O();_N_E=n}]);