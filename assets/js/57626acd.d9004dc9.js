"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[39970],{788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},o="Step 3: Connecting to the API",s={unversionedId:"connector-development/config-based/tutorial/connecting-to-the-API-source",id:"connector-development/config-based/tutorial/connecting-to-the-API-source",title:"Step 3: Connecting to the API",description:"We're now ready to start implementing the connector.",source:"@site/../docs/connector-development/config-based/tutorial/3-connecting-to-the-API-source.md",sourceDirName:"connector-development/config-based/tutorial",slug:"/connector-development/config-based/tutorial/connecting-to-the-API-source",permalink:"/connector-development/config-based/tutorial/connecting-to-the-API-source",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/tutorial/3-connecting-to-the-API-source.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"mySidebar",previous:{title:"Step 2: Install dependencies",permalink:"/connector-development/config-based/tutorial/install-dependencies"},next:{title:"Step 4: Reading data",permalink:"/connector-development/config-based/tutorial/reading-data"}},c={},l=[{value:"Updating the connector spec and config",id:"updating-the-connector-spec-and-config",level:2},{value:"Updating the connector definition",id:"updating-the-connector-definition",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"More readings",id:"more-readings",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"step-3-connecting-to-the-api"},"Step 3: Connecting to the API"),(0,r.kt)("p",null,"We're now ready to start implementing the connector."),(0,r.kt)("p",null,"Over the course of this tutorial, we'll be editing a few files that were generated by the code generator:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source-exchange-rates-tutorial/source_exchange_rates_tutorial/manifest.yaml"),": This is the connector manifest. It describes how the data should be read from the API source, as well as what inputs can be used to configure the connector."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source-exchange_rates-tutorial/integration_tests/configured_catalog.json"),": This is the connector's ",(0,r.kt)("a",{parentName:"li",href:"/understanding-airbyte/beginners-guide-to-catalog"},"catalog"),". It describes what data is available in a source"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source-exchange-rates-tutorial/integration_tests/sample_state.json"),": This is a sample state object to be used to test ",(0,r.kt)("a",{parentName:"li",href:"/connector-development/cdk-python/incremental-stream"},"incremental syncs"),".")),(0,r.kt)("p",null,"We'll also be creating the following files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source-exchange-rates-tutorial/secrets/config.json"),": This is the configuration file we'll be using to test the connector. Its schema should match the schema defined in the spec file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source-exchange-rates-tutorial/secrets/invalid_config.json"),": This is an invalid configuration file we'll be using to test the connector. Its schema should match the schema defined in the spec file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source_exchange_rates_tutorial/schemas/rates.json"),": This is the ",(0,r.kt)("a",{parentName:"li",href:"/connector-development/cdk-python/schemas"},"schema definition")," for the stream we'll implement.")),(0,r.kt)("h2",{id:"updating-the-connector-spec-and-config"},"Updating the connector spec and config"),(0,r.kt)("p",null,"Let's populate the specification (",(0,r.kt)("inlineCode",{parentName:"p"},"spec"),") and the configuration (",(0,r.kt)("inlineCode",{parentName:"p"},"secrets/config.json"),") so the connector can access the access key and base currency."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We'll add these properties to the ",(0,r.kt)("inlineCode",{parentName:"li"},"spec")," block in the ",(0,r.kt)("inlineCode",{parentName:"li"},"source-exchange-rates-tutorial/source_exchange_rates_tutorial/manifest.yaml"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec: \n  documentation_url: https://docs.airbyte.com/integrations/sources/exchangeratesapi\n  connection_specification:\n    $schema: http://json-schema.org/draft-07/schema#\n    title: exchangeratesapi.io Source Spec\n    type: object\n    required:\n      - access_key\n      - base\n    additionalProperties: true\n    properties:\n      access_key:\n        type: string\n        description: >-\n          Your API Access Key. See <a\n          href="https://exchangeratesapi.io/documentation/">here</a>. The key is\n          case sensitive.\n        airbyte_secret: true\n      base:\n        type: string\n        description: >-\n          ISO reference currency. See <a\n          href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html">here</a>.\n        examples:\n          - EUR\n          - USD\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"We also need to fill in the connection config in the ",(0,r.kt)("inlineCode",{parentName:"li"},"secrets/config.json"),"\nBecause of the sensitive nature of the access key, we recommend storing this config in the ",(0,r.kt)("inlineCode",{parentName:"li"},"secrets")," directory because it is ignored by git.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'{"access_key": "<your_access_key>", "base": "USD"}\'  > secrets/config.json\n')),(0,r.kt)("h2",{id:"updating-the-connector-definition"},"Updating the connector definition"),(0,r.kt)("p",null,"Next, we'll update the connector definition (",(0,r.kt)("inlineCode",{parentName:"p"},"source-exchange-rates-tutorial/source_exchange_rates_tutorial/manifest.yaml"),"). It was generated by the code generation script.\nMore details on the connector definition file can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/low-code-cdk-overview"},"overview")," and ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/understanding-the-yaml-file/yaml-overview"},"connection definition")," sections."),(0,r.kt)("p",null,"Let's fill this out these TODOs with the information found in the ",(0,r.kt)("a",{parentName:"p",href:"https://apilayer.com/marketplace/exchangerates_data-api"},"Exchange Rates API docs"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We'll first set the API's base url. According to the API documentation, the base url is ",(0,r.kt)("inlineCode",{parentName:"li"},'"https://api.apilayer.com"'),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  <...>\n  requester:\n    url_base: "https://api.apilayer.com"\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Then, let's rename the stream from ",(0,r.kt)("inlineCode",{parentName:"li"},"customers")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"rates"),", update the primary key to ",(0,r.kt)("inlineCode",{parentName:"li"},"date"),", and set the path to \"/exchangerates_data/latest\" as per the API's documentation. This path is specific to the stream, so we'll set it within the ",(0,r.kt)("inlineCode",{parentName:"li"},"rates_stream")," definition")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'  rates_stream:\n    $ref: "#/definitions/base_stream"\n    $parameters:\n      name: "rates"\n      primary_key: "date"\n      path: "/exchangerates_data/latest"\n')),(0,r.kt)("p",null,"We'll also update the reference in the ",(0,r.kt)("inlineCode",{parentName:"p"},"streams")," block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'streams:\n  - "#/definitions/rates_stream"\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Update the references in the ",(0,r.kt)("inlineCode",{parentName:"li"},"check")," block")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'check:\n  stream_names:\n    - "rates"\n')),(0,r.kt)("p",null,"Adding the reference in the ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," tells the ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," operation to use that stream to test the connection."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},'Next, we\'ll set up the authentication.\nThe Exchange Rates API requires an access key to be passed as header named "apikey".\nThis can be done using an ',(0,r.kt)("inlineCode",{parentName:"li"},"ApiKeyAuthenticator"),", which we'll configure to point to the config's ",(0,r.kt)("inlineCode",{parentName:"li"},"access_key")," field.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  <...>\n  requester:\n    url_base: "https://api.apilayer.com"\n    http_method: "GET"\n    authenticator:\n      type: ApiKeyAuthenticator\n      header: "apikey"\n      api_token: "{{ config[\'access_key\'] }}"\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"According to the ExchangeRatesApi documentation, we can specify the base currency of interest in a request parameter. Let's assume the user will configure this via the connector configuration in parameter called ",(0,r.kt)("inlineCode",{parentName:"li"},"base"),"; we'll pass the value input by the user as a request parameter:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"definitions:\n  <...>\n  requester:\n    <...>\n    request_options_provider:\n      request_parameters:\n        base: \"{{ config['base'] }}\"\n")),(0,r.kt)("p",null,"The full connector definition should now look like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "0.1.0"\n\ndefinitions:\n  selector:\n    extractor:\n      field_path: [ ]\n  requester:\n    url_base: "https://api.apilayer.com"\n    http_method: "GET"\n    authenticator:\n      type: ApiKeyAuthenticator\n      header: "apikey"\n      api_token: "{{ config[\'access_key\'] }}"\n    request_options_provider:\n      request_parameters:\n        base: "{{ config[\'base\'] }}"\n  retriever:\n    record_selector:\n      $ref: "#/definitions/selector"\n    paginator:\n      type: NoPagination\n    requester:\n      $ref: "#/definitions/requester"\n  base_stream:\n    retriever:\n      $ref: "#/definitions/retriever"\n  rates_stream:\n    $ref: "#/definitions/base_stream"\n    $parameters:\n      name: "rates"\n      primary_key: "date"\n      path: "/exchangerates_data/latest"\n\nstreams:\n  - "#/definitions/rates_stream"\ncheck:\n  stream_names:\n    - "rates"\nspec: \n  documentation_url: https://docs.airbyte.com/integrations/sources/exchangeratesapi\n  connection_specification:\n    $schema: http://json-schema.org/draft-07/schema#\n    title: exchangeratesapi.io Source Spec\n    type: object\n    required:\n      - access_key\n      - base\n    additionalProperties: true\n    properties:\n      access_key:\n        type: string\n        description: >-\n          Your API Access Key. See <a\n          href="https://exchangeratesapi.io/documentation/">here</a>. The key is\n          case sensitive.\n        airbyte_secret: true\n      base:\n        type: string\n        description: >-\n          ISO reference currency. See <a\n          href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html">here</a>.\n        examples:\n          - EUR\n          - USD\n')),(0,r.kt)("p",null,"We can now run the ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," operation, which verifies the connector can connect to the API source."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py check --config secrets/config.json\n")),(0,r.kt)("p",null,"which should now succeed with logs similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"type": "LOG", "log": {"level": "INFO", "message": "Check succeeded"}}\n{"type": "CONNECTION_STATUS", "connectionStatus": {"status": "SUCCEEDED"}}\n')),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Next, we'll ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/tutorial/reading-data"},"extract the records from the response")),(0,r.kt)("h2",{id:"more-readings"},"More readings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/low-code-cdk-overview"},"Config-based connectors overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/understanding-the-yaml-file/authentication"},"Authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/understanding-the-yaml-file/request-options"},"Request options providers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/cdk-python/schemas"},"Schema definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/connector-specification-reference"},"Connector specification reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/understanding-airbyte/beginners-guide-to-catalog"},"Beginner's guide to catalog"))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);