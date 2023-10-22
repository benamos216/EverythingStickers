"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[128],{4401:(e,t,a)=>{a.d(t,{V:()=>s});var r=a(9307),n=a(5634),o=a(1526),l=a(950);const s=e=>{let{title:t,subtitle:a,error:s}=e;return(0,r.createElement)(n.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,r.createElement)(o.Z,{title:t,subtitle:a}),(0,r.createElement)("div",{className:"step-error-state__logo"}),(0,r.createElement)("h3",{className:"step-error-state__error"},s),(0,r.createElement)(l.Z,null))}},9291:(e,t,a)=>{a.d(t,{L:()=>l,Y:()=>r.Z});var r=a(35),n=a(9307),o=a(682);const l=()=>(0,n.createElement)("div",{className:"image-upload-loader--loading-box"},(0,n.createElement)(o.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},3124:(e,t,a)=>{a.d(t,{U:()=>D});var r=a(9307),n=a(9818),o=a(4333),l=a(5736),s=a(9291),i=a(2503),d=a(7625),u=a(2200),c=a(4401);var m=a(9250),w=a(4310),h=a(5609),b=a(4184),g=a.n(b),_=a(7207),p=a(7533),E=a(8395),f=a(8297),v=a(6342),y=a(3421),N=a(3568);const S=e=>{let{buttonText:t=(0,l.__)("Exit to WordPress","wp-module-onboarding"),showButtonIcon:a=!0,showButton:o=!0,buttonVariant:s="secondary",buttonClassName:d=!1,isModalOpen:c=!1,modalTitle:b=(0,l.__)("Exit without finishing?","wp-module-onboarding"),modalText:S=!1,modalPrimaryCloseButtonText:D=(0,l.__)("Continue","wp-module-onboarding"),modalOnClose:x=!1,modalExitButtonText:C=(0,l.__)("Exit","wp-module-onboarding")}=e;const[T,k]=(0,r.useState)(c),B=()=>{"function"==typeof x&&x(),k(!1)},O=(0,m.TH)(),{currentData:V,brandName:Z,socialData:P,currentStep:G}=(0,n.useSelect)((e=>({currentData:e(i.h).getCurrentOnboardingData(),brandName:e(i.h).getNewfoldBrandName(),socialData:e(i.h).getOnboardingSocialData(),currentStep:e(i.h).getCurrentStep()})),[]),{setOnboardingSocialData:M}=(0,n.useDispatch)(i.h);return S||(S=(0,l.sprintf)(
/* translators: %s: Brand */
(0,l.__)("You can restart onboarding from your %s Settings page.","wp-module-onboarding"),Z)),(0,r.createElement)(r.Fragment,null,o&&(0,r.createElement)(h.Button,{icon:!!a&&w.Z,variant:s,onClick:()=>k(!0),className:g()("nfd-onboarding-etw__trigger",d)},t),T&&(0,r.createElement)(h.Modal,{title:b,onRequestClose:()=>B()},(0,r.createElement)("p",null,S),(0,r.createElement)(h.ButtonGroup,{className:"nfd-onboarding-etw__buttons"},(0,r.createElement)(h.Button,{variant:"secondary",onClick:()=>B()},D),(0,r.createElement)(h.Button,{variant:"primary",onClick:()=>async function(e){if(V){var t;if(V.hasExited=(new Date).getTime(),null!=e&&e.includes("basic-info")){const e=await async function(){const e=await(0,E.Gw)(),t=await(0,E.I2)(P);return null!==(null==t?void 0:t.error)?null==e?void 0:e.body:null==t?void 0:t.body}();e&&M(e)}(0,p.kB)(V),(0,N.a)(null==V||null===(t=V.data)||void 0===t?void 0:t.comingSoon)}(0,y.jd)(),(0,f.tH)(new f.Z_(v._C,G.title)),await _.v.dispatchEvents(v.En),window.location.replace(u.br)}(O.pathname)},C))))},D=e=>{let{children:t,navigationStateCallback:a=!1,refresh:m=!0}=e;const w=(0,o.useViewportMatch)("medium"),{storedThemeStatus:h,brandName:b}=(0,n.useSelect)((e=>({storedThemeStatus:e(i.h).getThemeStatus(),brandName:e(i.h).getNewfoldBrandName()})),[]),g=(e=>({loader:{title:(0,l.sprintf)(
/* translators: %s: Brand */
(0,l.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,l.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,l.sprintf)(
/* translators: %s: Brand */
(0,l.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,l.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,l.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(b),{updateThemeStatus:_,setIsDrawerOpened:p,setIsDrawerSuppressed:E,setIsHeaderNavigationEnabled:f}=(0,n.useDispatch)(i.h),v=()=>{switch(h){case u.Rq:case u.GV:return(()=>{if("function"==typeof a)return a();w&&p(!0),E(!1),f(!0)})();default:p(!1),E(!0),f(!1)}};(0,r.useEffect)((()=>{v(),h===u.a0&&(async()=>{const e=await(async()=>{const e=await(0,d.YL)(u.DY);return null!=e&&e.error?u.vv:e.body.status})();switch(e){case u.Zh:(async()=>{(await(0,d.sN)(u.DY)).error||!0!==m?y():window.location.reload()})();break;case u.GV:!0===m&&window.location.reload();break;default:_(e)}})()}),[h]);const y=async()=>{if(_(u.Zh),(await(0,d.N9)(u.DY,!0,!1)).error)return _(u.Rq);!0===m&&window.location.reload()};return(0,r.createElement)(r.Fragment,null,(()=>{switch(h){case u.vv:return(0,r.createElement)(S,{showButton:!1,isModalOpen:!0,modalTitle:(0,l.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,l.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:y,modalExitButtonText:(0,l.__)("Exit to WordPress","wp-module-onboarding")});case u.Rq:return(0,r.createElement)(c.V,{title:g.errorState.title,subtitle:g.errorState.subtitle,error:g.errorState.error});case u.GV:return t;default:return(0,r.createElement)(s.Y,{title:g.loader.title,subtitle:g.loader.subtitle})}})())}},128:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r=a(9307),n=a(9818),o=a(5634),l=a(3124),s=a(6332),i=a(2200),d=a(2503);const u=()=>{const{headerMenu:e}=(0,n.useSelect)((e=>({headerMenu:e(d.h).getHeaderMenuData()})),[]),[t,a]=(0,r.useState)(),{setDrawerActiveView:u,setSidebarActiveView:c}=(0,n.useDispatch)(d.h);return(0,r.useLayoutEffect)((()=>{a(e)}),[e]),(0,r.useEffect)((()=>{c(i.Jq),u(i.qO)}),[]),(0,r.createElement)(l.U,null,(0,r.createElement)(s.V3,null,(0,r.createElement)(o.Z,{className:"theme-header-menu-preview"},(0,r.createElement)("div",{className:"theme-header-menu-preview__title-bar"},(0,r.createElement)("div",{className:"theme-header-menu-preview__title-bar__browser"},(0,r.createElement)("span",{className:"theme-header-menu-preview__title-bar__browser__dot"}),(0,r.createElement)("span",{className:"theme-header-menu-preview__title-bar__browser__dot"}),(0,r.createElement)("span",{className:"theme-header-menu-preview__title-bar__browser__dot"}))),!t&&(0,r.createElement)(s.i5,{styling:"large",viewportWidth:1300}),t&&(0,r.createElement)(s.i5,{blockGrammer:t,styling:"large",viewportWidth:1300}))))}}}]);