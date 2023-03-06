"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[95579],{57585:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={},o="Smartsheets",i={unversionedId:"integrations/sources/smartsheets",id:"integrations/sources/smartsheets",title:"Smartsheets",description:"This page guides you through the process of setting up the Smartsheets source connector.",source:"@site/../docs/integrations/sources/smartsheets.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/smartsheets",permalink:"/integrations/sources/smartsheets",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/smartsheets.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"SmartEngage",permalink:"/integrations/sources/smartengage"},next:{title:"Snapchat Marketing",permalink:"/integrations/sources/snapchat-marketing"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up Smartsheets",id:"step-1-set-up-smartsheets",level:2},{value:"Obtain a Smartsheets API access token",id:"obtain-a-smartsheets-api-access-token",level:3},{value:"Prepare the spreadsheet ID of your Smartsheet",id:"prepare-the-spreadsheet-id-of-your-smartsheet",level:3},{value:"Step 2: Set up the Smartsheets connector in Airbyte",id:"step-2-set-up-the-smartsheets-connector-in-airbyte",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Supported streams",id:"supported-streams",level:2},{value:"Important highlights",id:"important-highlights",level:2},{value:"Data type map",id:"data-type-map",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"smartsheets"},"Smartsheets"),(0,n.kt)("p",null,"This page guides you through the process of setting up the Smartsheets source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To configure the Smartsheet Source for syncs, you'll need the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Smartsheets API access token - generated by a Smartsheets user with at least ",(0,n.kt)("strong",{parentName:"li"},"read")," access"),(0,n.kt)("li",{parentName:"ul"},"The ID of the spreadsheet you'd like to sync")),(0,n.kt)("h2",{id:"step-1-set-up-smartsheets"},"Step 1: Set up Smartsheets"),(0,n.kt)("h3",{id:"obtain-a-smartsheets-api-access-token"},"Obtain a Smartsheets API access token"),(0,n.kt)("p",null,"You can generate an API key for your account from a session of your Smartsheet webapp by clicking:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Account (top-right icon)"),(0,n.kt)("li",{parentName:"ul"},"Apps & Integrations"),(0,n.kt)("li",{parentName:"ul"},"API Access"),(0,n.kt)("li",{parentName:"ul"},"Generate new access token")),(0,n.kt)("p",null,"For questions on advanced authorization flows, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://www.smartsheet.com/content-center/best-practices/tips-tricks/api-getting-started"},"this"),"."),(0,n.kt)("h3",{id:"prepare-the-spreadsheet-id-of-your-smartsheet"},"Prepare the spreadsheet ID of your Smartsheet"),(0,n.kt)("p",null,"You'll also need the ID of the Spreadsheet you'd like to sync. Unlike Google Sheets, this ID is not found in the URL. You can find the required spreadsheet ID from your Smartsheet app session by going to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"File"),(0,n.kt)("li",{parentName:"ul"},"Properties")),(0,n.kt)("h2",{id:"step-2-set-up-the-smartsheets-connector-in-airbyte"},"Step 2: Set up the Smartsheets connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click Sources. In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Smartsheets connector and select ",(0,n.kt)("strong",{parentName:"li"},"Smartsheets")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Authenticate via OAuth2.0 using the API access token from Prerequisites"),(0,n.kt)("li",{parentName:"ol"},"Enter the start date and the ID of the spreadsheet you want to sync"),(0,n.kt)("li",{parentName:"ol"},"Submit the form")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard"),(0,n.kt)("li",{parentName:"ol"},"Set the name for your source"),(0,n.kt)("li",{parentName:"ol"},"Enter the API access token from Prerequisites"),(0,n.kt)("li",{parentName:"ol"},"Enter the ID of the spreadsheet you want to sync"),(0,n.kt)("li",{parentName:"ol"},"Enter a start sync date"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"))),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Smartsheets source connector supports the following",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"}," sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full Refresh | Overwrite"),(0,n.kt)("li",{parentName:"ul"},"Full Refresh | Append"),(0,n.kt)("li",{parentName:"ul"},"Incremental  | Append"),(0,n.kt)("li",{parentName:"ul"},"Incremental  | Deduped")),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"At the time of writing, the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.smartsheet.com/blog/smartsheet-api-best-practices#be-practical-adhere-to-rate-limiting-guidelines"},"Smartsheets API rate limit")," is 300 requests per minute per API access token."),(0,n.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,n.kt)("p",null,"This source provides a single stream per spreadsheet with a dynamic schema, depending on your spreadsheet structure.\nFor example, having a spreadsheet ",(0,n.kt)("inlineCode",{parentName:"p"},"Customers"),", the connector would introduce a stream with the same name and properties typed according to Data type map (see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/smartsheets/#data-type-map"},"below"),")."),(0,n.kt)("h2",{id:"important-highlights"},"Important highlights"),(0,n.kt)("p",null,"The Smartsheet Source is written to pull data from a single Smartsheet spreadsheet. Unlike Google Sheets, Smartsheets only allows one sheet per Smartsheet - so a given Airbyte connector instance can sync only one sheet at a time. To replicate multiple spreadsheets, you can create multiple instances of the Smartsheet Source in Airbyte, reusing the API token for all your sheets that you need to sync."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: Column headers must contain only alphanumeric characters or ",(0,n.kt)("inlineCode",{parentName:"strong"},"_")," , as specified in the")," ",(0,n.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},(0,n.kt)("strong",{parentName:"a"},"Airbyte Protocol")),"."),(0,n.kt)("h2",{id:"data-type-map"},"Data type map"),(0,n.kt)("p",null,"The data type mapping adopted by this connector is based on the Smartsheet ",(0,n.kt)("a",{parentName:"p",href:"https://smartsheet-platform.github.io/api-docs/index.html?python#column-types"},"documentation"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE"),": For any column datatypes interpreted by Smartsheets beside ",(0,n.kt)("inlineCode",{parentName:"p"},"DATE")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"DATETIME"),", this connector's source schema generation assumes a ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," type, in which case the ",(0,n.kt)("inlineCode",{parentName:"p"},"format")," field is not required by Airbyte."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"TEXT_NUMBER")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"DATE")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"format: date"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"DATETIME")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"format: date-time"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"anything else")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("p",null,"The remaining column datatypes supported by Smartsheets are more complex types (e.g. Predecessor, Dropdown List) and are not supported by this connector beyond its ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," representation."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23237"},"23237")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix OAuth2.0 token refresh")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22419"},"22419")),(0,n.kt)("td",{parentName:"tr",align:"left"},"OAuth2.0 support - enabled; add allowed hosts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20017"},"20017")),(0,n.kt)("td",{parentName:"tr",align:"left"},"OAuth2.0 support - disabled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12500"},"12500")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve input configuration copy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12203"},"12203")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Doc improvements")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12077"},"12077")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Implement incremental read and improve code test coverage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11911"},"11911")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bugfix: scrambled columns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9792"},"9792")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added oauth support")))))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,u=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return a?r.createElement(u,o(o({ref:t},m),{},{components:a})):r.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);