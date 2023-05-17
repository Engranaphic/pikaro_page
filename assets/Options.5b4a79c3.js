import{A as T,_ as F,r as i,x as q,b as s,c,d as e,t as v,y as W,m as y,q as S,F as x,h as b,e as f,v as I,f as O,l as te,p as B,i as A,o as oe,a as ne,g as $,z as M,T as U,B as z}from"./index.cc5757e8.js";import{P as le}from"./products-service.874b896e.js";import{T as se}from"./moment.0b57ed48.js";/* empty css                                                              */class G{getOptions(o){return T.get("/options/admin/",{params:o}).then(u=>u.data)}getOption(o){return T.get("/options/admin/"+o).then(u=>u.data)}createOption(o){const u={headers:{"Content-Type":"application/json"}};return T.post("/options/admin/",o,u).then(n=>n.data)}updateOption(o,u){const n={headers:{"Content-Type":"application/json"}};return T.put("/options/admin/"+o,u,n).then(p=>p.data)}deleteOption(o){return T.delete("/options/admin/"+o).then(u=>u.data)}}const E=r=>(B("data-v-d7422feb"),r=r(),A(),r),ae={id:"dialog-option"},ie=["onSubmit"],ce={class:"header-dialog flex align-items-center justify-content-center"},re={key:0,class:"field"},ue=E(()=>e("label",{for:"type"},"Tipo de Opci\xF3n:",-1)),de=["value"],pe={key:1,class:"field"},me=E(()=>e("label",{for:"option"},"La Opci\xF3n:",-1)),ve={key:0,style:{color:"red"}},_e={key:2,class:"field"},fe=E(()=>e("label",{for:"multiplier"},"Multiplicador:",-1)),he={key:0,style:{color:"red"}},ye={key:3,class:"field"},ge=E(()=>e("label",{for:"product_id"},"Producto:",-1)),xe=["value"],be={key:4,class:"confirmation-content"},Oe=E(()=>e("br",null,null,-1)),Ee=E(()=>e("i",null,"(Esta acci\xF3n no se puede revertir)",-1)),ke={class:"field flex align-items-center justify-content-center"},Ce=["value"],Te={__name:"DialogOption",props:["type","opcion","list"],emits:["close_dialog","toast_execute"],setup(r,{emit:o}){const u=r,n=i(u.opcion),p=i(new G),_=i(!1),w=i([{name:"Seleccionar",code:null},{name:"Cantidad",code:"quantity"},{name:"Tama\xF1o",code:"size"},{name:"Tipo de Papel",code:"paper"},{name:"Lados",code:"sides"},{name:"Tiempo de Producci\xF3n",code:"time"},{name:"Perforado",code:"hole"},{name:"Corte Entrega",code:"cut"},{name:"Forma",code:"shape"}]),N=()=>{switch(_.value=!0,u.type){case"EDIT":p.value.updateOption(n.value.id,n.value).then(()=>{o("toast_execute","Opci\xF3n editada exitosamente","success"),o("close_dialog",!1)}).catch(h=>{console.log("Error: ",h),o("toast_execute","Ocurrio un problema al editar la Opci\xF3n","error"),o("close_dialog",!1)});break;case"NEW":p.value.createOption(n.value).then(()=>{o("toast_execute","Opci\xF3n creado exitosamente","success"),o("close_dialog",!1)}).catch(h=>{console.log("Error: ",h),o("toast_execute","Ocurrio un problema al crear el Opci\xF3n","error"),o("close_dialog",!1)});break;default:p.value.deleteOption(n.value.id).then(()=>{o("toast_execute","Opci\xF3n eliminado exitosamente","success"),o("close_dialog",!1)}).catch(h=>{console.log("Error: ",h),o("toast_execute","Ocurrio un problema al eliminar el Opci\xF3n","error"),o("close_dialog",!1)})}_.value=!1},j=q(()=>{switch(u.type){case"NEW":return"Nueva Opci\xF3n";case"EDIT":return"Editar Opci\xF3n";case"DEL":return"Eliminar Opci\xF3n";default:return n.value.option+" "+n.value.product.name}}),D=q(()=>{switch(u.type){case"NEW":return"Crear";case"EDIT":return"Guardar Cambios";default:return"Eliminar"}});return(h,m)=>(s(),c("div",ae,[e("form",{class:"dialog-content",onSubmit:te(N,["prevent"])},[e("div",ce,v(W(j)),1),r.type=="EDIT"||r.type=="NEW"?(s(),c("div",re,[ue,y(e("select",{id:"type","onUpdate:modelValue":m[0]||(m[0]=d=>n.value.type=d),required:"true"},[(s(!0),c(x,null,b(w.value,(d,P)=>(s(),c("option",{key:P,value:d.code},v(d.name),9,de))),128))],512),[[S,n.value.type]])])):f("",!0),r.type=="EDIT"||r.type=="NEW"?(s(),c("div",pe,[me,y(e("input",{id:"option","onUpdate:modelValue":m[1]||(m[1]=d=>n.value.option=d),required:"true",type:"text",autofocus:"",placeholder:"Opci\xF3n",class:"outline-none",name:"option"},null,512),[[I,n.value.option,void 0,{trim:!0}]]),_.value&&!n.value.option?(s(),c("small",ve,"La Opci\xF3n es requerida.")):f("",!0)])):f("",!0),r.type=="EDIT"||r.type=="NEW"?(s(),c("div",_e,[fe,y(e("input",{id:"multiplier","onUpdate:modelValue":m[2]||(m[2]=d=>n.value.multiplier=d),required:"true",type:"number",step:".01",autofocus:"",placeholder:"Multiplicador",class:"outline-none",name:"multiplier"},null,512),[[I,n.value.multiplier,void 0,{trim:!0}]]),_.value&&!n.value.multiplier?(s(),c("small",he,"El Multiplicador es requerido.")):f("",!0)])):f("",!0),r.type=="NEW"?(s(),c("div",ye,[ge,y(e("select",{id:"product_id","onUpdate:modelValue":m[3]||(m[3]=d=>n.value.product_id=d)},[(s(!0),c(x,null,b(r.list,d=>(s(),c("option",{key:d.sku,value:d.sku},v(d.name),9,xe))),128))],512),[[S,n.value.product_id]])])):f("",!0),r.type=="DEL"?(s(),c("div",be,[e("span",null,[O("\xBFEstas seguro de querer Eliminar a "),e("b",null,v(n.value.option+" "+n.value.type),1),O("? "),Oe,Ee])])):f("",!0),e("div",ke,[e("button",{class:"boton-close select-none cursor-pointer",type:"button",onClick:m[4]||(m[4]=d=>o("close_dialog",!1))},"Cancelar"),r.type!="VIEW"?(s(),c("input",{key:0,class:"boton-confirm select-none cursor-pointer",type:"submit",value:W(D)},null,8,Ce)):f("",!0)])],40,ie)]))}},$e=F(Te,[["__scopeId","data-v-d7422feb"]]);const R=r=>(B("data-v-27b1729c"),r=r(),A(),r),we={class:"flex flex-column"},je={class:"header-tab flex align-items-center justify-content-between"},De=R(()=>e("div",{class:"flex align-items-center justify-content-center"}," Opciones en Productos ",-1)),Pe={class:"flex align-items-center justify-content-center"},Se={class:"table-box flex flex-column align-items-center justify-content-center"},Ie={class:"w-full"},Ne={class:"grid"},Ve={class:"col text-center flex flex-column justify-content-center align-items-center"},Le={class:"col text-center flex flex-column justify-content-center align-items-center"},qe=["value"],We={class:"col text-center flex flex-column justify-content-center align-items-center"},Me={class:"col text-center flex flex-column justify-content-center align-items-center"},Ue=["value"],ze=R(()=>e("th",{class:"col text-center flex justify-content-center align-items-center"},"Acciones",-1)),Fe={class:"table-body"},Be={class:"col text-center flex justify-content-center align-items-center"},Ae={class:"col text-center flex justify-content-center align-items-center"},Ge={class:"col text-center flex justify-content-center align-items-center"},Re={class:"col text-center flex justify-content-center align-items-center"},Xe={class:"col text-center flex justify-content-center align-items-center"},He=["onClick"],Je=["onClick"],Ke=["onClick"],Qe={class:"flex flex-wrap justify-content-center"},Ye=["onClick"],Ze={__name:"Options",setup(r){const o=i(!1),u=i(""),n=i(!1);i(),i({});const p=i({}),_=i(),w=i(),N=i(0),j=i(0),D=i(new G),h=i(new le),m=i(!0),d=i(),P=i(""),k=i(""),V=i(!1),X=i([{name:"Seleccionar",code:null},{name:"Cantidad",code:"quantity"},{name:"Tama\xF1o",code:"size"},{name:"Tipo de Papel",code:"paper"},{name:"Lados",code:"sides"},{name:"Tiempo de Producci\xF3n",code:"time"},{name:"Perforado",code:"hole"},{name:"Corte Entrega",code:"cut"},{name:"Forma",code:"shape"}]),H=l=>{switch(l){case"quantity":return"Cantidad";case"size":return"Tama\xF1o";case"paper":return"Tipo de Papel";case"sides":return"Lados";case"time":return"Tiempo de Producci\xF3n";case"hole":return"Perforado";case"cut":return"Corte Entrega";default:return"Forma"}};oe(()=>{p.value={type:null,option:null,multiplier:null,product_id:null,page:1,size:10},g();let l={sku:null,category:null,name:null,banner:null,min_val:null,max_val:null};h.value.getListProducts(l).then(a=>{d.value=a}).catch(a=>{console.log("Error mounting: ",a.detail)})});const g=()=>{n.value=!0,D.value.getOptions(p.value).then(l=>{w.value=l.items,N.value=l.total,j.value=l.pages,n.value=!1,m.value=!0}).catch(l=>{l.detail=="Signature has expired"?m.value?(m.value=!1,setTimeout(()=>g(),1e3)):n.value=!1:(console.log("Error mounting: ",l),n.value=!1)})},J=()=>{u.value="NEW",_.value={type:null,option:null,multiplier:null,product_id:null},o.value=!0},K=l=>{u.value="EDIT",_.value=l,o.value=!0},Q=l=>{u.value="DEL",_.value=l,o.value=!0},Y=l=>{u.value="VIEW",D.value.getOption(l.id).then(a=>{_.value=a,o.value=!0}).catch(a=>{console.log("Error mounting: ",a.detail)})},Z=l=>{u.value="",o.value=l,_.value=null,g()},ee=(l,a)=>{P.value=l,a=="success"?k.value="#0a8014":a=="warning"?k.value="#9c9426":a=="info"?k.value="#2374df":k.value="#b14646",V.value=!0,setTimeout(function(){V.value=!1},2e3)};return(l,a)=>{const L=ne("font-awesome-icon");return s(),c("div",we,[$(U,{name:"fade"},{default:M(()=>[V.value?(s(),z(se,{key:0,message:P.value,type:k.value},null,8,["message","type"])):f("",!0)]),_:1}),e("div",je,[De,e("div",Pe,[e("button",{class:"boton-header new-btn select-none cursor-pointer",onClick:J},"Nueva Opci\xF3n"),e("button",{class:"boton-header excel-btn select-none cursor-pointer",onClick:a[0]||(a[0]=(...t)=>l.login&&l.login(...t))},"Descargar Excel")])]),e("div",Se,[e("table",Ie,[e("thead",null,[e("tr",Ne,[e("th",Ve,[O(" Opci\xF3n "),y(e("input",{id:"email","onUpdate:modelValue":a[1]||(a[1]=t=>p.value.email=t),onChange:g,type:"text",placeholder:"Opcion",class:"outline-none",name:"email"},null,544),[[I,p.value.email]])]),e("th",Le,[O(" Tipo de Opci\xF3n "),y(e("select",{onChange:g,id:"type","onUpdate:modelValue":a[2]||(a[2]=t=>p.value.type=t)},[(s(!0),c(x,null,b(X.value,(t,C)=>(s(),c("option",{key:C,value:t.code},v(t.name),9,qe))),128))],544),[[S,p.value.type]])]),e("th",We,[O(" Multiplicador "),y(e("input",{id:"phone","onUpdate:modelValue":a[3]||(a[3]=t=>p.value.phone=t),onChange:g,type:"text",placeholder:"Filtro",class:"outline-none",name:"phone"},null,544),[[I,p.value.phone]])]),e("th",Me,[O(" Producto "),y(e("select",{onChange:g,id:"product_id","onUpdate:modelValue":a[4]||(a[4]=t=>p.value.product_id=t)},[(s(!0),c(x,null,b(d.value,t=>(s(),c("option",{key:t.id,value:t.id},v(t.name)+" ("+v(t.sku)+")",9,Ue))),128))],544),[[S,p.value.product_id]])]),ze])]),e("tbody",Fe,[(s(!0),c(x,null,b(w.value,t=>(s(),c("tr",{key:t.id,class:"grid"},[e("td",Be,v(t.option),1),e("td",Ae,v(H(t.type)),1),e("td",Ge,v(t.multiplier),1),e("td",Re,v(t.product.name)+" ("+v(t.product.sku)+")",1),e("td",Xe,[e("div",{onClick:C=>Y(t),class:"boton-action vista mx-2 select-none cursor-pointer flex justify-content-center align-items-center"},[$(L,{icon:"fa-solid fa-address-card"})],8,He),e("div",{onClick:C=>K(t),class:"boton-action edit mx-2 select-none cursor-pointer flex justify-content-center align-items-center"},[$(L,{icon:"fa-solid fa-pencil"})],8,Je),e("div",{onClick:C=>Q(t),class:"boton-action trash select-none cursor-pointer flex justify-content-center align-items-center"},[$(L,{icon:"fa-solid fa-trash-can"})],8,Ke)])]))),128))]),e("tfoot",null,[e("div",Qe,[(s(!0),c(x,null,b(j.value,t=>(s(),c("div",{class:"indices-tabla select-none cursor-pointer",onClick:C=>l.change_page(t),key:t},v(t),9,Ye))),128))])])])]),$(U,{name:"dialog"},{default:M(()=>[o.value?(s(),z($e,{key:0,list:d.value,type:u.value,opcion:_.value,onClose_dialog:Z,onToast_execute:ee},null,8,["list","type","opcion"])):f("",!0)]),_:1})])}}},lt=F(Ze,[["__scopeId","data-v-27b1729c"]]);export{lt as default};
