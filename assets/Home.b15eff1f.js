import{_ as v,r as o,b as m,o as f,c as h,p as y,d as x,e as i,j as b,T as w,f as I,a as B,g as C,h as u,i as $,k as W,F as T}from"./index.4653dcc6.js";import{N}from"./Formulario.vue_vue_type_style_index_0_scoped_552f8714_lang.4ea14264.js";import"./logo-pikaro.9f1a5d1f.js";const O="/pikaro_page/assets/logo-pikaro2.d6ce5c9d.svg";const R=a=>(y("data-v-7ff61479"),a=a(),x(),a),A={id:"home"},j=R(()=>i("div",{class:"gradient"},[i("div",{class:"flex justify-content-center"},[i("div",{class:"listado flex flex-column"},[i("img",{id:"main-logo",src:O,alt:"logo"})])])],-1)),V=[j],H={__name:"Home",props:["position"],emits:["form-pop"],setup(a,{emit:_}){const d=a;o(["DESARROLLO WEB","IMAGEN CORPORATIVA","ASESOR\xCDA DE PROYECTOS","INSUMOS REDES SOCIALES"]);const s=o(0),t=o(60),e=o();m(()=>{window.addEventListener("scroll",r),s.value=d.position,e.value=document.getElementById("main-logo")});const r=n=>{let l=n.srcElement.scrollingElement.scrollTop;l<200&&(t.value=50),s.value<l?t.value>10&&(t.value-=1):t.value<50&&(t.value+=1),e.value.style.width=t.value+"%",s.value=l};return(n,l)=>(f(),h("div",A,V))}},P=v(H,[["__scopeId","data-v-7ff61479"]]);const D={id:"service"},F=B('<div style="width:80%;margin:0 auto;" data-v-6927e674><div class="about-title col-12" data-v-6927e674>SERVICIOS</div><div class="grid" style="margin:0 !important;" data-v-6927e674><div class="col-12 flex flex-wrap justify-content-center py-2" data-v-6927e674><div class="contenido" data-v-6927e674><div class="image" data-v-6927e674></div><div class="text-info" data-v-6927e674>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</div></div><div class="contenido" data-v-6927e674><div class="image" data-v-6927e674></div><div class="text-info" data-v-6927e674>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</div></div><div class="contenido" data-v-6927e674><div class="image" data-v-6927e674></div><div class="text-info" data-v-6927e674>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</div></div><div class="contenido" data-v-6927e674><div class="image" data-v-6927e674></div><div class="text-info" data-v-6927e674>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</div></div></div></div></div>',1),M=[F],z={__name:"Service",emits:["blur_toggle"],setup(a,{emit:_}){const d=o([]);return o(!1),o(0),m(()=>{b(w(I,"services"),s=>{let t=[];s.forEach(e=>{let r={id:e.id,title:e.data().title,name:e.data().name,description:e.data().description,url:e.data().url,created:e.data().created};t.push(r)}),d.value=t})}),(s,t)=>(f(),h("div",D,M))}},G=v(z,[["__scopeId","data-v-6927e674"]]);const k=a=>(y("data-v-8bc2aa09"),a=a(),x(),a),U={id:"works"},Y=k(()=>i("div",{class:"bg-clients"},null,-1)),q=k(()=>i("div",{class:"title-text"},"NUESTROS CLIENTES",-1)),J=k(()=>i("div",{class:"image_container flex flex-wrap justify-content-center"},null,-1)),K=[Y,q,J],Q={__name:"Works",props:["position","client_pos"],emits:["blur_toggle"],setup(a,{emit:_}){const d=o([]);o(0);const s=o(1);o(!1),o(0);const t=o(window.innerWidth),e=o(!1);return m(()=>{window.innerWidth<=990?e.value=!0:window.innerWidth>990&&(e.value=!1),window.onresize=()=>{t.value=window.innerWidth,window.innerWidth<=990&&!e.value?e.value=!0:window.innerWidth>990&&e.value&&(e.value=!1)},b(w(I,"gallery"),r=>{let n=[],l=[];r.forEach(c=>{let p={id:c.id,name:c.data().name,description:c.data().description,url:c.data().url,created:c.data().created};n.length>=6&&e.value==!1?(l.push(n),n=[]):n.length>=1&&e.value==!0&&(l.push(n),n=[]),n.push(p)}),n.length!=0&&(l.push(n),n=[]),s.value=l.length,d.value=l})}),(r,n)=>(f(),h("div",U,K))}},X=v(Q,[["__scopeId","data-v-8bc2aa09"]]);const E=a=>(y("data-v-f31e5357"),a=a(),x(),a),Z={id:"contact"},ee={class:"footer bottom-0"},te=E(()=>i("div",{class:"texture"},null,-1)),se={class:"footer-content grid"},oe=E(()=>i("div",{class:"col-12 lg:col-3"},null,-1)),ae={class:"col-12 lg:col-6"},ne=E(()=>i("div",{class:"footer-title"},"Contacto",-1)),ie={class:"button-text text-center select-none cursor-pointer"},le={class:"col-12 lg:col-3 flex justify-content-center lg:justify-content-start"},ce={__name:"Contact",props:["position","contact_pos"],emits:["form-pop","logo_home"],setup(a,{emit:_}){const d=o([]);return m(()=>{b(w(I,"clients"),s=>{let t=[];s.forEach(e=>{let r={id:e.id,name:e.data().name,url:e.data().url,created:e.data().created};t.push(r)}),d.value=t})}),(s,t)=>{const e=C("font-awesome-icon");return f(),h("div",Z,[i("div",ee,[te,i("div",se,[oe,i("div",ae,[ne,i("div",ie,[u(e,{icon:"fa-solid fa-location-dot"}),$(" Direcci\xF3n: Volcan Calbuco #561, Temuco")])]),i("div",le,[i("div",{onClick:t[0]||(t[0]=r=>s.$emit("form-pop")),class:"button-text select-none cursor-pointer"},[u(e,{icon:"fa-solid fa-envelope"}),$(" pikaro@pikaro.cl")])])])])])}}},de=v(ce,[["__scopeId","data-v-f31e5357"]]);const re={__name:"Home",setup(a){const _=o(0),d=o(!1),s=o(!1);m(()=>{window.addEventListener("scroll",r),W.onAuthStateChanged(function(c){c?s.value=!0:s.value=!1})});const t=()=>{window.scrollTo(0,0)},e=()=>{s.value=!1},r=c=>{let g=c.srcElement.scrollingElement.scrollTop;_.value=g},n=()=>{d.value=!d.value,d.value?l(!0):l(!1)},l=c=>{s.value&&document.getElementById("navbar");let p=document.getElementById("home"),g=document.getElementById("service"),S=document.getElementById("works"),L=document.getElementById("contact");c?(s.value&&(nav.style.filter="blur(6px)"),p.style.filter="blur(6px)",g.style.filter="blur(6px)",S.style.filter="blur(6px)",L.style.filter="blur(6px)"):(s.value&&(nav.style.filter="blur(0px)"),p.style.filter="blur(0px)",g.style.filter="blur(0px)",S.style.filter="blur(0px)",L.style.filter="blur(0px)")};return(c,p)=>(f(),h(T,null,[u(N,{onLogout:e,position:_.value},null,8,["position"]),u(P,{onFormPop:n,position:_.value},null,8,["position"]),u(G,{onBlur_toggle:l}),u(X,{onBlur_toggle:l}),u(de,{onLogo_home:t,onFormPop:n})],64))}},ve=v(re,[["__scopeId","data-v-1aaacc86"]]);export{ve as default};
