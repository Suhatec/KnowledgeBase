"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[73],{4137:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var s=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,s,a=function(e,t){if(null==e)return{};var i,s,a={},l=Object.keys(e);for(s=0;s<l.length;s++)i=l[s],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)i=l[s],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var r=s.createContext({}),d=function(e){var t=s.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},u=function(e){var t=d(e.components);return s.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(i),h=a,f=c["".concat(r,".").concat(h)]||c[h]||p[h]||l;return i?s.createElement(f,n(n({ref:t},u),{},{components:i})):s.createElement(f,n({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,n=new Array(l);n[0]=c;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:a,n[1]=o;for(var d=2;d<l;d++)n[d]=i[d];return s.createElement.apply(null,n)}return s.createElement.apply(null,i)}c.displayName="MDXCreateElement"},8691:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=i(7462),a=(i(7294),i(4137));const l={title:"Advanced (low-level) Settings guide",sidebar_position:7},n=void 0,o={unversionedId:"adguard-for-windows/solving-problems/low-level-settings",id:"adguard-for-windows/solving-problems/low-level-settings",title:"Advanced (low-level) Settings guide",description:"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-windows/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/low-level-settings",permalink:"/KnowledgeBase/adguard-for-windows/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Advanced (low-level) Settings guide",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Common installer errors",permalink:"/KnowledgeBase/adguard-for-windows/solving-problems/common-installer-errors"},next:{title:"How to create a dump file",permalink:"/KnowledgeBase/adguard-for-windows/solving-problems/dump-file"}},r={},d=[{value:"How to reach Advanced Settings",id:"how-to-reach-advanced-settings",level:2},{value:"Advanced Settings",id:"advanced-settings",level:2},{value:"Block TCP Fast Open",id:"block-tcp-fast-open",level:3},{value:"Use Encrypted ClientHello",id:"use-encrypted-clienthello",level:3},{value:"Check websites&#39; certificate transparency",id:"check-websites-certificate-transparency",level:3},{value:"Enable SSL/TLS certificate revocation checks",id:"enable-ssltls-certificate-revocation-checks",level:3},{value:"Show AdGuard VPN in Settings",id:"show-adguard-vpn-in-settings",level:3},{value:"Exclude app from filtering by entering the full path",id:"exclude-app-from-filtering-by-entering-the-full-path",level:3},{value:"Enable AdGuard pop-up notifications",id:"enable-adguard-pop-up-notifications",level:3},{value:"Automatically intercept filter subscription URLs",id:"automatically-intercept-filter-subscription-urls",level:3},{value:"Use redirect driver mode",id:"use-redirect-driver-mode",level:3},{value:"Open main window at system start-up",id:"open-main-window-at-system-start-up",level:3},{value:"Enable filtering at system start-up",id:"enable-filtering-at-system-start-up",level:3},{value:"Filter localhost",id:"filter-localhost",level:3},{value:"Exclude specified IP ranges from filtering",id:"exclude-specified-ip-ranges-from-filtering",level:3},{value:"Enable HAR writing",id:"enable-har-writing",level:3},{value:"Add an extra space to the plain HTTP request",id:"add-an-extra-space-to-the-plain-http-request",level:3},{value:"Adjust size of fragmentation of initial TLS packet",id:"adjust-size-of-fragmentation-of-initial-tls-packet",level:3},{value:"Plain HTTP request fragment size",id:"plain-http-request-fragment-size",level:3},{value:"Show QUIC",id:"show-quic",level:3},{value:"Enable TCP keepalive",id:"enable-tcp-keepalive",level:3},{value:"TCP keepalive interval",id:"tcp-keepalive-interval",level:3},{value:"TCP keepalive timeout",id:"tcp-keepalive-timeout",level:3},{value:"Block Java",id:"block-java",level:3},{value:"DNS server timeout period",id:"dns-server-timeout-period",level:3},{value:"Use HTTP/3 for DNS-over-HTTPS",id:"use-http3-for-dns-over-https",level:3},{value:"Use fallback DNS upstreams",id:"use-fallback-dns-upstreams",level:3},{value:"Query DNS upstreams in parallel",id:"query-dns-upstreams-in-parallel",level:3},{value:"Always respond to failed DNS queries",id:"always-respond-to-failed-dns-queries",level:3},{value:"Enable filtering of secure DNS requests",id:"enable-filtering-of-secure-dns-requests",level:3},{value:"Blocking mode for hosts rules",id:"blocking-mode-for-hosts-rules",level:3},{value:"Blocking mode for adblock-style rules",id:"blocking-mode-for-adblock-style-rules",level:3},{value:"Custom IPv4 address",id:"custom-ipv4-address",level:3},{value:"Custom IPv6 address",id:"custom-ipv6-address",level:3},{value:"Fallback servers",id:"fallback-servers",level:3},{value:"Block ECH",id:"block-ech",level:3},{value:"List of custom fallback servers",id:"list-of-custom-fallback-servers",level:3},{value:"List of custom bootstrap addresses",id:"list-of-custom-bootstrap-addresses",level:3},{value:"DNS exclusions",id:"dns-exclusions",level:3},{value:"Exclude specified Wi-Fi networks names (SSIDs) from the DNS filtering",id:"exclude-specified-wi-fi-networks-names-ssids-from-the-dns-filtering",level:3}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,a.kt)("p",null,"Previously known as low-level settings, Advanced Settings mostly contain options that go beyond the average user competence and aren't applied in everyday use. AdGuard for Windows is designed to work without ever having to change any of them, but they will provide additional features in some corner cases or when solving an uncommon problem."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Mindlessly changing ",(0,a.kt)("em",{parentName:"p"},"Advanced Settings")," can potentially cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only make changes to these settings if you are sure of what you are doing or if our support team has asked you to do so.")),(0,a.kt)("h2",{id:"how-to-reach-advanced-settings"},"How to reach Advanced Settings"),(0,a.kt)("p",null,"To go to ",(0,a.kt)("em",{parentName:"p"},"Advanced settings"),", in the main windows click ",(0,a.kt)("em",{parentName:"p"},"Settings \u2192 General Settings")," and scroll down to ",(0,a.kt)("em",{parentName:"p"},"Advanced Settings"),". Alternatively, select ",(0,a.kt)("em",{parentName:"p"},"Advanced \u2192 Advanced settings...")," in the tray menu."),(0,a.kt)("h2",{id:"advanced-settings"},"Advanced Settings"),(0,a.kt)("p",null,"Once you open Advanced Settings, you will be presented with the following options:"),(0,a.kt)("h3",{id:"block-tcp-fast-open"},"Block TCP Fast Open"),(0,a.kt)("p",null,"If enabled, AdGuard will block TCP Fast Open in the Edge browser. To apply settings, you need to restart the browser."),(0,a.kt)("h3",{id:"use-encrypted-clienthello"},"Use Encrypted ClientHello"),(0,a.kt)("p",null,"Every encrypted Internet connection has an unencrypted part. This is the very first packet which contains the name of the server you are connecting to. Encrypted Client Hello technology is supposed to solve this issue and encrypt that last bit of unencrypted information. To benefit from it, enable the ",(0,a.kt)("em",{parentName:"p"},"Use Encrypted ClientHello")," option. It uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, ClientHello packet will be encrypted."),(0,a.kt)("h3",{id:"check-websites-certificate-transparency"},"Check websites' certificate transparency"),(0,a.kt)("p",null,"Verifies the authenticity of all certificates for the domain based on Chrome Certificate Transparency Policy. If the certificate does not comply with the Chrome Certificate Transparency Policy, AdGuard will not filter the website. Chrome, in turn, will block it."),(0,a.kt)("h3",{id:"enable-ssltls-certificate-revocation-checks"},"Enable SSL/TLS certificate revocation checks"),(0,a.kt)("p",null,"Once enabled, this option runs asynchronous OCSP checks to check whether the website\u2019s SSL/TLS certificate is revoked."),(0,a.kt)("p",null,"If the OCSP check completes within the minimum timeout, AdGuard will immediately apply the result: block the connection if the certificate is revoked or establish a connection if the certificate is valid."),(0,a.kt)("p",null,"If the verification takes too long, AdGuard will establish a connection and continue checking in the background. If the certificate is revoked, current and future connections to the domain will be blocked."),(0,a.kt)("h3",{id:"show-adguard-vpn-in-settings"},"Show AdGuard VPN in Settings"),(0,a.kt)("p",null,"Enabling this option allows you to display the AdGuard VPN tab in Settings for easy opening of the app and the product's website."),(0,a.kt)("h3",{id:"exclude-app-from-filtering-by-entering-the-full-path"},"Exclude app from filtering by entering the full path"),(0,a.kt)("p",null,"If you want AdGuard not to filter any specific application, specify the full path to them and the apps will be excluded from filtering. Separate different paths by semicolons."),(0,a.kt)("h3",{id:"enable-adguard-pop-up-notifications"},"Enable AdGuard pop-up notifications"),(0,a.kt)("p",null,"Enable this feature to see AdGuard pop-up notifications. They do not appear too often and contain only important information. You can also use the tray menu to recall the last pop-up notification."),(0,a.kt)("h3",{id:"automatically-intercept-filter-subscription-urls"},"Automatically intercept filter subscription URLs"),(0,a.kt)("p",null,"Enable this feature if you want AdGuard to automatically intercept filter subscription URLs (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"abp:subscribe")," and alike) and to open a custom filter installation dialog."),(0,a.kt)("h3",{id:"use-redirect-driver-mode"},"Use redirect driver mode"),(0,a.kt)("p",null,"If this option is enabled, AdGuard intercepts all the traffic and redirects it to the local proxy server for further filtering."),(0,a.kt)("p",null,"Otherwise, AdGuard will filter all the traffic on the fly, without redirection. In this case, the system will consider AdGuard to be the sole application that connects to the Internet (other applications are routed through it). The downside is that it will make the system Firewall less effective. The upside is that this approach works a little bit faster."),(0,a.kt)("h3",{id:"open-main-window-at-system-start-up"},"Open main window at system start-up"),(0,a.kt)("p",null,"Enable this option to make the main AdGuard window open after the system is loaded. Note that it doesn't affect whether the actual filtering service is launched or not, this setting is located in ",(0,a.kt)("em",{parentName:"p"},"Settings \u2192 General Settings")),(0,a.kt)("h3",{id:"enable-filtering-at-system-start-up"},"Enable filtering at system start-up"),(0,a.kt)("p",null,"Starting from v7.12, by default, AdGuard's service does not filter traffic after OS startup if the option Launch AdGuard at system start-up is disabled. In other words, the AdGuard's service is started in \u201cidle\u201d mode. Enable this option to make AdGuard filter traffic even if the app is not launched."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note that before v7.12 the AdGuard's service started in filtering mode by default (even if the "),"Launch AdGuard at system start-up",(0,a.kt)("em",{parentName:"p"}," was disabled). If you were satisfied with the old behavior, enable this option.")),(0,a.kt)("h3",{id:"filter-localhost"},"Filter localhost"),(0,a.kt)("p",null,"If you want AdGuard to filter loopback connections, check the box. This option will always be on if you have AdGuard VPN installed, because otherwise it won't be able to work."),(0,a.kt)("h3",{id:"exclude-specified-ip-ranges-from-filtering"},"Exclude specified IP ranges from filtering"),(0,a.kt)("p",null,"If you don't want AdGuard to filter particular subnets, enable this feature and specify the IP ranges in the CIDR notation (e.g. 98.51.100.14/24) in the ",(0,a.kt)("strong",{parentName:"p"},"IP ranges excluded from filtering")," section below."),(0,a.kt)("h3",{id:"enable-har-writing"},"Enable HAR writing"),(0,a.kt)("p",null,"This option should be enabled ",(0,a.kt)("strong",{parentName:"p"},"only for debugging purposes"),". If you tick the checkmark, AdGuard will create a file that contains information about all filtered HTTP requests in HAR 1.2 format. This file can be analyzed with the Fiddler app. Note that it may slow down your web browsing significantly."),(0,a.kt)("h3",{id:"add-an-extra-space-to-the-plain-http-request"},"Add an extra space to the plain HTTP request"),(0,a.kt)("p",null,'Adds extra space between the HTTP method and the URL and removes space after the "Host:" field to avoid deep packet inspection. For instance, the request'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /foo/bar/ HTTP/1.1\nHost: example.org")),(0,a.kt)("p",null,"will be converted to"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET  /foo/bar/ HTTP/1.1\nHost: example.org")),(0,a.kt)("p",null,"This option is only applied when the ",(0,a.kt)("em",{parentName:"p"},"Protect from DPI")," Stealth mode option is enabled."),(0,a.kt)("h3",{id:"adjust-size-of-fragmentation-of-initial-tls-packet"},"Adjust size of fragmentation of initial TLS packet"),(0,a.kt)("p",null,"Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic."),(0,a.kt)("p",null,"If this option is enabled, AdGuard splits the initial TLS packet (the ClientHello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet."),(0,a.kt)("p",null,"Valid values: 1\u20131500. If invalid size is specified, the value selected by the system will be used. This option is only applied when the ",(0,a.kt)("em",{parentName:"p"},"Protect from DPI")," Stealth mode option is enabled."),(0,a.kt)("h3",{id:"plain-http-request-fragment-size"},"Plain HTTP request fragment size"),(0,a.kt)("p",null,"Adjusts the size of the HTTP request fragmentation. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet."),(0,a.kt)("p",null,"Valid values: 1\u20131500. If invalid size is specified, the value selected by the system will be used. This option is only applied when the ",(0,a.kt)("em",{parentName:"p"},"Protect from DPI")," Stealth mode option is enabled."),(0,a.kt)("h3",{id:"show-quic"},"Show QUIC"),(0,a.kt)("p",null,"Allows displaying the QUIC protocol records in the filtering log. For blocked requests only."),(0,a.kt)("h3",{id:"enable-tcp-keepalive"},"Enable TCP keepalive"),(0,a.kt)("p",null,"Periodically sends TCP packets over idle connection to ensure it is alive and to renew NAT timeouts. This option can be useful to bypass the strict network address translation (NAT) settings that some ISPs use."),(0,a.kt)("h3",{id:"tcp-keepalive-interval"},"TCP keepalive interval"),(0,a.kt)("p",null,"Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used."),(0,a.kt)("p",null,"Note that this setting only works when the ",(0,a.kt)("em",{parentName:"p"},"Enable TCP keepalive")," option is enabled."),(0,a.kt)("h3",{id:"tcp-keepalive-timeout"},"TCP keepalive timeout"),(0,a.kt)("p",null,"Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used."),(0,a.kt)("p",null,"Note that this setting only works when the ",(0,a.kt)("em",{parentName:"p"},"Enable TCP keepalive")," option is enabled."),(0,a.kt)("h3",{id:"block-java"},"Block Java"),(0,a.kt)("p",null,"Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use ",(0,a.kt)("em",{parentName:"p"},"Block Java")," option, JavaScript will still be enabled."),(0,a.kt)("h3",{id:"dns-server-timeout-period"},"DNS server timeout period"),(0,a.kt)("p",null,"Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don\u2019t fill in this field or enter an invalid value, the value of 5000 will be used."),(0,a.kt)("h3",{id:"use-http3-for-dns-over-https"},"Use HTTP/3 for DNS-over-HTTPS"),(0,a.kt)("p",null,"Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3."),(0,a.kt)("h3",{id:"use-fallback-dns-upstreams"},"Use fallback DNS upstreams"),(0,a.kt)("p",null,"Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail."),(0,a.kt)("h3",{id:"query-dns-upstreams-in-parallel"},"Query DNS upstreams in parallel"),(0,a.kt)("p",null,"All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed."),(0,a.kt)("h3",{id:"always-respond-to-failed-dns-queries"},"Always respond to failed DNS queries"),(0,a.kt)("p",null,"If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVFAIL"),"."),(0,a.kt)("h3",{id:"enable-filtering-of-secure-dns-requests"},"Enable filtering of secure DNS requests"),(0,a.kt)("p",null,"AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests."),(0,a.kt)("h3",{id:"blocking-mode-for-hosts-rules"},"Blocking mode for hosts rules"),(0,a.kt)("p",null,"Here you can select the way AdGuard will respond to domains blocked by DNS rules based on ",(0,a.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax"},"hosts rule syntax"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reply with \u201cRefused\u201d error"),(0,a.kt)("li",{parentName:"ul"},"Reply with \u201cNxDomain\u201d error"),(0,a.kt)("li",{parentName:"ul"},"Reply with a custom IP address")),(0,a.kt)("h3",{id:"blocking-mode-for-adblock-style-rules"},"Blocking mode for adblock-style rules"),(0,a.kt)("p",null,"Here you can select the way AdGuard will respond to domains blocked by DNS rules based on ",(0,a.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax"},"adblock-style syntax"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reply with \u201cRefused\u201d error"),(0,a.kt)("li",{parentName:"ul"},"Reply with \u201cNxDomain\u201d error"),(0,a.kt)("li",{parentName:"ul"},"Reply with a custom IP address")),(0,a.kt)("h3",{id:"custom-ipv4-address"},"Custom IPv4 address"),(0,a.kt)("p",null,"If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error."),(0,a.kt)("h3",{id:"custom-ipv6-address"},"Custom IPv6 address"),(0,a.kt)("p",null,'If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.'),(0,a.kt)("h3",{id:"fallback-servers"},"Fallback servers"),(0,a.kt)("p",null,"Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Don\u2019t use fallback servers;"),(0,a.kt)("li",{parentName:"ul"},"Use system default servers;"),(0,a.kt)("li",{parentName:"ul"},"Use custom servers.")),(0,a.kt)("h3",{id:"block-ech"},"Block ECH"),(0,a.kt)("p",null,"If enabled, AdGuard strips Encrypted Client Hello parameters from responses."),(0,a.kt)("h3",{id:"list-of-custom-fallback-servers"},"List of custom fallback servers"),(0,a.kt)("p",null,"If you want AdGuard to use custom fallback servers, list them in this section, one per line."),(0,a.kt)("h3",{id:"list-of-custom-bootstrap-addresses"},"List of custom bootstrap addresses"),(0,a.kt)("p",null,"A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in ",(0,a.kt)("em",{parentName:"p"},"DNS protection"),'. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.'),(0,a.kt)("p",null,"By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used."),(0,a.kt)("h3",{id:"dns-exclusions"},"DNS exclusions"),(0,a.kt)("p",null,"All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app\u2019s settings. Also, DNS blocking rules will not be applied to such requests."),(0,a.kt)("h3",{id:"exclude-specified-wi-fi-networks-names-ssids-from-the-dns-filtering"},"Exclude specified Wi-Fi networks names (SSIDs) from the DNS filtering"),(0,a.kt)("p",null,"DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again."))}p.isMDXComponent=!0}}]);