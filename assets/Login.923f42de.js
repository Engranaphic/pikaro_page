import{_ as h,k as g,r as d,u as w,b as x,c as I,d as e,m as u,v as p,l as b,p as k,i as y}from"./index.b2c756c8.js";const t=a=>(k("data-v-a74aeee3"),a=a(),y(),a),S={id:"login"},B=["onSubmit"],L=t(()=>e("div",{class:"title flex"}," Bienvenido administrador ",-1)),C=t(()=>e("div",{class:"form-text"}," Ingresa tu cuenta de administrador para poder ingresar. ",-1)),E={class:"field"},U=t(()=>e("label",{for:"name"},"Email",-1)),V={class:"field"},M=t(()=>e("label",{for:"password"},"Contrase\xF1a",-1)),N=t(()=>e("div",{class:"flex justify-content-end"},[e("input",{class:"boton-mail select-none cursor-pointer",type:"submit",value:"Ingresar"})],-1)),R={__name:"Login",setup(a){const _=g(),i=d(""),l=d("");w();const m=()=>{console.log("redirect is called",window.location);const{search:n}=window.location;console.log("search: ",n);const o=n.replace(/^\?/,"").split("&");console.log("tokens: ",o);let{returnPath:s}=o.reduce((r,f)=>{const c=f.split("=");return r[c[0]]=decodeURIComponent(c[1]),r},{});s||(s="/pika_admin"),window.location=s},v=n=>{_.dispatch("LOGIN",{email:i.value,password:l.value}).then(()=>m()).catch(o=>console.log(o))};return(n,o)=>(x(),I("div",S,[e("form",{class:"login-form",onSubmit:b(v,["prevent"])},[L,C,e("div",E,[U,u(e("input",{id:"email",type:"text",class:"outline-none",placeholder:"Email","onUpdate:modelValue":o[0]||(o[0]=s=>i.value=s),required:"true",autofocus:""},null,512),[[p,i.value]])]),e("div",V,[M,u(e("input",{id:"password",type:"password",class:"outline-none",placeholder:"Contrase\xF1a","onUpdate:modelValue":o[1]||(o[1]=s=>l.value=s),required:"true",autofocus:""},null,512),[[p,l.value]])]),N],40,B)]))}},q=h(R,[["__scopeId","data-v-a74aeee3"]]);export{q as default};
