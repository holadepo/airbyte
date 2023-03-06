"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[50828],{20685:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={},l="Mailchimp",p={unversionedId:"integrations/sources/mailchimp",id:"integrations/sources/mailchimp",title:"Mailchimp",description:"This page guides you through setting up the Mailchimp source connector.",source:"@site/../docs/integrations/sources/mailchimp.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/mailchimp",permalink:"/integrations/sources/mailchimp",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/mailchimp.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Magento",permalink:"/integrations/sources/magento"},next:{title:"MailerLite",permalink:"/integrations/sources/mailerlite"}},o={},m=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Set up the Mailchimp source connector",id:"set-up-the-mailchimp-source-connector",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Supported streams",id:"supported-streams",level:2},{value:"A note on the primary keys",id:"a-note-on-the-primary-keys",level:3},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Tutorials",id:"tutorials",level:2},{value:"Changelog",id:"changelog",level:2}],s={toc:m},u="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mailchimp"},"Mailchimp"),(0,r.kt)("p",null,"This page guides you through setting up the Mailchimp source connector."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://mailchimp.com/developer/marketing/guides/access-user-data-oauth-2/"},"OAuth")," or an API key to authenticate your Mailchimp account. If you choose to authenticate with OAuth, ",(0,r.kt)("a",{parentName:"p",href:"https://mailchimp.com/developer/marketing/guides/access-user-data-oauth-2/#register-your-application"},"register")," your Mailchimp account."),(0,r.kt)("h2",{id:"set-up-the-mailchimp-source-connector"},"Set up the Mailchimp source connector"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into your ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.airbyte.com/workspaces"},"Airbyte Cloud")," or Airbyte Open Source account.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Sources")," and then click ",(0,r.kt)("strong",{parentName:"p"},"+ New source"),". ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Set up the source page, select ",(0,r.kt)("strong",{parentName:"p"},"Mailchimp")," from the Source type dropdown.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a name for your source.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can use OAuth or an API key to authenticate your Mailchimp account. We recommend using OAuth for Airbyte Cloud and an API key for Airbyte Open Source."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To authenticate using OAuth for Airbyte Cloud, ensure you have ",(0,r.kt)("a",{parentName:"li",href:"#prerequisite"},"registered your Mailchimp account")," and then click ",(0,r.kt)("strong",{parentName:"li"},"Authenticate your Mailchimp account")," to sign in with Mailchimp and authorize your account. "),(0,r.kt)("li",{parentName:"ul"},"To authenticate using an API key for Airbyte Open Source, select ",(0,r.kt)("strong",{parentName:"li"},"API key")," from the Authentication dropdown and enter the ",(0,r.kt)("a",{parentName:"li",href:"https://mailchimp.com/developer/marketing/guides/quick-start/#generate-your-api-key"},"API key")," for your Mailchimp account.    ",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Check the ",(0,r.kt)("a",{parentName:"p",href:"#performance-considerations"},"performance considerations")," before using an API key."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Set up source"),"."))),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("p",null,"The Mailchimp source connector supports the following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts/#connection-sync-mode"},"sync modes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Full Refresh"),(0,r.kt)("li",{parentName:"ul"},"Incremental")),(0,r.kt)("p",null,"Airbyte doesn't support Incremental Deletes for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Campaigns"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Lists"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Email Activity")," streams because Mailchimp doesn't provide any information about deleted data in these streams."),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mailchimp.com/developer/guides/marketing-api-conventions/#throttling"},"Mailchimp does not impose rate limits")," on how much data is read from its API in a single sync process. However, Mailchimp enforces a maximum of 10 simultaneous connections to its API, which means that Airbyte is unable to run more than 10 concurrent syncs from Mailchimp using API keys generated from the same account."),(0,r.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,r.kt)("p",null,"The Mailchimp source connector supports the following streams:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://mailchimp.com/developer/api/marketing/lists/get-list-info"},"Lists")," Stream")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "id": "q1w2e3r4t5",\n  "web_id": 000001,\n  "name": "Newsletter Subscribers",\n  "contact": {\n    "company": "",\n    "address1": "",\n    "address2": "",\n    "city": "San Francisco",\n    "state": "CA",\n    "zip": "00000-1111",\n    "country": "US",\n    "phone": ""\n  },\n  "permission_reminder": "You are receiving this email because you opted in via our website.",\n  "use_archive_bar": true,\n  "campaign_defaults": {\n    "from_name": "Airbyte Community",\n    "from_email": "hey@email.com",\n    "subject": "",\n    "language": "en"\n  },\n  "notify_on_subscribe": "",\n  "notify_on_unsubscribe": "",\n  "date_created": "2020-09-17T04:48:49+00:00",\n  "list_rating": 3,\n  "email_type_option": false,\n  "subscribe_url_short": "http://eepurl.com/hfpWAr",\n  "subscribe_url_long": "https://daxtarity.us2.list-manage.com/subscribe?u=q1q1q1q1q1q1q1q1q1q&id=q1w2e3r4t5",\n  "beamer_address": "us2-00000000-qqqqqqqqq@inbound.mailchimp.com",\n  "visibility": "prv",\n  "double_optin": false,\n  "has_welcome": false,\n  "marketing_permissions": false,\n  "modules": [],\n  "stats": {\n    "member_count": 4204,\n    "unsubscribe_count": 194,\n    "cleaned_count": 154,\n    "member_count_since_send": 91,\n    "unsubscribe_count_since_send": 19,\n    "cleaned_count_since_send": 23,\n    "campaign_count": 27,\n    "campaign_last_sent": "2022-04-01T14:29:31+00:00",\n    "merge_field_count": 5,\n    "avg_sub_rate": 219,\n    "avg_unsub_rate": 10,\n    "target_sub_rate": 18,\n    "open_rate": 39.478173607626694,\n    "click_rate": 8.504017780817234,\n    "last_sub_date": "2022-04-12T07:39:29+00:00",\n    "last_unsub_date": "2022-04-11T08:08:07+00:00"\n  },\n  "_links": [\n    {\n      "rel": "self",\n      "href": "https://us2.api.mailchimp.com/3.0/lists/q1w2e3r4t5",\n      "method": "GET",\n      "targetSchema": "https://us2.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://mailchimp.com/developer/api/marketing/campaigns/get-campaign-info/"},"Campaigns")," Stream")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "id": "q1w2e3r4t5", \n    "web_id": 0000000, \n    "type": "regular", \n    "create_time": "2020-11-03T22:46:43+00:00", \n    "archive_url": "http://eepurl.com/hhSLxH", \n    "long_archive_url": "https://mailchi.mp/xxxxxxxx/weekly-bytes-learnings-from-soft-launch-and-our-vision-0000000", \n    "status": "sent", \n    "emails_sent": 89, \n    "send_time": "2020-11-05T16:15:00+00:00", \n    "content_type": "template", \n    "needs_block_refresh": false, \n    "resendable": true, \n    "recipients": {\n        "list_id": "1q2w3e4r", \n        "list_is_active": true, \n        "list_name": "Newsletter Subscribers", \n        "segment_text": "",     \n        "recipient_count": 89\n    }, \n    "settings": {\n        "subject_line": "Some subject", \n        "preview_text": "Text", \n        "title": "Newsletter", \n        "from_name": "Weekly Bytes from Airbyte", \n        "reply_to": "hey@email.com", \n        "use_conversation": false, \n        "to_name": "", \n        "folder_id": "", \n        "authenticate": true, \n        "auto_footer": false, \n        "inline_css": false, \n        "auto_tweet": false, \n        "fb_comments": true, \n        "timewarp": false, \n        "template_id": 0000000, \n        "drag_and_drop": false\n    }, \n    "tracking": {\n        "opens": true, \n        "html_clicks": true, \n        "text_clicks": false, \n        "goal_tracking": false, \n        "ecomm360": false, \n        "google_analytics": "", \n        "clicktale": ""\n    }, \n    "report_summary": {\n        "opens": 46, \n        "unique_opens": 33, \n        "open_rate": 0.0128372, \n        "clicks": 13, \n        "subscriber_clicks": 7, \n        "click_rate": 0.0383638, \n        "ecommerce": {\n            "total_orders": 0, \n            "total_spent": 0, \n            "total_revenue": 0\n        }\n    }, \n    "delivery_status": {\n        "enabled": false\n    }, \n    "_links": [\n        {\n            "rel": "parent", \n            "href": "https://us2.api.mailchimp.com/3.0/campaigns", \n            "method": "GET", \n            "targetSchema": "https://us2.api.mailchimp.com/schema/3.0/Definitions/Campaigns/CollectionResponse.json", \n            "schema": "https://us2.api.mailchimp.com/schema/3.0/Paths/Campaigns/Collection.json"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://mailchimp.com/developer/marketing/api/email-activity-reports/"},"Email Activity")," Stream")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "campaign_id": "q1w2q1w2q1w2",\n  "list_id": "123qwe",\n  "list_is_active": true,\n  "email_id": "qwerty123456",\n  "email_address": "email@email.com",\n  "_links": [\n    {\n      "rel": "parent",\n      "href": "https://us2.api.mailchimp.com/3.0/reports/q1w2q1w2q1w2/email-activity",\n      "method": "GET",\n      "targetSchema": "https://us2.api.mailchimp.com/schema/3.0/Definitions/Reports/EmailActivity/CollectionResponse.json"\n    }\n  ],\n  "action": "open",\n  "timestamp": "2020-10-08T22:15:43+00:00",\n  "ip": "00.000.00.5"\n}\n')),(0,r.kt)("h3",{id:"a-note-on-the-primary-keys"},"A note on the primary keys"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Lists")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Campaigns")," streams have ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," as the primary key. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Email Activity")," stream doesn't have a primary key because Mailchimp does not provide one. "),(0,r.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the type of elements in the array is determined based on the mappings in this table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"date"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"time"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"datetime")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"float"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"properties within objects are mapped based on the mappings in this table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"tutorials"},"Tutorials"),(0,r.kt)("p",null,"Now that you have set up the Mailchimp source connector, check out the following Mailchimp tutorial:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://airbyte.com/tutorials/data-ingestion-pipeline-mailchimp-snowflake"},"Build a data ingestion pipeline from Mailchimp to Snowflake"))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Date"),(0,r.kt)("th",{parentName:"tr",align:null},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.3.4"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-02-06"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22405"},"22405")),(0,r.kt)("td",{parentName:"tr",align:null},"Revert extra logging")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.3.3"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-02-01"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22228"},"22228")),(0,r.kt)("td",{parentName:"tr",align:null},"Add extra logging")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.3.2"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-01-27"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22014"},"22014")),(0,r.kt)("td",{parentName:"tr",align:null},"Set ",(0,r.kt)("inlineCode",{parentName:"td"},"AvailabilityStrategy")," for streams explicitly to ",(0,r.kt)("inlineCode",{parentName:"td"},"None"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.3.1"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-12-20"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20720"},"20720")),(0,r.kt)("td",{parentName:"tr",align:null},"Use stream slices as a source for request params instead of a stream state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.3.0"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-11-07"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19023"},"19023")),(0,r.kt)("td",{parentName:"tr",align:null},"Set primary key for Email Activity stream.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.15"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-09-28"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17326"},"17326")),(0,r.kt)("td",{parentName:"tr",align:null},"Migrate to per-stream states.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.14"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-04-12"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11352"},"11352")),(0,r.kt)("td",{parentName:"tr",align:null},"Update documentation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.13"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-04-11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11632"},"11632")),(0,r.kt)("td",{parentName:"tr",align:null},"Add unit tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.12"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-03-17"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10975"},"10975")),(0,r.kt)("td",{parentName:"tr",align:null},"Fix campaign's stream normalization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.11"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-24"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7159"},"7159")),(0,r.kt)("td",{parentName:"tr",align:null},"Add oauth2.0 support")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.10"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-21"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9000"},"9000")),(0,r.kt)("td",{parentName:"tr",align:null},"Update connector fields title/description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.9"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-13"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7975"},"7975")),(0,r.kt)("td",{parentName:"tr",align:null},"Updated JSON schemas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.8"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-08-17"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5481"},"5481")),(0,r.kt)("td",{parentName:"tr",align:null},"Remove date-time type from some fields")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.7"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-08-03"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5137"},"5137")),(0,r.kt)("td",{parentName:"tr",align:null},"Source Mailchimp: fix primary key for email activities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.6"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-07-28"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5024"},"5024")),(0,r.kt)("td",{parentName:"tr",align:null},'Source Mailchimp: handle records with no no "activity" field in response')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.5"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-07-08"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4621"},"4621")),(0,r.kt)("td",{parentName:"tr",align:null},"Mailchimp fix url-base")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.4"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-06-09"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4285"},"4285")),(0,r.kt)("td",{parentName:"tr",align:null},"Use datacenter URL parameter from apikey")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.3"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-06-08"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"3973")),(0,r.kt)("td",{parentName:"tr",align:null},"Add AIRBYTE","_","ENTRYPOINT for Kubernetes support")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.2"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-06-08"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3415"},"3415")),(0,r.kt)("td",{parentName:"tr",align:null},"Get Members activities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.1"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-04-03"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2726"},"2726")),(0,r.kt)("td",{parentName:"tr",align:null},"Fix base connector versioning")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-03-09"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2238"},"2238")),(0,r.kt)("td",{parentName:"tr",align:null},"Protocol allows future/unknown properties")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.1.4"),(0,r.kt)("td",{parentName:"tr",align:null},"2020-11-30"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1046"},"1046")),(0,r.kt)("td",{parentName:"tr",align:null},"Add connectors using an index YAML file")))))}c.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=m(a),d=r,h=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,l(l({ref:e},s),{},{components:a})):n.createElement(h,l({ref:e},s))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:r,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);