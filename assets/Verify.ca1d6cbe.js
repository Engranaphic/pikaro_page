import{_ as u,n as l,u as _,r as c,o as d,b as p,c as v,d as e,t as f,p as m,i as h}from"./index.cc5757e8.js";import{U as y}from"./users-service.0dda72c1.js";const x=t=>(m("data-v-ec8ed32b"),t=t(),h(),t),b={id:"verify"},g=x(()=>e("div",{class:"title-text"},"Verificando tu Cuenta",-1)),S={class:"verify_container flex flex-column justify-content-center"},V={class:"text-info flex justify-content-center"},I={__name:"Verify",props:["position","client_pos"],emits:["blur_toggle"],setup(t,{emit:j}){const a=l(),n=_(),o=c(),i=c(new y);d(()=>{i.value.activeUser(a.params.secret).then(s=>{o.value="Tu cuenta ha sido activada con exito, ahora puedes continuar"}).catch(s=>{o.value="Ocurrio un problema al activar tu cuenta",console.log("Error mounting: ",s.detail)})});const r=()=>{n.push({name:"Home"})};return(s,k)=>(p(),v("div",b,[g,e("div",S,[e("div",V,f(o.value),1),e("div",{class:"flex justify-content-center"},[e("div",{onClick:r,class:"button-verify select-none cursor-pointer"}," Volver al Inicio ")])])]))}},w=u(I,[["__scopeId","data-v-ec8ed32b"]]);export{w as default};
