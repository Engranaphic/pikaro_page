import{c as u,s as h,d as f}from"./index.02f4f094.js";import{_ as v,r as s,o as w,b as m,c as g,p as S,i as x,d as o}from"./index.4d898a24.js";const l=n=>(S("data-v-8d82607c"),n=n(),x(),n),W={id:"works"},b=l(()=>o("div",{class:"bg-clients"},null,-1)),y=l(()=>o("div",{class:"title-text"},"NUESTROS CLIENTES",-1)),E=l(()=>o("div",{class:"image_container flex flex-wrap justify-content-center"},null,-1)),I=[b,y,E],k={__name:"Shipment",props:["position","client_pos"],emits:["blur_toggle"],setup(n,{emit:B}){const c=s([]);s(0);const r=s(1);s(!1),s(0);const _=s(window.innerWidth),t=s(!1);return w(()=>{window.innerWidth<=990?t.value=!0:window.innerWidth>990&&(t.value=!1),window.onresize=()=>{_.value=window.innerWidth,window.innerWidth<=990&&!t.value?t.value=!0:window.innerWidth>990&&t.value&&(t.value=!1)},u(h(f,"gallery"),d=>{let e=[],a=[];d.forEach(i=>{let p={id:i.id,name:i.data().name,description:i.data().description,url:i.data().url,created:i.data().created};e.length>=6&&t.value==!1?(a.push(e),e=[]):e.length>=1&&t.value==!0&&(a.push(e),e=[]),e.push(p)}),e.length!=0&&(a.push(e),e=[]),r.value=a.length,c.value=a})}),(d,e)=>(m(),g("div",W,I))}},T=v(k,[["__scopeId","data-v-8d82607c"]]);export{T as default};