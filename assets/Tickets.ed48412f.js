import{A as r,_ as D,r as n,o as E,b as d,c as m,g as I,z,T as P,e,f as v,m as p,v as _,q as C,F as y,h as x,B as A,d as L,t as k,p as M,j as R}from"./index.d06e6f38.js";import{U as F}from"./users-service.4dc01d16.js";import{T as K}from"./moment.fc9cb90c.js";/* empty css                                                              */class q{getTicketByKey(a){return r.get("/tickets/"+a).then(s=>s.data)}giftTicket(a,s){return r.patch("/tickets/gifter/"+a,{params:s}).then(i=>i.data)}disableTicket(a){return r.patch("/tickets/disable/"+a).then(s=>s.data)}getTickets(a){return r.get("/tickets/admin/",{params:a}).then(s=>s.data)}createTicket(a){const s={headers:{"Content-Type":"application/json"}};return r.post("/tickets/admin/",a,s).then(i=>i.data)}getTicket(a){return r.get("/tickets/admin/"+a).then(s=>s.data)}updateTicket(a,s){const i={headers:{"Content-Type":"application/json"}};return r.put("/tickets/admin/"+a,s,i).then(l=>l.data)}deleteTicket(a){return r.delete("/tickets/admin/"+a).then(s=>s.data)}}const T=f=>(M("data-v-5adb2cee"),f=f(),R(),f),O={class:"flex flex-column"},W={class:"header-tab flex align-items-center justify-content-between"},X=T(()=>e("div",{class:"flex align-items-center justify-content-center"}," Cupones ",-1)),$={class:"flex align-items-center justify-content-center"},G={class:"table-box flex flex-column align-items-center justify-content-center"},H={class:"w-full"},J={class:"grid"},Q={class:"col text-center flex flex-column justify-content-center align-items-center"},Y={class:"col text-center flex flex-column justify-content-center align-items-center"},Z={class:"col text-center flex flex-column justify-content-center align-items-center"},ee={class:"celda text-center flex flex-column justify-content-center align-items-center"},te=["value"],ne={class:"celda text-center flex flex-column justify-content-center align-items-center"},le=["value"],ae={class:"celda text-center flex flex-column justify-content-center align-items-center"},se={class:"flex justify-content-center align-items-center"},oe=T(()=>e("th",{class:"col text-center flex justify-content-center align-items-center"},"Acciones",-1)),ce=T(()=>e("tbody",{class:"table-body"},null,-1)),ie={class:"flex flex-wrap justify-content-center"},ue=["onClick"],re={__name:"Tickets",setup(f){const a=n(!1),s=n(""),i=n(!1);n(),n({});const l=n({});n(),n();const j=n(0),b=n(0);n(new q);const w=n(new F),h=n(!0);n();const S=n(""),V=n(""),U=n(!1),N=n([{name:"Seleccionar",code:null},{name:"Validos",code:!0},{name:"Invalidos",code:!1}]);n([{name:"Seleccionar",code:null},{name:"Para Regalar",code:!0},{name:"Para Descuento",code:!1}]),E(()=>{l.value={name:null,email:null,role:null,active:null,phone:null,birthday:null,start:null,end:null,page:1,size:10}});const u=()=>{i.value=!0,w.value.getUsers(l.value).then(c=>{users.value=c.items,j.value=c.total,b.value=c.pages,i.value=!1,h.value=!0}).catch(c=>{c.detail=="Signature has expired"?h.value?(h.value=!1,setTimeout(()=>u(),1e3)):i.value=!1:(console.log("Error mounting: ",c),i.value=!1)})},B=()=>{s.value="NEW",selected_user.value={email:null,first_name:null,last_name:null,password:null,role:null,phone:null},a.value=!0};return(c,o)=>(d(),m("div",O,[I(P,{name:"fade"},{default:z(()=>[U.value?(d(),A(K,{key:0,message:S.value,type:V.value},null,8,["message","type"])):L("",!0)]),_:1}),e("div",W,[X,e("div",$,[e("button",{class:"boton-header new-btn select-none cursor-pointer",onClick:B},"Nuevo Ticket"),e("button",{class:"boton-header excel-btn select-none cursor-pointer",onClick:o[0]||(o[0]=(...t)=>c.login&&c.login(...t))},"Descargar Excel")])]),e("div",G,[e("table",H,[e("thead",null,[e("tr",J,[e("th",Q,[v(" Key "),p(e("input",{id:"email","onUpdate:modelValue":o[1]||(o[1]=t=>l.value.email=t),onChange:u,type:"text",placeholder:"E-mail",class:"outline-none",name:"email"},null,544),[[_,l.value.email]])]),e("th",Y,[v(" Regalo "),p(e("input",{id:"name","onUpdate:modelValue":o[2]||(o[2]=t=>l.value.name=t),onChange:u,type:"text",placeholder:"Nombre",class:"outline-none",name:"name"},null,544),[[_,l.value.name]])]),e("th",Z,[v(" Estado "),p(e("input",{id:"phone","onUpdate:modelValue":o[3]||(o[3]=t=>l.value.phone=t),onChange:u,type:"text",placeholder:"Tel\xE9fono",class:"outline-none",name:"phone"},null,544),[[_,l.value.phone]])]),e("th",ee,[v(" Limite de Tiempo "),p(e("select",{onChange:u,id:"role","onUpdate:modelValue":o[4]||(o[4]=t=>l.value.role=t)},[(d(!0),m(y,null,x(c.roles,(t,g)=>(d(),m("option",{key:g,value:t.code},k(t.name),9,te))),128))],544),[[C,l.value.role]])]),e("th",ne,[v(" Usuario "),p(e("select",{onChange:u,id:"role","onUpdate:modelValue":o[5]||(o[5]=t=>l.value.active=t)},[(d(!0),m(y,null,x(N.value,(t,g)=>(d(),m("option",{key:g,value:t.code},k(t.name),9,le))),128))],544),[[C,l.value.active]])]),e("th",ae,[v(" Creado "),e("div",se,[p(e("input",{id:"start",onChange:u,"onUpdate:modelValue":o[6]||(o[6]=t=>l.value.start=t),type:"date",class:"outline-none calendar-icon start",name:"start"},null,544),[[_,l.value.start]]),p(e("input",{id:"end",onChange:u,"onUpdate:modelValue":o[7]||(o[7]=t=>l.value.end=t),type:"date",class:"outline-none calendar-icon end",name:"end"},null,544),[[_,l.value.end]])])]),oe])]),ce,e("tfoot",null,[e("div",ie,[(d(!0),m(y,null,x(b.value,t=>(d(),m("div",{class:"indices-tabla select-none cursor-pointer",onClick:g=>c.change_page(t),key:t},k(t),9,ue))),128))])])])])]))}},fe=D(re,[["__scopeId","data-v-5adb2cee"]]);export{fe as default};
