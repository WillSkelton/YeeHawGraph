(this.webpackJsonpyeehawgraph=this.webpackJsonpyeehawgraph||[]).push([[0],{78:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(20),a=n.n(r),i=n(7),l=n(110),s=n(111),d=n(112),b=n(113),u=n(114),j=n(115),x=n(125),p=n(118),h=n(116),O=n(12),f=n(119),g=n(120),m=n(121),v=n(122),y=n(123),C=n(124),k=n(126),S=n(109);var w="#222222",M="HSL(217, 66%, 40%)",V="HSL(155, 66%, 40%)",H="HSL(182, 66%, 40%)",L="HSL(0, 0%, 0%)",N="HSL(0, 0%, 85%)",B="HSL(217, 82%, 55%)",E="HSL(131, 82%, 55%)",D="HSL(348, 83%, 47%)",I=n(2);function R(e){var t=e.vertexSet,n=e.setVertexSet,c={table:{},tableRow:{margin:"0px",boxSizing:"border-box",cursor:"pointer"},tableCell:{padding:"0px",cursor:"pointer"},tableHeader:{padding:"0px"},headerRow:{borderBottom:"2px solid ".concat(B),boxSizing:"border-box"},headerCell:{padding:"0px",minWidth:"16px",backgroundColor:w,color:N},addButton:{padding:"0px",color:N},vertexColumn:{color:N,backgroundColor:w,borderTop:"0px",borderBottom:"0px",borderRight:"2px solid ".concat(B),boxSizing:"border-box",width:"16px"},matrixCell:{border:"0px",maxWidth:"16px"}},o=Object.keys(t),r=[{backgroundColor:D,color:N},{backgroundColor:V,color:L},{backgroundColor:H,color:L}],a=function(e,c){var r=o.findIndex((function(e){return e===c}));o.forEach((function(e){t[e].splice(r,1)})),e.preventDefault();var a=Object(O.a)({},t);delete a[c],n(a)};return Object(I.jsx)(f.a,{component:g.a,style:c.table,children:Object(I.jsxs)(m.a,{size:"small",children:[Object(I.jsx)(v.a,{style:c.tableHeader,children:Object(I.jsxs)(y.a,{style:Object(O.a)(Object(O.a)({},c.headerRow),c.tableRow),children:[Object(I.jsx)(C.a,{align:"center",style:Object(O.a)(Object(O.a)(Object(O.a)({},c.tableCell),c.vertexColumn),c.headerCell),children:Object(I.jsx)(x.a,{disabled:o.length>=26,style:c.addButton,onClick:function(){var e=function(e){var t=e.length-1;if(t<0)return"A";if("Z"===e[t]){var n=e.split("");return n[t]="A","A".concat(n.join(""))}var c=e.split(""),o=e[t],r=String.fromCharCode(o.charCodeAt(0)+1);return c[t]=r,c.join("")}(o[o.length-1]),c=Object(O.a)({},t);c[e]=o.map((function(){return 0}));for(var r=0,a=Object.keys(c);r<a.length;r++){c[a[r]].push(0)}n(c)},children:Object(I.jsx)(S.a,{})})}),o.map((function(e){return Object(I.jsx)(C.a,{onContextMenu:function(t){return a(t,e)},align:"center",style:Object(O.a)({},c.headerCell),children:e})}))]})}),Object(I.jsx)(k.a,{children:o.map((function(e){return Object(I.jsxs)(y.a,{style:Object(O.a)({},c.tableRow),children:[Object(I.jsx)(C.a,{onContextMenu:function(t){return a(t,e)},align:"center",style:Object(O.a)(Object(O.a)({},c.tableCell),c.vertexColumn),children:e}),t[e].map((function(o,a){return Object(I.jsx)(C.a,{onClick:function(c){return function(e,c,o){e.preventDefault(),t[c][o]=(t[c][o]+1)%3,n(Object(O.a)({},t))}(c,e,a)},onContextMenu:function(c){return function(e,c,o){e.preventDefault(),0===t[c][o]?t[c][o]=2:t[c][o]-=1,n(Object(O.a)({},t))}(c,e,a)},align:"center",style:Object(O.a)(Object(O.a)(Object(O.a)({},c.tableCell),c.matrixCell),{},{backgroundColor:r[o].backgroundColor,color:r[o].color}),children:o})}))]})}))})]})})}var z=n(22);var A={circle:function(e){var t=e.data,n=t.label,o=t.diameter,r=t.backgroundColor,a=t.color,l=t.selfLoop,s=Object(c.useState)(r||M),d=Object(i.a)(s,2),b=d[0],u=d[1],j=Object(c.useState)(a||N),x=Object(i.a)(j,2),p=x[0],h=(x[1],{NodeStyles:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:0,boxSizing:"border-box"},Handle:{opacity:"0%"}});return Object(I.jsxs)("div",{onContextMenu:function(e){e.preventDefault(),u(function(e,t){var n=e.split("HSL(")[1].split(",")[0],c=e.split(n),o=t?parseInt(n,10)+t:parseInt(n,10)+30;return o<0?o=360-o:o>360&&(o%=360),c.join("".concat(o))}(b,60))},style:Object(O.a)(Object(O.a)({},h.NodeStyles),{},{height:o||"60px",width:o||"60px",borderRadius:o||"60px",backgroundColor:b,color:p,borderStyle:l?"double":"none",borderColor:p,borderWidth:l?"4px":"0px"}),children:[Object(I.jsx)(z.c,{id:"a",isConnectable:!1,type:"source",position:"top",style:Object(O.a)(Object(O.a)({},h.Handle),{},{top:"2%",left:"25%"})}),Object(I.jsx)(z.c,{id:"b",isConnectable:!1,type:"target",position:"top",style:Object(O.a)(Object(O.a)({},h.Handle),{},{top:"2%",left:"72%"})}),Object(I.jsx)(z.c,{id:"c",isConnectable:!1,type:"source",position:"top",style:Object(O.a)(Object(O.a)({},h.Handle),{},{top:"48%"})}),Object(I.jsx)("div",{children:n}),Object(I.jsx)(z.c,{id:"d",isConnectable:!1,type:"target",position:"bottom",style:Object(O.a)(Object(O.a)({},h.Handle),{},{top:"48%"})})]})}};function T(e){var t=e.elements,n=e.showMinimap,o=Object(c.useState)(void 0),r=Object(i.a)(o,2),a=r[0],l=r[1];return Object(c.useEffect)((function(){a&&a.fitView()}),[t,a]),Object(I.jsx)(z.e,{children:Object(I.jsxs)(z.f,{elements:t,nodeTypes:A,onElementsRemove:function(){},onConnect:function(){},onLoad:function(e){e.fitView(),l(e)},snapToGrid:!0,snapGrid:[15,15],children:[n&&Object(I.jsx)(z.d,{style:{backgroundColor:"black"},nodeStrokeColor:function(e){var t;return(null===(t=e.style)||void 0===t?void 0:t.background)?e.style.background:"input"===e.type?"#0041d0":"output"===e.type?"#ff0072":"default"===e.type?"#1a192b":"circle"===e.type?e.data.color||"black":"#eee"},nodeColor:function(e){var t;return(null===(t=e.style)||void 0===t?void 0:t.background)?e.style.background:"circle"===e.type?e.data.color||M:"#fff"},nodeBorderRadius:2}),Object(I.jsx)(z.b,{}),Object(I.jsx)(z.a,{color:"#aaa",gap:16})]})})}var G=n(127);function P(e){var t=e.toggleMenuOrientation,n=e.toggleMinimap,c=e.menuVertical,o=(e.showMinimap,{root:{display:"flex",flexDirection:{menuVertical:c}.menuVertical?"column":"row",alignItems:"center",justifyContent:"center",backgroundColor:"black",height:"100%",width:"100%"},button:{margin:"12px 12px",backgroundColor:B,color:N}});return Object(I.jsxs)("div",{style:o.root,children:[Object(I.jsx)(G.a,{style:o.button,variant:"contained",onClick:t,children:"Toggle Menu Orientation"}),Object(I.jsx)(G.a,{style:o.button,variant:"contained",onClick:n,children:"Toggle Minimap"})]})}function W(e){var t=e.elements;console.log(t);var n=[],c=[];return t.forEach((function(e){e.id.includes("->")?c.push(e):n.push(e)})),Object(I.jsxs)("div",{children:[Object(I.jsx)(p.a,{variant:"h3",style:{color:N},children:"Stats:"}),Object(I.jsx)(p.a,{style:{color:N},children:"Number of Vertices (n): ".concat(n.length)}),Object(I.jsx)(p.a,{style:{color:N},children:"Number of Edges (m): ".concat(c.length)})]})}function J(e){var t=360/e.length;e.forEach((function(e,n){var c=function(e){var t=e*Math.PI/180;return[300*Math.cos(t),300*Math.sin(t)]}(t*(n+1)),o=Object(i.a)(c,2),r=o[0],a=o[1];e.position={x:r,y:a}}))}function X(e){var t=Object.keys(e),n=[],c=[];return t.forEach((function(o,r){var a={id:o,type:"circle",position:{x:0,y:0},data:{label:o,selfLoop:!1,diameter:"30px"}};n.push(a),e[o].forEach((function(e,n){if(!(e<1)){var i=t[n];n===r&&e>=1&&(a.data.selfLoop=n===r);var l={id:"".concat(o,"->").concat(i),source:"".concat(o),target:"".concat(i),sourceHandle:"c",targetHandle:"d",type:"straight",animated:1===e};c.push(l)}}))})),J(n),[].concat(n,c)}document.getElementById("body").style.margin="0px";function Y(){var e,t=Object(c.useState)(!1),n=Object(i.a)(t,2),o=n[0],r=n[1],a=Object(c.useState)(!0),O=Object(i.a)(a,2),f=O[0],g=O[1],m=Object(c.useState)(!0),v=Object(i.a)(m,2),y=v[0],C=v[1],k=(e={menuOpen:o,menuVertical:f},Object(h.a)({App:{display:"flex",flexDirection:e.menuVertical?"row":"column",width:"100vw",height:"100vh"},Menu:{width:e.menuVertical?"40px":"100%",height:e.menuVertical?"100%":"40px",backgroundColor:"black",border:"2px solid ".concat(B),boxSizing:"border-box",display:"flex",flexDirection:e.menuVertical?"column":"row",justifyContent:"flex-start",alignItems:"center"},menuButton:{"&:hover":{color:E},color:B},SidePanel:{display:"flex",backgroundColor:"black",flexDirection:e.menuVertical?"row":"column",width:e.menuVertical?e.menuOpen?"30%":"0%":"100%",height:e.menuVertical?"100%":e.menuOpen?"30%":"0%"},Editor:{width:"100%",height:"100%",backgroundColor:"black",boxSizing:"border-box",overflowX:"auto",overflowY:"auto"},Legend:{width:"100%",height:"100%",backgroundColor:"black",boxSizing:"border-box"},GraphContainer:{width:e.menuVertical&&e.menuOpen?"70%":"100%",height:e.menuVertical?"100%":e.menuOpen?"70%":"100%",backgroundColor:"#222"}})()),S=Object(c.useState)(0),w=Object(i.a)(S,2),M=w[0],V=w[1],H=Object(c.useState)({A:[0,1,0,0],B:[0,0,1,0],C:[0,0,0,1],D:[1,0,0,0]}),L=Object(i.a)(H,2),D=L[0],z=L[1],A=Object(c.useState)([]),G=Object(i.a)(A,2),J=G[0],Y=G[1];Object(c.useEffect)((function(){Y(X(D))}),[]);var Z=function(e){r(!o||e!==M),V(e)};return Object(I.jsxs)("div",{className:k.App,children:[Object(I.jsxs)("div",{className:k.Menu,children:[Object(I.jsx)(j.a,{title:"Menu",placement:"right",children:Object(I.jsx)(x.a,{onClick:function(){r(!o)},children:Object(I.jsx)(l.a,{className:k.menuButton})})}),Object(I.jsx)(j.a,{title:"Editor",placement:"right",children:Object(I.jsx)(x.a,{onClick:function(){return Z(0)},children:Object(I.jsx)(s.a,{className:k.menuButton})})}),Object(I.jsx)(j.a,{title:"Stats",placement:"right",children:Object(I.jsx)(x.a,{onClick:function(){return Z(1)},children:Object(I.jsx)(d.a,{className:k.menuButton})})}),Object(I.jsx)(j.a,{title:"Legend",placement:"right",children:Object(I.jsx)(x.a,{onClick:function(){return Z(2)},children:Object(I.jsx)(b.a,{className:k.menuButton})})}),Object(I.jsx)(j.a,{title:"Settings",placement:"right",children:Object(I.jsx)(x.a,{onClick:function(){return Z(3)},children:Object(I.jsx)(u.a,{className:k.menuButton})})})]}),o&&Object(I.jsxs)("div",{className:k.SidePanel,children:[0===M&&Object(I.jsx)("div",{className:k.Editor,children:Object(I.jsx)(R,{vertexSet:D,setVertexSet:function(e){z(e),Y(X(e))}})}),1===M&&Object(I.jsx)(W,{elements:J}),2===M&&Object(I.jsx)("div",{className:k.Legend,children:Object(I.jsx)(p.a,{style:{color:N},children:"Legend"})}),3===M&&Object(I.jsx)("div",{className:k.Legend,children:Object(I.jsx)(P,{toggleMenuOrientation:function(){return g(!f)},toggleMinimap:function(){return C(!y)},menuVertical:f,showMinimap:y})})]}),Object(I.jsx)("div",{className:k.GraphContainer,children:Object(I.jsx)(T,{elements:J,showMinimap:y})})]})}a.a.render(Object(I.jsx)(o.a.StrictMode,{children:Object(I.jsx)(Y,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.5eb686ab.chunk.js.map