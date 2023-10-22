"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[111],{4401:(e,t,a)=>{a.d(t,{V:()=>l});var r=a(9307),o=a(5634),n=a(1526),i=a(950);const l=e=>{let{title:t,subtitle:a,error:l}=e;return(0,r.createElement)(o.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,r.createElement)(n.Z,{title:t,subtitle:a}),(0,r.createElement)("div",{className:"step-error-state__logo"}),(0,r.createElement)("h3",{className:"step-error-state__error"},l),(0,r.createElement)(i.Z,null))}},9291:(e,t,a)=>{a.d(t,{L:()=>i,Y:()=>r.Z});var r=a(35),o=a(9307),n=a(682);const i=()=>(0,o.createElement)("div",{className:"image-upload-loader--loading-box"},(0,o.createElement)(n.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},3124:(e,t,a)=>{a.d(t,{U:()=>D});var r=a(9307),o=a(9818),n=a(4333),i=a(5736),l=a(9291),s=a(2503),u=a(7625),d=a(2200),c=a(4401);var m=a(9250),g=a(4310),b=a(5609),w=a(4184),h=a.n(w),p=a(7207),_=a(7533),f=a(8395),E=a(8297),y=a(6342),S=a(3421),v=a(3568);const N=e=>{let{buttonText:t=(0,i.__)("Exit to WordPress","wp-module-onboarding"),showButtonIcon:a=!0,showButton:n=!0,buttonVariant:l="secondary",buttonClassName:u=!1,isModalOpen:c=!1,modalTitle:w=(0,i.__)("Exit without finishing?","wp-module-onboarding"),modalText:N=!1,modalPrimaryCloseButtonText:D=(0,i.__)("Continue","wp-module-onboarding"),modalOnClose:x=!1,modalExitButtonText:C=(0,i.__)("Exit","wp-module-onboarding")}=e;const[T,k]=(0,r.useState)(c),B=()=>{"function"==typeof x&&x(),k(!1)},O=(0,m.TH)(),{currentData:P,brandName:I,socialData:V,currentStep:Z}=(0,o.useSelect)((e=>({currentData:e(s.h).getCurrentOnboardingData(),brandName:e(s.h).getNewfoldBrandName(),socialData:e(s.h).getOnboardingSocialData(),currentStep:e(s.h).getCurrentStep()})),[]),{setOnboardingSocialData:H}=(0,o.useDispatch)(s.h);return N||(N=(0,i.sprintf)(
/* translators: %s: Brand */
(0,i.__)("You can restart onboarding from your %s Settings page.","wp-module-onboarding"),I)),(0,r.createElement)(r.Fragment,null,n&&(0,r.createElement)(b.Button,{icon:!!a&&g.Z,variant:l,onClick:()=>k(!0),className:h()("nfd-onboarding-etw__trigger",u)},t),T&&(0,r.createElement)(b.Modal,{title:w,onRequestClose:()=>B()},(0,r.createElement)("p",null,N),(0,r.createElement)(b.ButtonGroup,{className:"nfd-onboarding-etw__buttons"},(0,r.createElement)(b.Button,{variant:"secondary",onClick:()=>B()},D),(0,r.createElement)(b.Button,{variant:"primary",onClick:()=>async function(e){if(P){var t;if(P.hasExited=(new Date).getTime(),null!=e&&e.includes("basic-info")){const e=await async function(){const e=await(0,f.Gw)(),t=await(0,f.I2)(V);return null!==(null==t?void 0:t.error)?null==e?void 0:e.body:null==t?void 0:t.body}();e&&H(e)}(0,_.kB)(P),(0,v.a)(null==P||null===(t=P.data)||void 0===t?void 0:t.comingSoon)}(0,S.jd)(),(0,E.tH)(new E.Z_(y._C,Z.title)),await p.v.dispatchEvents(y.En),window.location.replace(d.br)}(O.pathname)},C))))},D=e=>{let{children:t,navigationStateCallback:a=!1,refresh:m=!0}=e;const g=(0,n.useViewportMatch)("medium"),{storedThemeStatus:b,brandName:w}=(0,o.useSelect)((e=>({storedThemeStatus:e(s.h).getThemeStatus(),brandName:e(s.h).getNewfoldBrandName()})),[]),h=(e=>({loader:{title:(0,i.sprintf)(
/* translators: %s: Brand */
(0,i.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,i.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,i.sprintf)(
/* translators: %s: Brand */
(0,i.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,i.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,i.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(w),{updateThemeStatus:p,setIsDrawerOpened:_,setIsDrawerSuppressed:f,setIsHeaderNavigationEnabled:E}=(0,o.useDispatch)(s.h),y=()=>{switch(b){case d.Rq:case d.GV:return(()=>{if("function"==typeof a)return a();g&&_(!0),f(!1),E(!0)})();default:_(!1),f(!0),E(!1)}};(0,r.useEffect)((()=>{y(),b===d.a0&&(async()=>{const e=await(async()=>{const e=await(0,u.YL)(d.DY);return null!=e&&e.error?d.vv:e.body.status})();switch(e){case d.Zh:(async()=>{(await(0,u.sN)(d.DY)).error||!0!==m?S():window.location.reload()})();break;case d.GV:!0===m&&window.location.reload();break;default:p(e)}})()}),[b]);const S=async()=>{if(p(d.Zh),(await(0,u.N9)(d.DY,!0,!1)).error)return p(d.Rq);!0===m&&window.location.reload()};return(0,r.createElement)(r.Fragment,null,(()=>{switch(b){case d.vv:return(0,r.createElement)(N,{showButton:!1,isModalOpen:!0,modalTitle:(0,i.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,i.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:S,modalExitButtonText:(0,i.__)("Exit to WordPress","wp-module-onboarding")});case d.Rq:return(0,r.createElement)(c.V,{title:h.errorState.title,subtitle:h.errorState.subtitle,error:h.errorState.error});case d.GV:return t;default:return(0,r.createElement)(l.Y,{title:h.loader.title,subtitle:h.loader.subtitle})}})())}},3111:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var r=a(9307),o=a(2503),n=a(9818),i=a(9250),l=a(5736),s=a(1392);var u=a(7533),d=a(9291),c=a(4401),m=a(2200),g=a(3124),b=a(3568);const w=()=>{const{setIsDrawerSuppressed:e,setIsHeaderNavigationEnabled:t,setSidebarActiveView:a,updateThemeStatus:w,flushQueue:h}=(0,n.useDispatch)(o.h),p=(0,i.s0)(),[_,f]=(0,r.useState)(!1),{nextStep:E,brandName:y,isQueueEmpty:S,currentData:v}=(0,n.useSelect)((e=>({nextStep:e(o.h).getNextStep(),brandName:e(o.h).getNewfoldBrandName(),isQueueEmpty:e(o.h).isQueueEmpty(),currentData:e(o.h).getCurrentOnboardingData()})),[]),N=(e=>({loader:{title:(0,l.sprintf)(
/* translators: 1: Brand 2: site or store */
(0,l.__)("Hang tight, we’re building your %1$s %2$s","wp-module-onboarding"),e,(0,s.I)("site")),subtitle:(0,l.__)("We’re assembling your unique design and installing useful tools","wp-module-onboarding")},errorState:{title:(0,l.sprintf)(
/* translators: 1: Brand 2: site or store */
(0,l.__)("Hang tight, we’re building your %1$s %2$s","wp-module-onboarding"),e,(0,s.I)("site")),subtitle:(0,l.__)("We’re assembling your unique design and installing useful tools","wp-module-onboarding"),error:(0,l.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(y);async function D(){const e=await(0,u.BN)();return null==e||!e.error}const x=()=>{t(!1),e(!0),a(!1)};return(0,r.useEffect)((()=>{S?(async()=>{var e;await Promise.all([D(),(0,b.a)(null==v||null===(e=v.data)||void 0===e?void 0:e.comingSoon)]).then((e=>e.forEach((e=>{if(!e)return t(!0),f(!0)})))),p(E.path),w(m.a0)})():h()}),[S]),(0,r.useEffect)((()=>{x()}),[]),(0,r.createElement)(g.U,{navigationStateCallback:x,refresh:!1},_?(0,r.createElement)(c.V,{title:N.errorState.title,subtitle:N.errorState.subtitle,error:N.errorState.error}):(0,r.createElement)(d.Y,{title:N.loader.title,subtitle:N.loader.subtitle}))}}}]);