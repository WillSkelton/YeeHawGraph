(this.webpackJsonpyeehawgraph=this.webpackJsonpyeehawgraph||[]).push([[0],{71:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),c=o(19),a=o.n(c),l=o(8),i=o(10),d=o(99),s=o(100),b=o(101),j=o(102),p=o(103),x=o(104),u=o(96),h=o(97),O=o(105),f=o(98);var g=o(2);function y(e){var t=e.vertexSet,o=e.setVertexSet,n={table:{overflowX:"scroll",overflowY:"scroll"},tableRow:{margin:"0px",boxSizing:"border-box"},tableCell:{padding:"0px"},tableHeader:{padding:"0px"},headerRow:{borderBottom:"2px solid black",boxSizing:"border-box"},headerCell:{padding:"0px",minWidth:"16px"},addButton:{padding:"0px"},vertexColumn:{borderRight:"2px solid black",boxSizing:"border-box",width:"16px"},matrixCell:{border:"0px",maxWidth:"16px"}},r=Object.keys(t);return Object(g.jsx)(d.a,{component:s.a,style:n.table,children:Object(g.jsxs)(b.a,{size:"small",children:[Object(g.jsx)(j.a,{style:n.tableHeader,children:Object(g.jsxs)(p.a,{style:Object(i.a)(Object(i.a)({},n.headerRow),n.tableRow),children:[Object(g.jsx)(x.a,{align:"center",style:Object(i.a)(Object(i.a)({},n.vertexColumn),n.headerCell),children:Object(g.jsx)(u.a,{placement:"right",title:"Click to Add Vertex",children:Object(g.jsx)(h.a,{disabled:r.length>=26,style:n.addButton,onClick:function(){var e=function(e){var t=e.length-1;if(t<0)return"A";if("Z"===e[t]){var o=e.split("");return o[t]="A","A".concat(o.join(""))}var n=e.split(""),r=e[t],c=String.fromCharCode(r.charCodeAt(0)+1);return n[t]=c,n.join("")}(r[r.length-1]),n=Object(i.a)({},t);n[e]=r.map((function(){return 0}));for(var c=0,a=Object.keys(n);c<a.length;c++){n[a[c]].push(0)}o(n)},children:Object(g.jsx)(f.a,{})})})}),r.map((function(e){return Object(g.jsx)(x.a,{align:"center",style:Object(i.a)({},n.headerCell),children:e})}))]})}),Object(g.jsx)(O.a,{children:r.map((function(e){return Object(g.jsxs)(p.a,{style:Object(i.a)({},n.tableRow),children:[Object(g.jsx)(x.a,{align:"center",style:Object(i.a)(Object(i.a)({},n.tableCell),n.vertexColumn),children:e}),t[e].map((function(r,c){return Object(g.jsx)(x.a,{onClick:function(){return function(e,n){t[e][n]=t[e][n]?0:1,o(Object(i.a)({},t))}(e,c)},align:"center",style:Object(i.a)(Object(i.a)(Object(i.a)({},n.tableCell),n.matrixCell),{},{backgroundColor:r?"#3CB371":"#DC143C",color:r?"black":"white"}),children:r})}))]})}))})]})})}var v=o(24);var C={circle:function(e){var t=e.data,o=t.label,n=t.diameter,r=t.backgroundColor,c=t.color,a=t.selfLoop,l={NodeStyles:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:0,boxSizing:"border-box"},Handle:{opacity:"0%"}};return Object(g.jsxs)("div",{style:Object(i.a)(Object(i.a)({},l.NodeStyles),{},{height:n||"60px",width:n||"60px",borderRadius:n||"60px",backgroundColor:r||"#4169E1",color:c||"#FFF",borderStyle:a?"double":"none",borderColor:c||"#FFF",borderWidth:a?"4px":"0px"}),children:[Object(g.jsx)(v.c,{id:"a",isConnectable:!1,type:"source",position:"top",style:Object(i.a)(Object(i.a)({},l.Handle),{},{top:"2%",left:"25%"})}),Object(g.jsx)(v.c,{id:"b",isConnectable:!1,type:"target",position:"top",style:Object(i.a)(Object(i.a)({},l.Handle),{},{top:"2%",left:"72%"})}),Object(g.jsx)(v.c,{id:"c",isConnectable:!1,type:"source",position:"top",style:Object(i.a)(Object(i.a)({},l.Handle),{},{top:"48%"})}),Object(g.jsx)("div",{children:o}),Object(g.jsx)(v.c,{id:"d",isConnectable:!1,type:"target",position:"bottom",style:Object(i.a)(Object(i.a)({},l.Handle),{},{top:"48%"})})]})}},m=function(e){e.fitView()};function k(e){var t=e.elements;return Object(g.jsxs)(v.e,{elements:t,nodeTypes:C,onElementsRemove:function(){},onConnect:function(){},onLoad:m,snapToGrid:!0,snapGrid:[15,15],children:[Object(g.jsx)(v.d,{nodeStrokeColor:function(e){var t;return(null===(t=e.style)||void 0===t?void 0:t.background)?e.style.background:"input"===e.type?"#0041d0":"output"===e.type?"#ff0072":"default"===e.type?"#1a192b":"circle"===e.type?e.data.color||"black":"#eee"},nodeColor:function(e){var t;return(null===(t=e.style)||void 0===t?void 0:t.background)?e.style.background:"circle"===e.type?e.data.color||"#4169E1":"#fff"},nodeBorderRadius:2}),Object(g.jsx)(v.b,{}),Object(g.jsx)(v.a,{color:"#aaa",gap:16})]})}function w(e){var t=Object.keys(e),o=[],n=[];return t.forEach((function(r,c){var a={id:r,type:"circle",position:{x:500,y:100*c},data:{label:r,selfLoop:!1}};o.push(a),e[r].forEach((function(e,o){if(o!==c||1!==e){if(1===e){var l=t[o],i={id:"e".concat(r,"-").concat(l),source:"".concat(r),target:"".concat(l),sourceHandle:"c",targetHandle:"d",type:"straight",animated:!0};n.push(i)}}else a.data.selfLoop=o===c}))})),[].concat(o,n)}document.getElementById("body").style.margin="0px";function S(){var e={App:{display:"flex",flexDirection:"row",width:"100vw",height:"100vh"},SidePanel:{display:"flex",flexDirection:"column",width:"25%",height:"100%",backgroundColor:"#4169E1"},Editor:{width:"100%",height:"60%",backgroundColor:"#4169E1",boxSizing:"border-box",border:"2px solid white"},Legend:{width:"100%",height:"40%",backgroundColor:"black",boxSizing:"border-box",border:"2px solid white"},GraphContainer:{width:"75%",height:"100%",backgroundColor:"#222"}},t=Object(n.useState)({A:[1,0,0,0],B:[0,1,0,0],C:[0,0,1,0],D:[0,0,0,1]}),o=Object(l.a)(t,2),r=o[0],c=o[1],a=Object(n.useState)([]),i=Object(l.a)(a,2),d=i[0],s=i[1];Object(n.useEffect)((function(){s(w(r))}),[]);return Object(g.jsxs)("div",{className:"App",style:e.App,children:[Object(g.jsxs)("div",{className:"App",style:e.SidePanel,children:[Object(g.jsx)("div",{style:e.Editor,children:Object(g.jsx)(y,{vertexSet:r,setVertexSet:function(e){c(e),s(w(e))}})}),Object(g.jsx)("div",{style:e.Legend})]}),Object(g.jsx)("div",{className:"App",style:e.GraphContainer,children:Object(g.jsx)(k,{elements:d})})]})}a.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.ebbfb3c7.chunk.js.map