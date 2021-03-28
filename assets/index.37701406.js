import{r as e,j as t,G as n,c as r,u as o,a as i,b as a,C as s,g as c,d as l,V as d}from"./vendor.217f4835.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,i)=>{const a=new URL(e,r);if(self[t].moduleMap[a])return n(self[t].moduleMap[a]);const s=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){i(new Error(`Failed to import: ${e}`)),o(c)},onload(){n(self[t].moduleMap[a]),o(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const u=e.createContext(null);function p({children:t,fetcher:n}){return e.createElement(u.Provider,{value:{fetcher:n}},t)}function f(e,t=""){return`https://ipfs.io/ipfs/${e}${t}`}function h(e,t=f){const n=e.match(/^ipfs:\/\/ipfs\/([^\/]+)(\/.+)?$/);if(n){const[,e,r=""]=n;return t(e,r)}return/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/.test(e)?`https://ipfs.io/ipfs/${e}`:e}function m(e,t){return e=h(e=function(e){try{const t=new URL(e);return"api.niftygateway.com"!==t.host?e:(t.pathname=t.pathname+"/",String(t))}catch(t){return e}}(e=function(e,t){try{const n=new URL(e);return"api.opensea.io"===n.host&&n.pathname.includes("0x%7Bid%7D")?(n.pathname=n.pathname.replace(/0x%7Bid%7D/g,t),n.searchParams.set("format","json"),String(n)):e}catch(n){return e}}(e,t)))}const g=["function tokenURI(uint256 _tokenId) external view returns (string)","function uri(uint256 _id) external view returns (string)"];async function b(e){const t=await fetch(e);if(!t.ok)throw new Error("Error when trying to request "+e);let n="application/json"===t.headers.get("content-type")?await t.json():{name:"",description:"",image:e};if(function(e){var t,n,r,o,i,a,s,c,l,d,u,p;if(!e||"object"!=typeof e)return!1;const f=e;return"Asset Metadata"===f.title&&"object"===f.type&&"string"==typeof(null===(n=null===(t=f.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)&&"string"==typeof(null===(o=null===(r=f.properties)||void 0===r?void 0:r.image)||void 0===o?void 0:o.description)&&"string"==typeof(null===(a=null===(i=f.properties)||void 0===i?void 0:i.description)||void 0===a?void 0:a.description)&&"string"===(null===(c=null===(s=f.properties)||void 0===s?void 0:s.name)||void 0===c?void 0:c.type)&&"string"===(null===(d=null===(l=f.properties)||void 0===l?void 0:l.image)||void 0===d?void 0:d.type)&&"string"===(null===(p=null===(u=f.properties)||void 0===u?void 0:u.description)||void 0===p?void 0:p.type)}(n)&&(n=function(e){var t,n,r,o,i,a;return{name:(null===(n=null===(t=null==e?void 0:e.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)||"",description:(null===(o=null===(r=null==e?void 0:e.properties)||void 0===r?void 0:r.description)||void 0===o?void 0:o.description)||"",image:(null===(a=null===(i=null==e?void 0:e.properties)||void 0===i?void 0:i.image)||void 0===a?void 0:a.description)||""}}(n)),!function(e){return!(!e||"object"!=typeof e)&&("name"in e&&"image"in e&&"description"in e)}(n))throw new Error("Invalid data received");return function(e){return{...e,image:(t=e.image,h(t))};var t}({name:n.name||"",image:n.image||"",description:n.description||""})}function v(t,n,r){return function(t,{retryDelay:n=2e3}={}){const[r,o]=e.useState({loading:!0,error:null,result:null});return e.useEffect((()=>{let e,r=!1;const i=async()=>{o({loading:!0,error:null,result:null});try{const e=await t();r||o({loading:!1,error:null,result:e})}catch(a){if(r)return;o({loading:!1,error:a,result:null}),e=setTimeout((()=>{r||i()}),n)}};return i(),()=>{clearTimeout(e),r=!0}}),[t,n]),r}(e.useCallback((async()=>{if("0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"===n)return{name:`CryptoPunk ${e=r}`,description:'\n  10,000 unique collectible characters with proof of ownership stored on the\n  Ethereum blockchain. The project that inspired the modern CryptoArt\n  movement. Featured in Mashable, The Financial Times, The Paris Review,\n  Salon, The Outline, BreakerMag, Christie\'s of London, Art|Basel, The PBS\n  NewsHour and The New York Times. Currently showing at the ZKM Center for Art\n  and Media in Karlsruhe, Germany as part of the Open Codes Exhibition. The\n  first "Non-Fungible Token," and inspiration for the Ethereum ERC-721\n  standard that powers most digital art and collectibles.\n',image:`https://www.larvalabs.com/cryptopunks/cryptopunk${e}.png`};var e;const o=new t.config.ethers.Contract(n,g,t.config.provider);return b(m(await Promise.any([o.uri(r),o.tokenURI(r)]),r))}),[n,r,t]))}const w="#a669a2",x="#dddddd",y="#000000";function k({children:o}){return t(e.Fragment,null,t(n,{styles:r`
          @font-face {
            font-family: "IBM Plex Mono";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(IBMPlexMono.woff2) format("woff2");
          }
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
          body,
          h1 {
            margin: 0;
            font: 16px/1.4 "IBM Plex Mono", monospace;
          }
          body,
          a {
            color: ${w};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${w};
          }
          a:focus-visible {
            background: ${w};
            color: ${x};
          }
          #root {
            display: grid;
            justify-content: center;
            padding: 0 80px;
            max-width: 1400px;
            margin: 0 auto;
          }
        `}),o)}function $({swap:e=!1}){const n=[t("a",{key:"by",href:"https://spectre.xyz/",target:"_blank"},"by spectre_"),t("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return t("nav",{css:r`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},e?[...n].reverse():n)}function E(){return t("footer",{css:r`
        padding-top: 60px;
      `},t($,{swap:!0}))}const M=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function j(){return M[Math.floor(Math.random()*M.length)]}function C(){const t=e.useRef(null);return e.useEffect((()=>function(e,t=1e3/60){const n="function"==typeof t?t:()=>t;let r,o=Date.now()-n();const i=()=>{r=requestAnimationFrame(i);const t=Date.now();t-o<n()||(o=t,e())};return i(),()=>cancelAnimationFrame(r)}((()=>{t.current&&(t.current.innerHTML=j())}),500)),[]),t}function R(){return t("header",{css:r`
        position: relative;
        padding: 0 0 60px;
      `},t($,null),t(T,null),t(A,null))}function T(){const e=C(),{below:n}=o(),i=n(1e3),a=n(800);return t("h1",{title:"useNft()",css:r`
        margin-top: 24px;
        font-size: ${i?"30px":"40px"};
        text-align: center;
      `},"let"," ",t("span",{ref:e,css:r`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},j())," ","= ",a&&t("br",null),"useNft(",a?"addr":"address",", id)")}function A(){return t("p",{css:r`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch NFTs from React − no matter how they were minted.")}function F(n){const r=e.useRef(null);return e.useEffect((()=>{const e=r.current;null!==e&&(e.muted=!0,e.setAttribute("autoplay",""),e.setAttribute("playsinline",""))}),[]),t("video",{ref:r,...n,tabIndex:-1})}function P({contract:n,tokenId:r,service:o,url:i}){const a=function(t,n){const r=e.useContext(u);if(null===r)throw new Error("Please wrap your app with <NftProvider />");return r.fetcher.useNft(r.fetcher,t,n)}(n,r);return a.loading?t(I,null,"Loading…"):a.error?t(I,null,"Error."):t(I,{url:i},t(B,{service:o,nft:a.result}))}function I({url:e,children:n}){return t("a",{...e?{href:e,target:"_blank"}:{},css:r`
        display: grid;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;

        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${w};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${w};
          box-shadow: 0 0 0 2px ${w};
        }
      `},t("section",{css:r`
          display: grid;
          height: 100%;
          place-items: center;
          grid-template-columns: 100%;
          background: #123;
        `},n))}function B({service:e,nft:n}){const o=(null==n?void 0:n.name)||"Untitled",i=(null==n?void 0:n.description)||"−",a=(null==n?void 0:n.image)||"";return t("div",{css:r`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: relative;
      `},t("div",{css:r`
          width: 100%;
          height: 200px;
          background: ${w};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% calc(50% - 4px);
          }
        `},a.endsWith(".mp4")?t(F,{type:"video/mp4",src:a,height:"200"}):t("img",{src:a,height:"200",alt:""})),t("h1",{css:r`
          display: flex;
          align-items: center;
          width: 100%;
          height: 60px;
          margin: 0;
          padding: 0 20px;
          text-align: center;
          white-space: nowrap;

          // truncating
          span {
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `},t("span",{title:o},o)),t("p",{title:i,css:r`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `},i),t("div",{css:r`
          position: absolute;
          bottom: 0;
          padding: 2px 10px;
          border-radius: 0 0 0 3px;
          color: ${y};
          background: ${w};
        `},e))}function U({nfts:n}){const[o,s]=e.useState(0),c=i(n.length,{progress:o,config:{mass:.5,tension:400,friction:30}});return e.useEffect((()=>s(1)),[]),t("div",{css:r`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        grid-auto-rows: 430px;
      `},c.map((({progress:e},r)=>{const[o,i,s,c]=n[r];return t(a.div,{key:o+i,style:{opacity:e,transform:e.to((e=>`translate3d(0, ${10*(1-e)}px, 0)`))}},t(P,{contract:o,service:s,tokenId:i,url:c}))})))}var N=[["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2299"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"]];const _=function({ethers:e,provider:t}){return{config:{ethers:e,provider:t},useNft:v}}({ethers:{Contract:s},provider:c("homestead",{infura:{}.VITE_INFURA_KEY})});function D(){return t(p,{fetcher:_},t(k,null,t(R,null),t(U,{nfts:N}),t(E,null)))}l.render(t(e.StrictMode,null,t(d,null,t(D,null))),document.getElementById("root"));
