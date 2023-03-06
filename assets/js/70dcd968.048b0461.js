"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[91404],{38853:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},o="Google Search Console",l={unversionedId:"integrations/sources/google-search-console",id:"integrations/sources/google-search-console",title:"Google Search Console",description:"This page contains the setup guide and reference information for the google search console source connector.",source:"@site/../docs/integrations/sources/google-search-console.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/google-search-console",permalink:"/integrations/sources/google-search-console",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/google-search-console.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Google PageSpeed Insights",permalink:"/integrations/sources/google-pagespeed-insights"},next:{title:"Google Sheets",permalink:"/integrations/sources/google-sheets"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up google search console",id:"step-1-set-up-google-search-console",level:3},{value:"How to create the client credentials for Google Search Console, to use with Airbyte?",id:"how-to-create-the-client-credentials-for-google-search-console-to-use-with-airbyte",level:4},{value:"Creating a Google service account",id:"creating-a-google-service-account",level:3},{value:"Using the existing Service Account",id:"using-the-existing-service-account",level:3},{value:"Note",id:"note",level:3},{value:"Create a Service Account with delegated domain-wide authority",id:"create-a-service-account-with-delegated-domain-wide-authority",level:3},{value:"Step 2: Set up the google search console connector in Airbyte",id:"step-2-set-up-the-google-search-console-connector-in-airbyte",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Data type map",id:"data-type-map",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-search-console"},"Google Search Console"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for the google search console source connector."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Credentials to a Google Service Account ","(","or Google Service Account with delegated Domain Wide Authority",")"," or Google User Account")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Since Google has deprecated certain ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/resources/oob-migration"},"OAuth workflows"),", OAuth isn't supported for this connector at this time.")),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h3",{id:"step-1-set-up-google-search-console"},"Step 1: Set up google search console"),(0,r.kt)("h4",{id:"how-to-create-the-client-credentials-for-google-search-console-to-use-with-airbyte"},"How to create the client credentials for Google Search Console, to use with Airbyte?"),(0,r.kt)("p",null,"You can either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the existing ",(0,r.kt)("inlineCode",{parentName:"li"},"Service Account")," for your Google Project with granted Admin Permissions"),(0,r.kt)("li",{parentName:"ul"},"Use your personal Google User Account with oauth. If you choose this option, your account must have permissions to view the Google Search Console project you choose."),(0,r.kt)("li",{parentName:"ul"},"Create the new ",(0,r.kt)("inlineCode",{parentName:"li"},"Service Account")," credentials for your Google Project, and grant Admin Permissions to it"),(0,r.kt)("li",{parentName:"ul"},"Follow the ",(0,r.kt)("inlineCode",{parentName:"li"},"Delegating domain-wide authority")," process to obtain the necessary permissions to your google account from the administrator of Workspace")),(0,r.kt)("h3",{id:"creating-a-google-service-account"},"Creating a Google service account"),(0,r.kt)("p",null,"A service account's credentials include a generated email address that is unique and at least one public/private key pair. If domain-wide delegation is enabled, then a client ID is also part of the service account's credentials."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("a",{parentName:"li",href:"https://console.developers.google.com/iam-admin/serviceaccounts"},"Service accounts page")),(0,r.kt)("li",{parentName:"ol"},"If prompted, select an existing project, or create a new project."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"+ Create service account"),"."),(0,r.kt)("li",{parentName:"ol"},"Under Service account details, type a ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ID"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"description")," for the service account, then click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optional: Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Service account permissions"),", select the ",(0,r.kt)("inlineCode",{parentName:"li"},"IAM roles")," to grant to the service account, then click ",(0,r.kt)("inlineCode",{parentName:"li"},"Continue"),"."),(0,r.kt)("li",{parentName:"ul"},"Optional: Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Grant users access to this service account"),", add the ",(0,r.kt)("inlineCode",{parentName:"li"},"users")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"groups")," that are allowed to use and manage the service account."))),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/credentials"},"API Console/Credentials"),", check the ",(0,r.kt)("inlineCode",{parentName:"li"},"Service Accounts")," section, click on the Email address of service account you just created."),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"Details")," tab and find ",(0,r.kt)("inlineCode",{parentName:"li"},"Show domain-wide delegation"),", checkmark the ",(0,r.kt)("inlineCode",{parentName:"li"},"Enable Google Workspace Domain-wide Delegation"),"."),(0,r.kt)("li",{parentName:"ol"},"On ",(0,r.kt)("inlineCode",{parentName:"li"},"Keys")," tab click ",(0,r.kt)("inlineCode",{parentName:"li"},"+ Add key"),", then click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create new key"),".")),(0,r.kt)("p",null,"Your new public/private key pair should be now generated and downloaded to your machine as ",(0,r.kt)("inlineCode",{parentName:"p"},"<project_id>.json")," you can find it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Downloads")," folder or somewhere else if you use another default destination for downloaded files. This file serves as the only copy of the private key. You are responsible for storing it securely. If you lose this key pair, you will need to generate a new one!"),(0,r.kt)("h3",{id:"using-the-existing-service-account"},"Using the existing Service Account"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/credentials"},"API Console/Credentials"),", check the ",(0,r.kt)("inlineCode",{parentName:"li"},"Service Accounts")," section, click on the Email address of service account you just created."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Details")," tab and find ",(0,r.kt)("inlineCode",{parentName:"li"},"Show domain-wide delegation"),", checkmark the ",(0,r.kt)("inlineCode",{parentName:"li"},"Enable Google Workspace Domain-wide Delegation"),"."),(0,r.kt)("li",{parentName:"ol"},"On ",(0,r.kt)("inlineCode",{parentName:"li"},"Keys")," tab click ",(0,r.kt)("inlineCode",{parentName:"li"},"+ Add key"),", then click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create new key"),".")),(0,r.kt)("p",null,"Your new public/private key pair should be now generated and downloaded to your machine as ",(0,r.kt)("inlineCode",{parentName:"p"},"<project_id>.json")," you can find it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Downloads")," folder or somewhere else if you use another default destination for downloaded files. This file serves as the only copy of the private key. You are responsible for storing it securely. If you lose this key pair, you will need to generate a new one!"),(0,r.kt)("h3",{id:"note"},"Note"),(0,r.kt)("p",null,"You can return to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials"},"API Console/Credentials")," at any time to view the email address, public key fingerprints, and other information, or to generate additional public/private key pairs. For more details about service account credentials in the API Console, see ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/understanding-service-accounts"},"Service accounts")," in the API Console help file."),(0,r.kt)("h3",{id:"create-a-service-account-with-delegated-domain-wide-authority"},"Create a Service Account with delegated domain-wide authority"),(0,r.kt)("p",null,"Follow the Google Documentation for performing ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority"},"Delegating domain-wide authority")," to create a Service account with delegated domain-wide authority. This account must be created by an administrator of your Google Workspace. Please make sure to grant the following ",(0,r.kt)("inlineCode",{parentName:"p"},"OAuth scopes")," to the service user:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://www.googleapis.com/auth/webmasters.readonly"))),(0,r.kt)("p",null,"At the end of this process, you should have JSON credentials to this Google Service Account."),(0,r.kt)("h2",{id:"step-2-set-up-the-google-search-console-connector-in-airbyte"},"Step 2: Set up the google search console connector in Airbyte"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"li"},"+new source"),"."),(0,r.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the google search console connector and select ",(0,r.kt)("strong",{parentName:"li"},"google search console")," from the Source type dropdown."),(0,r.kt)("li",{parentName:"ol"},"Click Authenticate your account to sign in with Google and authorize your account."),(0,r.kt)("li",{parentName:"ol"},"Fill in the ",(0,r.kt)("inlineCode",{parentName:"li"},"site_urls")," field."),(0,r.kt)("li",{parentName:"ol"},"Fill in the ",(0,r.kt)("inlineCode",{parentName:"li"},"start date")," field."),(0,r.kt)("li",{parentName:"ol"},"Fill in the ",(0,r.kt)("inlineCode",{parentName:"li"},"custom reports")," (optionally) in format ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "<report-name>", "dimensions": ["<dimension-name>", ...]}')),(0,r.kt)("li",{parentName:"ol"},"You should be ready to sync data.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fill in the ",(0,r.kt)("inlineCode",{parentName:"li"},"service_account_info")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"email")," fields for authentication."),(0,r.kt)("li",{parentName:"ol"},"Fill in the ",(0,r.kt)("inlineCode",{parentName:"li"},"site_urls")," field."),(0,r.kt)("li",{parentName:"ol"},"Fill in the ",(0,r.kt)("inlineCode",{parentName:"li"},"start date")," field."),(0,r.kt)("li",{parentName:"ol"},"Fill in the ",(0,r.kt)("inlineCode",{parentName:"li"},"custom reports")," (optionally) in format ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "<report-name>", "dimensions": ["<dimension-name>", ...]}')),(0,r.kt)("li",{parentName:"ol"},"You should be ready to sync data.")),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("p",null,"The google search console source connector supports the following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"except Sites and Sitemaps")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/sites/get"},"Sites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/sitemaps/list"},"Sitemaps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query"},"Full Analytics report")," ","(","this stream has a long sync time because it is very detailed, use with care",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query"},"Analytics report by country")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query"},"Analytics report by date")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query"},"Analytics report by device")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query"},"Analytics report by page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query"},"Analytics report by query")),(0,r.kt)("li",{parentName:"ul"},"Analytics report by custom dimensions")),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"This connector attempts to back off gracefully when it hits Reports API's rate limits. To find more information about limits, see ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/limits"},"Usage Limits")," documentation."),(0,r.kt)("h2",{id:"data-type-map"},"Data type map"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.20")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-02-02"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22334"},"22334")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Turn on default HttpAvailabilityStrategy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.19")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-01-27"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22007"},"22007")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,r.kt)("inlineCode",{parentName:"td"},"AvailabilityStrategy")," for streams explicitly to ",(0,r.kt)("inlineCode",{parentName:"td"},"None"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.18")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-27"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18568"},"18568")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Improved config validation: custom_reports.dimension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.17")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-08"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17751"},"17751")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Improved config validation: start_date, end_date, site_urls")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.16")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17304"},"17304")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.15")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-16"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16819"},"16819")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check available site urls to avoid 403 error on sync")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.14")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-08"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16433"},"16433")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add custom analytics stream.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.13")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-07-21"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14924"},"14924")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Remove ",(0,r.kt)("inlineCode",{parentName:"td"},"additionalProperties")," field from specs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.12")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12482"},"12482")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update input configuration copy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.11")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-01-05"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9186"},"9186")," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9194"},"9194")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix incremental sync: keep all urls in state object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.10")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9073"},"9073")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add slicing by date range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.9")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9047"},"9047")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add 'order' to spec.json props")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.8")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8248"},"8248")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable Sentry for performance and errors tracking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.7")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-26"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7431"},"7431")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add default ",(0,r.kt)("inlineCode",{parentName:"td"},"end_date")," param value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.6")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-27"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6460"},"6460")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update OAuth Spec File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.4")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-23"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6394"},"6394")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update Doc link Spec File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-23"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6405"},"6405")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Correct Spec File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-17"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6222"},"6222")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Correct Spec File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-22"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6315"},"6315")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Verify access to all sites when performing connection check")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-03"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5350"},"5350")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);