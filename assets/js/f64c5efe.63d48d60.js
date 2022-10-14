"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[886],{3905:(e,t,a)=>{a.d(t,{Zo:()=>y,kt:()=>u});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},y=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,y=n(e,["components","mdxType","originalType","parentName"]),m=d(a),u=o,c=m["".concat(p,".").concat(u)]||m[u]||l[u]||i;return a?r.createElement(c,s(s({ref:t},y),{},{components:a})):r.createElement(c,s({ref:t},y))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=m;var n={};for(var p in t)hasOwnProperty.call(t,p)&&(n[p]=t[p]);n.originalType=e,n.mdxType="string"==typeof e?e:o,s[1]=n;for(var d=2;d<i;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4111:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var r=a(7462),o=(a(7294),a(3905));const i={sidebar_position:4},s="Typescript",n={unversionedId:"api/typescript",id:"api/typescript",title:"Typescript",description:"Even though zodios is written in typescript, you can use it with javascript. However, if you are using typescript, you can benefit from the typescript type helpers.",source:"@site/docs/api/typescript.md",sourceDirName:"api",slug:"/api/typescript",permalink:"/docs/api/typescript",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"OpenAPI",permalink:"/docs/api/openapi"},next:{title:"Examples",permalink:"/docs/api/examples"}},p={},d=[{value:"<code>ApiOf</code>",id:"apiof",level:2},{value:"<code>ZodiosBodyByPath</code>",id:"zodiosbodybypath",level:2},{value:"<code>ZodiosBodyByAlias</code>",id:"zodiosbodybyalias",level:2},{value:"<code>ZodiosHeaderParamsByPath</code>",id:"zodiosheaderparamsbypath",level:2},{value:"<code>ZodiosHeaderParamsByAlias</code>",id:"zodiosheaderparamsbyalias",level:2},{value:"<code>ZodiosPathParamsByPath</code>",id:"zodiospathparamsbypath",level:2},{value:"<code>ZodiosPathParamByAlias</code>",id:"zodiospathparambyalias",level:2},{value:"<code>ZodiosResponseByPath</code>",id:"zodiosresponsebypath",level:2},{value:"<code>ZodiosResponseByAlias</code>",id:"zodiosresponsebyalias",level:2},{value:"<code>ZodiosQueryParamsByPath</code>",id:"zodiosqueryparamsbypath",level:2},{value:"<code>ZodiosQueryParamsByAlias</code>",id:"zodiosqueryparamsbyalias",level:2},{value:"<code>ZodiosErrorByPath</code>",id:"zodioserrorbypath",level:2},{value:"<code>ZodiosErrorByAlias</code>",id:"zodioserrorbyalias",level:2},{value:"Example",id:"example",level:2}],y={toc:d};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"typescript"},"Typescript"),(0,o.kt)("p",null,"Even though zodios is written in typescript, you can use it with javascript. However, if you are using typescript, you can benefit from the typescript type helpers."),(0,o.kt)("h2",{id:"apiof"},(0,o.kt)("inlineCode",{parentName:"h2"},"ApiOf")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ApiOf")," is a type helper that extracts the api definition type from your zodios client instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ApiOf, Zodios } from '@zodios/core';;\nimport { myApiDefinition } from './api-definition';\n\nconst client = new Zodios(myApiDefinition);\n\ntype MyApi = ApiOf<typeof client>;\n")),(0,o.kt)("h2",{id:"zodiosbodybypath"},(0,o.kt)("inlineCode",{parentName:"h2"},"ZodiosBodyByPath")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZodiosBodyByPath")," is a type helper that extracts the body type of a request from your api definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosBodyByPath } from '@zodios/core';\nimport { MyApi } from './my-api';\n\ntype User = ZodiosBodyByPath<MyApi,'post','/users'>;\n")),(0,o.kt)("h2",{id:"zodiosbodybyalias"},(0,o.kt)("inlineCode",{parentName:"h2"},"ZodiosBodyByAlias")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZodiosBodyByAlias")," is a type helper that extracts the body type of a request from your api definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosBodyByAlias } from '@zodios/core';\nimport { MyApi } from './my-api';\n\ntype User = ZodiosBodyByAlias<MyApi,'createUsers'>;\n")),(0,o.kt)("h2",{id:"zodiosheaderparamsbypath"},(0,o.kt)("inlineCode",{parentName:"h2"},"ZodiosHeaderParamsByPath")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZodiosHeaderParamsByPath")," is a type helper that extracts the header params type of a request from your api definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosHeaderParamsByPath } from '@zodios/core';\nimport { MyApi } from './my-api';\n\ntype CreateUsersHeaderParams = ZodiosHeaderParamsByPath<MyApi,'post','/users'>;\n")),(0,o.kt)("h2",{id:"zodiosheaderparamsbyalias"},(0,o.kt)("inlineCode",{parentName:"h2"},"ZodiosHeaderParamsByAlias")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZodiosHeaderParamsByAlias")," is a type helper that extracts the header params type of a request from your api definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosHeaderParamsByAlias } from '@zodios/core';\nimport { MyApi } from './my-api';\n\ntype CreateUsersHeaderParams = ZodiosHeaderParamsByAlias<MyApi,'createUsers'>;\n")),(0,o.kt)("h2",{id:"zodiospathparamsbypath"},(0,o.kt)("inlineCode",{parentName:"h2"},"ZodiosPathParamsByPath")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZodiosPathParamsPath")," is a type helper that extracts the path params type of a request from your api definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosPathParamsByPath } from '@zodios/core';\nimport { MyApi } from './my-api';\n\ntype GetUserPathParams = ZodiosPathParamsByPath<MyApi,'get','/users/:id'>;\n")),(0,o.kt)("h2",{id:"zodiospathparambyalias"},(0,o.kt)("inlineCode",{parentName:"h2"},"ZodiosPathParamByAlias")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZodiosPathParamByAlias")," is a type helper that extracts the path params type of a request from your api definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosPathParamByAlias } from '@zodios/core';\nimport { MyApi } from './my-api';\n\ntype GetUserPathParams = ZodiosPathParamByAlias<MyApi,'getUser'>;\n")),(0,o.kt)("h2",{id:"zodiosresponsebypath"},(0,o.kt)("inlineCode",{parentName:"h2"},"ZodiosResponseByPath")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZodiosResponseByPath")," is a type helper that extracts the response type of a request from your api definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosResponseByPath } from '@zodios/core';\nimport { MyApi } from './my-api';\n\ntype Users = ZodiosResponseByPath<MyApi,'get','/users'>;\n")),(0,o.kt)("h2",{id:"zodiosresponsebyalias"},(0,o.kt)("inlineCode",{parentName:"h2"},"ZodiosResponseByAlias")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZodiosResponseByAlias")," is a type helper that extracts the response type of a request from your api definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosResponseByAlias } from '@zodios/core';\nimport { MyApi } from './my-api';\n\ntype Users = ZodiosResponseByAlias<MyApi,'getUsers'>;\n")),(0,o.kt)("h2",{id:"zodiosqueryparamsbypath"},(0,o.kt)("inlineCode",{parentName:"h2"},"ZodiosQueryParamsByPath")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZodiosQueryParamsByPath")," is a type helper that extracts the query params type of a request from your api definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosQueryParamsByPath } from '@zodios/core';\nimport { MyApi } from './my-api';\n\ntype GetUsersQueryParams = ZodiosQueryParamsByPath<MyApi,'get','/users'>;\n")),(0,o.kt)("h2",{id:"zodiosqueryparamsbyalias"},(0,o.kt)("inlineCode",{parentName:"h2"},"ZodiosQueryParamsByAlias")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZodiosQueryParamsByAlias")," is a type helper that extracts the query params type of a request from your api definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosQueryParamsByAlias } from '@zodios/core';\nimport { MyApi } from './my-api';\n\ntype GetUsersQueryParams = ZodiosQueryParamsByAlias<MyApi,'getUsers'>;\n")),(0,o.kt)("h2",{id:"zodioserrorbypath"},(0,o.kt)("inlineCode",{parentName:"h2"},"ZodiosErrorByPath")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZodiosErrorByPath")," is a type helper that extracts the error type of a request from your api definition given a status code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosErrorByPath } from '@zodios/core';\nimport { MyApi } from './my-api';\n\ntype NotFoundUsersError = ZodiosErrorByPath<MyApi,'get','/users',404>;\n")),(0,o.kt)("h2",{id:"zodioserrorbyalias"},(0,o.kt)("inlineCode",{parentName:"h2"},"ZodiosErrorByAlias")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZodiosErrorByAlias")," is a type helper that extracts the error type of a request from your api definition given a status code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ZodiosErrorByAlias } from '@zodios/core';\nimport { MyApi } from './my-api';\n\ntype NotFoundUsersError = ZodiosErrorByAlias<MyApi,'getUsers',404>;\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  makeCrudApi,\n  ZodiosBodyByPath,\n  ZodiosResponseByPath,\n  ZodiosPathParamsByPath,\n  ZodiosQueryParamsByPath,\n} from "@zodios/code";\nimport z from "zod";\n\nconst user = z.object({\n  id: z.number(),\n  name: z.string(),\n  email: z.string().email(),\n  phone: z.string(),\n});\n\nconst api = makeCrudApi("user", user);\n\ntype User = z.infer<typeof user>;\ntype Api = typeof api;\n\ntype Users = ZodiosResponseByPath<Api, "get", "/users">;\n//    ^? type Users = { id: number; name: string; email: string; phone: string; }[]\ntype UserById = ZodiosResponseByPath<Api, "get", "/users/:id">;\n//    ^? type UserById = { id: number; name: string; email: string; phone: string; }\ntype GetUserParams = ZodiosPathParamsByPath<Api,\'get\',"/users/:id">;\n//    ^? type GetUserParams = { id: number; }\ntype GetUserQueries = ZodiosQueryParamsByPath<Api, "get", "/users/:id">;\n//    ^? type GetUserQueries = never\ntype CreateUserBody = ZodiosBodyByPath<Api, "post", "/users">;\n//    ^? type CreateUserBody = { name: string; email: string; phone: string; }\ntype CreateUserResponse = ZodiosResponseByPath<Api, "post", "/users">;\n//    ^? type CreateUserResponse = { id: number; name: string; email: string; phone: string; }\ntype UpdateUserBody = ZodiosBodyByPath<Api, "put", "/users/:id">;\n//    ^? type UpdateUserBody = { name: string; email: string; phone: string; }\ntype PatchUserBody = ZodiosBodyByPath<Api, "patch", "/users/:id">;\n//    ^? type PatchUserBody = { name?: string | undefined; email?: string | undefined; phone?: string | undefined; }\n')))}l.isMDXComponent=!0}}]);