import{_ as v}from"./imagen.43a9ef84.js";import{P as h}from"./products-service.67a0c6b8.js";import{_ as g,r as a,u as f,o as x,b as i,c as r,e,F as b,h as k,t as d,p as y,j as S,f as w}from"./index.d06e6f38.js";const j="/assets/isologo.6d30e864.svg";const t=o=>(y("data-v-cadb0ad6"),o=o(),S(),o),C={id:"home"},I=t(()=>e("div",{class:"banner"},null,-1)),P={class:"destacados"},B=t(()=>e("div",{class:"title-text flex justify-content-center align-items-center"},[e("img",{src:j}),w(" Productos destacados")],-1)),H={class:"productos-container grid flex justify-content-center align-items-center"},$=t(()=>e("div",{class:"image"},[e("img",{src:v,alt:""})],-1)),z={class:"down-container flex justify-content-between align-items-center"},D={class:"text-box"},E=["onClick"],F=t(()=>e("div",{class:"instagram"},null,-1)),N=t(()=>e("div",{class:"footer"},null,-1)),V={__name:"Home",props:["position"],emits:["form-pop"],setup(o,{emit:L}){a(0),a(60);const _=a(new h),l=a(),u=f();x(()=>{let s={sku:null,category:null,name:null,banner:!0,min_val:null,max_val:null,page:1,size:12};_.value.getProducts(s).then(c=>{l.value=c.items}).catch(c=>{console.log("Error mounting: ",c.detail)})});const p=s=>{u.push("/producto/"+s)},m=s=>s.slice(0,1).toUpperCase()+s.slice(1);return(s,c)=>(i(),r("div",C,[I,e("div",P,[B,e("div",H,[(i(!0),r(b,null,k(l.value,n=>(i(),r("div",{key:n.sku,class:"productos col-3"},[$,e("div",z,[e("div",D,[e("h4",null,d(m(n.name)),1),e("h5",null,"Desde $"+d(n.price),1)]),e("div",{class:"button-compra cursor-pointer",onClick:M=>p(n.sku)},"Comprar",8,E)])]))),128))])]),F,N]))}},q=g(V,[["__scopeId","data-v-cadb0ad6"]]);export{q as default};
