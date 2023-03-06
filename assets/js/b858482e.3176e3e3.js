"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[67932],{20477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={},i="StitchData vs Airbyte",s={unversionedId:"archive/faq/differences-with/stitchdata-vs-airbyte",id:"archive/faq/differences-with/stitchdata-vs-airbyte",title:"StitchData vs Airbyte",description:"We wrote an article, \u201cOpen-source vs. Commercial Software",source:"@site/../docs/archive/faq/differences-with/stitchdata-vs-airbyte.md",sourceDirName:"archive/faq/differences-with",slug:"/archive/faq/differences-with/stitchdata-vs-airbyte",permalink:"/archive/faq/differences-with/stitchdata-vs-airbyte",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/archive/faq/differences-with/stitchdata-vs-airbyte.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"StitchData:",id:"stitchdata",level:2},{value:"Airbyte:",id:"airbyte",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stitchdata-vs-airbyte"},"StitchData vs Airbyte"),(0,n.kt)("p",null,"We wrote an article, \u201c",(0,n.kt)("a",{parentName:"p",href:"https://airbyte.com/articles/data-engineering-thoughts/open-source-vs-commercial-software-how-to-better-solve-data-integration/"},"Open-source vs. Commercial Software: How to Solve the Data Integration Problem"),",\u201d in which we describe the pros and cons of StitchData\u2019s commercial approach and Airbyte\u2019s open-source approach. Don\u2019t hesitate to check it out for more detailed arguments. As a summary, here are the differences:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://airbyte.com/wp-content/uploads/2020/10/Open-source-vs-commercial-approach-2048x1843.png",alt:null})),(0,n.kt)("h2",{id:"stitchdata"},"StitchData:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Limited deprecating connectors:")," Stitch only supports 150 connectors. Talend has stopped investing in StitchData and its connectors. And on Singer, each connector is its own open-source project. So you never know the quality of a tap or target until you have actually used it. There is no guarantee whatsoever about what you\u2019ll get."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pricing indexed on usage:")," StitchData\u2019s pricing is indexed on the connectors used and the volume of data transferred. Teams always need to keep that in mind and are not free to move data without thinking about cost. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Security and privacy compliance:")," all companies are subject to privacy compliance laws, such as GDPR, CCPA, HIPAA, etc. As a matter of fact, above a certain stage ","(","about 100 employees",")"," in a company, all external products need to go through a security compliance process that can take several months. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"No moving data between internal databases:")," StitchData sits in the cloud, so if you have to replicate data from an internal database to another, it makes no sense to have the data move through their cloud for privacy and cost reasons. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"StitchData\u2019s Singer connectors are standalone binaries:")," you still need to build everything around to make them work. And it\u2019s hard to update some pre-built connectors, as they are of poor quality. ")),(0,n.kt)("h2",{id:"airbyte"},"Airbyte:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Free, as open source, so no more pricing based on usage:")," learn more about our ",(0,n.kt)("a",{parentName:"li",href:"https://handbook.airbyte.io/strategy/business-model"},"future business model")," ","(","connectors will always remain open-source",")",". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Supporting 50+ connectors by the end of 2020")," ","(","so in only 5 months of existence",")",". Our goal is to reach 300+ connectors by the end of 2021."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Building new connectors made trivial, in the language of your choice:")," Airbyte makes it a lot easier to create your own connector, vs. building them yourself in-house ","(","with Airflow or other tools",")",". Scheduling, orchestration, and monitoring comes out of the box with Airbyte."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Maintenance-free connectors you can use in minutes.")," Just authenticate your sources and warehouse, and get connectors that adapt to schema and API changes for you."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Addressing the long tail of connectors:")," with the help of the community, Airbyte ambitions to support thousands of connectors. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Adapt existing connectors to your needs:")," you can adapt any existing connector to address your own unique edge case."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Using data integration in a workflow:")," Airbyte\u2019s API lets engineering teams add data integration jobs into their workflow seamlessly."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Integrates with your data stack and your needs:")," Airflow, Kubernetes, dbt, etc. Its normalization is optional, it gives you a basic version that works out of the box, but also allows you to use dbt to do more complicated things."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Debugging autonomy:")," if you experience any connector issue, you won\u2019t need to wait for Fivetran\u2019s customer support team to get back to you, if you can fix the issue fast yourself. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Your data stays in your cloud.")," Have full control over your data, and the costs of your data transfers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"No more security and privacy compliance, as self-hosted and open-sourced ","(","MIT",")",".")," Any team can directly address their integration needs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Premium support directly on our Slack for free"),". Our time to resolution is about 3-4 hours in average.")))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);