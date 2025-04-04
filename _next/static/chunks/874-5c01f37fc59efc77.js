"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[874],{2757:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return i},urlObjectKeys:function(){return a}});let n=r(6966)._(r(8859)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,u=e.protocol||"",a=e.pathname||"",i=e.hash||"",s=e.query||"",f=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?f=t+e.host:r&&(f=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(f+=":"+e.port)),s&&"object"==typeof s&&(s=String(n.urlQueryToSearchParams(s)));let l=e.search||s&&"?"+s||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==f?(f="//"+(f||""),a&&"/"!==a[0]&&(a="/"+a)):f||(f=""),i&&"#"!==i[0]&&(i="#"+i),l&&"?"!==l[0]&&(l="?"+l),""+u+f+(a=a.replace(/[?#]/g,encodeURIComponent))+(l=l.replace("#","%23"))+i}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return u(e)}},6874:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let n=r(8229),o=r(5155),u=n._(r(2115)),a=r(2757),i=r(5227),s=r(9818),f=r(6654),l=r(9991),c=r(5929);r(3230);let p=r(4930);function d(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let h=u.default.forwardRef(function(e,t){let r,n;let{href:a,as:h,children:y,prefetch:g=null,passHref:m,replace:b,shallow:E,scroll:P,onClick:_,onMouseEnter:v,onTouchStart:O,legacyBehavior:j=!1,...C}=e;r=y,j&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let N=u.default.useContext(i.AppRouterContext),T=!1!==g,S=null===g?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:x,as:A}=u.default.useMemo(()=>{let e=d(a);return{href:e,as:h?d(h):e}},[a,h]);j&&(n=u.default.Children.only(r));let k=j?n&&"object"==typeof n&&n.ref:t,w=u.default.useCallback(e=>(T&&null!==N&&(0,p.mountLinkInstance)(e,x,N,S),()=>{(0,p.unmountLinkInstance)(e)}),[T,x,N,S]),M={ref:(0,f.useMergedRef)(w,k),onClick(e){j||"function"!=typeof _||_(e),j&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&!function(e,t,r,n,o,a,i){let{nodeName:s}=e.currentTarget;!("A"===s.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),u.default.startTransition(()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,N,x,A,b,E,P)},onMouseEnter(e){j||"function"!=typeof v||v(e),j&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&T&&(0,p.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){j||"function"!=typeof O||O(e),j&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&T&&(0,p.onNavigationIntent)(e.currentTarget)}};return(0,l.isAbsoluteUrl)(A)?M.href=A:j&&!m&&("a"!==n.type||"href"in n.props)||(M.href=(0,c.addBasePath)(A)),j?u.default.cloneElement(n,M):(0,o.jsx)("a",{...C,...M,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8859:(e,t)=>{function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},9991:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return m},NormalizeError:function(){return y},PageNotFoundError:function(){return g},SP:function(){return p},ST:function(){return d},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return s},getLocationOrigin:function(){return a},getURL:function(){return i},isAbsoluteUrl:function(){return u},isResSent:function(){return f},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return l},stringifyError:function(){return E}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function i(){let{href:e}=window.location,t=a();return e.substring(t.length)}function s(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function l(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error('"'+s(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let p="undefined"!=typeof performance,d=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);