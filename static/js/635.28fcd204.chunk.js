(self.webpackChunksenhub=self.webpackChunksenhub||[]).push([[635,956],{5756:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var r=t(9289);BigInt.prototype.toJSON=function(){return this.toString()};var a=(0,r.getDefaultMiddleware)({serializableCheck:{isSerializable:function(e){return"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||function(e){if(null===e)return!1;var n=Object.getPrototypeOf(e);return null!==n&&null===Object.getPrototypeOf(n)}(e)||"bigint"===typeof e}}}),s={NODE_ENV:"production",PUBLIC_URL:"./sen-hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ID:"senhub",REACT_APP_URL:"https://descartesnetwork.github.io/sen-hub"}.REACT_APP_ENV||"production",c=t(1413);var o={appId:"senhub",url:"https://descartesnetwork.github.io/sen-hub"},u={development:(0,c.Z)({},o),staging:(0,c.Z)({},o),production:(0,c.Z)({},o)},i={spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},d={development:(0,c.Z)((0,c.Z)({node:"https://api.devnet.solana.com",chainId:103,cluster:"devnet",senAddress:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ"},i),{},{swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9"}),staging:(0,c.Z)((0,c.Z)({node:"https://api.devnet.solana.com",cluster:"devnet",chainId:103,senAddress:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ"},i),{},{swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9"}),production:(0,c.Z)((0,c.Z)({node:"https://api.mainnet-beta.solana.com",cluster:"mainnet",chainId:101,senAddress:"SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M"},i),{},{swapAddress:"SSW7ooZ1EbEognq5GosbygA3uWW1Hq1NsFq6TsftCFV",taxmanAddress:"9doo2HZQEmh2NgfT3Yx12M89aoBheycYqH1eaR5gKb3e"})},f={env:s,basics:u[s],sol:d[s]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SenHub";return"development"===f.env&&{name:e,actionSanitizer:function(e){return{payload:e.payload,type:e.type}}}},p=t(2956),w=t(5861),h=t(7757),v=t.n(h),b=t(59),k=function(){var e=(0,w.Z)(v().mark((function e(n){var t,r,a,s,c;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=(t=f.sol).spltAddress,a=t.splataAddress,s=t.node,c=t.swapAddress,window.senos={wallet:n,lamports:new b.Lamports(s),splt:new b.SPLT(r,a,s),swap:new b.Swap(c,r,a,s)};case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y=function(){var e=(0,w.Z)(v().mark((function e(){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null!==(n=window.senos)&&void 0!==n&&n.wallet&&window.senos.wallet.disconnect(),e.next=3,k(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x="wallet",m={visible:!1,address:"",lamports:BigInt(0)},A=(0,r.createAsyncThunk)("".concat(x,"/openWallet"),(0,w.Z)(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{visible:!0});case 1:case"end":return e.stop()}}),e)})))),g=(0,r.createAsyncThunk)("".concat(x,"/closeWallet"),(0,w.Z)(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{visible:!1});case 1:case"end":return e.stop()}}),e)})))),S=(0,r.createAsyncThunk)("".concat(x,"/connectWallet"),function(){var e=(0,w.Z)(v().mark((function e(n){var t,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}throw new Error("Invalid wallet instance");case 2:return e.next=4,k(n);case 4:return e.next=6,n.getAddress();case 6:return t=e.sent,e.next=9,window.senos.lamports.getLamports(t);case 9:return r=e.sent,e.abrupt("return",{address:t,lamports:BigInt(r),visible:!1});case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),Z=(0,r.createAsyncThunk)("".concat(x,"/updateWallet"),function(){var e=(0,w.Z)(v().mark((function e(n){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.lamports,e.abrupt("return",{lamports:t});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),C=(0,r.createAsyncThunk)("".concat(x,"/disconnectWallet"),(0,w.Z)(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})))),T=(0,r.createSlice)({name:x,initialState:m,reducers:{},extraReducers:function(e){e.addCase(A.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)})).addCase(g.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)})).addCase(S.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)})).addCase(Z.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)})).addCase(C.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)}))}}).reducer,E=t(4942),P="accounts",j=(0,r.createAsyncThunk)("".concat(P,"/getAccounts"),function(){var e=(0,w.Z)(v().mark((function e(n){var t,r,a,s,c,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.owner,b.account.isAddress(t)){e.next=3;break}throw new Error("Invalid owner/wallet address");case 3:return r=window.senos.splt,a=b.account.fromAddress(t),e.next=7,r.connection.getTokenAccountsByOwner(a,{programId:r.spltProgramId});case 7:return s=e.sent,c=s.value,o={},c.forEach((function(e){var n=e.pubkey,t=e.account.data,a=n.toBase58(),s=r.parseAccountData(t);return o[a]=s})),e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),O=(0,r.createAsyncThunk)("".concat(P,"/getAccount"),function(){var e=(0,w.Z)(v().mark((function e(n,t){var r,a,s,c,o,u;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.address,a=t.getState,b.account.isAddress(r)){e.next=4;break}throw new Error("Invalid account address");case 4:if(s=a(),!(c=s.accounts[r])){e.next=7;break}return e.abrupt("return",(0,E.Z)({},r,c));case 7:return o=window.senos.splt,e.next=10,o.getAccountData(r);case 10:return u=e.sent,e.abrupt("return",(0,E.Z)({},r,u));case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),I=(0,r.createAsyncThunk)("".concat(P,"/upsetAccount"),function(){var e=(0,w.Z)(v().mark((function e(n){var t,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.address,r=n.data,b.account.isAddress(t)){e.next=3;break}throw new Error("Invalid address");case 3:if(r){e.next=5;break}throw new Error("Data is empty");case 5:return e.abrupt("return",(0,E.Z)({},t,r));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),B=(0,r.createAsyncThunk)("".concat(P,"/deleteAccount"),function(){var e=(0,w.Z)(v().mark((function e(n){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.address,b.account.isAddress(t)){e.next=3;break}throw new Error("Invalid address");case 3:return e.abrupt("return",{address:t});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),D=(0,r.createSlice)({name:P,initialState:{},reducers:{},extraReducers:function(e){e.addCase(j.fulfilled,(function(e,n){return n.payload})).addCase(O.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)})).addCase(I.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)})).addCase(B.fulfilled,(function(e,n){delete e[n.payload.address]}))}}).reducer,L="mints",R=(0,r.createAsyncThunk)("".concat(L,"/getMint"),function(){var e=(0,w.Z)(v().mark((function e(n,t){var r,a,s,c,o,u,i;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.address,a=n.force,s=t.getState,b.account.isAddress(r)){e.next=4;break}throw new Error("Invalid mint address");case 4:if(a){e.next=8;break}if(c=s(),!(o=c.accounts[r])){e.next=8;break}return e.abrupt("return",(0,E.Z)({},r,o));case 8:return u=window.senos.splt,e.next=11,u.getMintData(r);case 11:return i=e.sent,e.abrupt("return",(0,E.Z)({},r,i));case 13:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),W=(0,r.createAsyncThunk)("".concat(L,"/upsetMint"),function(){var e=(0,w.Z)(v().mark((function e(n){var t,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.address,r=n.data,b.account.isAddress(t)){e.next=3;break}throw new Error("Invalid address");case 3:if(r){e.next=5;break}throw new Error("Data is empty");case 5:return e.abrupt("return",(0,E.Z)({},t,r));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),_=(0,r.createAsyncThunk)("".concat(L,"/deleteMint"),function(){var e=(0,w.Z)(v().mark((function e(n){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.address,b.account.isAddress(t)){e.next=3;break}throw new Error("Invalid address");case 3:return e.abrupt("return",{address:t});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),F=(0,r.createSlice)({name:L,initialState:{},reducers:{},extraReducers:function(e){e.addCase(R.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)})).addCase(W.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)})).addCase(_.fulfilled,(function(e,n){delete e[n.payload.address]}))}}).reducer,G=f.sol.taxmanAddress,H="pools",V=(0,r.createAsyncThunk)("".concat(H,"/getPools"),(0,w.Z)(v().mark((function e(){var n,t,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.senos.swap,e.next=3,n.connection.getProgramAccounts(n.swapProgramId,{filters:[{dataSize:257},{memcmp:{bytes:G,offset:65}}]});case 3:return t=e.sent,r={},t.forEach((function(e){var t=e.pubkey,a=e.account.data,s=t.toBase58(),c=n.parsePoolData(a);r[s]=c})),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),z=(0,r.createAsyncThunk)("".concat(H,"/getPool"),function(){var e=(0,w.Z)(v().mark((function e(n,t){var r,a,s,c,o,u;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.address,a=t.getState,b.account.isAddress(r)){e.next=4;break}throw new Error("Invalid pool address");case 4:if(s=a(),!(c=s.pools[r])){e.next=7;break}return e.abrupt("return",(0,E.Z)({},r,c));case 7:return o=window.senos.swap,e.next=10,o.getPoolData(r);case 10:return u=e.sent,e.abrupt("return",(0,E.Z)({},r,u));case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),K=(0,r.createAsyncThunk)("".concat(H,"/upsetPool"),function(){var e=(0,w.Z)(v().mark((function e(n){var t,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.address,r=n.data,b.account.isAddress(t)){e.next=3;break}throw new Error("Invalid pool address");case 3:if(r){e.next=5;break}throw new Error("Data is empty");case 5:return e.abrupt("return",(0,E.Z)({},t,r));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),M=(0,r.createSlice)({name:H,initialState:{},reducers:{},extraReducers:function(e){e.addCase(V.fulfilled,(function(e,n){return n.payload})).addCase(z.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)})).addCase(K.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)}))}}).reducer,N=(0,r.configureStore)({middleware:a,devTools:l("SenHub"),reducer:{ui:p.default,wallet:T,accounts:D,mints:F,pools:M}})},2956:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d},resize:function(){return i}});var r=t(5861),a=t(7757),s=t.n(a),c=t(9289),o=function(){var e=window.innerWidth;return e<576?"xs":e<768?"sm":e<992?"md":e<1200?"lg":e<1400?"xl":"xxl"},u={width:window.innerWidth,infix:o(),touchable:"ontouchstart"in window||navigator.maxTouchPoints>0},i=(0,c.createAsyncThunk)("".concat("ui","/resize"),(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.innerWidth,t=o(),e.abrupt("return",{width:n,infix:t});case 3:case"end":return e.stop()}}),e)})))),d=(0,c.createSlice)({name:"ui",initialState:u,reducers:{},extraReducers:function(e){e.addCase(i.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)}))}}).reducer},6601:function(){},9214:function(){},5568:function(){},2361:function(){},4616:function(){},5024:function(){}}]);
//# sourceMappingURL=635.28fcd204.chunk.js.map