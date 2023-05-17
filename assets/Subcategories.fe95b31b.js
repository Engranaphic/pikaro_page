import{_ as z,r as n,x as W,b as l,c as r,d as e,t as y,y as L,m as w,v as M,e as m,f as x,q as U,F as E,h as k,l as X,p as P,i as F,o as Y,a as Z,g as h,z as B,T as O,B as q}from"./index.3e8f2ced.js";import{C as A}from"./categories-service.1840af40.js";import{T as ee}from"./moment.2c2b437d.js";/* empty css                                                              */const $=a=>(P("data-v-b068761a"),a=a(),F(),a),te={id:"dialog-category"},oe=["onSubmit"],ae={class:"header-dialog flex align-items-center justify-content-center"},se={key:0,class:"field"},ne=$(()=>e("label",{for:"name"},"Nombre:",-1)),le={key:0,style:{color:"red"}},ce={key:1,class:"field"},ie=$(()=>e("label",{for:"user"},"Categoria:",-1)),re={key:0,class:"info-view"},ue=["value"],de={key:2,class:"confirmation-content"},_e=$(()=>e("br",null,null,-1)),ve=$(()=>e("i",null,"(Esta acci\xF3n no se puede revertir)",-1)),ge={class:"field flex align-items-center justify-content-center"},fe=["value"],me={__name:"DialogSubcategory",props:["type","subcategory","list"],emits:["close_dialog","toast_execute"],setup(a,{emit:s}){const d=a,c=n(d.subcategory),f=n(new A),_=n(!1),C=()=>{switch(_.value=!0,d.type){case"EDIT":f.value.updateSubcategory(c.value.id,c.value).then(()=>{s("toast_execute","SubCategoria editada exitosamente","success"),s("close_dialog",!1)}).catch(v=>{console.log("Error: ",v),s("toast_execute","Ocurrio un problema al editar la SubCategoria","error"),s("close_dialog",!1)});break;case"NEW":f.value.createSubcategory(c.value).then(()=>{s("toast_execute","SubCategoria creada exitosamente","success"),s("close_dialog",!1)}).catch(v=>{console.log("Error: ",v),s("toast_execute","Ocurrio un problema al crear la SubCategoria","error"),s("close_dialog",!1)});break;default:directionsService.value.deleteSubcategory(c.value.id).then(()=>{s("toast_execute","SubCategoria eliminada exitosamente","success"),s("close_dialog",!1)}).catch(v=>{console.log("Error: ",v),s("toast_execute","Ocurrio un problema al eliminar la SubCategoria","error"),s("close_dialog",!1)})}_.value=!1},j=W(()=>{switch(d.type){case"NEW":return"Nueva SubCategoria";case"EDIT":return"Editar SubCategoria";case"DEL":return"Eliminar SubCategoria";default:return c.value.name}}),S=W(()=>{switch(d.type){case"NEW":return"Crear";case"EDIT":return"Guardar Cambios";default:return"Eliminar"}});return(v,g)=>(l(),r("div",te,[e("form",{class:"dialog-content",onSubmit:X(C,["prevent"])},[e("div",ae,y(L(j)),1),a.type=="EDIT"||a.type=="NEW"?(l(),r("div",se,[ne,w(e("input",{id:"name","onUpdate:modelValue":g[0]||(g[0]=u=>c.value.name=u),required:"true",type:"text",autofocus:"",placeholder:"Nombre",class:"outline-none",name:"name"},null,512),[[M,c.value.name,void 0,{trim:!0}]]),_.value&&!c.value.name?(l(),r("small",le,"El Nombre es requerido.")):m("",!0)])):m("",!0),a.type=="EDIT"||a.type=="NEW"||a.type=="VIEW"?(l(),r("div",ce,[ie,x(),a.type=="VIEW"?(l(),r("span",re,y(c.value.category?c.value.category.name:"Otros"),1)):m("",!0),a.type!="VIEW"?w((l(),r("select",{key:1,id:"user","onUpdate:modelValue":g[1]||(g[1]=u=>c.value.category_id=u)},[(l(!0),r(E,null,k(a.list,u=>(l(),r("option",{key:u.id,value:u.id},y(u.name),9,ue))),128))],512)),[[U,c.value.category_id]]):m("",!0)])):m("",!0),a.type=="DEL"?(l(),r("div",de,[e("span",null,[x("\xBFEstas seguro de querer Eliminar la SubCategoria "),e("b",null,y(c.value.name),1),x("? "),_e,ve])])):m("",!0),e("div",ge,[e("button",{class:"boton-close select-none cursor-pointer",type:"button",onClick:g[2]||(g[2]=u=>s("close_dialog",!1))},"Cancelar"),a.type!="VIEW"?(l(),r("input",{key:0,class:"boton-confirm select-none cursor-pointer",type:"submit",value:L(S)},null,8,fe)):m("",!0)])],40,oe)]))}},ye=z(me,[["__scopeId","data-v-b068761a"]]);const T=a=>(P("data-v-ea661229"),a=a(),F(),a),be={class:"flex flex-column"},pe={class:"header-tab flex align-items-center justify-content-between"},he=T(()=>e("div",{class:"flex align-items-center justify-content-center"}," SubCategorias ",-1)),xe={class:"flex align-items-center justify-content-center"},Ce={class:"table-box flex flex-column align-items-center justify-content-center"},Se={class:"w-full"},Ee={class:"grid"},ke={class:"col text-center flex flex-column justify-content-center align-items-center"},we={class:"col text-center flex flex-column justify-content-center align-items-center"},$e=["value"],je=T(()=>e("th",{class:"col text-center flex flex-column justify-content-center align-items-center"}," Productos ",-1)),Ie=T(()=>e("th",{class:"col text-center flex justify-content-center align-items-center"},"Acciones",-1)),Ne={class:"table-body"},De={class:"col text-center flex justify-content-center align-items-center"},Te={class:"col text-center flex justify-content-center align-items-center"},Ve={class:"col text-center flex justify-content-center align-items-center"},We={class:"col text-center flex justify-content-center align-items-center"},Le=["onClick"],Be=["onClick"],Oe=["onClick"],qe={class:"flex flex-wrap justify-content-center"},ze=["onClick"],Me={__name:"Subcategories",setup(a){const s=n(!1),d=n(""),c=n(!1);n(),n({});const f=n({}),_=n(),C=n(),j=n(0),S=n(0),v=n(new A),g=n(!0),u=n(),V=n(""),b=n(""),I=n(!1);Y(()=>{f.value={name:null,category_id:null,page:1,size:10},p();let o={name:null};v.value.getListCategories(o).then(i=>{u.value=i}).catch(i=>{console.log("Error mounting: ",i.detail)})});const p=()=>{c.value=!0,v.value.getSubcategories(f.value).then(o=>{C.value=o.items,j.value=o.total,S.value=o.pages,c.value=!1,g.value=!0}).catch(o=>{o.detail=="Signature has expired"?g.value?(g.value=!1,setTimeout(()=>p(),1e3)):c.value=!1:(console.log("Error mounting: ",o),c.value=!1)})},G=()=>{d.value="NEW",_.value={name:null,category_id:null},s.value=!0},R=o=>{d.value="EDIT",_.value=o,s.value=!0},H=o=>{d.value="DEL",_.value=o,s.value=!0},J=o=>{d.value="VIEW",v.value.getSubcategory(o.id).then(i=>{_.value=i,s.value=!0}).catch(i=>{console.log("Error mounting: ",i.detail)})},K=o=>{d.value="",s.value=o,_.value=null,p()},Q=(o,i)=>{V.value=o,i=="success"?b.value="#0a8014":i=="warning"?b.value="#9c9426":i=="info"?b.value="#2374df":b.value="#b14646",I.value=!0,setTimeout(function(){I.value=!1},2e3)};return(o,i)=>{const N=Z("font-awesome-icon");return l(),r("div",be,[h(O,{name:"fade"},{default:B(()=>[I.value?(l(),q(ee,{key:0,message:V.value,type:b.value},null,8,["message","type"])):m("",!0)]),_:1}),e("div",pe,[he,e("div",xe,[e("button",{class:"boton-header new-btn select-none cursor-pointer",onClick:G},"Nueva SubCategoria"),e("button",{class:"boton-header excel-btn select-none cursor-pointer",onClick:i[0]||(i[0]=(...t)=>o.login&&o.login(...t))},"Descargar Excel")])]),e("div",Ce,[e("table",Se,[e("thead",null,[e("tr",Ee,[e("th",ke,[x(" Nombre "),w(e("input",{id:"name","onUpdate:modelValue":i[1]||(i[1]=t=>f.value.name=t),onChange:p,type:"text",placeholder:"Nombre",class:"outline-none",name:"name"},null,544),[[M,f.value.name]])]),e("th",we,[x(" Categoria "),w(e("select",{onChange:p,id:"category_id","onUpdate:modelValue":i[2]||(i[2]=t=>f.value.category_id=t)},[(l(!0),r(E,null,k(u.value,t=>(l(),r("option",{key:t.id,value:t.id},y(t.name),9,$e))),128))],544),[[U,f.value.category_id]])]),je,Ie])]),e("tbody",Ne,[(l(!0),r(E,null,k(C.value,t=>(l(),r("tr",{key:t.id,class:"grid"},[e("td",De,y(t.name),1),e("td",Te,y(t.category?t.category.name:"Otros"),1),e("td",Ve,y(t.products?t.products.length:0),1),e("td",We,[e("div",{onClick:D=>J(t),class:"boton-action vista mx-2 select-none cursor-pointer flex justify-content-center align-items-center"},[h(N,{icon:"fa-solid fa-address-card"})],8,Le),e("div",{onClick:D=>R(t),class:"boton-action edit mx-2 select-none cursor-pointer flex justify-content-center align-items-center"},[h(N,{icon:"fa-solid fa-pencil"})],8,Be),e("div",{onClick:D=>H(t),class:"boton-action trash select-none cursor-pointer flex justify-content-center align-items-center"},[h(N,{icon:"fa-solid fa-trash-can"})],8,Oe)])]))),128))]),e("tfoot",null,[e("div",qe,[(l(!0),r(E,null,k(S.value,t=>(l(),r("div",{class:"indices-tabla select-none cursor-pointer",onClick:D=>o.change_page(t),key:t},y(t),9,ze))),128))])])])]),h(O,{name:"dialog"},{default:B(()=>[s.value?(l(),q(ye,{key:0,type:d.value,list:u.value,subcategory:_.value,onClose_dialog:K,onToast_execute:Q},null,8,["type","list","subcategory"])):m("",!0)]),_:1})])}}},Ge=z(Me,[["__scopeId","data-v-ea661229"]]);export{Ge as default};