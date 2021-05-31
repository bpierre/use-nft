import{r as e,N as t,R as n,H as r,L as o,j as a,c as i,G as d,u as s,a as c,b as l,C as u,I as f,d as p,V as h}from"./vendor.d4eed48b.js";function m(e){return/^0x[a-fA-F0-9]{40}$/.test(e)}function g(e){return e}function v(e,t=""){return`https://ipfs.io/ipfs/${e}${t}`}const b=/^ipfs:\/\/(?:ipfs\/)?([^/]+)(\/.+)?$/,w=/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/;function x(e,t){const n=b.exec(e);if(n){const[,e,r=""]=n;return t(e,r)}return w.test(e)?t(e):e}function y(e,t,n){return(e=x(e=function(e){try{const t=new URL(e);return"api.niftygateway.com"!==t.host?e:(t.pathname=t.pathname+"/",String(t))}catch(t){return e}}(e=function(e,t){try{const n=new URL(e);return"api.opensea.io"!==n.host&&"testnets-api.opensea.io"!==n.host||!n.pathname.includes("0x%7Bid%7D")?e:(n.pathname=n.pathname.replace(/0x%7Bid%7D/g,t),n.searchParams.set("format","json"),String(n))}catch(n){return e}}(e,t)),n.ipfsUrl)).startsWith("http")&&(e=n.jsonProxy(e)),e}function k(e,t){return x(e,t.ipfsUrl)}function I(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}function $(e){return P(Promise.all([...e].map(P)))}function P(e){return new Promise(((t,n)=>{Promise.resolve(e).then(n,t)}))}function A(e){return{description:'\n  10,000 unique collectible characters with proof of ownership stored on the\n  Ethereum blockchain. The project that inspired the modern CryptoArt movement.\n  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721\n  standard that powers most digital art and collectibles.\n',image:`https://www.larvalabs.com/cryptopunks/cryptopunk${e}.png`,metadataUrl:"",name:`CryptoPunk ${e}`,owner:""}}function C(e){return I(e,"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb")}async function E(e,{jsonProxy:t}){var n,r,o;const a=t(`https://api.cryptokitties.co/v3/kitties/${e}`),i=await fetch(a),d=await i.json();return{description:null!==(n=null==d?void 0:d.bio)&&void 0!==n?n:"−",image:null!==(r=null==d?void 0:d.image_url)&&void 0!==r?r:"",name:null!==(o=null==d?void 0:d.name)&&void 0!==o?o:"Unknown",owner:"",metadataUrl:a}}function j(e){return I(e,"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d")}function B(e,t){return JSON.stringify({operationName:"NFTByTokenId",variables:{contractAddress:e,tokenId:t},query:"\n  query NFTByTokenId($contractAddress: String, $tokenId: String) {\n    nfts(\n      where: { contractAddress: $contractAddress, tokenId: $tokenId }\n      first: 1\n    ) {\n      name\n      image\n      owner {\n        address\n      }\n      estate {\n        size\n        data {\n          description\n        }\n      }\n    }\n  }\n"})}async function U(e){var t,n,r,o,a,i,d,s;const c=await fetch("https://api.thegraph.com/subgraphs/name/decentraland/marketplace",{body:B("0x959e104E1a4dB6317fA58F8295F586e1A978c297",e),method:"POST"}),{data:l}=await c.json(),u=null===(t=null==l?void 0:l.nfts)||void 0===t?void 0:t[0];return{description:null!==(o=null===(r=null===(n=null==u?void 0:u.estate)||void 0===n?void 0:n.data)||void 0===r?void 0:r.description)&&void 0!==o?o:"−",image:null!==(a=null==u?void 0:u.image)&&void 0!==a?a:"",metadataUrl:"",name:null!==(i=null==u?void 0:u.name)&&void 0!==i?i:"Unknown",owner:null!==(s=null===(d=null==u?void 0:u.owner)||void 0===d?void 0:d.address)&&void 0!==s?s:""}}function D(e){return I(e,"0x959e104E1a4dB6317fA58F8295F586e1A978c297")}function M(e,t){return JSON.stringify({operationName:"NFTByTokenId",variables:{contractAddress:e,tokenId:t},query:"\n  query NFTByTokenId($contractAddress: String, $tokenId: String) {\n    nfts(\n      where: { contractAddress: $contractAddress, tokenId: $tokenId }\n      first: 1\n    ) {\n      name\n      image\n      owner {\n        address\n      }\n      parcel {\n        x\n        y\n        data {\n          description\n        }\n      }\n    }\n  }\n"})}async function N(e){var t,n,r,o,a,i,d;const s=await fetch("https://api.thegraph.com/subgraphs/name/decentraland/marketplace",{body:M("0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d",e),method:"POST"}),{data:c}=await s.json(),l=null===(t=null==c?void 0:c.nfts)||void 0===t?void 0:t[0],u=null==l?void 0:l.parcel;return{description:null!==(r=null===(n=null==u?void 0:u.data)||void 0===n?void 0:n.description)&&void 0!==r?r:"-",image:null!==(o=null==l?void 0:l.image)&&void 0!==o?o:"",metadataUrl:"",name:null!==(a=null==l?void 0:l.name)&&void 0!==a?a:`Parcel ${null==u?void 0:u.x},${null==u?void 0:u.y}`,owner:null!==(d=null===(i=null==l?void 0:l.owner)||void 0===i?void 0:i.address)&&void 0!==d?d:""}}function F(e){return I(e,"0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d")}const T={address:"0x7c40c393dc0f283f318791d746d894ddd3693572",methodName:"_tokenIDToCatID",methodHash:"0xfe294644",humanReadableAbi:["function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)"]};async function S(e,t){const n=x(`ipfs://ipfs/bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava/${e.slice(4,6)}/${e}.png`,t);var r;return function(e,{scale:t=1,padding:n=0}={}){const r=e.naturalWidth*t,o=e.naturalHeight*t,a=Math.max(r*n,o*n),i=document.createElement("canvas");i.width=r+2*a,i.height=o+2*a;const d=i.getContext("2d");return null===d?null:(d.imageSmoothingEnabled=!1,d.drawImage(e,a,a,r,o),i.toDataURL())}(await(r=n,new Promise(((e,t)=>{const n=new Image;n.src=r,n.crossOrigin="",n.onload=()=>e(n),n.onerror=e=>t(e)}))),{scale:4,padding:.125})}async function R(e,t,n){var r;const o=await t(T.address,e,T);return{description:`The (unofficial) wrapped version of MoonCats Rescue. Original cat ID: ${o}.`,image:null!==(r=await S(o,n.ipfsUrl))&&void 0!==r?r:"",metadataUrl:"",name:`Wrapped MoonCat #${e}`,owner:""}}function O(e){return I(e,T.address)}async function q(e,t){const n=await fetch(e);if(!n.ok)throw new Error("Error when trying to request "+e);let r;try{r=await n.json()}catch(o){r={name:"",description:"",image:e}}if(function(e){var t,n,r,o,a,i,d,s,c,l,u,f;if(!e||"object"!=typeof e)return!1;const p=e;return"Asset Metadata"===p.title&&"object"===p.type&&"string"==typeof(null===(n=null===(t=p.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)&&"string"==typeof(null===(o=null===(r=p.properties)||void 0===r?void 0:r.image)||void 0===o?void 0:o.description)&&"string"==typeof(null===(i=null===(a=p.properties)||void 0===a?void 0:a.description)||void 0===i?void 0:i.description)&&"string"===(null===(s=null===(d=p.properties)||void 0===d?void 0:d.name)||void 0===s?void 0:s.type)&&"string"===(null===(l=null===(c=p.properties)||void 0===c?void 0:c.image)||void 0===l?void 0:l.type)&&"string"===(null===(f=null===(u=p.properties)||void 0===u?void 0:u.description)||void 0===f?void 0:f.type)}(r)&&(r=function(e){var t,n,r,o,a,i;return{name:(null===(n=null===(t=null==e?void 0:e.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)||"",description:(null===(o=null===(r=null==e?void 0:e.properties)||void 0===r?void 0:r.description)||void 0===o?void 0:o.description)||"",image:(null===(i=null===(a=null==e?void 0:e.properties)||void 0===a?void 0:a.image)||void 0===i?void 0:i.description)||""}}(r)),r=function(e){if(!e||"object"!=typeof e)return e;const t=e;return void 0===(null==t?void 0:t.image)&&"string"==typeof(null==t?void 0:t.imageUrl)?{...t,image:null==t?void 0:t.imageUrl}:e}(r),!function(e){return!(!e||"object"!=typeof e)&&("name"in e&&"image"in e&&"description"in e)}(r))throw new Error("Invalid data received");return function(e,t){return{...e,image:k(e.image,t)}}({name:r.name||"",image:r.image||"",description:r.description||""},t)}const _=["function tokenURI(uint256 _tokenId) external view returns (string)","function ownerOf(uint256 _tokenId) external view returns (address)","function uri(uint256 _id) external view returns (string)"];async function z(e,t,n){return y(await $([e.tokenURI(t),e.uri(t)]),t,n)}async function L(e,t,n,r){return F(e)?N(t):D(e)?U(t):C(e)?A(t):j(e)?E(t,r):O(e)?R(t,function(e){return async function(t,n,r){const o=new e.ethers.Contract(t,r.humanReadableAbi,e.provider),a=await o._tokenIDToCatID(n);return null!=a?a:""}}(n),r):async function(e,t,n,r){const o=new n.ethers.Contract(e,_,n.provider),[a,i]=await Promise.all([z(o,t,r),o.ownerOf(t).catch((()=>""))]);return{...await q(a,r),owner:i,metadataUrl:a}}(e,t,n,r)}function W(e){let t="";for(let n=0;n<32;++n)t+=("0"+(e>>BigInt(256-8*n-8)&BigInt(255)).toString(16)).slice(-2);return t}function H(e){let t=BigInt(0);for(const n of e)t=(t<<BigInt(8))+BigInt(n);return t}function J(e){var t;return e=e.replace(/^0x/,""),new Uint8Array((null!==(t=e.match(/.{1,2}/g))&&void 0!==t?t:[]).map((e=>parseInt(e,16))))}function G(e){const t=H(J(e).subarray(0,32));if(t>=BigInt(2)**BigInt(160))throw new Error(`Encoded value is bigger than the largest possible address.  Decoded value: 0x${t.toString(16)}.`);return`0x${t.toString(16)}`}function Q(e){return"0xc87b56dd"+W(e)}function Z(e){return"0x6352211e"+W(e)}function K(e,t,n){return e.request({method:"eth_call",params:[{data:n,to:t},"latest"]})}async function V(e,t,n,r){return y(function(e){const t=J(e),n=Number(H(t.subarray(0,32))),r=Number(H(t.subarray(n,n+32))),o=t.subarray(n+32,n+32+r);return(new TextDecoder).decode(o)}(await $(function(e){return[Q(BigInt(e)),(t=BigInt(e),"0x0e89341c"+W(t))];var t}(t).map((t=>K(n,e,t))))),t,r)}async function Y(e,t,n,r){return F(e)?N(t):D(e)?U(t):C(e)?A(t):j(e)?E(t,r):O(e)?R(t,function(e){return async function(t,n,r){if(void 0===e.ethereum)throw new Error("No Ethereum provider");return(await K(e.ethereum,t,r.methodHash+W(BigInt(n)))).slice(0,12)}}(n),r):async function(e,t,{ethereum:n},r){const[o,a]=await Promise.all([V(e,t,n,r),K(n,e,Z(BigInt(t))).then(G).catch((()=>""))]);return{...await q(o,r),owner:a,metadataUrl:o}}(e,t,n,r)}function X(e){const t=function(e){if(!e.ethereum){if(!window.ethereum)throw new Error("Missing ethereum provider.");e.ethereum=window.ethereum}return e}(e);return{config:t,async fetchNft(e,n,r){if(!m(e))throw new Error(`Invalid contract address: ${e}`);return function(e,t){return e.image.startsWith("http")?{...e,image:t(e.image)}:e}(await Y(e,n,t,r),r.imageProxy)}}}const ee={name:"",description:"",image:""};function te(e){return function(e){return Array.isArray(e)&&2==e.length&&"ethers"===e[0]}(e)?{config:t=e[1],async fetchNft(e,n,r){if(!m(e))throw new Error(`Invalid contract address: ${e}`);return o=await L(e,n,t,r),a=r.imageProxy,o.image.startsWith("http")?{...o,image:a(o.image)}:o;var o,a}}:function(e){return Array.isArray(e)&&2==e.length&&"ethereum"===e[0]}(e)?X(e[1]):e;var t}const ne=e.exports.createContext(null),re=function({children:o,fetcher:a,imageProxy:i=g,ipfsUrl:d=v,jsonProxy:s=g}){if(!a)throw new Error("Please set the fetcher prop on <NftProvider />");const[c,{cache:l}]=e.exports.useMemo((()=>{const e=new Map;return[e,t(e)]}),[]),u={cacheStorage:c,fetcher:te(a),imageProxy:i,ipfsUrl:d,jsonProxy:s};return n.createElement(r,{value:{cache:l}},n.createElement(ne.Provider,{value:u},o))};const oe="#a669a2",ae="#dddddd",ie="#000000";function de({children:e}){return a(n.Fragment,null,a(d,{styles:i`
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
            color: ${oe};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${oe};
          }
          a:focus-visible {
            background: ${oe};
            color: ${ae};
          }
        `}),a("main",{css:i`
          max-width: 1440px;
          min-width: 420px;
          margin: 0 auto;
          padding: 0 80px;
          @media (max-width: 900px) {
            padding: 0 40px;
          }
        `},e))}function se({swap:e=!1}){const t=[a("a",{key:"by",href:"https://spectre.xyz/",target:"_blank",css:i`
        text-transform: lowercase;
      `},"by Spectre"),a("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return a("nav",{css:i`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},e?[...t].reverse():t)}function ce(){return a("footer",{css:i`
        padding-top: 50px;
      `},a(se,{swap:!0}))}const le=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function ue(){return le[Math.floor(Math.random()*le.length)]}function fe(){const t=e.exports.useRef(null);return e.exports.useEffect((()=>function(e,t=1e3/60){const n="function"==typeof t?t:()=>t;let r,o=Date.now()-n();const a=()=>{r=requestAnimationFrame(a);const t=Date.now();t-o<n()||(o=t,e())};return a(),()=>cancelAnimationFrame(r)}((()=>{t.current&&(t.current.innerHTML=ue())}),500)),[]),t}function pe(){return a("header",{css:i`
        position: relative;
        padding: 0 0 80px;
      `},a(se,null),a(he,null),a(me,null))}function he(){const e=fe(),{below:t}=s(),n=t(1e3),r=t(800);return a("h1",{title:"useNft()",css:i`
        margin-top: 24px;
        font-size: ${n?"30px":"40px"};
        text-align: center;
      `},"let"," ",a("span",{ref:e,css:i`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},ue())," ","= ",r&&a("br",null),"useNft()")}function me(){return a("p",{css:i`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch metadata from any ",a("abbr",{title:"Non-fungible token"},"NFT"))}function ge(t){const n=e.exports.useRef(null);return e.exports.useEffect((()=>{const e=n.current;null!==e&&(e.muted=!0,e.setAttribute("autoplay",""),e.setAttribute("playsinline",""))}),[]),a("video",{ref:n,...t,tabIndex:-1})}function ve({contract:t,tokenId:n,service:r,url:i}){const{nft:d,loading:s,error:c,reload:l}=function(t,n){const r=e.exports.useContext(ne);if(null===r)throw new Error("Please wrap your app with <NftProvider />");const{cacheStorage:a,fetcher:i,imageProxy:d,ipfsUrl:s,jsonProxy:c}=r,l=e.exports.useMemo((()=>({imageProxy:d,ipfsUrl:s,jsonProxy:c})),[d,s,c]),u=e.exports.useCallback((()=>i?i.fetchNft(t,n,l):{...ee}),[t,i,l,n]),f=a.has(t+n),p=o(t+n,u,{revalidateOnMount:!f,revalidateOnFocus:!1,revalidateOnReconnect:!1});return e.exports.useMemo((()=>{const{error:e,data:t,revalidate:n}=p,r=()=>n();return void 0===e&&void 0===t?{error:void 0,loading:!0,nft:void 0,reload:r,status:"loading"}:void 0!==e?{error:e,loading:!1,nft:void 0,reload:r,status:"error"}:{error:void 0,loading:!1,nft:t,reload:r,status:"done"}}),[p])}(t,n);return a(be,{url:d&&i,label:r},s?a(we,null):c?a(xe,{error:c,reload:l}):a(ye,{nft:d}))}function be({label:e,url:t,children:n}){return a("a",{...t?{href:t,target:"_blank"}:{},css:i`
        display: block;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;
        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${oe};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${oe};
          box-shadow: 0 0 0 2px ${oe};
        }
      `},a("section",{css:i`
          display: grid;
          height: 100%;
          place-items: center;
          grid-template-columns: 100%;
          background: #123;
        `},a("div",{css:i`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            position: relative;
          `},n,a("div",{css:i`
              position: absolute;
              bottom: 0;
              padding: 2px 10px;
              color: ${ie};
              background: ${oe};
            `},e))))}function we(){return a("div",{css:i`
        display: grid;
        height: 100%;
        place-items: center;
      `},"Loading…")}function xe({error:e,reload:t}){return a("div",{css:i`
        display: grid;
        height: 100%;
        place-items: center;
        text-align: center;
        line-height: 2;
      `},a("p",null,"Loading error.",a("br",null)," ",a("button",{onClick:t},"Retry?")))}function ye({nft:e}){if(!e)return null;const{image:t}=e,r=e.name||"Untitled",o=e.description||"−";return a(n.Fragment,null,a("div",{css:i`
          width: 100%;
          height: 280px;
          background: ${oe};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        `},t.endsWith(".mp4")?a(ge,{type:"video/mp4",src:t,height:"280"}):t&&a("img",{src:t,height:"280",alt:""})),a("h1",{css:i`
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
        `},a("span",{title:r},r)),a("p",{title:o,css:i`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `},o))}function ke({nfts:t}){const[n,r]=e.exports.useState(0),o=c(t.length,{progress:n,config:{mass:.5,tension:400,friction:30}});return e.exports.useEffect((()=>r(1)),[]),a("div",{css:i`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-auto-rows: 510px;
      `},o.map((({progress:e},n)=>{const[r,o,i,d]=t[n];return a(l.div,{key:r+o,style:{opacity:e,transform:e.to((e=>`translate3d(0, ${10*(1-e)}px, 0)`))}},a(ve,{contract:r,service:i,tokenId:o,url:d}))})))}var Ie=function(e){const t=[...e];for(let n=t.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}([["0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d","29264283555200707857850216239132066185199","Decentraland Parcels","https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/29264283555200707857850216239132066185199"],["0x959e104e1a4db6317fa58f8295f586e1a978c297","3168","Decentraland Estates","https://market.decentraland.org/contracts/0x959e104e1a4db6317fa58f8295f586e1a978c297/tokens/3168"],["0x32b7495895264ac9d0b12d32afd435453458b1c6","5055","Decentraland Wearables","https://market.decentraland.org/contracts/0x32b7495895264ac9d0b12d32afd435453458b1c6/tokens/4087"],["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2299"],["0x06012c8cf97bead5deae237070f9587f8e7a266d","1976426","CryptoKitties","https://www.cryptokitties.co/kitty/1976426"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"],["0x7c40c393dc0f283f318791d746d894ddd3693572","8549","MoonCats","https://opensea.io/assets/0x7c40c393dc0f283f318791d746d894ddd3693572/8549"],["0xfbeef911dc5821886e1dda71586d90ed28174b7d","307801","KnownOrigin","https://knownorigin.io/gallery/307800-red-forest-fires"],["0xb55c5cac5014c662fdbf21a2c59cd45403c482fd","0x555559a5669969a96a656a995aa55555","Clovers","https://clovers.network/clovers/0xdfffdfffd557fd7ff55fdfdffff7ffff"],["0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756","52832","MakersPlace","https://makersplace.com/jeffreylee1/garden-delights-1-of-1-60178/"],["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","344495","Aito","https://thisisaito.xyz/n/0xd07dc4262bcdbf85190c01c996b4c06a461d2430/344495"],["0x6c7B6cc55d4098400aC787C8793205D3E86C37C9","84","JOYWORLD","https://www.joy.world/joy/the-fry-cult"],["0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7","13396","Meebit","https://meebits.larvalabs.com/meebits/detail?index=13396"]]);const $e=["ethers",{ethers:{Contract:u},provider:new f("homestead","7236f6a36152476ba61279266233a49c")}],Pe=e=>`https://ik.imagekit.io/p/${encodeURIComponent(e)}?tr=n-card`,Ae=e=>`https://api.allorigins.win/raw?url=${encodeURIComponent(e)}`;function Ce(){return a(re,{fetcher:$e,imageProxy:Pe,jsonProxy:Ae},a(de,null,a(pe,null),a(ke,{nfts:Ie}),a(ce,null)))}p.render(a(n.StrictMode,null,a(h,null,a(Ce,null))),document.getElementById("root"));
