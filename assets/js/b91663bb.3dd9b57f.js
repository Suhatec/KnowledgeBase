"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6625],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),o=(a(7294),a(4137));const n={title:"Battery and traffic consumption issues",sidebar_position:1},i=void 0,s={unversionedId:"adguard-for-android/solving-problems/battery",id:"adguard-for-android/solving-problems/battery",title:"Battery and traffic consumption issues",description:"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-android/solving-problems/battery.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/battery",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/battery",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/battery.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Battery and traffic consumption issues",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/KnowledgeBase/adguard-for-android/installation"},next:{title:"How to collect a full log",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/log"}},l={},c=[{value:"Own battery usage stats screen",id:"own-battery-usage-stats-screen",level:3},{value:"Real example",id:"real-example",level:3},{value:"How much battery resource does AdGuard really consume?",id:"how-much-battery-resource-does-adguard-really-consume",level:3},{value:"Conclusion",id:"conclusion",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,o.kt)("p",null,"Sometimes you may notice that, according to Android built-in statistics, AdGuard consumes a lot of traffic and/or battery resource."),(0,o.kt)("p",null,"Both these problems are two sides of the same coin. Since in the process of filtering all the mobile traffic goes through AdGuard, Android decides that it is AdGuard that consumes it all. In reality, of course, it is not true."),(0,o.kt)("p",null,"Battery and traffic consumption shown in devices statistics ",(0,o.kt)("strong",{parentName:"p"},"do not represent the facts"),". The thing is, Android attributes all of the WiFi and Mobile traffic to AdGuard, which was in fact consumed by other apps. Due to this, AdGuards real share of total consumed traffic and battery resource increases, and the share of other apps, on the contrary, decreases."),(0,o.kt)("h3",{id:"own-battery-usage-stats-screen"},"Own battery usage stats screen"),(0,o.kt)("p",null,"To mitigate this misconception, we added a new screen called 'Battery usage'. You can access it by tapping on the battery icon in the top right corner of the main screen."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/battery/batterystats.png",alt:"Battery stats *mobile_border"})),(0,o.kt)("p",null,"Inside you will find a chart that shows the AdGuard battery resource consumption within the last 24 hours, with an option to get more detailed hour-to-hour data by tapping on the dots on the chart. Besides that, there\u2019s also a numeric breakdown of the relevant data and a short technical explanation."),(0,o.kt)("h3",{id:"real-example"},"Real example"),(0,o.kt)("p",null,"On the screenshots below you can see the battery resource consumption statistics for a night and subsequent morning:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/battery_1.png",alt:"Battery 1 *mobile"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/battery_2.png",alt:"Battery 2 *mobile"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/battery_3.png",alt:"Battery 3 *mobile"})),(0,o.kt)("p",null,"From these screenshots you can see that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"AdGuard, as expected, is at the top of the chart. This is generally typical for smartphones (and not at all for tablets without 4G, since WiFi is much less 'costly' in terms of battery consumption).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Pay attention to the number of sent Mobile and WiFi packages, which were attributed to AdGuard (Mobile packets sent \u0438 Wi-Fi packets sent) on the second screenshot.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the third screenshot are stats for one of the real traffic consumers, Yandex.Browser. It was not attributed almost any traffic at all, while in reality 70% of the total traffic was consumed by it."))),(0,o.kt)("h3",{id:"how-much-battery-resource-does-adguard-really-consume"},"How much battery resource does AdGuard really consume?"),(0,o.kt)("p",null,"First, let us lay down a little bit of theory and links with necessary data."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Android derives traffic consumption judging on so-called Power Profile, which is given by every manufacturer: ",(0,o.kt)("a",{parentName:"p",href:"https://source.android.com/devices/tech/power/values.html"},"https://source.android.com/devices/tech/power/values.html"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Main part of Power Profile is a set of values in mAh which define battery consumption for every component of the device: ",(0,o.kt)("a",{parentName:"p",href:"https://source.android.com/devices/tech/power/values.html"},"https://source.android.com/devices/tech/power/values.html")))),(0,o.kt)("p",null,"For example, from the table above:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"wifi.active=")," 31mA additional consumption in mAh caused by WiFi data exchange."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"radio.active=")," 100-300mA additional consumption in mAh caused by data exchange over Mobile network."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"cpu.active=")," 100-200mA additional consumption in mAh caused by CPU work."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"AdGuard by itself almost doesn't consume any traffic, so for the sake of evaluating battery resource consumption let's get rid of 'Mobile/WiFi packets' and stcik to 'CPU'.")),(0,o.kt)("p",null,"Formul\u0430 to calculate the consumption:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"CPU TIME (ms)" X "cpu.active" / (60 ',(0,o.kt)("em",{parentName:"p"}," 60 "),' 1000) = "POWER USE mAh"')),(0,o.kt)("p",null,"Let's put real numbers into this formula."),(0,o.kt)("p",null,"Let's take ",(0,o.kt)("em",{parentName:"p"},"CPU total")," from the second screenshot and convert into milliseconds: 506000"),(0,o.kt)("p",null,"A coefficient ",(0,o.kt)("em",{parentName:"p"},"cpu.active")," for 2GHz will be roughly equal to 225mAh"),(0,o.kt)("p",null,"Final result"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"506000 ",(0,o.kt)("em",{parentName:"p"}," 225 / (60 ")," 60 * 1000) = 31,625mAh")),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Real consumption is ",(0,o.kt)("strong",{parentName:"p"},"several times less")," than it is shown in Android statistics. Instead of 220mAh it should be somewhere around 31-40mAh. On the other hand, browser's consumption should be not 66mAh, but ~200mAh."))}u.isMDXComponent=!0}}]);