"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[994],{1211:(e,a,t)=>{t.d(a,{Z:()=>v});var n=t(9307),s=t(9250),l=t(9818),r=t(2503);const i=e=>{let{text:a,handleClick:t,disabled:s,className:l}=e;return(0,n.createElement)("button",{type:"button",className:`${l} nfd-card-button`,onClick:()=>{t()},disabled:s},a)};var o=t(7533),u=t(2200),c=t(8297),d=t(6342),p=t(3421),y=t(4184),m=t.n(y),g=t(1984);const v=e=>{let{text:a,disabled:t,className:y,icon:v}=e;const b=(0,s.s0)(),{nextStep:h,currentData:T}=(0,l.useSelect)((e=>({nextStep:e(r.h).getNextStep(),currentData:e(r.h).getCurrentOnboardingData()})),[]),f=null===h||!1===h;return(0,n.createElement)(i,{className:m()("nfd-nav-card-button",y),text:(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:`${y}__text`},a),v&&(0,n.createElement)(g.Z,{className:`${y}__icon`,icon:v})),handleClick:()=>f?async function(){T&&(T.isComplete=(new Date).getTime(),(0,o.kB)(T)),(0,p.jd)(),(0,c.uW)(new c.Z_(d.pd)),window.location.replace(u.br)}():b(h.path),disabled:t})}},1994:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});var n=t(9307),s=t(5634),l=t(349),r=t(2200),i=t(7560),o=t(2503),u=t(9818),c=t(9519),d=t(1211),p=t(950),y=t(682),m=t(6557),g=t(8297),v=t(6342);const b=()=>{var e,a;const{setDrawerActiveView:t,setSidebarActiveView:b,setIsDrawerSuppressed:h,setIsHeaderNavigationEnabled:T,setCurrentOnboardingData:f}=(0,u.useDispatch)(o.h);(0,n.useEffect)((()=>{b(r.Jq),h(!0),t(r.mz),T(!0),A()}),[]);const _=(0,i.Z)(),[w,E]=(0,n.useState)(!1),[N,k]=(0,n.useState)(),[C,x]=(0,n.useState)(),[S,I]=(0,n.useState)(),[Z,D]=(0,n.useState)(""),[O,H]=(0,n.useState)(),{currentData:R}=(0,u.useSelect)((e=>({currentData:e(o.h).getCurrentOnboardingData()})),[]),A=async()=>{var e,a,t,n,s,l,r,i,o,u,c,d,p,y,g,v;const b=await(0,m.P)(),h=Object.keys(null==b||null===(e=b.body)||void 0===e?void 0:e.types)[0];I(h),k(null==b?void 0:b.body);const T=Object.keys(null==b||null===(a=b.body)||void 0===a?void 0:a.types);if(x(T),"string"==typeof(null==R||null===(t=R.data)||void 0===t||null===(n=t.siteType)||void 0===n?void 0:n.primary)){var _,w;const e=null==R||null===(_=R.data)||void 0===_||null===(w=_.siteType)||void 0===w?void 0:w.primary;R.data.siteType.primary={refers:"custom",value:e},f(R)}if("string"==typeof(null==R||null===(s=R.data)||void 0===s||null===(l=s.siteType)||void 0===l?void 0:l.secondary)){var E,N;const e=null==R||null===(E=R.data)||void 0===E||null===(N=E.siteType)||void 0===N?void 0:N.secondary;R.data.siteType.secondary={refers:"custom",value:e},f(R)}var C,S,Z,O,H,A,j,$,q,B,F,U;(D(null!==(r=null==R||null===(i=R.data)||void 0===i||null===(o=i.siteType)||void 0===o||null===(u=o.secondary)||void 0===u?void 0:u.value)&&void 0!==r?r:""),""!==(null==R||null===(c=R.data)||void 0===c||null===(d=c.siteType)||void 0===d||null===(p=d.primary)||void 0===p?void 0:p.value))&&("custom"!==(null==R||null===(C=R.data)||void 0===C||null===(S=C.siteType)||void 0===S||null===(Z=S.primary)||void 0===Z?void 0:Z.refers)?I(null==R||null===(O=R.data)||void 0===O||null===(H=O.siteType)||void 0===H||null===(A=H.primary)||void 0===A?void 0:A.value):(I(h),P(null==R||null===(j=R.data)||void 0===j||null===($=j.siteType)||void 0===$||null===(q=$.secondary)||void 0===q?void 0:q.value)));"custom"===(null==R||null===(y=R.data)||void 0===y||null===(g=y.siteType)||void 0===g||null===(v=g.secondary)||void 0===v?void 0:v.refers)&&P(null==R||null===(B=R.data)||void 0===B||null===(F=B.siteType)||void 0===F||null===(U=F.secondary)||void 0===U?void 0:U.value)},P=e=>{E(!0),R.data.siteType.secondary.refers="custom",R.data.siteType.secondary.value=e,f(R),""!==Z&&Z!==e&&(clearTimeout(O),H(setTimeout((()=>{(0,g.tH)(new g.Z_(v.GX,e))}),1e3))),D(e)},j=e=>{if(Z===e&&R.data.siteType.primary.value===S)return!0;E(!1),D(e),R.data.siteType.secondary.refers="slug",R.data.siteType.primary.value!==S&&(R.data.siteType.primary.refers="slug",R.data.siteType.primary.value=S,(0,g.tH)(new g.Z_(v.xp,S))),R.data.siteType.secondary.value=e,f(R),(0,g.tH)(new g.Z_(v.GX,e))},$=e=>{const a=C.findIndex((e=>S===e));let t;switch(e){case"back":t=C[(a-1+C.length)%C.length],I(t);break;case"next":t=C[(a+1)%C.length],I(t)}(0,g.tH)(new g.Z_(v.xp,t))};return(0,n.createElement)(s.Z,{isBgPrimary:!0,isCentered:!0},(0,n.createElement)(l.Z,null,(0,n.createElement)("div",{className:"nfd-card-heading center"},(0,n.createElement)(c.Z,{heading:_.heading,subHeading:_.subheading,question:_.question})),(0,n.createElement)(y.Z,{type:"fade-in-disabled",after:N},(0,n.createElement)("div",{className:"nfd-setup-secondary-categories"},(0,n.createElement)("div",{className:"nfd-card-sec-category-wrapper"},N&&(0,n.createElement)("div",{className:"category-scrolling-wrapper"},C&&C.length>1&&(0,n.createElement)("div",{className:"category-scrolling-wrapper__left-btn"},(0,n.createElement)("span",{className:"category-scrolling-wrapper__left-btn-icon",onClick:()=>$("back"),onKeyUp:()=>$("back"),role:"button",tabIndex:0,style:{backgroundImage:"var(--chevron-left-icon)"}})),(0,n.createElement)("div",{className:"category-scrolling-wrapper__type"},(0,n.createElement)("span",{className:"category-scrolling-wrapper__type-icon",style:{backgroundImage:`url(${null==N||null===(e=N.types[S])||void 0===e?void 0:e.icon})`}}),(0,n.createElement)("p",{className:"category-scrolling-wrapper__type-text"},` ${null==N||null===(a=N.types[S])||void 0===a?void 0:a.label}`)),C&&C.length>1&&(0,n.createElement)("div",{className:"category-scrolling-wrapper__right-btn"},(0,n.createElement)("span",{className:"category-scrolling-wrapper__right-btn-icon",onClick:()=>$("next"),onKeyUp:()=>$("next"),role:"button",tabIndex:0,style:{backgroundImage:"var(--chevron-right-icon)"}})))),(0,n.createElement)("div",{className:"subCategoriesSection"},N&&(()=>{var e;const a=null==N||null===(e=N.types[S])||void 0===e?void 0:e.secondaryTypes;return Object.keys(a).map(((e,t)=>{var s,l;return(0,n.createElement)("div",{key:null===(s=a[e])||void 0===s?void 0:s.slug,role:"button",tabIndex:t+1,className:(a[e].slug!==Z||w?"":"chosenSecondaryCategory ")+"nfd-card-sec-category",onClick:()=>j(a[e].slug),onKeyDown:()=>j(a[e].slug)},(0,n.createElement)("span",{className:"categName"},null===(l=a[e])||void 0===l?void 0:l.label))}))})()),(0,n.createElement)("div",{className:"nfd-setup-primary-custom"},(0,n.createElement)("div",{className:"nfd-setup-primary-custom__tellus-text"},_.customInputLabel),(0,n.createElement)("input",{type:"search",onChange:e=>{var a;return P(null==e||null===(a=e.target)||void 0===a?void 0:a.value)},className:"nfd-setup-primary-custom__tellus-input",placeholder:_.customInputPlaceholderText,value:w?Z:""})))),(0,n.createElement)(d.Z,{text:_.buttonText}),(0,n.createElement)(p.Z,null)))}},7560:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(5736),s=t(1392);const l=()=>({heading:(0,n.sprintf)(
/* translators: %s: website or store */
(0,n.__)("Help us tailor this setup to your %s","wp-module-onboarding"),(0,s.I)("site")),subheading:(0,n.sprintf)(
/* translators: %s: SITE or STORE */
(0,n.__)("ABOUT YOUR %s","wp-module-onboarding"),(0,s.I)("SITE")),question:(0,n.sprintf)(
/* translators: %s: site or store */
(0,n.__)("What type of %s is it?","wp-module-onboarding"),(0,s.I)("site")),buttonText:(0,n.__)("Continue Setup","wp-module-onboarding"),customInputPlaceholderText:(0,n.sprintf)(
/* translators: %s: site or store */
(0,n.__)("Enter to search your %s type","wp-module-onboarding"),(0,s.I)("site")),customInputLabel:(0,n.__)("or tell us here:","wp-module-onboarding")})},6557:(e,a,t)=>{t.d(a,{P:()=>o});var n=t(6329),s=t(4704);const l=JSON.parse('{"body":{"types":{"business":{"slug":"business","label":"Business","icon":"https://cdn.hiive.space/site-classification/business.svg","emoji":"💼","schema":"Corporation","secondaryTypes":{"agency-consulting":{"primaryType":"business","slug":"agency-consulting","label":"Agency & Consulting"},"arts-crafts":{"primaryType":"business","slug":"arts-crafts","label":"Arts & Crafts"},"autos-repair":{"primaryType":"business","slug":"autos-repair","label":"Autos & Repair"},"child-care":{"primaryType":"business","slug":"child-care","label":"Child Care"},"events":{"primaryType":"business","slug":"events","label":"Events"},"finance":{"primaryType":"business","slug":"finance","label":"Finance"},"garden-florist":{"primaryType":"business","slug":"garden-florist","label":"Florist & Garden Center"},"hr-recruiting":{"primaryType":"business","slug":"hr-recruiting","label":"HR & Recruiting"},"insurance":{"primaryType":"business","slug":"insurance","label":"Insurance"},"legal":{"primaryType":"business","slug":"legal","label":"Legal"},"marketing":{"primaryType":"business","slug":"marketing","label":"Marketing"},"outdoors":{"primaryType":"business","slug":"outdoors","label":"Outdoors"},"pr-communications":{"primaryType":"business","slug":"pr-communications","label":"PR & Communications"},"real-estate-management":{"primaryType":"business","slug":"real-estate-management","label":"Real Estate & Management"},"shopping-retail":{"primaryType":"business","slug":"shopping-retail","label":"Shopping & Retail"},"trades-repair-services":{"primaryType":"business","slug":"trades-repair-services","label":"Trades & Repair Services"},"weddings":{"primaryType":"business","slug":"weddings","label":"Weddings"}}}}}}');var r=t(6989),i=t.n(r);async function o(){const e=await(0,n.D)(i()({url:(0,s.FZ)("site-classification")}));return 0===e.body.length?l:e}}}]);