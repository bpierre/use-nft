import{r as e,H as t,j as n,c as o,G as r,u as i,a,b as s,C as c,g as d,d as l,V as u}from"./vendor.f69bcfd3.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,i)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return n(self[t].moduleMap[a]);const s=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){i(new Error(`Failed to import: ${e}`)),r(c)},onload(){n(self[t].moduleMap[a]),r(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const p=e.createContext(null);function f({children:t,fetcher:n}){return e.createElement(p.Provider,{value:{fetcher:n}},t)}function h(e,t=""){return`https://ipfs.io/ipfs/${e}${t}`}const m=/^ipfs:\/\/ipfs\/([^/]+)(\/.+)?$/,g=/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/;function v(e,t=h){const n=m.exec(e);if(n){const[,e,o=""]=n;return t(e,o)}return g.test(e)?t(e):e}function b(e,t){return e=v(e=function(e){try{const t=new URL(e);return"api.niftygateway.com"!==t.host?e:(t.pathname=t.pathname+"/",String(t))}catch(t){return e}}(e=function(e,t){try{const n=new URL(e);return"api.opensea.io"===n.host&&n.pathname.includes("0x%7Bid%7D")?(n.pathname=n.pathname.replace(/0x%7Bid%7D/g,t),n.searchParams.set("format","json"),String(n)):e}catch(n){return e}}(e,t)))}function w(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}const x=["function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)"];async function y(e){const t=v(`ipfs://ipfs/bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava/${e.slice(4,6)}/${e}.png`);var n;return function(e,{scale:t=1,padding:n=0}={}){const o=e.naturalWidth*t,r=e.naturalHeight*t,i=Math.max(o*n,r*n),a=document.createElement("canvas");a.width=o+2*i,a.height=r+2*i;const s=a.getContext("2d");return null===s?null:(s.imageSmoothingEnabled=!1,s.drawImage(e,i,i,o,r),a.toDataURL())}(await(n=t,new Promise(((e,t)=>{const o=new Image;o.src=n,o.crossOrigin="",o.onload=()=>e(o),o.onerror=e=>t(e)}))),{scale:4,padding:.125})}const k=["function tokenURI(uint256 _tokenId) external view returns (string)","function uri(uint256 _id) external view returns (string)"];async function $(e,t,n){const o=new n.ethers.Contract(t,k,n.provider);return async function(e){const t=await fetch(e);if(!t.ok)throw new Error("Error when trying to request "+e);let n;try{n=await t.json()}catch(o){n={name:"",description:"",image:e}}(function(e){var t,n,o,r,i,a,s,c,d,l,u,p;if(!e||"object"!=typeof e)return!1;const f=e;return"Asset Metadata"===f.title&&"object"===f.type&&"string"==typeof(null===(n=null===(t=f.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)&&"string"==typeof(null===(r=null===(o=f.properties)||void 0===o?void 0:o.image)||void 0===r?void 0:r.description)&&"string"==typeof(null===(a=null===(i=f.properties)||void 0===i?void 0:i.description)||void 0===a?void 0:a.description)&&"string"===(null===(c=null===(s=f.properties)||void 0===s?void 0:s.name)||void 0===c?void 0:c.type)&&"string"===(null===(l=null===(d=f.properties)||void 0===d?void 0:d.image)||void 0===l?void 0:l.type)&&"string"===(null===(p=null===(u=f.properties)||void 0===u?void 0:u.description)||void 0===p?void 0:p.type)})(n)&&(n=function(e){var t,n,o,r,i,a;return{name:(null===(n=null===(t=null==e?void 0:e.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)||"",description:(null===(r=null===(o=null==e?void 0:e.properties)||void 0===o?void 0:o.description)||void 0===r?void 0:r.description)||"",image:(null===(a=null===(i=null==e?void 0:e.properties)||void 0===i?void 0:i.image)||void 0===a?void 0:a.description)||""}}(n));if(!function(e){return!(!e||"object"!=typeof e)&&("name"in e&&"image"in e&&"description"in e)}(n))throw new Error("Invalid data received");return function(e){return{...e,image:(t=e.image,v(t))};var t}({name:n.name||"",image:n.image||"",description:n.description||""})}(b(await Promise.any([o.uri(e),o.tokenURI(e)]),e))}const C="#a669a2",I="#dddddd",E="#000000";function M({children:t}){return n(e.Fragment,null,n(r,{styles:o`
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
          h1,
          button {
            margin: 0;
            font: 16px/1.4 "IBM Plex Mono", monospace;
          }
          button {
            cursor: pointer;
          }
          body,
          a {
            color: ${C};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${C};
          }
          a:focus-visible {
            background: ${C};
            color: ${I};
          }
        `}),n("main",{css:o`
          max-width: 1440px;
          min-width: 420px;
          margin: 0 auto;
          padding: 0 80px;
          @media (max-width: 900px) {
            padding: 0 40px;
          }
        `},t))}function j({swap:e=!1}){const t=[n("a",{key:"by",href:"https://spectre.xyz/",target:"_blank"},"by spectre_"),n("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return n("nav",{css:o`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},e?[...t].reverse():t)}function R(){return n("footer",{css:o`
        padding-top: 50px;
      `},n(j,{swap:!0}))}const D=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function A(){return D[Math.floor(Math.random()*D.length)]}function F(){const t=e.useRef(null);return e.useEffect((()=>function(e,t=1e3/60){const n="function"==typeof t?t:()=>t;let o,r=Date.now()-n();const i=()=>{o=requestAnimationFrame(i);const t=Date.now();t-r<n()||(r=t,e())};return i(),()=>cancelAnimationFrame(o)}((()=>{t.current&&(t.current.innerHTML=A())}),500)),[]),t}function U(){return n("header",{css:o`
        position: relative;
        padding: 0 0 80px;
      `},n(j,null),n(_,null),n(L,null))}function _(){const e=F(),{below:t}=i(),r=t(1e3),a=t(800);return n("h1",{title:"useNft()",css:o`
        margin-top: 24px;
        font-size: ${r?"30px":"40px"};
        text-align: center;
      `},"let"," ",n("span",{ref:e,css:o`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},A())," ","= ",a&&n("br",null),"useNft(",a?"addr":"address",", id)")}function L(){return n("p",{css:o`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch NFT metadata from anywhere.")}function P(t){const o=e.useRef(null);return e.useEffect((()=>{const e=o.current;null!==e&&(e.muted=!0,e.setAttribute("autoplay",""),e.setAttribute("playsinline",""))}),[]),n("video",{ref:o,...t,tabIndex:-1})}function B({contract:o,tokenId:r,service:i,url:a}){const{nft:s,loading:c,error:d,reload:l}=function(n,o){const r=e.useContext(p);if(null===r)throw new Error("Please wrap your app with <NftProvider />");const{fetcher:i}=r,a=e.useCallback((()=>i.fetchNft(n,o)),[n,i,o]),s=t(n+o,a);return e.useMemo((()=>{const{error:e,data:t,revalidate:n}=s,o=()=>n();return void 0===e&&void 0===t?{error:void 0,loading:!0,nft:void 0,reload:o,status:"loading"}:void 0!==e?{error:e,loading:!1,nft:void 0,reload:o,status:"error"}:{error:void 0,loading:!1,nft:t,reload:o,status:"done"}}),[s])}(o,r);return n(T,{url:s&&a,label:i},c?n(N,null):d?n(z,{error:d,reload:l}):n(S,{nft:s}))}function T({label:e,url:t,children:r}){return n("a",{...t?{href:t,target:"_blank"}:{},css:o`
        display: grid;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;

        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${C};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${C};
          box-shadow: 0 0 0 2px ${C};
        }
      `},n("section",{css:o`
          display: grid;
          height: 100%;
          place-items: center;
          grid-template-columns: 100%;
          background: #123;
        `},n("div",{css:o`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            position: relative;
          `},r,n("div",{css:o`
              position: absolute;
              bottom: 0;
              padding: 2px 10px;
              border-radius: 0 0 0 3px;
              color: ${E};
              background: ${C};
            `},e))))}function N(){return n("div",{css:o`
        display: grid;
        height: 100%;
        place-items: center;
      `},"Loading…")}function z({error:e,reload:t}){return n("div",{css:o`
        display: grid;
        height: 100%;
        place-items: center;
        text-align: center;
        line-height: 2;
      `},n("p",null,"Loading error.",n("br",null)," ",n("button",{onClick:t},"Retry?")))}function S({nft:t}){if(!t)return null;const r=t.name||"Untitled",i=t.description||"−",a=t.image||"";return n(e.Fragment,null,n("div",{css:o`
          width: 100%;
          height: 280px;
          background: ${C};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        `},a.endsWith(".mp4")?n(P,{type:"video/mp4",src:a,height:"280"}):n("img",{src:a,height:"280",alt:""})),n("h1",{css:o`
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
        `},n("span",{title:r},r)),n("p",{title:i,css:o`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `},i))}function q({nfts:t}){const[r,i]=e.useState(0),c=a(t.length,{progress:r,config:{mass:.5,tension:400,friction:30}});return e.useEffect((()=>i(1)),[]),n("div",{css:o`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-auto-rows: 510px;
      `},c.map((({progress:e},o)=>{const[r,i,a,c]=t[o];return n(s.div,{key:r+i,style:{opacity:e,transform:e.to((e=>`translate3d(0, ${10*(1-e)}px, 0)`))}},n(B,{contract:r,service:a,tokenId:i,url:c}))})))}var O=[["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2299"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"],["0x06012c8cf97bead5deae237070f9587f8e7a266d","1976426","CryptoKitties","https://www.cryptokitties.co/kitty/1976426"],["0x79986af15539de2db9a5086382daeda917a9cf0c","1162","Cryptovoxels","https://www.cryptovoxels.com/parcels/1162"],["0x7c40c393dc0f283f318791d746d894ddd3693572","8549","MoonCats","https://opensea.io/assets/0x7c40c393dc0f283f318791d746d894ddd3693572/8549"]];const G=function({ethers:e,provider:t}){const n={ethers:e,provider:t};return{config:n,async fetchNft(e,t){if(function(e){return w(e,"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb")}(e))return{name:`CryptoPunk ${o=t}`,description:'\n  10,000 unique collectible characters with proof of ownership stored on the\n  Ethereum blockchain. The project that inspired the modern CryptoArt movement.\n  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721\n  standard that powers most digital art and collectibles.\n',image:`https://www.larvalabs.com/cryptopunks/cryptopunk${o}.png`};var o;if(function(e){return w(e,"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d")}(e))return async function(e){var t,n,o;const r=await fetch(`https://api.cryptokitties.co/v3/kitties/${e}`),i=await r.json();return{name:null!==(t=null==i?void 0:i.name)&&void 0!==t?t:"Unknown",description:null!==(n=null==i?void 0:i.bio)&&void 0!==n?n:"−",image:null!==(o=null==i?void 0:i.image_url)&&void 0!==o?o:""}}(t);if(function(e){return w(e,"0x7c40c393dc0f283f318791d746d894ddd3693572")}(e))return async function(e,t){var n,o;const r=new t.ethers.Contract("0x7c40c393dc0f283f318791d746d894ddd3693572",x,t.provider),i=null!==(n=await r._tokenIDToCatID(e))&&void 0!==n?n:"";return{name:`Wrapped MoonCat #${e}`,description:`The (unofficial) wrapped version of MoonCats Rescue. catId: ${i}.`,image:null!==(o=await y(i))&&void 0!==o?o:""}}(t,n);if(function(e){return/^0x[a-fA-F0-9]{40}$/.test(e)}(e))return $(t,e,n);throw new Error("Invalid contract address or token ID provided")}}}({ethers:{Contract:c},provider:d("homestead",{infura:{}.VITE_INFURA_KEY})});function H(){return n(f,{fetcher:G},n(M,null,n(U,null),n(q,{nfts:O}),n(R,null)))}l.render(n(e.StrictMode,null,n(u,null,n(H,null))),document.getElementById("root"));
