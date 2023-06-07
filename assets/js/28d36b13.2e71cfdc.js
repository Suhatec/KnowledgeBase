"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4595],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(7462),o=(r(7294),r(4137));const a={title:"Certificate-related issues",sidebar_position:2},i=void 0,s={unversionedId:"adguard-for-windows/solving-problems/connection-not-trusted",id:"adguard-for-windows/solving-problems/connection-not-trusted",title:"Certificate-related issues",description:"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-windows/solving-problems/connection-not-trusted.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/connection-not-trusted",permalink:"/KnowledgeBase/adguard-for-windows/solving-problems/connection-not-trusted",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/connection-not-trusted.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Certificate-related issues",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"WFP driver",permalink:"/KnowledgeBase/adguard-for-windows/solving-problems/wfp-driver"},next:{title:"How to collect AdGuard logs",permalink:"/KnowledgeBase/adguard-for-windows/solving-problems/adguard-logs"}},l={},d=[{value:"<em>Potential Security Risk</em> error in Firefox-based browsers",id:"potential-security-risk-error-in-firefox-based-browsers",level:2},{value:"Yandex.Browser certificate warning",id:"yandexbrowser-certificate-warning",level:2},{value:"Why is this happening",id:"why-is-this-happening",level:3},{value:"How to solve the problem",id:"how-to-solve-the-problem",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,o.kt)("p",null,"To be able to filter HTTPS-traffic and efficiently block ads and trackers, AdGuard generates a special (and unique) root certificate and installs it into the system storage. You can learn more about why a certificate is required by reading ",(0,o.kt)("a",{parentName:"p",href:"/general/https-filtering/what-is-https-filtering"},"this article"),"."),(0,o.kt)("p",null,"Normally browsers trust the AdGuard certificate once it's added to the system certificate storage during the installation process. But in some cases this is not enough and you may come across warnings or errors. This happens most often in Firefox-based browsers like Mozilla Firefox, PaleMoon, Waterfox, etc., or in Yandex.Browser. "),(0,o.kt)("h2",{id:"potential-security-risk-error-in-firefox-based-browsers"},(0,o.kt)("em",{parentName:"h2"},"Potential Security Risk")," error in Firefox-based browsers"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png",alt:"Security risk error"})),(0,o.kt)("p",null,'Old FireFox versions, as well as browsers based on them, do not trust certificates from the system storage, but only those from their local storage. Since v68, FireFox trusts the system certificates, but you still can face the "Connection is untrusted" error. If something like this happens, first try to click the ',(0,o.kt)("em",{parentName:"p"},"Reinstall Certificate")," button \u2014 you will find it in the ",(0,o.kt)("em",{parentName:"p"},"Network")," tab. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg",alt:"Reinstall Certificate"})),(0,o.kt)("p",null,"If that doesn't help, follow the instructions for manually adding the AdGuard certificate to the FireFox storage."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This instruction is for Firefox browser. Names of buttons and menu items may differ in other Firefox-based browsers.")),(0,o.kt)("p",null,"1) Run AdGuard."),(0,o.kt)("p",null,"2) Go to ",(0,o.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert")," and click the ",(0,o.kt)("em",{parentName:"p"},"Download")," button. The browser should start downloading ",(0,o.kt)("strong",{parentName:"p"},"cert.cer")," file."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also open the download page by clicking on the link via the AdGuard app at ",(0,o.kt)("em",{parentName:"p"},"Settings \u2192 Network \u2192 HTTPS filtering"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg",alt:"Certificate settings"})),(0,o.kt)("p",null,"3) Open your browser and then open ",(0,o.kt)("em",{parentName:"p"},"Settings"),"."),(0,o.kt)("p",null,"4) Go to ",(0,o.kt)("em",{parentName:"p"},"Privacy & Security")," tab."),(0,o.kt)("p",null,"5) Scroll down to ",(0,o.kt)("em",{parentName:"p"},"Certificates")," and click the ",(0,o.kt)("em",{parentName:"p"},"View Certificates")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg",alt:"View certificates window"})),(0,o.kt)("p",null,"6) Select ",(0,o.kt)("em",{parentName:"p"},"Authorities")," tab."),(0,o.kt)("p",null,"7) Click ",(0,o.kt)("em",{parentName:"p"},"Import..."),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg",alt:"Certificate settings \u2014 import"})),(0,o.kt)("p",null,"8) Browse the downloaded ",(0,o.kt)("strong",{parentName:"p"},"cert.cer")," file and click ",(0,o.kt)("em",{parentName:"p"},"Open"),"."),(0,o.kt)("p",null,"9) Check the ",(0,o.kt)("em",{parentName:"p"},"Trust this CA to identify websites")," box and then lick ",(0,o.kt)("em",{parentName:"p"},"OK"),"."),(0,o.kt)("p",null,"You've successfully installed AdGuard certificate. Restart the browser and the error should go away."),(0,o.kt)("h2",{id:"yandexbrowser-certificate-warning"},"Yandex.Browser certificate warning"),(0,o.kt)("p",null,"If you are a user of both AdGuard for Windows and Yandex.Browser you may have come across this warning:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png",alt:"Yandex certificate warning"})),(0,o.kt)("h3",{id:"why-is-this-happening"},"Why is this happening"),(0,o.kt)("p",null,"Both AdGuard and Yandex take users' security on the Internet very seriously. Current Yandex policy is to warn their users about any certificate that is not recognized by the browser. This is not unsubstantiated, because sometimes malicious apps can inject their own certificates and use this to harm the system and steal private data. "),(0,o.kt)("p",null,"However, AdGuard also adds its certificate to the trusted ones. This leads to the warning message you have encountered."),(0,o.kt)("h3",{id:"how-to-solve-the-problem"},"How to solve the problem"),(0,o.kt)("p",null,"The easiest way is to click the ",(0,o.kt)("strong",{parentName:"p"},"Go to site")," button. This will tell Yandex.Browser to remember AdGuard certificate as a trusted one, at least for a while. Normally, you won't have to see this message anymore, but it is not beyond the realm of possibility for it to appear occasionally, for whatever reasons. In such cases, simply press the same button again ",(0,o.kt)("em",{parentName:"p"},"(make sure it is AdGuard's certificate!)"),"."),(0,o.kt)("p",null,"Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including ",(0,o.kt)("strong",{parentName:"p"},"Yandex's own ads"),") will show up \u2014 on such websites as YouTube, Facebook, Instagram, and many more. We strongly advise against it if you want to keep the quality of ad blocking high."))}p.isMDXComponent=!0}}]);