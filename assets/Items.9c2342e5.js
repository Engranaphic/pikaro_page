import{_ as z,r as s,o as B,b as c,c as u,g as P,z as M,T as A,e,f as r,m as i,v as d,q as b,F as _,h,B as L,d as F,t as g,p as R,j as q}from"./index.d06e6f38.js";import{U as O}from"./users-service.4dc01d16.js";import{T as W}from"./moment.fc9cb90c.js";/* empty css                                                              */const x=m=>(R("data-v-d1aaee02"),m=m(),q(),m),$={class:"flex flex-column"},G={class:"header-tab flex align-items-center justify-content-between"},H=x(()=>e("div",{class:"flex align-items-center justify-content-center"}," Productos en Ordenes ",-1)),J={class:"flex align-items-center justify-content-center"},K={class:"table-box flex flex-column align-items-center justify-content-center"},Q={class:"w-full"},X={class:"grid"},Y={class:"col text-center flex flex-column justify-content-center align-items-center"},Z={class:"col text-center flex flex-column justify-content-center align-items-center"},ee={class:"col text-center flex flex-column justify-content-center align-items-center"},te={class:"celda text-center flex flex-column justify-content-center align-items-center"},ne=["value"],le={class:"celda text-center flex flex-column justify-content-center align-items-center"},se=["value"],ae={class:"celda text-center flex flex-column justify-content-center align-items-center"},oe={class:"celda text-center flex flex-column justify-content-center align-items-center"},ce={class:"flex justify-content-center align-items-center"},ie=x(()=>e("th",{class:"col text-center flex justify-content-center align-items-center"},"Acciones",-1)),ue=x(()=>e("tbody",{class:"table-body"},null,-1)),re={class:"flex flex-wrap justify-content-center"},de=["onClick"],me={__name:"Items",setup(m){const C=s(!1),j=s(""),v=s(!1);s(),s({});const n=s({}),V=s(),I=s(),k=s(0),y=s(0),w=s(new O),f=s(!0),U=s(""),S=s(""),N=s(!1),T=s([{name:"Seleccionar",code:null},{name:"Cliente",code:"CLIENT"},{name:"Administrador",code:"ADMIN"}]),D=s([{name:"Seleccionar",code:null},{name:"Validos",code:!0},{name:"Invalidos",code:!1}]);B(()=>{n.value={name:null,email:null,role:null,active:null,phone:null,birthday:null,start:null,end:null,page:1,size:10}});const o=()=>{v.value=!0,w.value.getUsers(n.value).then(a=>{I.value=a.items,k.value=a.total,y.value=a.pages,v.value=!1,f.value=!0}).catch(a=>{a.detail=="Signature has expired"?f.value?(f.value=!1,setTimeout(()=>o(),1e3)):v.value=!1:(console.log("Error mounting: ",a),v.value=!1)})},E=()=>{j.value="NEW",V.value={email:null,first_name:null,last_name:null,password:null,role:null,phone:null},C.value=!0};return(a,l)=>(c(),u("div",$,[P(A,{name:"fade"},{default:M(()=>[N.value?(c(),L(W,{key:0,message:U.value,type:S.value},null,8,["message","type"])):F("",!0)]),_:1}),e("div",G,[H,e("div",J,[e("button",{class:"boton-header new-btn select-none cursor-pointer",onClick:E},"Nuevo Item"),e("button",{class:"boton-header excel-btn select-none cursor-pointer",onClick:l[0]||(l[0]=(...t)=>a.login&&a.login(...t))},"Descargar Excel")])]),e("div",K,[e("table",Q,[e("thead",null,[e("tr",X,[e("th",Y,[r(" Producto "),i(e("input",{id:"email","onUpdate:modelValue":l[1]||(l[1]=t=>n.value.email=t),onChange:o,type:"text",placeholder:"E-mail",class:"outline-none",name:"email"},null,544),[[d,n.value.email]])]),e("th",Z,[r(" Imagen "),i(e("input",{id:"name","onUpdate:modelValue":l[2]||(l[2]=t=>n.value.name=t),onChange:o,type:"text",placeholder:"Nombre",class:"outline-none",name:"name"},null,544),[[d,n.value.name]])]),e("th",ee,[r(" Detalles "),i(e("input",{id:"phone","onUpdate:modelValue":l[3]||(l[3]=t=>n.value.phone=t),onChange:o,type:"text",placeholder:"Tel\xE9fono",class:"outline-none",name:"phone"},null,544),[[d,n.value.phone]])]),e("th",te,[r(" Precio "),i(e("select",{onChange:o,id:"role","onUpdate:modelValue":l[4]||(l[4]=t=>n.value.role=t)},[(c(!0),u(_,null,h(T.value,(t,p)=>(c(),u("option",{key:p,value:t.code},g(t.name),9,ne))),128))],544),[[b,n.value.role]])]),e("th",le,[r(" Cantidad "),i(e("select",{onChange:o,id:"role","onUpdate:modelValue":l[5]||(l[5]=t=>n.value.active=t)},[(c(!0),u(_,null,h(D.value,(t,p)=>(c(),u("option",{key:p,value:t.code},g(t.name),9,se))),128))],544),[[b,n.value.active]])]),e("th",ae,[r(" Dise\xF1o "),i(e("input",{id:"birthday",onChange:o,"onUpdate:modelValue":l[6]||(l[6]=t=>n.value.birthday=t),type:"date",class:"outline-none",name:"birthday"},null,544),[[d,n.value.birthday]])]),e("th",oe,[r(" Realizado "),e("div",ce,[i(e("input",{id:"start",onChange:o,"onUpdate:modelValue":l[7]||(l[7]=t=>n.value.start=t),type:"date",class:"outline-none calendar-icon start",name:"start"},null,544),[[d,n.value.start]]),i(e("input",{id:"end",onChange:o,"onUpdate:modelValue":l[8]||(l[8]=t=>n.value.end=t),type:"date",class:"outline-none calendar-icon end",name:"end"},null,544),[[d,n.value.end]])])]),ie])]),ue,e("tfoot",null,[e("div",re,[(c(!0),u(_,null,h(y.value,t=>(c(),u("div",{class:"indices-tabla select-none cursor-pointer",onClick:p=>a.change_page(t),key:t},g(t),9,de))),128))])])])])]))}},he=z(me,[["__scopeId","data-v-d1aaee02"]]);export{he as default};
