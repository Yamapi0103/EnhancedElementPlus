import{h as N,Z as Ce,g as c,m as a,ad as G,N as be,d as h,y as q,r as F,o as m,c as k,I as $,w as S,n as g,t as A,k as E,aj as W,a5 as J,T as Y,aW as _e,j as he,b as _,O as Te,e as I,J as Ie,F as Ne,a1 as Se,ak as H,a9 as Q,a7 as B,aI as K}from"./framework.eiFApvMk.js";import{p as v,a3 as xe,a4 as we,n as Z,u as X,L as ze,l as L,y as ke,q as O,_ as ee,w as Ee,i as se,o as Be,C as Oe,M as Me,N as Fe,a2 as $e}from"./use-form-common-props.V-O9aEAg.js";import{T as ne,F as te,K as oe,L as ae,l as Le,G as je,c as Pe,m as le,U as De,V as Ve,u as He,p as Ke,W as Ze,E as R,e as Re}from"./index.IZbuEadE.js";const Ue=v([String,Object,Function]),hs={Close:le},Ge={Close:le,SuccessFilled:ne,InfoFilled:ae,WarningFilled:te,CircleCloseFilled:oe},U={success:ne,warning:te,error:oe,info:ae},Ts={validating:Le,success:je,error:Pe},qe=s=>s,re=Symbol(),x=N();function ie(s,n=void 0){const e=G()?be(re,x):x;return s?c(()=>{var t,o;return(o=(t=e.value)==null?void 0:t[s])!=null?o:n}):e}function Ae(s,n){const e=ie(),t=X(s,c(()=>{var l;return((l=e.value)==null?void 0:l.namespace)||ze})),o=He(c(()=>{var l;return(l=e.value)==null?void 0:l.locale})),r=Ke(c(()=>{var l;return((l=e.value)==null?void 0:l.zIndex)||Ze})),u=c(()=>{var l;return a(n)||((l=e.value)==null?void 0:l.size)||""});return ue(c(()=>a(e)||{})),{ns:t,locale:o,zIndex:r,size:u}}const ue=(s,n,e=!1)=>{var t;const o=!!G(),r=o?ie():void 0,u=(t=n==null?void 0:n.provide)!=null?t:o?Ce:void 0;if(!u)return;const l=c(()=>{const f=a(s);return r!=null&&r.value?We(r.value,f):f});return u(re,l),u(De,c(()=>l.value.locale)),u(xe,c(()=>l.value.namespace)),u(Ve,c(()=>l.value.zIndex)),u(we,{size:c(()=>l.value.size||"")}),(e||!x.value)&&(x.value=l.value),l},We=(s,n)=>{var e;const t=[...new Set([...Z(s),...Z(n)])],o={};for(const r of t)o[r]=(e=n[r])!=null?e:s[r];return o},Je=L({a11y:{type:Boolean,default:!0},locale:{type:v(Object)},size:ke,button:{type:v(Object)},experimentalFeatures:{type:v(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:v(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),M={},Is=h({name:"ElConfigProvider",props:Je,setup(s,{slots:n}){q(()=>s.message,t=>{Object.assign(M,t??{})},{immediate:!0,deep:!0});const e=ue(s);return()=>F(n,"default",{config:e==null?void 0:e.value})}}),Ye=L({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Qe=["textContent"],Xe=h({name:"ElBadge"}),es=h({...Xe,props:Ye,setup(s,{expose:n}){const e=s,t=X("badge"),o=c(()=>e.isDot?"":O(e.value)&&O(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return n({content:o}),(r,u)=>(m(),k("div",{class:g(a(t).b())},[F(r.$slots,"default"),$(Y,{name:`${a(t).namespace.value}-zoom-in-center`,persisted:""},{default:S(()=>[J(E("sup",{class:g([a(t).e("content"),a(t).em("content",r.type),a(t).is("fixed",!!r.$slots.default),a(t).is("dot",r.isDot)]),textContent:A(a(o))},null,10,Qe),[[W,!r.hidden&&(a(o)||r.isDot)]])]),_:1},8,["name"])],2))}});var ss=ee(es,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const ns=Ee(ss),ce=["success","info","warning","error"],d=qe({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:se?document.body:void 0}),ts=L({customClass:{type:String,default:d.customClass},center:{type:Boolean,default:d.center},dangerouslyUseHTMLString:{type:Boolean,default:d.dangerouslyUseHTMLString},duration:{type:Number,default:d.duration},icon:{type:Ue,default:d.icon},id:{type:String,default:d.id},message:{type:v([String,Object,Function]),default:d.message},onClose:{type:v(Function),required:!1},showClose:{type:Boolean,default:d.showClose},type:{type:String,values:ce,default:d.type},offset:{type:Number,default:d.offset},zIndex:{type:Number,default:d.zIndex},grouping:{type:Boolean,default:d.grouping},repeatNum:{type:Number,default:d.repeatNum}}),os={destroy:()=>!0},p=_e([]),as=s=>{const n=p.findIndex(o=>o.id===s),e=p[n];let t;return n>0&&(t=p[n-1]),{current:e,prev:t}},ls=s=>{const{prev:n}=as(s);return n?n.vm.exposed.bottom.value:0},rs=(s,n)=>p.findIndex(t=>t.id===s)>0?20:n,is=["id"],us=["innerHTML"],cs=h({name:"ElMessage"}),ds=h({...cs,props:ts,emits:os,setup(s,{expose:n}){const e=s,{Close:t}=Ge,{ns:o,zIndex:r}=Ae("message"),{currentZIndex:u,nextZIndex:l}=r,f=N(),C=N(!1),b=N(0);let w;const pe=c(()=>e.type?e.type==="error"?"danger":e.type:"info"),fe=c(()=>{const i=e.type;return{[o.bm("icon",i)]:i&&U[i]}}),j=c(()=>e.icon||U[e.type]||""),me=c(()=>ls(e.id)),P=c(()=>rs(e.id,e.offset)+me.value),ge=c(()=>b.value+P.value),ve=c(()=>({top:`${P.value}px`,zIndex:u.value}));function z(){e.duration!==0&&({stop:w}=Me(()=>{T()},e.duration))}function D(){w==null||w()}function T(){C.value=!1}function ye({code:i}){i===Re.esc&&T()}return he(()=>{z(),l(),C.value=!0}),q(()=>e.repeatNum,()=>{D(),z()}),Be(document,"keydown",ye),Oe(f,()=>{b.value=f.value.getBoundingClientRect().height}),n({visible:C,bottom:ge,close:T}),(i,V)=>(m(),_(Y,{name:a(o).b("fade"),onBeforeLeave:i.onClose,onAfterLeave:V[0]||(V[0]=ys=>i.$emit("destroy")),persisted:""},{default:S(()=>[J(E("div",{id:i.id,ref_key:"messageRef",ref:f,class:g([a(o).b(),{[a(o).m(i.type)]:i.type&&!i.icon},a(o).is("center",i.center),a(o).is("closable",i.showClose),i.customClass]),style:Te(a(ve)),role:"alert",onMouseenter:D,onMouseleave:z},[i.repeatNum>1?(m(),_(a(ns),{key:0,value:i.repeatNum,type:a(pe),class:g(a(o).e("badge"))},null,8,["value","type","class"])):I("v-if",!0),a(j)?(m(),_(a(R),{key:1,class:g([a(o).e("icon"),a(fe)])},{default:S(()=>[(m(),_(Ie(a(j))))]),_:1},8,["class"])):I("v-if",!0),F(i.$slots,"default",{},()=>[i.dangerouslyUseHTMLString?(m(),k(Ne,{key:1},[I(" Caution here, message could've been compromised, never use user's input as message "),E("p",{class:g(a(o).e("content")),innerHTML:i.message},null,10,us)],2112)):(m(),k("p",{key:0,class:g(a(o).e("content"))},A(i.message),3))]),i.showClose?(m(),_(a(R),{key:2,class:g(a(o).e("closeBtn")),onClick:Se(T,["stop"])},{default:S(()=>[$(a(t))]),_:1},8,["class","onClick"])):I("v-if",!0)],46,is),[[W,C.value]])]),_:3},8,["name","onBeforeLeave"]))}});var ps=ee(ds,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let fs=1;const de=s=>{const n=!s||H(s)||Q(s)||B(s)?{message:s}:s,e={...d,...n};if(!e.appendTo)e.appendTo=document.body;else if(H(e.appendTo)){let t=document.querySelector(e.appendTo);Fe(t)||(t=document.body),e.appendTo=t}return e},ms=s=>{const n=p.indexOf(s);if(n===-1)return;p.splice(n,1);const{handler:e}=s;e.close()},gs=({appendTo:s,...n},e)=>{const t=`message_${fs++}`,o=n.onClose,r=document.createElement("div"),u={...n,id:t,onClose:()=>{o==null||o(),ms(b)},onDestroy:()=>{K(null,r)}},l=$(ps,u,B(u.message)||Q(u.message)?{default:B(u.message)?u.message:()=>u.message}:null);l.appContext=e||y._context,K(l,r),s.appendChild(r.firstElementChild);const f=l.component,b={id:t,vnode:l,vm:f,handler:{close:()=>{f.exposed.visible.value=!1}},props:l.component.props};return b},y=(s={},n)=>{if(!se)return{close:()=>{}};if(O(M.max)&&p.length>=M.max)return{close:()=>{}};const e=de(s);if(e.grouping&&p.length){const o=p.find(({vnode:r})=>{var u;return((u=r.props)==null?void 0:u.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const t=gs(e,n);return p.push(t),t.handler};ce.forEach(s=>{y[s]=(n={},e)=>{const t=de(n);return y({...t,type:s},e)}});function vs(s){for(const n of p)(!s||s===n.props.type)&&n.handler.close()}y.closeAll=vs;y._context=null;const Ns=$e(y,"$message");export{Is as C,Ns as E,U as T,Ts as V,Ge as a,hs as b,ns as c,Ae as d,Ue as i,qe as m,ue as p,ie as u};
