var f=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(r,t)=>(typeof require!="undefined"?require:r)[t]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});import q from"/-/esm.sh/stable/react@18.2.0/es2018/react.js";var E=Object.create,y=Object.defineProperty,h=Object.getOwnPropertyDescriptor,F=Object.getOwnPropertyNames,R=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,U=(e=>typeof f!="undefined"?f:typeof Proxy!="undefined"?new Proxy(e,{get:(r,t)=>(typeof f!="undefined"?f:r)[t]}):e)(function(e){if(typeof f!="undefined")return f.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')}),O=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),k=(e,r)=>{for(var t in r)y(e,t,{get:r[t],enumerable:!0})},l=(e,r,t,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of F(r))!S.call(e,n)&&n!==t&&y(e,n,{get:()=>r[n],enumerable:!(u=h(r,n))||u.enumerable});return e},D=(e,r,t)=>(l(e,r,"default"),t&&l(t,r,"default")),x=(e,r,t)=>(t=e!=null?E(R(e)):{},l(r||!e||!e.__esModule?y(t,"default",{value:e,enumerable:!0}):t,e)),N=O(e=>{"use strict";var r=q,t=Symbol.for("react.element"),u=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function d(s,o,c){var a,p={},i=null,v=null;c!==void 0&&(i=""+c),o.key!==void 0&&(i=""+o.key),o.ref!==void 0&&(v=o.ref);for(a in o)n.call(o,a)&&!w.hasOwnProperty(a)&&(p[a]=o[a]);if(s&&s.defaultProps)for(a in o=s.defaultProps,o)p[a]===void 0&&(p[a]=o[a]);return{$$typeof:t,type:s,key:i,ref:v,props:p,_owner:P.current}}e.Fragment=u,e.jsx=d,e.jsxs=d}),_=O((e,r)=>{"use strict";r.exports=N()}),j={};k(j,{Fragment:()=>I,default:()=>g,jsx:()=>L,jsxs:()=>T});var b=x(_());D(j,x(_()));var{Fragment:I,jsx:L,jsxs:T}=b,{default:m,...C}=b,g=m!==void 0?m:C;export{I as Fragment,g as default,L as jsx,T as jsxs};
/*! Bundled license information:

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
