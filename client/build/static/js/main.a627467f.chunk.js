(this.webpackJsonpyeehawgraph=this.webpackJsonpyeehawgraph||[]).push([[0],{78:function(e,t,n){"use strict";n.r(t);var c=n(0),l=n.n(c),r=n(20),a=n.n(r),o=n(11),i=n(7),s=n(110),d=n(111),j=n(112),b=n(113),h=n(114),x=n(115),u=n(125),O=n(116),p=n(119),f=n(120),g=n(121),y=n(122),m=n(123),v=n(124),C=n(126),S=n(109);var k="#222222",w="HSL(217, 66%, 40%)",V="HSL(155, 66%, 40%)",M="HSL(182, 66%, 40%)",E="HSL(0, 0%, 0%)",z="HSL(0, 0%, 85%)",L="HSL(217, 82%, 55%)",N="HSL(131, 82%, 55%)",H="HSL(348, 83%, 47%)",D=n(1);function B(e){var t=e.vertexSet,n=e.setVertexSet,c=e.clearVertexSet,l={table:{},tableRow:{margin:"0px",boxSizing:"border-box",cursor:"pointer"},tableCell:{padding:"0px",cursor:"pointer"},tableHeader:{padding:"0px"},headerRow:{borderBottom:"2px solid ".concat(L),boxSizing:"border-box"},headerCell:{padding:"0px",minWidth:"16px",backgroundColor:k,color:z},addButton:{padding:"0px",color:z},vertexColumn:{color:z,backgroundColor:k,borderTop:"0px",borderBottom:"0px",borderRight:"2px solid ".concat(L),boxSizing:"border-box",width:"16px"},matrixCell:{border:"0px",maxWidth:"16px"}},r=Object.keys(t),a=[{backgroundColor:H,color:z},{backgroundColor:V,color:E},{backgroundColor:M,color:E}],i=function(e,c){var l=r.findIndex((function(e){return e===c}));r.forEach((function(e){t[e].splice(l,1)})),e.preventDefault();var a=Object(o.a)({},t);delete a[c],n(a)};return Object(D.jsx)(p.a,{component:f.a,style:l.table,children:Object(D.jsxs)(g.a,{size:"small",children:[Object(D.jsx)(y.a,{style:l.tableHeader,children:Object(D.jsxs)(m.a,{style:Object(o.a)(Object(o.a)({},l.headerRow),l.tableRow),children:[Object(D.jsx)(v.a,{align:"center",style:Object(o.a)(Object(o.a)(Object(o.a)({},l.tableCell),l.vertexColumn),l.headerCell),onContextMenu:function(e){e.preventDefault(),c()},children:Object(D.jsx)(u.a,{disabled:r.length>=26,style:l.addButton,onClick:function(){var e=r[r.length-1]?function(e){var t=e.length-1;if(t<0)return"A";if("Z"===e[t]){var n=e.split("");return n[t]="A","A".concat(n.join(""))}var c=e.split(""),l=e[t],r=String.fromCharCode(l.charCodeAt(0)+1);return c[t]=r,c.join("")}(r[r.length-1]):"A",c=Object(o.a)({},t);c[e]=r.map((function(){return 0}));for(var l=0,a=Object.keys(c);l<a.length;l++){c[a[l]].push(0)}n(c)},onContextMenu:function(e){e.preventDefault(),c()},children:Object(D.jsx)(S.a,{})})}),r.map((function(e){return Object(D.jsx)(v.a,{onContextMenu:function(t){return i(t,e)},align:"center",style:Object(o.a)({},l.headerCell),children:e})}))]})}),Object(D.jsx)(C.a,{children:r.map((function(e){return Object(D.jsxs)(m.a,{style:Object(o.a)({},l.tableRow),children:[Object(D.jsx)(v.a,{onContextMenu:function(t){return i(t,e)},align:"center",style:Object(o.a)(Object(o.a)({},l.tableCell),l.vertexColumn),children:e}),t[e].map((function(c,r){return Object(D.jsx)(v.a,{onClick:function(c){return function(e,c,l){e.preventDefault(),t[c][l]=(t[c][l]+1)%3,n(Object(o.a)({},t))}(c,e,r)},onContextMenu:function(c){return function(e,c,l){e.preventDefault(),0===t[c][l]?t[c][l]=2:t[c][l]-=1,n(Object(o.a)({},t))}(c,e,r)},align:"center",style:Object(o.a)(Object(o.a)(Object(o.a)({},l.tableCell),l.matrixCell),{},{backgroundColor:a[c].backgroundColor,color:a[c].color}),children:c})}))]})}))})]})})}var T=n(22);var A={circle:function(e){var t=e.data,n=t.label,l=t.diameter,r=t.backgroundColor,a=t.color,s=t.selfLoop,d=Object(c.useState)(r||w),j=Object(i.a)(d,2),b=j[0],h=j[1],x=Object(c.useState)(a||z),u=Object(i.a)(x,2),O=u[0],p=(u[1],{NodeStyles:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:0,boxSizing:"border-box"},Handle:{opacity:"0%"}});return Object(D.jsxs)("div",{onContextMenu:function(e){e.preventDefault(),h(function(e,t){var n=e.split("HSL(")[1].split(",")[0],c=e.split(n),l=t?parseInt(n,10)+t:parseInt(n,10)+30;return l<0?l=360-l:l>360&&(l%=360),c.join("".concat(l))}(b,60))},style:Object(o.a)(Object(o.a)({},p.NodeStyles),{},{height:l||"60px",width:l||"60px",borderRadius:l||"60px",backgroundColor:b,color:O,borderStyle:s?"double":"none",borderColor:O,borderWidth:s?"4px":"0px"}),children:[Object(D.jsx)(T.c,{id:"a",isConnectable:!1,type:"source",position:"top",style:Object(o.a)(Object(o.a)({},p.Handle),{},{top:"2%",left:"25%"})}),Object(D.jsx)(T.c,{id:"b",isConnectable:!1,type:"target",position:"top",style:Object(o.a)(Object(o.a)({},p.Handle),{},{top:"2%",left:"72%"})}),Object(D.jsx)(T.c,{id:"c",isConnectable:!1,type:"source",position:"top",style:Object(o.a)(Object(o.a)({},p.Handle),{},{top:"48%"})}),Object(D.jsx)("div",{children:n}),Object(D.jsx)(T.c,{id:"d",isConnectable:!1,type:"target",position:"bottom",style:Object(o.a)(Object(o.a)({},p.Handle),{},{top:"48%"})})]})}};function I(e){var t=e.elements,n=e.showMinimap,l=Object(c.useState)(void 0),r=Object(i.a)(l,2),a=r[0],o=r[1];return Object(c.useEffect)((function(){a&&a.fitView()}),[t,a]),Object(D.jsx)(T.e,{children:Object(D.jsxs)(T.f,{elements:t,nodeTypes:A,onElementsRemove:function(){},onConnect:function(){},onLoad:function(e){e.fitView(),o(e)},snapToGrid:!0,snapGrid:[15,15],children:[n&&Object(D.jsx)(T.d,{style:{backgroundColor:"black"},nodeStrokeColor:function(e){var t;return(null===(t=e.style)||void 0===t?void 0:t.background)?e.style.background:"input"===e.type?"#0041d0":"output"===e.type?"#ff0072":"default"===e.type?"#1a192b":"circle"===e.type?e.data.color||"black":"#eee"},nodeColor:function(e){var t;return(null===(t=e.style)||void 0===t?void 0:t.background)?e.style.background:"circle"===e.type?e.data.color||w:"#fff"},nodeBorderRadius:2}),Object(D.jsx)(T.b,{}),Object(D.jsx)(T.a,{color:"#aaa",gap:16})]})})}var R=n(118),G=n(127);function P(){var e={root:{padding:"16px"},section:{margin:"8px 0px"},h1:{fontSize:"2.5rem",color:z},h2:{fontSize:"2rem",color:z},h3:{fontSize:"1.5rem",color:z},body1:{fontSize:"1rem",color:z},text:{color:z},tableCell:{color:z,"text-align":"left"},divider:{color:z,backgroundColor:z},table:{margin:"16px 0px 16px 0px",border:"1px solid ".concat(z)}};return Object(D.jsxs)("div",{style:e.root,children:[Object(D.jsxs)("div",{style:e.section,children:[Object(D.jsx)(R.a,{style:e.h2,children:"Creating a graph:"}),Object(D.jsx)(R.a,{style:e.body1,children:'To create a graph, open up the "Editor" tab to access the Adjacency Matrix Editor.'}),Object(D.jsx)(G.a,{style:e.divider})]}),Object(D.jsxs)("div",{style:e.section,children:[Object(D.jsx)(R.a,{style:e.h2,children:"Interacting with a Graph:"}),Object(D.jsxs)("div",{style:e.section,children:[Object(D.jsx)(R.a,{style:e.h3,children:"Adding a Vertex"}),Object(D.jsx)(R.a,{style:e.body1,children:'To add a vertex, click the "+" button in the upper left corner of the matrix editor.'}),Object(D.jsx)(G.a,{style:e.divider})]}),Object(D.jsxs)("div",{style:e.section,children:[Object(D.jsx)(R.a,{style:e.h3,children:"Deleting a Vertex:"}),Object(D.jsx)(R.a,{style:e.body1,children:"To delete a vertex, right click (or long press) on letter of that vertex."}),Object(D.jsx)(G.a,{style:e.divider})]}),Object(D.jsxs)("div",{style:e.section,children:[Object(D.jsx)(R.a,{style:e.h3,children:"Adding an Edge:"}),Object(D.jsx)(R.a,{style:e.body1,children:"To add an edge, click the cell of the row and column you want to be connected. Left clicking increases the cell value and right-clicking decreases it. The table below shows which numbers correspond to which edge types."}),Object(D.jsx)(p.a,{style:e.table,children:Object(D.jsxs)(g.a,{size:"small",children:[Object(D.jsx)(y.a,{children:Object(D.jsxs)(m.a,{children:[Object(D.jsx)(v.a,{style:e.tableCell,children:"Number"}),Object(D.jsx)(v.a,{style:e.tableCell,children:"Edge Type"})]})}),Object(D.jsxs)(C.a,{children:[Object(D.jsxs)(m.a,{children:[Object(D.jsx)(v.a,{style:e.tableCell,children:"0"}),Object(D.jsx)(v.a,{style:e.tableCell,children:"None"})]}),Object(D.jsxs)(m.a,{children:[Object(D.jsx)(v.a,{style:e.tableCell,children:"1"}),Object(D.jsx)(v.a,{style:e.tableCell,children:"Directed from Row to Column"})]}),Object(D.jsxs)(m.a,{children:[Object(D.jsx)(v.a,{style:e.tableCell,children:"2"}),Object(D.jsx)(v.a,{style:e.tableCell,children:"Undirected"})]})]})]})}),Object(D.jsx)(G.a,{style:e.divider})]}),Object(D.jsxs)("div",{style:e.section,children:[Object(D.jsx)(R.a,{style:e.h3,id:"changing-the-color-of-a-vertex",children:"Changing the Color of a Vertex:"}),Object(D.jsx)(R.a,{style:e.body1,children:"To change the color of a vertex, right click on it. There are 7 colors and they will cycle around."}),Object(D.jsx)(G.a,{style:e.divider})]}),Object(D.jsxs)("div",{style:e.section,children:[Object(D.jsx)(R.a,{style:e.h3,id:"clearing-the-matrix",children:"Clearing the Matrix:"}),Object(D.jsx)(R.a,{style:e.body1,children:'To clear the matrix, right click the "+" button.'}),Object(D.jsx)(G.a,{style:e.divider})]})]})]})}var W=n(128);function J(e){var t=e.toggleMenuOrientation,n=e.toggleMinimap,c=e.menuVertical,l={root:{display:"flex",flexDirection:{menuVertical:c}.menuVertical?"column":"row",alignItems:"center",justifyContent:"center",backgroundColor:"black",height:"100%",width:"100%"},button:{margin:"12px 12px",backgroundColor:L,color:z,textTransform:"none"}};return Object(D.jsxs)("div",{style:l.root,children:[Object(D.jsx)(W.a,{style:l.button,variant:"contained",onClick:t,children:"Flip Menu"}),Object(D.jsx)(W.a,{style:l.button,variant:"contained",onClick:n,children:"Toggle Minimap"})]})}function X(e){var t=e.elements,n={root:{padding:"8px"},tableCell:{color:z},graphStats:{margin:"16px 0px"},vertexStats:{margin:"16px 0px"}},c=[],l=[],r=0,a={};return t.forEach((function(e){e.id.includes("->")?l.push(e):(e.data.selfLoop&&r++,c.push(e))})),l.forEach((function(e){var t=e.id.split("->"),n=Object(i.a)(t,2),c=n[0],l=n[1];c&&l&&(a[l]=void 0===a[l]?1:a[l]+1,c!==l&&(a[c]=void 0===a[c]?1:a[c]+1))})),Object(D.jsxs)("div",{style:n.root,children:[Object(D.jsxs)("div",{styles:n.graphStats,children:[Object(D.jsx)(R.a,{variant:"h5",style:n.tableCell,children:"Graph Stats:"}),Object(D.jsx)(p.a,{children:Object(D.jsxs)(g.a,{size:"small",children:[Object(D.jsx)(y.a,{children:Object(D.jsxs)(m.a,{children:[Object(D.jsx)(v.a,{style:n.tableCell,children:"Value"}),Object(D.jsx)(v.a,{style:n.tableCell,children:"Count"})]})}),Object(D.jsxs)(C.a,{children:[Object(D.jsxs)(m.a,{children:[Object(D.jsx)(v.a,{style:n.tableCell,children:"Number of Vertices (n)"}),Object(D.jsx)(v.a,{style:n.tableCell,children:c.length})]}),Object(D.jsxs)(m.a,{children:[Object(D.jsx)(v.a,{style:n.tableCell,children:"Number of Edges (m)"}),Object(D.jsx)(v.a,{style:n.tableCell,children:l.length})]}),Object(D.jsxs)(m.a,{children:[Object(D.jsx)(v.a,{style:n.tableCell,children:"Self Loops"}),Object(D.jsx)(v.a,{style:n.tableCell,children:r})]})]})]})})]}),Object(D.jsxs)("div",{style:n.vertexStats,children:[Object(D.jsx)(R.a,{variant:"h5",style:n.tableCell,children:"Degrees of Each Vertex:"}),Object(D.jsx)(p.a,{children:Object(D.jsxs)(g.a,{size:"small",children:[Object(D.jsx)(y.a,{children:Object(D.jsxs)(m.a,{children:[Object(D.jsx)(v.a,{style:n.tableCell,children:"Vertex"}),Object(D.jsx)(v.a,{style:n.tableCell,children:"Degree"})]})}),Object(D.jsx)(C.a,{children:Object.keys(a).sort().map((function(e){return Object(D.jsxs)(m.a,{children:[Object(D.jsx)(v.a,{style:n.tableCell,children:e}),Object(D.jsx)(v.a,{style:n.tableCell,children:a[e]})]})}))})]})})]})]})}function Y(e){var t=360/e.length;e.forEach((function(e,n){var c=function(e){var t=e*Math.PI/180;return[300*Math.cos(t),300*Math.sin(t)]}(t*(n+1)),l=Object(i.a)(c,2),r=l[0],a=l[1];e.position={x:r,y:a}}))}function F(e){var t=Object.keys(e),n=[],c=[];return t.forEach((function(l,r){var a={id:l,type:"circle",position:{x:0,y:0},data:{label:l,selfLoop:!1,diameter:"30px"}};n.push(a),e[l].forEach((function(e,n){if(!(e<1)){var o=t[n];n===r&&e>=1&&(a.data.selfLoop=n===r);var i={id:"".concat(l,"->").concat(o),source:"".concat(l),target:"".concat(o),sourceHandle:"c",targetHandle:"d",type:"straight",animated:1===e};c.push(i)}}))})),Y(n),[].concat(n,c)}document.getElementById("body").style.margin="0px";function U(){var e,t=Object(c.useState)(!1),n=Object(i.a)(t,2),l=n[0],r=n[1],a=Object(c.useState)(!0),p=Object(i.a)(a,2),f=p[0],g=p[1],y=Object(c.useState)(!0),m=Object(i.a)(y,2),v=m[0],C=m[1],S=Object(c.useState)(0),k=Object(i.a)(S,2),w=k[0],V=k[1],M=(e={menuOpen:l,menuVertical:f,panelSize:[30,20,30,40][w]},Object(O.a)({App:{display:"flex",flexDirection:e.menuVertical?"row":"column",width:"100vw",height:"100vh"},Menu:{width:e.menuVertical?"40px":"100%",height:e.menuVertical?"100%":"40px",backgroundColor:"black",border:"2px solid ".concat(L),boxSizing:"border-box",display:"flex",flexDirection:e.menuVertical?"column":"row",justifyContent:"flex-start",alignItems:"center"},menuButton:{"&:hover":{color:N},color:L},SidePanel:{display:"flex",backgroundColor:"black",flexDirection:e.menuVertical?"row":"column",width:e.menuVertical?e.menuOpen?"".concat(e.panelSize,"%"):"0%":"100%",height:e.menuVertical?"100%":e.menuOpen?"".concat(e.panelSize,"%"):"0%"},Editor:{width:"100%",height:"100%",backgroundColor:"black",boxSizing:"border-box",overflowX:"auto",overflowY:"auto"},Legend:{width:"100%",height:"100%",backgroundColor:"black",boxSizing:"border-box"},Stats:{width:"100%",height:"100%",overflowX:"auto",overflowY:"auto"},GraphContainer:{width:e.menuVertical&&e.menuOpen?"".concat(100-e.panelSize,"%"):"100%",height:e.menuVertical?"100%":e.menuOpen?"".concat(100-e.panelSize,"%"):"100%",backgroundColor:"#222"}})()),E=Object(c.useState)({A:[0,1,0,0],B:[0,0,1,0],C:[0,0,0,1],D:[1,0,0,0]}),z=Object(i.a)(E,2),H=z[0],T=z[1],A=Object(c.useState)([]),R=Object(i.a)(A,2),G=R[0],W=R[1];Object(c.useEffect)((function(){W(F(H))}),[]);var Y=function(e){T(e),W(F(e))},U=function(e){r(!l||e!==w),V(e)};return Object(D.jsxs)("div",{className:M.App,children:[Object(D.jsxs)("div",{className:M.Menu,children:[Object(D.jsx)(x.a,{title:"Menu",placement:"right",children:Object(D.jsx)(u.a,{onClick:function(){r(!l)},children:Object(D.jsx)(s.a,{className:M.menuButton})})}),Object(D.jsx)(x.a,{title:"Editor",placement:"right",children:Object(D.jsx)(u.a,{onClick:function(){return U(0)},children:Object(D.jsx)(d.a,{className:M.menuButton})})}),Object(D.jsx)(x.a,{title:"Stats",placement:"right",children:Object(D.jsx)(u.a,{onClick:function(){return U(1)},children:Object(D.jsx)(j.a,{className:M.menuButton})})}),Object(D.jsx)(x.a,{title:"Legend",placement:"right",children:Object(D.jsx)(u.a,{onClick:function(){return U(2)},children:Object(D.jsx)(b.a,{className:M.menuButton})})}),Object(D.jsx)(x.a,{title:"Settings",placement:"right",children:Object(D.jsx)(u.a,{onClick:function(){return U(3)},children:Object(D.jsx)(h.a,{className:M.menuButton})})})]}),l&&Object(D.jsxs)("div",{className:M.SidePanel,children:[0===w&&Object(D.jsx)("div",{className:M.Editor,children:Object(D.jsx)(B,{vertexSet:H,setVertexSet:Y,clearVertexSet:function(){var e=Object(o.a)({},H);Object.keys(e).forEach((function(t){e[t]=e[t].map((function(){return 0}))})),Y(e)}})}),1===w&&Object(D.jsx)("div",{className:M.Stats,children:Object(D.jsx)(X,{elements:G})}),2===w&&Object(D.jsx)("div",{className:M.Legend,children:Object(D.jsx)(P,{})}),3===w&&Object(D.jsx)("div",{className:M.Legend,children:Object(D.jsx)(J,{toggleMenuOrientation:function(){return g(!f)},toggleMinimap:function(){return C(!v)},menuVertical:f,showMinimap:v})})]}),Object(D.jsx)("div",{className:M.GraphContainer,children:Object(D.jsx)(I,{elements:G,showMinimap:v})})]})}a.a.render(Object(D.jsx)(l.a.StrictMode,{children:Object(D.jsx)(U,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.a627467f.chunk.js.map