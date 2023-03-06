"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[20358],{32233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const n={},i="WooCommerce",l={unversionedId:"integrations/sources/woocommerce",id:"integrations/sources/woocommerce",title:"WooCommerce",description:"This page contains the setup guide and reference information for the WooCommerce source connector.",source:"@site/../docs/integrations/sources/woocommerce.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/woocommerce",permalink:"/integrations/sources/woocommerce",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/woocommerce.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Wikipedia Pageviews",permalink:"/integrations/sources/wikipedia-pageviews"},next:{title:"Wordpress",permalink:"/integrations/sources/wordpress"}},m={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up WooCommerce",id:"step-1-set-up-woocommerce",level:3},{value:"Step 2: Set up the WooCommerce connector in Airbyte",id:"step-2-set-up-the-woocommerce-connector-in-airbyte",level:3},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte OSS:",id:"for-airbyte-oss",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Connector-specific features &amp; highlights",id:"connector-specific-features--highlights",level:2},{value:"Data type map",id:"data-type-map",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"woocommerce"},"WooCommerce"),(0,o.kt)("p",null,"This page contains the setup guide and reference information for the WooCommerce source connector."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To set up the WooCommerce source connector with Airbyte, you must be using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WooCommerce 3.5+"),(0,o.kt)("li",{parentName:"ul"},"WordPress 4.4+"),(0,o.kt)("li",{parentName:"ul"},"Pretty permalinks in ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings > Permalinks")," so that the custom endpoints are supported.\ne.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/%year%/%monthnum%/%day%/%postname%/"))),(0,o.kt)("p",null,"You will need to generate new API key with read permissions and use ",(0,o.kt)("inlineCode",{parentName:"p"},"Customer key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Customer Secret"),"."),(0,o.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,o.kt)("h3",{id:"step-1-set-up-woocommerce"},"Step 1: Set up WooCommerce"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate new ",(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#rest-api-keys"},"Rest API key")),(0,o.kt)("li",{parentName:"ol"},"Obtain ",(0,o.kt)("inlineCode",{parentName:"li"},"Customer key")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Customer Secret"),".")),(0,o.kt)("h3",{id:"step-2-set-up-the-woocommerce-connector-in-airbyte"},"Step 2: Set up the WooCommerce connector in Airbyte"),(0,o.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,o.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,o.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the WooCommerce connector and select ",(0,o.kt)("strong",{parentName:"li"},"WooCommerce")," from the Source\ntype dropdown."),(0,o.kt)("li",{parentName:"ol"},"Fill in ",(0,o.kt)("inlineCode",{parentName:"li"},"Customer key")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Customer Secret")," with data from Step 1 of this guide."),(0,o.kt)("li",{parentName:"ol"},"Fill in ",(0,o.kt)("inlineCode",{parentName:"li"},"Shop Name"),". For ",(0,o.kt)("inlineCode",{parentName:"li"},"https://EXAMPLE.com"),", the shop name is 'EXAMPLE.com'."),(0,o.kt)("li",{parentName:"ol"},"Choose start date you want to start sync from."),(0,o.kt)("li",{parentName:"ol"},"(Optional) Fill in Conversion Window.")),(0,o.kt)("h3",{id:"for-airbyte-oss"},"For Airbyte OSS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard."),(0,o.kt)("li",{parentName:"ol"},"Set the name for your source."),(0,o.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the WooCommerce connector and select ",(0,o.kt)("strong",{parentName:"li"},"WooCommerce")," from the Source\ntype dropdown."),(0,o.kt)("li",{parentName:"ol"},"Fill in ",(0,o.kt)("inlineCode",{parentName:"li"},"Customer key")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Customer Secret")," with data from Step 1 of this guide."),(0,o.kt)("li",{parentName:"ol"},"Fill in ",(0,o.kt)("inlineCode",{parentName:"li"},"Shop Name"),". For ",(0,o.kt)("inlineCode",{parentName:"li"},"https://EXAMPLE.com"),", the shop name is 'EXAMPLE.com'."),(0,o.kt)("li",{parentName:"ol"},"Choose start date you want to start sync from."),(0,o.kt)("li",{parentName:"ol"},"(Optional) Fill in Conversion Window.")),(0,o.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,o.kt)("p",null,"The WooCommerce source connector supports the\nfollowing ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/glossary#full-refresh-sync"},"Full Refresh - Overwrite")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"},"Incremental - Deduped History"))),(0,o.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#coupons"},"Coupons")," ","(","Incremental",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#customers"},"Customers")," ","(","Incremental",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#orders"},"orders")," ","(","Incremental",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#order-notes"},"Order notes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#payment-gateways"},"Payment gateways")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#product-attribute-terms"},"Product attribute terms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#product-attributes"},"Product attributes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#product-categories"},"Product categories")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#product-reviews"},"Product reviews")," ","(","Incremental",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#product-shipping-classes"},"Product shipping classes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#product-tags"},"Product tags")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#product-variations"},"Product variations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#products"},"Products")," ","(","Incremental",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#refunds"},"Refunds")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#shipping-methods"},"Shipping methods")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#shipping-zone-locations"},"Shipping zone locations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#shipping-zone-methods"},"Shipping zone methods")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#shipping-zones"},"Shipping zones")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#system-status-tools"},"System status tools")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#tax-classes"},"Tax classes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#tax-rates"},"Tax rates"))),(0,o.kt)("h2",{id:"connector-specific-features--highlights"},"Connector-specific features & highlights"),(0,o.kt)("p",null,"Useful links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#introduction"},"WooCommerce Rest API Docs"))),(0,o.kt)("h2",{id:"data-type-map"},"Data type map"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"integer")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"integer")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2023-03-03"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23599"},"23599")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Fix pagination and removed lookback window")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2023-02-10"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22821"},"22821")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specified date formatting in specification")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2022-11-30"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19903"},"19903")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Migrate to low-code; Certification to Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-09-09"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5955"},"5955")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Initial Release. Source WooCommerce")))))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=o,k=s["".concat(m,".").concat(u)]||s[u]||d[u]||n;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);