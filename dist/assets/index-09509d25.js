import{r as f,O as ro,C as to,e as d,g as y,a as C,s as k,b as s,f as m,d as R,_ as $,j as c,h as B,c as I,P as V,Q as j,S as no,i as E}from"./index-c8b36b8d.js";import{c as ao,s as so,a as io,b as lo,u as G,f as W,B as co,T as A,d as _}from"./Stack-0acf31e9.js";function uo(...o){return o.reduce((e,r)=>r==null?e:function(...n){e.apply(this,n),r.apply(this,n)},()=>{})}function po(o,e=166){let r;function t(...n){const a=()=>{o.apply(this,n)};clearTimeout(r),r=setTimeout(a,e)}return t.clear=()=>{clearTimeout(r)},t}function fo(o,e){return()=>null}function vo(o,e){return f.isValidElement(o)&&e.indexOf(o.type.muiName)!==-1}function H(o){return o&&o.ownerDocument||document}function go(o){return H(o).defaultView||window}function bo(o,e){return()=>null}let O=0;function xo(o){const[e,r]=f.useState(o),t=o||e;return f.useEffect(()=>{e==null&&(O+=1,r(`mui-${O}`))},[e]),t}const L=ro["useId"];function mo(o){if(L!==void 0){const e=L();return o??e}return xo(o)}function yo(o,e,r,t,n){return null}function Co({controlled:o,default:e,name:r,state:t="value"}){const{current:n}=f.useRef(o!==void 0),[a,i]=f.useState(e),u=n?o:a,p=f.useCallback(l=>{n||i(l)},[]);return[u,p]}const ko=o=>{let e;return o<1?e=5.11916*o**2:e=4.5*Math.log(o+1)+2,(e/100).toFixed(2)},q=ko,Ro={configure:o=>{to.configure(o)}},$o=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:Ro,capitalize:d,createChainedFunction:uo,createSvgIcon:ao,debounce:po,deprecatedPropType:fo,isMuiElement:vo,ownerDocument:H,ownerWindow:go,requirePropFactory:bo,setRef:so,unstable_useEnhancedEffect:io,unstable_useId:mo,unsupportedProp:yo,useControlled:Co,useEventCallback:lo,useForkRef:G,useIsFocusVisible:W},Symbol.toStringTag,{value:"Module"}));function Bo(o){return y("MuiPaper",o)}C("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Io=["className","component","elevation","square","variant"],ho=o=>{const{square:e,elevation:r,variant:t,classes:n}=o,a={root:["root",t,!e&&"rounded",t==="elevation"&&`elevation${r}`]};return I(a,Bo,n)},Ao=k("div",{name:"MuiPaper",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,e[r.variant],!r.square&&e.rounded,r.variant==="elevation"&&e[`elevation${r.elevation}`]]}})(({theme:o,ownerState:e})=>{var r;return s({backgroundColor:(o.vars||o).palette.background.paper,color:(o.vars||o).palette.text.primary,transition:o.transitions.create("box-shadow")},!e.square&&{borderRadius:o.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.divider}`},e.variant==="elevation"&&s({boxShadow:(o.vars||o).shadows[e.elevation]},!o.vars&&o.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${m("#fff",q(e.elevation))}, ${m("#fff",q(e.elevation))})`},o.vars&&{backgroundImage:(r=o.vars.overlays)==null?void 0:r[e.elevation]}))}),To=f.forwardRef(function(e,r){const t=R({props:e,name:"MuiPaper"}),{className:n,component:a="div",elevation:i=1,square:u=!1,variant:p="elevation"}=t,l=$(t,Io),v=s({},t,{component:a,elevation:i,square:u,variant:p}),g=ho(v);return c(Ao,s({as:a,ownerState:v,className:B(g.root,n),ref:r},l))}),zo=To;function _o(o){return y("MuiIconButton",o)}const Mo=C("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),No=Mo,Do=["edge","children","className","color","disabled","disableFocusRipple","size"],Po=o=>{const{classes:e,disabled:r,color:t,edge:n,size:a}=o,i={root:["root",r&&"disabled",t!=="default"&&`color${d(t)}`,n&&`edge${d(n)}`,`size${d(a)}`]};return I(i,_o,e)},Fo=k(co,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,r.color!=="default"&&e[`color${d(r.color)}`],r.edge&&e[`edge${d(r.edge)}`],e[`size${d(r.size)}`]]}})(({theme:o,ownerState:e})=>s({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:m(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}),({theme:o,ownerState:e})=>{var r;const t=(r=(o.vars||o).palette)==null?void 0:r[e.color];return s({},e.color==="inherit"&&{color:"inherit"},e.color!=="inherit"&&e.color!=="default"&&s({color:t==null?void 0:t.main},!e.disableRipple&&{"&:hover":s({},t&&{backgroundColor:o.vars?`rgba(${t.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:m(t.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),e.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},e.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${No.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),Vo=f.forwardRef(function(e,r){const t=R({props:e,name:"MuiIconButton"}),{edge:n=!1,children:a,className:i,color:u="default",disabled:p=!1,disableFocusRipple:l=!1,size:v="medium"}=t,g=$(t,Do),b=s({},t,{edge:n,color:u,disabled:p,disableFocusRipple:l,size:v}),T=Po(b);return c(Fo,s({className:B(T.root,i),centerRipple:!0,focusRipple:!l,disabled:p,ref:r,ownerState:b},g,{children:a}))}),Oo=Vo;function Lo(o){return y("MuiAppBar",o)}C("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const qo=["className","color","enableColorOnDark","position"],Uo=o=>{const{color:e,position:r,classes:t}=o,n={root:["root",`color${d(e)}`,`position${d(r)}`]};return I(n,Lo,t)},h=(o,e)=>`${o==null?void 0:o.replace(")","")}, ${e})`,jo=k(zo,{name:"MuiAppBar",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,e[`position${d(r.position)}`],e[`color${d(r.color)}`]]}})(({theme:o,ownerState:e})=>{const r=o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900];return s({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},e.position==="fixed"&&{position:"fixed",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},e.position==="absolute"&&{position:"absolute",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},e.position==="sticky"&&{position:"sticky",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},e.position==="static"&&{position:"static"},e.position==="relative"&&{position:"relative"},!o.vars&&s({},e.color==="default"&&{backgroundColor:r,color:o.palette.getContrastText(r)},e.color&&e.color!=="default"&&e.color!=="inherit"&&e.color!=="transparent"&&{backgroundColor:o.palette[e.color].main,color:o.palette[e.color].contrastText},e.color==="inherit"&&{color:"inherit"},o.palette.mode==="dark"&&!e.enableColorOnDark&&{backgroundColor:null,color:null},e.color==="transparent"&&s({backgroundColor:"transparent",color:"inherit"},o.palette.mode==="dark"&&{backgroundImage:"none"})),o.vars&&s({},e.color==="default"&&{"--AppBar-background":e.enableColorOnDark?o.vars.palette.AppBar.defaultBg:h(o.vars.palette.AppBar.darkBg,o.vars.palette.AppBar.defaultBg),"--AppBar-color":e.enableColorOnDark?o.vars.palette.text.primary:h(o.vars.palette.AppBar.darkColor,o.vars.palette.text.primary)},e.color&&!e.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":e.enableColorOnDark?o.vars.palette[e.color].main:h(o.vars.palette.AppBar.darkBg,o.vars.palette[e.color].main),"--AppBar-color":e.enableColorOnDark?o.vars.palette[e.color].contrastText:h(o.vars.palette.AppBar.darkColor,o.vars.palette[e.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:e.color==="inherit"?"inherit":"var(--AppBar-color)"},e.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),Eo=f.forwardRef(function(e,r){const t=R({props:e,name:"MuiAppBar"}),{className:n,color:a="primary",enableColorOnDark:i=!1,position:u="fixed"}=t,p=$(t,qo),l=s({},t,{color:a,position:u,enableColorOnDark:i}),v=Uo(l);return c(jo,s({square:!0,component:"header",ownerState:l,elevation:4,className:B(v.root,n,u==="fixed"&&"mui-fixed"),ref:r},p))}),Go=Eo;function Wo(o){return y("MuiLink",o)}const Ho=C("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Qo=Ho,Q={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},So=o=>Q[o]||o,Xo=({theme:o,ownerState:e})=>{const r=So(e.color),t=V(o,`palette.${r}`,!1)||e.color,n=V(o,`palette.${r}Channel`);return"vars"in o&&n?`rgba(${n} / 0.4)`:m(t,.4)},Jo=Xo,Ko=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Yo=o=>{const{classes:e,component:r,focusVisible:t,underline:n}=o,a={root:["root",`underline${d(n)}`,r==="button"&&"button",t&&"focusVisible"]};return I(a,Wo,e)},Zo=k(A,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,e[`underline${d(r.underline)}`],r.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>s({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&s({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:Jo({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Qo.focusVisible}`]:{outline:"auto"}})),wo=f.forwardRef(function(e,r){const t=R({props:e,name:"MuiLink"}),{className:n,color:a="primary",component:i="a",onBlur:u,onFocus:p,TypographyClasses:l,underline:v="always",variant:g="inherit",sx:b}=t,T=$(t,Ko),{isFocusVisibleRef:D,onBlur:X,onFocus:J,ref:K}=W(),[Y,P]=f.useState(!1),Z=G(r,K),w=x=>{X(x),D.current===!1&&P(!1),u&&u(x)},oo=x=>{J(x),D.current===!0&&P(!0),p&&p(x)},F=s({},t,{color:a,component:i,focusVisible:Y,underline:v,variant:g}),eo=Yo(F);return c(Zo,s({color:a,className:B(eo.root,n),classes:l,component:i,onBlur:w,onFocus:oo,ref:Z,ownerState:F,variant:g,sx:[...Object.keys(Q).includes(a)?[]:[{color:a}],...Array.isArray(b)?b:[b]]},T))}),oe=wo;function ee(o){return y("MuiToolbar",o)}C("MuiToolbar",["root","gutters","regular","dense"]);const re=["className","component","disableGutters","variant"],te=o=>{const{classes:e,disableGutters:r,variant:t}=o;return I({root:["root",!r&&"gutters",t]},ee,e)},ne=k("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,!r.disableGutters&&e.gutters,e[r.variant]]}})(({theme:o,ownerState:e})=>s({position:"relative",display:"flex",alignItems:"center"},!e.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}},e.variant==="dense"&&{minHeight:48}),({theme:o,ownerState:e})=>e.variant==="regular"&&o.mixins.toolbar),ae=f.forwardRef(function(e,r){const t=R({props:e,name:"MuiToolbar"}),{className:n,component:a="div",disableGutters:i=!1,variant:u="regular"}=t,p=$(t,re),l=s({},t,{component:a,disableGutters:i,variant:u}),v=te(l);return c(ne,s({as:a,className:B(v.root,n),ref:r,ownerState:l},p))}),se=ae;var M={},ie={get exports(){return M},set exports(o){M=o}};(function(o){function e(r){return r&&r.__esModule?r:{default:r}}o.exports=e,o.exports.__esModule=!0,o.exports.default=o.exports})(ie);var z={};const le=j($o);var U;function ce(){return U||(U=1,function(o){Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=le}(z)),z}const ue=j(no),xe=({title:o="Undefinded",link:e="/"})=>E(_,{display:"flex",alignItems:"center",paddingX:"18px",children:[c(A,{flex:1,fontSize:"small",fontWeight:"bold",children:o}),c(oe,{underline:"none",href:e,children:c(A,{fontSize:"small",color:"primary",children:"See All"})})]});var N={},pe=M;Object.defineProperty(N,"__esModule",{value:!0});var S=N.default=void 0,de=pe(ce()),fe=ue,ve=(0,de.default)((0,fe.jsx)("path",{d:"M9.7 18.3c.39-.39.39-1.02 0-1.41L5.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1H5.83l3.88-3.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L2.7 11.3c-.39.39-.39 1.02 0 1.41l5.59 5.59c.39.38 1.03.38 1.41 0z"}),"WestRounded");S=N.default=ve;const me=()=>c(_,{sx:{flexGrow:1},children:c(Go,{position:"relative",sx:{top:0,boxShadow:"none",backgroundColor:"#fff",borderBottom:"1px solid whitesmoke"},children:E(se,{sx:{px:"8px"},children:[c(_,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:c(Oo,{color:"black","aria-label":"back-button",children:c(S,{fontSize:"small"})})}),c(A,{flexGrow:1,variant:"h5",ml:1,color:"#000",fontFamily:"Roboto",fontSize:19,fontWeight:"bold",children:"New Project"})]})})});export{Go as A,Oo as I,me as N,zo as P,se as T,xe as V,go as a,ue as b,uo as c,po as d,M as i,H as o,ce as r,Co as u};
