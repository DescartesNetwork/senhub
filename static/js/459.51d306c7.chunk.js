"use strict";(globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[]).push([[459],{80039:(e,t,n)=>{n.r(t),n.d(t,{AccountProvider:()=>y,MintProvider:()=>Z,PoolProvider:()=>f,UIProvider:()=>d,WalletProvider:()=>v,useAccount:()=>R,useMint:()=>W,usePool:()=>g,useUI:()=>u,useWallet:()=>b,withAccount:()=>M,withMint:()=>F,withPool:()=>w,withUI:()=>h,withWallet:()=>I});var s=n(92950),i=n(99019),r=n(87358),o=n(87482),a=n(45263);const c=(0,s.createContext)({}),d=e=>{let{children:t,appId:n,style:d={},antd:l=!1}=e;const h=(0,r.u5)(),{ui:u}=(0,r.Qy)((e=>e)),m=(0,s.useCallback)((async function(){return await h((0,o.AY)(...arguments)).unwrap()}),[h]),f=(0,s.useMemo)((()=>({ui:u,setBackground:m})),[u,m]),p=l?{getPopupContainer:()=>document.getElementById(n),..."object"===typeof l?l:{}}:void 0;return(0,a.jsx)(c.Provider,{value:f,children:(0,a.jsx)("section",{id:n,style:{height:"100%",backgroundColor:"transparent",...d},children:p?(0,a.jsx)(i.ConfigProvider,{...p,children:t}):t})})},l=e=>{let{children:t}=e;return(0,a.jsx)(c.Consumer,{children:e=>s.Children.map(t,(t=>(0,s.cloneElement)(t,{...e})))})},h=e=>{class t extends s.Component{render(){const{forwardedRef:t,...n}=this.props;return(0,a.jsx)(l,{children:(0,a.jsx)(e,{ref:t,...n})})}}return(0,s.forwardRef)(((e,n)=>(0,a.jsx)(t,{...e,ref:n})))},u=()=>(0,s.useContext)(c),m=(0,s.createContext)({}),f=e=>{let{children:t}=e;const{pools:n}=(0,r.Qy)((e=>e)),i=(0,s.useMemo)((()=>({pools:n})),[n]);return(0,a.jsx)(m.Provider,{value:i,children:t})},p=e=>{let{children:t}=e;return(0,a.jsx)(m.Consumer,{children:e=>s.Children.map(t,(t=>(0,s.cloneElement)(t,{...e})))})},w=e=>{class t extends s.Component{render(){const{forwardedRef:t,...n}=this.props;return(0,a.jsx)(p,{children:(0,a.jsx)(e,{ref:t,...n})})}}return(0,s.forwardRef)(((e,n)=>(0,a.jsx)(t,{...e,ref:n})))},g=()=>(0,s.useContext)(m),x=(0,s.createContext)({}),v=e=>{let{children:t}=e;const{wallet:n}=(0,r.Qy)((e=>e)),i=(0,s.useMemo)((()=>({wallet:n})),[n]);return(0,a.jsx)(x.Provider,{value:i,children:t})},C=e=>{let{children:t}=e;return(0,a.jsx)(x.Consumer,{children:e=>s.Children.map(t,(t=>(0,s.cloneElement)(t,{...e})))})},I=e=>{class t extends s.Component{render(){const{forwardedRef:t,...n}=this.props;return(0,a.jsx)(C,{children:(0,a.jsx)(e,{ref:t,...n})})}}return(0,s.forwardRef)(((e,n)=>(0,a.jsx)(t,{...e,ref:n})))},b=()=>(0,s.useContext)(x),k=(0,s.createContext)({}),y=e=>{let{children:t}=e;const{accounts:n}=(0,r.Qy)((e=>e)),i=(0,s.useMemo)((()=>({accounts:n})),[n]);return(0,a.jsx)(k.Provider,{value:i,children:t})},j=e=>{let{children:t}=e;return(0,a.jsx)(k.Consumer,{children:e=>s.Children.map(t,(t=>(0,s.cloneElement)(t,{...e})))})},M=e=>{class t extends s.Component{render(){const{forwardedRef:t,...n}=this.props;return(0,a.jsx)(j,{children:(0,a.jsx)(e,{ref:t,...n})})}}return(0,s.forwardRef)(((e,n)=>(0,a.jsx)(t,{...e,ref:n})))},R=()=>(0,s.useContext)(k);var P=n(95418),E=n(33015),U=n(94757),B=n.n(U),L=n(67845),S=n(15190);const q=e=>({symbol:"SOL",name:"Solana",address:"11111111111111111111111111111111",decimals:9,chainId:e,extensions:{coingeckoId:"solana"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"}),A=e=>({symbol:"SNTR",name:"Sentre",address:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",decimals:9,chainId:e,extensions:{coingeckoId:"sentre"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M/logo.png"}),N=[q(103),A(103),{symbol:"wBTC",name:"Wrapped Bitcoin",address:"8jk4eJymMfNZV9mkRNxJEt2VJ3pRvdJvD5FE94GXGBPM",decimals:9,chainId:103,extensions:{coingeckoId:"bitcoin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/qfnqNqs3nCAHjnyCgLRDbBtq4p2MtHZxw8YjSyYhPoL/logo.png"},{symbol:"wETH",name:"Ethereum",address:"27hdcZv7RtuMp75vupThR3T4KLsL61t476eosMdoec4c",decimals:9,chainId:103,extensions:{coingeckoId:"ethereum"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png"},{symbol:"UNI",name:"Uniswap",address:"FVZFSXu3yn17YdcxLD72TFDUqkdE5xZvcW18EUpRQEbe",decimals:9,chainId:103,extensions:{coingeckoId:"uniswap"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3MVa4e32PaKmPxYUQ6n8vFkWtCma68Ld7e7fTktWDueQ/logo.png"},{symbol:"USDC",name:"USD Coin",address:"2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj",decimals:9,chainId:103,extensions:{coingeckoId:"usd-coin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"}];const D=new class{constructor(){var e=this;this.tokenMap=void 0,this.engine=void 0,this.chainId=void 0,this.cluster=void 0,this.loading=void 0,this.queue=void 0,this._init=async()=>this.tokenMap.size&&this.engine?[this.tokenMap,this.engine]:new Promise((async e=>{if(this.loading)return this.queue.push(e);this.loading=!0;let t=await(await(new L.DK).resolve()).filterByChainId(this.chainId).getList();for("devnet"===this.cluster&&(t=t.concat(N)),t="testnet"===this.cluster?t.concat([A(102),q(102)]):t.concat([q(101)]),t.forEach((e=>this.tokenMap.set(e.address,e))),this.engine=B()((function(){this.ref("address"),this.field("symbol"),this.field("name"),t.forEach((e=>this.add(e)))})),e([this.tokenMap,this.engine]);this.queue.length;)this.queue.shift()([this.tokenMap,this.engine]);this.loading=!1})),this.all=async()=>{const[e]=await this._init();return Array.from(e.values())},this.findByAddress=async e=>{const[t]=await this._init();return t.get(e)},this.find=async function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const[s,i]=await e._init();let r=[];return t?(i.search(t).forEach((e=>{let{ref:t}=e;if(r.findIndex((e=>{let{address:n}=e;return n===t}))<0){const e=s.get(t);e&&r.push(e)}})),r.slice(0,n)):[]},this.tokenMap=new Map,this.engine=void 0,this.chainId=S.Bv,this.cluster=S.ef,this.loading=!1,this.queue=[],this._init()}},T=(0,s.createContext)({}),Z=e=>{let{children:t}=e;const n=(0,r.u5)(),{mints:i,pools:o}=(0,r.Qy)((e=>e)),c=(0,s.useCallback)((async function(){return await n((0,E.ih)(...arguments)).unwrap()}),[n]),d=(0,s.useCallback)((async e=>{var t;if(!P.account.isAddress(e))throw new Error("Invalid mint address");const n=await D.findByAddress(e);if(null!==n&&void 0!==n&&n.decimals)return n.decimals;if(Object.values(o).findIndex((t=>{let{mint_lpt:n}=t;return n===e}))>=0)return 9;const s=await c({address:e});if(null!==(t=s[e])&&void 0!==t&&t.decimals)return s[e].decimals;throw new Error("Cannot find mint decimals")}),[c,o]),l=(0,s.useMemo)((()=>({mints:i,getMint:c,getDecimals:d,tokenProvider:D})),[i,c,d]);return(0,a.jsx)(T.Provider,{value:l,children:t})},Q=e=>{let{children:t}=e;return(0,a.jsx)(T.Consumer,{children:e=>s.Children.map(t,(t=>(0,s.cloneElement)(t,{...e})))})},F=e=>{class t extends s.Component{render(){const{forwardedRef:t,...n}=this.props;return(0,a.jsx)(Q,{children:(0,a.jsx)(e,{ref:t,...n})})}}return(0,s.forwardRef)(((e,n)=>(0,a.jsx)(t,{...e,ref:n})))},W=()=>(0,s.useContext)(T)},3007:(e,t,n)=>{n.d(t,{Z:()=>c,f:()=>d});var s=n(15454),i=n.n(s),r=n(95418),o=n(83868);class a{constructor(e){if(this.dbName=void 0,this.driver=void 0,this.ipfs=void 0,this.createInstance=e=>i().createInstance({driver:this.driver,name:this.dbName,storeName:e}),this.dropInstance=async e=>{const t=this.createInstance(e);return await t.clear(),await i().dropInstance({name:this.dbName,storeName:e})},this.all=async()=>{let e={};const t=(await this.createInstance("sentre").getItem("appIds")||[]).flat().concat(["sentre"]);for(const n of t){e[n]={};const t=this.createInstance(n);await t.iterate(((t,s)=>{e[n][s]=t}))}return e},this.fetch=async e=>await this.ipfs.get(e),this.backup=async()=>{const e=await this.all();return await this.ipfs.set(e)},this.restore=async e=>{const t=await this.fetch(e);for(const n in t){const e=await this.createInstance(n);for(const s in t[n]){const i=t[n][s];await e.setItem(s,i)}}return t},!r.account.isAddress(e))throw new Error("Invalid address");this.dbName=e,this.driver=[i().WEBSQL,i().LOCALSTORAGE],this.ipfs=new o.Z}}const c=a,d=(e,t)=>r.account.isAddress(e)?new a(e).createInstance(t):void 0}}]);
//# sourceMappingURL=459.51d306c7.chunk.js.map