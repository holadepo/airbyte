"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[48525],{61933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={},o="TMDb",l={unversionedId:"integrations/sources/tmdb",id:"integrations/sources/tmdb",title:"TMDb",description:"This page contains the setup guide and reference information for the Tmdb source connector.",source:"@site/../docs/integrations/sources/tmdb.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/tmdb",permalink:"/integrations/sources/tmdb",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/tmdb.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Timely",permalink:"/integrations/sources/timely"},next:{title:"Toggl API",permalink:"/integrations/sources/toggl"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up TMDb connection",id:"step-1-set-up-tmdb-connection",level:3},{value:"Step 2: Set up the TMDb connector in Airbyte",id:"step-2-set-up-the-tmdb-connector-in-airbyte",level:2},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte OSS:",id:"for-airbyte-oss",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"API method example",id:"api-method-example",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:s},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tmdb"},"TMDb"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.themoviedb.org/3/getting-started/introduction."},"Tmdb")," source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Api key and movie ID is mandate for this connector to work, It could be generated using a free account at TMDb. Visit: ",(0,n.kt)("a",{parentName:"p",href:"https://www.themoviedb.org/settings/api"},"https://www.themoviedb.org/settings/api"),"\nJust pass the generated API key and Movie ID for establishing the connection."),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-tmdb-connection"},"Step 1: Set up TMDb connection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Generate an API key (Example: 12345)"),(0,n.kt)("li",{parentName:"ul"},"Give a Movie ID, Query, Language (Target Movie, Query for search, Language filter)")),(0,n.kt)("h2",{id:"step-2-set-up-the-tmdb-connector-in-airbyte"},"Step 2: Set up the TMDb connector in Airbyte"),(0,n.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Google-webfonts connector and select ",(0,n.kt)("strong",{parentName:"li"},"TMDb")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"api_key"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter params ",(0,n.kt)("inlineCode",{parentName:"li"},"movie_id, query, language")," (if needed)."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h3",{id:"for-airbyte-oss"},"For Airbyte OSS:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard."),(0,n.kt)("li",{parentName:"ol"},"Set the name for your source."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"api_key"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter params ",(0,n.kt)("inlineCode",{parentName:"li"},"movie_id, query, language")," (if needed)."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Google-webfonts source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Certification_movie"),(0,n.kt)("li",{parentName:"ul"},"Certification_tv"),(0,n.kt)("li",{parentName:"ul"},"Changes_movie"),(0,n.kt)("li",{parentName:"ul"},"Changes_tv"),(0,n.kt)("li",{parentName:"ul"},"Changes_person"),(0,n.kt)("li",{parentName:"ul"},"Movies_alternative_titles"),(0,n.kt)("li",{parentName:"ul"},"Movies_changes"),(0,n.kt)("li",{parentName:"ul"},"Movies_credits"),(0,n.kt)("li",{parentName:"ul"},"Movies_details"),(0,n.kt)("li",{parentName:"ul"},"Movies_external_ids"),(0,n.kt)("li",{parentName:"ul"},"Movies_images"),(0,n.kt)("li",{parentName:"ul"},"Movies_keywords"),(0,n.kt)("li",{parentName:"ul"},"Movies_latest"),(0,n.kt)("li",{parentName:"ul"},"Movies_lists"),(0,n.kt)("li",{parentName:"ul"},"Movies_now_playing"),(0,n.kt)("li",{parentName:"ul"},"Movies_popular"),(0,n.kt)("li",{parentName:"ul"},"Movies_recommentations"),(0,n.kt)("li",{parentName:"ul"},"Movies_releases_dates"),(0,n.kt)("li",{parentName:"ul"},"Movies_reviews"),(0,n.kt)("li",{parentName:"ul"},"Movies_similar_movies"),(0,n.kt)("li",{parentName:"ul"},"Movies_top_rated"),(0,n.kt)("li",{parentName:"ul"},"Movies_translations"),(0,n.kt)("li",{parentName:"ul"},"Movies_upcoming"),(0,n.kt)("li",{parentName:"ul"},"Movies_videos"),(0,n.kt)("li",{parentName:"ul"},"Movies_watch_providers"),(0,n.kt)("li",{parentName:"ul"},"Trending"),(0,n.kt)("li",{parentName:"ul"},"Search_collections"),(0,n.kt)("li",{parentName:"ul"},"Search_companies"),(0,n.kt)("li",{parentName:"ul"},"Search_keywords"),(0,n.kt)("li",{parentName:"ul"},"Search_movies"),(0,n.kt)("li",{parentName:"ul"},"Search_multi"),(0,n.kt)("li",{parentName:"ul"},"Search_people"),(0,n.kt)("li",{parentName:"ul"},"Search_tv_shows")),(0,n.kt)("h2",{id:"api-method-example"},"API method example"),(0,n.kt)("p",null,"GET ",(0,n.kt)("a",{parentName:"p",href:"https://api.themoviedb.org/3/movie/%7Bmovie_id%7D/alternative_titles?api_key=%7Bapi_key%7D"},"https://api.themoviedb.org/3/movie/{movie_id}/alternative_titles?api_key={api_key}")),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"TMDb's ",(0,n.kt)("a",{parentName:"p",href:"https://developers.themoviedb.org/3/getting-started/introduction"},"API reference")," has v3 at present and v4 is at development. The connector as default uses v3."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18561"},"Init")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial commit")))))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return r?a.createElement(k,o(o({ref:t},m),{},{components:r})):a.createElement(k,o({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);