import{_ as p,u as d,r as c,w as f,b as v,o as m,c as h,e,h as b,l as x,m as g,p as k,d as I}from"./index.4653dcc6.js";import{_ as y}from"./logo-pikaro.9f1a5d1f.js";const a=t=>(k("data-v-02c64b41"),t=t(),I(),t),N={id:"navbar",class:"fixed"},S={class:"navbar flex"},E=a(()=>e("img",{src:y,alt:"logo"},null,-1)),j=a(()=>e("div",{class:"button-link cursor-pointer flex align-items-center justify-content-center"},"MERCHANDISING",-1)),w=a(()=>e("div",{class:"button-link cursor-pointer flex align-items-center justify-content-center"},"SISTEMAS DE IMPRESI\xD3N",-1)),B={__name:"NavBar",props:["position"],emits:["logout"],setup(t,{emit:C}){const n=t,s=d();c(!1);const o=c(!1),i=c(),r=()=>{s.push({name:"home"})},l=()=>{s.push({name:"services"})},u=()=>{s.push({name:"works"})},_=()=>{s.push({name:"about"})};return f(()=>n.position,()=>{n.position>600?o.value=!0:o.value=!1}),v(()=>{i.value=document.getElementById("navbar"),n.position>600?o.value=!0:o.value=!1}),(R,A)=>(m(),h("div",N,[e("div",S,[e("div",{onClick:r,class:"button-logo flex align-items-center justify-content-center cursor-pointer"},[b(g,{name:"follow"},{default:x(()=>[E]),_:1})]),e("div",{class:"flex flex-1 justify-content-center"},[e("div",{onClick:l,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"INICIO"),e("div",{onClick:u,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"PAPELER\xCDA"),e("div",{onClick:_,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"SOPORTES"),j,w])])]))}},O=p(B,[["__scopeId","data-v-02c64b41"]]);export{O as N};