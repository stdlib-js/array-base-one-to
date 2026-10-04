"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var u=t(function(O,c){
function h(e){var r,i;if(r=[],e<=0)return r;for(i=1;i<e+1;i++)r.push(i);return r}c.exports=h
});var p=t(function(P,o){
var x=require('@stdlib/array-base-assert-is-complex128array/dist'),g=require('@stdlib/array-base-assert-is-complex64array/dist'),f=require('@stdlib/array-base-arraylike2object/dist'),m=require('@stdlib/strided-base-reinterpret-complex128/dist'),y=require('@stdlib/strided-base-reinterpret-complex64/dist');function w(e,r,i){var a,n;for(n=i,a=1;n>=0&&n<e.length;)e[n]=a,n+=r,a+=1;return e}function l(e,r,i,a){var n,v,s;for(v=i*2,s=a*2,n=1;s>=0&&s<r.length;)r[s]=n,r[s+1]=0,s+=v,n+=1;return e}function b(e,r,i){var a,n,v,s;for(a=e.data,n=e.accessors[1],s=i,v=1;s>=0&&s<a.length;)n(a,s,v),s+=r,v+=1;return a}function j(e,r,i){var a=f(e);return a.accessorProtocol?x(e)?l(e,m(e,0),r,i):g(e)?l(e,y(e,0),r,i):b(a,r,i):w(e,r,i)}o.exports=j
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=u(),C=p();A(q,"assign",C);module.exports=q;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
