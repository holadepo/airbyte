"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[80418],{97521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={},l="SearchMetrics",s={unversionedId:"integrations/sources/search-metrics",id:"integrations/sources/search-metrics",title:"SearchMetrics",description:"Overview",source:"@site/../docs/integrations/sources/search-metrics.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/search-metrics",permalink:"/integrations/sources/search-metrics",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/search-metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"sap-fieldglass",permalink:"/integrations/sources/sap-fieldglass"},next:{title:"Secoda API",permalink:"/integrations/sources/secoda"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"searchmetrics"},"SearchMetrics"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The SearchMetrics source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Several output streams are available from this source:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQwODQ5ODE-get-list-projects"},"Projects")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NDY-get-list-benchmark-rankings-s7"},"BenchmarkRankingsS7")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NDc-get-list-competitor-rankings-s7"},"CompetitorRankingsS7")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NDg-get-list-distribution-keywords-s7"},"DistributionKeywordsS7")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NTA-get-list-keyword-potentials-s7"},"KeywordPotentialsS7")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQwODQ5OTI-get-list-competitors"},"ListCompetitors")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQxODQxNjU-get-list-competitors-relevancy"},"ListCompetitorsRelevancy")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NTE-get-list-losers-s7"},"ListLosersS7")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NTI-get-list-market-share-s7"},"ListMarketShareS7")," ","(","Incremental",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NTM-get-list-position-spread-historic-s7"},"ListPositionSpreadHistoricS7")," ","(","Incremental",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQwODQ5OTg-get-list-rankings-domain"},"ListRankingsDomain")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NTY-get-list-rankings-historic-s7"},"ListRankingsHistoricS7")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQyMjg4NDk-get-list-seo-visibility-country"},"ListSeoVisibilityCountry")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NTc-get-list-seo-visibility-historic-s7"},"ListSeoVisibilityHistoricS7")," ","(","Incremental",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NTg-get-list-serp-spread-s7"},"ListSerpSpreadS7")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NjQ-get-list-winners-s7"},"ListWinnersS7")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQyMzQzMjk-get-value-seo-visibility"},"SeoVisibilityValueS7")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0Njc-get-value-serp-spread-s7"},"SerpSpreadValueS7")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NTk-get-list-tag-potentials-s7"},"TagPotentialsS7")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjE4NzQ0ODMz-get-list-project-tags"},"Tags")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQzNjc0NjM-get-list-url-rankings-s7"},"UrlRankingsS7")," ","(","Full table",")")),(0,i.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("p",null,"The SearchMetrics connector should not run into SearchMetrics API limitations under normal usage. Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SearchMetrics Client Secret"),(0,i.kt)("li",{parentName:"ul"},"SearchMetrics API Key")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"Please read ",(0,i.kt)("a",{parentName:"p",href:"https://developer.searchmetrics.com/docs/apiv4-documentation/ZG9jOjQ2Nzk1-getting-started"},"How to get your API Key and Client Secret")," ."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6992"},"6992")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Deleted windows in days from config")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-13"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6992"},"6992")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Release SearchMetrics CDK Connector")))))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||n;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);