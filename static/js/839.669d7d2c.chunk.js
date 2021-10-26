/*! For license information please see 839.669d7d2c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksenhub=self.webpackChunksenhub||[]).push([[839],{5659:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(9289);BigInt.prototype.toJSON=function(){return this.toString()};var o={serializableCheck:{isSerializable:function(e){return"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||function(e){if(null===e)return!1;var n=Object.getPrototypeOf(e);return null!==n&&null===Object.getPrototypeOf(n)}(e)||"bigint"===typeof e}}},i=r(4863),c=(0,t.configureStore)({middleware:function(e){return e(o)},devTools:!1,reducer:{main:i.Z}})},4863:function(e,n,r){r.d(n,{r:function(){return a}});var t=r(5861),o=r(7757),i=r.n(o),c=r(9289),u="main",a=(0,c.createAsyncThunk)("".concat(u,"/increaseCounter"),function(){var e=(0,t.Z)(i().mark((function e(n,r){var t,o,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.getState,o=t(),c=o.main.counter,e.abrupt("return",{counter:c+1});case 3:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),f=(0,c.createSlice)({name:u,initialState:{counter:0},reducers:{},extraReducers:function(e){e.addCase(a.fulfilled,(function(e,n){var r=n.payload;Object.assign(e,r)}))}});n.Z=f.reducer},5839:function(e,n,r){r.r(n),r.d(n,{default:function(){return l}});var t=r(5754),o=r(9142),i=r(8589),c=r(4738),u=r(3805),a=r(184),f=function(){var e=(0,o.useUI)().ui,n=e.width,r=e.infix;return(0,a.jsxs)(i.Row,{gutter:[24,24],children:[(0,a.jsx)(i.Col,{span:24,children:(0,a.jsxs)(i.Space,{align:"center",children:[(0,a.jsx)(c.Z,{name:"apps-outline"}),(0,a.jsx)(i.Typography.Title,{level:4,children:"Widget"})]})}),(0,a.jsx)(i.Col,{span:24,children:(0,a.jsxs)(i.Typography.Text,{children:["Env: ",u.O," - ",n,"px - ",r]})})]})},s=r(5659),l=function(){return(0,a.jsx)(o.UIProvider,{children:(0,a.jsx)(t.Provider,{store:s.Z,children:(0,a.jsx)(f,{})})})}},4738:function(e,n,r){var t=r(1413),o=r(5987),i=r(2950),c=r(184),u=["name","className"],a=(0,i.forwardRef)((function(e,n){var r=e.name,i=e.className,a=(0,o.Z)(e,u),f=i?"anticon "+i:"anticon";return(0,c.jsx)("span",(0,t.Z)((0,t.Z)({className:f},a),{},{children:(0,c.jsx)("ion-icon",{ref:n,name:r})}))}));n.Z=a},3805:function(e,n,r){r.d(n,{O:function(){return o},e:function(){return i}});var t=r(3933),o="production",i=t.Z.get("network")||"devnet"},3933:function(e,n){var r="senhub",t=window.localStorage,o=function(e){if(!e)return null;try{return JSON.parse(e)}catch(n){return null}},i={set:function(e,n){var i=o(t.getItem(r));i&&"object"===typeof i||(i={}),i[e]=n,t.setItem(r,JSON.stringify(i))},get:function(e){var n=o(t.getItem(r));return n&&"object"===typeof n?n[e]:null},clear:function(e){i.set(e,null)}};n.Z=i},1725:function(e){var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var c,u,a=o(e),f=1;f<arguments.length;f++){for(var s in c=Object(arguments[f]))r.call(c,s)&&(a[s]=c[s]);if(n){u=n(c);for(var l=0;l<u.length;l++)t.call(c,u[l])&&(a[u[l]]=c[u[l]])}}return a}},6374:function(e,n,r){r(1725);var t=r(2950),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,n,r){var t,i={},f=null,s=null;for(t in void 0!==r&&(f=""+r),void 0!==n.key&&(f=""+n.key),void 0!==n.ref&&(s=n.ref),n)u.call(n,t)&&!a.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:f,ref:s,props:i,_owner:c.current}}n.jsx=f,n.jsxs=f},184:function(e,n,r){e.exports=r(6374)}}]);
//# sourceMappingURL=839.669d7d2c.chunk.js.map