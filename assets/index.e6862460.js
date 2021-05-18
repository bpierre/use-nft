import{r as e,N as t,H as n,L as r,j as o,c as a,G as i,u as d,a as c,b as s,C as l,g as u,d as f,V as p}from"./vendor.5b83ee27.js";function m(e){return/^0x[a-fA-F0-9]{40}$/.test(e)}function h(e,t=""){return`https://ipfs.io/ipfs/${e}${t}`}!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,a)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return n(self[t].moduleMap[i]);const d=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){a(new Error(`Failed to import: ${e}`)),o(c)},onload(){n(self[t].moduleMap[i]),o(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const g=/^ipfs:\/\/(?:ipfs\/)?([^/]+)(\/.+)?$/,v=/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/;function b(e,t=h){const n=g.exec(e);if(n){const[,e,r=""]=n;return t(e,r)}return v.test(e)?t(e):e}function w(e,t){return e=b(e=function(e){try{const t=new URL(e);return"api.niftygateway.com"!==t.host?e:(t.pathname=t.pathname+"/",String(t))}catch(t){return e}}(e=function(e,t){try{const n=new URL(e);return"api.opensea.io"!==n.host&&"testnets-api.opensea.io"!==n.host||!n.pathname.includes("0x%7Bid%7D")?e:(n.pathname=n.pathname.replace(/0x%7Bid%7D/g,t),n.searchParams.set("format","json"),String(n))}catch(n){return e}}(e,t)))}function y(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}function x(e){return k(Promise.all([...e].map(k)))}function k(e){return new Promise(((t,n)=>{Promise.resolve(e).then(n,t)}))}async function I(e){const t=await fetch(e);if(!t.ok)throw new Error("Error when trying to request "+e);let n;try{n=await t.json()}catch(r){n={name:"",description:"",image:e}}if(function(e){var t,n,r,o,a,i,d,c,s,l,u,f;if(!e||"object"!=typeof e)return!1;const p=e;return"Asset Metadata"===p.title&&"object"===p.type&&"string"==typeof(null===(n=null===(t=p.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)&&"string"==typeof(null===(o=null===(r=p.properties)||void 0===r?void 0:r.image)||void 0===o?void 0:o.description)&&"string"==typeof(null===(i=null===(a=p.properties)||void 0===a?void 0:a.description)||void 0===i?void 0:i.description)&&"string"===(null===(c=null===(d=p.properties)||void 0===d?void 0:d.name)||void 0===c?void 0:c.type)&&"string"===(null===(l=null===(s=p.properties)||void 0===s?void 0:s.image)||void 0===l?void 0:l.type)&&"string"===(null===(f=null===(u=p.properties)||void 0===u?void 0:u.description)||void 0===f?void 0:f.type)}(n)&&(n=function(e){var t,n,r,o,a,i;return{name:(null===(n=null===(t=null==e?void 0:e.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)||"",description:(null===(o=null===(r=null==e?void 0:e.properties)||void 0===r?void 0:r.description)||void 0===o?void 0:o.description)||"",image:(null===(i=null===(a=null==e?void 0:e.properties)||void 0===a?void 0:a.image)||void 0===i?void 0:i.description)||""}}(n)),n=function(e){if(!e||"object"!=typeof e)return e;const t=e;return void 0===(null==t?void 0:t.image)&&"string"==typeof(null==t?void 0:t.imageUrl)?{...t,image:null==t?void 0:t.imageUrl}:e}(n),!function(e){return!(!e||"object"!=typeof e)&&("name"in e&&"image"in e&&"description"in e)}(n))throw new Error("Invalid data received");return function(e){return{...e,image:(t=e.image,b(t))};var t}({name:n.name||"",image:n.image||"",description:n.description||""})}function $(e){return{name:`CryptoPunk ${e}`,description:'\n  10,000 unique collectible characters with proof of ownership stored on the\n  Ethereum blockchain. The project that inspired the modern CryptoArt movement.\n  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721\n  standard that powers most digital art and collectibles.\n',image:`https://www.larvalabs.com/cryptopunks/cryptopunk${e}.png`}}function A(e){return y(e,"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb")}async function E(e){var t,n,r;const o=await fetch(`https://api.cryptokitties.co/v3/kitties/${e}`),a=await o.json();return{name:null!==(t=null==a?void 0:a.name)&&void 0!==t?t:"Unknown",description:null!==(n=null==a?void 0:a.bio)&&void 0!==n?n:"−",image:null!==(r=null==a?void 0:a.image_url)&&void 0!==r?r:""}}function C(e){return y(e,"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d")}function M(e,t){return JSON.stringify({operationName:"NFTByTokenId",variables:{contractAddress:e,tokenId:t},query:"\n  query NFTByTokenId($contractAddress: String, $tokenId: String) {\n    nfts(\n      where: { contractAddress: $contractAddress, tokenId: $tokenId }\n      first: 1\n    ) {\n      name\n      image\n      owner {\n        address\n      }\n      estate {\n        size\n        data {\n          description\n        }\n      }\n    }\n  }\n"})}async function B(e){var t,n,r,o,a,i;const d=await fetch("https://api.thegraph.com/subgraphs/name/decentraland/marketplace",{body:M("0x959e104E1a4dB6317fA58F8295F586e1A978c297",e),method:"POST"}),{data:c}=await d.json(),s=null===(t=null==c?void 0:c.nfts)||void 0===t?void 0:t[0];return{name:null!==(n=null==s?void 0:s.name)&&void 0!==n?n:"Unknown",description:null!==(a=null===(o=null===(r=null==s?void 0:s.estate)||void 0===r?void 0:r.data)||void 0===o?void 0:o.description)&&void 0!==a?a:"−",image:null!==(i=null==s?void 0:s.image)&&void 0!==i?i:""}}function F(e){return y(e,"0x959e104E1a4dB6317fA58F8295F586e1A978c297")}function j(e,t){return JSON.stringify({operationName:"NFTByTokenId",variables:{contractAddress:e,tokenId:t},query:"\n  query NFTByTokenId($contractAddress: String, $tokenId: String) {\n    nfts(\n      where: { contractAddress: $contractAddress, tokenId: $tokenId }\n      first: 1\n    ) {\n      name\n      image\n      owner {\n        address\n      }\n      parcel {\n        x\n        y\n        data {\n          description\n        }\n      }\n    }\n  }\n"})}async function D(e){var t,n,r,o,a;const i=await fetch("https://api.thegraph.com/subgraphs/name/decentraland/marketplace",{body:j("0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d",e),method:"POST"}),{data:d}=await i.json(),c=null===(t=null==d?void 0:d.nfts)||void 0===t?void 0:t[0],s=null==c?void 0:c.parcel;return{name:null!==(n=null==c?void 0:c.name)&&void 0!==n?n:`Parcel ${null==s?void 0:s.x},${null==s?void 0:s.y}`,description:null!==(o=null===(r=null==s?void 0:s.data)||void 0===r?void 0:r.description)&&void 0!==o?o:"−",image:null!==(a=null==c?void 0:c.image)&&void 0!==a?a:""}}function N(e){return y(e,"0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d")}const T={address:"0x7c40c393dc0f283f318791d746d894ddd3693572",methodName:"_tokenIDToCatID",methodHash:"0xfe294644",humanReadableAbi:["function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)"]};async function P(e){const t=b(`ipfs://ipfs/bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava/${e.slice(4,6)}/${e}.png`);var n;return function(e,{scale:t=1,padding:n=0}={}){const r=e.naturalWidth*t,o=e.naturalHeight*t,a=Math.max(r*n,o*n),i=document.createElement("canvas");i.width=r+2*a,i.height=o+2*a;const d=i.getContext("2d");return null===d?null:(d.imageSmoothingEnabled=!1,d.drawImage(e,a,a,r,o),i.toDataURL())}(await(n=t,new Promise(((e,t)=>{const r=new Image;r.src=n,r.crossOrigin="",r.onload=()=>e(r),r.onerror=e=>t(e)}))),{scale:4,padding:.125})}async function R(e,t){var n;const r=await t(T.address,e,T);return{name:`Wrapped MoonCat #${e}`,description:`The (unofficial) wrapped version of MoonCats Rescue. Original cat ID: ${r}.`,image:null!==(n=await P(r))&&void 0!==n?n:""}}function U(e){return y(e,T.address)}const S=["function tokenURI(uint256 _tokenId) external view returns (string)","function uri(uint256 _id) external view returns (string)","function supportsInterface(bytes4 interfaceID) external view returns (bool)"];function _(e){return{config:e,async fetchNft(t,n){if(!m(t))throw new Error(`Invalid contract address: ${t}`);return N(t)?D(n):F(t)?B(n):A(t)?$(n):C(t)?E(n):U(t)?R(n,function(e){return async function(t,n,r){const o=new e.ethers.Contract(t,r.humanReadableAbi,e.provider),a=await o._tokenIDToCatID(n);return null!=a?a:""}}(e)):I(await async function(e,t,n){const r=new n.ethers.Contract(e,S,n.provider);return w(await x([r.uri(t),r.tokenURI(t)]),t)}(t,n,e))}}}function L(e){let t="";for(let n=0;n<32;++n)t+=("0"+(e>>BigInt(256-8*n-8)&BigInt(255)).toString(16)).slice(-2);return t}function O(e){let t=BigInt(0);for(const n of e)t=(t<<BigInt(8))+BigInt(n);return t}function q(e){var t;return e=e.replace(/^0x/,""),new Uint8Array((null!==(t=e.match(/.{1,2}/g))&&void 0!==t?t:[]).map((e=>parseInt(e,16))))}function z(e){return O(q(e))!==BigInt(0)}function H(e){return"0xc87b56dd"+L(e)}function J(e){return"0x01ffc9a7"+e.replace(/^0x/,"").padEnd(64,"0")}function W(e,t,n){return e.request({method:"eth_call",params:[{data:n,to:t},"latest"]})}const G=["0x79986aF15539de2db9A5086382daEdA917A9CF0C"];async function K(e,t,{ethereum:n}){if(!n)return"";const r=async r=>w(function(e){const t=q(e),n=Number(O(t.subarray(0,32))),r=Number(O(t.subarray(n,n+32))),o=t.subarray(n+32,n+32+r);return(new TextDecoder).decode(o)}(await W(n,e,r)),t);if(G.some((t=>y(t,e))))return r(H(BigInt(t)));const o=[[J("0x80ac58cd"),H(BigInt(t))],[J("0xd9b67a26"),(a=BigInt(t),"0x0e89341c"+L(a))]];var a;try{return x(o.map((async([t,o])=>{if(!(await W(n,e,t).then(z)))throw new Error("Unsupported method");return r(o)})))}catch(i){return""}}function Q(e){return{config:e,async fetchNft(t,n){if(!m(t))throw new Error(`Invalid contract address: ${t}`);return N(t)?D(n):F(t)?B(n):A(t)?$(n):C(t)?E(n):U(t)?R(n,function(e){return async function(t,n,r){if(void 0===e.ethereum)throw new Error("No Ethereum provider");return(await W(e.ethereum,t,r.methodHash+L(BigInt(n)))).slice(0,12)}}(e)):I(await K(t,n,e))}}}const V={name:"",description:"",image:""};function Z(e){return e?function(e){return Array.isArray(e)&&2==e.length&&"ethers"===e[0]}(e)?_(e[1]):function(e){return Array.isArray(e)&&2==e.length&&"ethereum"===e[0]}(e)?Q(e[1]):e:{config:{},fetchNft:()=>Promise.resolve(V)}}const Y=e.createContext(null),X=function({children:r,fetcher:o}){const[a,{cache:i}]=e.useMemo((()=>{const e=new Map;return[e,t(e)]}),[]),d={cacheStorage:a,fetcher:Z(o)};return e.createElement(n,{value:{cache:i}},e.createElement(Y.Provider,{value:d},r))};const ee="#a669a2",te="#dddddd",ne="#000000";function re({children:t}){return o(e.Fragment,null,o(i,{styles:a`
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
            color: ${ee};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${ee};
          }
          a:focus-visible {
            background: ${ee};
            color: ${te};
          }
        `}),o("main",{css:a`
          max-width: 1440px;
          min-width: 420px;
          margin: 0 auto;
          padding: 0 80px;
          @media (max-width: 900px) {
            padding: 0 40px;
          }
        `},t))}function oe({swap:e=!1}){const t=[o("a",{key:"by",href:"https://spectre.xyz/",target:"_blank"},"by spectre_"),o("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return o("nav",{css:a`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},e?[...t].reverse():t)}function ae(){return o("footer",{css:a`
        padding-top: 50px;
      `},o(oe,{swap:!0}))}const ie=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function de(){return ie[Math.floor(Math.random()*ie.length)]}function ce(){const t=e.useRef(null);return e.useEffect((()=>function(e,t=1e3/60){const n="function"==typeof t?t:()=>t;let r,o=Date.now()-n();const a=()=>{r=requestAnimationFrame(a);const t=Date.now();t-o<n()||(o=t,e())};return a(),()=>cancelAnimationFrame(r)}((()=>{t.current&&(t.current.innerHTML=de())}),500)),[]),t}function se(){return o("header",{css:a`
        position: relative;
        padding: 0 0 80px;
      `},o(oe,null),o(le,null),o(ue,null))}function le(){const e=ce(),{below:t}=d(),n=t(1e3),r=t(800);return o("h1",{title:"useNft()",css:a`
        margin-top: 24px;
        font-size: ${n?"30px":"40px"};
        text-align: center;
      `},"let"," ",o("span",{ref:e,css:a`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},de())," ","= ",r&&o("br",null),"useNft(",r?"addr":"address",", id)")}function ue(){return o("p",{css:a`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch NFT metadata from anywhere.")}function fe(t){const n=e.useRef(null);return e.useEffect((()=>{const e=n.current;null!==e&&(e.muted=!0,e.setAttribute("autoplay",""),e.setAttribute("playsinline",""))}),[]),o("video",{ref:n,...t,tabIndex:-1})}function pe({contract:t,tokenId:n,service:a,url:i}){const{nft:d,loading:c,error:s,reload:l}=function(t,n){const o=e.useContext(Y);if(null===o)throw new Error("Please wrap your app with <NftProvider />");const{fetcher:a,cacheStorage:i}=o,d=e.useCallback((()=>a?a.fetchNft(t,n):{...V}),[t,a,n]),c=i.has(t+n),s=r(t+n,d,{revalidateOnMount:!c,revalidateOnFocus:!1,revalidateOnReconnect:!1});return e.useMemo((()=>{const{error:e,data:t,revalidate:n}=s,r=()=>n();return void 0===e&&void 0===t?{error:void 0,loading:!0,nft:void 0,reload:r,status:"loading"}:void 0!==e?{error:e,loading:!1,nft:void 0,reload:r,status:"error"}:{error:void 0,loading:!1,nft:t,reload:r,status:"done"}}),[s])}(t,n);return o(me,{url:d&&i,label:a},c?o(he,null):s?o(ge,{error:s,reload:l}):o(ve,{nft:d}))}function me({label:e,url:t,children:n}){return o("a",{...t?{href:t,target:"_blank"}:{},css:a`
        display: block;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;
        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${ee};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${ee};
          box-shadow: 0 0 0 2px ${ee};
        }
      `},o("section",{css:a`
          display: grid;
          height: 100%;
          place-items: center;
          grid-template-columns: 100%;
          background: #123;
        `},o("div",{css:a`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            position: relative;
          `},n,o("div",{css:a`
              position: absolute;
              bottom: 0;
              padding: 2px 10px;
              color: ${ne};
              background: ${ee};
            `},e))))}function he(){return o("div",{css:a`
        display: grid;
        height: 100%;
        place-items: center;
      `},"Loading…")}function ge({error:e,reload:t}){return o("div",{css:a`
        display: grid;
        height: 100%;
        place-items: center;
        text-align: center;
        line-height: 2;
      `},o("p",null,"Loading error.",o("br",null)," ",o("button",{onClick:t},"Retry?")))}function ve({nft:t}){if(!t)return null;const n=t.name||"Untitled",r=t.description||"−",i=t.image||"";return o(e.Fragment,null,o("div",{css:a`
          width: 100%;
          height: 280px;
          background: ${ee};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        `},i.endsWith(".mp4")?o(fe,{type:"video/mp4",src:i,height:"280"}):i&&o("img",{src:i,height:"280",alt:""})),o("h1",{css:a`
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
        `},o("span",{title:n},n)),o("p",{title:r,css:a`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `},r))}function be({nfts:t}){const[n,r]=e.useState(0),i=c(t.length,{progress:n,config:{mass:.5,tension:400,friction:30}});return e.useEffect((()=>r(1)),[]),o("div",{css:a`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-auto-rows: 510px;
      `},i.map((({progress:e},n)=>{const[r,a,i,d]=t[n];return o(s.div,{key:r+a,style:{opacity:e,transform:e.to((e=>`translate3d(0, ${10*(1-e)}px, 0)`))}},o(pe,{contract:r,service:i,tokenId:a,url:d}))})))}var we=function(e){const t=[...e];for(let n=t.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}([["0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d","29264283555200707857850216239132066185199","Decentraland Parcels","https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/29264283555200707857850216239132066185199"],["0x959e104e1a4db6317fa58f8295f586e1a978c297","3168","Decentraland Estates","https://market.decentraland.org/contracts/0x959e104e1a4db6317fa58f8295f586e1a978c297/tokens/3168"],["0x32b7495895264ac9d0b12d32afd435453458b1c6","5055","Decentraland Wearables","https://market.decentraland.org/contracts/0x32b7495895264ac9d0b12d32afd435453458b1c6/tokens/4087"],["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2299"],["0x06012c8cf97bead5deae237070f9587f8e7a266d","1976426","CryptoKitties","https://www.cryptokitties.co/kitty/1976426"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"],["0x7c40c393dc0f283f318791d746d894ddd3693572","8549","MoonCats","https://opensea.io/assets/0x7c40c393dc0f283f318791d746d894ddd3693572/8549"],["0xfbeef911dc5821886e1dda71586d90ed28174b7d","307801","KnownOrigin","https://knownorigin.io/gallery/307800-red-forest-fires"],["0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756","52832","MakersPlace","https://makersplace.com/jeffreylee1/garden-delights-1-of-1-60178/"]]);const ye=["ethers",{ethers:{Contract:l},provider:u("homestead",{infura:{}.VITE_INFURA_KEY})}];function xe(){return o(X,{fetcher:ye},o(re,null,o(se,null),o(be,{nfts:we}),o(ae,null)))}f.render(o(e.StrictMode,null,o(p,null,o(xe,null))),document.getElementById("root"));
