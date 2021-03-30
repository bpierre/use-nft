import{r as e,j as t,G as n,c as o,u as r,a as i,b as a,C as c,g as s,d,V as l}from"./vendor.217f4835.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,i)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return n(self[t].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){i(new Error(`Failed to import: ${e}`)),r(s)},onload(){n(self[t].moduleMap[a]),r(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/assets/");const u=e.createContext(null);function p({children:t,fetcher:n}){return e.createElement(u.Provider,{value:{fetcher:n}},t)}function f(t,n){const o=e.useContext(u);if(null===o)throw new Error("Please wrap your app with <NftProvider />");const{fetcher:r}=o;return function(t,{retryDelay:n=2e3}={}){const[o,r]=e.useState({loading:!0,error:null,result:null});return e.useEffect((()=>{let e,o=!1;const i=async()=>{r({loading:!0,error:null,result:null});try{const e=await t();o||r({loading:!1,error:null,result:e})}catch(a){if(o)return;r({loading:!1,error:a,result:null}),e=setTimeout((()=>{o||i()}),n)}};return i(),()=>{clearTimeout(e),o=!0}}),[t,n]),o}(e.useCallback((()=>r.fetchNft(t,n)),[t,r,n]))}function h(e,t=""){return`https://ipfs.io/ipfs/${e}${t}`}function m(e,t=h){const n=e.match(/^ipfs:\/\/ipfs\/([^\/]+)(\/.+)?$/);if(n){const[,e,o=""]=n;return t(e,o)}return/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/.test(e)?t(e):e}function g(e,t){return e=m(e=function(e){try{const t=new URL(e);return"api.niftygateway.com"!==t.host?e:(t.pathname=t.pathname+"/",String(t))}catch(t){return e}}(e=function(e,t){try{const n=new URL(e);return"api.opensea.io"===n.host&&n.pathname.includes("0x%7Bid%7D")?(n.pathname=n.pathname.replace(/0x%7Bid%7D/g,t),n.searchParams.set("format","json"),String(n)):e}catch(n){return e}}(e,t)))}function v(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}const b=["function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)"];async function w(e){const t=m(`ipfs://ipfs/bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava/${e.slice(4,6)}/${e}.png`),n=await(o=t,new Promise(((e,t)=>{const n=new Image;n.src=o,n.crossOrigin="",n.onload=()=>e(n),n.onerror=e=>t(e)})));var o;const r=4*n.naturalWidth,i=4*n.naturalHeight,a=.125*r,c=.125*i,s=document.createElement("canvas");s.width=r,s.height=i;const d=s.getContext("2d");return null===d?null:(d.imageSmoothingEnabled=!1,d.drawImage(n,a,c,r-2*a,i-2*c),s.toDataURL())}const y=["function tokenURI(uint256 _tokenId) external view returns (string)","function uri(uint256 _id) external view returns (string)"];async function x(e,t,n){const o=new n.ethers.Contract(t,y,n.provider);return async function(e){const t=await fetch(e);if(!t.ok)throw new Error("Error when trying to request "+e);let n;try{n=await t.json()}catch(o){n={name:"",description:"",image:e}}(function(e){var t,n,o,r,i,a,c,s,d,l,u,p;if(!e||"object"!=typeof e)return!1;const f=e;return"Asset Metadata"===f.title&&"object"===f.type&&"string"==typeof(null===(n=null===(t=f.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)&&"string"==typeof(null===(r=null===(o=f.properties)||void 0===o?void 0:o.image)||void 0===r?void 0:r.description)&&"string"==typeof(null===(a=null===(i=f.properties)||void 0===i?void 0:i.description)||void 0===a?void 0:a.description)&&"string"===(null===(s=null===(c=f.properties)||void 0===c?void 0:c.name)||void 0===s?void 0:s.type)&&"string"===(null===(l=null===(d=f.properties)||void 0===d?void 0:d.image)||void 0===l?void 0:l.type)&&"string"===(null===(p=null===(u=f.properties)||void 0===u?void 0:u.description)||void 0===p?void 0:p.type)})(n)&&(n=function(e){var t,n,o,r,i,a;return{name:(null===(n=null===(t=null==e?void 0:e.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)||"",description:(null===(r=null===(o=null==e?void 0:e.properties)||void 0===o?void 0:o.description)||void 0===r?void 0:r.description)||"",image:(null===(a=null===(i=null==e?void 0:e.properties)||void 0===i?void 0:i.image)||void 0===a?void 0:a.description)||""}}(n));if(!function(e){return!(!e||"object"!=typeof e)&&("name"in e&&"image"in e&&"description"in e)}(n))throw new Error("Invalid data received");return function(e){return{...e,image:(t=e.image,m(t))};var t}({name:n.name||"",image:n.image||"",description:n.description||""})}(g(await Promise.any([o.uri(e),o.tokenURI(e)]),e))}const k="#a669a2",$="#dddddd",C="#000000";function E({children:r}){return t(e.Fragment,null,t(n,{styles:o`
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
            color: ${k};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${k};
          }
          a:focus-visible {
            background: ${k};
            color: ${$};
          }
          #root {
            display: grid;
            justify-content: center;
            padding: 0 80px;
            max-width: 1400px;
            margin: 0 auto;
          }
        `}),r)}function I({swap:e=!1}){const n=[t("a",{key:"by",href:"https://spectre.xyz/",target:"_blank"},"by spectre_"),t("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return t("nav",{css:o`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},e?[...n].reverse():n)}function j(){return t("footer",{css:o`
        padding-top: 60px;
      `},t(I,{swap:!0}))}const M=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function D(){return M[Math.floor(Math.random()*M.length)]}function R(){const t=e.useRef(null);return e.useEffect((()=>function(e,t=1e3/60){const n="function"==typeof t?t:()=>t;let o,r=Date.now()-n();const i=()=>{o=requestAnimationFrame(i);const t=Date.now();t-r<n()||(r=t,e())};return i(),()=>cancelAnimationFrame(o)}((()=>{t.current&&(t.current.innerHTML=D())}),500)),[]),t}function A(){return t("header",{css:o`
        position: relative;
        padding: 0 0 60px;
      `},t(I,null),t(F,null),t(U,null))}function F(){const e=R(),{below:n}=r(),i=n(1e3),a=n(800);return t("h1",{title:"useNft()",css:o`
        margin-top: 24px;
        font-size: ${i?"30px":"40px"};
        text-align: center;
      `},"let"," ",t("span",{ref:e,css:o`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},D())," ","= ",a&&t("br",null),"useNft(",a?"addr":"address",", id)")}function U(){return t("p",{css:o`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch NFT metadata from anywhere.")}function _(n){const o=e.useRef(null);return e.useEffect((()=>{const e=o.current;null!==e&&(e.muted=!0,e.setAttribute("autoplay",""),e.setAttribute("playsinline",""))}),[]),t("video",{ref:o,...n,tabIndex:-1})}function P({contract:e,tokenId:n,service:o,url:r}){const i=f(e,n);return i.loading?t(L,null,"Loading…"):i.error?t(L,null,"Error."):t(L,{url:r},t(T,{service:o,nft:i.result}))}function L({url:e,children:n}){return t("a",{...e?{href:e,target:"_blank"}:{},css:o`
        display: grid;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;

        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${k};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${k};
          box-shadow: 0 0 0 2px ${k};
        }
      `},t("section",{css:o`
          display: grid;
          height: 100%;
          place-items: center;
          grid-template-columns: 100%;
          background: #123;
        `},n))}function T({service:e,nft:n}){const r=(null==n?void 0:n.name)||"Untitled",i=(null==n?void 0:n.description)||"−",a=(null==n?void 0:n.image)||"";return t("div",{css:o`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: relative;
      `},t("div",{css:o`
          width: 100%;
          height: 280px;
          background: ${k};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        `},a.endsWith(".mp4")?t(_,{type:"video/mp4",src:a,height:"280"}):t("img",{src:a,height:"280",alt:""})),t("h1",{css:o`
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
        `},t("span",{title:r},r)),t("p",{title:i,css:o`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `},i),t("div",{css:o`
          position: absolute;
          bottom: 0;
          padding: 2px 10px;
          border-radius: 0 0 0 3px;
          color: ${C};
          background: ${k};
        `},e))}function B({nfts:n}){const[r,c]=e.useState(0),s=i(n.length,{progress:r,config:{mass:.5,tension:400,friction:30}});return e.useEffect((()=>c(1)),[]),t("div",{css:o`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        grid-auto-rows: 510px;
      `},s.map((({progress:e},o)=>{const[r,i,c,s]=n[o];return t(a.div,{key:r+i,style:{opacity:e,transform:e.to((e=>`translate3d(0, ${10*(1-e)}px, 0)`))}},t(P,{contract:r,service:c,tokenId:i,url:s}))})))}var N=[["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2299"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"],["0x06012c8cf97bead5deae237070f9587f8e7a266d","1976426","CryptoKitties","https://www.cryptokitties.co/kitty/1976426"],["0x79986af15539de2db9a5086382daeda917a9cf0c","1162","Cryptovoxels","https://www.cryptovoxels.com/parcels/1162"],["0x7c40c393dc0f283f318791d746d894ddd3693572","7782","MoonCats","https://opensea.io/assets/0x7c40c393dc0f283f318791d746d894ddd3693572/5710"]];const z=function({ethers:e,provider:t}){const n={ethers:e,provider:t};return{config:n,async fetchNft(e,t){if(function(e){return v(e,"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb")}(e))return{name:`CryptoPunk ${o=t}`,description:'\n  10,000 unique collectible characters with proof of ownership stored on the\n  Ethereum blockchain. The project that inspired the modern CryptoArt movement.\n  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721\n  standard that powers most digital art and collectibles.\n',image:`https://www.larvalabs.com/cryptopunks/cryptopunk${o}.png`};var o;if(function(e){return v(e,"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d")}(e))return async function(e){try{const t=await fetch(`https://api.cryptokitties.co/v3/kitties/${e}`),n=await t.json();return{name:(null==n?void 0:n.name)||"Unknown",description:(null==n?void 0:n.bio)||"−",image:(null==n?void 0:n.image_url)||""}}catch(t){throw t}}(t);if(function(e){return v(e,"0x7c40c393dc0f283f318791d746d894ddd3693572")}(e))return async function(e,t){var n;const o=new t.ethers.Contract("0x7c40c393dc0f283f318791d746d894ddd3693572",b,t.provider),r=await o._tokenIDToCatID(e);return{name:`Wrapped MoonCat #${e}`,description:`The (unofficial) wrapped version of MoonCats Rescue. catId: ${r}.`,image:null!==(n=await w(r))&&void 0!==n?n:""}}(t,n);if(function(e){return/^0x[a-fA-F0-9]{40}$/.test(e)}(e))return x(t,e,n);throw new Error("Invalid contract address or token ID provided")}}}({ethers:{Contract:c},provider:s("homestead",{infura:{}.VITE_INFURA_KEY})});function S(){return t(p,{fetcher:z},t(E,null,t(A,null),t(B,{nfts:N}),t(j,null)))}d.render(t(e.StrictMode,null,t(l,null,t(S,null))),document.getElementById("root"));
