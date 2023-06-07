"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8339],{4137:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>b});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(o),b=r,f=p["".concat(s,".").concat(b)]||p[b]||c[b]||n;return o?a.createElement(f,i(i({ref:t},d),{},{components:o})):a.createElement(f,i({ref:t},d))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<n;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7115:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=o(7462),r=(o(7294),o(4137));const n={title:"How to block YouTube ads in Safari",sidebar_position:4},i=void 0,l={unversionedId:"adguard-for-ios/solving-problems/block-youtube-ads",id:"adguard-for-ios/solving-problems/block-youtube-ads",title:"How to block YouTube ads in Safari",description:"This article covers AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-ios/solving-problems/block-youtube-ads.md",sourceDirName:"adguard-for-ios/solving-problems",slug:"/adguard-for-ios/solving-problems/block-youtube-ads",permalink:"/KnowledgeBase/adguard-for-ios/solving-problems/block-youtube-ads",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/solving-problems/block-youtube-ads.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to block YouTube ads in Safari",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to avoid compatibility problem with FaceTime",permalink:"/KnowledgeBase/adguard-for-ios/solving-problems/facetime-compatibility-issues"},next:{title:"Low-level Settings guide",permalink:"/KnowledgeBase/adguard-for-ios/solving-problems/low-level-settings"}},s={},u=[{value:"How to block ads on YouTube in Safari",id:"how-to-block-ads-on-youtube-in-safari",level:2}],d={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This article covers AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,r.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,r.kt)("h2",{id:"how-to-block-ads-on-youtube-in-safari"},"How to block ads on YouTube in Safari"),(0,r.kt)("p",null,"Unfortunately, ad blocking in the YouTube app is technically impossible, but if you watch YouTube in Safari, there is a way. We developed an action extension (available since AdGuard v4.2 for iOS) designed specifically to block ads there. After you update your app to v4.2, this extension will be installed automatically, you don't have to follow any complicated instructions. Other than ads, the extension removes the placeholder remaining after blocking on iPads. Plus, YouTube videos are played automatically again and you don't have to make an extra tap."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/ios_safari_extension.png",alt:"How to block YouTube ads in Safari *mobile"})),(0,r.kt)("p",null,"To activate the extension and block ads on YouTube, do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open youtube.com in Safari."),(0,r.kt)("li",{parentName:"ol"},"Tap the Share button."),(0,r.kt)("li",{parentName:"ol"},'Tap "Block YouTube Ads (by AdGuard)".')),(0,r.kt)("p",null,"YouTube is now ad-free! Please note that you need to run this extension again if you reload the page."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In some cases the AdGuard extension may be not displayed. If you don't see it, try to follow the instruction again or restart your device")))}c.isMDXComponent=!0}}]);