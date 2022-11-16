var D=Object.defineProperty;var u=(e,t)=>D(e,"name",{value:t,configurable:!0});import{a as O,_ as P,$ as z}from"./index.module.0e2e42fd.js";import{r as o}from"./index.7f46cd07.js";import{r as U}from"./index.cf43f8fb.js";import{j as p,F as y,a as j}from"./jsx-runtime.ea2201f1.js";import{I as W,r as F}from"./IconBase.esm.60e55fa4.js";import{T as q}from"./Text.b3a4a680.js";import"./iframe.f511c11d.js";import"./clsx.m.02fdd3a3.js";function K(e,t=[]){let n=[];function r(s,l){const i=o.exports.createContext(l),d=n.length;n=[...n,l];function a(f){const{scope:h,children:m,...b}=f,S=(h==null?void 0:h[e][d])||i,$=o.exports.useMemo(()=>b,Object.values(b));return o.exports.createElement(S.Provider,{value:$},m)}u(a,"Provider");function x(f,h){const m=(h==null?void 0:h[e][d])||i,b=o.exports.useContext(m);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${s}\``)}return u(x,"useContext"),a.displayName=s+"Provider",[a,x]}u(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=u(()=>{const s=n.map(l=>o.exports.createContext(l));return u(function(i){const d=(i==null?void 0:i[e])||s;return o.exports.useMemo(()=>({[`__scope${e}`]:{...i,[e]:d}}),[i,d])},"useScope")},"createScope");return c.scopeName=e,[r,X(c,...t)]}u(K,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function X(...e){const t=e[0];if(e.length===1)return t;const n=u(()=>{const r=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return u(function(s){const l=r.reduce((i,{useScope:d,scopeName:a})=>{const f=d(s)[`__scope${a}`];return{...i,...f}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}u(X,"$c512c27ab02ef895$var$composeContextScopes");function A(e,t,{checkForDefaultPrevented:n=!0}={}){return u(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}u(A,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function R(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}u(R,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function Y({prop:e,defaultProp:t,onChange:n=u(()=>{},"onChange")}){const[r,c]=H({defaultProp:t,onChange:n}),s=e!==void 0,l=s?e:r,i=R(n),d=o.exports.useCallback(a=>{if(s){const f=typeof a=="function"?a(e):a;f!==e&&i(f)}else c(a)},[s,e,c,i]);return[l,d]}u(Y,"$71cd76cc60e0454e$export$6f32135080cb4c3");function H({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,c=o.exports.useRef(r),s=R(t);return o.exports.useEffect(()=>{c.current!==r&&(s(r),c.current=r)},[r,c,s]),n}u(H,"$71cd76cc60e0454e$var$useUncontrolledState");function Z(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}u(Z,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const _=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function G(e){const[t,n]=o.exports.useState(void 0);return _(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let l,i;if("borderBoxSize"in s){const d=s.borderBoxSize,a=Array.isArray(d)?d[0]:d;l=a.inlineSize,i=a.blockSize}else l=e.offsetWidth,i=e.offsetHeight;n({width:l,height:i})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}u(G,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function J(e,t){return o.exports.useReducer((n,r)=>{const c=t[n][r];return c!=null?c:n},e)}u(J,"$fe963b355347cc68$export$3e6543de14f8614f");const M=u(e=>{const{present:t,children:n}=e,r=Q(t),c=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),s=O(r.ref,c.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");M.displayName="Presence";function Q(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),c=o.exports.useRef(e),s=o.exports.useRef("none"),l=e?"mounted":"unmounted",[i,d]=J(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const a=N(r.current);s.current=i==="mounted"?a:"none"},[i]),_(()=>{const a=r.current,x=c.current;if(x!==e){const h=s.current,m=N(a);e?d("MOUNT"):m==="none"||(a==null?void 0:a.display)==="none"?d("UNMOUNT"):d(x&&h!==m?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,d]),_(()=>{if(t){const a=u(f=>{const m=N(r.current).includes(f.animationName);f.target===t&&m&&U.exports.flushSync(()=>d("ANIMATION_END"))},"handleAnimationEnd"),x=u(f=>{f.target===t&&(s.current=N(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",x),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",x),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:o.exports.useCallback(a=>{a&&(r.current=getComputedStyle(a)),n(a)},[])}}u(Q,"$921a889cee6df7e8$var$usePresence");function N(e){return(e==null?void 0:e.animationName)||"none"}u(N,"$921a889cee6df7e8$var$getAnimationName");const V=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],T=V.reduce((e,t)=>{const n=o.exports.forwardRef((r,c)=>{const{asChild:s,...l}=r,i=s?z:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(i,P({},l,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),w="Checkbox",[ee,Ce]=K(w),[te,ne]=ee(w),oe=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:c,defaultChecked:s,required:l,disabled:i,value:d="on",onCheckedChange:a,...x}=e,[f,h]=o.exports.useState(null),m=O(t,k=>h(k)),b=o.exports.useRef(!1),S=f?Boolean(f.closest("form")):!0,[$=!1,B]=Y({prop:c,defaultProp:s,onChange:a});return o.exports.createElement(te,{scope:n,state:$,disabled:i},o.exports.createElement(T.button,P({type:"button",role:"checkbox","aria-checked":C($)?"mixed":$,"aria-required":l,"data-state":L($),"data-disabled":i?"":void 0,disabled:i,value:d},x,{ref:m,onKeyDown:A(e.onKeyDown,k=>{k.key==="Enter"&&k.preventDefault()}),onClick:A(e.onClick,k=>{B(E=>C(E)?!0:!E),S&&(b.current=k.isPropagationStopped(),b.current||k.stopPropagation())})})),S&&o.exports.createElement(se,{control:f,bubbles:!b.current,name:r,value:d,checked:$,required:l,disabled:i,style:{transform:"translateX(-100%)"}}))}),re="CheckboxIndicator",ce=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...c}=e,s=ne(re,n);return o.exports.createElement(M,{present:r||C(s.state)||s.state===!0},o.exports.createElement(T.span,P({"data-state":L(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),se=u(e=>{const{control:t,checked:n,bubbles:r=!0,...c}=e,s=o.exports.useRef(null),l=Z(n),i=G(t);return o.exports.useEffect(()=>{const d=s.current,a=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(a,"checked").set;if(l!==n&&f){const h=new Event("click",{bubbles:r});d.indeterminate=C(n),f.call(d,C(n)?!1:n),d.dispatchEvent(h)}},[l,n,r]),o.exports.createElement("input",P({type:"checkbox","aria-hidden":!0,defaultChecked:C(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function C(e){return e==="indeterminate"}u(C,"$e698a72e93240346$var$isIndeterminate");function L(e){return C(e)?"indeterminate":e?"checked":"unchecked"}u(L,"$e698a72e93240346$var$getState");const ae=oe,ie=ce;var v=new Map;v.set("bold",function(e){return p(y,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});v.set("duotone",function(e){return p(y,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});v.set("fill",function(){return p(y,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});v.set("light",function(e){return p(y,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});v.set("thin",function(e){return p(y,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});v.set("regular",function(e){return p(y,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var ue=u(function(t,n){return F(t,n,v)},"renderPath"),I=o.exports.forwardRef(function(e,t){return p(W,{...Object.assign({ref:t},e,{renderPath:ue})})});I.displayName="Check";const de=I;function g(e){return p(ae,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",...e,children:p(ie,{asChild:!0,children:p(de,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}u(g,"Checkbox");try{g.displayName="Checkbox",g.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:g.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch{}const ve={parameters:{storySource:{source:`import { Story, Meta } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Checkbox",
  component: Checkbox,
  args: {
    id: "checkbox",
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}{" "}
          <Text size="sm" asChild>
            <label htmlFor="checkbox">Remind me for 30 days</label>
          </Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />;
`,locationsMap:{default:{startLoc:{col:45,line:25},endLoc:{col:77,line:25},startBody:{col:45,line:25},endBody:{col:77,line:25}}}}},title:"Checkbox",component:g,args:{id:"checkbox"},decorators:[e=>j("div",{className:"flex items-center gap-2",children:[e()," ",p(q,{size:"sm",asChild:!0,children:p("label",{htmlFor:"checkbox",children:"Remind me for 30 days"})})]})]},ye=u(e=>p(g,{...e}),"Default"),ge=["Default"];export{ye as Default,ge as __namedExportsOrder,ve as default};
//# sourceMappingURL=Checkbox.stories.b0a3c81d.js.map