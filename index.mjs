// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex128array@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex64array@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";function o(r){var e,s;if(e=[],r<=0)return e;for(s=1;s<r+1;s++)e.push(s);return e}function a(r,e,s,t){var n,i,o;for(i=2*s,o=2*t,n=1;o>=0&&o<e.length;)e[o]=n,e[o+1]=0,o+=i,n+=1;return r}function d(r,o,d){var m=t(r);return m.accessorProtocol?e(r)?a(r,n(r,0),o,d):s(r)?a(r,i(r,0),o,d):function(r,e,s){var t,n,i,o;for(t=r.data,n=r.accessors[1],o=s,i=1;o>=0&&o<t.length;)n(t,o,i),o+=e,i+=1;return t}(m,o,d):function(r,e,s){var t,n;for(n=s,t=1;n>=0&&n<r.length;)r[n]=t,n+=e,t+=1;return r}(r,o,d)}r(o,"assign",d);export{d as assign,o as default};
//# sourceMappingURL=index.mjs.map
