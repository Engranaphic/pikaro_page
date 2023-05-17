import{_ as S,r as a,k as V,o as q,b as C,c as L,d as e,l as h,m as l,v as n,t as b,p as k,i as R}from"./index.cc5757e8.js";import"./index.02f4f094.js";import{U as N}from"./users-service.0dda72c1.js";const i=u=>(k("data-v-fb671c19"),u=u(),R(),u),E={id:"reglog"},j=i(()=>e("div",{class:"reg-title"},"Ingreso",-1)),B={class:"mt-4 flex justify-content-center align-items-top"},M=["onSubmit"],T=i(()=>e("div",{class:"title-form"}," Ingresar a tu cuenta ",-1)),D={class:"field"},G={class:"field"},O={class:"select-none",style:{color:"red","margin-bottom":"2%"}},$=i(()=>e("div",{class:"flex justify-content-between"},[e("input",{class:"button-send select-none cursor-pointer",type:"submit",value:"Ingresar"}),e("button",{class:"boton-recovery select-none cursor-pointer",type:"button"},"\xBFHas olvidado tu contrase\xF1a?")],-1)),A=["onSubmit"],H=i(()=>e("div",{class:"title-form"}," Registrarse ",-1)),P={class:"field"},z={class:"field"},F={class:"field"},J={class:"field"},K={class:"field"},Q={class:"field"},W={class:"select-none",style:{color:"red","margin-bottom":"2%"}},X=i(()=>e("div",{class:"flex justify-content-start"},[e("input",{class:"button-send select-none cursor-pointer",type:"submit",value:"Crear Cuenta"})],-1)),Y={__name:"RegLog",emits:["blur_toggle"],setup(u,{emit:Z}){a([]),a(!1),a(0);const v=V(),d=a(""),c=a(""),_=a(""),p=a(""),m=a(""),y=a(new N),s=a({email:"",first_name:"",last_name:"",password:"",role:"CLIENT",phone:""});q(()=>{});const f=()=>{console.log("redirect is called",window.location);const{search:r}=window.location;console.log("search: ",r);const t=r.replace(/^\?/,"").split("&");console.log("tokens: ",t);let{returnPath:o}=t.reduce((w,U)=>{const g=U.split("=");return w[g[0]]=decodeURIComponent(g[1]),w},{});o||(o="/pikaro_page/"),window.location=o},x=r=>{let t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;if(!d.value.match(t)){_.value="Ingrese un correo valido, por favor";return}v.dispatch("LOGIN",{email:d.value,password:c.value}).then(()=>f()).catch(o=>console.log(o))},I=r=>{let t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;if(!s.value.email.match(t)){p.value="Ingrese un correo valido, por favor";return}if(s.value.password!=m.value){p.value="Las contrase\xF1as deben coincidir, por favor";return}y.value.createUser(s.value).then(()=>{v.dispatch("LOGIN",{email:s.value.email,password:s.value.password}).then(()=>f()).catch(o=>console.log(o))}).catch(o=>{console.log("Error: ",o)})};return(r,t)=>(C(),L("div",E,[j,e("div",B,[e("form",{class:"ingreso-form",onSubmit:h(x,["prevent"])},[T,e("div",D,[l(e("input",{id:"email",placeholder:"Correo",class:"outline-none",name:"email",type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>d.value=o),required:"true",autofocus:""},null,512),[[n,d.value,void 0,{trim:!0}]])]),e("div",G,[l(e("input",{id:"password",placeholder:"Contrase\xF1a",class:"outline-none",name:"password",type:"password","onUpdate:modelValue":t[1]||(t[1]=o=>c.value=o),required:"true",autofocus:""},null,512),[[n,c.value,void 0,{trim:!0}]])]),e("p",O,b(_.value),1),$],40,M),e("form",{class:"registrar-form",onSubmit:h(I,["prevent"])},[H,e("div",P,[l(e("input",{id:"first_name",placeholder:"Nombre",class:"outline-none",name:"first_name",type:"text","onUpdate:modelValue":t[2]||(t[2]=o=>s.value.first_name=o),required:"true",autofocus:""},null,512),[[n,s.value.first_name,void 0,{trim:!0}]])]),e("div",z,[l(e("input",{id:"last_name",placeholder:"Apellido",class:"outline-none",name:"last_name",type:"text","onUpdate:modelValue":t[3]||(t[3]=o=>s.value.last_name=o),required:"true",autofocus:""},null,512),[[n,s.value.last_name,void 0,{trim:!0}]])]),e("div",F,[l(e("input",{id:"email",placeholder:"Email",class:"outline-none",name:"email",type:"text","onUpdate:modelValue":t[4]||(t[4]=o=>s.value.email=o),required:"true",autofocus:""},null,512),[[n,s.value.email,void 0,{trim:!0}]])]),e("div",J,[l(e("input",{id:"phone",placeholder:"Tel\xE9fono",class:"outline-none",name:"phone",type:"text","onUpdate:modelValue":t[5]||(t[5]=o=>s.value.phone=o),required:"true",autofocus:""},null,512),[[n,s.value.phone,void 0,{trim:!0}]])]),e("div",K,[l(e("input",{id:"password",placeholder:"Contrase\xF1a",class:"outline-none",name:"password",type:"password","onUpdate:modelValue":t[6]||(t[6]=o=>s.value.password=o),required:"true",autofocus:""},null,512),[[n,s.value.password,void 0,{trim:!0}]])]),e("div",Q,[l(e("input",{id:"re_password",placeholder:"Repetir contrase\xF1a",class:"outline-none",name:"re_password",type:"password","onUpdate:modelValue":t[7]||(t[7]=o=>m.value=o),required:"true",autofocus:""},null,512),[[n,m.value,void 0,{trim:!0}]])]),e("p",W,b(p.value),1),X],40,A)])]))}},se=S(Y,[["__scopeId","data-v-fb671c19"]]);export{se as default};
