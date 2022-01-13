"use strict";(globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[]).push([[615],{18456:(e,t,n)=>{n.r(t),n.d(t,{AccountProvider:()=>b,MintProvider:()=>G,PoolProvider:()=>m,UIProvider:()=>c,WalletProvider:()=>x,useAccount:()=>M,useMint:()=>Y,usePool:()=>w,useUI:()=>h,useWallet:()=>I,withAccount:()=>j,withMint:()=>J,withPool:()=>f,withUI:()=>l,withWallet:()=>C});var s=n(92950),i=n(99019),o=n(87358),r=n(45263);const a=(0,s.createContext)({}),c=({children:e,appId:t,style:n={},antd:c=!1})=>{const{ui:d}=(0,o.Qy)((e=>e)),l=(0,s.useMemo)((()=>({ui:d})),[d]),h=c?{getPopupContainer:()=>document.getElementById(t),..."object"===typeof c?c:{}}:void 0;return(0,r.jsx)(a.Provider,{value:l,children:(0,r.jsx)("section",{id:t,style:{height:"100%",backgroundColor:"transparent",...n},children:h?(0,r.jsx)(i.ConfigProvider,{...h,children:e}):e})})},d=({children:e})=>(0,r.jsx)(a.Consumer,{children:t=>s.Children.map(e,(e=>(0,s.cloneElement)(e,{...t})))}),l=e=>{class t extends s.Component{render(){const{forwardedRef:t,...n}=this.props;return(0,r.jsx)(d,{children:(0,r.jsx)(e,{ref:t,...n})})}}return(0,s.forwardRef)(((e,n)=>(0,r.jsx)(t,{...e,ref:n})))},h=()=>(0,s.useContext)(a),u=(0,s.createContext)({}),m=({children:e})=>{const{pools:t}=(0,o.Qy)((e=>e)),n=(0,s.useMemo)((()=>({pools:t})),[t]);return(0,r.jsx)(u.Provider,{value:n,children:e})},p=({children:e})=>(0,r.jsx)(u.Consumer,{children:t=>s.Children.map(e,(e=>(0,s.cloneElement)(e,{...t})))}),f=e=>{class t extends s.Component{render(){const{forwardedRef:t,...n}=this.props;return(0,r.jsx)(p,{children:(0,r.jsx)(e,{ref:t,...n})})}}return(0,s.forwardRef)(((e,n)=>(0,r.jsx)(t,{...e,ref:n})))},w=()=>(0,s.useContext)(u),g=(0,s.createContext)({}),x=({children:e})=>{const{wallet:t}=(0,o.Qy)((e=>e)),n=(0,s.useMemo)((()=>({wallet:t})),[t]);return(0,r.jsx)(g.Provider,{value:n,children:e})},v=({children:e})=>(0,r.jsx)(g.Consumer,{children:t=>s.Children.map(e,(e=>(0,s.cloneElement)(e,{...t})))}),C=e=>{class t extends s.Component{render(){const{forwardedRef:t,...n}=this.props;return(0,r.jsx)(v,{children:(0,r.jsx)(e,{ref:t,...n})})}}return(0,s.forwardRef)(((e,n)=>(0,r.jsx)(t,{...e,ref:n})))},I=()=>(0,s.useContext)(g),k=(0,s.createContext)({}),b=({children:e})=>{const{accounts:t}=(0,o.Qy)((e=>e)),n=(0,s.useMemo)((()=>({accounts:t})),[t]);return(0,r.jsx)(k.Provider,{value:n,children:e})},y=({children:e})=>(0,r.jsx)(k.Consumer,{children:t=>s.Children.map(e,(e=>(0,s.cloneElement)(e,{...t})))}),j=e=>{class t extends s.Component{render(){const{forwardedRef:t,...n}=this.props;return(0,r.jsx)(y,{children:(0,r.jsx)(e,{ref:t,...n})})}}return(0,s.forwardRef)(((e,n)=>(0,r.jsx)(t,{...e,ref:n})))},M=()=>(0,s.useContext)(k);var E=n(33015),R=n(11796),P=n(67845),U=n(15190),L=n(55852);const S=e=>({symbol:"SOL",name:"Solana",address:"11111111111111111111111111111111",decimals:9,chainId:e,extensions:{coingeckoId:"solana"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"}),q=e=>({symbol:"SNTR",name:"Sentre",address:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",decimals:9,chainId:e,extensions:{coingeckoId:"sentre"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M/logo.png"}),B=[S(103),q(103),{symbol:"wBTC",name:"Wrapped Bitcoin",address:"8jk4eJymMfNZV9mkRNxJEt2VJ3pRvdJvD5FE94GXGBPM",decimals:9,chainId:103,extensions:{coingeckoId:"bitcoin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/qfnqNqs3nCAHjnyCgLRDbBtq4p2MtHZxw8YjSyYhPoL/logo.png"},{symbol:"wETH",name:"Ethereum",address:"27hdcZv7RtuMp75vupThR3T4KLsL61t476eosMdoec4c",decimals:9,chainId:103,extensions:{coingeckoId:"ethereum"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png"},{symbol:"UNI",name:"Uniswap",address:"FVZFSXu3yn17YdcxLD72TFDUqkdE5xZvcW18EUpRQEbe",decimals:9,chainId:103,extensions:{coingeckoId:"uniswap"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3MVa4e32PaKmPxYUQ6n8vFkWtCma68Ld7e7fTktWDueQ/logo.png"},{symbol:"USDC",name:"USD Coin",address:"2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj",decimals:9,chainId:103,extensions:{coingeckoId:"usd-coin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"}],{sol:{chainId:A}}=L.Z,D=/[\W_]+/g,N={tokenize:"full",context:!0,minlength:3},Z={document:{id:"address",index:[{field:"symbol",...N},{field:"name",...N}]}};const T=class{constructor(){this.tokenMap=void 0,this.engine=void 0,this.chainId=void 0,this.cluster=void 0,this.loading=void 0,this.queue=void 0,this._init=async()=>this.tokenMap.size?[this.tokenMap,this.engine]:new Promise((async e=>{if(this.loading)return this.queue.push(e);this.loading=!0;let t=await(await(new P.DK).resolve()).filterByChainId(this.chainId).getList();for("devnet"===this.cluster&&(t=t.concat(B)),t="testnet"===this.cluster?t.concat([q(102),S(102)]):t.concat([S(101)]),t.forEach((e=>this.tokenMap.set(e.address,e))),this.engine=new R.Document(Z),this.tokenMap.forEach((({address:e,...t})=>this.engine.add(e,t))),e([this.tokenMap,this.engine]);this.queue.length;)this.queue.shift()([this.tokenMap,this.engine]);this.loading=!1})),this.all=async()=>{const[e]=await this._init();return Array.from(e.values())},this.findByAddress=async e=>{const[t]=await this._init();return t.get(e)},this.find=async(e,t)=>{const[n,s]=await this._init();let i=[];return e.split(D).forEach((e=>s.search(e,t).forEach((({result:e})=>e.forEach((e=>{if(i.findIndex((({address:t})=>t===e))<0){const t=n.get(e);t&&i.push(t)}})))))),i},this.tokenMap=new Map,this.engine=void 0,this.chainId=A,this.cluster=U.ef,this.loading=!1,this.queue=[],this._init()}};var Q=n(95418);const W=new T,F=(0,s.createContext)({}),G=({children:e})=>{const t=(0,o.u5)(),{mints:n,pools:i}=(0,o.Qy)((e=>e)),a=(0,s.useCallback)((async(...e)=>await t((0,E.ih)(...e)).unwrap()),[t]),c=(0,s.useCallback)((async e=>{var t;if(!Q.account.isAddress(e))throw new Error("Invalid mint address");const n=await W.findByAddress(e);if(null!==n&&void 0!==n&&n.decimals)return n.decimals;if(Object.values(i).findIndex((({mint_lpt:t})=>t===e))>=0)return 9;const s=await a({address:e});if(null!==(t=s[e])&&void 0!==t&&t.decimals)return s[e].decimals;throw new Error("Cannot find mint decimals")}),[a,i]),d=(0,s.useMemo)((()=>({mints:n,getMint:a,getDecimals:c,tokenProvider:W})),[n,a,c]);return(0,r.jsx)(F.Provider,{value:d,children:e})},z=({children:e})=>(0,r.jsx)(F.Consumer,{children:t=>s.Children.map(e,(e=>(0,s.cloneElement)(e,{...t})))}),J=e=>{class t extends s.Component{render(){const{forwardedRef:t,...n}=this.props;return(0,r.jsx)(z,{children:(0,r.jsx)(e,{ref:t,...n})})}}return(0,s.forwardRef)(((e,n)=>(0,r.jsx)(t,{...e,ref:n})))},Y=()=>(0,s.useContext)(F)},3007:(e,t,n)=>{n.d(t,{Z:()=>c,f:()=>d});var s=n(15454),i=n.n(s),o=n(95418),r=n(83868);class a{constructor(e){if(this.dbName=void 0,this.driver=void 0,this.ipfs=void 0,this.createInstance=e=>i().createInstance({driver:this.driver,name:this.dbName,storeName:e}),this.dropInstance=async e=>{const t=this.createInstance(e);return await t.clear(),await i().dropInstance({name:this.dbName,storeName:e})},this.all=async()=>{let e={};const t=(await this.createInstance("sentre").getItem("appIds")||[]).flat().concat(["sentre"]);for(const n of t){e[n]={};const t=this.createInstance(n);await t.iterate(((t,s)=>{e[n][s]=t}))}return e},this.fetch=async e=>await this.ipfs.get(e),this.backup=async()=>{const e=await this.all();return await this.ipfs.set(e)},this.restore=async e=>{const t=await this.fetch(e);for(const n in t){const e=await this.createInstance(n);for(const s in t[n]){const i=t[n][s];await e.setItem(s,i)}}return t},!o.account.isAddress(e))throw new Error("Invalid address");this.dbName=e,this.driver=[i().WEBSQL,i().LOCALSTORAGE],this.ipfs=new r.Z}}const c=a,d=(e,t)=>o.account.isAddress(e)?new a(e).createInstance(t):void 0}}]);
//# sourceMappingURL=615.2ee0ce4c.chunk.js.map