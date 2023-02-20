(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Lf(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Mf(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=tt(r)?U1(r):Mf(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(tt(t))return t;if(Pe(t))return t}}const L1=/;(?![^(]*\))/g,M1=/:([^]+)/,F1=/\/\*.*?\*\//gs;function U1(t){const e={};return t.replace(F1,"").split(L1).forEach(n=>{if(n){const r=n.split(M1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ff(t){let e="";if(tt(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Ff(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const V1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",B1=Lf(V1);function jw(t){return!!t||t===""}const H$=t=>tt(t)?t:t==null?"":re(t)||Pe(t)&&(t.toString===Ww||!ue(t.toString))?JSON.stringify(t,zw,2):String(t),zw=(t,e)=>e&&e.__v_isRef?zw(t,e.value):xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Hw(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!re(e)&&!Gw(e)?String(e):e,xe={},Cs=[],vn=()=>{},$1=()=>!1,q1=/^on[^a-z]/,cl=t=>q1.test(t),Uf=t=>t.startsWith("onUpdate:"),_t=Object.assign,Vf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},j1=Object.prototype.hasOwnProperty,ge=(t,e)=>j1.call(t,e),re=Array.isArray,xs=t=>ul(t)==="[object Map]",Hw=t=>ul(t)==="[object Set]",ue=t=>typeof t=="function",tt=t=>typeof t=="string",Bf=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Kw=t=>Pe(t)&&ue(t.then)&&ue(t.catch),Ww=Object.prototype.toString,ul=t=>Ww.call(t),z1=t=>ul(t).slice(8,-1),Gw=t=>ul(t)==="[object Object]",$f=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ou=Lf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ll=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},H1=/-(\w)/g,qn=ll(t=>t.replace(H1,(e,n)=>n?n.toUpperCase():"")),K1=/\B([A-Z])/g,ao=ll(t=>t.replace(K1,"-$1").toLowerCase()),hl=ll(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ah=ll(t=>t?`on${hl(t)}`:""),pa=(t,e)=>!Object.is(t,e),au=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Eu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},dd=t=>{const e=parseFloat(t);return isNaN(e)?t:e},W1=t=>{const e=tt(t)?Number(t):NaN;return isNaN(e)?t:e};let mg;const G1=()=>mg||(mg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let dn;class Y1{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=dn;try{return dn=this,e()}finally{dn=n}}}on(){dn=this}off(){dn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Q1(t,e=dn){e&&e.active&&e.effects.push(t)}function X1(){return dn}const qf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Yw=t=>(t.w&Fr)>0,Qw=t=>(t.n&Fr)>0,J1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Fr},Z1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Yw(i)&&!Qw(i)?i.delete(t):e[n++]=i,i.w&=~Fr,i.n&=~Fr}e.length=n}},fd=new WeakMap;let qo=0,Fr=1;const md=30;let fn;const Oi=Symbol(""),pd=Symbol("");class jf{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Q1(this,r)}run(){if(!this.active)return this.fn();let e=fn,n=Or;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=fn,fn=this,Or=!0,Fr=1<<++qo,qo<=md?J1(this):pg(this),this.fn()}finally{qo<=md&&Z1(this),Fr=1<<--qo,fn=this.parent,Or=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(pg(this),this.onStop&&this.onStop(),this.active=!1)}}function pg(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Or=!0;const Xw=[];function co(){Xw.push(Or),Or=!1}function uo(){const t=Xw.pop();Or=t===void 0?!0:t}function Kt(t,e,n){if(Or&&fn){let r=fd.get(t);r||fd.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=qf()),Jw(i)}}function Jw(t,e){let n=!1;qo<=md?Qw(t)||(t.n|=Fr,n=!Yw(t)):n=!t.has(fn),n&&(t.add(fn),fn.deps.push(t))}function tr(t,e,n,r,i,s){const o=fd.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?$f(n)&&a.push(o.get("length")):(a.push(o.get(Oi)),xs(t)&&a.push(o.get(pd)));break;case"delete":re(t)||(a.push(o.get(Oi)),xs(t)&&a.push(o.get(pd)));break;case"set":xs(t)&&a.push(o.get(Oi));break}if(a.length===1)a[0]&&gd(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);gd(qf(c))}}function gd(t,e){const n=re(t)?t:[...t];for(const r of n)r.computed&&gg(r);for(const r of n)r.computed||gg(r)}function gg(t,e){(t!==fn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const eS=Lf("__proto__,__v_isRef,__isVue"),Zw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bf)),tS=zf(),nS=zf(!1,!0),rS=zf(!0),yg=iS();function iS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=_e(this);for(let s=0,o=this.length;s<o;s++)Kt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(_e)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){co();const r=_e(this)[e].apply(this,n);return uo(),r}}),t}function sS(t){const e=_e(this);return Kt(e,"has",t),e.hasOwnProperty(t)}function zf(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?bS:i_:e?r_:n_).get(r))return r;const o=re(r);if(!t){if(o&&ge(yg,i))return Reflect.get(yg,i,s);if(i==="hasOwnProperty")return sS}const a=Reflect.get(r,i,s);return(Bf(i)?Zw.has(i):eS(i))||(t||Kt(r,"get",i),e)?a:St(a)?o&&$f(i)?a:a.value:Pe(a)?t?s_(a):Za(a):a}}const oS=e_(),aS=e_(!0);function e_(t=!1){return function(n,r,i,s){let o=n[r];if(Bs(o)&&St(o)&&!St(i))return!1;if(!t&&(!Tu(i)&&!Bs(i)&&(o=_e(o),i=_e(i)),!re(n)&&St(o)&&!St(i)))return o.value=i,!0;const a=re(n)&&$f(r)?Number(r)<n.length:ge(n,r),c=Reflect.set(n,r,i,s);return n===_e(s)&&(a?pa(i,o)&&tr(n,"set",r,i):tr(n,"add",r,i)),c}}function cS(t,e){const n=ge(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&tr(t,"delete",e,void 0),r}function uS(t,e){const n=Reflect.has(t,e);return(!Bf(e)||!Zw.has(e))&&Kt(t,"has",e),n}function lS(t){return Kt(t,"iterate",re(t)?"length":Oi),Reflect.ownKeys(t)}const t_={get:tS,set:oS,deleteProperty:cS,has:uS,ownKeys:lS},hS={get:rS,set(t,e){return!0},deleteProperty(t,e){return!0}},dS=_t({},t_,{get:nS,set:aS}),Hf=t=>t,dl=t=>Reflect.getPrototypeOf(t);function Dc(t,e,n=!1,r=!1){t=t.__v_raw;const i=_e(t),s=_e(e);n||(e!==s&&Kt(i,"get",e),Kt(i,"get",s));const{has:o}=dl(i),a=r?Hf:n?Gf:ga;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Oc(t,e=!1){const n=this.__v_raw,r=_e(n),i=_e(t);return e||(t!==i&&Kt(r,"has",t),Kt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Pc(t,e=!1){return t=t.__v_raw,!e&&Kt(_e(t),"iterate",Oi),Reflect.get(t,"size",t)}function vg(t){t=_e(t);const e=_e(this);return dl(e).has.call(e,t)||(e.add(t),tr(e,"add",t,t)),this}function wg(t,e){e=_e(e);const n=_e(this),{has:r,get:i}=dl(n);let s=r.call(n,t);s||(t=_e(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?pa(e,o)&&tr(n,"set",t,e):tr(n,"add",t,e),this}function _g(t){const e=_e(this),{has:n,get:r}=dl(e);let i=n.call(e,t);i||(t=_e(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&tr(e,"delete",t,void 0),s}function bg(){const t=_e(this),e=t.size!==0,n=t.clear();return e&&tr(t,"clear",void 0,void 0),n}function Lc(t,e){return function(r,i){const s=this,o=s.__v_raw,a=_e(o),c=e?Hf:t?Gf:ga;return!t&&Kt(a,"iterate",Oi),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function Mc(t,e,n){return function(...r){const i=this.__v_raw,s=_e(i),o=xs(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),l=n?Hf:e?Gf:ga;return!e&&Kt(s,"iterate",c?pd:Oi),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function vr(t){return function(...e){return t==="delete"?!1:this}}function fS(){const t={get(s){return Dc(this,s)},get size(){return Pc(this)},has:Oc,add:vg,set:wg,delete:_g,clear:bg,forEach:Lc(!1,!1)},e={get(s){return Dc(this,s,!1,!0)},get size(){return Pc(this)},has:Oc,add:vg,set:wg,delete:_g,clear:bg,forEach:Lc(!1,!0)},n={get(s){return Dc(this,s,!0)},get size(){return Pc(this,!0)},has(s){return Oc.call(this,s,!0)},add:vr("add"),set:vr("set"),delete:vr("delete"),clear:vr("clear"),forEach:Lc(!0,!1)},r={get(s){return Dc(this,s,!0,!0)},get size(){return Pc(this,!0)},has(s){return Oc.call(this,s,!0)},add:vr("add"),set:vr("set"),delete:vr("delete"),clear:vr("clear"),forEach:Lc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Mc(s,!1,!1),n[s]=Mc(s,!0,!1),e[s]=Mc(s,!1,!0),r[s]=Mc(s,!0,!0)}),[t,n,e,r]}const[mS,pS,gS,yS]=fS();function Kf(t,e){const n=e?t?yS:gS:t?pS:mS;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ge(n,i)&&i in r?n:r,i,s)}const vS={get:Kf(!1,!1)},wS={get:Kf(!1,!0)},_S={get:Kf(!0,!1)},n_=new WeakMap,r_=new WeakMap,i_=new WeakMap,bS=new WeakMap;function IS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ES(t){return t.__v_skip||!Object.isExtensible(t)?0:IS(z1(t))}function Za(t){return Bs(t)?t:Wf(t,!1,t_,vS,n_)}function TS(t){return Wf(t,!1,dS,wS,r_)}function s_(t){return Wf(t,!0,hS,_S,i_)}function Wf(t,e,n,r,i){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=ES(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Rs(t){return Bs(t)?Rs(t.__v_raw):!!(t&&t.__v_isReactive)}function Bs(t){return!!(t&&t.__v_isReadonly)}function Tu(t){return!!(t&&t.__v_isShallow)}function o_(t){return Rs(t)||Bs(t)}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function a_(t){return Eu(t,"__v_skip",!0),t}const ga=t=>Pe(t)?Za(t):t,Gf=t=>Pe(t)?s_(t):t;function c_(t){Or&&fn&&(t=_e(t),Jw(t.dep||(t.dep=qf())))}function u_(t,e){t=_e(t);const n=t.dep;n&&gd(n)}function St(t){return!!(t&&t.__v_isRef===!0)}function SS(t){return l_(t,!1)}function kS(t){return l_(t,!0)}function l_(t,e){return St(t)?t:new AS(t,e)}class AS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:_e(e),this._value=n?e:ga(e)}get value(){return c_(this),this._value}set value(e){const n=this.__v_isShallow||Tu(e)||Bs(e);e=n?e:_e(e),pa(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ga(e),u_(this))}}function Ns(t){return St(t)?t.value:t}const CS={get:(t,e,n)=>Ns(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return St(i)&&!St(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function h_(t){return Rs(t)?t:new Proxy(t,CS)}var d_;class xS{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[d_]=!1,this._dirty=!0,this.effect=new jf(e,()=>{this._dirty||(this._dirty=!0,u_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=_e(this);return c_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}d_="__v_isReadonly";function RS(t,e,n=!1){let r,i;const s=ue(t);return s?(r=t,i=vn):(r=t.get,i=t.set),new xS(r,i,s||!i,n)}function Pr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){fl(s,e,n)}return i}function sn(t,e,n,r){if(ue(t)){const s=Pr(t,e,n,r);return s&&Kw(s)&&s.catch(o=>{fl(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(sn(t[s],e,n,r));return i}function fl(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Pr(c,null,10,[t,o,a]);return}}NS(t,n,i,r)}function NS(t,e,n,r=!0){console.error(t)}let ya=!1,yd=!1;const Tt=[];let An=0;const Ds=[];let Wn=null,yi=0;const f_=Promise.resolve();let Yf=null;function m_(t){const e=Yf||f_;return t?e.then(this?t.bind(this):t):e}function DS(t){let e=An+1,n=Tt.length;for(;e<n;){const r=e+n>>>1;va(Tt[r])<t?e=r+1:n=r}return e}function Qf(t){(!Tt.length||!Tt.includes(t,ya&&t.allowRecurse?An+1:An))&&(t.id==null?Tt.push(t):Tt.splice(DS(t.id),0,t),p_())}function p_(){!ya&&!yd&&(yd=!0,Yf=f_.then(y_))}function OS(t){const e=Tt.indexOf(t);e>An&&Tt.splice(e,1)}function PS(t){re(t)?Ds.push(...t):(!Wn||!Wn.includes(t,t.allowRecurse?yi+1:yi))&&Ds.push(t),p_()}function Ig(t,e=ya?An+1:0){for(;e<Tt.length;e++){const n=Tt[e];n&&n.pre&&(Tt.splice(e,1),e--,n())}}function g_(t){if(Ds.length){const e=[...new Set(Ds)];if(Ds.length=0,Wn){Wn.push(...e);return}for(Wn=e,Wn.sort((n,r)=>va(n)-va(r)),yi=0;yi<Wn.length;yi++)Wn[yi]();Wn=null,yi=0}}const va=t=>t.id==null?1/0:t.id,LS=(t,e)=>{const n=va(t)-va(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function y_(t){yd=!1,ya=!0,Tt.sort(LS);const e=vn;try{for(An=0;An<Tt.length;An++){const n=Tt[An];n&&n.active!==!1&&Pr(n,null,14)}}finally{An=0,Tt.length=0,g_(),ya=!1,Yf=null,(Tt.length||Ds.length)&&y_()}}function MS(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||xe;d&&(i=n.map(f=>tt(f)?f.trim():f)),h&&(i=n.map(dd))}let a,c=r[a=Ah(e)]||r[a=Ah(qn(e))];!c&&s&&(c=r[a=Ah(ao(e))]),c&&sn(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,sn(u,t,6,i)}}function v_(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ue(t)){const c=u=>{const l=v_(u,e,!0);l&&(a=!0,_t(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Pe(t)&&r.set(t,null),null):(re(s)?s.forEach(c=>o[c]=null):_t(o,s),Pe(t)&&r.set(t,o),o)}function ml(t,e){return!t||!cl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,ao(e))||ge(t,e))}let Qt=null,pl=null;function Su(t){const e=Qt;return Qt=t,pl=t&&t.type.__scopeId||null,e}function K$(t){pl=t}function W$(){pl=null}function FS(t,e=Qt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Dg(-1);const s=Su(e);let o;try{o=t(...i)}finally{Su(s),r._d&&Dg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ch(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:y}=t;let I,v;const b=Su(t);try{if(n.shapeFlag&4){const R=i||r;I=kn(l.call(R,R,h,s,f,d,p)),v=c}else{const R=e;I=kn(R.length>1?R(s,{attrs:c,slots:a,emit:u}):R(s,null)),v=e.props?c:US(c)}}catch(R){Jo.length=0,fl(R,t,1),I=qt(wn)}let E=I;if(v&&y!==!1){const R=Object.keys(v),{shapeFlag:F}=E;R.length&&F&7&&(o&&R.some(Uf)&&(v=VS(v,o)),E=Ur(E,v))}return n.dirs&&(E=Ur(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),I=E,Su(b),I}const US=t=>{let e;for(const n in t)(n==="class"||n==="style"||cl(n))&&((e||(e={}))[n]=t[n]);return e},VS=(t,e)=>{const n={};for(const r in t)(!Uf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function BS(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Eg(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!ml(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Eg(r,o,u):!0:!!o;return!1}function Eg(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ml(n,s))return!0}return!1}function $S({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const qS=t=>t.__isSuspense;function jS(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):PS(t)}function cu(t,e){if(Ye){let n=Ye.provides;const r=Ye.parent&&Ye.parent.provides;r===n&&(n=Ye.provides=Object.create(r)),n[t]=e}}function Un(t,e,n=!1){const r=Ye||Qt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ue(e)?e.call(r.proxy):e}}const Fc={};function Qo(t,e,n){return w_(t,e,n)}function w_(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=xe){const a=X1()===(Ye==null?void 0:Ye.scope)?Ye:null;let c,u=!1,l=!1;if(St(t)?(c=()=>t.value,u=Tu(t)):Rs(t)?(c=()=>t,r=!0):re(t)?(l=!0,u=t.some(E=>Rs(E)||Tu(E)),c=()=>t.map(E=>{if(St(E))return E.value;if(Rs(E))return Si(E);if(ue(E))return Pr(E,a,2)})):ue(t)?e?c=()=>Pr(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),sn(t,a,3,[d])}:c=vn,e&&r){const E=c;c=()=>Si(E())}let h,d=E=>{h=v.onStop=()=>{Pr(E,a,4)}},f;if(_a)if(d=vn,e?n&&sn(e,a,3,[c(),l?[]:void 0,d]):c(),i==="sync"){const E=Vk();f=E.__watcherHandles||(E.__watcherHandles=[])}else return vn;let p=l?new Array(t.length).fill(Fc):Fc;const y=()=>{if(!!v.active)if(e){const E=v.run();(r||u||(l?E.some((R,F)=>pa(R,p[F])):pa(E,p)))&&(h&&h(),sn(e,a,3,[E,p===Fc?void 0:l&&p[0]===Fc?[]:p,d]),p=E)}else v.run()};y.allowRecurse=!!e;let I;i==="sync"?I=y:i==="post"?I=()=>Vt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),I=()=>Qf(y));const v=new jf(c,I);e?n?y():p=v.run():i==="post"?Vt(v.run.bind(v),a&&a.suspense):v.run();const b=()=>{v.stop(),a&&a.scope&&Vf(a.scope.effects,v)};return f&&f.push(b),b}function zS(t,e,n){const r=this.proxy,i=tt(t)?t.includes(".")?__(r,t):()=>r[t]:t.bind(r,r);let s;ue(e)?s=e:(s=e.handler,n=e);const o=Ye;$s(this);const a=w_(i,s.bind(r),n);return o?$s(o):Pi(),a}function __(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Si(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),St(t))Si(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)Si(t[n],e);else if(Hw(t)||xs(t))t.forEach(n=>{Si(n,e)});else if(Gw(t))for(const n in t)Si(t[n],e);return t}function HS(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return S_(()=>{t.isMounted=!0}),k_(()=>{t.isUnmounting=!0}),t}const tn=[Function,Array],KS={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn},setup(t,{slots:e}){const n=Nk(),r=HS();let i;return()=>{const s=e.default&&E_(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const y of s)if(y.type!==wn){o=y;break}}const a=_e(t),{mode:c}=a;if(r.isLeaving)return xh(o);const u=Tg(o);if(!u)return xh(o);const l=vd(u,a,r,n);wd(u,l);const h=n.subTree,d=h&&Tg(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const y=p();i===void 0?i=y:y!==i&&(i=y,f=!0)}if(d&&d.type!==wn&&(!vi(u,d)||f)){const y=vd(d,a,r,n);if(wd(d,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},xh(o);c==="in-out"&&u.type!==wn&&(y.delayLeave=(I,v,b)=>{const E=I_(r,d);E[String(d.key)]=d,I._leaveCb=()=>{v(),I._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=b})}return o}}},b_=KS;function I_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function vd(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:y,onAppear:I,onAfterAppear:v,onAppearCancelled:b}=e,E=String(t.key),R=I_(n,t),F=(X,oe)=>{X&&sn(X,r,9,oe)},z=(X,oe)=>{const we=oe[1];F(X,oe),re(X)?X.every(nt=>nt.length<=1)&&we():X.length<=1&&we()},ne={mode:s,persisted:o,beforeEnter(X){let oe=a;if(!n.isMounted)if(i)oe=y||a;else return;X._leaveCb&&X._leaveCb(!0);const we=R[E];we&&vi(t,we)&&we.el._leaveCb&&we.el._leaveCb(),F(oe,[X])},enter(X){let oe=c,we=u,nt=l;if(!n.isMounted)if(i)oe=I||c,we=v||u,nt=b||l;else return;let K=!1;const Ce=X._enterCb=pt=>{K||(K=!0,pt?F(nt,[X]):F(we,[X]),ne.delayedLeave&&ne.delayedLeave(),X._enterCb=void 0)};oe?z(oe,[X,Ce]):Ce()},leave(X,oe){const we=String(t.key);if(X._enterCb&&X._enterCb(!0),n.isUnmounting)return oe();F(h,[X]);let nt=!1;const K=X._leaveCb=Ce=>{nt||(nt=!0,oe(),Ce?F(p,[X]):F(f,[X]),X._leaveCb=void 0,R[we]===t&&delete R[we])};R[we]=t,d?z(d,[X,K]):K()},clone(X){return vd(X,e,n,r)}};return ne}function xh(t){if(gl(t))return t=Ur(t),t.children=null,t}function Tg(t){return gl(t)?t.children?t.children[0]:void 0:t}function wd(t,e){t.shapeFlag&6&&t.component?wd(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function E_(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Sn?(o.patchFlag&128&&i++,r=r.concat(E_(o.children,e,a))):(e||o.type!==wn)&&r.push(a!=null?Ur(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ec(t){return ue(t)?{setup:t,name:t.name}:t}const uu=t=>!!t.type.__asyncLoader,gl=t=>t.type.__isKeepAlive;function WS(t,e){T_(t,"a",e)}function GS(t,e){T_(t,"da",e)}function T_(t,e,n=Ye){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(yl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)gl(i.parent.vnode)&&YS(r,e,n,i),i=i.parent}}function YS(t,e,n,r){const i=yl(e,t,r,!0);A_(()=>{Vf(r[e],i)},n)}function yl(t,e,n=Ye,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;co(),$s(n);const a=sn(e,n,t,o);return Pi(),uo(),a});return r?i.unshift(s):i.push(s),s}}const ur=t=>(e,n=Ye)=>(!_a||t==="sp")&&yl(t,(...r)=>e(...r),n),QS=ur("bm"),S_=ur("m"),XS=ur("bu"),JS=ur("u"),k_=ur("bum"),A_=ur("um"),ZS=ur("sp"),ek=ur("rtg"),tk=ur("rtc");function nk(t,e=Ye){yl("ec",t,e)}function G$(t,e){const n=Qt;if(n===null)return t;const r=_l(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=xe]=e[s];o&&(ue(o)&&(o={mounted:o,updated:o}),o.deep&&Si(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function ci(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(co(),sn(c,n,8,[t.el,a,t,e]),uo())}}const C_="components";function rk(t,e){return sk(C_,t,!0,e)||t}const ik=Symbol();function sk(t,e,n=!0,r=!1){const i=Qt||Ye;if(i){const s=i.type;if(t===C_){const a=Mk(s,!1);if(a&&(a===e||a===qn(e)||a===hl(qn(e))))return s}const o=Sg(i[t]||s[t],e)||Sg(i.appContext[t],e);return!o&&r?s:o}}function Sg(t,e){return t&&(t[e]||t[qn(e)]||t[hl(qn(e))])}function Y$(t,e,n,r){let i;const s=n&&n[r];if(re(t)||tt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const _d=t=>t?q_(t)?_l(t)||t.proxy:_d(t.parent):null,Xo=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_d(t.parent),$root:t=>_d(t.root),$emit:t=>t.emit,$options:t=>Xf(t),$forceUpdate:t=>t.f||(t.f=()=>Qf(t.update)),$nextTick:t=>t.n||(t.n=m_.bind(t.proxy)),$watch:t=>zS.bind(t)}),Rh=(t,e)=>t!==xe&&!t.__isScriptSetup&&ge(t,e),ok={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Rh(r,e))return o[e]=1,r[e];if(i!==xe&&ge(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&ge(u,e))return o[e]=3,s[e];if(n!==xe&&ge(n,e))return o[e]=4,n[e];bd&&(o[e]=0)}}const l=Xo[e];let h,d;if(l)return e==="$attrs"&&Kt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==xe&&ge(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ge(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Rh(i,e)?(i[e]=n,!0):r!==xe&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==xe&&ge(t,o)||Rh(e,o)||(a=s[0])&&ge(a,o)||ge(r,o)||ge(Xo,o)||ge(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let bd=!0;function ak(t){const e=Xf(t),n=t.proxy,r=t.ctx;bd=!1,e.beforeCreate&&kg(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:y,deactivated:I,beforeDestroy:v,beforeUnmount:b,destroyed:E,unmounted:R,render:F,renderTracked:z,renderTriggered:ne,errorCaptured:X,serverPrefetch:oe,expose:we,inheritAttrs:nt,components:K,directives:Ce,filters:pt}=e;if(u&&ck(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ke in o){const Ee=o[ke];ue(Ee)&&(r[ke]=Ee.bind(n))}if(i){const ke=i.call(n,n);Pe(ke)&&(t.data=Za(ke))}if(bd=!0,s)for(const ke in s){const Ee=s[ke],un=ue(Ee)?Ee.bind(n,n):ue(Ee.get)?Ee.get.bind(n,n):vn,ai=!ue(Ee)&&ue(Ee.set)?Ee.set.bind(n):vn,ln=$e({get:un,set:ai});Object.defineProperty(r,ke,{enumerable:!0,configurable:!0,get:()=>ln.value,set:Ft=>ln.value=Ft})}if(a)for(const ke in a)x_(a[ke],r,n,ke);if(c){const ke=ue(c)?c.call(n):c;Reflect.ownKeys(ke).forEach(Ee=>{cu(Ee,ke[Ee])})}l&&kg(l,t,"c");function Ve(ke,Ee){re(Ee)?Ee.forEach(un=>ke(un.bind(n))):Ee&&ke(Ee.bind(n))}if(Ve(QS,h),Ve(S_,d),Ve(XS,f),Ve(JS,p),Ve(WS,y),Ve(GS,I),Ve(nk,X),Ve(tk,z),Ve(ek,ne),Ve(k_,b),Ve(A_,R),Ve(ZS,oe),re(we))if(we.length){const ke=t.exposed||(t.exposed={});we.forEach(Ee=>{Object.defineProperty(ke,Ee,{get:()=>n[Ee],set:un=>n[Ee]=un})})}else t.exposed||(t.exposed={});F&&t.render===vn&&(t.render=F),nt!=null&&(t.inheritAttrs=nt),K&&(t.components=K),Ce&&(t.directives=Ce)}function ck(t,e,n=vn,r=!1){re(t)&&(t=Id(t));for(const i in t){const s=t[i];let o;Pe(s)?"default"in s?o=Un(s.from||i,s.default,!0):o=Un(s.from||i):o=Un(s),St(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function kg(t,e,n){sn(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function x_(t,e,n,r){const i=r.includes(".")?__(n,r):()=>n[r];if(tt(t)){const s=e[t];ue(s)&&Qo(i,s)}else if(ue(t))Qo(i,t.bind(n));else if(Pe(t))if(re(t))t.forEach(s=>x_(s,e,n,r));else{const s=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(s)&&Qo(i,s,t)}}function Xf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>ku(c,u,o,!0)),ku(c,e,o)),Pe(e)&&s.set(e,c),c}function ku(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ku(t,s,n,!0),i&&i.forEach(o=>ku(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=uk[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const uk={data:Ag,props:mi,emits:mi,methods:mi,computed:mi,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:mi,directives:mi,watch:hk,provide:Ag,inject:lk};function Ag(t,e){return e?t?function(){return _t(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function lk(t,e){return mi(Id(t),Id(e))}function Id(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Nt(t,e){return t?[...new Set([].concat(t,e))]:e}function mi(t,e){return t?_t(_t(Object.create(null),t),e):e}function hk(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const r in e)n[r]=Nt(t[r],e[r]);return n}function dk(t,e,n,r=!1){const i={},s={};Eu(s,wl,1),t.propsDefaults=Object.create(null),R_(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:TS(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function fk(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=_e(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(ml(t.emitsOptions,d))continue;const f=e[d];if(c)if(ge(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const p=qn(d);i[p]=Ed(c,a,p,f,t,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{R_(t,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!ge(e,h)&&((l=ao(h))===h||!ge(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(i[h]=Ed(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!ge(e,h)&&!0)&&(delete s[h],u=!0)}u&&tr(t,"set","$attrs")}function R_(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ou(c))continue;const u=e[c];let l;i&&ge(i,l=qn(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:ml(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=_e(n),u=a||xe;for(let l=0;l<s.length;l++){const h=s[l];n[h]=Ed(i,c,h,u[h],t,!ge(u,h))}}return o}function Ed(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ue(c)){const{propsDefaults:u}=i;n in u?r=u[n]:($s(i),r=u[n]=c.call(null,e),Pi())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ao(n))&&(r=!0))}return r}function N_(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ue(t)){const l=h=>{c=!0;const[d,f]=N_(h,e,!0);_t(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!c)return Pe(t)&&r.set(t,Cs),Cs;if(re(s))for(let l=0;l<s.length;l++){const h=qn(s[l]);Cg(h)&&(o[h]=xe)}else if(s)for(const l in s){const h=qn(l);if(Cg(h)){const d=s[l],f=o[h]=re(d)||ue(d)?{type:d}:Object.assign({},d);if(f){const p=Ng(Boolean,f.type),y=Ng(String,f.type);f[0]=p>-1,f[1]=y<0||p<y,(p>-1||ge(f,"default"))&&a.push(h)}}}const u=[o,a];return Pe(t)&&r.set(t,u),u}function Cg(t){return t[0]!=="$"}function xg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Rg(t,e){return xg(t)===xg(e)}function Ng(t,e){return re(e)?e.findIndex(n=>Rg(n,t)):ue(e)&&Rg(e,t)?0:-1}const D_=t=>t[0]==="_"||t==="$stable",Jf=t=>re(t)?t.map(kn):[kn(t)],mk=(t,e,n)=>{if(e._n)return e;const r=FS((...i)=>Jf(e(...i)),n);return r._c=!1,r},O_=(t,e,n)=>{const r=t._ctx;for(const i in t){if(D_(i))continue;const s=t[i];if(ue(s))e[i]=mk(i,s,r);else if(s!=null){const o=Jf(s);e[i]=()=>o}}},P_=(t,e)=>{const n=Jf(e);t.slots.default=()=>n},pk=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=_e(e),Eu(e,"_",n)):O_(e,t.slots={})}else t.slots={},e&&P_(t,e);Eu(t.slots,wl,1)},gk=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=xe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(_t(i,e),!n&&a===1&&delete i._):(s=!e.$stable,O_(e,i)),o=e}else e&&(P_(t,e),o={default:1});if(s)for(const a in i)!D_(a)&&!(a in o)&&delete i[a]};function L_(){return{app:null,config:{isNativeTag:$1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yk=0;function vk(t,e){return function(r,i=null){ue(r)||(r=Object.assign({},r)),i!=null&&!Pe(i)&&(i=null);const s=L_(),o=new Set;let a=!1;const c=s.app={_uid:yk++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Bk,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&ue(u.install)?(o.add(u),u.install(c,...l)):ue(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=qt(r,i);return d.appContext=s,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,_l(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c}};return c}}function Td(t,e,n,r,i=!1){if(re(t)){t.forEach((d,f)=>Td(d,e&&(re(e)?e[f]:e),n,r,i));return}if(uu(r)&&!i)return;const s=r.shapeFlag&4?_l(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,l=a.refs===xe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(tt(u)?(l[u]=null,ge(h,u)&&(h[u]=null)):St(u)&&(u.value=null)),ue(c))Pr(c,a,12,[o,l]);else{const d=tt(c),f=St(c);if(d||f){const p=()=>{if(t.f){const y=d?ge(h,c)?h[c]:l[c]:c.value;i?re(y)&&Vf(y,s):re(y)?y.includes(s)||y.push(s):d?(l[c]=[s],ge(h,c)&&(h[c]=l[c])):(c.value=[s],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,ge(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(p.id=-1,Vt(p,n)):p()}}}const Vt=jS;function wk(t){return _k(t)}function _k(t,e){const n=G1();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=vn,insertStaticContent:p}=t,y=(m,g,T,S=null,C=null,P=null,B=!1,O=null,M=!!g.dynamicChildren)=>{if(m===g)return;m&&!vi(m,g)&&(S=V(m),Ft(m,C,P,!0),m=null),g.patchFlag===-2&&(M=!1,g.dynamicChildren=null);const{type:N,ref:ee,shapeFlag:W}=g;switch(N){case vl:I(m,g,T,S);break;case wn:v(m,g,T,S);break;case lu:m==null&&b(g,T,S,B);break;case Sn:K(m,g,T,S,C,P,B,O,M);break;default:W&1?F(m,g,T,S,C,P,B,O,M):W&6?Ce(m,g,T,S,C,P,B,O,M):(W&64||W&128)&&N.process(m,g,T,S,C,P,B,O,M,pe)}ee!=null&&C&&Td(ee,m&&m.ref,P,g||m,!g)},I=(m,g,T,S)=>{if(m==null)r(g.el=a(g.children),T,S);else{const C=g.el=m.el;g.children!==m.children&&u(C,g.children)}},v=(m,g,T,S)=>{m==null?r(g.el=c(g.children||""),T,S):g.el=m.el},b=(m,g,T,S)=>{[m.el,m.anchor]=p(m.children,g,T,S,m.el,m.anchor)},E=({el:m,anchor:g},T,S)=>{let C;for(;m&&m!==g;)C=d(m),r(m,T,S),m=C;r(g,T,S)},R=({el:m,anchor:g})=>{let T;for(;m&&m!==g;)T=d(m),i(m),m=T;i(g)},F=(m,g,T,S,C,P,B,O,M)=>{B=B||g.type==="svg",m==null?z(g,T,S,C,P,B,O,M):oe(m,g,C,P,B,O,M)},z=(m,g,T,S,C,P,B,O)=>{let M,N;const{type:ee,props:W,shapeFlag:te,transition:se,dirs:he}=m;if(M=m.el=o(m.type,P,W&&W.is,W),te&8?l(M,m.children):te&16&&X(m.children,M,null,S,C,P&&ee!=="foreignObject",B,O),he&&ci(m,null,S,"created"),ne(M,m,m.scopeId,B,S),W){for(const Te in W)Te!=="value"&&!ou(Te)&&s(M,Te,null,W[Te],P,m.children,S,C,q);"value"in W&&s(M,"value",null,W.value),(N=W.onVnodeBeforeMount)&&Tn(N,S,m)}he&&ci(m,null,S,"beforeMount");const Ae=(!C||C&&!C.pendingBranch)&&se&&!se.persisted;Ae&&se.beforeEnter(M),r(M,g,T),((N=W&&W.onVnodeMounted)||Ae||he)&&Vt(()=>{N&&Tn(N,S,m),Ae&&se.enter(M),he&&ci(m,null,S,"mounted")},C)},ne=(m,g,T,S,C)=>{if(T&&f(m,T),S)for(let P=0;P<S.length;P++)f(m,S[P]);if(C){let P=C.subTree;if(g===P){const B=C.vnode;ne(m,B,B.scopeId,B.slotScopeIds,C.parent)}}},X=(m,g,T,S,C,P,B,O,M=0)=>{for(let N=M;N<m.length;N++){const ee=m[N]=O?Ar(m[N]):kn(m[N]);y(null,ee,g,T,S,C,P,B,O)}},oe=(m,g,T,S,C,P,B)=>{const O=g.el=m.el;let{patchFlag:M,dynamicChildren:N,dirs:ee}=g;M|=m.patchFlag&16;const W=m.props||xe,te=g.props||xe;let se;T&&ui(T,!1),(se=te.onVnodeBeforeUpdate)&&Tn(se,T,g,m),ee&&ci(g,m,T,"beforeUpdate"),T&&ui(T,!0);const he=C&&g.type!=="foreignObject";if(N?we(m.dynamicChildren,N,O,T,S,he,P):B||Ee(m,g,O,null,T,S,he,P,!1),M>0){if(M&16)nt(O,g,W,te,T,S,C);else if(M&2&&W.class!==te.class&&s(O,"class",null,te.class,C),M&4&&s(O,"style",W.style,te.style,C),M&8){const Ae=g.dynamicProps;for(let Te=0;Te<Ae.length;Te++){const Ze=Ae[Te],hn=W[Ze],fs=te[Ze];(fs!==hn||Ze==="value")&&s(O,Ze,hn,fs,C,m.children,T,S,q)}}M&1&&m.children!==g.children&&l(O,g.children)}else!B&&N==null&&nt(O,g,W,te,T,S,C);((se=te.onVnodeUpdated)||ee)&&Vt(()=>{se&&Tn(se,T,g,m),ee&&ci(g,m,T,"updated")},S)},we=(m,g,T,S,C,P,B)=>{for(let O=0;O<g.length;O++){const M=m[O],N=g[O],ee=M.el&&(M.type===Sn||!vi(M,N)||M.shapeFlag&70)?h(M.el):T;y(M,N,ee,null,S,C,P,B,!0)}},nt=(m,g,T,S,C,P,B)=>{if(T!==S){if(T!==xe)for(const O in T)!ou(O)&&!(O in S)&&s(m,O,T[O],null,B,g.children,C,P,q);for(const O in S){if(ou(O))continue;const M=S[O],N=T[O];M!==N&&O!=="value"&&s(m,O,N,M,B,g.children,C,P,q)}"value"in S&&s(m,"value",T.value,S.value)}},K=(m,g,T,S,C,P,B,O,M)=>{const N=g.el=m?m.el:a(""),ee=g.anchor=m?m.anchor:a("");let{patchFlag:W,dynamicChildren:te,slotScopeIds:se}=g;se&&(O=O?O.concat(se):se),m==null?(r(N,T,S),r(ee,T,S),X(g.children,T,ee,C,P,B,O,M)):W>0&&W&64&&te&&m.dynamicChildren?(we(m.dynamicChildren,te,T,C,P,B,O),(g.key!=null||C&&g===C.subTree)&&M_(m,g,!0)):Ee(m,g,T,ee,C,P,B,O,M)},Ce=(m,g,T,S,C,P,B,O,M)=>{g.slotScopeIds=O,m==null?g.shapeFlag&512?C.ctx.activate(g,T,S,B,M):pt(g,T,S,C,P,B,M):yr(m,g,M)},pt=(m,g,T,S,C,P,B)=>{const O=m.component=Rk(m,S,C);if(gl(m)&&(O.ctx.renderer=pe),Dk(O),O.asyncDep){if(C&&C.registerDep(O,Ve),!m.el){const M=O.subTree=qt(wn);v(null,M,g,T)}return}Ve(O,m,g,T,C,P,B)},yr=(m,g,T)=>{const S=g.component=m.component;if(BS(m,g,T))if(S.asyncDep&&!S.asyncResolved){ke(S,g,T);return}else S.next=g,OS(S.update),S.update();else g.el=m.el,S.vnode=g},Ve=(m,g,T,S,C,P,B)=>{const O=()=>{if(m.isMounted){let{next:ee,bu:W,u:te,parent:se,vnode:he}=m,Ae=ee,Te;ui(m,!1),ee?(ee.el=he.el,ke(m,ee,B)):ee=he,W&&au(W),(Te=ee.props&&ee.props.onVnodeBeforeUpdate)&&Tn(Te,se,ee,he),ui(m,!0);const Ze=Ch(m),hn=m.subTree;m.subTree=Ze,y(hn,Ze,h(hn.el),V(hn),m,C,P),ee.el=Ze.el,Ae===null&&$S(m,Ze.el),te&&Vt(te,C),(Te=ee.props&&ee.props.onVnodeUpdated)&&Vt(()=>Tn(Te,se,ee,he),C)}else{let ee;const{el:W,props:te}=g,{bm:se,m:he,parent:Ae}=m,Te=uu(g);if(ui(m,!1),se&&au(se),!Te&&(ee=te&&te.onVnodeBeforeMount)&&Tn(ee,Ae,g),ui(m,!0),W&&le){const Ze=()=>{m.subTree=Ch(m),le(W,m.subTree,m,C,null)};Te?g.type.__asyncLoader().then(()=>!m.isUnmounted&&Ze()):Ze()}else{const Ze=m.subTree=Ch(m);y(null,Ze,T,S,m,C,P),g.el=Ze.el}if(he&&Vt(he,C),!Te&&(ee=te&&te.onVnodeMounted)){const Ze=g;Vt(()=>Tn(ee,Ae,Ze),C)}(g.shapeFlag&256||Ae&&uu(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&m.a&&Vt(m.a,C),m.isMounted=!0,g=T=S=null}},M=m.effect=new jf(O,()=>Qf(N),m.scope),N=m.update=()=>M.run();N.id=m.uid,ui(m,!0),N()},ke=(m,g,T)=>{g.component=m;const S=m.vnode.props;m.vnode=g,m.next=null,fk(m,g.props,S,T),gk(m,g.children,T),co(),Ig(),uo()},Ee=(m,g,T,S,C,P,B,O,M=!1)=>{const N=m&&m.children,ee=m?m.shapeFlag:0,W=g.children,{patchFlag:te,shapeFlag:se}=g;if(te>0){if(te&128){ai(N,W,T,S,C,P,B,O,M);return}else if(te&256){un(N,W,T,S,C,P,B,O,M);return}}se&8?(ee&16&&q(N,C,P),W!==N&&l(T,W)):ee&16?se&16?ai(N,W,T,S,C,P,B,O,M):q(N,C,P,!0):(ee&8&&l(T,""),se&16&&X(W,T,S,C,P,B,O,M))},un=(m,g,T,S,C,P,B,O,M)=>{m=m||Cs,g=g||Cs;const N=m.length,ee=g.length,W=Math.min(N,ee);let te;for(te=0;te<W;te++){const se=g[te]=M?Ar(g[te]):kn(g[te]);y(m[te],se,T,null,C,P,B,O,M)}N>ee?q(m,C,P,!0,!1,W):X(g,T,S,C,P,B,O,M,W)},ai=(m,g,T,S,C,P,B,O,M)=>{let N=0;const ee=g.length;let W=m.length-1,te=ee-1;for(;N<=W&&N<=te;){const se=m[N],he=g[N]=M?Ar(g[N]):kn(g[N]);if(vi(se,he))y(se,he,T,null,C,P,B,O,M);else break;N++}for(;N<=W&&N<=te;){const se=m[W],he=g[te]=M?Ar(g[te]):kn(g[te]);if(vi(se,he))y(se,he,T,null,C,P,B,O,M);else break;W--,te--}if(N>W){if(N<=te){const se=te+1,he=se<ee?g[se].el:S;for(;N<=te;)y(null,g[N]=M?Ar(g[N]):kn(g[N]),T,he,C,P,B,O,M),N++}}else if(N>te)for(;N<=W;)Ft(m[N],C,P,!0),N++;else{const se=N,he=N,Ae=new Map;for(N=he;N<=te;N++){const Gt=g[N]=M?Ar(g[N]):kn(g[N]);Gt.key!=null&&Ae.set(Gt.key,N)}let Te,Ze=0;const hn=te-he+1;let fs=!1,hg=0;const Co=new Array(hn);for(N=0;N<hn;N++)Co[N]=0;for(N=se;N<=W;N++){const Gt=m[N];if(Ze>=hn){Ft(Gt,C,P,!0);continue}let En;if(Gt.key!=null)En=Ae.get(Gt.key);else for(Te=he;Te<=te;Te++)if(Co[Te-he]===0&&vi(Gt,g[Te])){En=Te;break}En===void 0?Ft(Gt,C,P,!0):(Co[En-he]=N+1,En>=hg?hg=En:fs=!0,y(Gt,g[En],T,null,C,P,B,O,M),Ze++)}const dg=fs?bk(Co):Cs;for(Te=dg.length-1,N=hn-1;N>=0;N--){const Gt=he+N,En=g[Gt],fg=Gt+1<ee?g[Gt+1].el:S;Co[N]===0?y(null,En,T,fg,C,P,B,O,M):fs&&(Te<0||N!==dg[Te]?ln(En,T,fg,2):Te--)}}},ln=(m,g,T,S,C=null)=>{const{el:P,type:B,transition:O,children:M,shapeFlag:N}=m;if(N&6){ln(m.component.subTree,g,T,S);return}if(N&128){m.suspense.move(g,T,S);return}if(N&64){B.move(m,g,T,pe);return}if(B===Sn){r(P,g,T);for(let W=0;W<M.length;W++)ln(M[W],g,T,S);r(m.anchor,g,T);return}if(B===lu){E(m,g,T);return}if(S!==2&&N&1&&O)if(S===0)O.beforeEnter(P),r(P,g,T),Vt(()=>O.enter(P),C);else{const{leave:W,delayLeave:te,afterLeave:se}=O,he=()=>r(P,g,T),Ae=()=>{W(P,()=>{he(),se&&se()})};te?te(P,he,Ae):Ae()}else r(P,g,T)},Ft=(m,g,T,S=!1,C=!1)=>{const{type:P,props:B,ref:O,children:M,dynamicChildren:N,shapeFlag:ee,patchFlag:W,dirs:te}=m;if(O!=null&&Td(O,null,T,m,!0),ee&256){g.ctx.deactivate(m);return}const se=ee&1&&te,he=!uu(m);let Ae;if(he&&(Ae=B&&B.onVnodeBeforeUnmount)&&Tn(Ae,g,m),ee&6)k(m.component,T,S);else{if(ee&128){m.suspense.unmount(T,S);return}se&&ci(m,null,g,"beforeUnmount"),ee&64?m.type.remove(m,g,T,C,pe,S):N&&(P!==Sn||W>0&&W&64)?q(N,g,T,!1,!0):(P===Sn&&W&384||!C&&ee&16)&&q(M,g,T),S&&ds(m)}(he&&(Ae=B&&B.onVnodeUnmounted)||se)&&Vt(()=>{Ae&&Tn(Ae,g,m),se&&ci(m,null,g,"unmounted")},T)},ds=m=>{const{type:g,el:T,anchor:S,transition:C}=m;if(g===Sn){Nc(T,S);return}if(g===lu){R(m);return}const P=()=>{i(T),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(m.shapeFlag&1&&C&&!C.persisted){const{leave:B,delayLeave:O}=C,M=()=>B(T,P);O?O(m.el,P,M):M()}else P()},Nc=(m,g)=>{let T;for(;m!==g;)T=d(m),i(m),m=T;i(g)},k=(m,g,T)=>{const{bum:S,scope:C,update:P,subTree:B,um:O}=m;S&&au(S),C.stop(),P&&(P.active=!1,Ft(B,m,g,T)),O&&Vt(O,g),Vt(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},q=(m,g,T,S=!1,C=!1,P=0)=>{for(let B=P;B<m.length;B++)Ft(m[B],g,T,S,C)},V=m=>m.shapeFlag&6?V(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),Z=(m,g,T)=>{m==null?g._vnode&&Ft(g._vnode,null,null,!0):y(g._vnode||null,m,g,null,null,null,T),Ig(),g_(),g._vnode=m},pe={p:y,um:Ft,m:ln,r:ds,mt:pt,mc:X,pc:Ee,pbc:we,n:V,o:t};let Be,le;return e&&([Be,le]=e(pe)),{render:Z,hydrate:Be,createApp:vk(Z,Be)}}function ui({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function M_(t,e,n=!1){const r=t.children,i=e.children;if(re(r)&&re(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Ar(i[s]),a.el=o.el),n||M_(o,a)),a.type===vl&&(a.el=o.el)}}function bk(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Ik=t=>t.__isTeleport,Sn=Symbol(void 0),vl=Symbol(void 0),wn=Symbol(void 0),lu=Symbol(void 0),Jo=[];let pn=null;function F_(t=!1){Jo.push(pn=t?null:[])}function Ek(){Jo.pop(),pn=Jo[Jo.length-1]||null}let wa=1;function Dg(t){wa+=t}function U_(t){return t.dynamicChildren=wa>0?pn||Cs:null,Ek(),wa>0&&pn&&pn.push(t),t}function Q$(t,e,n,r,i,s){return U_($_(t,e,n,r,i,s,!0))}function V_(t,e,n,r,i){return U_(qt(t,e,n,r,i,!0))}function Sd(t){return t?t.__v_isVNode===!0:!1}function vi(t,e){return t.type===e.type&&t.key===e.key}const wl="__vInternal",B_=({key:t})=>t!=null?t:null,hu=({ref:t,ref_key:e,ref_for:n})=>t!=null?tt(t)||St(t)||ue(t)?{i:Qt,r:t,k:e,f:!!n}:t:null;function $_(t,e=null,n=null,r=0,i=null,s=t===Sn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&B_(e),ref:e&&hu(e),scopeId:pl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qt};return a?(Zf(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=tt(n)?8:16),wa>0&&!o&&pn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&pn.push(c),c}const qt=Tk;function Tk(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===ik)&&(t=wn),Sd(t)){const a=Ur(t,e,!0);return n&&Zf(a,n),wa>0&&!s&&pn&&(a.shapeFlag&6?pn[pn.indexOf(t)]=a:pn.push(a)),a.patchFlag|=-2,a}if(Fk(t)&&(t=t.__vccOpts),e){e=Sk(e);let{class:a,style:c}=e;a&&!tt(a)&&(e.class=Ff(a)),Pe(c)&&(o_(c)&&!re(c)&&(c=_t({},c)),e.style=Mf(c))}const o=tt(t)?1:qS(t)?128:Ik(t)?64:Pe(t)?4:ue(t)?2:0;return $_(t,e,n,r,i,o,s,!0)}function Sk(t){return t?o_(t)||wl in t?_t({},t):t:null}function Ur(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Ak(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&B_(a),ref:e&&e.ref?n&&i?re(i)?i.concat(hu(e)):[i,hu(e)]:hu(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Sn?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ur(t.ssContent),ssFallback:t.ssFallback&&Ur(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function kk(t=" ",e=0){return qt(vl,null,t,e)}function X$(t,e){const n=qt(lu,null,t);return n.staticCount=e,n}function J$(t="",e=!1){return e?(F_(),V_(wn,null,t)):qt(wn,null,t)}function kn(t){return t==null||typeof t=="boolean"?qt(wn):re(t)?qt(Sn,null,t.slice()):typeof t=="object"?Ar(t):qt(vl,null,String(t))}function Ar(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ur(t)}function Zf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Zf(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(wl in e)?e._ctx=Qt:i===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Qt},n=32):(e=String(e),r&64?(n=16,e=[kk(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ak(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Ff([e.class,r.class]));else if(i==="style")e.style=Mf([e.style,r.style]);else if(cl(i)){const s=e[i],o=r[i];o&&s!==o&&!(re(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Tn(t,e,n,r=null){sn(t,e,7,[n,r])}const Ck=L_();let xk=0;function Rk(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Ck,s={uid:xk++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Y1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:N_(r,i),emitsOptions:v_(r,i),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=MS.bind(null,s),t.ce&&t.ce(s),s}let Ye=null;const Nk=()=>Ye||Qt,$s=t=>{Ye=t,t.scope.on()},Pi=()=>{Ye&&Ye.scope.off(),Ye=null};function q_(t){return t.vnode.shapeFlag&4}let _a=!1;function Dk(t,e=!1){_a=e;const{props:n,children:r}=t.vnode,i=q_(t);dk(t,n,i,e),pk(t,r);const s=i?Ok(t,e):void 0;return _a=!1,s}function Ok(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=a_(new Proxy(t.ctx,ok));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Lk(t):null;$s(t),co();const s=Pr(r,t,0,[t.props,i]);if(uo(),Pi(),Kw(s)){if(s.then(Pi,Pi),e)return s.then(o=>{Og(t,o,e)}).catch(o=>{fl(o,t,0)});t.asyncDep=s}else Og(t,s,e)}else j_(t,e)}function Og(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=h_(e)),j_(t,n)}let Pg;function j_(t,e,n){const r=t.type;if(!t.render){if(!e&&Pg&&!r.render){const i=r.template||Xf(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=_t(_t({isCustomElement:s,delimiters:a},o),c);r.render=Pg(i,u)}}t.render=r.render||vn}$s(t),co(),ak(t),uo(),Pi()}function Pk(t){return new Proxy(t.attrs,{get(e,n){return Kt(t,"get","$attrs"),e[n]}})}function Lk(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Pk(t))},slots:t.slots,emit:t.emit,expose:e}}function _l(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(h_(a_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xo)return Xo[n](t)},has(e,n){return n in e||n in Xo}}))}function Mk(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function Fk(t){return ue(t)&&"__vccOpts"in t}const $e=(t,e)=>RS(t,e,_a);function tc(t,e,n){const r=arguments.length;return r===2?Pe(e)&&!re(e)?Sd(e)?qt(t,null,[e]):qt(t,e):qt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sd(n)&&(n=[n]),qt(t,e,n))}const Uk=Symbol(""),Vk=()=>Un(Uk),Bk="3.2.47",$k="http://www.w3.org/2000/svg",wi=typeof document<"u"?document:null,Lg=wi&&wi.createElement("template"),qk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?wi.createElementNS($k,t):wi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>wi.createTextNode(t),createComment:t=>wi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Lg.innerHTML=r?`<svg>${t}</svg>`:t;const a=Lg.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function jk(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function zk(t,e,n){const r=t.style,i=tt(n);if(n&&!i){if(e&&!tt(e))for(const s in e)n[s]==null&&kd(r,s,"");for(const s in n)kd(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Mg=/\s*!important$/;function kd(t,e,n){if(re(n))n.forEach(r=>kd(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Hk(t,e);Mg.test(n)?t.setProperty(ao(r),n.replace(Mg,""),"important"):t[r]=n}}const Fg=["Webkit","Moz","ms"],Nh={};function Hk(t,e){const n=Nh[e];if(n)return n;let r=qn(e);if(r!=="filter"&&r in t)return Nh[e]=r;r=hl(r);for(let i=0;i<Fg.length;i++){const s=Fg[i]+r;if(s in t)return Nh[e]=s}return e}const Ug="http://www.w3.org/1999/xlink";function Kk(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ug,e.slice(6,e.length)):t.setAttributeNS(Ug,e,n);else{const s=B1(e);n==null||s&&!jw(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Wk(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=jw(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ws(t,e,n,r){t.addEventListener(e,n,r)}function Gk(t,e,n,r){t.removeEventListener(e,n,r)}function Yk(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=Qk(e);if(r){const u=s[e]=Zk(r,i);ws(t,a,u,c)}else o&&(Gk(t,a,o,c),s[e]=void 0)}}const Vg=/(?:Once|Passive|Capture)$/;function Qk(t){let e;if(Vg.test(t)){e={};let r;for(;r=t.match(Vg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ao(t.slice(2)),e]}let Dh=0;const Xk=Promise.resolve(),Jk=()=>Dh||(Xk.then(()=>Dh=0),Dh=Date.now());function Zk(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(eA(r,n.value),e,5,[r])};return n.value=t,n.attached=Jk(),n}function eA(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Bg=/^on[a-z]/,tA=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?jk(t,r,i):e==="style"?zk(t,n,r):cl(e)?Uf(e)||Yk(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nA(t,e,r,i))?Wk(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Kk(t,e,r,i))};function nA(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Bg.test(e)&&ue(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bg.test(e)&&tt(n)?!1:e in t}const wr="transition",xo="animation",z_=(t,{slots:e})=>tc(b_,rA(t),e);z_.displayName="Transition";const H_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};z_.props=_t({},b_.props,H_);const li=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},$g=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function rA(t){const e={};for(const K in t)K in H_||(e[K]=t[K]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=iA(i),y=p&&p[0],I=p&&p[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:E,onLeave:R,onLeaveCancelled:F,onBeforeAppear:z=v,onAppear:ne=b,onAppearCancelled:X=E}=e,oe=(K,Ce,pt)=>{hi(K,Ce?l:a),hi(K,Ce?u:o),pt&&pt()},we=(K,Ce)=>{K._isLeaving=!1,hi(K,h),hi(K,f),hi(K,d),Ce&&Ce()},nt=K=>(Ce,pt)=>{const yr=K?ne:b,Ve=()=>oe(Ce,K,pt);li(yr,[Ce,Ve]),qg(()=>{hi(Ce,K?c:s),_r(Ce,K?l:a),$g(yr)||jg(Ce,r,y,Ve)})};return _t(e,{onBeforeEnter(K){li(v,[K]),_r(K,s),_r(K,o)},onBeforeAppear(K){li(z,[K]),_r(K,c),_r(K,u)},onEnter:nt(!1),onAppear:nt(!0),onLeave(K,Ce){K._isLeaving=!0;const pt=()=>we(K,Ce);_r(K,h),aA(),_r(K,d),qg(()=>{!K._isLeaving||(hi(K,h),_r(K,f),$g(R)||jg(K,r,I,pt))}),li(R,[K,pt])},onEnterCancelled(K){oe(K,!1),li(E,[K])},onAppearCancelled(K){oe(K,!0),li(X,[K])},onLeaveCancelled(K){we(K),li(F,[K])}})}function iA(t){if(t==null)return null;if(Pe(t))return[Oh(t.enter),Oh(t.leave)];{const e=Oh(t);return[e,e]}}function Oh(t){return W1(t)}function _r(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function hi(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function qg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let sA=0;function jg(t,e,n,r){const i=t._endId=++sA,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=oA(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=f=>{f.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function oA(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${wr}Delay`),s=r(`${wr}Duration`),o=zg(i,s),a=r(`${xo}Delay`),c=r(`${xo}Duration`),u=zg(a,c);let l=null,h=0,d=0;e===wr?o>0&&(l=wr,h=o,d=s.length):e===xo?u>0&&(l=xo,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?wr:xo:null,d=l?l===wr?s.length:c.length:0);const f=l===wr&&/\b(transform|all)(,|$)/.test(r(`${wr}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function zg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Hg(n)+Hg(t[r])))}function Hg(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function aA(){return document.body.offsetHeight}const Kg=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>au(e,n):e};function cA(t){t.target.composing=!0}function Wg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Z$={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Kg(i);const s=r||i.props&&i.props.type==="number";ws(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=dd(a)),t._assign(a)}),n&&ws(t,"change",()=>{t.value=t.value.trim()}),e||(ws(t,"compositionstart",cA),ws(t,"compositionend",Wg),ws(t,"change",Wg))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Kg(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&dd(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},uA=_t({patchProp:tA},qk);let Gg;function lA(){return Gg||(Gg=wk(uA))}const hA=(...t)=>{const e=lA().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=dA(r);if(!i)return;const s=e._component;!ue(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function dA(t){return tt(t)?document.querySelector(t):t}const fA=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},mA={};function pA(t,e){const n=rk("router-view");return F_(),V_(n)}const gA=fA(mA,[["render",pA]]),yA="modulepreload",vA=function(t){return"/pikaro_page/"+t},Yg={},di=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=vA(s),s in Yg)return;Yg[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const h=i[l];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":yA,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const _s=typeof window<"u";function wA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const be=Object.assign;function Ph(t,e){const n={};for(const r in e){const i=e[r];n[r]=bn(i)?i.map(t):t(i)}return n}const Zo=()=>{},bn=Array.isArray,_A=/\/$/,bA=t=>t.replace(_A,"");function Lh(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=SA(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function IA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function EA(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&qs(e.matched[r],n.matched[i])&&K_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function K_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TA(t[n],e[n]))return!1;return!0}function TA(t,e){return bn(t)?Xg(t,e):bn(e)?Xg(e,t):t===e}function Xg(t,e){return bn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function SA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var ba;(function(t){t.pop="pop",t.push="push"})(ba||(ba={}));var ea;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ea||(ea={}));function kA(t){if(!t)if(_s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bA(t)}const AA=/^[^#]+#/;function CA(t,e){return t.replace(AA,"#")+e}function xA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const bl=()=>({left:window.pageXOffset,top:window.pageYOffset});function RA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=xA(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Jg(t,e){return(history.state?history.state.position-e:-1)+t}const Ad=new Map;function NA(t,e){Ad.set(t,e)}function DA(t){const e=Ad.get(t);return Ad.delete(t),e}let OA=()=>location.protocol+"//"+location.host;function W_(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Qg(c,"")}return Qg(n,t)+r+i}function PA(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=W_(t,location),p=n.value,y=e.value;let I=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}I=y?d.position-y.position:0}else r(f);i.forEach(v=>{v(n.value,p,{delta:I,type:ba.pop,direction:I?I>0?ea.forward:ea.back:ea.unknown})})};function c(){o=n.value}function u(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return s.push(f),f}function l(){const{history:d}=window;!d.state||d.replaceState(be({},d.state,{scroll:bl()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Zg(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?bl():null}}function LA(t){const{history:e,location:n}=window,r={value:W_(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:OA()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=be({},e.state,Zg(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=be({},i.value,e.state,{forward:c,scroll:bl()});s(l.current,l,!0);const h=be({},Zg(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function MA(t){t=kA(t);const e=LA(t),n=PA(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=be({location:"",base:t,go:r,createHref:CA.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function FA(t){return typeof t=="string"||t&&typeof t=="object"}function G_(t){return typeof t=="string"||typeof t=="symbol"}const br={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y_=Symbol("");var ey;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ey||(ey={}));function js(t,e){return be(new Error,{type:t,[Y_]:!0},e)}function Kn(t,e){return t instanceof Error&&Y_ in t&&(e==null||!!(t.type&e))}const ty="[^/]+?",UA={sensitive:!1,strict:!1,start:!0,end:!0},VA=/[.+*?^${}()[\]/\\]/g;function BA(t,e){const n=be({},UA,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(VA,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:y,optional:I,regexp:v}=d;s.push({name:p,repeatable:y,optional:I});const b=v||ty;if(b!==ty){f+=10;try{new RegExp(`(${b})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${p}" (${b}): `+R.message)}}let E=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(E=I&&u.length<2?`(?:/${E})`:"/"+E),I&&(E+="?"),i+=E,f+=20,I&&(f+=-8),y&&(f+=-20),b===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",p=s[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:p,repeatable:y,optional:I}=f,v=p in u?u[p]:"";if(bn(v)&&!y)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const b=bn(v)?v.join("/"):v;if(!b)if(I)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);l+=b}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function $A(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qA(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=$A(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(ny(r))return 1;if(ny(i))return-1}return i.length-r.length}function ny(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jA={type:0,value:""},zA=/[a-zA-Z0-9_]/;function HA(t){if(!t)return[[]];if(t==="/")return[[jA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:zA.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function KA(t,e,n){const r=BA(HA(t.path),n),i=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function WA(t,e){const n=[],r=new Map;e=sy({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,p=GA(l);p.aliasOf=d&&d.record;const y=sy(e,l),I=[p];if("alias"in l){const E=typeof l.alias=="string"?[l.alias]:l.alias;for(const R of E)I.push(be({},p,{components:d?d.record.components:p.components,path:R,aliasOf:d?d.record:p}))}let v,b;for(const E of I){const{path:R}=E;if(h&&R[0]!=="/"){const F=h.record.path,z=F[F.length-1]==="/"?"":"/";E.path=h.record.path+(R&&z+R)}if(v=KA(E,h,y),d?d.alias.push(v):(b=b||v,b!==v&&b.alias.push(v),f&&l.name&&!iy(v)&&o(l.name)),p.children){const F=p.children;for(let z=0;z<F.length;z++)s(F[z],v,d&&d.children[z])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return b?()=>{o(b)}:Zo}function o(l){if(G_(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&qA(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Q_(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!iy(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},p,y;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw js(1,{location:l});y=d.record.name,f=be(ry(h.params,d.keys.filter(b=>!b.optional).map(b=>b.name)),l.params&&ry(l.params,d.keys.map(b=>b.name))),p=d.stringify(f)}else if("path"in l)p=l.path,d=n.find(b=>b.re.test(p)),d&&(f=d.parse(p),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!d)throw js(1,{location:l,currentLocation:h});y=d.record.name,f=be({},h.params,l.params),p=d.stringify(f)}const I=[];let v=d;for(;v;)I.unshift(v.record),v=v.parent;return{name:y,path:p,params:f,matched:I,meta:QA(I)}}return t.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ry(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function GA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:YA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function YA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function iy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function QA(t){return t.reduce((e,n)=>be(e,n.meta),{})}function sy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Q_(t,e){return e.children.some(n=>n===t||Q_(t,n))}const X_=/#/g,XA=/&/g,JA=/\//g,ZA=/=/g,eC=/\?/g,J_=/\+/g,tC=/%5B/g,nC=/%5D/g,Z_=/%5E/g,rC=/%60/g,eb=/%7B/g,iC=/%7C/g,tb=/%7D/g,sC=/%20/g;function em(t){return encodeURI(""+t).replace(iC,"|").replace(tC,"[").replace(nC,"]")}function oC(t){return em(t).replace(eb,"{").replace(tb,"}").replace(Z_,"^")}function Cd(t){return em(t).replace(J_,"%2B").replace(sC,"+").replace(X_,"%23").replace(XA,"%26").replace(rC,"`").replace(eb,"{").replace(tb,"}").replace(Z_,"^")}function aC(t){return Cd(t).replace(ZA,"%3D")}function cC(t){return em(t).replace(X_,"%23").replace(eC,"%3F")}function uC(t){return t==null?"":cC(t).replace(JA,"%2F")}function Au(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function lC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(J_," "),o=s.indexOf("="),a=Au(o<0?s:s.slice(0,o)),c=o<0?null:Au(s.slice(o+1));if(a in e){let u=e[a];bn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function oy(t){let e="";for(let n in t){const r=t[n];if(n=aC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(bn(r)?r.map(s=>s&&Cd(s)):[r&&Cd(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function hC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=bn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const dC=Symbol(""),ay=Symbol(""),Il=Symbol(""),nb=Symbol(""),xd=Symbol("");function Ro(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Cr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(js(4,{from:n,to:e})):h instanceof Error?a(h):FA(h)?a(js(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Mh(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(fC(a)){const u=(a.__vccOpts||a)[e];u&&i.push(Cr(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=wA(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Cr(d,n,r,s,o)()}))}}return i}function fC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cy(t){const e=Un(Il),n=Un(nb),r=$e(()=>e.resolve(Ns(t.to))),i=$e(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(qs.bind(null,l));if(d>-1)return d;const f=uy(c[u-2]);return u>1&&uy(l)===f&&h[h.length-1].path!==f?h.findIndex(qs.bind(null,c[u-2])):d}),s=$e(()=>i.value>-1&&yC(n.params,r.value.params)),o=$e(()=>i.value>-1&&i.value===n.matched.length-1&&K_(n.params,r.value.params));function a(c={}){return gC(c)?e[Ns(t.replace)?"replace":"push"](Ns(t.to)).catch(Zo):Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const mC=ec({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cy,setup(t,{slots:e}){const n=Za(cy(t)),{options:r}=Un(Il),i=$e(()=>({[ly(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ly(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:tc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),pC=mC;function gC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yC(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!bn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function uy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ly=(t,e,n)=>t!=null?t:e!=null?e:n,vC=ec({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Un(xd),i=$e(()=>t.route||r.value),s=Un(ay,0),o=$e(()=>{let u=Ns(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=$e(()=>i.value.matched[o.value]);cu(ay,$e(()=>o.value+1)),cu(dC,a),cu(xd,i);const c=SS();return Qo(()=>[c.value,a.value,t.name],([u,l,h],[d,f,p])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!qs(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=i.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return hy(n.default,{Component:d,route:u});const f=h.props[l],p=f?f===!0?u.params:typeof f=="function"?f(u):f:null,I=tc(d,be({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return hy(n.default,{Component:I,route:u})||I}}});function hy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const wC=vC;function _C(t){const e=WA(t.routes,t),n=t.parseQuery||lC,r=t.stringifyQuery||oy,i=t.history,s=Ro(),o=Ro(),a=Ro(),c=kS(br);let u=br;_s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ph.bind(null,k=>""+k),h=Ph.bind(null,uC),d=Ph.bind(null,Au);function f(k,q){let V,Z;return G_(k)?(V=e.getRecordMatcher(k),Z=q):Z=k,e.addRoute(Z,V)}function p(k){const q=e.getRecordMatcher(k);q&&e.removeRoute(q)}function y(){return e.getRoutes().map(k=>k.record)}function I(k){return!!e.getRecordMatcher(k)}function v(k,q){if(q=be({},q||c.value),typeof k=="string"){const m=Lh(n,k,q.path),g=e.resolve({path:m.path},q),T=i.createHref(m.fullPath);return be(m,g,{params:d(g.params),hash:Au(m.hash),redirectedFrom:void 0,href:T})}let V;if("path"in k)V=be({},k,{path:Lh(n,k.path,q.path).path});else{const m=be({},k.params);for(const g in m)m[g]==null&&delete m[g];V=be({},k,{params:h(k.params)}),q.params=h(q.params)}const Z=e.resolve(V,q),pe=k.hash||"";Z.params=l(d(Z.params));const Be=IA(r,be({},k,{hash:oC(pe),path:Z.path})),le=i.createHref(Be);return be({fullPath:Be,hash:pe,query:r===oy?hC(k.query):k.query||{}},Z,{redirectedFrom:void 0,href:le})}function b(k){return typeof k=="string"?Lh(n,k,c.value.path):be({},k)}function E(k,q){if(u!==k)return js(8,{from:q,to:k})}function R(k){return ne(k)}function F(k){return R(be(b(k),{replace:!0}))}function z(k){const q=k.matched[k.matched.length-1];if(q&&q.redirect){const{redirect:V}=q;let Z=typeof V=="function"?V(k):V;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=b(Z):{path:Z},Z.params={}),be({query:k.query,hash:k.hash,params:"path"in Z?{}:k.params},Z)}}function ne(k,q){const V=u=v(k),Z=c.value,pe=k.state,Be=k.force,le=k.replace===!0,m=z(V);if(m)return ne(be(b(m),{state:typeof m=="object"?be({},pe,m.state):pe,force:Be,replace:le}),q||V);const g=V;g.redirectedFrom=q;let T;return!Be&&EA(r,Z,V)&&(T=js(16,{to:g,from:Z}),ai(Z,Z,!0,!1)),(T?Promise.resolve(T):oe(g,Z)).catch(S=>Kn(S)?Kn(S,2)?S:un(S):ke(S,g,Z)).then(S=>{if(S){if(Kn(S,2))return ne(be({replace:le},b(S.to),{state:typeof S.to=="object"?be({},pe,S.to.state):pe,force:Be}),q||g)}else S=nt(g,Z,!0,le,pe);return we(g,Z,S),S})}function X(k,q){const V=E(k,q);return V?Promise.reject(V):Promise.resolve()}function oe(k,q){let V;const[Z,pe,Be]=bC(k,q);V=Mh(Z.reverse(),"beforeRouteLeave",k,q);for(const m of Z)m.leaveGuards.forEach(g=>{V.push(Cr(g,k,q))});const le=X.bind(null,k,q);return V.push(le),ms(V).then(()=>{V=[];for(const m of s.list())V.push(Cr(m,k,q));return V.push(le),ms(V)}).then(()=>{V=Mh(pe,"beforeRouteUpdate",k,q);for(const m of pe)m.updateGuards.forEach(g=>{V.push(Cr(g,k,q))});return V.push(le),ms(V)}).then(()=>{V=[];for(const m of k.matched)if(m.beforeEnter&&!q.matched.includes(m))if(bn(m.beforeEnter))for(const g of m.beforeEnter)V.push(Cr(g,k,q));else V.push(Cr(m.beforeEnter,k,q));return V.push(le),ms(V)}).then(()=>(k.matched.forEach(m=>m.enterCallbacks={}),V=Mh(Be,"beforeRouteEnter",k,q),V.push(le),ms(V))).then(()=>{V=[];for(const m of o.list())V.push(Cr(m,k,q));return V.push(le),ms(V)}).catch(m=>Kn(m,8)?m:Promise.reject(m))}function we(k,q,V){for(const Z of a.list())Z(k,q,V)}function nt(k,q,V,Z,pe){const Be=E(k,q);if(Be)return Be;const le=q===br,m=_s?history.state:{};V&&(Z||le?i.replace(k.fullPath,be({scroll:le&&m&&m.scroll},pe)):i.push(k.fullPath,pe)),c.value=k,ai(k,q,V,le),un()}let K;function Ce(){K||(K=i.listen((k,q,V)=>{if(!Nc.listening)return;const Z=v(k),pe=z(Z);if(pe){ne(be(pe,{replace:!0}),Z).catch(Zo);return}u=Z;const Be=c.value;_s&&NA(Jg(Be.fullPath,V.delta),bl()),oe(Z,Be).catch(le=>Kn(le,12)?le:Kn(le,2)?(ne(le.to,Z).then(m=>{Kn(m,20)&&!V.delta&&V.type===ba.pop&&i.go(-1,!1)}).catch(Zo),Promise.reject()):(V.delta&&i.go(-V.delta,!1),ke(le,Z,Be))).then(le=>{le=le||nt(Z,Be,!1),le&&(V.delta&&!Kn(le,8)?i.go(-V.delta,!1):V.type===ba.pop&&Kn(le,20)&&i.go(-1,!1)),we(Z,Be,le)}).catch(Zo)}))}let pt=Ro(),yr=Ro(),Ve;function ke(k,q,V){un(k);const Z=yr.list();return Z.length?Z.forEach(pe=>pe(k,q,V)):console.error(k),Promise.reject(k)}function Ee(){return Ve&&c.value!==br?Promise.resolve():new Promise((k,q)=>{pt.add([k,q])})}function un(k){return Ve||(Ve=!k,Ce(),pt.list().forEach(([q,V])=>k?V(k):q()),pt.reset()),k}function ai(k,q,V,Z){const{scrollBehavior:pe}=t;if(!_s||!pe)return Promise.resolve();const Be=!V&&DA(Jg(k.fullPath,0))||(Z||!V)&&history.state&&history.state.scroll||null;return m_().then(()=>pe(k,q,Be)).then(le=>le&&RA(le)).catch(le=>ke(le,k,q))}const ln=k=>i.go(k);let Ft;const ds=new Set,Nc={currentRoute:c,listening:!0,addRoute:f,removeRoute:p,hasRoute:I,getRoutes:y,resolve:v,options:t,push:R,replace:F,go:ln,back:()=>ln(-1),forward:()=>ln(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:yr.add,isReady:Ee,install(k){const q=this;k.component("RouterLink",pC),k.component("RouterView",wC),k.config.globalProperties.$router=q,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Ns(c)}),_s&&!Ft&&c.value===br&&(Ft=!0,R(i.location).catch(pe=>{}));const V={};for(const pe in br)V[pe]=$e(()=>c.value[pe]);k.provide(Il,q),k.provide(nb,Za(V)),k.provide(xd,c);const Z=k.unmount;ds.add(k),k.unmount=function(){ds.delete(k),ds.size<1&&(u=br,K&&K(),K=null,c.value=br,Ft=!1,Ve=!1),Z()}}};return Nc}function ms(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function bC(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>qs(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>qs(u,c))||i.push(c))}return[n,r,i]}function e3(){return Un(Il)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ib={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},EC=function(t){const e=rb(t);return ib.encodeByteArray(e,!0)},Cu=function(t){return EC(t).replace(/\./g,"")},sb=function(t){try{return ib.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function xu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!TC(n)||(t[n]=xu(t[n],e[n]));return t}function TC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=()=>SC().__FIREBASE_DEFAULTS__,AC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sb(t[1]);return e&&JSON.parse(e)},tm=()=>{try{return kC()||AC()||CC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xC=()=>{var t;return(t=tm())===null||t===void 0?void 0:t.config},RC=t=>{var e;return(e=tm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Cu(JSON.stringify(n)),Cu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function El(){var t;const e=(t=tm())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OC(){return typeof self=="object"&&self.self===self}function ab(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cb(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PC(){return!El()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ia(){try{return typeof indexedDB=="object"}catch{return!1}}function LC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MC,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rs.prototype.create)}}class rs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?FC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new At(i,a,r)}}function FC(t,e){return t.replace(UC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function VC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(fy(s)&&fy(o)){if(!Rd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ts(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function jo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ub(t,e){const n=new BC(t,e);return n.subscribe.bind(n)}class BC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$C(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fh),i.error===void 0&&(i.error=Fh),i.complete===void 0&&(i.complete=Fh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $C(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zC(e))try{this.getOrInitializeService({instanceIdentifier:pi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pi){return this.instances.has(e)}getOptions(e=pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pi){return this.component?this.component.multipleInstances?e:pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jC(t){return t===pi?void 0:t}function zC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=[];var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const lb={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},KC=ye.INFO,WC={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},GC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tl{constructor(e){this.name=e,this._logLevel=KC,this._logHandler=GC,this._userLogHandler=null,rm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}function YC(t){rm.forEach(e=>{e.setLogLevel(t)})}function QC(t,e){for(const n of rm){let r=null;e&&e.level&&(r=lb[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ye[s].toLowerCase(),message:a,args:o,type:i.name})}}}const XC=(t,e)=>e.some(n=>t instanceof n);let my,py;function JC(){return my||(my=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZC(){return py||(py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hb=new WeakMap,Nd=new WeakMap,db=new WeakMap,Uh=new WeakMap,im=new WeakMap;function ex(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hb.set(n,t)}).catch(()=>{}),im.set(e,t),e}function tx(t){if(Nd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nd.set(t,e)}let Dd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||db.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nx(t){Dd=t(Dd)}function rx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vh(this),e,...n);return db.set(r,e.sort?e.sort():[e]),Lr(r)}:ZC().includes(t)?function(...e){return t.apply(Vh(this),e),Lr(hb.get(this))}:function(...e){return Lr(t.apply(Vh(this),e))}}function ix(t){return typeof t=="function"?rx(t):(t instanceof IDBTransaction&&tx(t),XC(t,JC())?new Proxy(t,Dd):t)}function Lr(t){if(t instanceof IDBRequest)return ex(t);if(Uh.has(t))return Uh.get(t);const e=ix(t);return e!==t&&(Uh.set(t,e),im.set(e,t)),e}const Vh=t=>im.get(t);function sx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Lr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Lr(o.result),c.oldVersion,c.newVersion,Lr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ox=["get","getKey","getAll","getAllKeys","count"],ax=["put","add","delete","clear"],Bh=new Map;function gy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bh.get(e))return Bh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ax.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ox.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Bh.set(e,s),s}nx(t=>({...t,get:(e,n,r)=>gy(e,n)||t.get(e,n,r),has:(e,n)=>!!gy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ux(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ux(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Od="@firebase/app",yy="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Tl("@firebase/app"),lx="@firebase/app-compat",hx="@firebase/analytics-compat",dx="@firebase/analytics",fx="@firebase/app-check-compat",mx="@firebase/app-check",px="@firebase/auth",gx="@firebase/auth-compat",yx="@firebase/database",vx="@firebase/database-compat",wx="@firebase/functions",_x="@firebase/functions-compat",bx="@firebase/installations",Ix="@firebase/installations-compat",Ex="@firebase/messaging",Tx="@firebase/messaging-compat",Sx="@firebase/performance",kx="@firebase/performance-compat",Ax="@firebase/remote-config",Cx="@firebase/remote-config-compat",xx="@firebase/storage",Rx="@firebase/storage-compat",Nx="@firebase/firestore",Dx="@firebase/firestore-compat",Ox="firebase",Px="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]",Lx={[Od]:"fire-core",[lx]:"fire-core-compat",[dx]:"fire-analytics",[hx]:"fire-analytics-compat",[mx]:"fire-app-check",[fx]:"fire-app-check-compat",[px]:"fire-auth",[gx]:"fire-auth-compat",[yx]:"fire-rtdb",[vx]:"fire-rtdb-compat",[wx]:"fire-fn",[_x]:"fire-fn-compat",[bx]:"fire-iid",[Ix]:"fire-iid-compat",[Ex]:"fire-fcm",[Tx]:"fire-fcm-compat",[Sx]:"fire-perf",[kx]:"fire-perf-compat",[Ax]:"fire-rc",[Cx]:"fire-rc-compat",[xx]:"fire-gcs",[Rx]:"fire-gcs-compat",[Nx]:"fire-fst",[Dx]:"fire-fst-compat","fire-js":"fire-js",[Ox]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Map,Ea=new Map;function Ru(t,e){try{t.container.addComponent(e)}catch(n){$i.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fb(t,e){t.container.addOrOverwriteComponent(e)}function nr(t){const e=t.name;if(Ea.has(e))return $i.debug(`There were multiple attempts to register component ${e}.`),!1;Ea.set(e,t);for(const n of Br.values())Ru(n,t);return!0}function mb(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mx(t,e,n=Vr){mb(t,e).clearInstance(n)}function Fx(){Ea.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jn=new rs("app","Firebase",Ux);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=Px;function sm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Jn.create("bad-app-name",{appName:String(i)});if(n||(n=xC()),!n)throw Jn.create("no-options");const s=Br.get(i);if(s){if(Rd(n,s.options)&&Rd(r,s.config))return s;throw Jn.create("duplicate-app",{appName:i})}const o=new HC(i);for(const c of Ea.values())o.addComponent(c);const a=new Vx(n,r,o);return Br.set(i,a),a}function Bx(t=Vr){const e=Br.get(t);if(!e&&t===Vr)return sm();if(!e)throw Jn.create("no-app",{appName:t});return e}function $x(){return Array.from(Br.values())}async function pb(t){const e=t.name;Br.has(e)&&(Br.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function on(t,e,n){var r;let i=(r=Lx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$i.warn(a.join(" "));return}nr(new an(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function gb(t,e){if(t!==null&&typeof t!="function")throw Jn.create("invalid-log-argument");QC(t,e)}function yb(t){YC(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx="firebase-heartbeat-database",jx=1,Ta="firebase-heartbeat-store";let $h=null;function vb(){return $h||($h=sx(qx,jx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ta)}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),$h}async function zx(t){try{return(await vb()).transaction(Ta).objectStore(Ta).get(wb(t))}catch(e){if(e instanceof At)$i.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$i.warn(n.message)}}}async function vy(t,e){try{const r=(await vb()).transaction(Ta,"readwrite");return await r.objectStore(Ta).put(e,wb(t)),r.done}catch(n){if(n instanceof At)$i.warn(n.message);else{const r=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$i.warn(r.message)}}}function wb(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=1024,Kx=30*24*60*60*1e3;class Wx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Kx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wy(),{heartbeatsToSend:n,unsentEntries:r}=Gx(this._heartbeatsCache.heartbeats),i=Cu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wy(){return new Date().toISOString().substring(0,10)}function Gx(t,e=Hx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_y(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_y(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Yx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ia()?LC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _y(t){return Cu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t){nr(new an("platform-logger",e=>new cx(e),"PRIVATE")),nr(new an("heartbeat",e=>new Wx(e),"PRIVATE")),on(Od,yy,t),on(Od,yy,"esm2017"),on("fire-js","")}Qx("");const Xx=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Jr,_DEFAULT_ENTRY_NAME:Vr,_addComponent:Ru,_addOrOverwriteComponent:fb,_apps:Br,_clearComponents:Fx,_components:Ea,_getProvider:mb,_registerComponent:nr,_removeServiceInstance:Mx,deleteApp:pb,getApp:Bx,getApps:$x,initializeApp:sm,onLog:gb,registerVersion:on,setLogLevel:yb,FirebaseError:At},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,n){this._delegate=e,this.firebase=n,Ru(e,new an("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),pb(this._delegate)))}_getService(e,n=Vr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Vr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Ru(this._delegate,e)}_addOrOverwriteComponent(e){fb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},by=new rs("app-compat","Firebase",Zx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:on,setLogLevel:yb,onLog:gb,apps:null,SDK_VERSION:Jr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Xx}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Vr,!dy(e,u))throw by.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const h=sm(u,l);if(dy(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(nr(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw by.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&xu(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(){const t=eR(Jx);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:_b,extendNamespace:e,createSubscribe:ub,ErrorFactory:rs,deepExtend:xu});function e(n){xu(t,n)}return t}const tR=_b();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new Tl("@firebase/app-compat"),nR="@firebase/app-compat",rR="0.2.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t){on(nR,rR,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(OC()&&self.firebase!==void 0){Iy.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Iy.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const is=tR;iR();var sR="firebase",oR="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */is.registerVersion(sR,oR,"app-compat");function om(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const No={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ps={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function bb(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cR=aR,uR=bb,Ib=new rs("auth","Firebase",bb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=new Tl("@firebase/auth");function du(t,...e){Ey.logLevel<=ye.ERROR&&Ey.error(`Auth (${Jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw am(t,...e)}function vt(t,...e){return am(t,...e)}function Eb(t,e,n){const r=Object.assign(Object.assign({},uR()),{[e]:n});return new rs("auth","Firebase",r).create(e,{appName:t.name})}function ho(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(t,"argument-error"),Eb(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function am(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ib.create(t,...e)}function D(t,e,...n){if(!t)throw am(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw du(e),new Error(e)}function In(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new Map;function Xt(t){In(t instanceof Function,"Expected a class definition");let e=Ty.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ty.set(t,e),e)}function lR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cm(){return Sy()==="http:"||Sy()==="https:"}function Sy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cm()||ab()||"connection"in navigator)?navigator.onLine:!0}function dR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=DC()||nm()}get(){return hR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=new nc(3e4,6e4);function ot(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dt(t,e,n,r,i={}){return Sb(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=lo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Tb.fetch()(kb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Sb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fR),e);try{const i=new pR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw zo(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Eb(t,l,u);bt(t,l)}}catch(i){if(i instanceof At)throw i;bt(t,"network-request-failed")}}async function lr(t,e,n,r,i={}){const s=await dt(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?um(t.config,i):`${t.config.apiScheme}://${i}`}class pR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),mR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gR(t,e){return dt(t,"POST","/v1/accounts:delete",e)}async function yR(t,e){return dt(t,"POST","/v1/accounts:update",e)}async function vR(t,e){return dt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wR(t,e=!1){const n=H(t),r=await n.getIdToken(e),i=Sl(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ta(qh(i.auth_time)),issuedAtTime:ta(qh(i.iat)),expirationTime:ta(qh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qh(t){return Number(t)*1e3}function Sl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return du("JWT malformed, contained fewer than 3 sections"),null;try{const i=sb(n);return i?JSON.parse(i):(du("Failed to decode base64 JWT payload"),null)}catch(i){return du("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _R(t){const e=Sl(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&bR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ta(this.lastLoginAt),this.creationTime=ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t){var e;const n=t.auth,r=await t.getIdToken(),i=await rr(t,vR(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?SR(s.providerUserInfo):[],a=TR(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ab(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function ER(t){const e=H(t);await ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SR(t){return t.map(e=>{var{providerId:n}=e,r=om(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(t,e){const n=await Sb(t,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kb(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_R(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Aa;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Aa,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Li{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=om(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ab(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await rr(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wR(this,e)}reload(){return ER(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rr(this,gR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,b=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:E,emailVerified:R,isAnonymous:F,providerData:z,stsTokenManager:ne}=n;D(E&&ne,e,"internal-error");const X=Aa.fromJSON(this.name,ne);D(typeof E=="string",e,"internal-error"),Ir(h,e.name),Ir(d,e.name),D(typeof R=="boolean",e,"internal-error"),D(typeof F=="boolean",e,"internal-error"),Ir(f,e.name),Ir(p,e.name),Ir(y,e.name),Ir(I,e.name),Ir(v,e.name),Ir(b,e.name);const oe=new Li({uid:E,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:F,photoURL:p,phoneNumber:f,tenantId:y,stsTokenManager:X,createdAt:v,lastLoginAt:b});return z&&Array.isArray(z)&&(oe.providerData=z.map(we=>Object.assign({},we))),I&&(oe._redirectEventId=I),oe}static async _fromIdTokenResponse(e,n,r=!1){const i=new Aa;i.updateFromServerResponse(n);const s=new Li({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ka(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cb.type="NONE";const zs=Cb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Os(Xt(zs),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Xt(zs);const o=Mi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Li._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Os(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Os(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Db(e))return"Blackberry";if(Ob(e))return"Webos";if(lm(e))return"Safari";if((e.includes("chrome/")||Rb(e))&&!e.includes("edge/"))return"Chrome";if(rc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xb(t=qe()){return/firefox\//i.test(t)}function lm(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rb(t=qe()){return/crios\//i.test(t)}function Nb(t=qe()){return/iemobile/i.test(t)}function rc(t=qe()){return/android/i.test(t)}function Db(t=qe()){return/blackberry/i.test(t)}function Ob(t=qe()){return/webos/i.test(t)}function fo(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AR(t=qe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function CR(t=qe()){var e;return fo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xR(){return cb()&&document.documentMode===10}function Pb(t=qe()){return fo(t)||rc(t)||Ob(t)||Db(t)||/windows phone/i.test(t)||Nb(t)}function RR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t,e=[]){let n;switch(t){case"Browser":n=ky(qe());break;case"Worker":n=`${ky(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ay(this),this.idTokenSubscription=new Ay(this),this.beforeStateQueue=new NR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ib,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?H(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function lt(t){return H(t)}class Ay{constructor(e){this.auth=e,this.observer=null,this.addObserver=ub(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function OR(t,e,n){const r=lt(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Mb(e),{host:o,port:a}=PR(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||LR()}function Mb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PR(t){const e=Mb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Cy(o)}}}function Cy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(t,e){return dt(t,"POST","/v1/accounts:resetPassword",ot(t,e))}async function Ub(t,e){return dt(t,"POST","/v1/accounts:update",e)}async function MR(t,e){return dt(t,"POST","/v1/accounts:update",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(t,e){return lr(t,"POST","/v1/accounts:signInWithPassword",ot(t,e))}async function kl(t,e){return dt(t,"POST","/v1/accounts:sendOobCode",ot(t,e))}async function UR(t,e){return kl(t,e)}async function VR(t,e){return kl(t,e)}async function BR(t,e){return kl(t,e)}async function $R(t,e){return kl(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(t,e){return lr(t,"POST","/v1/accounts:signInWithEmailLink",ot(t,e))}async function jR(t,e){return lr(t,"POST","/v1/accounts:signInWithEmailLink",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends mo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ca(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ca(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return FR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qR(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ub(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jR(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(t,e){return lr(t,"POST","/v1/accounts:signInWithIdp",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR="http://localhost";class jn extends mo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=om(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new jn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zn(e,n)}buildRequest(){const e={requestUri:zR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(t,e){return dt(t,"POST","/v1/accounts:sendVerificationCode",ot(t,e))}async function KR(t,e){return lr(t,"POST","/v1/accounts:signInWithPhoneNumber",ot(t,e))}async function WR(t,e){const n=await lr(t,"POST","/v1/accounts:signInWithPhoneNumber",ot(t,e));if(n.temporaryProof)throw zo(t,"account-exists-with-different-credential",n);return n}const GR={USER_NOT_FOUND:"user-not-found"};async function YR(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return lr(t,"POST","/v1/accounts:signInWithPhoneNumber",ot(t,n),GR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends mo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Fi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Fi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return KR(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return WR(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return YR(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Fi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XR(t){const e=Ts(jo(t)).link,n=e?Ts(jo(e)).deep_link_id:null,r=Ts(jo(t)).deep_link_id;return(r?Ts(jo(r)).link:null)||r||n||e||t}class Al{constructor(e){var n,r,i,s,o,a;const c=Ts(jo(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=QR((i=c.mode)!==null&&i!==void 0?i:null);D(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=XR(e);try{return new Al(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.providerId=Zr.PROVIDER_ID}static credential(e,n){return Ca._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Al.parseLink(n);return D(r,"argument-error"),Ca._fromEmailAndCode(e,r.code,r.tenantId)}}Zr.PROVIDER_ID="password";Zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends hr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ps extends po{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return D("providerId"in n&&"signInMethod"in n,"argument-error"),jn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return D(e.idToken||e.accessToken,"argument-error"),jn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ps.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ps.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ps(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends po{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jn._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends po{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="http://localhost";class Hs extends mo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Hs(r,s)}static _create(e,n){return new Hs(e,n)}buildRequest(){return{requestUri:JR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="saml.";class Nu extends hr{constructor(e){D(e.startsWith(ZR),"argument-error"),super(e)}static credentialFromResult(e){return Nu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Nu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Hs.fromJSON(e);return D(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Hs._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends po{constructor(){super("twitter.com")}static credential(e,n){return jn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t,e){return lr(t,"POST","/v1/accounts:signUp",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Li._fromIdTokenResponse(e,r,i),o=xy(r);return new cn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xy(r);return new cn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(t){var e;const n=lt(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new cn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Vb(n,{returnSecureToken:!0}),i=await cn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends At{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Du.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Du(e,n,r,i)}}function Bb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Du._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t,e){const n=H(t);await Cl(!0,n,e);const{providerUserInfo:r}=await yR(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=$b(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function hm(t,e,n=!1){const r=await rr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cn._forOperation(t,"link",r)}async function Cl(t,e,n){await ka(e);const r=$b(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";D(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await rr(t,Bb(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Sl(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),cn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(t,e,n=!1){const r="signIn",i=await Bb(t,r,e),s=await cn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xl(t,e){return jb(lt(t),e)}async function zb(t,e){const n=H(t);return await Cl(!1,n,e.providerId),hm(n,e)}async function Hb(t,e){return qb(H(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(t,e){return lr(t,"POST","/v1/accounts:signInWithCustomToken",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN(t,e){const n=lt(t),r=await nN(n,{token:e,returnSecureToken:!0}),i=await cn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?dm._fromServerResponse(e,n):bt(e,"internal-error")}}class dm extends Rl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new dm(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e,n){var r;D(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),D(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(D(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(D(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(t,e,n){const r=H(t),i={requestType:"PASSWORD_RESET",email:e};n&&Nl(r,i,n),await VR(r,i)}async function sN(t,e,n){await Fb(H(t),{oobCode:e,newPassword:n})}async function oN(t,e){await MR(H(t),{oobCode:e})}async function Kb(t,e){const n=H(t),r=await Fb(n,{oobCode:e}),i=r.requestType;switch(D(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(r.mfaInfo,n,"internal-error");default:D(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Rl._fromServerResponse(lt(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function aN(t,e){const{data:n}=await Kb(H(t),e);return n.email}async function cN(t,e,n){const r=lt(t),i=await Vb(r,{returnSecureToken:!0,email:e,password:n}),s=await cn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function uN(t,e,n){return xl(H(t),Zr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e,n){const r=H(t),i={requestType:"EMAIL_SIGNIN",email:e};D(n.handleCodeInApp,r,"argument-error"),n&&Nl(r,i,n),await BR(r,i)}function hN(t,e){const n=Al.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function dN(t,e,n){const r=H(t),i=Zr.credentialWithLink(e,n||Sa());return D(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),xl(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(t,e){return dt(t,"POST","/v1/accounts:createAuthUri",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(t,e){const n=cm()?Sa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await fN(H(t),r);return i||[]}async function pN(t,e){const n=H(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Nl(n.auth,i,e);const{email:s}=await UR(n.auth,i);s!==t.email&&await t.reload()}async function gN(t,e,n){const r=H(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Nl(r.auth,s,n);const{email:o}=await $R(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e){return dt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=H(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await rr(r,yN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function wN(t,e){return Wb(H(t),e,null)}function _N(t,e){return Wb(H(t),null,e)}async function Wb(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await rr(t,Ub(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Sl(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ls(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new IN(s,i);case"github.com":return new EN(s,i);case"google.com":return new TN(s,i);case"twitter.com":return new SN(s,i,t.screenName||null);case"custom":case"anonymous":return new Ls(s,null);default:return new Ls(s,r,i)}}class Ls{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Gb extends Ls{constructor(e,n,r,i){super(e,n,r),this.username=i}}class IN extends Ls{constructor(e,n){super(e,"facebook.com",n)}}class EN extends Gb{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class TN extends Ls{constructor(e,n){super(e,"google.com",n)}}class SN extends Gb{constructor(e,n,r){super(e,"twitter.com",n,r)}}function kN(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:bN(n)}class ki{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new ki("enroll",e,n)}static _fromMfaPendingCredential(e){return new ki("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ki._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ki._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=lt(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Rl._fromServerResponse(r,a));D(i.mfaPendingCredential,r,"internal-error");const o=ki._fromMfaPendingCredential(i.mfaPendingCredential);return new fm(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const l=await cn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return D(n.user,r,"internal-error"),cn._forOperation(n.user,n.operationType,u);default:bt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function AN(t,e){var n;const r=H(t),i=e;return D(e.customData.operationType,r,"argument-error"),D((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),fm._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t,e){return dt(t,"POST","/v2/accounts/mfaEnrollment:start",ot(t,e))}function xN(t,e){return dt(t,"POST","/v2/accounts/mfaEnrollment:finalize",ot(t,e))}function RN(t,e){return dt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ot(t,e))}class mm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Rl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new mm(e)}async getSession(){return ki._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await rr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await rr(this.user,RN(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const jh=new WeakMap;function NN(t){const e=H(t);return jh.has(e)||jh.set(e,mm._fromUser(e)),jh.get(e)}const Ou="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ou,"1"),this.storage.removeItem(Ou),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(){const t=qe();return lm(t)||fo(t)}const ON=1e3,PN=10;class Qb extends Yb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DN()&&RR(),this.fallbackToPolling=Pb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ON)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qb.type="LOCAL";const pm=Qb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb extends Yb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xb.type="SESSION";const qi=Xb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Dl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await LN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=ic("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function FN(t){rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function UN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BN(){return gm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="firebaseLocalStorageDb",$N=1,Pu="firebaseLocalStorage",Zb="fbase_key";class sc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ol(t,e){return t.transaction([Pu],e?"readwrite":"readonly").objectStore(Pu)}function qN(){const t=indexedDB.deleteDatabase(Jb);return new sc(t).toPromise()}function Pd(){const t=indexedDB.open(Jb,$N);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pu,{keyPath:Zb})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pu)?e(r):(r.close(),await qN(),e(await Pd()))})})}async function Ry(t,e,n){const r=Ol(t,!0).put({[Zb]:e,value:n});return new sc(r).toPromise()}async function jN(t,e){const n=Ol(t,!1).get(e),r=await new sc(n).toPromise();return r===void 0?null:r.value}function Ny(t,e){const n=Ol(t,!0).delete(e);return new sc(n).toPromise()}const zN=800,HN=3;class eI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dl._getInstance(BN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UN(),!this.activeServiceWorker)return;this.sender=new MN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pd();return await Ry(e,Ou,"1"),await Ny(e,Ou),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ry(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ny(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ol(i,!1).getAll();return new sc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eI.type="LOCAL";const xa=eI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t,e){return dt(t,"POST","/v2/accounts/mfaSignIn:start",ot(t,e))}function WN(t,e){return dt(t,"POST","/v2/accounts/mfaSignIn:finalize",ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(t){return(await dt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YN().appendChild(r)})}function nI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=500,XN=6e4,Uc=1e12;class JN{constructor(e){this.auth=e,this.counter=Uc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new ZN(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Uc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Uc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Uc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class ZN{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=eD(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},XN)},QN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function eD(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=nI("rcb"),tD=new nc(3e4,6e4),nD="https://www.google.com/recaptcha/api.js?";class rD{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=rt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return D(iD(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(rt().grecaptcha):new Promise((r,i)=>{const s=rt().setTimeout(()=>{i(vt(e,"network-request-failed"))},tD.get());rt()[zh]=()=>{rt().clearTimeout(s),delete rt()[zh];const a=rt().grecaptcha;if(!a){i(vt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${nD}?${lo({onload:zh,render:"explicit",hl:n})}`;tI(o).catch(()=>{clearTimeout(s),i(vt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=rt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function iD(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class sD{async load(e){return new JN(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="recaptcha",oD={theme:"light",type:"image"};class aD{constructor(e,n=Object.assign({},oD),r){this.parameters=n,this.type=rI,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=lt(r),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sD:new rD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=rt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(cm()&&!gm(),this.auth,"internal-error"),await cD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await GN(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function cD(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Fi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function uD(t,e,n){const r=lt(t),i=await Pl(r,e,H(n));return new ym(i,s=>xl(r,s))}async function lD(t,e,n){const r=H(t);await Cl(!1,r,"phone");const i=await Pl(r.auth,e,H(n));return new ym(i,s=>zb(r,s))}async function hD(t,e,n){const r=H(t),i=await Pl(r.auth,e,H(n));return new ym(i,s=>Hb(r,s))}async function Pl(t,e,n){var r;const i=await n.verify();try{D(typeof i=="string",t,"argument-error"),D(n.type===rI,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return D(o.type==="enroll",t,"internal-error"),(await CN(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{D(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return D(a,t,"missing-multi-factor-info"),(await KN(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await HR(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function dD(t,e){await hm(H(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.providerId=_n.PROVIDER_ID,this.auth=lt(e)}verifyPhoneNumber(e,n){return Pl(this.auth,e,H(n))}static credential(e,n){return Fi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return _n.credentialFromTaggedObject(n)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Fi._fromTokenResponse(n,r):null}}_n.PROVIDER_ID="phone";_n.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e){return e?Xt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm extends mo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fD(t){return jb(t.auth,new vm(t),t.bypassAuthState)}function mD(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),qb(n,new vm(t),t.bypassAuthState)}async function pD(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),hm(n,new vm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fD;case"linkViaPopup":case"linkViaRedirect":return pD;case"reauthViaPopup":case"reauthViaRedirect":return mD;default:bt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=new nc(2e3,1e4);async function yD(t,e,n){const r=lt(t);ho(t,e,hr);const i=ss(r,n);return new Yn(r,"signInViaPopup",e,i).executeNotNull()}async function vD(t,e,n){const r=H(t);ho(r.auth,e,hr);const i=ss(r.auth,n);return new Yn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function wD(t,e,n){const r=H(t);ho(r.auth,e,hr);const i=ss(r.auth,n);return new Yn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Yn extends iI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,gD.get())};e()}}Yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="pendingRedirect",na=new Map;class bD extends iI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const r=await ID(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ID(t,e){const n=oI(e),r=sI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function wm(t,e){return sI(t)._set(oI(e),"true")}function ED(){na.clear()}function _m(t,e){na.set(t._key(),e)}function sI(t){return Xt(t._redirectPersistence)}function oI(t){return Mi(_D,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t,e,n){return SD(t,e,n)}async function SD(t,e,n){const r=lt(t);ho(t,e,hr),await r._initializationPromise;const i=ss(r,n);return await wm(i,r),i._openRedirect(r,e,"signInViaRedirect")}function kD(t,e,n){return AD(t,e,n)}async function AD(t,e,n){const r=H(t);ho(r.auth,e,hr),await r.auth._initializationPromise;const i=ss(r.auth,n);await wm(i,r.auth);const s=await aI(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function CD(t,e,n){return xD(t,e,n)}async function xD(t,e,n){const r=H(t);ho(r.auth,e,hr),await r.auth._initializationPromise;const i=ss(r.auth,n);await Cl(!1,r,e.providerId),await wm(i,r.auth);const s=await aI(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function RD(t,e){return await lt(t)._initializationPromise,Ll(t,e,!1)}async function Ll(t,e,n=!1){const r=lt(t),i=ss(r,e),o=await new bD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function aI(t){const e=ic(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=10*60*1e3;class cI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ND&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dy(e))}saveEventToCache(e){this.cachedEventUids.add(Dy(e)),this.lastProcessedEventTime=Date.now()}}function Dy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e={}){return dt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PD=/^https?/;async function LD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lI(t);for(const n of e)try{if(MD(n))return}catch{}bt(t,"unauthorized-domain")}function MD(t){const e=Sa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PD.test(n))return!1;if(OD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=new nc(3e4,6e4);function Oy(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UD(t){return new Promise((e,n)=>{var r,i,s;function o(){Oy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oy(),n(vt(t,"network-request-failed"))},timeout:FD.get()})}if(!((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rt().gapi)===null||s===void 0)&&s.load)o();else{const a=nI("iframefcb");return rt()[a]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},tI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw fu=null,e})}let fu=null;function VD(t){return fu=fu||UD(t),fu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=new nc(5e3,15e3),$D="__/auth/iframe",qD="emulator/auth/iframe",jD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HD(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?um(e,qD):`https://${t.config.authDomain}/${$D}`,r={apiKey:e.apiKey,appName:t.name,v:Jr},i=zD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lo(r).slice(1)}`}async function KD(t){const e=await VD(t),n=rt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:HD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),a=rt().setTimeout(()=>{s(o)},BD.get());function c(){rt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GD=500,YD=600,QD="_blank",XD="http://localhost";class Py{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JD(t,e,n,r=GD,i=YD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},WD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=qe().toLowerCase();n&&(a=Rb(u)?QD:n),xb(u)&&(e=e||XD,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(CR(u)&&a!=="_self")return ZD(e||"",a),new Py(null);const h=window.open(e||"",a,l);D(h,t,"popup-blocked");try{h.focus()}catch{}return new Py(h)}function ZD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO="__/auth/handler",tO="emulator/auth/handler";function Ld(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jr,eventId:i};if(e instanceof hr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof po){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${nO(t)}?${lo(a).slice(1)}`}function nO({config:t}){return t.emulator?um(t,tO):`https://${t.authDomain}/${eO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="webStorageSupport";class rO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qi,this._completeRedirectFn=Ll,this._overrideRedirectResult=_m}async _openPopup(e,n,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Ld(e,n,r,Sa(),i);return JD(e,o,ic())}async _openRedirect(e,n,r,i){return await this._originValidation(e),FN(Ld(e,n,r,Sa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KD(e),r=new cI(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hh,{type:Hh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hh];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pb()||lm()||fo()}}const iO=rO;class sO{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Pn("unexpected MultiFactorSessionType")}}}class bm extends sO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new bm(e)}_finalizeEnroll(e,n,r){return xN(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return WN(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class hI{constructor(){}static assertion(e){return bm._fromCredential(e)}}hI.FACTOR_ID="phone";var Ly="@firebase/auth",My="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cO(t){nr(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{D(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lb(t)},l=new DR(a,c,u);return lR(l,n),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nr(new an("auth-internal",e=>{const n=lt(e.getProvider("auth").getImmediate());return(r=>new oO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Ly,My,aO(t)),on(Ly,My,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO=5*60;RC("authIdTokenMaxAge");cO("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=2e3;async function hO(t,e,n){var r;const{BuildInfo:i}=ji();In(e.sessionId,"AuthEvent did not contain a session ID");const s=await gO(e.sessionId),o={};return fo()?o.ibi=i.packageName:rc()?o.apn=i.packageName:bt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Ld(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function dO(t){const{BuildInfo:e}=ji(),n={};fo()?n.iosBundleId=e.packageName:rc()?n.androidPackageName=e.packageName:bt(t,"operation-not-supported-in-this-environment"),await lI(t,n)}function fO(t){const{cordova:e}=ji();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,AR()?"_blank":"_system","location=yes"),n(i)})})}async function mO(t,e,n){const{cordova:r}=ji();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(vt(t,"redirect-cancelled-by-user"))},lO))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),rc()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function pO(t){var e,n,r,i,s,o,a,c,u,l;const h=ji();D(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),D(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),D(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function gO(t){const e=yO(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function yO(t){if(In(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=20;class wO extends cI{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function _O(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:EO(),postBody:null,tenantId:t.tenantId,error:vt(t,"no-auth-event")}}function bO(t,e){return Md()._set(Fd(t),e)}async function Fy(t){const e=await Md()._get(Fd(t));return e&&await Md()._remove(Fd(t)),e}function IO(t,e){var n,r;const i=SO(e);if(i.includes("/__/auth/callback")){const s=mu(i),o=s.firebaseError?TO(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?vt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function EO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<vO;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Md(){return Xt(pm)}function Fd(t){return Mi("authEvent",t.config.apiKey,t.name)}function TO(t){try{return JSON.parse(t)}catch{return null}}function SO(t){const e=mu(t),n=e.link?decodeURIComponent(e.link):void 0,r=mu(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return mu(i).link||i||r||n||t}function mu(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ts(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=500;class AO{constructor(){this._redirectPersistence=qi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ll,this._overrideRedirectResult=_m}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new wO(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){bt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){pO(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),ED(),await this._originValidation(e);const o=_O(e,r,i);await bO(e,o);const a=await hO(e,o,n),c=await fO(a);return mO(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dO(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ji(),o=setTimeout(async()=>{await Fy(e),n.onEvent(Uy())},kO),a=async l=>{clearTimeout(o);const h=await Fy(e);let d=null;h&&(l==null?void 0:l.url)&&(d=IO(h,l.url)),n.onEvent(d||Uy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;ji().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const CO=AO;function Uy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:vt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(t,e){lt(t)._logFramework(e)}var RO="@firebase/auth-compat",NO="0.3.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=1e3;function ra(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function OO(){return ra()==="http:"||ra()==="https:"}function dI(t=qe()){return!!((ra()==="file:"||ra()==="ionic:"||ra()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function PO(){return nm()||El()}function LO(){return cb()&&(document==null?void 0:document.documentMode)===11}function MO(t=qe()){return/Edge\/\d+/.test(t)}function FO(t=qe()){return LO()||MO(t)}function fI(){try{const t=self.localStorage,e=ic();if(t)return t.setItem(e,"1"),t.removeItem(e),FO()?Ia():!0}catch{return Im()&&Ia()}return!1}function Im(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Kh(){return(OO()||ab()||dI())&&!PO()&&fI()&&!Im()}function mI(){return dI()&&typeof document<"u"}async function UO(){return mI()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},DO);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function VO(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={LOCAL:"local",NONE:"none",SESSION:"session"},Do=D,pI="persistence";function BO(t,e){if(Do(Object.values(Yt).includes(e),t,"invalid-persistence-type"),nm()){Do(e!==Yt.SESSION,t,"unsupported-persistence-type");return}if(El()){Do(e===Yt.NONE,t,"unsupported-persistence-type");return}if(Im()){Do(e===Yt.NONE||e===Yt.LOCAL&&Ia(),t,"unsupported-persistence-type");return}Do(e===Yt.NONE||fI(),t,"unsupported-persistence-type")}async function Ud(t){await t._initializationPromise;const e=gI(),n=Mi(pI,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function $O(t,e){const n=gI();if(!n)return[];const r=Mi(pI,t,e);switch(n.getItem(r)){case Yt.NONE:return[zs];case Yt.LOCAL:return[xa,qi];case Yt.SESSION:return[qi];default:return[]}}function gI(){var t;try{return((t=VO())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=D;class Nr{constructor(){this.browserResolver=Xt(iO),this.cordovaResolver=Xt(CO),this.underlyingResolver=null,this._redirectPersistence=qi,this._completeRedirectFn=Ll,this._overrideRedirectResult=_m}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return mI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return qO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await UO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t){return t.unwrap()}function jO(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(t){return vI(t)}function HO(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new KO(t,AN(t,e))}else if(r){const i=vI(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function vI(t){const{_tokenResponse:e}=t instanceof At?t.customData:t;if(!e)return null;if(!(t instanceof At)&&"temporaryProof"in e&&"phoneNumber"in e)return _n.credentialFromResult(t);const n=e.providerId;if(!n||n===No.PASSWORD)return null;let r;switch(n){case No.GOOGLE:r=xn;break;case No.FACEBOOK:r=Cn;break;case No.GITHUB:r=Rn;break;case No.TWITTER:r=Nn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Hs._create(n,a):jn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Ps(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof At?r.credentialFromError(t):r.credentialFromResult(t)}function Bt(t,e){return e.catch(n=>{throw n instanceof At&&HO(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:zO(n),additionalUserInfo:kN(n),user:Qn.getOrCreate(i)}})}async function Vd(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Bt(t,n.confirm(r))}}class KO{constructor(e,n){this.resolver=n,this.auth=jO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Bt(yI(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this._delegate=e,this.multiFactor=NN(e)}static getOrCreate(e){return Qn.USER_MAP.has(e)||Qn.USER_MAP.set(e,new Qn(e)),Qn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Bt(this.auth,zb(this._delegate,e))}async linkWithPhoneNumber(e,n){return Vd(this.auth,lD(this._delegate,e,n))}async linkWithPopup(e){return Bt(this.auth,wD(this._delegate,e,Nr))}async linkWithRedirect(e){return await Ud(lt(this.auth)),CD(this._delegate,e,Nr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Bt(this.auth,Hb(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Vd(this.auth,hD(this._delegate,e,n))}reauthenticateWithPopup(e){return Bt(this.auth,vD(this._delegate,e,Nr))}async reauthenticateWithRedirect(e){return await Ud(lt(this.auth)),kD(this._delegate,e,Nr)}sendEmailVerification(e){return pN(this._delegate,e)}async unlink(e){return await tN(this._delegate,e),this}updateEmail(e){return wN(this._delegate,e)}updatePassword(e){return _N(this._delegate,e)}updatePhoneNumber(e){return dD(this._delegate,e)}updateProfile(e){return vN(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return gN(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Qn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=D;class Bd{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Oo(r,"invalid-api-key",{appName:e.name}),Oo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Nr:void 0;this._delegate=n.initialize({options:{persistence:WO(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(cR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Qn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){OR(this._delegate,e,n)}applyActionCode(e){return oN(this._delegate,e)}checkActionCode(e){return Kb(this._delegate,e)}confirmPasswordReset(e,n){return sN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Bt(this._delegate,cN(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return mN(this._delegate,e)}isSignInWithEmailLink(e){return hN(this._delegate,e)}async getRedirectResult(){Oo(Kh(),this._delegate,"operation-not-supported-in-this-environment");const e=await RD(this._delegate,Nr);return e?Bt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){xO(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Vy(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Vy(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return lN(this._delegate,e,n)}sendPasswordResetEmail(e,n){return iN(this._delegate,e,n||void 0)}async setPersistence(e){BO(this._delegate,e);let n;switch(e){case Yt.SESSION:n=qi;break;case Yt.LOCAL:n=await Xt(xa)._isAvailable()?xa:pm;break;case Yt.NONE:n=zs;break;default:return bt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Bt(this._delegate,eN(this._delegate))}signInWithCredential(e){return Bt(this._delegate,xl(this._delegate,e))}signInWithCustomToken(e){return Bt(this._delegate,rN(this._delegate,e))}signInWithEmailAndPassword(e,n){return Bt(this._delegate,uN(this._delegate,e,n))}signInWithEmailLink(e,n){return Bt(this._delegate,dN(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Vd(this._delegate,uD(this._delegate,e,n))}async signInWithPopup(e){return Oo(Kh(),this._delegate,"operation-not-supported-in-this-environment"),Bt(this._delegate,yD(this._delegate,e,Nr))}async signInWithRedirect(e){return Oo(Kh(),this._delegate,"operation-not-supported-in-this-environment"),await Ud(this._delegate),TD(this._delegate,e,Nr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return aN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Bd.Persistence=Yt;function Vy(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Qn.getOrCreate(o)),error:e,complete:n}}function WO(t,e){const n=$O(t,e);if(typeof self<"u"&&!n.includes(xa)&&n.push(xa),typeof window<"u")for(const r of[pm,qi])n.includes(r)||n.push(r);return n.includes(zs)||n.push(zs),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.providerId="phone",this._delegate=new _n(yI(is.auth()))}static credential(e,n){return _n.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Em.PHONE_SIGN_IN_METHOD=_n.PHONE_SIGN_IN_METHOD;Em.PROVIDER_ID=_n.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=D;class YO{constructor(e,n,r=is.app()){var i;GO((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new aD(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO="auth-compat";function XO(t){t.INTERNAL.registerComponent(new an(QO,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Bd(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ps.EMAIL_SIGNIN,PASSWORD_RESET:ps.PASSWORD_RESET,RECOVER_EMAIL:ps.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ps.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ps.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ps.VERIFY_EMAIL}},EmailAuthProvider:Zr,FacebookAuthProvider:Cn,GithubAuthProvider:Rn,GoogleAuthProvider:xn,OAuthProvider:Ps,SAMLAuthProvider:Nu,PhoneAuthProvider:Em,PhoneMultiFactorGenerator:hI,RecaptchaVerifier:YO,TwitterAuthProvider:Nn,Auth:Bd,AuthCredential:mo,Error:At}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(RO,NO)}XO(is);var JO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Y,Tm=Tm||{},ie=JO||self;function Lu(){}function Ml(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function oc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ZO(t){return Object.prototype.hasOwnProperty.call(t,Wh)&&t[Wh]||(t[Wh]=++eP)}var Wh="closure_uid_"+(1e9*Math.random()>>>0),eP=0;function tP(t,e,n){return t.call.apply(t.bind,arguments)}function nP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ct=tP:Ct=nP,Ct.apply(null,arguments)}function Vc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Et(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ei(){this.s=this.s,this.o=this.o}var rP=0;ei.prototype.s=!1;ei.prototype.na=function(){!this.s&&(this.s=!0,this.M(),rP!=0)&&ZO(this)};ei.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Sm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function By(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ml(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var iP=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",Lu,e),ie.removeEventListener("test",Lu,e)}catch{}return t}();function Mu(t){return/^[\s\xa0]*$/.test(t)}var $y=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Gh(t,e){return t<e?-1:t>e?1:0}function Fl(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Dn(t){return Fl().indexOf(t)!=-1}function km(t){return km[" "](t),t}km[" "]=Lu;function sP(t){var e=cP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var oP=Dn("Opera"),Ks=Dn("Trident")||Dn("MSIE"),_I=Dn("Edge"),$d=_I||Ks,bI=Dn("Gecko")&&!(Fl().toLowerCase().indexOf("webkit")!=-1&&!Dn("Edge"))&&!(Dn("Trident")||Dn("MSIE"))&&!Dn("Edge"),aP=Fl().toLowerCase().indexOf("webkit")!=-1&&!Dn("Edge");function II(){var t=ie.document;return t?t.documentMode:void 0}var Fu;e:{var Yh="",Qh=function(){var t=Fl();if(bI)return/rv:([^\);]+)(\)|;)/.exec(t);if(_I)return/Edge\/([\d\.]+)/.exec(t);if(Ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aP)return/WebKit\/(\S+)/.exec(t);if(oP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qh&&(Yh=Qh?Qh[1]:""),Ks){var Xh=II();if(Xh!=null&&Xh>parseFloat(Yh)){Fu=String(Xh);break e}}Fu=Yh}var cP={};function uP(){return sP(function(){let t=0;const e=$y(String(Fu)).split("."),n=$y("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Gh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Gh(i[2].length==0,s[2].length==0)||Gh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var qd;if(ie.document&&Ks){var qy=II();qd=qy||parseInt(Fu,10)||void 0}else qd=void 0;var lP=qd;function Ra(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bI){e:{try{km(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ra.X.h.call(this)}}Et(Ra,xt);var hP={2:"touch",3:"pen",4:"mouse"};Ra.prototype.h=function(){Ra.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ac="closure_listenable_"+(1e6*Math.random()|0),dP=0;function fP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++dP,this.ba=this.ea=!1}function Ul(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Am(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function EI(t){const e={};for(const n in t)e[n]=t[n];return e}const jy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function TI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<jy.length;s++)n=jy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Vl(t){this.src=t,this.g={},this.h=0}Vl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=zd(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new fP(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function jd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=wI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ul(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Cm="closure_lm_"+(1e6*Math.random()|0),Jh={};function SI(t,e,n,r,i){if(r&&r.once)return AI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)SI(t,e[s],n,r,i);return null}return n=Nm(n),t&&t[ac]?t.N(e,n,oc(r)?!!r.capture:!!r,i):kI(t,e,n,!1,r,i)}function kI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=oc(i)?!!i.capture:!!i,a=Rm(t);if(a||(t[Cm]=a=new Vl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=mP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)iP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(xI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mP(){function t(n){return e.call(t.src,t.listener,n)}const e=pP;return t}function AI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)AI(t,e[s],n,r,i);return null}return n=Nm(n),t&&t[ac]?t.O(e,n,oc(r)?!!r.capture:!!r,i):kI(t,e,n,!0,r,i)}function CI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)CI(t,e[s],n,r,i);else r=oc(r)?!!r.capture:!!r,n=Nm(n),t&&t[ac]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=zd(s,n,r,i),-1<n&&(Ul(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Rm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zd(e,n,r,i)),(n=-1<t?e[t]:null)&&xm(n))}function xm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ac])jd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(xI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Rm(e))?(jd(n,t),n.h==0&&(n.src=null,e[Cm]=null)):Ul(t)}}}function xI(t){return t in Jh?Jh[t]:Jh[t]="on"+t}function pP(t,e){if(t.ba)t=!0;else{e=new Ra(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&xm(t),t=n.call(r,e)}return t}function Rm(t){return t=t[Cm],t instanceof Vl?t:null}var Zh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nm(t){return typeof t=="function"?t:(t[Zh]||(t[Zh]=function(e){return t.handleEvent(e)}),t[Zh])}function ht(){ei.call(this),this.i=new Vl(this),this.P=this,this.I=null}Et(ht,ei);ht.prototype[ac]=!0;ht.prototype.removeEventListener=function(t,e,n,r){CI(this,t,e,n,r)};function wt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var i=e;e=new xt(r,t),TI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Bc(o,r,!0,e)&&i}if(o=e.g=t,i=Bc(o,r,!0,e)&&i,i=Bc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Bc(o,r,!1,e)&&i}ht.prototype.M=function(){if(ht.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ul(n[r]);delete t.g[e],t.h--}}this.I=null};ht.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ht.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Bc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&jd(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Dm=ie.JSON.stringify;function gP(){var t=DI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yP{constructor(){this.h=this.g=null}add(e,n){const r=RI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var RI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vP,t=>t.reset());class vP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wP(t){ie.setTimeout(()=>{throw t},0)}function NI(t,e){Hd||_P(),Kd||(Hd(),Kd=!0),DI.add(t,e)}var Hd;function _P(){var t=ie.Promise.resolve(void 0);Hd=function(){t.then(bP)}}var Kd=!1,DI=new yP;function bP(){for(var t;t=gP();){try{t.h.call(t.g)}catch(n){wP(n)}var e=RI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Kd=!1}function Bl(t,e){ht.call(this),this.h=t||1,this.g=e||ie,this.j=Ct(this.lb,this),this.l=Date.now()}Et(Bl,ht);Y=Bl.prototype;Y.ca=!1;Y.R=null;Y.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),wt(this,"tick"),this.ca&&(Om(this),this.start()))}};Y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Om(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Y.M=function(){Bl.X.M.call(this),Om(this),delete this.g};function Pm(t,e,n){if(typeof t=="function")n&&(t=Ct(t,n));else if(t&&typeof t.handleEvent=="function")t=Ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function OI(t){t.g=Pm(()=>{t.g=null,t.i&&(t.i=!1,OI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class IP extends ei{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:OI(this)}M(){super.M(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Na(t){ei.call(this),this.h=t,this.g={}}Et(Na,ei);var zy=[];function PI(t,e,n,r){Array.isArray(n)||(n&&(zy[0]=n.toString()),n=zy);for(var i=0;i<n.length;i++){var s=SI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function LI(t){Am(t.g,function(e,n){this.g.hasOwnProperty(n)&&xm(e)},t),t.g={}}Na.prototype.M=function(){Na.X.M.call(this),LI(this)};Na.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $l(){this.g=!0}$l.prototype.Aa=function(){this.g=!1};function EP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function TP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ss(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+kP(t,n)+(r?" "+r:"")})}function SP(t,e){t.info(function(){return"TIMEOUT: "+e})}$l.prototype.info=function(){};function kP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Dm(n)}catch{return e}}var os={},Hy=null;function ql(){return Hy=Hy||new ht}os.Pa="serverreachability";function MI(t){xt.call(this,os.Pa,t)}Et(MI,xt);function Da(t){const e=ql();wt(e,new MI(e))}os.STAT_EVENT="statevent";function FI(t,e){xt.call(this,os.STAT_EVENT,t),this.stat=e}Et(FI,xt);function Lt(t){const e=ql();wt(e,new FI(e,t))}os.Qa="timingevent";function UI(t,e){xt.call(this,os.Qa,t),this.size=e}Et(UI,xt);function cc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var jl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},VI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Lm(){}Lm.prototype.h=null;function Ky(t){return t.h||(t.h=t.i())}function BI(){}var uc={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Mm(){xt.call(this,"d")}Et(Mm,xt);function Fm(){xt.call(this,"c")}Et(Fm,xt);var Wd;function zl(){}Et(zl,Lm);zl.prototype.g=function(){return new XMLHttpRequest};zl.prototype.i=function(){return{}};Wd=new zl;function lc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Na(this),this.O=AP,t=$d?125:void 0,this.T=new Bl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new $I}function $I(){this.i=null,this.g="",this.h=!1}var AP=45e3,Gd={},Uu={};Y=lc.prototype;Y.setTimeout=function(t){this.O=t};function Yd(t,e,n){t.K=1,t.v=Kl(ir(e)),t.s=n,t.P=!0,qI(t,null)}function qI(t,e){t.F=Date.now(),hc(t),t.A=ir(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),QI(n.i,"t",r),t.C=0,n=t.l.H,t.h=new $I,t.g=y0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new IP(Ct(t.La,t,t.g),t.N)),PI(t.S,t.g,"readystatechange",t.ib),e=t.H?EI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Da(),EP(t.j,t.u,t.A,t.m,t.U,t.s)}Y.ib=function(t){t=t.target;const e=this.L;e&&Xn(t)==3?e.l():this.La(t)};Y.La=function(t){try{if(t==this.g)e:{const l=Xn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||$d||this.g&&(this.h.h||this.g.fa()||Qy(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Da(3):Da(2)),Hl(this);var n=this.g.aa();this.Y=n;t:if(jI(this)){var r=Qy(this.g);t="";var i=r.length,s=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ai(this),ia(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,TP(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mu(a)){var u=a;break t}}u=null}if(n=u)Ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Qd(this,n);else{this.i=!1,this.o=3,Lt(12),Ai(this),ia(this);break e}}this.P?(zI(this,l,o),$d&&this.i&&l==3&&(PI(this.S,this.T,"tick",this.hb),this.T.start())):(Ss(this.j,this.m,o,null),Qd(this,o)),l==4&&Ai(this),this.i&&!this.I&&(l==4?f0(this.l,this):(this.i=!1,hc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Lt(12)):(this.o=0,Lt(13)),Ai(this),ia(this)}}}catch{}finally{}};function jI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function zI(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=CP(t,n),i==Uu){e==4&&(t.o=4,Lt(14),r=!1),Ss(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Gd){t.o=4,Lt(15),Ss(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ss(t.j,t.m,i,null),Qd(t,i);jI(t)&&i!=Uu&&i!=Gd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),zm(e),e.K=!0,Lt(11))):(Ss(t.j,t.m,n,"[Invalid Chunked Response]"),Ai(t),ia(t))}Y.hb=function(){if(this.g){var t=Xn(this.g),e=this.g.fa();this.C<e.length&&(Hl(this),zI(this,t,e),this.i&&t!=4&&hc(this))}};function CP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Uu:(n=Number(e.substring(n,r)),isNaN(n)?Gd:(r+=1,r+n>e.length?Uu:(e=e.substr(r,n),t.C=r+n,e)))}Y.cancel=function(){this.I=!0,Ai(this)};function hc(t){t.V=Date.now()+t.O,HI(t,t.O)}function HI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=cc(Ct(t.gb,t),e)}function Hl(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}Y.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(SP(this.j,this.A),this.K!=2&&(Da(),Lt(17)),Ai(this),this.o=2,ia(this)):HI(this,this.V-t)};function ia(t){t.l.G==0||t.I||f0(t.l,t)}function Ai(t){Hl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Om(t.T),LI(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Qd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Xd(n.h,t))){if(!t.J&&Xd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)$u(n),Yl(n);else break e;jm(n),Lt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=cc(Ct(n.cb,n),6e3));if(1>=ZI(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ci(n,11)}else if((t.J||n.g==t)&&$u(n),!Mu(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Um(s,s.h),s.h=null))}if(r.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,Me(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=g0(r,r.H?r.ka:null,r.V),o.J){e0(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Hl(a),hc(a)),r.g=o}else h0(r);0<n.i.length&&Ql(n)}else u[0]!="stop"&&u[0]!="close"||Ci(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ci(n,7):qm(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Da(4)}catch{}}function xP(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ml(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function RP(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ml(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function KI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ml(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=RP(t),r=xP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var WI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ui(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ui){this.h=e!==void 0?e:t.h,Vu(this,t.j),this.s=t.s,this.g=t.g,Bu(this,t.m),this.l=t.l,e=t.i;var n=new Oa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wy(this,n),this.o=t.o}else t&&(n=String(t).match(WI))?(this.h=!!e,Vu(this,n[1]||"",!0),this.s=Ho(n[2]||""),this.g=Ho(n[3]||"",!0),Bu(this,n[4]),this.l=Ho(n[5]||"",!0),Wy(this,n[6]||"",!0),this.o=Ho(n[7]||"")):(this.h=!!e,this.i=new Oa(null,this.h))}Ui.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ko(e,Gy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ko(e,Gy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ko(n,n.charAt(0)=="/"?PP:OP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ko(n,MP)),t.join("")};function ir(t){return new Ui(t)}function Vu(t,e,n){t.j=n?Ho(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wy(t,e,n){e instanceof Oa?(t.i=e,FP(t.i,t.h)):(n||(e=Ko(e,LP)),t.i=new Oa(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function Kl(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ho(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ko(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,DP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function DP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gy=/[#\/\?@]/g,OP=/[#\?:]/g,PP=/[#\?]/g,LP=/[#\?@]/g,MP=/#/g;function Oa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ti(t){t.g||(t.g=new Map,t.h=0,t.i&&NP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Y=Oa.prototype;Y.add=function(t,e){ti(this),this.i=null,t=go(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function GI(t,e){ti(t),e=go(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function YI(t,e){return ti(t),e=go(t,e),t.g.has(e)}Y.forEach=function(t,e){ti(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};Y.oa=function(){ti(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};Y.W=function(t){ti(this);let e=[];if(typeof t=="string")YI(this,t)&&(e=e.concat(this.g.get(go(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Y.set=function(t,e){return ti(this),this.i=null,t=go(this,t),YI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Y.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function QI(t,e,n){GI(t,e),0<n.length&&(t.i=null,t.g.set(go(t,e),Sm(n)),t.h+=n.length)}Y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function go(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function FP(t,e){e&&!t.j&&(ti(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(GI(this,r),QI(this,i,n))},t)),t.j=e}var UP=class{constructor(t,e){this.h=t,this.g=e}};function XI(t){this.l=t||VP,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ga&&ie.g.Ga()&&ie.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var VP=10;function JI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ZI(t){return t.h?1:t.g?t.g.size:0}function Xd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Um(t,e){t.g?t.g.add(e):t.h=e}function e0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}XI.prototype.cancel=function(){if(this.i=t0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function t0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Sm(t.i)}function Vm(){}Vm.prototype.stringify=function(t){return ie.JSON.stringify(t,void 0)};Vm.prototype.parse=function(t){return ie.JSON.parse(t,void 0)};function BP(){this.g=new Vm}function $P(t,e,n){const r=n||"";try{KI(t,function(i,s){let o=i;oc(i)&&(o=Dm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function qP(t,e){const n=new $l;if(ie.Image){const r=new Image;r.onload=Vc($c,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Vc($c,n,r,"TestLoadImage: error",!1,e),r.onabort=Vc($c,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Vc($c,n,r,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function $c(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function dc(t){this.l=t.ac||null,this.j=t.jb||!1}Et(dc,Lm);dc.prototype.g=function(){return new Wl(this.l,this.j)};dc.prototype.i=function(t){return function(){return t}}({});function Wl(t,e){ht.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Bm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Et(Wl,ht);var Bm=0;Y=Wl.prototype;Y.open=function(t,e){if(this.readyState!=Bm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pa(this)};Y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ie).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fc(this)),this.readyState=Bm};Y.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pa(this)),this.g&&(this.readyState=3,Pa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;n0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function n0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Y.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fc(this):Pa(this),this.readyState==3&&n0(this)}};Y.Va=function(t){this.g&&(this.response=this.responseText=t,fc(this))};Y.Ua=function(t){this.g&&(this.response=t,fc(this))};Y.ga=function(){this.g&&fc(this)};function fc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pa(t)}Y.setRequestHeader=function(t,e){this.v.append(t,e)};Y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Pa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var jP=ie.JSON.parse;function Ke(t){ht.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=r0,this.K=this.L=!1}Et(Ke,ht);var r0="",zP=/^https?$/i,HP=["POST","PUT"];Y=Ke.prototype;Y.Ka=function(t){this.L=t};Y.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wd.g(),this.C=this.u?Ky(this.u):Ky(Wd),this.g.onreadystatechange=Ct(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Yy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=wI(HP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{o0(this),0<this.B&&((this.K=KP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ct(this.qa,this)):this.A=Pm(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Yy(this,s)}};function KP(t){return Ks&&uP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Y.qa=function(){typeof Tm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function Yy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,i0(t),Gl(t)}function i0(t){t.D||(t.D=!0,wt(t,"complete"),wt(t,"error"))}Y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),Gl(this))};Y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gl(this,!0)),Ke.X.M.call(this)};Y.Ha=function(){this.s||(this.F||this.v||this.l?s0(this):this.fb())};Y.fb=function(){s0(this)};function s0(t){if(t.h&&typeof Tm<"u"&&(!t.C[1]||Xn(t)!=4||t.aa()!=2)){if(t.v&&Xn(t)==4)Pm(t.Ha,0,t);else if(wt(t,"readystatechange"),Xn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(WI)[1]||null;if(!i&&ie.self&&ie.self.location){var s=ie.self.location.protocol;i=s.substr(0,s.length-1)}r=!zP.test(i?i.toLowerCase():"")}n=r}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var o=2<Xn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",i0(t)}}finally{Gl(t)}}}}function Gl(t,e){if(t.g){o0(t);const n=t.g,r=t.C[0]?Lu:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=r}catch{}}}function o0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}function Xn(t){return t.g?t.g.readyState:0}Y.aa=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}};Y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Y.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),jP(e)}};function Qy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case r0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Y.Ea=function(){return this.m};Y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function a0(t){let e="";return Am(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function $m(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=a0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Po(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function c0(t){this.Ca=0,this.i=[],this.j=new $l,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Po("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Po("baseRetryDelayMs",5e3,t),this.bb=Po("retryDelaySeedMs",1e4,t),this.$a=Po("forwardChannelMaxRetries",2,t),this.ta=Po("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new XI(t&&t.concurrentRequestLimit),this.Fa=new BP,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Y=c0.prototype;Y.ma=8;Y.G=1;function qm(t){if(u0(t),t.G==3){var e=t.U++,n=ir(t.F);Me(n,"SID",t.I),Me(n,"RID",e),Me(n,"TYPE","terminate"),mc(t,n),e=new lc(t,t.j,e,void 0),e.K=2,e.v=Kl(ir(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon&&(n=ie.navigator.sendBeacon(e.v.toString(),"")),!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=y0(e.l,null),e.g.da(e.v)),e.F=Date.now(),hc(e)}p0(t)}function Yl(t){t.g&&(zm(t),t.g.cancel(),t.g=null)}function u0(t){Yl(t),t.u&&(ie.clearTimeout(t.u),t.u=null),$u(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function Ql(t){JI(t.h)||t.m||(t.m=!0,NI(t.Ja,t),t.C=0)}function WP(t,e){return ZI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=cc(Ct(t.Ja,t,e),m0(t,t.C)),t.C++,!0)}Y.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new lc(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=EI(s),TI(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=l0(this,i,e),n=ir(this.F),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),mc(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(a0(s)))+"&"+e:this.o&&$m(n,this.o,s)),Um(this.h,i),this.Ya&&Me(n,"TYPE","init"),this.O?(Me(n,"$req",e),Me(n,"SID","null"),i.Z=!0,Yd(i,n,null)):Yd(i,n,e),this.G=2}}else this.G==3&&(t?Xy(this,t):this.i.length==0||JI(this.h)||Xy(this))};function Xy(t,e){var n;e?n=e.m:n=t.U++;const r=ir(t.F);Me(r,"SID",t.I),Me(r,"RID",n),Me(r,"AID",t.T),mc(t,r),t.o&&t.s&&$m(r,t.o,t.s),n=new lc(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=l0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Um(t.h,n),Yd(n,r,e)}function mc(t,e){t.ia&&Am(t.ia,function(n,r){Me(e,r,n)}),t.l&&KI({},function(n,r){Me(e,r,n)})}function l0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ct(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{$P(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function h0(t){t.g||t.u||(t.Z=1,NI(t.Ia,t),t.A=0)}function jm(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=cc(Ct(t.Ia,t),m0(t,t.A)),t.A++,!0)}Y.Ia=function(){if(this.u=null,d0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=cc(Ct(this.eb,this),t)}};Y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Lt(10),Yl(this),d0(this))};function zm(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function d0(t){t.g=new lc(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ir(t.sa);Me(e,"RID","rpc"),Me(e,"SID",t.I),Me(e,"CI",t.L?"0":"1"),Me(e,"AID",t.T),Me(e,"TYPE","xmlhttp"),mc(t,e),t.o&&t.s&&$m(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Kl(ir(e)),n.s=null,n.P=!0,qI(n,t)}Y.cb=function(){this.v!=null&&(this.v=null,Yl(this),jm(this),Lt(19))};function $u(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function f0(t,e){var n=null;if(t.g==e){$u(t),zm(t),t.g=null;var r=2}else if(Xd(t.h,e))n=e.D,e0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ql(),wt(r,new UI(r,n)),Ql(t)}else h0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&WP(t,e)||r==2&&jm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ci(t,5);break;case 4:Ci(t,10);break;case 3:Ci(t,6);break;default:Ci(t,2)}}}function m0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ci(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ct(t.kb,t);n||(n=new Ui("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||Vu(n,"https"),Kl(n)),qP(n.toString(),r)}else Lt(2);t.G=0,t.l&&t.l.va(e),p0(t),u0(t)}Y.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function p0(t){if(t.G=0,t.la=[],t.l){const e=t0(t.h);(e.length!=0||t.i.length!=0)&&(By(t.la,e),By(t.la,t.i),t.h.i.length=0,Sm(t.i),t.i.length=0),t.l.ua()}}function g0(t,e,n){var r=n instanceof Ui?ir(n):new Ui(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Bu(r,r.m);else{var i=ie.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ui(null,void 0);r&&Vu(s,r),e&&(s.g=e),i&&Bu(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Me(r,n,e),Me(r,"VER",t.ma),mc(t,r),r}function y0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ke(new dc({jb:!0})):new Ke(t.ra),e.Ka(t.H),e}function v0(){}Y=v0.prototype;Y.xa=function(){};Y.wa=function(){};Y.va=function(){};Y.ua=function(){};Y.Ra=function(){};function qu(){if(Ks&&!(10<=Number(lP)))throw Error("Environmental error: no available transport.")}qu.prototype.g=function(t,e){return new Jt(t,e)};function Jt(t,e){ht.call(this),this.g=new c0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Mu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yo(this)}Et(Jt,ht);Jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Lt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=g0(t,null,t.V),Ql(t)};Jt.prototype.close=function(){qm(this.g)};Jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Dm(t),t=n);e.i.push(new UP(e.ab++,t)),e.G==3&&Ql(e)};Jt.prototype.M=function(){this.g.l=null,delete this.j,qm(this.g),delete this.g,Jt.X.M.call(this)};function w0(t){Mm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Et(w0,Mm);function _0(){Fm.call(this),this.status=1}Et(_0,Fm);function yo(t){this.g=t}Et(yo,v0);yo.prototype.xa=function(){wt(this.g,"a")};yo.prototype.wa=function(t){wt(this.g,new w0(t))};yo.prototype.va=function(t){wt(this.g,new _0)};yo.prototype.ua=function(){wt(this.g,"b")};qu.prototype.createWebChannel=qu.prototype.g;Jt.prototype.send=Jt.prototype.u;Jt.prototype.open=Jt.prototype.m;Jt.prototype.close=Jt.prototype.close;jl.NO_ERROR=0;jl.TIMEOUT=8;jl.HTTP_ERROR=6;VI.COMPLETE="complete";BI.EventType=uc;uc.OPEN="a";uc.CLOSE="b";uc.ERROR="c";uc.MESSAGE="d";ht.prototype.listen=ht.prototype.N;Ke.prototype.listenOnce=Ke.prototype.O;Ke.prototype.getLastError=Ke.prototype.Oa;Ke.prototype.getLastErrorCode=Ke.prototype.Ea;Ke.prototype.getStatus=Ke.prototype.aa;Ke.prototype.getResponseJson=Ke.prototype.Sa;Ke.prototype.getResponseText=Ke.prototype.fa;Ke.prototype.send=Ke.prototype.da;Ke.prototype.setWithCredentials=Ke.prototype.Ka;var GP=function(){return new qu},YP=function(){return ql()},ed=jl,QP=VI,XP=os,Jy={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},JP=dc,qc=BI,ZP=Ke;const Zy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Tl("@firebase/firestore");function Jd(){return $r.logLevel}function eL(t){$r.setLogLevel(t)}function x(t,...e){if($r.logLevel<=ye.DEBUG){const n=e.map(Hm);$r.debug(`Firestore (${vo}): ${t}`,...n)}}function Qe(t,...e){if($r.logLevel<=ye.ERROR){const n=e.map(Hm);$r.error(`Firestore (${vo}): ${t}`,...n)}}function Ws(t,...e){if($r.logLevel<=ye.WARN){const n=e.map(Hm);$r.warn(`Firestore (${vo}): ${t}`,...n)}}function Hm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: `+t;throw Qe(e),new Error(e)}function Q(t,e){t||$()}function tL(t,e){t||$()}function U(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends At{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class rL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iL{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ut,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ut)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new b0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new ct(e)}}class sL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Q(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class oL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new sL(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cL{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string"),this.A=n.token,new aL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=uL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Gs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function E0(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ue(0,0))}static max(){return new J(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return La.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof La?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends La{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const lL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends La{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return lL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new A(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(me.fromString(e))}static fromName(e){return new L(me.fromString(e).popFirst(5))}static empty(){return new L(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new me(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Zd(t){return t.fields.find(e=>e.kind===2)}function gi(t){return t.fields.filter(e=>e.kind!==2)}T0.UNKNOWN_ID=-1;class hL{constructor(e,n){this.fieldPath=e,this.kind=n}}class ju{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new ju(0,Zt.min())}}function S0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Zt(i,L.empty(),e)}function k0(t){return new Zt(t.readTime,t.key,-1)}class Zt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zt(J.min(),L.empty(),-1)}static max(){return new Zt(J.max(),L.empty(),-1)}}function Km(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class C0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==A0)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new ut,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new sa(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=Wm(r.target.error);this.P.reject(new sa(e,i))}}static open(e,n,r,i){try{return new Xl(n,e.transaction(i,r))}catch(s){throw new sa(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new fL(n)}}class gn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,gn.D(qe())===12.2&&Qe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),_i(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Ia())return!1;if(gn.N())return!0;const e=qe(),n=gn.D(e),r=0<n&&n<10,i=gn.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new sa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new A(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new A(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new sa(e,o))},i.onupgradeneeded=s=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Xl.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),w.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class dL{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return _i(this.q.delete())}}class sa extends A{constructor(e,n){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ri(t){return t.name==="IndexedDbTransactionError"}class fL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(x("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),_i(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),_i(this.store.add(e))}get(e){return _i(this.store.get(e)).next(n=>(n===void 0&&(n=null),x("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),_i(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),_i(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,n){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=Wm(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new dL(a),u=n(a.primaryKey,a.value,c);if(u instanceof w){const l=u.catch(h=>(c.done(),w.reject(h)));r.push(l)}c.isDone?i():c.G===null?a.continue():a.continue(c.G)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function _i(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Wm(r.target.error);n(i)}})}let ev=!1;function Wm(t){const e=gn.D(qe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ev||(ev=!0,setTimeout(()=>{throw r},0)),r}}return t}class mL{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){x("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{x("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){ri(n)?x("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await ni(n)}await this.nt(6e4)})}}class pL{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(x("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=k0(s);Km(o,r)>0&&(r=o)}),new Zt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}jt.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function as(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t){return t==null}function Ma(t){return t===0&&1/t==-1/0}function R0(t){return typeof t=="number"&&Number.isInteger(t)&&!Ma(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yL(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new it(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const vL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(Q(!!t),typeof t=="string"){let e=0;const n=vL.exec(t);if(Q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zi(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function N0(t){const e=t.mapValue.fields.__previous_value__;return Gm(e)?N0(e):e}function Fa(t){const e=jr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},pu={nullValue:"NULL_VALUE"};function Hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gm(t)?4:D0(t)?9007199254740991:10:$()}function zn(t,e){if(t===e)return!0;const n=Hi(t);if(n!==Hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fa(t).isEqual(Fa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=jr(r.timestampValue),o=jr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return zi(r.bytesValue).isEqual(zi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ze(r.doubleValue),o=ze(i.doubleValue);return s===o?Ma(s)===Ma(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Gs(t.arrayValue.values||[],e.arrayValue.values||[],zn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(tv(s)!==tv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!zn(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function Ua(t,e){return(t.values||[]).find(n=>zn(n,e))!==void 0}function zr(t,e){if(t===e)return 0;const n=Hi(t),r=Hi(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ze(i.integerValue||i.doubleValue),a=ze(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nv(t.timestampValue,e.timestampValue);case 4:return nv(Fa(t),Fa(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(i,s){const o=zi(i),a=zi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ae(o[c],a[c]);if(u!==0)return u}return ae(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ae(ze(i.latitude),ze(s.latitude));return o!==0?o:ae(ze(i.longitude),ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=zr(o[c],a[c]);if(u)return u}return ae(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Dr.mapValue&&s===Dr.mapValue)return 0;if(i===Dr.mapValue)return 1;if(s===Dr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ae(a[l],u[l]);if(h!==0)return h;const d=zr(o[a[l]],c[u[l]]);if(d!==0)return d}return ae(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function nv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=jr(t),r=jr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Ys(t){return ef(t)}function ef(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=jr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?zi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ef(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ef(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function Ki(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function tf(t){return!!t&&"integerValue"in t}function Va(t){return!!t&&"arrayValue"in t}function rv(t){return!!t&&"nullValue"in t}function iv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gu(t){return!!t&&"mapValue"in t}function oa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return as(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function D0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function wL(t){return"nullValue"in t?pu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ki(qr.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:$()}function _L(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ki(qr.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Dr:$()}function sv(t,e){const n=zr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function ov(t,e){const n=zr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){this.position=e,this.inclusive=n}}function av(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=zr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{}class de extends O0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bL(e,n,r):n==="array-contains"?new TL(e,r):n==="in"?new V0(e,r):n==="not-in"?new SL(e,r):n==="array-contains-any"?new kL(e,r):new de(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new IL(e,r):new EL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zr(n,this.value)):n!==null&&Hi(this.value)===Hi(n)&&this.matchesComparison(zr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ie extends O0{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ie(e,n)}matches(e){return Qs(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Qs(t){return t.op==="and"}function nf(t){return t.op==="or"}function Ym(t){return P0(t)&&Qs(t)}function P0(t){for(const e of t.filters)if(e instanceof Ie)return!1;return!0}function rf(t){if(t instanceof de)return t.field.canonicalString()+t.op.toString()+Ys(t.value);if(Ym(t))return t.filters.map(e=>rf(e)).join(",");{const e=t.filters.map(n=>rf(n)).join(",");return`${t.op}(${e})`}}function L0(t,e){return t instanceof de?function(n,r){return r instanceof de&&n.op===r.op&&n.field.isEqual(r.field)&&zn(n.value,r.value)}(t,e):t instanceof Ie?function(n,r){return r instanceof Ie&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&L0(s,r.filters[o]),!0):!1}(t,e):void $()}function M0(t,e){const n=t.filters.concat(e);return Ie.create(n,t.op)}function F0(t){return t instanceof de?function(e){return`${e.field.canonicalString()} ${e.op} ${Ys(e.value)}`}(t):t instanceof Ie?function(e){return e.op.toString()+" {"+e.getFilters().map(F0).join(" ,")+"}"}(t):"Filter"}class bL extends de{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class IL extends de{constructor(e,n){super(e,"in",n),this.keys=U0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class EL extends de{constructor(e,n){super(e,"not-in",n),this.keys=U0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function U0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class TL extends de{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Va(n)&&Ua(n.arrayValue,this.value)}}class V0 extends de{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ua(this.value.arrayValue,n)}}class SL extends de{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ua(this.value.arrayValue,n)}}class kL extends de{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Va(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ua(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n="asc"){this.field=e,this.dir=n}}function AL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jc(this.root,e,this.comparator,!1)}getReverseIterator(){return new jc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jc(this.root,e,this.comparator,!0)}}class jc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:gt.RED,this.left=i!=null?i:gt.EMPTY,this.right=s!=null?s:gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new gt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new uv(this.data.getIterator())}getIteratorFrom(e){return new uv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Se(this.comparator);return n.data=e,n}}class uv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function gs(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new zt([])}unionWith(e){let n=new Se(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oa(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=oa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());gu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){as(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(oa(this.value))}}function B0(t){const e=[];return as(t.fields,(n,r)=>{const i=new Xe([n]);if(gu(r)){const s=B0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ne(e,0,J.min(),J.min(),J.min(),yt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ne(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Ne(e,2,n,J.min(),J.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,J.min(),J.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function sf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new CL(t,e,n,r,i,s,o)}function Wi(t){const e=U(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ys(r)).join(",")),e.ft=n}return e.ft}function gc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!L0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cv(t.startAt,e.startAt)&&cv(t.endAt,e.endAt)}function zu(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Hu(t,e){return t.filters.filter(n=>n instanceof de&&n.field.isEqual(e))}function lv(t,e,n){let r=pu,i=!0;for(const s of Hu(t,e)){let o=pu,a=!0;switch(s.op){case"<":case"<=":o=wL(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=pu}sv({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];sv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function hv(t,e,n){let r=Dr,i=!0;for(const s of Hu(t,e)){let o=Dr,a=!0;switch(s.op){case">=":case">":o=_L(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Dr}ov({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];ov({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function $0(t,e,n,r,i,s,o,a){return new dr(t,e,n,r,i,s,o,a)}function wo(t){return new dr(t)}function dv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Jl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Xm(t){return t.collectionGroup!==null}function Vi(t){const e=U(t);if(e.dt===null){e.dt=[];const n=Jl(e),r=Qm(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ms(n)),e.dt.push(new Ms(Xe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ms(Xe.keyField(),s))}}}return e.dt}function Wt(t){const e=U(t);if(!e._t)if(e.limitType==="F")e._t=sf(e.path,e.collectionGroup,Vi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Vi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ms(s.field,o))}const r=e.endAt?new Hr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Hr(e.startAt.position,e.startAt.inclusive):null;e._t=sf(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function of(t,e){e.getFirstInequalityField(),Jl(t);const n=t.filters.concat([e]);return new dr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ku(t,e,n){return new dr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yc(t,e){return gc(Wt(t),Wt(e))&&t.limitType===e.limitType}function q0(t){return`${Wi(Wt(t))}|lt:${t.limitType}`}function af(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>F0(r)).join(", ")}]`),pc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ys(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ys(r)).join(",")),`Target(${n})`}(Wt(t))}; limitType=${t.limitType})`}function vc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Vi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=av(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Vi(n),r)||n.endAt&&!function(i,s,o){const a=av(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Vi(n),r))}(t,e)}function j0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function z0(t){return(e,n)=>{let r=!1;for(const i of Vi(t)){const s=xL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function xL(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?zr(a,c):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ma(e)?"-0":e}}function K0(t){return{integerValue:""+t}}function W0(t,e){return R0(e)?K0(e):H0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this._=void 0}}function RL(t,e,n){return t instanceof Xs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Gi?Y0(t,e):t instanceof Yi?Q0(t,e):function(r,i){const s=G0(r,i),o=fv(s)+fv(r.gt);return tf(s)&&tf(r.gt)?K0(o):H0(r.yt,o)}(t,e)}function NL(t,e,n){return t instanceof Gi?Y0(t,e):t instanceof Yi?Q0(t,e):n}function G0(t,e){return t instanceof Js?tf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Xs extends Zl{}class Gi extends Zl{constructor(e){super(),this.elements=e}}function Y0(t,e){const n=X0(e);for(const r of t.elements)n.some(i=>zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Yi extends Zl{constructor(e){super(),this.elements=e}}function Q0(t,e){let n=X0(e);for(const r of t.elements)n=n.filter(i=>!zn(i,r));return{arrayValue:{values:n}}}class Js extends Zl{constructor(e,n){super(),this.yt=e,this.gt=n}}function fv(t){return ze(t.integerValue||t.doubleValue)}function X0(t){return Va(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n){this.field=e,this.transform=n}}function DL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Gi&&r instanceof Gi||n instanceof Yi&&r instanceof Yi?Gs(n.elements,r.elements,zn):n instanceof Js&&r instanceof Js?zn(n.gt,r.gt):n instanceof Xs&&r instanceof Xs}(t.transform,e.transform)}class OL{constructor(e,n){this.version=e,this.transformResults=n}}class Fe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class eh{}function J0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bo(t.key,Fe.none()):new _o(t.key,t.data,Fe.none());{const n=t.data,r=yt.empty();let i=new Se(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fr(t.key,r,new zt(i.toArray()),Fe.none())}}function PL(t,e,n){t instanceof _o?function(r,i,s){const o=r.value.clone(),a=pv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof fr?function(r,i,s){if(!yu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=pv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Z0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function aa(t,e,n,r){return t instanceof _o?function(i,s,o,a){if(!yu(i.precondition,s))return o;const c=i.value.clone(),u=gv(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof fr?function(i,s,o,a){if(!yu(i.precondition,s))return o;const c=gv(i.fieldTransforms,a,s),u=s.data;return u.setAll(Z0(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(i,s,o){return yu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function LL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=G0(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function mv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Gs(n,r,(i,s)=>DL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _o extends eh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fr extends eh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Z0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function pv(t,e,n){const r=new Map;Q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,NL(o,a,n[i]))}return r}function gv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,RL(s,o,e))}return r}class bo extends eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jm extends eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,fe;function eE(t){switch(t){default:return $();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function tE(t){if(t===void 0)return Qe("GRPC error has no .code"),_.UNKNOWN;switch(t){case et.OK:return _.OK;case et.CANCELLED:return _.CANCELLED;case et.UNKNOWN:return _.UNKNOWN;case et.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case et.INTERNAL:return _.INTERNAL;case et.UNAVAILABLE:return _.UNAVAILABLE;case et.UNAUTHENTICATED:return _.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case et.NOT_FOUND:return _.NOT_FOUND;case et.ALREADY_EXISTS:return _.ALREADY_EXISTS;case et.PERMISSION_DENIED:return _.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case et.ABORTED:return _.ABORTED;case et.OUT_OF_RANGE:return _.OUT_OF_RANGE;case et.UNIMPLEMENTED:return _.UNIMPLEMENTED;case et.DATA_LOSS:return _.DATA_LOSS;default:return $()}}(fe=et||(et={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return x0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=new We(L.comparator);function Ht(){return FL}const nE=new We(L.comparator);function Wo(...t){let e=nE;for(const n of t)e=e.insert(n.key,n);return e}function rE(t){let e=nE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ln(){return ca()}function iE(){return ca()}function ca(){return new ii(t=>t.toString(),(t,e)=>t.isEqual(e))}const UL=new We(L.comparator),VL=new Se(L.comparator);function ce(...t){let e=VL;for(const n of t)e=e.add(n);return e}const BL=new Se(ae);function th(){return BL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,bc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _c(J.min(),i,th(),Ht(),ce())}}class bc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bc(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class sE{constructor(e,n){this.targetId=e,this.Et=n}}class oE{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class yv{constructor(){this.At=0,this.Rt=wv(),this.bt=it.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ce(),n=ce(),r=ce();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new bc(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=wv()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class $L{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Ht(),this.qt=vv(),this.Ut=new Se(ae)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(zu(s))if(r===0){const o=new L(s.path);this.Qt(n,o,Ne.newNoDocument(o,J.min()))}else Q(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&zu(a.target)){const c=new L(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ne.newNoDocument(c,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=ce();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new _c(e,n,this.Ut,this.Lt,r);return this.Lt=Ht(),this.qt=vv(),this.Ut=new Se(ae),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new yv,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Se(ae),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new yv),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function vv(){return new We(L.comparator)}function wv(){return new We(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zL=(()=>({and:"AND",or:"OR"}))();class HL{constructor(e,n){this.databaseId=e,this.wt=n}}function Zs(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aE(t,e){return t.wt?e.toBase64():e.toUint8Array()}function KL(t,e){return Zs(t,e.toTimestamp())}function Je(t){return Q(!!t),J.fromTimestamp(function(e){const n=jr(e);return new Ue(n.seconds,n.nanos)}(t))}function Zm(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function cE(t){const e=me.fromString(t);return Q(yE(e)),e}function Ba(t,e){return Zm(t.databaseId,e.path)}function Vn(t,e){const n=cE(e);if(n.get(1)!==t.databaseId.projectId)throw new A(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(lE(n))}function cf(t,e){return Zm(t.databaseId,e)}function uE(t){const e=cE(t);return e.length===4?me.emptyPath():lE(e)}function $a(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lE(t){return Q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _v(t,e,n){return{name:Ba(t,e),fields:n.value.mapValue.fields}}function hE(t,e,n){const r=Vn(t,e.name),i=Je(e.updateTime),s=e.createTime?Je(e.createTime):J.min(),o=new yt({mapValue:{fields:e.fields}}),a=Ne.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function WL(t,e){return"found"in e?function(n,r){Q(!!r.found),r.found.name,r.found.updateTime;const i=Vn(n,r.found.name),s=Je(r.found.updateTime),o=r.found.createTime?Je(r.found.createTime):J.min(),a=new yt({mapValue:{fields:r.found.fields}});return Ne.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){Q(!!r.missing),Q(!!r.readTime);const i=Vn(n,r.missing),s=Je(r.readTime);return Ne.newNoDocument(i,s)}(t,e):$()}function GL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.wt?(Q(u===void 0||typeof u=="string"),it.fromBase64String(u||"")):(Q(u===void 0||u instanceof Uint8Array),it.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:tE(c.code);return new A(u,c.message||"")}(o);n=new oE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vn(t,r.document.name),s=Je(r.document.updateTime),o=r.document.createTime?Je(r.document.createTime):J.min(),a=new yt({mapValue:{fields:r.document.fields}}),c=Ne.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new vu(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vn(t,r.document),s=r.readTime?Je(r.readTime):J.min(),o=Ne.newNoDocument(i,s),a=r.removedTargetIds||[];n=new vu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vn(t,r.document),s=r.removedTargetIds||[];n=new vu([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new ML(i),o=r.targetId;n=new sE(o,s)}}return n}function qa(t,e){let n;if(e instanceof _o)n={update:_v(t,e.key,e.value)};else if(e instanceof bo)n={delete:Ba(t,e.key)};else if(e instanceof fr)n={update:_v(t,e.key,e.data),updateMask:eM(e.fieldMask)};else{if(!(e instanceof Jm))return $();n={verify:Ba(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Xs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Gi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Yi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Js)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:KL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function uf(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Fe.updateTime(Je(i.updateTime)):i.exists!==void 0?Fe.exists(i.exists):Fe.none()}(e.currentDocument):Fe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)Q(o.setToServerValue==="REQUEST_TIME"),a=new Xs;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Gi(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Yi(u)}else"increment"in o?a=new Js(s,o.increment):$();const c=Xe.fromServerFormat(o.fieldPath);return new wc(c,a)}(t,i)):[];if(e.update){e.update.name;const i=Vn(t,e.update.name),s=new yt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new zt(c.map(u=>Xe.fromServerFormat(u)))}(e.updateMask);return new fr(i,s,o,n,r)}return new _o(i,s,n,r)}if(e.delete){const i=Vn(t,e.delete);return new bo(i,n)}if(e.verify){const i=Vn(t,e.verify);return new Jm(i,n)}return $()}function YL(t,e){return t&&t.length>0?(Q(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Je(r.updateTime):Je(i);return s.isEqual(J.min())&&(s=Je(i)),new OL(s,r.transformResults||[])}(n,e))):[]}function dE(t,e){return{documents:[cf(t,e.path)]}}function fE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=cf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=cf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return gE(Ie.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:bs(l.field),direction:XL(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,u){return c.wt||pc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function mE(t){let e=uE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Q(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(l){const h=pE(l);return h instanceof Ie&&Ym(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ms(Is(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,pc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Hr(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Hr(d,h)}(n.endAt)),$0(e,i,o,s,a,"F",c,u)}function QL(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function pE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Is(e.unaryFilter.field);return de.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Is(e.unaryFilter.field);return de.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Is(e.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Is(e.unaryFilter.field);return de.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return de.create(Is(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ie.create(e.compositeFilter.filters.map(n=>pE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function XL(t){return qL[t]}function JL(t){return jL[t]}function ZL(t){return zL[t]}function bs(t){return{fieldPath:t.canonicalString()}}function Is(t){return Xe.fromServerFormat(t.fieldPath)}function gE(t){return t instanceof de?function(e){if(e.op==="=="){if(iv(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NAN"}};if(rv(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(iv(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NOT_NAN"}};if(rv(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(e.field),op:JL(e.op),value:e.value}}}(t):t instanceof Ie?function(e){const n=e.getFilters().map(r=>gE(r));return n.length===1?n[0]:{compositeFilter:{op:ZL(e.op),filters:n}}}(t):$()}function eM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=bv(e)),e=tM(t.get(n),e);return bv(e)}function tM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function bv(t){return t+""}function Mn(t){const e=t.length;if(Q(e>=2),e===2)return Q(t.charAt(0)===""&&t.charAt(1)===""),me.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&$(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:$()}s=o+2}return new me(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e){return[t,Mt(e)]}function vE(t,e,n){return[t,Mt(e),n]}const nM={},rM=["prefixPath","collectionGroup","readTime","documentId"],iM=["prefixPath","collectionGroup","documentId"],sM=["collectionGroup","readTime","prefixPath","documentId"],oM=["canonicalId","targetId"],aM=["targetId","path"],cM=["path","targetId"],uM=["collectionId","parent"],lM=["indexId","uid"],hM=["uid","sequenceNumber"],dM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],fM=["indexId","uid","orderedDocumentKey"],mM=["userId","collectionPath","documentId"],pM=["userId","collectionPath","largestBatchId"],gM=["userId","collectionGroup","largestBatchId"],wE=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],yM=[...wE,"documentOverlays"],_E=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],bE=_E,vM=[...bE,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends C0{constructor(e,n){super(),this.se=e,this.currentSequenceNumber=n}}function ft(t,e){const n=U(t);return gn.M(n.se,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&PL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=aa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=aa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=iE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=J0(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Gs(this.mutations,e.mutations,(n,r)=>mv(n,r))&&Gs(this.baseMutations,e.baseMutations,(n,r)=>mv(n,r))}}class tp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Q(e.mutations.length===r.length);let i=UL;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,i,s=J.min(),o=J.min(),a=it.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.ie=e}}function wM(t,e){let n;if(e.document)n=hE(t.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=Xi(e.noDocument.readTime);n=Ne.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=L.fromSegments(e.unknownDocument.path),i=Xi(e.unknownDocument.version);n=Ne.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Ue(r[0],r[1]);return J.fromTimestamp(i)}(e.readTime)),n}function Ev(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Wu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Ba(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Zs(i,s.version.toTimestamp()),createTime:Zs(i,s.createTime.toTimestamp())}}(t.ie,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Qi(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:n.path.toArray(),version:Qi(e.version)}}return r}function Wu(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Qi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Xi(t){const e=new Ue(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function bi(t,e){const n=(e.baseMutations||[]).map(s=>uf(t.ie,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>uf(t.ie,s)),i=Ue.fromMillis(e.localWriteTimeMs);return new ep(e.batchId,i,n,r)}function Go(t){const e=Xi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Xi(t.lastLimboFreeSnapshotVersion):J.min();let r;var i;return t.query.documents!==void 0?(Q((i=t.query).documents.length===1),r=Wt(wo(uE(i.documents[0])))):r=function(s){return Wt(mE(s))}(t.query),new Mr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,it.fromBase64String(t.resumeToken))}function EE(t,e){const n=Qi(e.snapshotVersion),r=Qi(e.lastLimboFreeSnapshotVersion);let i;i=zu(e.target)?dE(t.ie,e.target):fE(t.ie,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Wi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function rp(t){const e=mE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ku(e,e.limit,"L"):e}function td(t,e){return new np(e.largestBatchId,uf(t.ie,e.overlayMutation))}function Tv(t,e){const n=e.path.lastSegment();return[t,Mt(e.path.popLast()),n]}function Sv(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Qi(r.readTime),documentKey:Mt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{getBundleMetadata(e,n){return kv(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Xi(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return kv(e).put({bundleId:(r=n).id,createTime:Qi(Je(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return Av(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:rp(i.bundledQuery),readTime:Xi(i.readTime)};var i})}saveNamedQuery(e,n){return Av(e).put(function(r){return{name:r.name,readTime:Qi(Je(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function kv(t){return ft(t,"bundles")}function Av(t){return ft(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n){this.yt=e,this.userId=n}static re(e,n){const r=n.uid||"";return new nh(e,r)}getOverlay(e,n){return Lo(e).get(Tv(this.userId,n)).next(r=>r?td(this.yt,r):null)}getOverlays(e,n){const r=Ln();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new np(n,o);i.push(this.oe(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Mt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Lo(e).Y("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Ln(),s=Mt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Lo(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=td(this.yt,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Ln();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Lo(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=td(this.yt,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}oe(e,n){return Lo(e).put(function(r,i,s){const[o,a,c]=Tv(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:qa(r.ie,s.mutation)}}(this.yt,this.userId,n))}}function Lo(t){return ft(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){}ue(e,n){this.ce(e,n),n.ae()}ce(e,n){if("nullValue"in e)this.he(n,5);else if("booleanValue"in e)this.he(n,10),n.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(n,15),n.le(ze(e.integerValue));else if("doubleValue"in e){const r=ze(e.doubleValue);isNaN(r)?this.he(n,13):(this.he(n,15),Ma(r)?n.le(0):n.le(r))}else if("timestampValue"in e){const r=e.timestampValue;this.he(n,20),typeof r=="string"?n.fe(r):(n.fe(`${r.seconds||""}`),n.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,n),this._e(n);else if("bytesValue"in e)this.he(n,30),n.we(zi(e.bytesValue)),this._e(n);else if("referenceValue"in e)this.me(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.he(n,45),n.le(r.latitude||0),n.le(r.longitude||0)}else"mapValue"in e?D0(e)?this.he(n,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,n),this._e(n)):"arrayValue"in e?(this.ye(e.arrayValue,n),this._e(n)):$()}de(e,n){this.he(n,25),this.pe(e,n)}pe(e,n){n.fe(e)}ge(e,n){const r=e.fields||{};this.he(n,55);for(const i of Object.keys(r))this.de(i,n),this.ce(r[i],n)}ye(e,n){const r=e.values||[];this.he(n,50);for(const i of r)this.ce(i,n)}me(e,n){this.he(n,37),L.fromName(e).path.forEach(r=>{this.he(n,60),this.pe(r,n)})}he(e,n){e.le(n)}_e(e){e.le(2)}}Ii.Ie=new Ii;function bM(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function Cv(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=bM(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class IM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ee(r.value),r=n.next();this.Ae()}Re(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.be(r.value),r=n.next();this.Pe()}ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ee(r);else if(r<2048)this.Ee(960|r>>>6),this.Ee(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ee(480|r>>>12),this.Ee(128|63&r>>>6),this.Ee(128|63&r);else{const i=n.codePointAt(0);this.Ee(240|i>>>18),this.Ee(128|63&i>>>12),this.Ee(128|63&i>>>6),this.Ee(128|63&i)}}this.Ae()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.be(r);else if(r<2048)this.be(960|r>>>6),this.be(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.be(480|r>>>12),this.be(128|63&r>>>6),this.be(128|63&r);else{const i=n.codePointAt(0);this.be(240|i>>>18),this.be(128|63&i>>>12),this.be(128|63&i>>>6),this.be(128|63&i)}}this.Pe()}Se(e){const n=this.De(e),r=Cv(n);this.Ce(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}xe(e){const n=this.De(e),r=Cv(n);this.Ce(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ee(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(n)}be(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class EM{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class TM{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class Mo{constructor(){this.$e=new IM,this.Be=new EM(this.$e),this.Le=new TM(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ue(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ei(this.indexId,this.documentKey,this.arrayValue,r)}}function Er(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=xv(t.arrayValue,e.arrayValue),n!==0?n:(n=xv(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function xv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const n of e.filters){const r=n;r.isInequality()?this.Qe=r:this.Ge.push(r)}}je(e){Q(e.collectionGroup===this.collectionId);const n=Zd(e);if(n!==void 0&&!this.We(n))return!1;const r=gi(e);let i=0,s=0;for(;i<r.length&&this.We(r[i]);++i);if(i===r.length)return!0;if(this.Qe!==void 0){const o=r[i];if(!this.ze(this.Qe,o)||!this.He(this.Ke[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ke.length||!this.He(this.Ke[s++],o))return!1}return!0}We(e){for(const n of this.Ge)if(this.ze(n,e))return!0;return!1}ze(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}He(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t){var e,n;if(Q(t instanceof de||t instanceof Ie),t instanceof de){if(t instanceof V0){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>de.create(t.field,"==",s)))||[];return Ie.create(i,"or")}return t}const r=t.filters.map(i=>TE(i));return Ie.create(r,t.op)}function kM(t){if(t.getFilters().length===0)return[];const e=ff(TE(t));return Q(SE(e)),hf(e)||df(e)?[e]:e.getFilters()}function hf(t){return t instanceof de}function df(t){return t instanceof Ie&&Ym(t)}function SE(t){return hf(t)||df(t)||function(e){if(e instanceof Ie&&nf(e)){for(const n of e.getFilters())if(!hf(n)&&!df(n))return!1;return!0}return!1}(t)}function ff(t){if(Q(t instanceof de||t instanceof Ie),t instanceof de)return t;if(t.filters.length===1)return ff(t.filters[0]);const e=t.filters.map(r=>ff(r));let n=Ie.create(e,t.op);return n=Gu(n),SE(n)?n:(Q(n instanceof Ie),Q(Qs(n)),Q(n.filters.length>1),n.filters.reduce((r,i)=>ip(r,i)))}function ip(t,e){let n;return Q(t instanceof de||t instanceof Ie),Q(e instanceof de||e instanceof Ie),n=t instanceof de?e instanceof de?function(r,i){return Ie.create([r,i],"and")}(t,e):Rv(t,e):e instanceof de?Rv(e,t):function(r,i){if(Q(r.filters.length>0&&i.filters.length>0),Qs(r)&&Qs(i))return M0(r,i.getFilters());const s=nf(r)?r:i,o=nf(r)?i:r,a=s.filters.map(c=>ip(c,o));return Ie.create(a,"or")}(t,e),Gu(n)}function Rv(t,e){if(Qs(e))return M0(e,t.getFilters());{const n=e.filters.map(r=>ip(t,r));return Ie.create(n,"or")}}function Gu(t){if(Q(t instanceof de||t instanceof Ie),t instanceof de)return t;const e=t.getFilters();if(e.length===1)return Gu(e[0]);if(P0(t))return t;const n=e.map(i=>Gu(i)),r=[];return n.forEach(i=>{i instanceof de?r.push(i):i instanceof Ie&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ie.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(){this.Je=new sp}addToCollectionParentIndex(e,n){return this.Je.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Zt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Zt.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class sp{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Se(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Se(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Uint8Array(0);class CM{constructor(e,n){this.user=e,this.databaseId=n,this.Ye=new sp,this.Xe=new ii(r=>Wi(r),(r,i)=>gc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Ye.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Ye.add(n)});const s={collectionId:r,parent:Mt(i)};return Nv(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[E0(n),""],!1,!0);return Nv(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Mn(o.parent))}return r})}addFieldIndex(e,n){const r=Hc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Uo(e);return s.next(a=>{o.put(Sv(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Hc(e),i=Uo(e),s=Fo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Fo(e);let i=!0;const s=new Map;return w.forEach(this.Ze(n),o=>this.tn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ce();const a=[];return w.forEach(s,(c,u)=>{var l;x("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`} to execute ${Wi(n)}`);const h=function(E,R){const F=Zd(R);if(F===void 0)return null;for(const z of Hu(E,F.fieldPath))switch(z.op){case"array-contains-any":return z.value.arrayValue.values||[];case"array-contains":return[z.value]}return null}(u,c),d=function(E,R){const F=new Map;for(const z of gi(R))for(const ne of Hu(E,z.fieldPath))switch(ne.op){case"==":case"in":F.set(z.fieldPath.canonicalString(),ne.value);break;case"not-in":case"!=":return F.set(z.fieldPath.canonicalString(),ne.value),Array.from(F.values())}return null}(u,c),f=function(E,R){const F=[];let z=!0;for(const ne of gi(R)){const X=ne.kind===0?lv(E,ne.fieldPath,E.startAt):hv(E,ne.fieldPath,E.startAt);F.push(X.value),z&&(z=X.inclusive)}return new Hr(F,z)}(u,c),p=function(E,R){const F=[];let z=!0;for(const ne of gi(R)){const X=ne.kind===0?hv(E,ne.fieldPath,E.endAt):lv(E,ne.fieldPath,E.endAt);F.push(X.value),z&&(z=X.inclusive)}return new Hr(F,z)}(u,c),y=this.en(c,u,f),I=this.en(c,u,p),v=this.nn(c,u,d),b=this.sn(c.indexId,h,y,f.inclusive,I,p.inclusive,v);return w.forEach(b,E=>r.J(E,n.limit).next(R=>{R.forEach(F=>{const z=L.fromSegments(F.documentKey);o.has(z)||(o=o.add(z),a.push(z))})}))}).next(()=>a)}return w.resolve(null)})}Ze(e){let n=this.Xe.get(e);return n||(e.filters.length===0?n=[e]:n=kM(Ie.create(e.filters,"and")).map(r=>sf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,n),n)}sn(e,n,r,i,s,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,s.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.rn(n[h/u]):zc,f=this.on(e,d,r[h%u],i),p=this.un(e,d,s[h%u],o),y=a.map(I=>this.on(e,d,I,!0));l.push(...this.createRange(f,p,y))}return l}on(e,n,r,i){const s=new Ei(e,L.empty(),n,r);return i?s:s.Ue()}un(e,n,r,i){const s=new Ei(e,L.empty(),n,r);return i?s.Ue():s}tn(e,n){const r=new SM(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.Ze(n);return w.forEach(i,s=>this.tn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Se(Xe.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}cn(e,n){const r=new Mo;for(const i of gi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.qe(i.kind);Ii.Ie.ue(s,o)}return r.Fe()}rn(e){const n=new Mo;return Ii.Ie.ue(e,n.qe(0)),n.Fe()}an(e,n){const r=new Mo;return Ii.Ie.ue(Ki(this.databaseId,n),r.qe(function(i){const s=gi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Fe()}nn(e,n,r){if(r===null)return[];let i=[];i.push(new Mo);let s=0;for(const o of gi(e)){const a=r[s++];for(const c of i)if(this.hn(n,o.fieldPath)&&Va(a))i=this.ln(i,o,a);else{const u=c.qe(o.kind);Ii.Ie.ue(a,u)}}return this.fn(i)}en(e,n,r){return this.nn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Fe();return n}ln(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Mo;c.seed(a.Fe()),Ii.Ie.ue(o,c.qe(n.kind)),s.push(c)}return s}hn(e,n){return!!e.filters.find(r=>r instanceof de&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Hc(e),i=Uo(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new ju(l.sequenceNumber,new Zt(Xi(l.readTime),new L(Mn(l.documentKey)),l.largestBatchId)):ju.empty(),d=u.fields.map(([f,p])=>new hL(Xe.fromServerFormat(f),p));return new T0(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ae(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Hc(e),s=Uo(e);return this.dn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,c=>s.put(Sv(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,c=>this._n(e,i,c).next(u=>{const l=this.wn(s,c);return u.isEqual(l)?w.resolve():this.mn(e,s,c,u,l)}))))})}gn(e,n,r,i){return Fo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.an(r,n.key),documentKey:n.key.path.toArray()})}yn(e,n,r,i){return Fo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.an(r,n.key),n.key.path.toArray()])}_n(e,n,r){const i=Fo(e);let s=new Se(Er);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.an(r,n)])},(o,a)=>{s=s.add(new Ei(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,n){let r=new Se(Er);const i=this.cn(n,e);if(i==null)return r;const s=Zd(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Va(o))for(const a of o.arrayValue.values||[])r=r.add(new Ei(n.indexId,e.key,this.rn(a),i))}else r=r.add(new Ei(n.indexId,e.key,zc,i));return r}mn(e,n,r,i,s){x("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let p=gs(d),y=gs(f);for(;p||y;){let I=!1,v=!1;if(p&&y){const b=u(p,y);b<0?v=!0:b>0&&(I=!0)}else p!=null?v=!0:I=!0;I?(l(y),y=gs(f)):v?(h(p),p=gs(d)):(p=gs(d),y=gs(f))}}(i,s,Er,a=>{o.push(this.gn(e,n,r,a))},a=>{o.push(this.yn(e,n,r,a))}),w.waitFor(o)}dn(e){let n=1;return Uo(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Er(o,a)).filter((o,a,c)=>!a||Er(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Er(o,e),c=Er(o,n);if(a===0)i[0]=e.Ue();else if(a>0&&c<0)i.push(o),i.push(o.Ue());else if(c>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,zc,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,zc,[]];s.push(IDBKeyRange.bound(a,c))}return s}pn(e,n){return Er(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Dv)}getMinOffset(e,n){return w.mapArray(this.Ze(n),r=>this.tn(e,r).next(i=>i||$())).next(Dv)}}function Nv(t){return ft(t,"collectionParents")}function Fo(t){return ft(t,"indexEntries")}function Hc(t){return ft(t,"indexConfiguration")}function Uo(t){return ft(t,"indexState")}function Dv(t){Q(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Km(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Zt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class $t{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{Q(a===1)}));const u=[];for(const l of n.mutations){const h=vE(e,l.key.path,n.batchId);s.push(i.delete(h)),u.push(l.key)}return w.waitFor(s).next(()=>u)}function Yu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(41943040,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);class rh{constructor(e,n,r,i){this.userId=e,this.yt=n,this.indexManager=r,this.referenceDelegate=i,this.In={}}static re(e,n,r,i){Q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new rh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Tr(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Es(e),o=Tr(e);return o.add({}).next(a=>{Q(typeof a=="number");const c=new ep(a,n,r,i),u=function(d,f,p){const y=p.baseMutations.map(v=>qa(d.ie,v)),I=p.mutations.map(v=>qa(d.ie,v));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:y,mutations:I}}(this.yt,this.userId,c),l=[];let h=new Se((d,f)=>ae(d.canonicalString(),f.canonicalString()));for(const d of i){const f=vE(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,nM))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),w.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return Tr(e).get(n).next(r=>r?(Q(r.userId===this.userId),bi(this.yt,r)):null)}Tn(e,n){return this.In[n]?w.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.In[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Tr(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(Q(a.batchId>=r),s=bi(this.yt,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Tr(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Tr(e).W("userMutationsIndex",n).next(r=>r.map(i=>bi(this.yt,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=wu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Es(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=Mn(l);if(u===this.userId&&n.path.isEqual(d))return Tr(e).get(h).next(f=>{if(!f)throw $();Q(f.userId===this.userId),s.push(bi(this.yt,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(ae);const i=[];return n.forEach(s=>{const o=wu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Es(e).Z({range:a},(u,l,h)=>{const[d,f,p]=u,y=Mn(f);d===this.userId&&s.path.isEqual(y)?r=r.add(p):h.done()});i.push(c)}),w.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=wu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Se(ae);return Es(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,p=Mn(d);h===this.userId&&r.isPrefixOf(p)?p.length===i&&(a=a.add(f)):l.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Tr(e).get(s).next(o=>{if(o===null)throw $();Q(o.userId===this.userId),r.push(bi(this.yt,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return kE(e.se,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Es(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Mn(s[1]);i.push(c)}else a.done()}).next(()=>{Q(i.length===0)})})}containsKey(e,n){return AE(e,this.userId,n)}Rn(e){return CE(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function AE(t,e,n){const r=wu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Es(t).Z({range:s,X:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Tr(t){return ft(t,"mutations")}function Es(t){return ft(t,"documentMutations")}function CE(t){return ft(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ji(0)}static vn(){return new Ji(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e,n){this.referenceDelegate=e,this.yt=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new Ji(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>J.fromTimestamp(new Ue(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Sn(e,i)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ys(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(Q(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ys(e).Z((o,a)=>{const c=Go(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ys(e).Z((r,i)=>{const s=Go(i);n(s)})}Vn(e){return Pv(e).get("targetGlobalKey").next(n=>(Q(n!==null),n))}Sn(e,n){return Pv(e).put("targetGlobalKey",n)}Dn(e,n){return ys(e).put(EE(this.yt,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Wi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ys(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Go(a);gc(n,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=xr(e);return n.forEach(o=>{const a=Mt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=xr(e);return w.forEach(n,s=>{const o=Mt(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=xr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=xr(e);let s=ce();return i.Z({range:r,X:!0},(o,a,c)=>{const u=Mn(o[1]),l=new L(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const r=Mt(n.path),i=IDBKeyRange.bound([r],[E0(r)],!1,!0);let s=0;return xr(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ne(e,n){return ys(e).get(n).next(r=>r?Go(r):null)}}function ys(t){return ft(t,"targets")}function Pv(t){return ft(t,"targetGlobal")}function xr(t){return ft(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class RM{constructor(e){this.xn=e,this.buffer=new Se(Lv),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Lv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class NM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ri(n)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ni(n)}await this.Fn(3e5)})}}class DM{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(jt.at);const r=new RM(n);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Ov)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ov):this.qn(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,n){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Jd()<=ye.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new DM(r,i)}(this,n)}Bn(e){const n=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Un(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,i)=>n(i))}addReference(e,n,r){return Kc(e,r)}removeReference(e,n,r){return Kc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Kc(e,n)}Gn(e,n){return function(r,i){let s=!1;return CE(r).tt(o=>AE(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=n){const c=this.Gn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,J.min()),xr(e).delete([0,Mt(o.path)])))});i.push(c)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Kc(e,n)}Kn(e,n){const r=xr(e);let i,s=jt.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==jt.at&&n(new L(Mn(i)),s),s=u,i=c):s=jt.at}).next(()=>{s!==jt.at&&n(new L(Mn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Kc(t,e){return xr(t).put(function(n,r){return{targetId:0,path:Mt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.changes=new ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return fi(e).put(r)}removeEntry(e,n,r){return fi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Wu(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=Ne.newInvalidDocument(n);return fi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Vo(n))},(i,s)=>{r=this.jn(n,s)}).next(()=>r)}Wn(e,n){let r={size:0,document:Ne.newInvalidDocument(n)};return fi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Vo(n))},(i,s)=>{r={document:this.jn(n,s),size:Yu(s)}}).next(()=>r)}getEntries(e,n){let r=Ht();return this.zn(e,n,(i,s)=>{const o=this.jn(i,s);r=r.insert(i,o)}).next(()=>r)}Hn(e,n){let r=Ht(),i=new We(L.comparator);return this.zn(e,n,(s,o)=>{const a=this.jn(s,o);r=r.insert(s,a),i=i.insert(s,Yu(o))}).next(()=>({documents:r,Jn:i}))}zn(e,n,r){if(n.isEmpty())return w.resolve();let i=new Se(Uv);n.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Vo(i.first()),Vo(i.last())),o=i.getIterator();let a=o.getNext();return fi(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Uv(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.j(Vo(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),Wu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return fi(e).W(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Ht();for(const l of c){const h=this.jn(L.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(vc(n,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=Ht();const o=Fv(n,r),a=Fv(n,Zt.max());return fi(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.jn(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new LM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Mv(e).get("remoteDocumentGlobalKey").next(n=>(Q(!!n),n))}Qn(e,n){return Mv(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=wM(this.yt,n);if(!(r.isNoDocument()&&r.version.isEqual(J.min())))return r}return Ne.newInvalidDocument(e)}}function RE(t){return new PM(t)}class LM extends xE{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new ii(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Se((s,o)=>ae(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(n.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Ev(this.Yn.yt,o);i=i.add(s.path.popLast());const u=Yu(c);r+=u-a.size,n.push(this.Yn.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Ev(this.Yn.yt,o.convertToNoDocument(J.min()));n.push(this.Yn.addEntry(e,s,c))}}),i.forEach(s=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Yn.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:i})=>(i.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Mv(t){return ft(t,"remoteDocumentGlobal")}function fi(t){return ft(t,"remoteDocumentsV14")}function Vo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Fv(t,e){const n=e.documentKey.path.toArray();return[t,Wu(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Uv(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ae(n[s],r[s]),i)return i;return i=ae(n.length,r.length),i||(i=ae(n[n.length-2],r[r.length-2]),i||ae(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&aa(r.mutation,i,zt.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=Ln();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Wo();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ln();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ht();const o=ca(),a=ca();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof fr)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),aa(l.mutation,u,l.mutation.getFieldMask(),Ue.now())):o.set(u.key,zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new MM(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ca();let i=new We((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||zt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||ce()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=iE();l.forEach(d=>{if(!s.has(d)){const f=J0(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Xm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(Ln());let a=-1,c=s;return o.next(u=>w.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?w.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,ce())).next(l=>({batchId:a,changes:rE(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Wo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Wo();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const c=function(u,l){return new dr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Ne.newInvalidDocument(u)))});let o=Wo();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&aa(u.mutation,c,zt.empty(),Ue.now()),vc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return w.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Je(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:rp(r.bundledQuery),readTime:Je(r.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(){this.overlays=new We(L.comparator),this.es=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ln();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=Ln(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new We((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Ln(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ln(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return w.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new np(n,r));let s=this.es.get(n);s===void 0&&(s=ce(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.ns=new Se(at.ss),this.rs=new Se(at.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new at(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new at(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new L(new me([])),r=new at(n,e),i=new at(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new me([])),r=new at(n,e),i=new at(n,e+1);let s=ce();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new at(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||ae(e._s,n._s)}static os(e,n){return ae(e._s,n._s)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Se(at.ss)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ep(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new at(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),i=new at(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(ae);return n.forEach(i=>{const s=new at(i,0),o=new at(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),w.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new at(new L(s),0);let a=new Se(ae);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c._s)),!0)},o),w.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Q(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return w.forEach(n.mutations,i=>{const s=new at(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new at(n,0),i=this.gs.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e){this.Es=e,this.docs=new We(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let r=Ht();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ne.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ht();const o=n.path,a=new L(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Km(k0(l),r)<=0||(i.has(l.key)||vc(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}As(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $M(this)}getSize(e){return w.resolve(this.size)}}class $M extends xE{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e){this.persistence=e,this.Rs=new ii(n=>Wi(n),gc),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.bs=0,this.Ps=new op,this.targetCount=0,this.vs=Ji.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),w.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ji(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Dn(n),w.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new jt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new qM(this),this.indexManager=new AM,this.remoteDocumentCache=function(r){return new BM(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new IE(n),this.Ns=new FM(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new VM(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new jM(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return w.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class jM extends C0{constructor(e){super(),this.currentSequenceNumber=e}}class ih{constructor(e){this.persistence=e,this.Fs=new op,this.$s=null}static Bs(e){return new ih(e)}get Ls(){if(this.$s)return this.$s;throw $()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),w.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ls,r=>{const i=L.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return w.or([()=>w.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.yt=e}$(e,n,r,i){const s=new Xl("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Iv,{unique:!0}),a.createObjectStore("documentMutations")}(e),Vv(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Vv(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Iv,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Us(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(o=o.next(()=>this.Gs(s))),r<8&&i>=8&&(o=o.next(()=>this.Qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.js(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:mM});c.createIndex("collectionPathOverlayIndex",pM,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",gM,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:rM});c.createIndex("documentKeyIndex",iM),c.createIndex("collectionGroupIndex",sM)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.zs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:lM}).createIndex("sequenceNumberIndex",hM,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:dM}).createIndex("documentKeyIndex",fM,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Yu(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Us(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>w.forEach(a,c=>{Q(c.userId===s.userId);const u=bi(this.yt,c);return kE(e,s.userId,u).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new me(o),u=function(l){return[0,Mt(l)]}(c);s.push(n.get(u).next(l=>l?w.resolve():(h=>n.put({targetId:0,path:Mt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(s))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:uM});const r=n.store("collectionParents"),i=new sp,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Mt(c)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new me(o);return s(c.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,c],u)=>{const l=Mn(a);return s(l.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,i)=>{const s=Go(i),o=EE(this.yt,s);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new L(me.fromString(u.document.name).popFirst(5)):u.noDocument?L.fromSegments(u.noDocument.path):u.unknownDocument?L.fromSegments(u.unknownDocument.path):$()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>w.waitFor(i))}zs(e,n){const r=n.store("mutations"),i=RE(this.yt),s=new DE(ih.Bs,this.yt.ie);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:ce();bi(this.yt,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),w.forEach(a,(c,u)=>{const l=new ct(u),h=nh.re(this.yt,l),d=s.getIndexManager(l),f=rh.re(l,this.yt,d,s.referenceDelegate);return new NE(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new lf(n,jt.at),c).next()})})}}function Vv(t){t.createObjectStore("targetDocuments",{keyPath:aM}).createIndex("documentTargetsIndex",cM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",oM,{unique:!0}),t.createObjectStore("targetGlobal")}const nd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ap{constructor(e,n,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=s,this.window=o,this.document=a,this.Js=u,this.Ys=l,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!ap.C())throw new A(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new OM(this,i),this.ii=n+"main",this.yt=new IE(c),this.ri=new gn(this.ii,this.Xs,new zM(this.yt)),this.Cs=new xM(this.referenceDelegate,this.yt),this.remoteDocumentCache=RE(this.yt),this.Ns=new _M,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&Qe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(_.FAILED_PRECONDITION,nd);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new jt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Wc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(ri(e))return x("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Bo(e).get("owner").next(n=>w.resolve(this.mi(n)))}gi(e){return Wc(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ft(n,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?w.resolve(!0):Bo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new A(_.FAILED_PRECONDITION,nd);return!1}}return!(!this.networkEnabled||!this.inForeground)||Wc(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&x("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new lf(e,jt.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Wc(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return rh.re(e,this.yt,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new CM(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return nh.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){x("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?vM:o===14?bE:o===13?_E:o===12?yM:o===11?wE:void $();var o;let a;return this.ri.runTransaction(e,i,s,c=>(a=new lf(c,this.Ss?this.Ss.next():jt.at),n==="readwrite-primary"?this.fi(a).next(u=>!!u||this.di(a)).next(u=>{if(!u)throw Qe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new A(_.FAILED_PRECONDITION,A0);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Vi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return Bo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new A(_.FAILED_PRECONDITION,nd)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Bo(e).put("owner",n)}static C(){return gn.C()}_i(e){const n=Bo(e);return n.get("owner").next(r=>this.mi(r)?(x("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Qe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),PC()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return x("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Qe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Qe("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Bo(t){return ft(t,"owner")}function Wc(t){return ft(t,"clientMetadata")}function cp(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new up(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(dv(n))return w.resolve(null);let r=Wt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ku(n,null,"F"),r=Wt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Ku(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,r,i){return dv(n)||i.isEqual(J.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(Jd()<=ye.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),af(n)),this.Bi(e,o,n,S0(i,-1)))})}Fi(e,n){let r=new Se(z0(e));return n.forEach((i,s)=>{vc(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return Jd()<=ye.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",af(n)),this.Ni.getDocumentsMatchingQuery(e,n,Zt.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new We(ae),this.Ui=new ii(s=>Wi(s),gc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NE(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function PE(t,e,n,r){return new HM(t,e,n,r)}async function LE(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ce();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function KM(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=w.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const y=c.docVersions.get(f);Q(y!==null),p.version.compareTo(y)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ce();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ME(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function WM(t,e){const n=U(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(it.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(p,y,I){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,l)&&a.push(n.Cs.updateTargetData(s,f))});let c=Ht(),u=ce();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(FE(s,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!r.isEqual(J.min())){const l=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.qi=i,s))}function FE(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ht();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function GM(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eo(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Mr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function to(t,e,n){const r=U(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ri(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Qu(t,e,n){const r=U(t);let i=J.min(),s=ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=U(a),h=l.Ui.get(u);return h!==void 0?w.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(r,o,Wt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ce())).next(a=>(BE(r,j0(e),a),{documents:a,Hi:s})))}function UE(t,e){const n=U(t),r=U(n.Cs),i=n.qi.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ne(s,e).next(o=>o?o.target:null))}function VE(t,e){const n=U(t),r=n.Ki.get(e)||J.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Gi.getAllFromCollectionGroup(i,e,S0(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(BE(n,e,i),i))}function BE(t,e,n){let r=t.Ki.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}async function YM(t,e,n,r){const i=U(t);let s=ce(),o=Ht();for(const u of n){const l=e.Ji(u.metadata.name);u.document&&(s=s.add(l));const h=e.Yi(u);h.setReadTime(e.Xi(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await eo(i,function(u){return Wt(wo(me.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>FE(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Cs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Cs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.Wi,l.zi)).next(()=>l.Wi)))}async function QM(t,e,n=ce()){const r=await eo(t,Wt(rp(e.bundledQuery))),i=U(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Je(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(s,e);const a=r.withResumeToken(it.EMPTY_BYTE_STRING,o);return i.qi=i.qi.insert(a.targetId,a),i.Cs.updateTargetData(s,a).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function Bv(t,e){return`firestore_clients_${t}_${e}`}function $v(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function rd(t,e){return`firestore_targets_${t}_${e}`}class Xu{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new A(i.error.code,i.error.message))),o?new Xu(e,n,i.state,s):(Qe("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ua{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new A(r.error.code,r.error.message))),s?new ua(e,r.state,i):(Qe("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ju{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=th();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=R0(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Ju(e,s):(Qe("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class lp{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new lp(n.clientId,n.onlineState):(Qe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class mf{constructor(){this.activeTargetIds=th()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class id{constructor(e,n,r,i,s){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new We(ae),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=Bv(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new mf),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(Bv(this.persistenceKey,r));if(i){const s=Ju.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(rd(this.persistenceKey,e));if(r){const i=ua.Zi(e,r);i&&(n=i.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(rd(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return x("SharedClientState","READ",e,n),n}setItem(e,n){x("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){x("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(x("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void Qe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(i){let s=jt.at;if(i!=null)try{const o=JSON.parse(i);Q(typeof o=="number"),s=o}catch(o){Qe("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==jt.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const i=new Xu(this.currentUser,e,n,r),s=$v(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const n=$v(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const i=rd(this.persistenceKey,e),s=new ua(e,n,r);this.setItem(i,s.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return Ju.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Xu.Zi(new ct(s),i,n)}Nr(e,n){const r=this._r.exec(e),i=Number(r[1]);return ua.Zi(i,n)}yr(e){return lp.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);x("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=th();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class $E{constructor(){this.Lr=new mf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new mf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);x("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(c=>(x("RestConnection","Received: ",c),c),c=>{throw Ws("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+vo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=JM[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new ZP;a.setWithCredentials(!0),a.listenOnce(QP.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ed.NO_ERROR:const u=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(u)),s(u);break;case ed.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new A(_.DEADLINE_EXCEEDED,"Request time out"));break;case ed.HTTP_ERROR:const l=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(p){const y=p.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(d.status);o(new A(f,d.message))}else o(new A(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(_.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=GP(),o=YP(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new JP({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=i.join("");x("Connection","Creating WebChannel: "+c,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new ZM({Hr:p=>{h?x("Connection","Not sending because WebChannel is closed:",p):(l||(x("Connection","Opening WebChannel transport."),u.open(),l=!0),x("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),f=(p,y,I)=>{p.listen(y,v=>{try{I(v)}catch(b){setTimeout(()=>{throw b},0)}})};return f(u,qc.EventType.OPEN,()=>{h||x("Connection","WebChannel transport opened.")}),f(u,qc.EventType.CLOSE,()=>{h||(h=!0,x("Connection","WebChannel transport closed"),d.io())}),f(u,qc.EventType.ERROR,p=>{h||(h=!0,Ws("Connection","WebChannel transport errored:",p),d.io(new A(_.UNAVAILABLE,"The operation could not be completed")))}),f(u,qc.EventType.MESSAGE,p=>{var y;if(!h){const I=p.data[0];Q(!!I);const v=I,b=v.error||((y=v[0])===null||y===void 0?void 0:y.error);if(b){x("Connection","WebChannel received error:",b);const E=b.status;let R=function(z){const ne=et[z];if(ne!==void 0)return tE(ne)}(E),F=b.message;R===void 0&&(R=_.INTERNAL,F="Unknown error status: "+E+" with message "+b.message),h=!0,d.io(new A(R,F)),u.close()}else x("Connection","WebChannel received:",I),d.ro(I)}}),f(o,XP.STAT_EVENT,p=>{p.stat===Jy.PROXY?x("Connection","Detected buffering proxy"):p.stat===Jy.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(){return typeof window<"u"?window:null}function _u(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){return new HL(t,!0)}class hp{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n,r,i,s,o,a,c){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new hp(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Qe(n.toString()),Qe("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new A(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class t2 extends jE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=GL(this.yt,e),r=function(i){if(!("targetChange"in i))return J.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?J.min():s.readTime?Je(s.readTime):J.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=$a(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=zu(a)?{documents:dE(i,a)}:{query:fE(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=aE(i,s.resumeToken):s.snapshotVersion.compareTo(J.min())>0&&(o.readTime=Zs(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=QL(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=$a(this.yt),n.removeTarget=e,this.Bo(n)}}class n2 extends jE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=YL(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.Zo(r,n)}return Q(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=$a(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qa(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new A(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(_.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(_.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class i2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Qe(n),this.ou=!1):x("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{si(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=U(a);c._u.add(4),await Io(c),c.gu.set("Unknown"),c._u.delete(4),await Ec(c)}(this))})}),this.gu=new i2(r,i)}}async function Ec(t){if(si(t))for(const e of t.wu)await e(!0)}async function Io(t){for(const e of t.wu)await e(!1)}function sh(t,e){const n=U(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),mp(n)?fp(n):To(n).ko()&&dp(n,e))}function ja(t,e){const n=U(t),r=To(n);n.du.delete(e),r.ko()&&zE(n,e),n.du.size===0&&(r.ko()?r.Fo():si(n)&&n.gu.set("Unknown"))}function dp(t,e){t.yu.Ot(e.targetId),To(t).zo(e)}function zE(t,e){t.yu.Ot(e),To(t).Ho(e)}function fp(t){t.yu=new $L({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),To(t).start(),t.gu.uu()}function mp(t){return si(t)&&!To(t).No()&&t.du.size>0}function si(t){return U(t)._u.size===0}function HE(t){t.yu=void 0}async function o2(t){t.du.forEach((e,n)=>{dp(t,e)})}async function a2(t,e){HE(t),mp(t)?(t.gu.hu(e),fp(t)):t.gu.set("Unknown")}async function c2(t,e,n){if(t.gu.set("Online"),e instanceof oE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zu(t,r)}else if(e instanceof vu?t.yu.Kt(e):e instanceof sE?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(J.min()))try{const r=await ME(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(c);u&&i.du.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(it.EMPTY_BYTE_STRING,c.snapshotVersion)),zE(i,a);const u=new Mr(c.target,a,1,c.sequenceNumber);dp(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Zu(t,r)}}async function Zu(t,e,n){if(!ri(e))throw e;t._u.add(1),await Io(t),t.gu.set("Offline"),n||(n=()=>ME(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ec(t)})}function KE(t,e){return e().catch(n=>Zu(t,n,e))}async function Eo(t){const e=U(t),n=Kr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;u2(e);)try{const i=await GM(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,l2(e,i)}catch(i){await Zu(e,i)}WE(e)&&GE(e)}function u2(t){return si(t)&&t.fu.length<10}function l2(t,e){t.fu.push(e);const n=Kr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function WE(t){return si(t)&&!Kr(t).No()&&t.fu.length>0}function GE(t){Kr(t).start()}async function h2(t){Kr(t).eu()}async function d2(t){const e=Kr(t);for(const n of t.fu)e.Xo(n.mutations)}async function f2(t,e,n){const r=t.fu.shift(),i=tp.from(r,e,n);await KE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Eo(t)}async function m2(t,e){e&&Kr(t).Yo&&await async function(n,r){if(i=r.code,eE(i)&&i!==_.ABORTED){const s=n.fu.shift();Kr(n).Mo(),await KE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Eo(n)}var i}(t,e),WE(t)&&GE(t)}async function jv(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=si(n);n._u.add(3),await Io(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ec(n)}async function pf(t,e){const n=U(t);e?(n._u.delete(2),await Ec(n)):e||(n._u.add(2),await Io(n),n.gu.set("Unknown"))}function To(t){return t.pu||(t.pu=function(e,n,r){const i=U(e);return i.su(),new t2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:o2.bind(null,t),Zr:a2.bind(null,t),Wo:c2.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),mp(t)?fp(t):t.gu.set("Unknown")):(await t.pu.stop(),HE(t))})),t.pu}function Kr(t){return t.Iu||(t.Iu=function(e,n,r){const i=U(e);return i.su(),new n2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:h2.bind(null,t),Zr:m2.bind(null,t),tu:d2.bind(null,t),Zo:f2.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Eo(t)):(await t.Iu.stop(),t.fu.length>0&&(x("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new pp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function So(t,e){if(Qe("AsyncQueue",`${e}: ${t}`),ri(t))return new A(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Wo(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new Fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(){this.Tu=new We(L.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):$():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class no{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new no(e,n,Fs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(){this.Au=void 0,this.listeners=[]}}class g2{constructor(){this.queries=new ii(e=>q0(e),yc),this.onlineState="Unknown",this.Ru=new Set}}async function gp(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new p2),i)try{s.Au=await n.onListen(r)}catch(o){const a=So(o,`Initialization of query '${af(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&vp(n)}async function yp(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function y2(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&vp(n)}function v2(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function vp(t){t.Ru.forEach(e=>{e.next()})}class wp{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new no(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=no.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.yt=e}Ji(e){return Vn(this.yt,e)}Yi(e){return e.metadata.exists?hE(this.yt,e.document,!1):Ne.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Je(e)}}class _2{constructor(e,n,r){this.Mu=e,this.localStore=n,this.yt=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=YE(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const r=me.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new Hv(this.yt);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ce()).add(s);n.set(o,a)}}return n}async complete(){const e=await YM(this.localStore,new Hv(this.yt),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await QM(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function YE(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.key=e}}class XE{constructor(e){this.key=e}}class JE{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ce(),this.mutatedKeys=ce(),this.Gu=z0(e),this.Qu=new Fs(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new zv,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=vc(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let I=!1;d&&f?d.data.isEqual(f.data)?p!==y&&(r.track({type:3,doc:f}),I=!0):this.Hu(d,f)||(r.track({type:2,doc:f}),I=!0,(c&&this.Gu(f,c)>0||u&&this.Gu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),I=!0):d&&!f&&(r.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(f?(o=o.add(f),s=y?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,l)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return f(h)-f(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,s.length!==0||c?{snapshot:new no(this.query,e.Qu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new zv,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ce(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new XE(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new QE(r))}),n}tc(e){this.qu=e.Hi,this.Ku=ce();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return no.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class b2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class I2{constructor(e){this.key=e,this.nc=!1}}class E2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ii(a=>q0(a),yc),this.rc=new Map,this.oc=new Set,this.uc=new We(L.comparator),this.cc=new Map,this.ac=new op,this.hc={},this.lc=new Map,this.fc=Ji.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function T2(t,e){const n=Tp(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await eo(n.localStore,Wt(e));n.isPrimaryClient&&sh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await _p(n,e,r,a==="current",o.resumeToken)}return i}async function _p(t,e,n,r,i){t._c=(h,d,f)=>async function(p,y,I,v){let b=y.view.Wu(I);b.$i&&(b=await Qu(p.localStore,y.query,!1).then(({documents:F})=>y.view.Wu(F,b)));const E=v&&v.targetChanges.get(y.targetId),R=y.view.applyChanges(b,p.isPrimaryClient,E);return gf(p,y.targetId,R.Xu),R.snapshot}(t,h,d,f);const s=await Qu(t.localStore,e,!0),o=new JE(e,s.Hi),a=o.Wu(s.documents),c=bc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);gf(t,n,u.Xu);const l=new b2(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function S2(t,e){const n=U(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!yc(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await to(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ja(n.remoteStore,r.targetId),ro(n,r.targetId)}).catch(ni)):(ro(n,r.targetId),await to(n.localStore,r.targetId,!0))}async function k2(t,e,n){const r=Sp(t);try{const i=await function(s,o){const a=U(s),c=Ue.now(),u=o.reduce((d,f)=>d.add(f.key),ce());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Ht(),p=ce();return a.Gi.getEntries(d,u).next(y=>{f=y,f.forEach((I,v)=>{v.isValidDocument()||(p=p.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{l=y;const I=[];for(const v of o){const b=LL(v,l.get(v.key).overlayedDocument);b!=null&&I.push(new fr(v.key,b,B0(b.value.mapValue),Fe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(y=>{h=y;const I=y.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,I)})}).then(()=>({batchId:h.batchId,changes:rE(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.hc[s.currentUser.toKey()];c||(c=new We(ae)),c=c.insert(o,a),s.hc[s.currentUser.toKey()]=c}(r,i.batchId,n),await mr(r,i.changes),await Eo(r.remoteStore)}catch(i){const s=So(i,"Failed to persist write");n.reject(s)}}async function ZE(t,e){const n=U(t);try{const r=await WM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Q(o.nc):i.removedDocuments.size>0&&(Q(o.nc),o.nc=!1))}),await mr(n,r,e)}catch(r){await ni(r)}}function Kv(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&vp(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function A2(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new We(L.comparator);o=o.insert(s,Ne.newNoDocument(s,J.min()));const a=ce().add(s),c=new _c(J.min(),new Map,new Se(ae),o,a);await ZE(r,c),r.uc=r.uc.remove(s),r.cc.delete(e),Ep(r)}else await to(r.localStore,e,!1).then(()=>ro(r,e,n)).catch(ni)}async function C2(t,e){const n=U(t),r=e.batch.batchId;try{const i=await KM(n.localStore,e);Ip(n,r,null),bp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mr(n,i)}catch(i){await ni(i)}}async function x2(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(Q(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);Ip(r,e,n),bp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mr(r,i)}catch(i){await ni(i)}}async function R2(t,e){const n=U(t);si(n.remoteStore)||x("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=U(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.lc.get(r)||[];i.push(e),n.lc.set(r,i)}catch(r){const i=So(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function bp(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Ip(t,e,n){const r=U(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function ro(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||eT(t,r)})}function eT(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(ja(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ep(t))}function gf(t,e,n){for(const r of n)r instanceof QE?(t.ac.addReference(r.key,e),N2(t,r)):r instanceof XE?(x("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||eT(t,r.key)):$()}function N2(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.oc.add(r),Ep(t))}function Ep(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new L(me.fromString(e)),r=t.fc.next();t.cc.set(r,new I2(n)),t.uc=t.uc.insert(n,r),sh(t.remoteStore,new Mr(Wt(wo(n.path)),r,2,jt.at))}}async function mr(t,e,n){const r=U(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=up.Ci(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,c){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>w.forEach(c,h=>w.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>w.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!ri(l))throw l;x("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.qi=u.qi.insert(h,p)}}}(r.localStore,s))}async function D2(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await LE(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new A(_.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mr(n,r.ji)}}function O2(t,e){const n=U(t),r=n.cc.get(e);if(r&&r.nc)return ce().add(r.key);{let i=ce();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function P2(t,e){const n=U(t),r=await Qu(n.localStore,e.query,!0),i=e.view.tc(r);return n.isPrimaryClient&&gf(n,e.targetId,i.Xu),i}async function L2(t,e){const n=U(t);return VE(n.localStore,e).then(r=>mr(n,r))}async function M2(t,e,n,r){const i=U(t),s=await function(o,a){const c=U(o),u=U(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Tn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Eo(i.remoteStore):n==="acknowledged"||n==="rejected"?(Ip(i,e,r||null),bp(i,e),function(o,a){U(U(o).mutationQueue).An(a)}(i.localStore,e)):$(),await mr(i,s)):x("SyncEngine","Cannot apply mutation batch with id: "+e)}async function F2(t,e){const n=U(t);if(Tp(n),Sp(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await Wv(n,r.toArray());n.dc=!0,await pf(n.remoteStore,!0);for(const s of i)sh(n.remoteStore,s)}else if(e===!1&&n.dc!==!1){const r=[];let i=Promise.resolve();n.rc.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ro(n,o),to(n.localStore,o,!0))),ja(n.remoteStore,o)}),await i,await Wv(n,r),function(s){const o=U(s);o.cc.forEach((a,c)=>{ja(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new We(L.comparator)}(n),n.dc=!1,await pf(n.remoteStore,!1)}}async function Wv(t,e,n){const r=U(t),i=[],s=[];for(const o of e){let a;const c=r.rc.get(o);if(c&&c.length!==0){a=await eo(r.localStore,Wt(c[0]));for(const u of c){const l=r.ic.get(u),h=await P2(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await UE(r.localStore,o);a=await eo(r.localStore,u),await _p(r,tT(u),o,!1,a.resumeToken)}i.push(a)}return r.sc.Wo(s),i}function tT(t){return $0(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function U2(t){const e=U(t);return U(U(e.localStore).persistence).vi()}async function V2(t,e,n,r){const i=U(t);if(i.dc)return void x("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await VE(i.localStore,j0(s[0])),a=_c.createSynthesizedRemoteEventForCurrentChange(e,n==="current",it.EMPTY_BYTE_STRING);await mr(i,o,a);break}case"rejected":await to(i.localStore,e,!0),ro(i,e,r);break;default:$()}}async function B2(t,e,n){const r=Tp(t);if(r.dc){for(const i of e){if(r.rc.has(i)){x("SyncEngine","Adding an already active target "+i);continue}const s=await UE(r.localStore,i),o=await eo(r.localStore,s);await _p(r,tT(s),o.targetId,!1,o.resumeToken),sh(r.remoteStore,o)}for(const i of n)r.rc.has(i)&&await to(r.localStore,i,!1).then(()=>{ja(r.remoteStore,i),ro(r,i)}).catch(ni)}}function Tp(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=O2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=A2.bind(null,e),e.sc.Wo=y2.bind(null,e.eventManager),e.sc.wc=v2.bind(null,e.eventManager),e}function Sp(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=C2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=x2.bind(null,e),e}function $2(t,e,n){const r=U(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=U(h),p=Je(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",y=>f.Ns.getBundleMetadata(y,d.id)).then(y=>!!y&&y.createTime.compareTo(p)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(YE(a));const c=new _2(a,i.localStore,s.yt);let u=await s.mc();for(;u;){const h=await c.Fu(u);h&&o._updateProgress(h),u=await s.mc()}const l=await c.complete();return await mr(i,l.Lu,void 0),await function(h,d){const f=U(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.Ns.saveBundleMetadata(p,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Bu)}catch(a){return Ws("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class nT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ic(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return PE(this.persistence,new OE,e.initialUser,this.yt)}yc(e){return new DE(ih.Bs,this.yt)}gc(e){return new $E}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rT extends nT{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await Sp(this.Ac.syncEngine),await Eo(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return PE(this.persistence,new OE,e.initialUser,this.yt)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new NM(r,e.asyncQueue,n)}Ec(e,n){const r=new pL(n,this.persistence);return new mL(e.asyncQueue,r)}yc(e){const n=cp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new ap(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,qE(),_u(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new $E}}class q2 extends rT{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof id&&(this.sharedClientState.syncEngine={Fr:M2.bind(null,n),$r:V2.bind(null,n),Br:B2.bind(null,n),vi:U2.bind(null,n),Mr:L2.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await F2(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=qE();if(!id.C(n))throw new A(_.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=cp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new id(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class kp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=D2.bind(null,this.syncEngine),await pf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new g2}createDatastore(e){const n=Ic(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new e2(i));var i;return function(s,o,a,c){return new r2(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Kv(this.syncEngine,a,0),o=qv.C()?new qv:new XM,new s2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,u){const l=new E2(r,i,s,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);x("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Io(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e,n){if(!n)throw new A(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iT(t,e,n,r){if(e===!0&&r===!0)throw new A(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gv(t){if(!L.isDocumentKey(t))throw new A(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yv(t){if(L.isDocumentKey(t))throw new A(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function ve(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oh(t);throw new A(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function sT(t,e){if(e<=0)throw new A(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=new Map;class Xv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,iT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new nL;switch(n.type){case"gapi":const r=n.client;return new oL(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Qv.get(e);n&&(x("ComponentProvider","Removing Datastore"),Qv.delete(e),n.terminate())}(this),Promise.resolve()}}function j2(t,e,n,r={}){var i;const s=(t=ve(t,Tc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ws("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ct.MOCK_USER;else{o=ob(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new A(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ct(c)}t._authCredentials=new rL(new b0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}}class It{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new It(this.firestore,e,this._query)}}class Bn extends It{constructor(e,n,r){super(e,n,wo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new L(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function oT(t,e,...n){if(t=H(t),Ap("collection","path",e),t instanceof Tc){const r=me.fromString(e,...n);return Yv(r),new Bn(t,null,r)}{if(!(t instanceof Oe||t instanceof Bn))throw new A(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Yv(r),new Bn(t.firestore,null,r)}}function z2(t,e){if(t=ve(t,Tc),Ap("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new A(_.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new It(t,null,function(n){return new dr(me.emptyPath(),n)}(e))}function el(t,e,...n){if(t=H(t),arguments.length===1&&(e=I0.R()),Ap("doc","path",e),t instanceof Tc){const r=me.fromString(e,...n);return Gv(r),new Oe(t,null,new L(r))}{if(!(t instanceof Oe||t instanceof Bn))throw new A(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Gv(r),new Oe(t.firestore,t instanceof Bn?t.converter:null,new L(r))}}function aT(t,e){return t=H(t),e=H(e),(t instanceof Oe||t instanceof Bn)&&(e instanceof Oe||e instanceof Bn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function cT(t,e){return t=H(t),e=H(e),t instanceof It&&e instanceof It&&t.firestore===e.firestore&&yc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Qe("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n){this.Pc=e,this.yt=n,this.metadata=new ut,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const i=await this.Cc(r);return new w2(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new A(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=U(r),o=$a(s.yt)+"/documents",a={documents:i.map(h=>Ba(s.yt,h))},c=await s._o("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=WL(s.yt,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());Q(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new bo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new Jm(i,this.precondition(i)))}),await async function(n,r){const i=U(n),s=$a(i.yt)+"/documents",o={writes:r.map(a=>qa(i.yt,a))};await i.ao("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw $();n=J.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new A(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(J.min())?Fe.exists(!1):Fe.updateTime(n):Fe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(J.min()))throw new A(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Fe.updateTime(n)}return Fe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.kc=r.maxAttempts,this.xo=new hp(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new K2(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!pc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!eE(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=I0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=So(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uT(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await LE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function lT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Cp(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>jv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>jv(e.remoteStore,s)),t.onlineComponents=e}async function Cp(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await uT(t,new nT)),t.offlineComponents}async function ch(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await lT(t,new kp)),t.onlineComponents}function hT(t){return Cp(t).then(e=>e.persistence)}function xp(t){return Cp(t).then(e=>e.localStore)}function dT(t){return ch(t).then(e=>e.remoteStore)}function Rp(t){return ch(t).then(e=>e.syncEngine)}function Y2(t){return ch(t).then(e=>e.datastore)}async function io(t){const e=await ch(t),n=e.eventManager;return n.onListen=T2.bind(null,e.syncEngine),n.onUnlisten=S2.bind(null,e.syncEngine),n}function Q2(t){return t.asyncQueue.enqueue(async()=>{const e=await hT(t),n=await dT(t);return e.setNetworkEnabled(!0),function(r){const i=U(r);return i._u.delete(0),Ec(i)}(n)})}function X2(t){return t.asyncQueue.enqueue(async()=>{const e=await hT(t),n=await dT(t);return e.setNetworkEnabled(!1),async function(r){const i=U(r);i._u.add(0),await Io(i),i.gu.set("Offline")}(n)})}function J2(t,e){const n=new ut;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=U(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new A(_.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=So(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await xp(t),e,n)),n.promise}function fT(t,e,n={}){const r=new ut;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new ah({next:h=>{s.enqueueAndForget(()=>yp(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new A(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new A(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new wp(wo(o.path),u,{includeMetadataChanges:!0,Nu:!0});return gp(i,l)}(await io(t),t.asyncQueue,e,n,r)),r.promise}function Z2(t,e){const n=new ut;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Qu(r,i,!0),a=new JE(i,o.Hi),c=a.Wu(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=So(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await xp(t),e,n)),n.promise}function mT(t,e,n={}){const r=new ut;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new ah({next:h=>{s.enqueueAndForget(()=>yp(i,l)),h.fromCache&&a.source==="server"?c.reject(new A(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new wp(o,u,{includeMetadataChanges:!0,Nu:!0});return gp(i,l)}(await io(t),t.asyncQueue,e,n,r)),r.promise}function eF(t,e){const n=new ah(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).Ru.add(i),i.next()}(await io(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).Ru.delete(i)}(await io(t),n))}}function tF(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new H2(c,u)}(function(c,u){if(c instanceof Uint8Array)return Jv(c,u);if(c instanceof ArrayBuffer)return Jv(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Ic(e));t.asyncQueue.enqueueAndForget(async()=>{$2(await Rp(t),i,r)})}function nF(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=U(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await xp(t),e))}class rF{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new hp(this,"async_queue_retry"),this.Wc=()=>{const n=_u();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=_u();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=_u();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new ut;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ri(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Qe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=pp.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&$()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function yf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class iF{constructor(){this._progressObserver={},this._taskCompletionResolver=new ut,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sF=-1;class Ge extends Tc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new rF,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pT(this),this._firestoreClient.terminate()}}function mt(t){return t._firestoreClient||pT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pT(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new gL(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new G2(t._authCredentials,t._appCheckCredentials,t._queue,r)}function oF(t,e){yT(t=ve(t,Ge));const n=mt(t),r=t._freezeSettings(),i=new kp;return gT(n,i,new rT(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function aF(t){yT(t=ve(t,Ge));const e=mt(t),n=t._freezeSettings(),r=new kp;return gT(e,r,new q2(r,n.cacheSizeBytes))}function gT(t,e,n){const r=new ut;return t.asyncQueue.enqueue(async()=>{try{await uT(t,n),await lT(t,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===_.FAILED_PRECONDITION||o.code===_.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;Ws("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function cF(t){if(t._initialized&&!t._terminated)throw new A(_.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ut;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!gn.C())return Promise.resolve();const r=n+"main";await gn.delete(r)}(cp(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function uF(t){return function(e){const n=new ut;return e.asyncQueue.enqueueAndForget(async()=>R2(await Rp(e),n)),n.promise}(mt(t=ve(t,Ge)))}function lF(t){return Q2(mt(t=ve(t,Ge)))}function hF(t){return X2(mt(t=ve(t,Ge)))}function dF(t,e){const n=mt(t=ve(t,Ge)),r=new iF;return tF(n,t._databaseId,e,r),r}function fF(t,e){return nF(mt(t=ve(t,Ge)),e).then(n=>n?new It(t,null,n.query):null)}function yT(t){if(t._initialized||t._terminated)throw new A(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(it.fromBase64String(e))}catch(n){throw new A(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hn(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mF=/^__.*__$/;class pF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new _o(e,this.data,n,this.fieldTransforms)}}class vT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class lh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new lh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return tl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(wT(this.sa)&&mF.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class gF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Ic(e)}da(e,n,r,i=!1){return new lh({sa:e,methodName:n,fa:r,path:Xe.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function us(t){const e=t._freezeSettings(),n=Ic(t._databaseId);return new gF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hh(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);Pp("Data must be an object, but it was:",o,r);const a=IT(r,o);let c,u;if(s.merge)c=new zt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=vf(e,h,n);if(!o.contains(d))throw new A(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);TT(l,d)||l.push(d)}c=new zt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new pF(new yt(a),c,u)}class Sc extends cs{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Sc}}function _T(t,e,n){return new lh({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class Np extends cs{_toFieldTransform(e){return new wc(e.path,new Xs)}isEqual(e){return e instanceof Np}}class yF extends cs{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=_T(this,e,!0),r=this._a.map(s=>ls(s,n)),i=new Gi(r);return new wc(e.path,i)}isEqual(e){return this===e}}class vF extends cs{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=_T(this,e,!0),r=this._a.map(s=>ls(s,n)),i=new Yi(r);return new wc(e.path,i)}isEqual(e){return this===e}}class wF extends cs{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new Js(e.yt,W0(e.yt,this.wa));return new wc(e.path,n)}isEqual(e){return this===e}}function Dp(t,e,n,r){const i=t.da(1,e,n);Pp("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();as(r,(c,u)=>{const l=Lp(e,c,n);u=H(u);const h=i.ca(l);if(u instanceof Sc)s.push(l);else{const d=ls(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new zt(s);return new vT(o,a,i.fieldTransforms)}function Op(t,e,n,r,i,s){const o=t.da(1,e,n),a=[vf(e,r,n)],c=[i];if(s.length%2!=0)throw new A(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(vf(e,s[d])),c.push(s[d+1]);const u=[],l=yt.empty();for(let d=a.length-1;d>=0;--d)if(!TT(u,a[d])){const f=a[d];let p=c[d];p=H(p);const y=o.ca(f);if(p instanceof Sc)u.push(f);else{const I=ls(p,y);I!=null&&(u.push(f),l.set(f,I))}}const h=new zt(u);return new vT(l,h,o.fieldTransforms)}function bT(t,e,n,r=!1){return ls(n,t.da(r?4:3,e))}function ls(t,e){if(ET(t=H(t)))return Pp("Unsupported field value:",e,t),IT(t,e);if(t instanceof cs)return function(n,r){if(!wT(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ls(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=H(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return W0(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ue.fromDate(n);return{timestampValue:Zs(r.yt,i)}}if(n instanceof Ue){const i=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Zs(r.yt,i)}}if(n instanceof uh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hn)return{bytesValue:aE(r.yt,n._byteString)};if(n instanceof Oe){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${oh(n)}`)}(t,e)}function IT(t,e){const n={};return x0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(t,(r,i)=>{const s=ls(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ET(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof uh||t instanceof Hn||t instanceof Oe||t instanceof cs)}function Pp(t,e,n){if(!ET(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=oh(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function vf(t,e,n){if((e=H(e))instanceof Wr)return e._internalPath;if(typeof e=="string")return Lp(t,e);throw tl("Field path arguments must be of type string or ",t,!1,void 0,n)}const _F=new RegExp("[~\\*/\\[\\]]");function Lp(t,e,n){if(e.search(_F)>=0)throw tl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wr(...e.split("."))._internalPath}catch{throw tl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new A(_.INVALID_ARGUMENT,a+t+c)}function TT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bF extends za{data(){return super.data()}}function dh(t,e){return typeof e=="string"?Lp(t,e):e instanceof Wr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mp{}class kc extends Mp{}function Sr(t,e,...n){let r=[];e instanceof Mp&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Fp).length,o=i.filter(a=>a instanceof fh).length;if(s>1||s>0&&o>0)throw new A(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class fh extends kc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fh(e,n,r)}_apply(e){const n=this._parse(e);return AT(e._query,n),new It(e.firestore,e.converter,of(e._query,n))}_parse(e){const n=us(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new A(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ew(l,u);const d=[];for(const f of l)d.push(Zv(a,i,f));h={arrayValue:{values:d}}}else h=Zv(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ew(l,u),h=bT(o,s,l,u==="in"||u==="not-in");return de.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function IF(t,e,n){const r=e,i=dh("where",t);return fh._create(i,r,n)}class Fp extends Mp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Fp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ie.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)AT(s,a),s=of(s,a)}(e._query,n),new It(e.firestore,e.converter,of(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Up extends kc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Up(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new A(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new A(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ms(i,s);return function(a,c){if(Qm(a)===null){const u=Jl(a);u!==null&&CT(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new It(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new dr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function EF(t,e="asc"){const n=e,r=dh("orderBy",t);return Up._create(r,n)}class mh extends kc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new mh(e,n,r)}_apply(e){return new It(e.firestore,e.converter,Ku(e._query,this._limit,this._limitType))}}function TF(t){return sT("limit",t),mh._create("limit",t,"F")}function SF(t){return sT("limitToLast",t),mh._create("limitToLast",t,"L")}class ph extends kc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new ph(e,n,r)}_apply(e){const n=kT(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(r,i){return new dr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function kF(...t){return ph._create("startAt",t,!0)}function AF(...t){return ph._create("startAfter",t,!1)}class gh extends kc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new gh(e,n,r)}_apply(e){const n=kT(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(r,i){return new dr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function CF(...t){return gh._create("endBefore",t,!1)}function xF(...t){return gh._create("endAt",t,!0)}function kT(t,e,n,r){if(n[0]=H(n[0]),n[0]instanceof za)return function(i,s,o,a,c){if(!a)throw new A(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Vi(i))if(l.field.isKeyField())u.push(Ki(s,a.key));else{const h=a.data.field(l.field);if(Gm(h))throw new A(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new A(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Hr(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=us(t.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new A(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const p=u[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new A(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!Xm(s)&&p.indexOf("/")!==-1)throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const y=s.path.child(me.fromString(p));if(!L.isDocumentKey(y))throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const I=new L(y);d.push(Ki(o,I))}else{const y=bT(a,c,p);d.push(y)}}return new Hr(d,l)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Zv(t,e,n){if(typeof(n=H(n))=="string"){if(n==="")throw new A(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xm(e)&&n.indexOf("/")!==-1)throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!L.isDocumentKey(r))throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ki(t,new L(r))}if(n instanceof Oe)return Ki(t,n._key);throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(n)}.`)}function ew(t,e){if(!Array.isArray(t)||t.length===0)throw new A(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new A(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function AT(t,e){if(e.isInequality()){const r=Jl(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Qm(t);s!==null&&CT(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function CT(t,e,n){if(!n.isEqual(e))throw new A(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Vp{convertValue(e,n="none"){switch(Hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const r={};return as(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new uh(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=N0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fa(e));default:return null}}convertTimestamp(e){const n=jr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);Q(yE(r));const i=new qr(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Qe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class RF extends Vp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sr extends za{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new la(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class la extends sr{data(e={}){return super.data(e)}}class Gr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new xi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new la(this._firestore,this._userDataWriter,r.key,r,new xi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new la(r._firestore,r._userDataWriter,o.doc.key,o.doc,new xi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new la(r._firestore,r._userDataWriter,o.doc.key,o.doc,new xi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:NF(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function NF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function xT(t,e){return t instanceof sr&&e instanceof sr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Gr&&e instanceof Gr&&t._firestore===e._firestore&&cT(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DF(t){t=ve(t,Oe);const e=ve(t.firestore,Ge);return fT(mt(e),t._key).then(n=>Bp(e,t,n))}class hs extends Vp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,n)}}function OF(t){t=ve(t,Oe);const e=ve(t.firestore,Ge),n=mt(e),r=new hs(e);return J2(n,t._key).then(i=>new sr(e,r,t._key,i,new xi(i!==null&&i.hasLocalMutations,!0),t.converter))}function PF(t){t=ve(t,Oe);const e=ve(t.firestore,Ge);return fT(mt(e),t._key,{source:"server"}).then(n=>Bp(e,t,n))}function LF(t){t=ve(t,It);const e=ve(t.firestore,Ge),n=mt(e),r=new hs(e);return ST(t._query),mT(n,t._query).then(i=>new Gr(e,r,t,i))}function MF(t){t=ve(t,It);const e=ve(t.firestore,Ge),n=mt(e),r=new hs(e);return Z2(n,t._query).then(i=>new Gr(e,r,t,i))}function FF(t){t=ve(t,It);const e=ve(t.firestore,Ge),n=mt(e),r=new hs(e);return mT(n,t._query,{source:"server"}).then(i=>new Gr(e,r,t,i))}function tw(t,e,n){t=ve(t,Oe);const r=ve(t.firestore,Ge),i=yh(t.converter,e,n);return Ac(r,[hh(us(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Fe.none())])}function nw(t,e,n,...r){t=ve(t,Oe);const i=ve(t.firestore,Ge),s=us(i);let o;return o=typeof(e=H(e))=="string"||e instanceof Wr?Op(s,"updateDoc",t._key,e,n,r):Dp(s,"updateDoc",t._key,e),Ac(i,[o.toMutation(t._key,Fe.exists(!0))])}function UF(t){return Ac(ve(t.firestore,Ge),[new bo(t._key,Fe.none())])}function VF(t,e){const n=ve(t.firestore,Ge),r=el(t),i=yh(t.converter,e);return Ac(n,[hh(us(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Fe.exists(!1))]).then(()=>r)}function RT(t,...e){var n,r,i;t=H(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||yf(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(yf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof Oe)u=ve(t.firestore,Ge),l=wo(t._key.path),c={next:h=>{e[o]&&e[o](Bp(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ve(t,It);u=ve(h.firestore,Ge),l=h._query;const d=new hs(u);c={next:f=>{e[o]&&e[o](new Gr(u,d,h,f))},error:e[o+1],complete:e[o+2]},ST(t._query)}return function(h,d,f,p){const y=new ah(p),I=new wp(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>gp(await io(h),I)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>yp(await io(h),I))}}(mt(u),l,a,c)}function BF(t,e){return eF(mt(t=ve(t,Ge)),yf(e)?e:{next:e})}function Ac(t,e){return function(n,r){const i=new ut;return n.asyncQueue.enqueueAndForget(async()=>k2(await Rp(n),r,i)),i.promise}(mt(t),e)}function Bp(t,e,n){const r=n.docs.get(e._key),i=new hs(t);return new sr(t,i,e._key,r,new xi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $F={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=us(e)}set(e,n,r){this._verifyNotCommitted();const i=Rr(e,this._firestore),s=yh(i.converter,n,r),o=hh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Fe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Rr(e,this._firestore);let o;return o=typeof(n=H(n))=="string"||n instanceof Wr?Op(this._dataReader,"WriteBatch.update",s._key,n,r,i):Dp(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Fe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Rr(e,this._firestore);return this._mutations=this._mutations.concat(new bo(n._key,Fe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Rr(t,e){if((t=H(t)).firestore!==e)throw new A(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=us(e)}get(e){const n=Rr(e,this._firestore),r=new RF(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return $();const s=i[0];if(s.isFoundDocument())return new za(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new za(this._firestore,r,n._key,null,n.converter);throw $()})}set(e,n,r){const i=Rr(e,this._firestore),s=yh(i.converter,n,r),o=hh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Rr(e,this._firestore);let o;return o=typeof(n=H(n))=="string"||n instanceof Wr?Op(this._dataReader,"Transaction.update",s._key,n,r,i):Dp(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Rr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Rr(e,this._firestore),r=new hs(this._firestore);return super.get(e).then(i=>new sr(this._firestore,r,n._key,i._document,new xi(!1,!1),n.converter))}}function zF(t,e,n){t=ve(t,Ge);const r=Object.assign(Object.assign({},$F),n);return function(i){if(i.maxAttempts<1)throw new A(_.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new ut;return i.asyncQueue.enqueueAndForget(async()=>{const c=await Y2(i);new W2(i.asyncQueue,c,o,s,a).run()}),a.promise}(mt(t),i=>e(new jF(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HF(){return new Sc("deleteField")}function KF(){return new Np("serverTimestamp")}function WF(...t){return new yF("arrayUnion",t)}function GF(...t){return new vF("arrayRemove",t)}function YF(t){return new wF("increment",t)}(function(t,e=!0){(function(n){vo=n})(Jr),nr(new an("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ge(new iL(n.getProvider("auth-internal")),new cL(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),on(Zy,"3.8.3",t),on(Zy,"3.8.3","esm2017")})();const QF="@firebase/firestore-compat",XF="0.3.3";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new A("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(){if(typeof Uint8Array>"u")throw new A("unimplemented","Uint8Arrays are not available in this environment.")}function iw(){if(!yL())throw new A("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ha{constructor(e){this._delegate=e}static fromBase64String(e){return iw(),new Ha(Hn.fromBase64String(e))}static fromUint8Array(e){return rw(),new Ha(Hn.fromUint8Array(e))}toBase64(){return iw(),this._delegate.toBase64()}toUint8Array(){return rw(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t){return JF(t,["next","error","complete"])}function JF(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZF{enableIndexedDbPersistence(e,n){return oF(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return aF(e._delegate)}clearIndexedDbPersistence(e){return cF(e._delegate)}}class NT{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof qr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Ws("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){j2(this._delegate,e,n,r)}enableNetwork(){return lF(this._delegate)}disableNetwork(){return hF(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,iT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return uF(this._delegate)}onSnapshotsInSync(e){return BF(this._delegate,e)}get app(){if(!this._appCompat)throw new A("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new so(this,oT(this._delegate,e))}catch(n){throw Ot(n,"collection()","Firestore.collection()")}}doc(e){try{return new nn(this,el(this._delegate,e))}catch(n){throw Ot(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Dt(this,z2(this._delegate,e))}catch(n){throw Ot(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return zF(this._delegate,n=>e(new DT(this,n)))}batch(){return mt(this._delegate),new OT(new qF(this._delegate,e=>Ac(this._delegate,e)))}loadBundle(e){return dF(this._delegate,e)}namedQuery(e){return fF(this._delegate,e).then(n=>n?new Dt(this,n):null)}}class vh extends Vp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ha(new Hn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return nn.forKey(n,this.firestore,null)}}function eU(t){eL(t)}class DT{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new vh(e)}get(e){const n=Ri(e);return this._delegate.get(n).then(r=>new Ka(this._firestore,new sr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ri(e);return r?($p("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ri(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ri(e);return this._delegate.delete(n),this}}class OT{constructor(e){this._delegate=e}set(e,n,r){const i=Ri(e);return r?($p("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ri(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ri(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Zi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new la(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Wa(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Zi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Zi(e,new vh(e),n),i.set(n,s)),s}}Zi.INSTANCES=new WeakMap;class nn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new vh(e)}static forPath(e,n,r){if(e.length%2!==0)throw new A("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new nn(n,new Oe(n._delegate,r,new L(e)))}static forKey(e,n,r){return new nn(n,new Oe(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new so(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new so(this.firestore,oT(this._delegate,e))}catch(n){throw Ot(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=H(e),e instanceof Oe?aT(this._delegate,e):!1}set(e,n){n=$p("DocumentReference.set",n);try{return n?tw(this._delegate,e,n):tw(this._delegate,e)}catch(r){throw Ot(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?nw(this._delegate,e):nw(this._delegate,e,n,...r)}catch(i){throw Ot(i,"updateDoc()","DocumentReference.update()")}}delete(){return UF(this._delegate)}onSnapshot(...e){const n=PT(e),r=LT(e,i=>new Ka(this.firestore,new sr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return RT(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=OF(this._delegate):(e==null?void 0:e.source)==="server"?n=PF(this._delegate):n=DF(this._delegate),n.then(r=>new Ka(this.firestore,new sr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new nn(this.firestore,e?this._delegate.withConverter(Zi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ot(t,e,n){return t.message=t.message.replace(e,n),t}function PT(t){for(const e of t)if(typeof e=="object"&&!wf(e))return e;return{}}function LT(t,e){var n,r;let i;return wf(t[0])?i=t[0]:wf(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ka{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new nn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return xT(this._delegate,e._delegate)}}class Wa extends Ka{data(e){const n=this._delegate.data(e);return tL(n!==void 0),n}}class Dt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new vh(e)}where(e,n,r){try{return new Dt(this.firestore,Sr(this._delegate,IF(e,n,r)))}catch(i){throw Ot(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Dt(this.firestore,Sr(this._delegate,EF(e,n)))}catch(r){throw Ot(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Dt(this.firestore,Sr(this._delegate,TF(e)))}catch(n){throw Ot(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Dt(this.firestore,Sr(this._delegate,SF(e)))}catch(n){throw Ot(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Dt(this.firestore,Sr(this._delegate,kF(...e)))}catch(n){throw Ot(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Dt(this.firestore,Sr(this._delegate,AF(...e)))}catch(n){throw Ot(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Dt(this.firestore,Sr(this._delegate,CF(...e)))}catch(n){throw Ot(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Dt(this.firestore,Sr(this._delegate,xF(...e)))}catch(n){throw Ot(n,"endAt()","Query.endAt()")}}isEqual(e){return cT(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=MF(this._delegate):(e==null?void 0:e.source)==="server"?n=FF(this._delegate):n=LF(this._delegate),n.then(r=>new _f(this.firestore,new Gr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=PT(e),r=LT(e,i=>new _f(this.firestore,new Gr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return RT(this._delegate,n,r)}withConverter(e){return new Dt(this.firestore,e?this._delegate.withConverter(Zi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class tU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Wa(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class _f{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Dt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Wa(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new tU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Wa(this._firestore,r))})}isEqual(e){return xT(this._delegate,e._delegate)}}class so extends Dt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new nn(this.firestore,e):null}doc(e){try{return e===void 0?new nn(this.firestore,el(this._delegate)):new nn(this.firestore,el(this._delegate,e))}catch(n){throw Ot(n,"doc()","CollectionReference.doc()")}}add(e){return VF(this._delegate,e).then(n=>new nn(this.firestore,n))}isEqual(e){return aT(this._delegate,e._delegate)}withConverter(e){return new so(this.firestore,e?this._delegate.withConverter(Zi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ri(t){return ve(t,Oe)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(...e){this._delegate=new Wr(...e)}static documentId(){return new qp(Xe.keyField().canonicalString())}isEqual(e){return e=H(e),e instanceof Wr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this._delegate=e}static serverTimestamp(){const e=KF();return e._methodName="FieldValue.serverTimestamp",new Ti(e)}static delete(){const e=HF();return e._methodName="FieldValue.delete",new Ti(e)}static arrayUnion(...e){const n=WF(...e);return n._methodName="FieldValue.arrayUnion",new Ti(n)}static arrayRemove(...e){const n=GF(...e);return n._methodName="FieldValue.arrayRemove",new Ti(n)}static increment(e){const n=YF(e);return n._methodName="FieldValue.increment",new Ti(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nU={Firestore:NT,GeoPoint:uh,Timestamp:Ue,Blob:Ha,Transaction:DT,WriteBatch:OT,DocumentReference:nn,DocumentSnapshot:Ka,Query:Dt,QueryDocumentSnapshot:Wa,QuerySnapshot:_f,CollectionReference:so,FieldPath:qp,FieldValue:Ti,setLogLevel:eU,CACHE_SIZE_UNLIMITED:sF};function rU(t,e){t.INTERNAL.registerComponent(new an("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},nU)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iU(t){rU(t,(e,n)=>new NT(e,n,new ZF)),t.registerVersion(QF,XF)}iU(is);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="firebasestorage.googleapis.com",FT="storageBucket",sU=2*60*1e3,oU=10*60*1e3,aU=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends At{constructor(e,n,r=0){super(sd(e),`Firebase Storage: ${n} (${sd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Le;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Le||(Le={}));function sd(t){return"storage/"+t}function jp(){const t="An unknown error occurred, please check the error payload for server response.";return new je(Le.UNKNOWN,t)}function cU(t){return new je(Le.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function uU(t){return new je(Le.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je(Le.UNAUTHENTICATED,t)}function hU(){return new je(Le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function dU(t){return new je(Le.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function UT(){return new je(Le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VT(){return new je(Le.CANCELED,"User canceled the upload/download.")}function fU(t){return new je(Le.INVALID_URL,"Invalid URL '"+t+"'.")}function mU(t){return new je(Le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pU(){return new je(Le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+FT+"' property when initializing the app?")}function BT(){return new je(Le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gU(){return new je(Le.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function yU(){return new je(Le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vU(t){return new je(Le.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Us(t){return new je(Le.INVALID_ARGUMENT,t)}function $T(){return new je(Le.APP_DELETED,"The Firebase app was deleted.")}function qT(t){return new je(Le.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ha(t,e){return new je(Le.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function $o(t){throw new je(Le.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=kt.makeFromUrl(e,n)}catch{return new kt(e,"")}if(r.path==="")return r;throw mU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},y=n===MT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",v=new RegExp(`^https?://${y}/${i}/${I}`,"i"),E=[{regex:a,indices:c,postModify:s},{regex:f,indices:p,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<E.length;R++){const F=E[R],z=F.regex.exec(e);if(z){const ne=z[F.indices.bucket];let X=z[F.indices.path];X||(X=""),r=new kt(ne,X),F.postModify(r);break}}if(r==null)throw fU(e);return r}}class wU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _U(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...I){u||(u=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(f,c())},I)}function d(){s&&clearTimeout(s)}function f(I,...v){if(u){d();return}if(I){d(),l.call(null,I,...v);return}if(c()||o){d(),l.call(null,I,...v);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,h(E)}let p=!1;function y(I){p||(p=!0,d(),!u&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function bU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IU(t){return t!==void 0}function EU(t){return typeof t=="function"}function TU(t){return typeof t=="object"&&!Array.isArray(t)}function wh(t){return typeof t=="string"||t instanceof String}function sw(t){return zp()&&t instanceof Blob}function zp(){return typeof Blob<"u"&&!El()}function bf(t,e,n,r){if(r<e)throw Us(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Us(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bi||(Bi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SU{constructor(e,n,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Gc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Bi.NO_ERROR,c=s.getStatus();if(!a||zT(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===Bi.ABORT;r(!1,new Gc(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Gc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());IU(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=jp();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?$T():VT();o(c)}else{const c=UT();o(c)}};this.canceled_?n(!1,new Gc(!1,null,!0)):this.backoffId_=_U(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function kU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function AU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function CU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function RU(t,e,n,r,i,s,o=!0){const a=jT(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return CU(u,e),kU(u,n),AU(u,s),xU(u,r),new SU(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function DU(...t){const e=NU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(zp())return new Blob(t);throw new je(Le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function OU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PU(t){if(typeof atob>"u")throw vU("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class od{constructor(e,n){this.data=e,this.contentType=n||null}}function HT(t,e){switch(t){case rn.RAW:return new od(KT(e));case rn.BASE64:case rn.BASE64URL:return new od(WT(t,e));case rn.DATA_URL:return new od(MU(e),FU(e))}throw jp()}function KT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function LU(t){let e;try{e=decodeURIComponent(t)}catch{throw ha(rn.DATA_URL,"Malformed data URL.")}return KT(e)}function WT(t,e){switch(t){case rn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ha(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case rn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ha(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=PU(e)}catch(i){throw i.message.includes("polyfill")?i:ha(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class GT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ha(rn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=UU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function MU(t){const e=new GT(t);return e.base64?WT(rn.BASE64,e.rest):LU(e.rest)}function FU(t){return new GT(t).contentType}function UU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){let r=0,i="";sw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(sw(this.data_)){const r=this.data_,i=OU(r,e,n);return i===null?null:new Gn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Gn(r,!0)}}static getBlob(...e){if(zp()){const n=e.map(r=>r instanceof Gn?r.data_:r);return new Gn(DU.apply(null,n))}else{const n=e.map(o=>wh(o)?HT(rn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Gn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){let e;try{e=JSON.parse(t)}catch{return null}return TU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function YT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $U(t,e){return e}class Rt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||$U}}let Yc=null;function qU(t){return!wh(t)||t.length<2?t:YT(t)}function _h(){if(Yc)return Yc;const t=[];t.push(new Rt("bucket")),t.push(new Rt("generation")),t.push(new Rt("metageneration")),t.push(new Rt("name","fullPath",!0));function e(s,o){return qU(o)}const n=new Rt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Rt("size");return i.xform=r,t.push(i),t.push(new Rt("timeCreated")),t.push(new Rt("updated")),t.push(new Rt("md5Hash",null,!0)),t.push(new Rt("cacheControl",null,!0)),t.push(new Rt("contentDisposition",null,!0)),t.push(new Rt("contentEncoding",null,!0)),t.push(new Rt("contentLanguage",null,!0)),t.push(new Rt("contentType",null,!0)),t.push(new Rt("metadata","customMetadata",!0)),Yc=t,Yc}function jU(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new kt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function zU(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return jU(r,t),r}function QT(t,e,n){const r=Hp(e);return r===null?null:zU(t,r,n)}function HU(t,e,n,r){const i=Hp(e);if(i===null||!wh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=oi(d,n,r),p=jT({alt:"media",token:u});return f+p})[0]}function Kp(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="prefixes",aw="items";function KU(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[ow])for(const i of n[ow]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new kt(e,s));r.prefixes.push(o)}if(n[aw])for(const i of n[aw]){const s=t._makeStorageReference(new kt(e,i.name));r.items.push(s)}return r}function WU(t,e,n){const r=Hp(n);return r===null?null:KU(t,e,r)}class pr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t){if(!t)throw jp()}function bh(t,e){function n(r,i){const s=QT(t,i,e);return $n(s!==null),s}return n}function GU(t,e){function n(r,i){const s=WU(t,e,i);return $n(s!==null),s}return n}function YU(t,e){function n(r,i){const s=QT(t,i,e);return $n(s!==null),HU(s,i,t.host,t._protocol)}return n}function ko(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=hU():i=lU():n.getStatus()===402?i=uU(t.bucket):n.getStatus()===403?i=dU(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Ih(t){const e=ko(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=cU(t.path)),s.serverResponse=i.serverResponse,s}return n}function XT(t,e,n){const r=e.fullServerUrl(),i=oi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new pr(i,s,bh(t,n),o);return a.errorHandler=Ih(e),a}function QU(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=oi(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new pr(a,c,GU(t,e.bucket),u);return l.urlParams=s,l.errorHandler=ko(e),l}function XU(t,e,n){const r=e.fullServerUrl(),i=oi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new pr(i,s,YU(t,n),o);return a.errorHandler=Ih(e),a}function JU(t,e,n,r){const i=e.fullServerUrl(),s=oi(i,t.host,t._protocol),o="PATCH",a=Kp(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new pr(s,o,bh(t,r),u);return l.headers=c,l.body=a,l.errorHandler=Ih(e),l}function ZU(t,e){const n=e.fullServerUrl(),r=oi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(c,u){}const a=new pr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Ih(e),a}function eV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function JT(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=eV(null,e)),r}function tV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let R=0;R<2;R++)E=E+Math.random().toString().slice(2);return E}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=JT(e,r,i),l=Kp(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Gn.getBlob(h,r,d);if(f===null)throw BT();const p={name:u.fullPath},y=oi(s,t.host,t._protocol),I="POST",v=t.maxUploadRetryTime,b=new pr(y,I,bh(t,n),v);return b.urlParams=p,b.headers=o,b.body=f.uploadData(),b.errorHandler=ko(e),b}class nl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Wp(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{$n(!1)}return $n(!!n&&(e||["active"]).indexOf(n)!==-1),n}function nV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=JT(e,r,i),a={name:o.fullPath},c=oi(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Kp(o,n),d=t.maxUploadRetryTime;function f(y){Wp(y);let I;try{I=y.getResponseHeader("X-Goog-Upload-URL")}catch{$n(!1)}return $n(wh(I)),I}const p=new pr(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=ko(e),p}function rV(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=Wp(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{$n(!1)}h||$n(!1);const d=Number(h);return $n(!isNaN(d)),new nl(d,r.size(),l==="final")}const o="POST",a=t.maxUploadRetryTime,c=new pr(n,o,s,a);return c.headers=i,c.errorHandler=ko(e),c}const cw=256*1024;function iV(t,e,n,r,i,s,o,a){const c=new nl(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw gU();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";l===0?f="finalize":u===l?f="upload, finalize":f="upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},y=r.slice(h,d);if(y===null)throw BT();function I(R,F){const z=Wp(R,["active","final"]),ne=c.current+l,X=r.size();let oe;return z==="final"?oe=bh(e,s)(R,F):oe=null,new nl(ne,X,z==="final",oe)}const v="POST",b=e.maxUploadRetryTime,E=new pr(n,v,I,b);return E.headers=p,E.body=y.uploadData(),E.progressCallback=a||null,E.errorHandler=ko(t),E}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV={STATE_CHANGED:"state_changed"},Pt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ad(t){switch(t){case"running":case"pausing":case"canceling":return Pt.RUNNING;case"paused":return Pt.PAUSED;case"success":return Pt.SUCCESS;case"canceled":return Pt.CANCELED;case"error":return Pt.ERROR;default:return Pt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e,n,r){if(EU(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class aV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Bi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Bi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Bi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw $o("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $o("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $o("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $o("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $o("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class cV extends aV{initXhr(){this.xhr_.responseType="text"}}function On(){return new cV}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=_h(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Le.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(zT(i.status,[]))if(s)i=UT();else{this.sleepTime=Math.max(this.sleepTime*2,aU),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Le.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=nV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,On,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=rV(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,On,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=cw*this._chunkMultiplier,n=new nl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=iV(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,On,i,s,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){cw*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=XT(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,On,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=tV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,On,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=VT(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ad(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new oV(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ad(this._state)){case Pt.SUCCESS:vs(this._resolve.bind(null,this.snapshot))();break;case Pt.CANCELED:case Pt.ERROR:const n=this._reject;vs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ad(this._state)){case Pt.RUNNING:case Pt.PAUSED:e.next&&vs(e.next.bind(e,this.snapshot))();break;case Pt.SUCCESS:e.complete&&vs(e.complete.bind(e))();break;case Pt.CANCELED:case Pt.ERROR:e.error&&vs(e.error.bind(e,this._error))();break;default:e.error&&vs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this._service=e,n instanceof kt?this._location=n:this._location=kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new es(e,n)}get root(){const e=new kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return YT(this._location.path)}get storage(){return this._service}get parent(){const e=VU(this._location.path);if(e===null)return null;const n=new kt(this._location.bucket,e);return new es(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qT(e)}}function uV(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ZT(t,new Gn(e),n)}function lV(t){const e={prefixes:[],items:[]};return e1(t,e).then(()=>e)}async function e1(t,e,n){const i=await t1(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await e1(t,e,i.nextPageToken)}function t1(t,e){e!=null&&typeof e.maxResults=="number"&&bf("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=QU(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,On)}function hV(t){t._throwIfRoot("getMetadata");const e=XT(t.storage,t._location,_h());return t.storage.makeRequestWithTokens(e,On)}function dV(t,e){t._throwIfRoot("updateMetadata");const n=JU(t.storage,t._location,e,_h());return t.storage.makeRequestWithTokens(n,On)}function fV(t){t._throwIfRoot("getDownloadURL");const e=XU(t.storage,t._location,_h());return t.storage.makeRequestWithTokens(e,On).then(n=>{if(n===null)throw yU();return n})}function mV(t){t._throwIfRoot("deleteObject");const e=ZU(t.storage,t._location);return t.storage.makeRequestWithTokens(e,On)}function n1(t,e){const n=BU(t._location.path,e),r=new kt(t._location.bucket,n);return new es(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pV(t){return/^[A-Za-z]+:\/\//.test(t)}function gV(t,e){return new es(t,e)}function r1(t,e){if(t instanceof Gp){const n=t;if(n._bucket==null)throw pU();const r=new es(n,n._bucket);return e!=null?r1(r,e):r}else return e!==void 0?n1(t,e):t}function yV(t,e){if(e&&pV(e)){if(t instanceof Gp)return gV(t,e);throw Us("To use ref(service, url), the first argument must be a Storage instance.")}else return r1(t,e)}function uw(t,e){const n=e==null?void 0:e[FT];return n==null?null:kt.makeFromBucketSpec(n,t)}function vV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ob(i,t.app.options.projectId))}class Gp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=MT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sU,this._maxUploadRetryTime=oU,this._requests=new Set,i!=null?this._bucket=kt.makeFromBucketSpec(i,this._host):this._bucket=uw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=kt.makeFromBucketSpec(this._url,e):this._bucket=uw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new es(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new wU($T());{const o=RU(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const lw="@firebase/storage",hw="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wV="storage";function _V(t,e,n){return t=H(t),uV(t,e,n)}function bV(t){return t=H(t),hV(t)}function IV(t,e){return t=H(t),dV(t,e)}function EV(t,e){return t=H(t),t1(t,e)}function TV(t){return t=H(t),lV(t)}function SV(t){return t=H(t),fV(t)}function kV(t){return t=H(t),mV(t)}function dw(t,e){return t=H(t),yV(t,e)}function AV(t,e){return n1(t,e)}function CV(t,e,n,r={}){vV(t,e,n,r)}function xV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Gp(n,r,i,e,Jr)}function RV(){nr(new an(wV,xV,"PUBLIC").setMultipleInstances(!0)),on(lw,hw,""),on(lw,hw,"esm2017")}RV();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Qc(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Qc(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Qc(o,this,this._ref)):s={next:n.next?o=>n.next(new Qc(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class mw{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new er(e,this._service))}get items(){return this._delegate.items.map(e=>new er(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=AV(this._delegate,e);return new er(n,this.storage)}get root(){return new er(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new er(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new fw(_V(this._delegate,e,n),this)}putString(e,n=rn.RAW,r){this._throwIfRoot("putString");const i=HT(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new fw(new ZT(this._delegate,new Gn(i.data,!0),s),this)}listAll(){return TV(this._delegate).then(e=>new mw(e,this.storage))}list(e){return EV(this._delegate,e||void 0).then(n=>new mw(n,this.storage))}getMetadata(){return bV(this._delegate)}updateMetadata(e){return IV(this._delegate,e)}getDownloadURL(){return SV(this._delegate)}delete(){return this._throwIfRoot("delete"),kV(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw qT(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(pw(e))throw Us("ref() expected a child path but got a URL, use refFromURL instead.");return new er(dw(this._delegate,e),this)}refFromURL(e){if(!pw(e))throw Us("refFromURL() expected a full URL but got a child path, use ref() instead.");try{kt.makeFromUrl(e,this._delegate.host)}catch{throw Us("refFromUrl() expected a valid full URL but got an invalid one.")}return new er(dw(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){CV(this._delegate,e,n,r)}}function pw(t){return/^[A-Za-z]+:\/\//.test(t)}const NV="@firebase/storage-compat",DV="0.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OV="storage-compat";function PV(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new i1(n,r)}function LV(t){const e={TaskState:Pt,TaskEvent:sV,StringFormat:rn,Storage:i1,Reference:er};t.INTERNAL.registerComponent(new an(OV,PV,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(NV,DV)}LV(is);const Yp=is.initializeApp({apiKey:"AIzaSyAQ4qXhhppVXojxdxbCd2-9WGB6MKoKb5Q",authDomain:"web-siac-automatizacion.firebaseapp.com",projectId:"web-siac-automatizacion",storageBucket:"web-siac-automatizacion.appspot.com",messagingSenderId:"763456327866",appId:"1:763456327866:web:06f82ffd775da3d18f7283"}),t3=Yp.firestore(),MV=Yp.auth(),n3=Yp.storage().ref(),FV=()=>(t,e,n)=>{MV.onAuthStateChanged(function(r){if(!r)return n({path:"/admin_login?returnPath=sa_admin"});n()})},UV=_C({history:MA("/pikaro_page/"),routes:[{path:"/",name:"Door",component:()=>di(()=>import("./Building.10dfe25a.js"),["assets/Building.10dfe25a.js","assets/logo-pikaro.9f1a5d1f.js","assets/Building.e4452c71.css"])},{path:"/web",name:"home",component:()=>di(()=>import("./Home.b15eff1f.js"),["assets/Home.b15eff1f.js","assets/Formulario.vue_vue_type_style_index_0_scoped_552f8714_lang.4ea14264.js","assets/logo-pikaro.9f1a5d1f.js","assets/Formulario.31667e03.css","assets/Home.87131fd7.css"])},{path:"/works",name:"works",component:()=>di(()=>import("./Works.3323e82c.js"),["assets/Works.3323e82c.js","assets/Formulario.vue_vue_type_style_index_0_scoped_552f8714_lang.4ea14264.js","assets/logo-pikaro.9f1a5d1f.js","assets/Formulario.31667e03.css","assets/Works.b3a3489a.css","assets/Gears.d3e70e8d.css"])},{path:"/services",name:"services",component:()=>di(()=>import("./Services.6a1ff25d.js"),["assets/Services.6a1ff25d.js","assets/Formulario.vue_vue_type_style_index_0_scoped_552f8714_lang.4ea14264.js","assets/logo-pikaro.9f1a5d1f.js","assets/Formulario.31667e03.css","assets/Services.a1427207.css","assets/Gears.d3e70e8d.css"])},{path:"/about",name:"about",component:()=>di(()=>import("./About.66a868ec.js"),["assets/About.66a868ec.js","assets/Formulario.vue_vue_type_style_index_0_scoped_552f8714_lang.4ea14264.js","assets/logo-pikaro.9f1a5d1f.js","assets/Formulario.31667e03.css","assets/About.676575dc.css","assets/Gears.d3e70e8d.css"])},{path:"/admin_login",name:"login",component:()=>di(()=>import("./Login.01933a28.js"),["assets/Login.01933a28.js","assets/Login.e1620305.css"])},{path:"/sa_admin",name:"admin",component:()=>di(()=>import("./Admin.5c4f5b9c.js"),["assets/Admin.5c4f5b9c.js","assets/Admin.aee69300.css"]),beforeEnter:FV()}]});function gw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gw(Object(n),!0).forEach(function(r){st(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function rl(t){return rl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rl(t)}function VV(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function BV(t,e,n){return e&&yw(t.prototype,e),n&&yw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function st(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qp(t,e){return qV(t)||zV(t,e)||s1(t,e)||KV()}function Cc(t){return $V(t)||jV(t)||s1(t)||HV()}function $V(t){if(Array.isArray(t))return If(t)}function qV(t){if(Array.isArray(t))return t}function jV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zV(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function s1(t,e){if(!!t){if(typeof t=="string")return If(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return If(t,e)}}function If(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function HV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vw=function(){},Xp={},o1={},a1=null,c1={mark:vw,measure:vw};try{typeof window<"u"&&(Xp=window),typeof document<"u"&&(o1=document),typeof MutationObserver<"u"&&(a1=MutationObserver),typeof performance<"u"&&(c1=performance)}catch{}var WV=Xp.navigator||{},ww=WV.userAgent,_w=ww===void 0?"":ww,Yr=Xp,De=o1,bw=a1,Xc=c1;Yr.document;var gr=!!De.documentElement&&!!De.head&&typeof De.addEventListener=="function"&&typeof De.createElement=="function",u1=~_w.indexOf("MSIE")||~_w.indexOf("Trident/"),Jc,Zc,eu,tu,nu,or="___FONT_AWESOME___",Ef=16,l1="fa",h1="svg-inline--fa",ts="data-fa-i2svg",Tf="data-fa-pseudo-element",GV="data-fa-pseudo-element-pending",Jp="data-prefix",Zp="data-icon",Iw="fontawesome-i2svg",YV="async",QV=["HTML","HEAD","STYLE","SCRIPT"],d1=function(){try{return!0}catch{return!1}}(),Re="classic",He="sharp",eg=[Re,He];function xc(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Re]}})}var Ga=xc((Jc={},st(Jc,Re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),st(Jc,He,{fa:"solid",fass:"solid","fa-solid":"solid"}),Jc)),Ya=xc((Zc={},st(Zc,Re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),st(Zc,He,{solid:"fass"}),Zc)),Qa=xc((eu={},st(eu,Re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),st(eu,He,{fass:"fa-solid"}),eu)),XV=xc((tu={},st(tu,Re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),st(tu,He,{"fa-solid":"fass"}),tu)),JV=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,f1="fa-layers-text",ZV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,eB=xc((nu={},st(nu,Re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),st(nu,He,{900:"fass"}),nu)),m1=[1,2,3,4,5,6,7,8,9,10],tB=m1.concat([11,12,13,14,15,16,17,18,19,20]),nB=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ni={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xa=new Set;Object.keys(Ya[Re]).map(Xa.add.bind(Xa));Object.keys(Ya[He]).map(Xa.add.bind(Xa));var rB=[].concat(eg,Cc(Xa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ni.GROUP,Ni.SWAP_OPACITY,Ni.PRIMARY,Ni.SECONDARY]).concat(m1.map(function(t){return"".concat(t,"x")})).concat(tB.map(function(t){return"w-".concat(t)})),da=Yr.FontAwesomeConfig||{};function iB(t){var e=De.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sB(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(De&&typeof De.querySelector=="function"){var oB=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];oB.forEach(function(t){var e=Qp(t,2),n=e[0],r=e[1],i=sB(iB(n));i!=null&&(da[r]=i)})}var p1={styleDefault:"solid",familyDefault:"classic",cssPrefix:l1,replacementClass:h1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};da.familyPrefix&&(da.cssPrefix=da.familyPrefix);var oo=j(j({},p1),da);oo.autoReplaceSvg||(oo.observeMutations=!1);var G={};Object.keys(p1).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){oo[t]=n,fa.forEach(function(r){return r(G)})},get:function(){return oo[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){oo.cssPrefix=e,fa.forEach(function(n){return n(G)})},get:function(){return oo.cssPrefix}});Yr.FontAwesomeConfig=G;var fa=[];function aB(t){return fa.push(t),function(){fa.splice(fa.indexOf(t),1)}}var kr=Ef,Fn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cB(t){if(!(!t||!gr)){var e=De.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=De.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return De.head.insertBefore(e,r),t}}var uB="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ja(){for(var t=12,e="";t-- >0;)e+=uB[Math.random()*62|0];return e}function Ao(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function tg(t){return t.classList?Ao(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function g1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lB(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(g1(t[n]),'" ')},"").trim()}function Eh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ng(t){return t.size!==Fn.size||t.x!==Fn.x||t.y!==Fn.y||t.rotate!==Fn.rotate||t.flipX||t.flipY}function hB(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function dB(t){var e=t.transform,n=t.width,r=n===void 0?Ef:n,i=t.height,s=i===void 0?Ef:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&u1?c+="translate(".concat(e.x/kr-r/2,"em, ").concat(e.y/kr-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/kr,"em), calc(-50% + ").concat(e.y/kr,"em)) "):c+="translate(".concat(e.x/kr,"em, ").concat(e.y/kr,"em) "),c+="scale(".concat(e.size/kr*(e.flipX?-1:1),", ").concat(e.size/kr*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var fB=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function y1(){var t=l1,e=h1,n=G.cssPrefix,r=G.replacementClass,i=fB;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Ew=!1;function cd(){G.autoAddCss&&!Ew&&(cB(y1()),Ew=!0)}var mB={mixout:function(){return{dom:{css:y1,insertCss:cd}}},hooks:function(){return{beforeDOMElementCreation:function(){cd()},beforeI2svg:function(){cd()}}}},ar=Yr||{};ar[or]||(ar[or]={});ar[or].styles||(ar[or].styles={});ar[or].hooks||(ar[or].hooks={});ar[or].shims||(ar[or].shims=[]);var yn=ar[or],v1=[],pB=function t(){De.removeEventListener("DOMContentLoaded",t),il=1,v1.map(function(e){return e()})},il=!1;gr&&(il=(De.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(De.readyState),il||De.addEventListener("DOMContentLoaded",pB));function gB(t){!gr||(il?setTimeout(t,0):v1.push(t))}function Rc(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?g1(t):"<".concat(e," ").concat(lB(r),">").concat(s.map(Rc).join(""),"</").concat(e,">")}function Tw(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yB=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ud=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?yB(n,i):n,c,u,l;for(r===void 0?(c=1,l=e[s[0]]):(c=0,l=r);c<o;c++)u=s[c],l=a(l,e[u],u,e);return l};function vB(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Sf(t){var e=vB(t);return e.length===1?e[0].toString(16):null}function wB(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Sw(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function kf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Sw(e);typeof yn.hooks.addPack=="function"&&!i?yn.hooks.addPack(t,Sw(e)):yn.styles[t]=j(j({},yn.styles[t]||{}),s),t==="fas"&&kf("fa",e)}var ru,iu,su,ks=yn.styles,_B=yn.shims,bB=(ru={},st(ru,Re,Object.values(Qa[Re])),st(ru,He,Object.values(Qa[He])),ru),rg=null,w1={},_1={},b1={},I1={},E1={},IB=(iu={},st(iu,Re,Object.keys(Ga[Re])),st(iu,He,Object.keys(Ga[He])),iu);function EB(t){return~rB.indexOf(t)}function TB(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!EB(i)?i:null}var T1=function(){var e=function(s){return ud(ks,function(o,a,c){return o[c]=ud(a,s,{}),o},{})};w1=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),_1=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),E1=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in ks||G.autoFetchSvg,r=ud(_B,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});b1=r.names,I1=r.unicodes,rg=Th(G.styleDefault,{family:G.familyDefault})};aB(function(t){rg=Th(t.styleDefault,{family:G.familyDefault})});T1();function ig(t,e){return(w1[t]||{})[e]}function SB(t,e){return(_1[t]||{})[e]}function Di(t,e){return(E1[t]||{})[e]}function S1(t){return b1[t]||{prefix:null,iconName:null}}function kB(t){var e=I1[t],n=ig("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qr(){return rg}var sg=function(){return{prefix:null,iconName:null,rest:[]}};function Th(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Re:n,i=Ga[r][t],s=Ya[r][t]||Ya[r][i],o=t in yn.styles?t:null;return s||o||null}var kw=(su={},st(su,Re,Object.keys(Qa[Re])),st(su,He,Object.keys(Qa[He])),su);function Sh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},st(e,Re,"".concat(G.cssPrefix,"-").concat(Re)),st(e,He,"".concat(G.cssPrefix,"-").concat(He)),e),o=null,a=Re;(t.includes(s[Re])||t.some(function(u){return kw[Re].includes(u)}))&&(a=Re),(t.includes(s[He])||t.some(function(u){return kw[He].includes(u)}))&&(a=He);var c=t.reduce(function(u,l){var h=TB(G.cssPrefix,l);if(ks[l]?(l=bB[a].includes(l)?XV[a][l]:l,o=l,u.prefix=l):IB[a].indexOf(l)>-1?(o=l,u.prefix=Th(l,{family:a})):h?u.iconName=h:l!==G.replacementClass&&l!==s[Re]&&l!==s[He]&&u.rest.push(l),!i&&u.prefix&&u.iconName){var d=o==="fa"?S1(u.iconName):{},f=Di(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||f||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!ks.far&&ks.fas&&!G.autoFetchSvg&&(u.prefix="fas")}return u},sg());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===He&&(ks.fass||G.autoFetchSvg)&&(c.prefix="fass",c.iconName=Di(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Qr()||"fas"),c}var AB=function(){function t(){VV(this,t),this.definitions={}}return BV(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=j(j({},n.definitions[a]||{}),o[a]),kf(a,o[a]);var c=Qa[Re][a];c&&kf(c,o[a]),T1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,u=o.icon,l=u[2];n[a]||(n[a]={}),l.length>0&&l.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][c]=u}),n}}]),t}(),Aw=[],As={},Vs={},CB=Object.keys(Vs);function xB(t,e){var n=e.mixoutsTo;return Aw=t,As={},Object.keys(Vs).forEach(function(r){CB.indexOf(r)===-1&&delete Vs[r]}),Aw.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),rl(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){As[o]||(As[o]=[]),As[o].push(s[o])})}r.provides&&r.provides(Vs)}),n}function Af(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=As[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ns(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=As[t]||[];i.forEach(function(s){s.apply(null,n)})}function cr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Vs[t]?Vs[t].apply(null,e):void 0}function Cf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Qr();if(!!e)return e=Di(n,e)||e,Tw(k1.definitions,n,e)||Tw(yn.styles,n,e)}var k1=new AB,RB=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,ns("noAuto")},NB={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return gr?(ns("beforeI2svg",e),cr("pseudoElements2svg",e),cr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,gB(function(){OB({autoReplaceSvgRoot:n}),ns("watch",e)})}},DB={icon:function(e){if(e===null)return null;if(rl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Di(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Th(e[0]);return{prefix:r,iconName:Di(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(JV))){var i=Sh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Qr(),iconName:Di(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Qr();return{prefix:s,iconName:Di(s,e)||e}}}},en={noAuto:RB,config:G,dom:NB,parse:DB,library:k1,findIconDefinition:Cf,toHtml:Rc},OB=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?De:n;(Object.keys(yn.styles).length>0||G.autoFetchSvg)&&gr&&G.autoReplaceSvg&&en.dom.i2svg({node:r})};function kh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Rc(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!gr){var r=De.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function PB(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(ng(o)&&n.found&&!r.found){var a=n.width,c=n.height,u={x:a/c/2,y:.5};i.style=Eh(j(j({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function LB(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},i),{},{id:o}),children:r}]}]}function og(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,u=t.maskId,l=t.titleId,h=t.extra,d=t.watchable,f=d===void 0?!1:d,p=r.found?r:n,y=p.width,I=p.height,v=i==="fak",b=[G.replacementClass,s?"".concat(G.cssPrefix,"-").concat(s):""].filter(function(oe){return h.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(h.classes).join(" "),E={children:[],attributes:j(j({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:b,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(I)})},R=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/I*16*.0625,"em")}:{};f&&(E.attributes[ts]=""),c&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(l||Ja())},children:[c]}),delete E.attributes.title);var F=j(j({},E),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:j(j({},R),h.styles)}),z=r.found&&n.found?cr("generateAbstractMask",F)||{children:[],attributes:{}}:cr("generateAbstractIcon",F)||{children:[],attributes:{}},ne=z.children,X=z.attributes;return F.children=ne,F.attributes=X,a?LB(F):PB(F)}function Cw(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,u=j(j(j({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(u[ts]="");var l=j({},o.styles);ng(i)&&(l.transform=dB({transform:i,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);var h=Eh(l);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function MB(t){var e=t.content,n=t.title,r=t.extra,i=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Eh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ld=yn.styles;function xf(t){var e=t[0],n=t[1],r=t.slice(4),i=Qp(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(Ni.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Ni.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Ni.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var FB={found:!1,width:512,height:512};function UB(t,e){!d1&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rf(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=Qr()),new Promise(function(r,i){if(cr("missingIconAbstract"),n==="fa"){var s=S1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ld[e]&&ld[e][t]){var o=ld[e][t];return r(xf(o))}UB(t,e),r(j(j({},FB),{},{icon:G.showMissingIcons&&t?cr("missingIconAbstract")||{}:{}}))})}var xw=function(){},Nf=G.measurePerformance&&Xc&&Xc.mark&&Xc.measure?Xc:{mark:xw,measure:xw},Yo='FA "6.2.1"',VB=function(e){return Nf.mark("".concat(Yo," ").concat(e," begins")),function(){return A1(e)}},A1=function(e){Nf.mark("".concat(Yo," ").concat(e," ends")),Nf.measure("".concat(Yo," ").concat(e),"".concat(Yo," ").concat(e," begins"),"".concat(Yo," ").concat(e," ends"))},ag={begin:VB,end:A1},bu=function(){};function Rw(t){var e=t.getAttribute?t.getAttribute(ts):null;return typeof e=="string"}function BB(t){var e=t.getAttribute?t.getAttribute(Jp):null,n=t.getAttribute?t.getAttribute(Zp):null;return e&&n}function $B(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function qB(){if(G.autoReplaceSvg===!0)return Iu.replace;var t=Iu[G.autoReplaceSvg];return t||Iu.replace}function jB(t){return De.createElementNS("http://www.w3.org/2000/svg",t)}function zB(t){return De.createElement(t)}function C1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?jB:zB:n;if(typeof t=="string")return De.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(C1(o,{ceFn:r}))}),i}function HB(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Iu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(C1(i),n)}),n.getAttribute(ts)===null&&G.keepOriginalSource){var r=De.createComment(HB(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~tg(n).indexOf(G.replacementClass))return Iu.replace(e);var i=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===G.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Rc(a)}).join(`
`);n.setAttribute(ts,""),n.innerHTML=o}};function Nw(t){t()}function x1(t,e){var n=typeof e=="function"?e:bu;if(t.length===0)n();else{var r=Nw;G.mutateApproach===YV&&(r=Yr.requestAnimationFrame||Nw),r(function(){var i=qB(),s=ag.begin("mutate");t.map(i),s(),n()})}}var cg=!1;function R1(){cg=!0}function Df(){cg=!1}var sl=null;function Dw(t){if(!!bw&&!!G.observeMutations){var e=t.treeCallback,n=e===void 0?bu:e,r=t.nodeCallback,i=r===void 0?bu:r,s=t.pseudoElementsCallback,o=s===void 0?bu:s,a=t.observeMutationsRoot,c=a===void 0?De:a;sl=new bw(function(u){if(!cg){var l=Qr();Ao(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Rw(h.addedNodes[0])&&(G.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&G.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Rw(h.target)&&~nB.indexOf(h.attributeName))if(h.attributeName==="class"&&BB(h.target)){var d=Sh(tg(h.target)),f=d.prefix,p=d.iconName;h.target.setAttribute(Jp,f||l),p&&h.target.setAttribute(Zp,p)}else $B(h.target)&&i(h.target)})}}),gr&&sl.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function KB(){!sl||sl.disconnect()}function WB(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function GB(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Sh(tg(t));return i.prefix||(i.prefix=Qr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=SB(i.prefix,t.innerText)||ig(i.prefix,Sf(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function YB(t){var e=Ao(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||Ja()):(e["aria-hidden"]="true",e.focusable="false")),e}function QB(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ow(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=GB(t),r=n.iconName,i=n.prefix,s=n.rest,o=YB(t),a=Af("parseNodeAttributes",{},t),c=e.styleParser?WB(t):[];return j({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Fn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var XB=yn.styles;function N1(t){var e=G.autoReplaceSvg==="nest"?Ow(t,{styleParser:!1}):Ow(t);return~e.extra.classes.indexOf(f1)?cr("generateLayersText",t,e):cr("generateSvgReplacementMutation",t,e)}var Xr=new Set;eg.map(function(t){Xr.add("fa-".concat(t))});Object.keys(Ga[Re]).map(Xr.add.bind(Xr));Object.keys(Ga[He]).map(Xr.add.bind(Xr));Xr=Cc(Xr);function Pw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!gr)return Promise.resolve();var n=De.documentElement.classList,r=function(h){return n.add("".concat(Iw,"-").concat(h))},i=function(h){return n.remove("".concat(Iw,"-").concat(h))},s=G.autoFetchSvg?Xr:eg.map(function(l){return"fa-".concat(l)}).concat(Object.keys(XB));s.includes("fa")||s.push("fa");var o=[".".concat(f1,":not([").concat(ts,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(ts,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ao(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=ag.begin("onTree"),u=a.reduce(function(l,h){try{var d=N1(h);d&&l.push(d)}catch(f){d1||f.name==="MissingIcon"&&console.error(f)}return l},[]);return new Promise(function(l,h){Promise.all(u).then(function(d){x1(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),l()})}).catch(function(d){c(),h(d)})})}function JB(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;N1(t).then(function(n){n&&x1([n],e)})}function ZB(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Cf(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Cf(i||{})),t(r,j(j({},n),{},{mask:i}))}}var e$=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Fn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,u=n.maskId,l=u===void 0?null:u,h=n.title,d=h===void 0?null:h,f=n.titleId,p=f===void 0?null:f,y=n.classes,I=y===void 0?[]:y,v=n.attributes,b=v===void 0?{}:v,E=n.styles,R=E===void 0?{}:E;if(!!e){var F=e.prefix,z=e.iconName,ne=e.icon;return kh(j({type:"icon"},e),function(){return ns("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(d?b["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(p||Ja()):(b["aria-hidden"]="true",b.focusable="false")),og({icons:{main:xf(ne),mask:c?xf(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:z,transform:j(j({},Fn),i),symbol:o,title:d,maskId:l,titleId:p,extra:{attributes:b,styles:R,classes:I}})})}},t$={mixout:function(){return{icon:ZB(e$)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Pw,n.nodeCallback=JB,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?De:r,s=n.callback,o=s===void 0?function(){}:s;return Pw(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,u=r.symbol,l=r.mask,h=r.maskId,d=r.extra;return new Promise(function(f,p){Promise.all([Rf(i,a),l.iconName?Rf(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var I=Qp(y,2),v=I[0],b=I[1];f([n,og({icons:{main:v,mask:b},prefix:a,iconName:i,transform:c,symbol:u,maskId:h,title:s,titleId:o,extra:d,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=Eh(a);c.length>0&&(i.style=c);var u;return ng(o)&&(u=cr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},n$={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return kh({type:"layer"},function(){ns("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(Cc(s)).join(" ")},children:o}]})}}}},r$={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,l=r.styles,h=l===void 0?{}:l;return kh({type:"counter",content:n},function(){return ns("beforeDOMElementCreation",{content:n,params:r}),MB({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(Cc(a))}})})}}}},i$={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Fn:i,o=r.title,a=o===void 0?null:o,c=r.classes,u=c===void 0?[]:c,l=r.attributes,h=l===void 0?{}:l,d=r.styles,f=d===void 0?{}:d;return kh({type:"text",content:n},function(){return ns("beforeDOMElementCreation",{content:n,params:r}),Cw({content:n,transform:j(j({},Fn),s),title:a,extra:{attributes:h,styles:f,classes:["".concat(G.cssPrefix,"-layers-text")].concat(Cc(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(u1){var u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();a=l.width/u,c=l.height/u}return G.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Cw({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},s$=new RegExp('"',"ug"),Lw=[1105920,1112319];function o$(t){var e=t.replace(s$,""),n=wB(e,0),r=n>=Lw[0]&&n<=Lw[1],i=e.length===2?e[0]===e[1]:!1;return{value:Sf(i?e[0]:e),isSecondary:r||i}}function Mw(t,e){var n="".concat(GV).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ao(t.children),o=s.filter(function(ne){return ne.getAttribute(Tf)===e})[0],a=Yr.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(ZV),u=a.getPropertyValue("font-weight"),l=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&l!=="none"&&l!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?He:Re,f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Ya[d][c[2].toLowerCase()]:eB[d][u],p=o$(h),y=p.value,I=p.isSecondary,v=c[0].startsWith("FontAwesome"),b=ig(f,y),E=b;if(v){var R=kB(y);R.iconName&&R.prefix&&(b=R.iconName,f=R.prefix)}if(b&&!I&&(!o||o.getAttribute(Jp)!==f||o.getAttribute(Zp)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var F=QB(),z=F.extra;z.attributes[Tf]=e,Rf(b,f).then(function(ne){var X=og(j(j({},F),{},{icons:{main:ne,mask:sg()},prefix:f,iconName:E,extra:z,watchable:!0})),oe=De.createElement("svg");e==="::before"?t.insertBefore(oe,t.firstChild):t.appendChild(oe),oe.outerHTML=X.map(function(we){return Rc(we)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function a$(t){return Promise.all([Mw(t,"::before"),Mw(t,"::after")])}function c$(t){return t.parentNode!==document.head&&!~QV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Tf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fw(t){if(!!gr)return new Promise(function(e,n){var r=Ao(t.querySelectorAll("*")).filter(c$).map(a$),i=ag.begin("searchPseudoElements");R1(),Promise.all(r).then(function(){i(),Df(),e()}).catch(function(){i(),Df(),n()})})}var u$={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fw,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?De:r;G.searchPseudoElements&&Fw(i)}}},Uw=!1,l$={mixout:function(){return{dom:{unwatch:function(){R1(),Uw=!0}}}},hooks:function(){return{bootstrap:function(){Dw(Af("mutationObserverCallbacks",{}))},noAuto:function(){KB()},watch:function(n){var r=n.observeMutationsRoot;Uw?Df():Dw(Af("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Vw=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},h$={mixout:function(){return{parse:{transform:function(n){return Vw(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Vw(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(c," ").concat(u," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},f={outer:a,inner:h,path:d};return{tag:"g",attributes:j({},f.outer),children:[{tag:"g",attributes:j({},f.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j(j({},r.icon.attributes),f.path)}]}]}}}},hd={x:0,y:0,width:"100%",height:"100%"};function Bw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function d$(t){return t.tag==="g"?t.children:[t]}var f$={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Sh(i.split(" ").map(function(o){return o.trim()})):sg();return s.prefix||(s.prefix=Qr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,u=s.width,l=s.icon,h=o.width,d=o.icon,f=hB({transform:c,containerWidth:h,iconWidth:u}),p={tag:"rect",attributes:j(j({},hd),{},{fill:"white"})},y=l.children?{children:l.children.map(Bw)}:{},I={tag:"g",attributes:j({},f.inner),children:[Bw(j({tag:l.tag,attributes:j(j({},l.attributes),f.path)},y))]},v={tag:"g",attributes:j({},f.outer),children:[I]},b="mask-".concat(a||Ja()),E="clip-".concat(a||Ja()),R={tag:"mask",attributes:j(j({},hd),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:d$(d)},R]};return r.push(F,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(b,")")},hd)}),{children:r,attributes:i}}}},m$={provides:function(e){var n=!1;Yr.matchMedia&&(n=Yr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:j(j({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=j(j({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:j(j({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:j(j({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:j(j({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:j(j({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},p$={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},g$=[mB,t$,n$,r$,i$,u$,l$,h$,f$,m$,p$];xB(g$,{mixoutsTo:en});en.noAuto;var D1=en.config,y$=en.library;en.dom;var ol=en.parse;en.findIconDefinition;en.toHtml;var v$=en.icon;en.layer;var w$=en.text;en.counter;function $w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function mn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$w(Object(n),!0).forEach(function(r){Ut(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$w(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function al(t){return al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},al(t)}function Ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _$(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function b$(t,e){if(t==null)return{};var n=_$(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Of(t){return I$(t)||E$(t)||T$(t)||S$()}function I$(t){if(Array.isArray(t))return Pf(t)}function E$(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function T$(t,e){if(!!t){if(typeof t=="string")return Pf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pf(t,e)}}function Pf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function S$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var k$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O1={exports:{}};(function(t){(function(e){var n=function(v,b,E){if(!u(b)||h(b)||d(b)||f(b)||c(b))return b;var R,F=0,z=0;if(l(b))for(R=[],z=b.length;F<z;F++)R.push(n(v,b[F],E));else{R={};for(var ne in b)Object.prototype.hasOwnProperty.call(b,ne)&&(R[v(ne,E)]=n(v,b[ne],E))}return R},r=function(v,b){b=b||{};var E=b.separator||"_",R=b.split||/(?=[A-Z])/;return v.split(R).join(E)},i=function(v){return p(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(b,E){return E?E.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var b=i(v);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(v,b){return r(v,b).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},u=function(v){return v===Object(v)},l=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},d=function(v){return a.call(v)=="[object RegExp]"},f=function(v){return a.call(v)=="[object Boolean]"},p=function(v){return v=v-0,v===v},y=function(v,b){var E=b&&"process"in b?b.process:b;return typeof E!="function"?v:function(R,F){return E(R,v,F)}},I={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,b){return n(y(i,b),v)},decamelizeKeys:function(v,b){return n(y(o,b),v,b)},pascalizeKeys:function(v,b){return n(y(s,b),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=I:e.humps=I})(k$)})(O1);var A$=O1.exports,C$=["class","style"];function x$(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=A$.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function R$(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ug(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return ug(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,u){var l=t.attributes[u];switch(u){case"class":c.class=R$(l);break;case"style":c.style=x$(l);break;default:c.attrs[u]=l}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=b$(n,C$);return tc(t.tag,mn(mn(mn({},e),{},{class:i.class,style:mn(mn({},i.style),o)},i.attrs),a),r)}var P1=!1;try{P1=!0}catch{}function N$(){if(!P1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ma(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ut({},t,e):{}}function D$(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ut(e,"fa-".concat(t.size),t.size!==null),Ut(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Ut(e,"fa-pull-".concat(t.pull),t.pull!==null),Ut(e,"fa-swap-opacity",t.swapOpacity),Ut(e,"fa-bounce",t.bounce),Ut(e,"fa-shake",t.shake),Ut(e,"fa-beat",t.beat),Ut(e,"fa-fade",t.fade),Ut(e,"fa-beat-fade",t.beatFade),Ut(e,"fa-flash",t.flash),Ut(e,"fa-spin-pulse",t.spinPulse),Ut(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function qw(t){if(t&&al(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ol.icon)return ol.icon(t);if(t===null)return null;if(al(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var O$=ec({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=$e(function(){return qw(e.icon)}),s=$e(function(){return ma("classes",D$(e))}),o=$e(function(){return ma("transform",typeof e.transform=="string"?ol.transform(e.transform):e.transform)}),a=$e(function(){return ma("mask",qw(e.mask))}),c=$e(function(){return v$(i.value,mn(mn(mn(mn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Qo(c,function(l){if(!l)return N$("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var u=$e(function(){return c.value?ug(c.value.abstract[0],{},r):null});return function(){return u.value}}});ec({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=D1.familyPrefix,s=$e(function(){return["".concat(i,"-layers")].concat(Of(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return tc("div",{class:s.value},r.default?r.default():[])}}});ec({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=D1.familyPrefix,s=$e(function(){return ma("classes",[].concat(Of(e.counter?["".concat(i,"-layers-counter")]:[]),Of(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=$e(function(){return ma("transform",typeof e.transform=="string"?ol.transform(e.transform):e.transform)}),a=$e(function(){var u=w$(e.value.toString(),mn(mn({},o.value),s.value)),l=u.abstract;return e.counter&&(l[0].attributes.class=l[0].attributes.class.replace("fa-layers-text","")),l[0]}),c=$e(function(){return ug(a.value,{},r)});return function(){return c.value}}});var P$={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},L$={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},M$={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},F$={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"]},U$={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},V$={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]},B$={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},$$={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},q$={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},j$={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},z$={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};y$.add(V$,B$,P$,L$,$$,M$,F$,j$,q$,z$,U$);const lg=hA(gA);lg.use(UV);lg.component("font-awesome-icon",O$);lg.mount("#app");export{el as A,Sn as F,UF as G,nw as K,VF as Q,oT as T,fA as _,X$ as a,S_ as b,Q$ as c,W$ as d,$_ as e,t3 as f,rk as g,qt as h,kk as i,RT as j,MV as k,FS as l,z_ as m,G$ as n,F_ as o,K$ as p,J$ as q,SS as r,Y$ as s,n3 as t,e3 as u,Z$ as v,Qo as w,H$ as x,Mf as y,V_ as z};
