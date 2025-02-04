/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsxs as z,jsx as L,Fragment as _e}from"@dropins/tools/preact-jsx-runtime.js";import*as I from"@dropins/tools/preact-compat.js";import{useState as k,Children as R,useRef as le,useMemo as be,useEffect as B,useCallback as V}from"@dropins/tools/preact-compat.js";import{debounce as ve,classes as M}from"@dropins/tools/lib.js";import{Button as he,Icon as Ne}from"@dropins/tools/components.js";/* empty css     */import{useText as S}from"@dropins/tools/i18n.js";import{cloneElement as Ee}from"@dropins/tools/preact.js";const We=i=>I.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},I.createElement("path",{d:"M7.74512 9.87701L12.0001 14.132L16.2551 9.87701",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),Le=i=>I.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},I.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 5.64001L5.62988 18.37",stroke:"currentColor"}),I.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 18.37L5.62988 5.64001",stroke:"currentColor"})),ke=24,ye=16,H=2,De="32";var Ce=(i=>(i[i.small=16]="small",i[i.medium=24]="medium",i[i.large=64]="large",i))(Ce||{});const He=({show:i=1,scrollbar:y=!1,peak:v=!1,arrows:p=!1,controls:l="dots",arrowsOnMainImage:W=!1,loop:n=!1,gap:C=null,direction:P="horizontal",width:N="100%",height:X="100%",defaultIndex:D=0,className:ae,children:E,thumbnails:Y=null,isZoomed:J,...Q})=>{const G=S("PDP.Carousel.label").label,ee=S("PDP.Carousel.Slide.label").label,te=S("PDP.Carousel.Previous.label").label,re=S("PDP.Carousel.Next.label").label,ce=S("PDP.Carousel.Controls.label").label,oe=S("PDP.Carousel.Controls.Button.label").label,[d,ie]=k(()=>we(i)),r=Math.ceil(R.count(E)/d),h=v?ke:0,m=C?Ce[C]:0,x=R.count(E)%d,[a,O]=k(n?w()?D-1:D+1:D),$=le([]),[Z,ue]=k(0),[j,Me]=k(0),fe=be(()=>R.toArray(Y),[Y]),g=be(()=>{const e=R.toArray(E).reduce((t,s,o)=>o%d===0?[...t,[s]]:[...t.slice(0,-1),[...t[t.length-1],s]],[]);return!n||e.length===1?e:n&&R.count(E)%d===0?[e[r-1]].concat(e).concat([e[0],e[1]]):[R.toArray(E).slice(-d)].concat(e).concat([e[0],e[1]])},[E,d,r,n]),F=le(null),pe=le(null),_=l==="thumbnailsRow"||l==="thumbnailsColumn";B(()=>{const e=F.current;if(!e)return;const t=ve(()=>{ue(e.offsetWidth??0),Me(e.offsetHeight??0);const o=window.innerWidth,u=we(i,o);u!==d&&ie(u)},50),s=new ResizeObserver(t);return s.observe(e),()=>{s.unobserve(e)}},[d,i]);const K=V(e=>{const t=n?e-1:e,s=$==null?void 0:$.current[0],o=(s==null?void 0:s.offsetWidth)+ye,u=(s==null?void 0:s.offsetHeight)+ye,c=pe.current,T=l==="thumbnailsRow",ne=l==="thumbnailsColumn",A=T?c==null?void 0:c.offsetWidth:c==null?void 0:c.offsetHeight,f=T?o:u;(T||ne)&&A&&(f*(t+1)>A&&(c.style.scrollBehavior="smooth",T?c.scrollLeft=w()?c.scrollWidth-c.clientWidth-(t+H)*f:(t+H)*f:c.scrollTop=(t+H)*f),(w()&&(T?c.scrollLeft:c.scrollTop)<=-f*t||!w()&&(T?c.scrollLeft:c.scrollTop)>f*t)&&(c.style.scrollBehavior="smooth",T?c.scrollLeft=w()?-(t-H)*f:(t-H)*f:c.scrollTop=(t-H)*f))},[l,n]);B(()=>{K(a)},[a,K]);const b=V((e,t,s)=>{_&&K(e);const o=F.current,u=h?o.offsetWidth-h:o.offsetWidth-h+m;if(!Array.from(o.querySelectorAll("[data-index]")).filter(A=>{const f=Number(A.getAttribute("data-index"));return!isNaN(f)&&f>-1})[e])return;if(s){const A=e===0?r:0,f=u*(r+(x||d)/d);if(w()){if(o.scrollLeft<=0&&o.scrollLeft>-(u-5)){b(1,!0);return}if(o.scrollLeft<u-f&&o.scrollLeft>=-f){b(r,!0);return}o.style.scrollBehavior="auto",o.scrollLeft=A===0?0:-f,b(A===0?1:r,!0)}else{if(o.scrollLeft>=0&&o.scrollLeft<u-5){b(1,!0);return}if(o.scrollLeft>f-u&&o.scrollLeft<=f){b(r,!0);return}o.style.scrollBehavior="auto",o.scrollLeft=A===0?0:f,b(A===0?1:r,!0);return}}const ne=(o.offsetWidth-m)/d*g[e].length-h;o.style.scrollBehavior=t?"smooth":"auto",o.scrollLeft=w()?-(g[e].length===d?u*e:u*(e-1)-ne):g[e].length===d?u*e:u*(e-1)+ne},[m,r,h,d,x,g,K,l]),q=V(()=>{if(n){const t=a-1;b(t,!0,w()?a===r-1:a===1);return}const e=a<=0?0:a-1;b(e,!0)},[a,b,n]),U=V(()=>{const e=g.length-1;if(n){const s=a+1;b(s,!0,w()?a===0:a===r);return}const t=a>=e?e:a+1;b(t,!0)},[g.length,n,a,b,r]);B(()=>{const e=t=>{t.key==="ArrowLeft"&&(t.preventDefault(),w()?U():q()),t.key==="ArrowRight"&&(t.preventDefault(),w()?q():U())};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[U,q]),B(()=>{b(n?D+1:D,!1)},[D,b,n]);const de=ve(()=>{const e=F.current,t=h?e.offsetWidth-h:e.offsetWidth-h+m,s=Math.abs(e.scrollLeft)/t,o=Math.abs(Math.round(s)-s<1?Math.round(s):Math.ceil(s));if(_&&K(o),n){const u=t*(r+(x||d)/d),c=w()?-e.scrollLeft:e.scrollLeft;if(Math.ceil(Math.abs(c))>=Math.ceil(u)-5){e.style.scrollBehavior="auto",e.scrollLeft=w()?-e.offsetWidth+(Math.ceil(c)-Math.ceil(u)-h):e.offsetWidth+(Math.ceil(c)-Math.ceil(u)-h);return}if(Math.abs(c)===0){e.style.scrollBehavior="auto",e.scrollLeft=w()?-(u-e.offsetWidth+h):u-e.offsetWidth+h;return}}a!==o&&O(o)},100);B(()=>{const e=F.current;return e==null||e.addEventListener("scroll",de),()=>{e==null||e.removeEventListener("scroll",de)}},[de]);const se=(e,t,s)=>L(he,{className:M([["pdp-carousel__button",!e],[`pdp-carousel__button--${t}`,!e],[`pdp-carousel__button--${l}`,e]]),style:{"--height":`${j}px`},variant:"tertiary","aria-label":t==="next"?re:te,onClick:s,disabled:n?!1:t==="next"?a>=g.length-1:a<1,children:L(Ne,{className:M([["pdp-carousel__button__icon",!e],[`pdp-carousel__button__icon--${t}`,!e],[`pdp-carousel__button__icon--${l}--${t}`,e]]),size:De,source:We})}),me=p&&g.length!=1&&se(_,"prev",q),ge=p&&g.length!=1&&se(_,"next",U),Pe=p&&g.length!=1&&se(!1,"prev",q),xe=p&&g.length!=1&&se(!1,"next",U);return z("div",{role:"region","aria-roledescription":G,className:M(["pdp-carousel",["pdp-carousel--main-image-controls",W],["pdp-carousel--arrows",p&&!_],[`pdp-carousel--${l}`,_],ae]),style:{"--flex-carousel":l==="thumbnailsColumn"?"row-reverse":"column","--gap":_?"0":"var(--spacing-small)","--width":N},...Q,children:[L("div",{ref:F,className:M(["pdp-carousel__wrapper",`pdp-carousel__wrapper--${P}`,["pdp-carousel__wrapper--scrollbar",y],["pdp-carousel__wrapper--peak",v]]),style:{"--total-width":l==="thumbnailsColumn"?"81.6%":"100%","--height":l==="thumbnailsColumn"?"auto":X,"--gap":C?`var(--spacing-${C})`:"0px","--per-page":d},tabIndex:0,children:g.map((e,t)=>{const s=e.length<d;return L("div",{role:"group","aria-roledescription":ee,"data-index":t,className:M(["pdp-carousel__slide",`pdp-carousel__slide--${P}`,["pdp-carousel__slide--active",a===t],["pdp-carousel__slide--orphan",s]]),style:{"--length":e.length},children:e},t)})}),!_&&z(_e,{children:[me,ge]}),_&&W&&z(_e,{children:[Pe,xe]}),l&&g.length!=1&&z("div",{className:M([[`pdp-carousel__controls__container--${l}`,_],["pdp-carousel__controls__container--no-arrows",!p||W]]),style:{"--width":l==="thumbnailsRow"?`${Z}px`:N,"--height":`${j}px`,"--nr-thumbnails":fe.length},children:[(_||J)&&!W&&me,L("div",{ref:pe,className:M([[`pdp-carousel__controls__wrapper--${l}`,_],["pdp-carousel__controls__wrapper",_]]),children:L("div",{role:"group","aria-label":ce,className:M(["pdp-carousel__controls",[`pdp-carousel__controls--${l}`,_]]),children:(n?g.slice(0,r):g).map((e,t)=>{const s=n?r:g.length,o=n?a-1===t:a===t;return _?z("label",{className:M(["pdp-carousel__thumbnail__container"]),ref:u=>{u&&($.current[t]=u)},children:[L("input",{type:"radio",name:"carousel-thumbnails","aria-label":oe.replace("{key}",String(t+1)).replace("{total}",String(s)),checked:o&&Z!==0,onChange:()=>{b(n?t+1:t,!0)},...Q,className:M(["pdp-carousel__thumbnail",["pdp-carousel__thumbnail--selected",o&&Z!==0]])}),L("span",{className:M(["pdp-carousel__thumbnail__span"]),children:fe[t]})]},t):L("button",{"aria-label":oe.replace("{key}",String(t+1)).replace("{total}",String(s)),onClick:()=>{b(n?t+1:t,!0)},className:M(["pdp-carousel__controls__button",["pdp-carousel__controls__button--active",o]])},t)})})}),(_||J)&&!W&&ge]})]})};function we(i,y=0){if(typeof i=="number")return i;const{small:v,medium:p,large:l}=i,n=[{breakpoint:1024,value:l},{breakpoint:786,value:p},{breakpoint:0,value:v}].find(({breakpoint:C})=>y>C);return n?n.value:v}function w(){return document.documentElement.dir==="rtl"}const Xe=({centered:i,onClose:y,className:v,children:p,...l})=>{const W=S("PDP.Overlay.Close.label").label,n=le(null),C=V(()=>{y==null||y()},[y]);return B(()=>{const P=N=>{N.key==="Escape"&&C()};return document.addEventListener("keydown",P),()=>{document.removeEventListener("keydown",P)}},[C]),B(()=>{const P=n.current;P==null||P.focus();const N=document.scrollingElement,X=N.style.overflow;return N.style.overflow="hidden",()=>{N.style.overflow=X}},[]),z("div",{...l,className:M(["pdp-overlay",["pdp-overlay--centered",i],v]),ref:n,role:"dialog","aria-describedby":"overlay-content",tabindex:0,children:[L("div",{className:"pdp-overlay__content",id:"overlay-content",children:p}),L(he,{"aria-label":W,variant:"tertiary",className:"pdp-overlay__close-button",onClick:C,icon:L(Le,{})})]})},Ye=({children:i,scale:y=2,closeButton:v=!0})=>{const[p,l]=k(!1),[W,n]=k("pdp-zoom"),[C,P]=k(!1),[N,X]=k({x:0,y:0}),[D,ae]=k({x:0,y:0}),[E,Y]=k({x:0,y:0}),J=r=>{!p||r.type!=="touchstart"||(X({x:r.touches[0].clientX,y:r.touches[0].clientY}),ae({x:E.x,y:E.y}),P(!0))},Q=r=>{var j;if(!C||r.type!=="touchmove")return;const h=(j=r.currentTarget)==null?void 0:j.getBoundingClientRect(),m=(100-100/y)/2,x=r.touches[0].clientX-N.x,a=r.touches[0].clientY-N.y,O=x*100/(h.width*y),$=a*100/(h.height*y),Z=D.x+O,ue=D.y+$;Y({x:Math.max(-m,Math.min(Z,m))||0,y:Math.max(-m,Math.min(ue,m))||0}),r.preventDefault()},G=r=>{var $;const h=($=r.currentTarget)==null?void 0:$.getBoundingClientRect(),m=(100-100/y)/2;let x;if("touches"in r)x=r.touches[0];else if(r instanceof MouseEvent)x=r;else return;const a=m-(x.clientX-h.left)/h.width*100,O=m-(x.clientY-h.top)/h.height*100;Y({x:Math.max(-m,Math.min(a,m))||0,y:Math.max(-m,Math.min(O,m))||0})},ee=r=>{if(!C){if(p){if(v&&"touches"in r){J(r);return}v||l(!1)}else l(!0),G(r);r.preventDefault()}},te=r=>{if(v&&"touches"in r){Q(r);return}p&&G(r)},re=()=>{if(v){P(!1);return}l(!1)},ce=r=>{l(!1),r.stopPropagation()},oe=p?`scale(${y}) translateX(${E.x}%) translateY(${E.y}%)`:"none",d=S("PDP.Zoom.Close.label").label,ie=Ee(R.only(i),{draggable:!1,style:{"--transform":oe}});return B(()=>{n(p?`pdp-zoom ${v?"pdp-zoom--no-effects":"pdp-zoom--zoomed"}`:"pdp-zoom")},[p,v]),z("figure",{className:W,onClick:ee,onMouseMove:te,onMouseLeave:re,onTouchStart:ee,onTouchMove:te,onTouchEnd:re,children:[ie,v&&p&&L(he,{"aria-label":d,variant:"tertiary",className:"pdp-zoom__close-button",icon:L(Le,{}),onClick:ce})]})};export{He as C,Xe as O,Ye as Z};
