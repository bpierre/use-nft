import{r as e,H as t,j as n,c as r,G as o,u as a,a as i,b as s,C as c,g as d,d as p,V as l}from"./vendor.f69bcfd3.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,a)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return n(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),o(c)},onload(){n(self[t].moduleMap[i]),o(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const u=e.createContext(null);function f({children:t,fetcher:n}){return e.createElement(u.Provider,{value:{fetcher:n}},t)}const m={name:"",description:"",image:""};function h(e,t=""){return`https://ipfs.io/ipfs/${e}${t}`}const g=/^ipfs:\/\/ipfs\/([^/]+)(\/.+)?$/,b=/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/;function w(e,t=h){const n=g.exec(e);if(n){const[,e,r=""]=n;return t(e,r)}return b.test(e)?t(e):e}function x(e,t){return e=w(e=function(e){try{const t=new URL(e);return"api.niftygateway.com"!==t.host?e:(t.pathname=t.pathname+"/",String(t))}catch(t){return e}}(e=function(e,t){try{const n=new URL(e);return"api.opensea.io"===n.host&&n.pathname.includes("0x%7Bid%7D")?(n.pathname=n.pathname.replace(/0x%7Bid%7D/g,t),n.searchParams.set("format","json"),String(n)):e}catch(n){return e}}(e,t)))}function y(e,t){return e?.toLowerCase()===t?.toLowerCase()}async function v(e){const t=await fetch(e);if(!t.ok)throw new Error("Error when trying to request "+e);let n;try{n=await t.json()}catch(r){n={name:"",description:"",image:e}}if(function(e){if(!e||"object"!=typeof e)return!1;const t=e;return"Asset Metadata"===t.title&&"object"===t.type&&"string"==typeof t.properties?.name?.description&&"string"==typeof t.properties?.image?.description&&"string"==typeof t.properties?.description?.description&&"string"===t.properties?.name?.type&&"string"===t.properties?.image?.type&&"string"===t.properties?.description?.type}(n)&&(n=function(e){return{name:e?.properties?.name?.description||"",description:e?.properties?.description?.description||"",image:e?.properties?.image?.description||""}}(n)),!function(e){return!(!e||"object"!=typeof e)&&("name"in e&&"image"in e&&"description"in e)}(n))throw new Error("Invalid data received");return function(e){return{...e,image:(t=e.image,w(t))};var t}({name:n.name||"",image:n.image||"",description:n.description||""})}const k={address:"0x7c40c393dc0f283f318791d746d894ddd3693572",methodName:"_tokenIDToCatID",methodHash:"0xfe294644",humanReadableAbi:["function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)"]};async function $(e){const t=w(`ipfs://ipfs/bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava/${e.slice(4,6)}/${e}.png`);var n;return function(e,{scale:t=1,padding:n=0}={}){const r=e.naturalWidth*t,o=e.naturalHeight*t,a=Math.max(r*n,o*n),i=document.createElement("canvas");i.width=r+2*a,i.height=o+2*a;const s=i.getContext("2d");return null===s?null:(s.imageSmoothingEnabled=!1,s.drawImage(e,a,a,r,o),i.toDataURL())}(await(n=t,new Promise(((e,t)=>{const r=new Image;r.src=n,r.crossOrigin="",r.onload=()=>e(r),r.onerror=e=>t(e)}))),{scale:4,padding:.125})}const C=["function tokenURI(uint256 _tokenId) external view returns (string)","function uri(uint256 _id) external view returns (string)","function supportsInterface(bytes4 interfaceID) external view returns (bool)"];const I="#a669a2",E="#dddddd",M="#000000";function R({children:t}){return n(e.Fragment,null,n(o,{styles:r`
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
            color: ${I};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${I};
          }
          a:focus-visible {
            background: ${I};
            color: ${E};
          }
        `}),n("main",{css:r`
          max-width: 1440px;
          min-width: 420px;
          margin: 0 auto;
          padding: 0 80px;
          @media (max-width: 900px) {
            padding: 0 40px;
          }
        `},t))}function j({swap:e=!1}){const t=[n("a",{key:"by",href:"https://spectre.xyz/",target:"_blank"},"by spectre_"),n("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return n("nav",{css:r`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},e?[...t].reverse():t)}function A(){return n("footer",{css:r`
        padding-top: 50px;
      `},n(j,{swap:!0}))}const D=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function F(){return D[Math.floor(Math.random()*D.length)]}function U(){const t=e.useRef(null);return e.useEffect((()=>function(e,t=1e3/60){const n="function"==typeof t?t:()=>t;let r,o=Date.now()-n();const a=()=>{r=requestAnimationFrame(a);const t=Date.now();t-o<n()||(o=t,e())};return a(),()=>cancelAnimationFrame(r)}((()=>{t.current&&(t.current.innerHTML=F())}),500)),[]),t}function _(){return n("header",{css:r`
        position: relative;
        padding: 0 0 80px;
      `},n(j,null),n(L,null),n(P,null))}function L(){const e=U(),{below:t}=a(),o=t(1e3),i=t(800);return n("h1",{title:"useNft()",css:r`
        margin-top: 24px;
        font-size: ${o?"30px":"40px"};
        text-align: center;
      `},"let"," ",n("span",{ref:e,css:r`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},F())," ","= ",i&&n("br",null),"useNft(",i?"addr":"address",", id)")}function P(){return n("p",{css:r`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch NFT metadata from anywhere.")}function N(t){const r=e.useRef(null);return e.useEffect((()=>{const e=r.current;null!==e&&(e.muted=!0,e.setAttribute("autoplay",""),e.setAttribute("playsinline",""))}),[]),n("video",{ref:r,...t,tabIndex:-1})}function B({contract:r,tokenId:o,service:a,url:i}){const{nft:s,loading:c,error:d,reload:p}=function(n,r){const o=e.useContext(u);if(null===o)throw new Error("Please wrap your app with <NftProvider />");const{fetcher:a}=o,i=e.useCallback((()=>a?a.fetchNft(n,r):{...m}),[n,a,r]),s=t(n+r,i);return e.useMemo((()=>{const{error:e,data:t,revalidate:n}=s,r=()=>n();return void 0===e&&void 0===t?{error:void 0,loading:!0,nft:void 0,reload:r,status:"loading"}:void 0!==e?{error:e,loading:!1,nft:void 0,reload:r,status:"error"}:{error:void 0,loading:!1,nft:t,reload:r,status:"done"}}),[s])}(r,o);return n(T,{url:s&&i,label:a},c?n(z,null):d?n(S,{error:d,reload:p}):n(q,{nft:s}))}function T({label:e,url:t,children:o}){return n("a",{...t?{href:t,target:"_blank"}:{},css:r`
        display: grid;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;

        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${I};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${I};
          box-shadow: 0 0 0 2px ${I};
        }
      `},n("section",{css:r`
          display: grid;
          height: 100%;
          place-items: center;
          grid-template-columns: 100%;
          background: #123;
        `},n("div",{css:r`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            position: relative;
          `},o,n("div",{css:r`
              position: absolute;
              bottom: 0;
              padding: 2px 10px;
              border-radius: 0 0 0 3px;
              color: ${M};
              background: ${I};
            `},e))))}function z(){return n("div",{css:r`
        display: grid;
        height: 100%;
        place-items: center;
      `},"Loading…")}function S({error:e,reload:t}){return n("div",{css:r`
        display: grid;
        height: 100%;
        place-items: center;
        text-align: center;
        line-height: 2;
      `},n("p",null,"Loading error.",n("br",null)," ",n("button",{onClick:t},"Retry?")))}function q({nft:t}){if(!t)return null;const o=t.name||"Untitled",a=t.description||"−",i=t.image||"";return n(e.Fragment,null,n("div",{css:r`
          width: 100%;
          height: 280px;
          background: ${I};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        `},i.endsWith(".mp4")?n(N,{type:"video/mp4",src:i,height:"280"}):n("img",{src:i,height:"280",alt:""})),n("h1",{css:r`
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
        `},n("span",{title:o},o)),n("p",{title:a,css:r`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `},a))}function O({nfts:t}){const[o,a]=e.useState(0),c=i(t.length,{progress:o,config:{mass:.5,tension:400,friction:30}});return e.useEffect((()=>a(1)),[]),n("div",{css:r`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-auto-rows: 510px;
      `},c.map((({progress:e},r)=>{const[o,a,i,c]=t[r];return n(s.div,{key:o+a,style:{opacity:e,transform:e.to((e=>`translate3d(0, ${10*(1-e)}px, 0)`))}},n(B,{contract:o,service:i,tokenId:a,url:c}))})))}var H=[["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2299"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"],["0x06012c8cf97bead5deae237070f9587f8e7a266d","1976426","CryptoKitties","https://www.cryptokitties.co/kitty/1976426"],["0x79986af15539de2db9a5086382daeda917a9cf0c","1162","Cryptovoxels","https://www.cryptovoxels.com/parcels/1162"],["0x7c40c393dc0f283f318791d746d894ddd3693572","8549","MoonCats","https://opensea.io/assets/0x7c40c393dc0f283f318791d746d894ddd3693572/8549"]];const G={config:Q={ethers:{Contract:c},provider:d("homestead",{infura:{}.VITE_INFURA_KEY})},async fetchNft(e,t){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw new Error("Invalid contract address: "+e);var n;return function(e){return y(e,"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb")}(e)?{name:`CryptoPunk ${n=t}`,description:'\n  10,000 unique collectible characters with proof of ownership stored on the\n  Ethereum blockchain. The project that inspired the modern CryptoArt movement.\n  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721\n  standard that powers most digital art and collectibles.\n',image:`https://www.larvalabs.com/cryptopunks/cryptopunk${n}.png`}:function(e){return y(e,"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d")}(e)?async function(e){const t=await fetch(`https://api.cryptokitties.co/v3/kitties/${e}`),n=await t.json();return{name:n?.name??"Unknown",description:n?.bio??"−",image:n?.image_url??""}}(t):function(e){return y(e,k.address)}(e)?async function(e,t){const n=await t(k.address,e,k);return{name:`Wrapped MoonCat #${e}`,description:`The (unofficial) wrapped version of MoonCats Rescue. Original cat ID: ${n}.`,image:await $(n)??""}}(t,function(e){return async function(t,n,r){const o=new e.ethers.Contract(t,r.humanReadableAbi,e.provider);return await o[r.methodName](n)??""}}(Q)):v(await async function(e,t,n){const r=new n.ethers.Contract(e,C,n.provider);return x(await Promise.any([r.uri(t),r.tokenURI(t)]),t)}(e,t,Q))}};var Q;function V(){return n(f,{fetcher:G},n(R,null,n(_,null),n(O,{nfts:H}),n(A,null)))}p.render(n(e.StrictMode,null,n(l,null,n(V,null))),document.getElementById("root"));
