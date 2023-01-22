import{g as j,a as T,x as k,s as z,b as d,f as E,F as p,r as $,d as P,_ as U,j as f,h as A,c as B,R as l,i as M}from"./index-c8b36b8d.js";import{V as X}from"./index-09509d25.js";import{d as v}from"./Stack-0acf31e9.js";function F(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function I(t){return parseFloat(t)}function W(t){return j("MuiSkeleton",t)}T("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const V=["animation","className","component","height","style","variant","width"];let h=t=>t,b,y,x,w;const G=t=>{const{classes:e,variant:a,animation:n,hasChildren:r,width:i,height:c}=t;return B({root:["root",a,n,r&&"withChildren",r&&!i&&"fitContent",r&&!c&&"heightAuto"]},W,e)},H=k(b||(b=h`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),K=k(y||(y=h`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),L=z("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=F(t.shape.borderRadius)||"px",n=I(t.shape.borderRadius);return d({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:E(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${a}/${Math.round(n/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&p(x||(x=h`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),H),({ownerState:t,theme:e})=>t.animation==="wave"&&p(w||(w=h`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),K,(e.vars||e).palette.action.hover)),D=$.forwardRef(function(e,a){const n=P({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:c="span",height:u,style:s,variant:R="text",width:S}=n,m=U(n,V),g=d({},n,{animation:r,component:c,variant:R,hasChildren:Boolean(m.children)}),N=G(g);return f(L,d({as:c,ref:a,className:A(N.root,i),ownerState:g},m,{style:d({width:S,height:u},s)}))}),tt=D;var _={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C=l.createContext&&l.createContext(_),o=globalThis&&globalThis.__assign||function(){return o=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},o.apply(this,arguments)},q=globalThis&&globalThis.__rest||function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]]);return a};function O(t){return t&&t.map(function(e,a){return l.createElement(e.tag,o({key:a},e.attr),O(e.child))})}function et(t){return function(e){return l.createElement(J,o({attr:o({},t.attr)},e),O(t.child))}}function J(t){var e=function(a){var n=t.attr,r=t.size,i=t.title,c=q(t,["attr","size","title"]),u=r||a.size||"1em",s;return a.className&&(s=a.className),t.className&&(s=(s?s+" ":"")+t.className),l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,n,c,{className:s,style:o(o({color:t.color||a.color},a.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&l.createElement("title",null,i),t.children)};return C!==void 0?l.createElement(C.Consumer,null,function(a){return e(a)}):e(_)}const at=({children:t,linkText:e="See All",viewTitle:a=!0,containerTitle:n,link:r="/",...i})=>M(v,{width:"100%",...i,children:[a&&f(X,{title:n,link:r}),f(v,{display:"flex",flex:1,overflow:"scroll",width:"100%",paddingTop:2,paddingBottom:3,paddingX:"18px",className:"horizontal_flex_container",sx:{"& > *":{marginRight:3}},children:t})]});export{et as G,at as H,tt as S};
