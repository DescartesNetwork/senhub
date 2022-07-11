/*! For license information please see src_bootstrap_app_tsx.7842d787.chunk.js.LICENSE.txt */
(globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[]).push([["src_bootstrap_app_tsx"],{45597:(e,t,r)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return s.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return o.default}});var n=a(r(70854)),s=a(r(69363)),o=a(r(83272));function a(e){return e&&e.__esModule?e:{default:e}}const i=[n.default];t.h0=i},11230:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Page:()=>C,__esModule:()=>S.X$,logo:()=>S.jY,panels:()=>S.h0,readme:()=>S.ng});var n=r(55754),s=r(9878),o=r(92950),a=r(94751),i=r(45263);var c={"logo-telegram":r.p+"static/media/icon-telegram.2450489f40d03000fe65fc1c6f238d85.svg","logo-sentre":r.p+"static/media/icon-sentre.1aa4776f6a84fe8cdea1b2025dd823c5.svg","logo-solana":r.p+"static/media/icon-solana.0f29c7077d2fa64ecf8c70fb05cd9e86.svg"},l=r(6863),p=function(){return p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},p.apply(this,arguments)},d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r};const u=(0,o.forwardRef)((function(e,t){var r=e.name,n=e.className,s=d(e,["name","className"]),a=n?"anticon "+n:"anticon";return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)(l.q,{children:(0,i.jsx)("script",{type:"module",src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"})}),(0,i.jsx)("span",p({className:a},s,{children:c[r]?(0,i.jsx)("ion-icon",{ref:t,src:c[r]}):(0,i.jsx)("ion-icon",{ref:t,name:r})}))]})}));var f=r(19289);const b="main",y=(0,f.createAsyncThunk)("main/increaseCounter",(async(e,t)=>{let{getState:r}=t;const{main:{counter:n}}=r();return{counter:n+1}})),g=(0,f.createSlice)({name:b,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(y.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)}))}}).reducer;const h={appId:"senhub",url:"https://descartesnetwork.github.io/senhub/index.js"},m={devnet:{node:"https://api.devnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},testnet:{node:"https://api.testnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},mainnet:{node:"https://api.mainnet-beta.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"}},j={manifest:{development:{...h},staging:{...h},production:{...h}}[s.env],sol:m[s.net]},{manifest:{appId:v}}=j,O=()=>{const{wallet:{address:e}}=(0,s.useWallet)(),t=(0,n.useDispatch)(),{counter:r}=(0,n.useSelector)((e=>e.main)),c=(0,o.useMemo)((()=>(0,s.createPDB)(e,v)),[e]),l=(0,o.useCallback)((()=>t(y())),[t]);return(0,o.useEffect)((()=>{c&&c.setItem("counter",r)}),[c,r]),(0,i.jsxs)(a.Row,{gutter:[24,24],align:"middle",children:[(0,i.jsx)(a.Col,{span:24,children:(0,i.jsxs)(a.Space,{align:"center",children:[(0,i.jsx)(u,{name:"newspaper-outline"}),(0,i.jsx)(a.Typography.Title,{level:4,children:"App View"})]})}),(0,i.jsx)(a.Col,{span:24,children:(0,i.jsxs)(a.Typography.Text,{children:["Address: ",e]})}),(0,i.jsx)(a.Col,{children:(0,i.jsxs)(a.Typography.Text,{children:["Counter: ",r]})}),(0,i.jsx)(a.Col,{children:(0,i.jsx)(a.Button,{onClick:l,children:"Increase"})})]})};var x=r(42224),k=r(48744),P=r.n(k),w=r(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const A={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof x.PublicKey||e instanceof P()||w.isBuffer(e)}},_=(0,f.configureStore)({middleware:e=>e(A),devTools:!1,reducer:{main:g}});var S=r(45597);const{manifest:{appId:T}}=j,C=()=>(0,i.jsx)(s.UIProvider,{appId:T,antd:!0,children:(0,i.jsx)(s.WalletProvider,{children:(0,i.jsx)(n.Provider,{store:_,children:(0,i.jsx)(O,{})})})})},25882:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function s(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(s){return!1}}()?Object.assign:function(e,o){for(var a,i,c=s(e),l=1;l<arguments.length;l++){for(var p in a=Object(arguments[l]))r.call(a,p)&&(c[p]=a[p]);if(t){i=t(a);for(var d=0;d<i.length;d++)n.call(a,i[d])&&(c[i[d]]=a[i[d]])}}return c}},62175:(e,t,r)=>{"use strict";r(25882);var n=r(92950),s=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;s=o("react.element"),o("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,p=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:p,props:o,_owner:a.current}}t.jsx=l,t.jsxs=l},45263:(e,t,r)=>{"use strict";e.exports=r(62175)},83272:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/README.ff93448fef94ea73029b.md"},69363:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/logo.da175f6d5d1564b6bc58.png"},70854:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel.6ce7bc345912340df001.png"},46601:()=>{},89214:()=>{},85568:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_bootstrap_app_tsx.7842d787.chunk.js.map