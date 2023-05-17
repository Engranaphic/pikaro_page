import{A as k,_ as H,r as v,w as $,x as w,b as t,c as o,d as n,t as g,y as M,f as y,e as l,m as C,v as E,q as T,F as P,h as L,l as te,p as Q,i as z,o as ne,a as oe,g as S,z as j,T as B,B as U}from"./index.cc5757e8.js";import{U as le}from"./users-service.0dda72c1.js";import{T as ie}from"./moment.0b57ed48.js";/* empty css                                                              */class O{createDirection(i){const m={headers:{"Content-Type":"application/json"}};return k.post("/directions/",i,m).then(e=>e.data)}getDirection(i){return k.get("/directions/"+i).then(m=>m.data)}updateDirection(i,m){const e={headers:{"Content-Type":"application/json"}};return k.put("/directions/"+i,m,e).then(h=>h.data)}deleteDirection(i){return k.delete("/directions/"+i).then(m=>m.data)}getDirections(i){return k.get("/directions/",{params:i}).then(m=>m.data)}}const se=[{region:"Arica y Parinacota",comunas:["Arica","Camarones","Putre","General Lagos"]},{region:"Tarapac\xE1",comunas:["Iquique","Alto Hospicio","Pozo Almonte","Cami\xF1a","Colchane","Huara","Pica"]},{region:"Antofagasta",comunas:["Antofagasta","Mejillones","Sierra Gorda","Taltal","Calama","Ollag\xFCe","San Pedro de Atacama","Tocopilla","Mar\xEDa Elena"]},{region:"Atacama",comunas:["Copiap\xF3","Caldera","Tierra Amarilla","Cha\xF1aral","Diego de Almagro","Vallenar","Alto del Carmen","Freirina","Huasco"]},{region:"Coquimbo",comunas:["La Serena","Coquimbo","Andacollo","La Higuera","Paiguano","Vicu\xF1a","Illapel","Canela","Los Vilos","Salamanca","Ovalle","Combarbal\xE1","Monte Patria","Punitaqui","R\xEDo Hurtado"]},{region:"Valpara\xEDso",comunas:["Valpara\xEDso","Casablanca","Conc\xF3n","Juan Fern\xE1ndez","Puchuncav\xED","Quintero","Vi\xF1a del Mar","Isla de Pascua","Los Andes","Calle Larga","Rinconada","San Esteban","La Ligua","Cabildo","Papudo","Petorca","Zapallar","Quillota","Calera","Hijuelas","La Cruz","Nogales","San Antonio","Algarrobo","Cartagena","El Quisco","El Tabo","Santo Domingo","San Felipe","Catemu","Llaillay","Panquehue","Putaendo","Santa Mar\xEDa","Quilpu\xE9","Limache","Olmu\xE9","Villa Alemana"]},{region:"Regi\xF3n del Libertador Gral. Bernardo O\u2019Higgins",comunas:["Rancagua","Codegua","Coinco","Coltauco","Do\xF1ihue","Graneros","Las Cabras","Machal\xED","Malloa","Mostazal","Olivar","Peumo","Pichidegua","Quinta de Tilcoco","Rengo","Requ\xEDnoa","San Vicente","Pichilemu","La Estrella","Litueche","Marchihue","Navidad","Paredones","San Fernando","Ch\xE9pica","Chimbarongo","Lolol","Nancagua","Palmilla","Peralillo","Placilla","Pumanque","Santa Cruz"]},{region:"Regi\xF3n del Maule",comunas:["Talca","Constituci\xF3n","Curepto","Empedrado","Maule","Pelarco","Pencahue","R\xEDo Claro","San Clemente","San Rafael","Cauquenes","Chanco","Pelluhue","Curic\xF3","Huala\xF1\xE9","Licant\xE9n","Molina","Rauco","Romeral","Sagrada Familia","Teno","Vichuqu\xE9n","Linares","Colb\xFAn","Longav\xED","Parral","Retiro","San Javier","Villa Alegre","Yerbas Buenas"]},{region:"Regi\xF3n de \xD1uble",comunas:["Cobquecura","Coelemu","Ninhue","Portezuelo","Quirihue","R\xE1nquil","Treguaco","Bulnes","Chill\xE1n Viejo","Chill\xE1n","El Carmen","Pemuco","Pinto","Quill\xF3n","San Ignacio","Yungay","Coihueco","\xD1iqu\xE9n","San Carlos","San Fabi\xE1n","San Nicol\xE1s"]},{region:"Regi\xF3n del Biob\xEDo",comunas:["Concepci\xF3n","Coronel","Chiguayante","Florida","Hualqui","Lota","Penco","San Pedro de la Paz","Santa Juana","Talcahuano","Tom\xE9","Hualp\xE9n","Lebu","Arauco","Ca\xF1ete","Contulmo","Curanilahue","Los \xC1lamos","Tir\xFAa","Los \xC1ngeles","Antuco","Cabrero","Laja","Mulch\xE9n","Nacimiento","Negrete","Quilaco","Quilleco","San Rosendo","Santa B\xE1rbara","Tucapel","Yumbel","Alto Biob\xEDo"]},{region:"Regi\xF3n de la Araucan\xEDa",comunas:["Temuco","Carahue","Cunco","Curarrehue","Freire","Galvarino","Gorbea","Lautaro","Loncoche","Melipeuco","Nueva Imperial","Padre las Casas","Perquenco","Pitrufqu\xE9n","Puc\xF3n","Saavedra","Teodoro Schmidt","Tolt\xE9n","Vilc\xFAn","Villarrica","Cholchol","Angol","Collipulli","Curacaut\xEDn","Ercilla","Lonquimay","Los Sauces","Lumaco","Pur\xE9n","Renaico","Traigu\xE9n","Victoria"]},{region:"Regi\xF3n de Los R\xEDos",comunas:["Valdivia","Corral","Lanco","Los Lagos","M\xE1fil","Mariquina","Paillaco","Panguipulli","La Uni\xF3n","Futrono","Lago Ranco","R\xEDo Bueno"]},{region:"Regi\xF3n de Los Lagos",comunas:["Puerto Montt","Calbuco","Cocham\xF3","Fresia","Frutillar","Los Muermos","Llanquihue","Maull\xEDn","Puerto Varas","Castro","Ancud","Chonchi","Curaco de V\xE9lez","Dalcahue","Puqueld\xF3n","Queil\xE9n","Quell\xF3n","Quemchi","Quinchao","Osorno","Puerto Octay","Purranque","Puyehue","R\xEDo Negro","San Juan de la Costa","San Pablo","Chait\xE9n","Futaleuf\xFA","Hualaihu\xE9","Palena"]},{region:"Regi\xF3n Ais\xE9n del Gral. Carlos Ib\xE1\xF1ez del Campo",comunas:["Coihaique","Lago Verde","Ais\xE9n","Cisnes","Guaitecas","Cochrane","O\u2019Higgins","Tortel","Chile Chico","R\xEDo Ib\xE1\xF1ez"]},{region:"Regi\xF3n de Magallanes y de la Ant\xE1rtica Chilena",comunas:["Punta Arenas","Laguna Blanca","R\xEDo Verde","San Gregorio","Cabo de Hornos (Ex Navarino)","Ant\xE1rtica","Porvenir","Primavera","Timaukel","Natales","Torres del Paine"]},{region:"Regi\xF3n Metropolitana de Santiago",comunas:["Cerrillos","Cerro Navia","Conchal\xED","El Bosque","Estaci\xF3n Central","Huechuraba","Independencia","La Cisterna","La Florida","La Granja","La Pintana","La Reina","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maip\xFA","\xD1u\xF1oa","Pedro Aguirre Cerda","Pe\xF1alol\xE9n","Providencia","Pudahuel","Quilicura","Quinta Normal","Recoleta","Renca","Santiago","San Joaqu\xEDn","San Miguel","San Ram\xF3n","Vitacura","Puente Alto","Pirque","San Jos\xE9 de Maipo","Colina","Lampa","Tiltil","San Bernardo","Buin","Calera de Tango","Paine","Melipilla","Alhu\xE9","Curacav\xED","Mar\xEDa Pinto","San Pedro","Talagante","El Monte","Isla de Maipo","Padre Hurtado","Pe\xF1aflor"]}],F={regiones:se};const _=a=>(Q("data-v-e6ff116a"),a=a(),z(),a),re={id:"dialog-direction"},ue=["onSubmit"],ce={class:"header-dialog flex align-items-center justify-content-center"},de={key:0,class:"field"},me=_(()=>n("label",{for:"address"},"Calle:",-1)),ve={key:0,class:"info-view"},ge={key:2,style:{color:"red"}},he={key:1,class:"field"},fe=_(()=>n("label",{for:"number"},"Numero de calle:",-1)),ye={key:0,class:"info-view"},pe={key:2,style:{color:"red"}},Ce={key:2,class:"field"},_e=_(()=>n("label",{for:"departament"},[y("Edificio/Departamento/Bloque "),n("i",null,"(Opcional)"),y(":")],-1)),be={key:0,class:"info-view"},Ee={key:3,class:"field"},xe=_(()=>n("label",{for:"region"},"Region:",-1)),Pe={key:0,class:"info-view"},Le=["value"],Ve={key:2,style:{color:"red"}},De={key:4,class:"field"},ke=_(()=>n("label",{for:"commune"},"Comuna:",-1)),Se={key:0,class:"info-view"},Ie=["value"],Te={key:2,style:{color:"red"}},qe={key:5,class:"field"},Re=_(()=>n("label",{for:"city"},"Ciudad:",-1)),Ae={key:0,class:"info-view"},Ne={key:2,style:{color:"red"}},We={key:6,class:"field"},Me=_(()=>n("label",{for:"user"},"Usuario:",-1)),$e={key:0,class:"info-view"},we=["value"],je={key:2,style:{color:"red"}},Be={key:7,class:"confirmation-content"},Ue=_(()=>n("br",null,null,-1)),Fe=_(()=>n("i",null,"(Esta acci\xF3n no se puede revertir)",-1)),He={class:"field flex align-items-center justify-content-center"},Qe=["value"],ze={__name:"DialogDirection",props:["type","direction","list"],emits:["close_dialog","toast_execute"],setup(a,{emit:i}){const m=a,e=v(m.direction),h=v(new O),f=v(!1),V=v([]);$(()=>e.value.region,()=>{if(e.value.region){let p=F.regiones.filter(c=>c.region===e.value.region)[0];V.value=p.comunas}}),$(()=>e.value.commune,()=>{e.value.commune&&(e.value.city=e.value.commune)});const q=()=>{switch(f.value=!0,m.type){case"EDIT":h.value.updateDirection(e.value.id,e.value).then(()=>{i("toast_execute","Direcci\xF3n editada exitosamente","success"),i("close_dialog",!1)}).catch(p=>{console.log("Error: ",p),i("toast_execute","Ocurrio un problema al editar la Direcci\xF3n","error"),i("close_dialog",!1)});break;case"NEW":h.value.createDirection(e.value).then(()=>{i("toast_execute","Direcci\xF3n creada exitosamente","success"),i("close_dialog",!1)}).catch(p=>{console.log("Error: ",p),i("toast_execute","Ocurrio un problema al crear la Direcci\xF3n","error"),i("close_dialog",!1)});break;default:h.value.deleteDirection(e.value.id).then(()=>{i("toast_execute","Direcci\xF3n eliminada exitosamente","success"),i("close_dialog",!1)}).catch(p=>{console.log("Error: ",p),i("toast_execute","Ocurrio un problema al eliminar la Direcci\xF3n","error"),i("close_dialog",!1)})}f.value=!1},I=w(()=>{switch(m.type){case"NEW":return"Nueva Direcci\xF3n";case"EDIT":return"Editar Direcci\xF3n";case"DEL":return"Eliminar Direcci\xF3n";default:return e.value.address+" "+e.value.number+(e.value.departament?" "+e.value.departament:"")+", "+e.value.city}}),R=w(()=>{switch(m.type){case"NEW":return"Crear";case"EDIT":return"Guardar Cambios";default:return"Eliminar"}});return(p,c)=>(t(),o("div",re,[n("form",{class:"dialog-content",onSubmit:te(q,["prevent"])},[n("div",ce,g(M(I)),1),a.type=="EDIT"||a.type=="NEW"||a.type=="VIEW"?(t(),o("div",de,[me,y(),a.type=="VIEW"?(t(),o("span",ve,g(e.value.address),1)):l("",!0),a.type!="VIEW"?C((t(),o("input",{key:1,id:"address","onUpdate:modelValue":c[0]||(c[0]=s=>e.value.address=s),required:"true",type:"text",autofocus:"",placeholder:"Calle",class:"outline-none",name:"address"},null,512)),[[E,e.value.address,void 0,{trim:!0}]]):l("",!0),f.value&&!e.value.address?(t(),o("small",ge,"La calle es requerida.")):l("",!0)])):l("",!0),a.type=="EDIT"||a.type=="NEW"||a.type=="VIEW"?(t(),o("div",he,[fe,y(),a.type=="VIEW"?(t(),o("span",ye,g(e.value.number),1)):l("",!0),a.type!="VIEW"?C((t(),o("input",{key:1,id:"number","onUpdate:modelValue":c[1]||(c[1]=s=>e.value.number=s),required:"true",type:"text",autofocus:"",placeholder:"Numero",class:"outline-none",name:"number"},null,512)),[[E,e.value.number,void 0,{trim:!0}]]):l("",!0),f.value&&!e.value.number?(t(),o("small",pe,"El Numero de calle es requerido.")):l("",!0)])):l("",!0),a.type=="EDIT"||a.type=="NEW"||a.type=="VIEW"?(t(),o("div",Ce,[_e,y(),a.type=="VIEW"?(t(),o("span",be,g(e.value.departament),1)):l("",!0),a.type!="VIEW"?C((t(),o("input",{key:1,id:"departament","onUpdate:modelValue":c[2]||(c[2]=s=>e.value.departament=s),type:"text",autofocus:"",placeholder:"Departamento",class:"outline-none",name:"departament"},null,512)),[[E,e.value.departament,void 0,{trim:!0}]]):l("",!0)])):l("",!0),a.type=="EDIT"||a.type=="NEW"||a.type=="VIEW"?(t(),o("div",Ee,[xe,y(),a.type=="VIEW"?(t(),o("span",Pe,g(e.value.region),1)):l("",!0),a.type!="VIEW"?C((t(),o("select",{key:1,id:"commune","onUpdate:modelValue":c[3]||(c[3]=s=>e.value.region=s),required:"true"},[(t(!0),o(P,null,L(M(F).regiones,(s,x)=>(t(),o("option",{key:x,value:s.region},g(s.region),9,Le))),128))],512)),[[T,e.value.region]]):l("",!0),f.value&&!e.value.region?(t(),o("small",Ve,"La region es requerida.")):l("",!0)])):l("",!0),a.type=="EDIT"||a.type=="NEW"||a.type=="VIEW"?(t(),o("div",De,[ke,y(),a.type=="VIEW"?(t(),o("span",Se,g(e.value.commune),1)):l("",!0),a.type!="VIEW"?C((t(),o("select",{key:1,id:"commune","onUpdate:modelValue":c[4]||(c[4]=s=>e.value.commune=s),required:"true"},[(t(!0),o(P,null,L(V.value,(s,x)=>(t(),o("option",{key:x,value:s},g(s),9,Ie))),128))],512)),[[T,e.value.commune]]):l("",!0),f.value&&!e.value.commune?(t(),o("small",Te,"La Comuna es requerida.")):l("",!0)])):l("",!0),a.type=="EDIT"||a.type=="NEW"||a.type=="VIEW"?(t(),o("div",qe,[Re,y(),a.type=="VIEW"?(t(),o("span",Ae,g(e.value.city),1)):l("",!0),a.type!="VIEW"?C((t(),o("input",{key:1,id:"city","onUpdate:modelValue":c[5]||(c[5]=s=>e.value.city=s),type:"text",required:"true",autofocus:"",placeholder:"Ciudad",class:"outline-none",name:"city"},null,512)),[[E,e.value.city,void 0,{trim:!0}]]):l("",!0),f.value&&!e.value.city?(t(),o("small",Ne,"La ciudad es requerida.")):l("",!0)])):l("",!0),a.type=="NEW"||a.type=="VIEW"?(t(),o("div",We,[Me,y(),a.type=="VIEW"?(t(),o("span",$e,g(e.value.user.email),1)):l("",!0),a.type!="VIEW"?C((t(),o("select",{key:1,id:"user","onUpdate:modelValue":c[6]||(c[6]=s=>e.value.user_id=s),required:"true"},[(t(!0),o(P,null,L(a.list,s=>(t(),o("option",{key:s.id,value:s.id},g(s.email),9,we))),128))],512)),[[T,e.value.user_id]]):l("",!0),f.value&&!e.value.user_id?(t(),o("small",je,"El Usuario es requerido.")):l("",!0)])):l("",!0),a.type=="DEL"?(t(),o("div",Be,[n("span",null,[y("\xBFEstas seguro de querer Eliminar la Direccion "),n("b",null,g(e.value.address),1),y("? "),Ue,Fe])])):l("",!0),n("div",He,[n("button",{class:"boton-close select-none cursor-pointer",type:"button",onClick:c[7]||(c[7]=s=>i("close_dialog",!1))},"Cancelar"),a.type!="VIEW"?(t(),o("input",{key:0,class:"boton-confirm select-none cursor-pointer",type:"submit",value:M(R)},null,8,Qe)):l("",!0)])],40,ue)]))}},Oe=H(ze,[["__scopeId","data-v-e6ff116a"]]);const G=a=>(Q("data-v-c6812db0"),a=a(),z(),a),Ge={class:"flex flex-column"},Je={class:"header-tab flex align-items-center justify-content-between"},Ye=G(()=>n("div",{class:"flex align-items-center justify-content-center"}," Direcciones ",-1)),Xe={class:"flex align-items-center justify-content-center"},Ze={class:"table-box flex flex-column align-items-center justify-content-center"},Ke={class:"w-full"},ea={class:"grid"},aa={class:"col text-center flex flex-column justify-content-center align-items-center"},ta={class:"col text-center flex flex-column justify-content-center align-items-center"},na={class:"col text-center flex flex-column justify-content-center align-items-center"},oa={class:"celda text-center flex flex-column justify-content-center align-items-center"},la=["value"],ia=G(()=>n("th",{class:"col text-center flex justify-content-center align-items-center"},"Acciones",-1)),sa={class:"table-body"},ra={class:"col text-center flex justify-content-center align-items-center"},ua={class:"col text-center flex justify-content-center align-items-center"},ca={class:"col text-center flex justify-content-center align-items-center"},da={class:"celda text-center flex justify-content-center align-items-center"},ma={class:"col text-center flex justify-content-center align-items-center"},va=["onClick"],ga=["onClick"],ha=["onClick"],fa={class:"flex flex-wrap justify-content-center"},ya=["onClick"],pa={__name:"Directions",setup(a){const i=v(!1),m=v(""),e=v(!1);v(),v({});const h=v({}),f=v(),V=v(),q=v(0),I=v(0),R=v(new le),p=v(new O),c=v(!0),s=v(),x=v(""),D=v(""),A=v(!1);ne(()=>{h.value={page:1,size:10},b();let r={name:null,email:null,role:null,active:null,phone:null,birthday:null,start:null,end:null};R.value.getListUsers(r).then(d=>{s.value=d}).catch(d=>{console.log("Error mounting: ",d.detail)})});const J=r=>r.address+" "+r.number+(r.departament?" "+r.departament:"")+", "+r.city,b=()=>{e.value=!0,p.value.getDirections(h.value).then(r=>{V.value=r.items,q.value=r.total,I.value=r.pages,e.value=!1,c.value=!0}).catch(r=>{r.detail=="Signature has expired"?c.value?(c.value=!1,setTimeout(()=>b(),1e3)):e.value=!1:(console.log("Error mounting: ",r),e.value=!1)})},Y=()=>{m.value="NEW",f.value={address:null,number:null,departament:null,commune:null,city:null,region:null,country:"Chile",user_id:null},i.value=!0},X=r=>{m.value="EDIT",f.value=r,i.value=!0},Z=r=>{m.value="DEL",f.value=r,i.value=!0},K=r=>{m.value="VIEW",p.value.getDirection(r.id).then(d=>{f.value=d,i.value=!0}).catch(d=>{console.log("Error mounting: ",d.detail)})},ee=r=>{m.value="",i.value=r,f.value=null,b()},ae=(r,d)=>{x.value=r,d=="success"?D.value="#0a8014":d=="warning"?D.value="#9c9426":d=="info"?D.value="#2374df":D.value="#b14646",A.value=!0,setTimeout(function(){A.value=!1},2e3)};return(r,d)=>{const N=oe("font-awesome-icon");return t(),o("div",Ge,[S(B,{name:"fade"},{default:j(()=>[A.value?(t(),U(ie,{key:0,message:x.value,type:D.value},null,8,["message","type"])):l("",!0)]),_:1}),n("div",Je,[Ye,n("div",Xe,[n("button",{class:"boton-header new-btn select-none cursor-pointer",onClick:Y},"Nueva Direccion"),n("button",{class:"boton-header excel-btn select-none cursor-pointer",onClick:d[0]||(d[0]=(...u)=>r.login&&r.login(...u))},"Descargar Excel")])]),n("div",Ze,[n("table",Ke,[n("thead",null,[n("tr",ea,[n("th",aa,[y(" Direccion "),C(n("input",{id:"email","onUpdate:modelValue":d[1]||(d[1]=u=>h.value.email=u),onChange:b,type:"text",placeholder:"E-mail",class:"outline-none",name:"email"},null,544),[[E,h.value.email]])]),n("th",ta,[y(" Region "),C(n("input",{id:"name","onUpdate:modelValue":d[2]||(d[2]=u=>h.value.name=u),onChange:b,type:"text",placeholder:"Nombre",class:"outline-none",name:"name"},null,544),[[E,h.value.name]])]),n("th",na,[y(" Comuna "),C(n("input",{id:"phone","onUpdate:modelValue":d[3]||(d[3]=u=>h.value.phone=u),onChange:b,type:"text",placeholder:"Tel\xE9fono",class:"outline-none",name:"phone"},null,544),[[E,h.value.phone]])]),n("th",oa,[y(" Usuario "),C(n("select",{onChange:b,id:"role","onUpdate:modelValue":d[4]||(d[4]=u=>h.value.user=u)},[(t(!0),o(P,null,L(s.value,u=>(t(),o("option",{key:u.id,value:u.id},g(u.email),9,la))),128))],544),[[T,h.value.user]])]),ia])]),n("tbody",sa,[(t(!0),o(P,null,L(V.value,u=>(t(),o("tr",{key:u.id,class:"grid"},[n("td",ra,g(J(u)),1),n("td",ua,g(u.region),1),n("td",ca,g(u.commune),1),n("td",da,g(u.user.email),1),n("td",ma,[n("div",{onClick:W=>K(u),class:"boton-action vista mx-2 select-none cursor-pointer flex justify-content-center align-items-center"},[S(N,{icon:"fa-solid fa-address-card"})],8,va),n("div",{onClick:W=>X(u),class:"boton-action edit mx-2 select-none cursor-pointer flex justify-content-center align-items-center"},[S(N,{icon:"fa-solid fa-pencil"})],8,ga),n("div",{onClick:W=>Z(u),class:"boton-action trash select-none cursor-pointer flex justify-content-center align-items-center"},[S(N,{icon:"fa-solid fa-trash-can"})],8,ha)])]))),128))]),n("tfoot",null,[n("div",fa,[(t(!0),o(P,null,L(I.value,u=>(t(),o("div",{class:"indices-tabla select-none cursor-pointer",onClick:W=>r.change_page(u),key:u},g(u),9,ya))),128))])])])]),S(B,{name:"dialog"},{default:j(()=>[i.value?(t(),U(Oe,{key:0,list:s.value,type:m.value,direction:f.value,onClose_dialog:ee,onToast_execute:ae},null,8,["list","type","direction"])):l("",!0)]),_:1})])}}},xa=H(pa,[["__scopeId","data-v-c6812db0"]]);export{xa as default};
