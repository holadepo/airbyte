"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[40639],{14230:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},l="Chargebee",o={unversionedId:"integrations/sources/chargebee",id:"integrations/sources/chargebee",title:"Chargebee",description:"This page contains the setup guide and reference information for the Chargebee source connector.",source:"@site/../docs/integrations/sources/chargebee.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/chargebee",permalink:"/integrations/sources/chargebee",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/chargebee.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Cart.com",permalink:"/integrations/sources/cart"},next:{title:"Chargify",permalink:"/integrations/sources/chargify"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up the Chargebee connector in Airbyte",id:"set-up-the-chargebee-connector-in-airbyte",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:s},d="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"chargebee"},"Chargebee"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Chargebee source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To set up the Chargebee source connector, you'll need the ",(0,n.kt)("a",{parentName:"p",href:"https://apidocs.chargebee.com/docs/api?prod_cat_ver=2#api_authentication"},"Chargebee API key")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://apidocs.chargebee.com/docs/api?prod_cat_ver=2"},"Product Catalog version"),"."),(0,n.kt)("h2",{id:"set-up-the-chargebee-connector-in-airbyte"},"Set up the Chargebee connector in Airbyte"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account or navigate to the Airbyte Open Source dashboard."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Chargebee")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter the name for the Chargebee connector."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Site"),", enter the site prefix for your Chargebee instance."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Start Date"),", enter the date in YYYY-MM-DDTHH:mm:ssZ format. The data added on and after this date will be replicated."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"API Key"),", enter the ",(0,n.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api?prod_cat_ver=2#api_authentication"},"Chargebee API key"),"."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Product Catalog"),", enter the Chargebee ",(0,n.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api?prod_cat_ver=2"},"Product Catalog version"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Chargebee source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/glossary#full-refresh-sync"},"Full Refresh - Overwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append"))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/subscriptions?prod_cat_ver=2#list_subscriptions"},"Subscriptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/customers?prod_cat_ver=2#list_customers"},"Customers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/invoices?prod_cat_ver=2#list_invoices"},"Invoices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/orders?prod_cat_ver=2#list_orders"},"Orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/plans?prod_cat_ver=1&lang=curl#list_plans"},"Plans")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/addons?prod_cat_ver=1&lang=curl#list_addons"},"Addons")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/items?prod_cat_ver=2#list_items"},"Items")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/item_prices?prod_cat_ver=2#list_item_prices"},"Item Prices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apidocs.chargebee.com/docs/api/attached_items?prod_cat_ver=2#list_attached_items"},"Attached Items"))),(0,n.kt)("p",null,"Some streams are available only for specific on Product Catalog versions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Available in ",(0,n.kt)("inlineCode",{parentName:"li"},"Product Catalog 1.0")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Product Catalog 2.0"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Customers"),(0,n.kt)("li",{parentName:"ul"},"Events"),(0,n.kt)("li",{parentName:"ul"},"Invoices"),(0,n.kt)("li",{parentName:"ul"},"Credit Notes"),(0,n.kt)("li",{parentName:"ul"},"Orders"),(0,n.kt)("li",{parentName:"ul"},"Coupons"),(0,n.kt)("li",{parentName:"ul"},"Subscriptions"),(0,n.kt)("li",{parentName:"ul"},"Transactions"))),(0,n.kt)("li",{parentName:"ol"},"Available only in ",(0,n.kt)("inlineCode",{parentName:"li"},"Product Catalog 1.0"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Plans"),(0,n.kt)("li",{parentName:"ul"},"Addons"))),(0,n.kt)("li",{parentName:"ol"},"Available only in ",(0,n.kt)("inlineCode",{parentName:"li"},"Product Catalog 2.0"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Items"),(0,n.kt)("li",{parentName:"ul"},"Item Prices"),(0,n.kt)("li",{parentName:"ul"},"Attached Items")))),(0,n.kt)("p",null,"Note that except the ",(0,n.kt)("inlineCode",{parentName:"p"},"Attached Items")," stream, all the streams listed above are incremental streams, which means they:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read only new records"),(0,n.kt)("li",{parentName:"ul"},"Output only new records")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Attached Items")," stream is also incremental but it reads ",(0,n.kt)("em",{parentName:"p"},"all")," records and outputs only new records, which is why syncing the ",(0,n.kt)("inlineCode",{parentName:"p"},"Attached Items")," stream, even in incremental mode, is expensive in terms of your Chargebee API quota. "),(0,n.kt)("p",null,"Generally speaking, it incurs a number of API calls equal to the total number of attached items in your chargebee instance divided by 100, regardless of how many ",(0,n.kt)("inlineCode",{parentName:"p"},"AttachedItems")," were actually changed or synced in a particular sync job."),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The Chargebee connector should not run into ",(0,n.kt)("a",{parentName:"p",href:"https://apidocs.chargebee.com/docs/api?prod_cat_ver=2#api_rate_limits"},"Chargebee API")," limitations under normal usage. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"Create an issue")," if you encounter any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21688"},"21688")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to CDK beta 0.29; fix schemas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23207"},"23207")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Edited stream schemas to get rid of unnecessary ",(0,n.kt)("inlineCode",{parentName:"td"},"enum"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21688"},"21688")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to YAML; add new streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17661"},"17661")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Make ",(0,n.kt)("inlineCode",{parentName:"td"},"transaction")," stream to be consistent with ",(0,n.kt)("inlineCode",{parentName:"td"},"S3")," by using type transformer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17304"},"17304")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream state.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17056"},"17056")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Add "custom fields" to the relevant Chargebee source data streams')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15743"},"15743")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix transaction ",(0,n.kt)("inlineCode",{parentName:"td"},"exchange_rate")," field type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14672"},"14672")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix transaction sort by")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10827"},"10827")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix Credit Note stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10795"},"10795")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add support for Credit Note stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-0224"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10312"},"10312")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add support for Transaction Stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10366"},"10366")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix broken ",(0,n.kt)("inlineCode",{parentName:"td"},"coupon")," stream + add unit tests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10269"},"10269")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add support for Coupon stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10143"},"10143")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add support for Event stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8434"},"8434")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update fields in source-connectors specifications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6454"},"6454")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix examples in spec file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5421"},"5421")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Add support for "Product Catalog 2.0" specific streams: ',(0,n.kt)("inlineCode",{parentName:"td"},"Items"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"Item prices")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"Attached Items"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5067"},"5067")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Prepare connector for publishing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4539"},"4539")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add entrypoint and bump version for connector")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3410"},"3410")),(0,n.kt)("td",{parentName:"tr",align:"left"},"New Source: Chargebee")))))}c.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(a),u=n,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return a?r.createElement(h,l(l({ref:e},m),{},{components:a})):r.createElement(h,l({ref:e},m))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);