import{c as p,s as f,d as h}from"./index.02f4f094.js";import{_ as v,r as a,o as w,b as m,c as g,p as x,j as W,e as o}from"./index.d06e6f38.js";const l=n=>(x("data-v-c14a9a0c"),n=n(),W(),n),b={id:"works"},y=l(()=>o("div",{class:"bg-clients"},null,-1)),S=l(()=>o("div",{class:"title-text"},"NUESTROS CLIENTES",-1)),E=l(()=>o("div",{class:"image_container flex flex-wrap justify-content-center"},null,-1)),I=[y,S,E],C={__name:"Confirm",props:["position","client_pos"],emits:["blur_toggle"],setup(n,{emit:k}){const d=a([]);a(0);const r=a(1);a(!1),a(0);const _=a(window.innerWidth),t=a(!1);return w(()=>{window.innerWidth<=990?t.value=!0:window.innerWidth>990&&(t.value=!1),window.onresize=()=>{_.value=window.innerWidth,window.innerWidth<=990&&!t.value?t.value=!0:window.innerWidth>990&&t.value&&(t.value=!1)},p(f(h,"gallery"),c=>{let e=[],s=[];c.forEach(i=>{let u={id:i.id,name:i.data().name,description:i.data().description,url:i.data().url,created:i.data().created};e.length>=6&&t.value==!1?(s.push(e),e=[]):e.length>=1&&t.value==!0&&(s.push(e),e=[]),e.push(u)}),e.length!=0&&(s.push(e),e=[]),r.value=s.length,d.value=s})}),(c,e)=>(m(),g("div",b,I))}},j=v(C,[["__scopeId","data-v-c14a9a0c"]]);export{j as default};