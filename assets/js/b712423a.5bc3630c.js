"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_position:3},r="React hooks",i={unversionedId:"client/react",id:"client/react",title:"React hooks",description:"Zodios comes with a Query and Mutation hook helper.",source:"@site/docs/client/react.md",sourceDirName:"client",slug:"/client/react",permalink:"/docs/client/react",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Client API plugins",permalink:"/docs/client/plugins"},next:{title:"Solid hooks",permalink:"/docs/client/solid"}},l={},u=[{value:"Zodios Hooks instance",id:"zodios-hooks-instance",level:2},{value:"Zodios hooks methods",id:"zodios-hooks-methods",level:2},{value:"<code>hooks.use[Alias]</code>",id:"hooksusealias",level:3},{value:"query alias:",id:"query-alias",level:4},{value:"immutable query alias:",id:"immutable-query-alias",level:4},{value:"mutation alias",id:"mutation-alias",level:4},{value:"<code>zodios.useQuery</code>",id:"zodiosusequery",level:3},{value:"<code>zodios.useImmutableQuery</code>",id:"zodiosuseimmutablequery",level:3},{value:"<code>zodios.useInfiniteQuery</code>",id:"zodiosuseinfinitequery",level:3},{value:"<code>zodios.useImmutableInfiniteQuery</code>",id:"zodiosuseimmutableinfinitequery",level:3},{value:"<code>zodios.useMutation</code>",id:"zodiosusemutation",level:3},{value:"<code>zodios.useGet</code>",id:"zodiosuseget",level:3},{value:"<code>zodios.usePost</code>",id:"zodiosusepost",level:3},{value:"<code>zodios.usePut</code>",id:"zodiosuseput",level:3},{value:"<code>zodios.usePatch</code>",id:"zodiosusepatch",level:3},{value:"<code>zodios.useDelete</code>",id:"zodiosusedelete",level:3},{value:"Zodios key helpers",id:"zodios-key-helpers",level:2},{value:"<code>zodios.getKeyByPath</code>",id:"zodiosgetkeybypath",level:3},{value:"<code>zodios.getKeyByAlias</code>",id:"zodiosgetkeybyalias",level:3},{value:"Example",id:"example",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-hooks"},"React hooks"),(0,o.kt)("p",null,"Zodios comes with a Query and Mutation hook helper.",(0,o.kt)("br",{parentName:"p"}),"\n","It's a thin wrapper around React-Query but with zodios auto completion and automatic key management.\nNo need to remember your keys anymore."),(0,o.kt)("p",null,"Zodios query hook also returns an invalidation helper to allow you to reset react query cache easily."),(0,o.kt)("h2",{id:"zodios-hooks-instance"},"Zodios Hooks instance"),(0,o.kt)("p",null,"When creating an instance or zodios hooks, you need to provide a name that will be used as ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query")," key prefix and your instance of Zodios Api Client.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"new ZodiosHook(name: string, client: Zodios)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const apiClient = new Zodios(baseUrl, [...]);\nconst apiHooks = new ZodiosHooks("myAPI", apiClient);\n')),(0,o.kt)("h2",{id:"zodios-hooks-methods"},"Zodios hooks methods"),(0,o.kt)("h3",{id:"hooksusealias"},(0,o.kt)("inlineCode",{parentName:"h3"},"hooks.use[Alias]")),(0,o.kt)("p",null,"You will usually want to use aliases to call your endpoints. You can define them in the ",(0,o.kt)("inlineCode",{parentName:"p"},"alias")," option in your API definition endpoint."),(0,o.kt)("h4",{id:"query-alias"},"query alias:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function use[Alias](config?: ZodiosRequestOptions, queryOptions: QueryOptions): QueryResult<Response>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// identical to hooks.useQuery("/users")\nconst { data: users, isLoading, isError } =  hooks.useGetUsers();\n')),(0,o.kt)("h4",{id:"immutable-query-alias"},"immutable query alias:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function use[Alias](body: Body, config?: ZodiosRequestOptions, queryOptions: QueryOptions): QueryResult<Response>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// identical to hooks.useImmutableQuery("/users/search")\nconst { data: users, isLoading, isError } =  hooks.useSearchUsers({ name: "John" });\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Immutable query aliases are only available for ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," endpoints.\nyou also need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"immutable")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in your API definition endpoint if you want alias to use ",(0,o.kt)("inlineCode",{parentName:"p"},"useImmutableQuery")," hook.")),(0,o.kt)("h4",{id:"mutation-alias"},"mutation alias"),(0,o.kt)("p",null,"Alias for ",(0,o.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"put"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"patch"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," endpoints:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function use[Alias](config?: ZodiosRequestOptions, queryOptions?: QueryOptions): MutationResult<Response>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// identical to usePost("/users") or useMutation("post","/users")\nconst { mutate } = hooks.useCreateUser();\n\n')),(0,o.kt)("h3",{id:"zodiosusequery"},(0,o.kt)("inlineCode",{parentName:"h3"},"zodios.useQuery")),(0,o.kt)("p",null,"Generic request method that allows to do queries (same as useGet)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"useQuery(path: string, config?: ZodiosRequestOptions, queryOptions?: QueryOptions): QueryResult<Response>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { data: users, isLoading, isError } = hooks.useQuery('/users');\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"check ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"react-query documentation")," for more informations on ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryResult")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryOptions"),".")),(0,o.kt)("h3",{id:"zodiosuseimmutablequery"},(0,o.kt)("inlineCode",{parentName:"h3"},"zodios.useImmutableQuery")),(0,o.kt)("p",null,"Generic request method that allows to do queries on post requests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"useImmutableQuery(path: string, body: Body ,config?: ZodiosRequestOptions, queryOptions?: QueryOptions): QueryResult<Response>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { data: users, isLoading, isError } = hooks.useImmutableQuery('/users/search', { name: \"John\" });\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"check ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"react-query documentation")," for more informations on ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryResult")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryOptions"),".")),(0,o.kt)("h3",{id:"zodiosuseinfinitequery"},(0,o.kt)("inlineCode",{parentName:"h3"},"zodios.useInfiniteQuery")),(0,o.kt)("p",null,"Generic request method that allows to load pages indefinitly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"useInfiniteQuery(path: string, config?: ZodiosRequestOptions, infiniteQueryOptions?: InfiniteQueryOptions): InfiniteQueryResult<Response>;\n")),(0,o.kt)("p",null,"Compared to native react-query infinite query, you also need to provide a function named ",(0,o.kt)("inlineCode",{parentName:"p"},"getPageParamList")," to tell zodios which parameters will be used to paginate. Indeed, zodios needs to know it to be able to generate the correct query key automatically for you."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'  const { data: userPages, isFectching, fetchNextPage } = apiHooks.useInfiniteQuery(\n    "/users",\n    {\n      // request 10 users per page\n      queries: { limit: 10 },\n    },\n    {\n      // tell zodios to not use page as query key to allow infinite loading\n      getPageParamList: () => ["page"],\n      // get next page param has to return the next page as a query or path param\n      getNextPageParam: (lastPage, pages) => lastPage.nextPage ? {\n          queries: {\n            page: lastPage.nextPage,\n          },\n        }: undefined;\n    }\n  );\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"check ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useInfiniteQuery"},"react-query infinite query documentation")," for more informations on ",(0,o.kt)("inlineCode",{parentName:"p"},"InfiniteQueryResult")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"InfiniteQueryOptions"),".")),(0,o.kt)("h3",{id:"zodiosuseimmutableinfinitequery"},(0,o.kt)("inlineCode",{parentName:"h3"},"zodios.useImmutableInfiniteQuery")),(0,o.kt)("p",null,"Generic request method that allows to search pages indefinitly with post requests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"useImmutableInfiniteQuery(path: string, body: Body ,config?: ZodiosRequestOptions, infiniteQueryOptions?: InfiniteQueryOptions): InfiniteQueryResult<Response>;\n")),(0,o.kt)("p",null,"Compared to native react-query infinite query, you also need to provide a function named ",(0,o.kt)("inlineCode",{parentName:"p"},"getPageParamList")," to tell zodios which parameters will be used to paginate. Indeed, zodios needs to know it to be able to generate the correct query key automatically for you."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'  const { data: userPages, isFectching, fetchNextPage } = apiHooks.useImmutableInfiniteQuery(\n    "/users/search",\n    {\n      // search for users named John\n      name: "John",\n      // request 10 users per page\n      limit: 10,\n    },\n    undefined,\n    {\n      // tell zodios to not use page as query key to allow infinite loading\n      getPageParamList: () => ["page"],\n      // get next page param has to return the next page as a query or path param\n      getNextPageParam: (lastPage, pages) => lastPage.nextPage ? {\n          body: {\n            page: lastPage.nextPage,\n          },\n        }: undefined;\n    }\n  );\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"check ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useInfiniteQuery"},"react-query infinite query documentation")," for more informations on ",(0,o.kt)("inlineCode",{parentName:"p"},"InfiniteQueryResult")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"InfiniteQueryOptions"),".")),(0,o.kt)("h3",{id:"zodiosusemutation"},(0,o.kt)("inlineCode",{parentName:"h3"},"zodios.useMutation")),(0,o.kt)("p",null,"Generic request method that allows to do mutations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"useMutation(method: string, path: string, config: ZodiosRequestOptions, reactQueryOptions?: ReactQueryOptions): ReactMutationResult<Response>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { mutate } = hooks.useMutation('post','/users');\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"check ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"react-query documentation")," for more informations on ",(0,o.kt)("inlineCode",{parentName:"p"},"MutationResult")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MutationOptions"),".")),(0,o.kt)("h3",{id:"zodiosuseget"},(0,o.kt)("inlineCode",{parentName:"h3"},"zodios.useGet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"useGet(path: string, config?: ZodiosRequestOptions, reactQueryOptions?: ReactQueryOptions): ReactQueryResult<Response>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const { data: user, isLoading, isError } = hooks.useGet("/users/:id", { params: { id: 1 } });\n')),(0,o.kt)("h3",{id:"zodiosusepost"},(0,o.kt)("inlineCode",{parentName:"h3"},"zodios.usePost")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"usePost(path: string, config?: ZodiosRequestOptions, reactQueryOptions?: ReactQueryOptions): ReactMutationResult<Response>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = hooks.usePost("/users");\n')),(0,o.kt)("h3",{id:"zodiosuseput"},(0,o.kt)("inlineCode",{parentName:"h3"},"zodios.usePut")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"usePut(path: string, config?: ZodiosRequestOptions, reactQueryOptions?: ReactQueryOptions): ReactMutationResult<Response>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = hooks.usePut("/users/:id", { params: { id: 1 } });\n')),(0,o.kt)("h3",{id:"zodiosusepatch"},(0,o.kt)("inlineCode",{parentName:"h3"},"zodios.usePatch")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"usePatch(path: string, config?: ZodiosRequestOptions, reactQueryOptions?: ReactQueryOptions): ReactMutationResult<Response>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = hooks.usePatch("/users/:id", {params: {id: 1}});\n')),(0,o.kt)("h3",{id:"zodiosusedelete"},(0,o.kt)("inlineCode",{parentName:"h3"},"zodios.useDelete")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"useDelete(path: string, config?: ZodiosRequestOptions, reactQueryOptions?: ReactQueryOptions): ReactMutationResult<Response>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = hooks.useDelete("/users/:id", { params: {id: 1 }});\n')),(0,o.kt)("h2",{id:"zodios-key-helpers"},"Zodios key helpers"),(0,o.kt)("p",null,"Zodios provides some helpers to generate query keys to be used to invalidate cache or to get it directly from cache with 'QueryClient.getQueryData(key)'."),(0,o.kt)("h3",{id:"zodiosgetkeybypath"},(0,o.kt)("inlineCode",{parentName:"h3"},"zodios.getKeyByPath")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"getKeyByPath(method: string, path: string, config?: ZodiosRequestOptions): QueryKey;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples"),":"),(0,o.kt)("p",null,"To get a key for a path endpoint with parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const key = zodios.getKeyByPath('get', '/users/:id', { params: { id: 1 } });\nconst user = queryClient.getQueryData<User>(key);\n")),(0,o.kt)("p",null,"To get a key to invalidate a path endpoint for all possible parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const key = zodios.getKeyByPath('get', '/users/:id');\nqueryClient.invalidateQueries(key);\n")),(0,o.kt)("h3",{id:"zodiosgetkeybyalias"},(0,o.kt)("inlineCode",{parentName:"h3"},"zodios.getKeyByAlias")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"getKeyByAlias(alias: string, config?: ZodiosRequestOptions): QueryKey;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples"),":"),(0,o.kt)("p",null,"To get a key for an alias endpoint with parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const key = zodios.getKeyByAlias('getUser', { params: { id: 1 } });\nconst user = queryClient.getQueryData<User>(key);\n")),(0,o.kt)("p",null,"To get a key to invalidate an alias endpoint for all possible parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const key = zodios.getKeyByAlias('getUser');\nqueryClient.invalidateQueries(key);\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="users.tsx"',title:'"users.tsx"'},'import React from "react";\nimport { Zodios } from "@zodios/core";\nimport { ZodiosHooks } from "@zodios/react";\nimport { z } from "zod";\n\nconst baseUrl = "https://jsonplaceholder.typicode.com";\nconst zodios = new Zodios(baseUrl, [...]);\nconst zodiosHooks = new ZodiosHooks("jsonplaceholder", zodios);\n\nconst Users = () => {\n  const {\n    data: users,\n    isLoading,\n    error,\n    invalidate: invalidateUsers, // zodios also provides invalidation helpers\n  } = zodiosHooks.useQuery("/users"); // or useGetUsers();\n  const { mutate } = zodiosHooks.useMutation("post", "/users", undefined, {\n    onSuccess: () => invalidateUsers(),\n  }); // or .useCreateUser(...);\n\n  return (\n    <>\n      <h1>Users</h1>\n      <button onClick={() => mutate({ name: "john doe" })}>add user</button>\n      {isLoading && <div>Loading...</div>}\n      {error && <div>Error: {(error as Error).message}</div>}\n      {users && (\n        <ul>\n          {users.map((user) => (\n            <li key={user.id}>{user.name}</li>\n          ))}\n        </ul>\n      )}\n    </>\n  );\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="root.tsx"',title:'"root.tsx"'},'import { QueryClient, QueryClientProvider } from "react-query";\nimport { Users } from "./users";\n\nconst queryClient = new QueryClient();\n\nexport const App = () => {\n  return (\n    <QueryClientProvider client={queryClient}>\n      <Users />\n    </QueryClientProvider>\n  );\n};\n')))}d.isMDXComponent=!0}}]);