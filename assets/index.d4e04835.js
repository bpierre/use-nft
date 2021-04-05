import{r as e,H as t,j as n,c as r,G as o,u as i,a,b as c,C as s,g as d,d as l,V as u}from"./vendor.d170c896.js";function f(e){return/^0x[a-fA-F0-9]{40}$/.test(e)}function p(e,t=""){return`https://ipfs.io/ipfs/${e}${t}`}!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,i)=>{const a=new URL(e,r);if(self[t].moduleMap[a])return n(self[t].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){i(new Error(`Failed to import: ${e}`)),o(s)},onload(){n(self[t].moduleMap[a]),o(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/assets/");const h=/^ipfs:\/\/ipfs\/([^/]+)(\/.+)?$/,m=/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/;function g(e,t=p){const n=h.exec(e);if(n){const[,e,r=""]=n;return t(e,r)}return m.test(e)?t(e):e}function b(e,t){return e=g(e=function(e){try{const t=new URL(e);return"api.niftygateway.com"!==t.host?e:(t.pathname=t.pathname+"/",String(t))}catch(t){return e}}(e=function(e,t){try{const n=new URL(e);return"api.opensea.io"===n.host&&n.pathname.includes("0x%7Bid%7D")?(n.pathname=n.pathname.replace(/0x%7Bid%7D/g,t),n.searchParams.set("format","json"),String(n)):e}catch(n){return e}}(e,t)))}function v(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}async function w(e){const t=await fetch(e);if(!t.ok)throw new Error("Error when trying to request "+e);let n;try{n=await t.json()}catch(r){n={name:"",description:"",image:e}}if(function(e){var t,n,r,o,i,a,c,s,d,l,u,f;if(!e||"object"!=typeof e)return!1;const p=e;return"Asset Metadata"===p.title&&"object"===p.type&&"string"==typeof(null===(n=null===(t=p.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)&&"string"==typeof(null===(o=null===(r=p.properties)||void 0===r?void 0:r.image)||void 0===o?void 0:o.description)&&"string"==typeof(null===(a=null===(i=p.properties)||void 0===i?void 0:i.description)||void 0===a?void 0:a.description)&&"string"===(null===(s=null===(c=p.properties)||void 0===c?void 0:c.name)||void 0===s?void 0:s.type)&&"string"===(null===(l=null===(d=p.properties)||void 0===d?void 0:d.image)||void 0===l?void 0:l.type)&&"string"===(null===(f=null===(u=p.properties)||void 0===u?void 0:u.description)||void 0===f?void 0:f.type)}(n)&&(n=function(e){var t,n,r,o,i,a;return{name:(null===(n=null===(t=null==e?void 0:e.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)||"",description:(null===(o=null===(r=null==e?void 0:e.properties)||void 0===r?void 0:r.description)||void 0===o?void 0:o.description)||"",image:(null===(a=null===(i=null==e?void 0:e.properties)||void 0===i?void 0:i.image)||void 0===a?void 0:a.description)||""}}(n)),n=function(e){if(!e||"object"!=typeof e)return e;const t=e;return void 0===(null==t?void 0:t.image)&&"string"==typeof(null==t?void 0:t.imageUrl)?{...t,image:null==t?void 0:t.imageUrl}:e}(n),!function(e){return!(!e||"object"!=typeof e)&&("name"in e&&"image"in e&&"description"in e)}(n))throw new Error("Invalid data received");return function(e){return{...e,image:(t=e.image,g(t))};var t}({name:n.name||"",image:n.image||"",description:n.description||""})}function x(e){return{name:`CryptoPunk ${e}`,description:'\n  10,000 unique collectible characters with proof of ownership stored on the\n  Ethereum blockchain. The project that inspired the modern CryptoArt movement.\n  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721\n  standard that powers most digital art and collectibles.\n',image:`https://www.larvalabs.com/cryptopunks/cryptopunk${e}.png`}}function y(e){return v(e,"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb")}async function k(e){var t,n,r;const o=await fetch(`https://api.cryptokitties.co/v3/kitties/${e}`),i=await o.json();return{name:null!==(t=null==i?void 0:i.name)&&void 0!==t?t:"Unknown",description:null!==(n=null==i?void 0:i.bio)&&void 0!==n?n:"−",image:null!==(r=null==i?void 0:i.image_url)&&void 0!==r?r:""}}function I(e){return v(e,"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d")}const C={address:"0x7c40c393dc0f283f318791d746d894ddd3693572",methodName:"_tokenIDToCatID",methodHash:"0xfe294644",humanReadableAbi:["function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)"]};async function $(e){const t=g(`ipfs://ipfs/bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava/${e.slice(4,6)}/${e}.png`);var n;return function(e,{scale:t=1,padding:n=0}={}){const r=e.naturalWidth*t,o=e.naturalHeight*t,i=Math.max(r*n,o*n),a=document.createElement("canvas");a.width=r+2*i,a.height=o+2*i;const c=a.getContext("2d");return null===c?null:(c.imageSmoothingEnabled=!1,c.drawImage(e,i,i,r,o),a.toDataURL())}(await(n=t,new Promise(((e,t)=>{const r=new Image;r.src=n,r.crossOrigin="",r.onload=()=>e(r),r.onerror=e=>t(e)}))),{scale:4,padding:.125})}async function E(e,t){var n;const r=await t(C.address,e,C);return{name:`Wrapped MoonCat #${e}`,description:`The (unofficial) wrapped version of MoonCats Rescue. Original cat ID: ${r}.`,image:null!==(n=await $(r))&&void 0!==n?n:""}}function A(e){return v(e,C.address)}const M=["function tokenURI(uint256 _tokenId) external view returns (string)","function uri(uint256 _id) external view returns (string)","function supportsInterface(bytes4 interfaceID) external view returns (bool)"];function j(e){return{config:e,async fetchNft(t,n){if(!f(t))throw new Error(`Invalid contract address: ${t}`);return y(t)?x(n):I(t)?k(n):A(t)?E(n,function(e){return async function(t,n,r){const o=new e.ethers.Contract(t,r.humanReadableAbi,e.provider),i=await o._tokenIDToCatID(n);return null!=i?i:""}}(e)):w(await async function(e,t,n){const r=new n.ethers.Contract(e,M,n.provider);return b(await Promise.any([r.uri(t),r.tokenURI(t)]),t)}(t,n,e))}}}function D(e){let t="";for(let n=0;n<32;++n)t+=("0"+(e>>BigInt(256-8*n-8)&BigInt(255)).toString(16)).slice(-2);return t}function B(e){let t=BigInt(0);for(const n of e)t=(t<<BigInt(8))+BigInt(n);return t}function R(e){var t;return e=e.replace(/^0x/,""),new Uint8Array((null!==(t=e.match(/.{1,2}/g))&&void 0!==t?t:[]).map((e=>parseInt(e,16))))}function U(e){return B(R(e))!==BigInt(0)}function F(e){return"0xc87b56dd"+D(e)}function P(e){return"0x01ffc9a7"+e.replace(/^0x/,"").padEnd(64,"0")}function _(e,t,n){return e.request({method:"eth_call",params:[{data:n,to:t},"latest"]})}const N=["0x79986aF15539de2db9A5086382daEdA917A9CF0C"];async function L(e,t,{ethereum:n}){if(!n)return"";const r=async r=>b(function(e){const t=R(e),n=Number(B(t.subarray(0,32))),r=Number(B(t.subarray(n,n+32))),o=t.subarray(n+32,n+32+r);return(new TextDecoder).decode(o)}(await _(n,e,r)),t);if(N.some((t=>v(t,e))))return r(F(BigInt(t)));const o=[[P("0x80ac58cd"),F(BigInt(t))],[P("0xd9b67a26"),(i=BigInt(t),"0x0e89341c"+D(i))]];var i;try{return Promise.any(o.map((async([t,o])=>{if(!(await _(n,e,t).then(U)))throw new Error("Unsupported method");return r(o)})))}catch(a){return""}}function T(e){return{config:e,async fetchNft(t,n){if(!f(t))throw new Error(`Invalid contract address: ${t}`);return y(t)?x(n):I(t)?k(n):A(t)?E(n,function(e){return async function(t,n,r){if(void 0===e.ethereum)throw new Error("No Ethereum provider");return(await _(e.ethereum,t,r.methodHash+D(BigInt(n)))).slice(0,12)}}(e)):w(await L(t,n,e))}}}const z={name:"",description:"",image:""};function S(e){return e?function(e){return Array.isArray(e)&&2==e.length&&"ethers"===e[0]}(e)?j(e[1]):function(e){return Array.isArray(e)&&2==e.length&&"ethereum"===e[0]}(e)?T(e[1]):e:{config:{},fetchNft:()=>Promise.resolve(z)}}const q=e.createContext(null);function O({children:t,fetcher:n}){const r=S(n);return e.createElement(q.Provider,{value:{fetcher:r}},t)}const H="#a669a2",G="#dddddd",K="#000000";function Q({children:t}){return n(e.Fragment,null,n(o,{styles:r`
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
            color: ${H};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${H};
          }
          a:focus-visible {
            background: ${H};
            color: ${G};
          }
        `}),n("main",{css:r`
          max-width: 1440px;
          min-width: 420px;
          margin: 0 auto;
          padding: 0 80px;
          @media (max-width: 900px) {
            padding: 0 40px;
          }
        `},t))}function V({swap:e=!1}){const t=[n("a",{key:"by",href:"https://spectre.xyz/",target:"_blank"},"by spectre_"),n("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return n("nav",{css:r`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},e?[...t].reverse():t)}function W(){return n("footer",{css:r`
        padding-top: 50px;
      `},n(V,{swap:!0}))}const Z=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function J(){return Z[Math.floor(Math.random()*Z.length)]}function Y(){const t=e.useRef(null);return e.useEffect((()=>function(e,t=1e3/60){const n="function"==typeof t?t:()=>t;let r,o=Date.now()-n();const i=()=>{r=requestAnimationFrame(i);const t=Date.now();t-o<n()||(o=t,e())};return i(),()=>cancelAnimationFrame(r)}((()=>{t.current&&(t.current.innerHTML=J())}),500)),[]),t}function X(){return n("header",{css:r`
        position: relative;
        padding: 0 0 80px;
      `},n(V,null),n(ee,null),n(te,null))}function ee(){const e=Y(),{below:t}=i(),o=t(1e3),a=t(800);return n("h1",{title:"useNft()",css:r`
        margin-top: 24px;
        font-size: ${o?"30px":"40px"};
        text-align: center;
      `},"let"," ",n("span",{ref:e,css:r`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},J())," ","= ",a&&n("br",null),"useNft(",a?"addr":"address",", id)")}function te(){return n("p",{css:r`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch NFT metadata from anywhere.")}function ne(t){const r=e.useRef(null);return e.useEffect((()=>{const e=r.current;null!==e&&(e.muted=!0,e.setAttribute("autoplay",""),e.setAttribute("playsinline",""))}),[]),n("video",{ref:r,...t,tabIndex:-1})}function re({contract:r,tokenId:o,service:i,url:a}){const{nft:c,loading:s,error:d,reload:l}=function(n,r){const o=e.useContext(q);if(null===o)throw new Error("Please wrap your app with <NftProvider />");const{fetcher:i}=o,a=e.useCallback((()=>i?i.fetchNft(n,r):{...z}),[n,i,r]),c=t(n+r,a);return e.useMemo((()=>{const{error:e,data:t,revalidate:n}=c,r=()=>n();return void 0===e&&void 0===t?{error:void 0,loading:!0,nft:void 0,reload:r,status:"loading"}:void 0!==e?{error:e,loading:!1,nft:void 0,reload:r,status:"error"}:{error:void 0,loading:!1,nft:t,reload:r,status:"done"}}),[c])}(r,o);return n(oe,{url:c&&a,label:i},s?n(ie,null):d?n(ae,{error:d,reload:l}):n(ce,{nft:c}))}function oe({label:e,url:t,children:o}){return n("a",{...t?{href:t,target:"_blank"}:{},css:r`
        display: block;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;
        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${H};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${H};
          box-shadow: 0 0 0 2px ${H};
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
              color: ${K};
              background: ${H};
            `},e))))}function ie(){return n("div",{css:r`
        display: grid;
        height: 100%;
        place-items: center;
      `},"Loading…")}function ae({error:e,reload:t}){return n("div",{css:r`
        display: grid;
        height: 100%;
        place-items: center;
        text-align: center;
        line-height: 2;
      `},n("p",null,"Loading error.",n("br",null)," ",n("button",{onClick:t},"Retry?")))}function ce({nft:t}){if(!t)return null;const o=t.name||"Untitled",i=t.description||"−",a=t.image||"";return n(e.Fragment,null,n("div",{css:r`
          width: 100%;
          height: 280px;
          background: ${H};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        `},a.endsWith(".mp4")?n(ne,{type:"video/mp4",src:a,height:"280"}):n("img",{src:a,height:"280",alt:""})),n("h1",{css:r`
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
        `},n("span",{title:o},o)),n("p",{title:i,css:r`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `},i))}function se({nfts:t}){const[o,i]=e.useState(0),s=a(t.length,{progress:o,config:{mass:.5,tension:400,friction:30}});return e.useEffect((()=>i(1)),[]),n("div",{css:r`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-auto-rows: 510px;
      `},s.map((({progress:e},r)=>{const[o,i,a,s]=t[r];return n(c.div,{key:o+i,style:{opacity:e,transform:e.to((e=>`translate3d(0, ${10*(1-e)}px, 0)`))}},n(re,{contract:o,service:a,tokenId:i,url:s}))})))}var de=[["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x32b7495895264ac9d0b12d32afd435453458b1c6","5055","Decentraland","https://market.decentraland.org/contracts/0x32b7495895264ac9d0b12d32afd435453458b1c6/tokens/4087"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2299"],["0x06012c8cf97bead5deae237070f9587f8e7a266d","1976426","CryptoKitties","https://www.cryptokitties.co/kitty/1976426"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"],["0x79986af15539de2db9a5086382daeda917a9cf0c","1162","Cryptovoxels","https://www.cryptovoxels.com/parcels/1162"],["0x7c40c393dc0f283f318791d746d894ddd3693572","8549","MoonCats","https://opensea.io/assets/0x7c40c393dc0f283f318791d746d894ddd3693572/8549"],["0xfbeef911dc5821886e1dda71586d90ed28174b7d","307801","KnownOrigin","https://knownorigin.io/gallery/307800-red-forest-fires"],["0xb55c5cac5014c662fdbf21a2c59cd45403c482fd","0x555559a5669969a96a656a995aa55555","Clovers","https://clovers.network/clovers/0xdfffdfffd557fd7ff55fdfdffff7ffff"],["0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756","52832","MakersPlace","https://makersplace.com/jeffreylee1/garden-delights-1-of-1-60178/"]];const le=["ethers",{ethers:{Contract:s},provider:d("homestead",{infura:{}.VITE_INFURA_KEY})}];function ue(){return n(O,{fetcher:le},n(Q,null,n(X,null),n(se,{nfts:de}),n(W,null)))}l.render(n(e.StrictMode,null,n(u,null,n(ue,null))),document.getElementById("root"));
