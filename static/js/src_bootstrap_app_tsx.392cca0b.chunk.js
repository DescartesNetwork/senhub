/*! For license information please see src_bootstrap_app_tsx.392cca0b.chunk.js.LICENSE.txt */
(globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[]).push([["src_bootstrap_app_tsx"],{45597:(e,t,r)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return o.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return s.default}});var n=a(r(70854)),o=a(r(69363)),s=a(r(83272));function a(e){return e&&e.__esModule?e:{default:e}}const i=[n.default];t.h0=i},43008:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Page:()=>A,__esModule:()=>O.X$,logo:()=>O.jY,panels:()=>O.h0,readme:()=>O.ng});var n=r(55754),o=r(68275),s=r(94751),a=r(45263);const i=()=>(0,a.jsx)(s.Row,{gutter:[24,24],align:"middle",children:(0,a.jsx)(s.Col,{span:24,children:(0,a.jsx)(s.Typography.Title,{level:4,children:"Hello"})})});var c=r(19289),l=r(42224),u=r(48744),d=r.n(u),f=r(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const p={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof l.PublicKey||e instanceof d()||f.isBuffer(e)}},b="main",y=(0,c.createAsyncThunk)("main/increaseCounter",(async(e,t)=>{let{getState:r}=t;const{main:{counter:n}}=r();return{counter:n+1}})),g=(0,c.createSlice)({name:b,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(y.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)}))}}).reducer,h=(0,c.configureStore)({middleware:e=>e(p),devTools:!1,reducer:{main:g}});const v={appId:"senhub",url:"https://descartesnetwork.github.io/senhub/index.js"},m={devnet:{node:"https://api.devnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},testnet:{node:"https://api.testnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},mainnet:{node:"https://api.mainnet-beta.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"}},j={manifest:{development:{...v},production:{...v}}[o.env],sol:m[o.net]};var O=r(45597);const{manifest:{appId:k}}=j,A=()=>(0,a.jsx)(o.AntdProvider,{appId:k,children:(0,a.jsx)(n.Provider,{store:h,children:(0,a.jsx)(i,{})})})},25882:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,s){for(var a,i,c=o(e),l=1;l<arguments.length;l++){for(var u in a=Object(arguments[l]))r.call(a,u)&&(c[u]=a[u]);if(t){i=t(a);for(var d=0;d<i.length;d++)n.call(a,i[d])&&(c[i[d]]=a[i[d]])}}return c}},62175:(e,t,r)=>{"use strict";r(25882);var n=r(92950),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),s("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:a.current}}t.jsx=l,t.jsxs=l},45263:(e,t,r)=>{"use strict";e.exports=r(62175)},83272:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/README.ff93448fef94ea73029b.md"},69363:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/logo.da175f6d5d1564b6bc58.png"},70854:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel.6ce7bc345912340df001.png"},46601:()=>{},89214:()=>{},85568:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_bootstrap_app_tsx.392cca0b.chunk.js.map