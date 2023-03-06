"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[54321],{18076:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},i="Bamboo HR",l={unversionedId:"integrations/sources/bamboo-hr",id:"integrations/sources/bamboo-hr",title:"Bamboo HR",description:"Overview",source:"@site/../docs/integrations/sources/bamboo-hr.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/bamboo-hr",permalink:"/integrations/sources/bamboo-hr",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/bamboo-hr.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Babelforce",permalink:"/integrations/sources/babelforce"},next:{title:"Baton",permalink:"/integrations/sources/baton"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up the Bamboo HR connector in Airbyte",id:"step-1-set-up-the-bamboo-hr-connector-in-airbyte",level:2},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte OSS:",id:"for-airbyte-oss",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations-1",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bamboo-hr"},"Bamboo HR"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The BambooHr source supports Full Refresh sync. You can choose if this connector will overwrite the old records or duplicate old ones."),(0,n.kt)("h3",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This connector outputs the following stream:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://documentation.bamboohr.com/reference/request-custom-report-1"},"Custom Reports"))),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"BambooHR has the ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.bamboohr.com/docs/api-details"},"rate limits"),", but the connector should not run into API limitations under normal usage. Please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"BambooHr Account"),(0,n.kt)("li",{parentName:"ul"},"BambooHr ",(0,n.kt)("a",{parentName:"li",href:"https://documentation.bamboohr.com/docs"},"Api key"))),(0,n.kt)("h1",{id:"bamboo-hr-1"},"Bamboo HR"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Bamboo HR source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"BambooHr Account"),(0,n.kt)("li",{parentName:"ul"},"BambooHr ",(0,n.kt)("a",{parentName:"li",href:"https://documentation.bamboohr.com/docs"},"Api key"))),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h2",{id:"step-1-set-up-the-bamboo-hr-connector-in-airbyte"},"Step 1: Set up the Bamboo HR connector in Airbyte"),(0,n.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Bamboo HR connector and select ",(0,n.kt)("strong",{parentName:"li"},"Bamboo HR")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"subdomain")),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"api_key")),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"custom_reports_fields")," if need"),(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("inlineCode",{parentName:"li"},"custom_reports_include_default_fields")," flag value"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"))),(0,n.kt)("h3",{id:"for-airbyte-oss"},"For Airbyte OSS:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard"),(0,n.kt)("li",{parentName:"ol"},"Set the name for your source "),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"subdomain")),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"api_key")),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"custom_reports_fields")," if need"),(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("inlineCode",{parentName:"li"},"custom_reports_include_default_fields")," flag value"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"))),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Bamboo HR source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://documentation.bamboohr.com/reference/request-custom-report-1"},"Custom Reports"))),(0,n.kt)("h2",{id:"performance-considerations-1"},"Performance considerations"),(0,n.kt)("p",null,"BambooHR has the ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.bamboohr.com/docs/api-details"},"rate limits"),", but the connector should not run into API limitations under normal usage.\nPlease ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17684"},"17684")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix custom field validation retrieve")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16826"},"16826")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add custom fields validation during check")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11326"},"11326")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add support for Custom Reports endpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5054"},"5054")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial release with Employees API")))))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return r?a.createElement(k,i(i({ref:t},m),{},{components:r})):a.createElement(k,i({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);