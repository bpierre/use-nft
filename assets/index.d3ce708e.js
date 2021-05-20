import{r as e,N as t,H as n,L as r,j as o,c as a,G as i,u as d,a as c,b as s,C as l,g as u,d as f,V as p}from"./vendor.5b83ee27.js";function m(e){return/^0x[a-fA-F0-9]{40}$/.test(e)}function h(e,t=""){return`https://ipfs.io/ipfs/${e}${t}`}!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,a)=>{const i=new URL(e,r);if(self[t].moduleMap[i])return n(self[t].moduleMap[i]);const d=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){a(new Error(`Failed to import: ${e}`)),o(c)},onload(){n(self[t].moduleMap[i]),o(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const g=/^ipfs:\/\/(?:ipfs\/)?([^/]+)(\/.+)?$/,v=/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/;function b(e,t=h){const n=g.exec(e);if(n){const[,e,r=""]=n;return t(e,r)}return v.test(e)?t(e):e}function w(e,t){return e=b(e=function(e){try{const t=new URL(e);return"api.niftygateway.com"!==t.host?e:(t.pathname=t.pathname+"/",String(t))}catch(t){return e}}(e=function(e,t){try{const n=new URL(e);return"api.opensea.io"!==n.host&&"testnets-api.opensea.io"!==n.host||!n.pathname.includes("0x%7Bid%7D")?e:(n.pathname=n.pathname.replace(/0x%7Bid%7D/g,t),n.searchParams.set("format","json"),String(n))}catch(n){return e}}(e,t)))}function y(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}function x(e){return k(Promise.all([...e].map(k)))}function k(e){return new Promise(((t,n)=>{Promise.resolve(e).then(n,t)}))}async function I(e){const t=await fetch(e);if(!t.ok)throw new Error("Error when trying to request "+e);let n;try{n=await t.json()}catch(r){n={name:"",description:"",image:e}}if(function(e){var t,n,r,o,a,i,d,c,s,l,u,f;if(!e||"object"!=typeof e)return!1;const p=e;return"Asset Metadata"===p.title&&"object"===p.type&&"string"==typeof(null===(n=null===(t=p.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)&&"string"==typeof(null===(o=null===(r=p.properties)||void 0===r?void 0:r.image)||void 0===o?void 0:o.description)&&"string"==typeof(null===(i=null===(a=p.properties)||void 0===a?void 0:a.description)||void 0===i?void 0:i.description)&&"string"===(null===(c=null===(d=p.properties)||void 0===d?void 0:d.name)||void 0===c?void 0:c.type)&&"string"===(null===(l=null===(s=p.properties)||void 0===s?void 0:s.image)||void 0===l?void 0:l.type)&&"string"===(null===(f=null===(u=p.properties)||void 0===u?void 0:u.description)||void 0===f?void 0:f.type)}(n)&&(n=function(e){var t,n,r,o,a,i;return{name:(null===(n=null===(t=null==e?void 0:e.properties)||void 0===t?void 0:t.name)||void 0===n?void 0:n.description)||"",description:(null===(o=null===(r=null==e?void 0:e.properties)||void 0===r?void 0:r.description)||void 0===o?void 0:o.description)||"",image:(null===(i=null===(a=null==e?void 0:e.properties)||void 0===a?void 0:a.image)||void 0===i?void 0:i.description)||""}}(n)),n=function(e){if(!e||"object"!=typeof e)return e;const t=e;return void 0===(null==t?void 0:t.image)&&"string"==typeof(null==t?void 0:t.imageUrl)?{...t,image:null==t?void 0:t.imageUrl}:e}(n),!function(e){return!(!e||"object"!=typeof e)&&("name"in e&&"image"in e&&"description"in e)}(n))throw new Error("Invalid data received");return function(e){return{...e,image:(t=e.image,b(t))};var t}({name:n.name||"",image:n.image||"",description:n.description||""})}function $(e){return{description:'\n  10,000 unique collectible characters with proof of ownership stored on the\n  Ethereum blockchain. The project that inspired the modern CryptoArt movement.\n  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721\n  standard that powers most digital art and collectibles.\n',image:`https://www.larvalabs.com/cryptopunks/cryptopunk${e}.png`,name:`CryptoPunk ${e}`,owner:""}}function A(e){return y(e,"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb")}async function E(e){var t,n,r;const o=await fetch(`https://api.cryptokitties.co/v3/kitties/${e}`),a=await o.json();return{description:null!==(t=null==a?void 0:a.bio)&&void 0!==t?t:"−",image:null!==(n=null==a?void 0:a.image_url)&&void 0!==n?n:"",name:null!==(r=null==a?void 0:a.name)&&void 0!==r?r:"Unknown",owner:""}}function B(e){return y(e,"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d")}function C(e,t){return JSON.stringify({operationName:"NFTByTokenId",variables:{contractAddress:e,tokenId:t},query:"\n  query NFTByTokenId($contractAddress: String, $tokenId: String) {\n    nfts(\n      where: { contractAddress: $contractAddress, tokenId: $tokenId }\n      first: 1\n    ) {\n      name\n      image\n      owner {\n        address\n      }\n      estate {\n        size\n        data {\n          description\n        }\n      }\n    }\n  }\n"})}async function M(e){var t,n,r,o,a,i,d,c;const s=await fetch("https://api.thegraph.com/subgraphs/name/decentraland/marketplace",{body:C("0x959e104E1a4dB6317fA58F8295F586e1A978c297",e),method:"POST"}),{data:l}=await s.json(),u=null===(t=null==l?void 0:l.nfts)||void 0===t?void 0:t[0];return{description:null!==(o=null===(r=null===(n=null==u?void 0:u.estate)||void 0===n?void 0:n.data)||void 0===r?void 0:r.description)&&void 0!==o?o:"−",image:null!==(a=null==u?void 0:u.image)&&void 0!==a?a:"",name:null!==(i=null==u?void 0:u.name)&&void 0!==i?i:"Unknown",owner:null!==(c=null===(d=null==u?void 0:u.owner)||void 0===d?void 0:d.address)&&void 0!==c?c:""}}function F(e){return y(e,"0x959e104E1a4dB6317fA58F8295F586e1A978c297")}function D(e,t){return JSON.stringify({operationName:"NFTByTokenId",variables:{contractAddress:e,tokenId:t},query:"\n  query NFTByTokenId($contractAddress: String, $tokenId: String) {\n    nfts(\n      where: { contractAddress: $contractAddress, tokenId: $tokenId }\n      first: 1\n    ) {\n      name\n      image\n      owner {\n        address\n      }\n      parcel {\n        x\n        y\n        data {\n          description\n        }\n      }\n    }\n  }\n"})}async function N(e){var t,n,r,o,a,i,d;const c=await fetch("https://api.thegraph.com/subgraphs/name/decentraland/marketplace",{body:D("0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d",e),method:"POST"}),{data:s}=await c.json(),l=null===(t=null==s?void 0:s.nfts)||void 0===t?void 0:t[0],u=null==l?void 0:l.parcel;return{description:null!==(r=null===(n=null==u?void 0:u.data)||void 0===n?void 0:n.description)&&void 0!==r?r:"−",image:null!==(o=null==l?void 0:l.image)&&void 0!==o?o:"",name:null!==(a=null==l?void 0:l.name)&&void 0!==a?a:`Parcel ${null==u?void 0:u.x},${null==u?void 0:u.y}`,owner:null!==(d=null===(i=null==l?void 0:l.owner)||void 0===i?void 0:i.address)&&void 0!==d?d:""}}function P(e){return y(e,"0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d")}const j={address:"0x7c40c393dc0f283f318791d746d894ddd3693572",methodName:"_tokenIDToCatID",methodHash:"0xfe294644",humanReadableAbi:["function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)"]};async function T(e){const t=b(`ipfs://ipfs/bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava/${e.slice(4,6)}/${e}.png`);var n;return function(e,{scale:t=1,padding:n=0}={}){const r=e.naturalWidth*t,o=e.naturalHeight*t,a=Math.max(r*n,o*n),i=document.createElement("canvas");i.width=r+2*a,i.height=o+2*a;const d=i.getContext("2d");return null===d?null:(d.imageSmoothingEnabled=!1,d.drawImage(e,a,a,r,o),i.toDataURL())}(await(n=t,new Promise(((e,t)=>{const r=new Image;r.src=n,r.crossOrigin="",r.onload=()=>e(r),r.onerror=e=>t(e)}))),{scale:4,padding:.125})}async function R(e,t){var n;const r=await t(j.address,e,j);return{name:`Wrapped MoonCat #${e}`,description:`The (unofficial) wrapped version of MoonCats Rescue. Original cat ID: ${r}.`,image:null!==(n=await T(r))&&void 0!==n?n:"",owner:""}}function S(e){return y(e,j.address)}const U=["function tokenURI(uint256 _tokenId) external view returns (string)","function ownerOf(uint256 _tokenId) external view returns (address)","function uri(uint256 _id) external view returns (string)","function supportsInterface(bytes4 interfaceID) external view returns (bool)"];async function _(e,t){return w(await x([e.uri(t),e.tokenURI(t)]),t)}function O(e){return{config:e,async fetchNft(t,n){if(!m(t))throw new Error(`Invalid contract address: ${t}`);if(P(t))return N(n);if(F(t))return M(n);if(A(t))return $(n);if(B(t))return E(n);if(S(t))return R(n,function(e){return async function(t,n,r){const o=new e.ethers.Contract(t,r.humanReadableAbi,e.provider),a=await o._tokenIDToCatID(n);return null!=a?a:""}}(e));const[r,o]=await async function(e,t,n){const r=new n.ethers.Contract(e,U,n.provider);return Promise.all([_(r,t),r.ownerOf(t).catch((()=>""))])}(t,n,e);return{...await I(r),owner:o}}}}function L(e){let t="";for(let n=0;n<32;++n)t+=("0"+(e>>BigInt(256-8*n-8)&BigInt(255)).toString(16)).slice(-2);return t}function q(e){let t=BigInt(0);for(const n of e)t=(t<<BigInt(8))+BigInt(n);return t}function z(e){var t;return e=e.replace(/^0x/,""),new Uint8Array((null!==(t=e.match(/.{1,2}/g))&&void 0!==t?t:[]).map((e=>parseInt(e,16))))}function H(e){return q(z(e))!==BigInt(0)}function W(e){const t=q(z(e).subarray(0,32));if(t>=BigInt(2)**BigInt(160))throw new Error(`Encoded value is bigger than the largest possible address.  Decoded value: 0x${t.toString(16)}.`);return`0x${t.toString(16)}`}function J(e){return"0xc87b56dd"+L(e)}function G(e){return"0x01ffc9a7"+e.replace(/^0x/,"").padEnd(64,"0")}function K(e,t,n){return e.request({method:"eth_call",params:[{data:n,to:t},"latest"]})}const Q=["0x79986aF15539de2db9A5086382daEdA917A9CF0C"];async function V(e,t,{ethereum:n}){if(!n)return["",""];const r=async r=>w(function(e){const t=z(e),n=Number(q(t.subarray(0,32))),r=Number(q(t.subarray(n,n+32))),o=t.subarray(n+32,n+32+r);return(new TextDecoder).decode(o)}(await K(n,e,r)),t),o=K(n,e,function(e){return"0x6352211e"+L(e)}(BigInt(t))).then(W).catch((()=>""));if(Q.some((t=>y(t,e))))return Promise.all([r(J(BigInt(t))),o]);const a=[[G("0x80ac58cd"),J(BigInt(t))],[G("0xd9b67a26"),(i=BigInt(t),"0x0e89341c"+L(i))]];var i;try{return x(a.map((async([t,a])=>{if(!(await K(n,e,t).then(H)))throw new Error("Unsupported method");return Promise.all([r(a),o])})))}catch(d){return["",""]}}function Z(e){return{config:e,async fetchNft(t,n){if(!m(t))throw new Error(`Invalid contract address: ${t}`);if(P(t))return N(n);if(F(t))return M(n);if(A(t))return $(n);if(B(t))return E(n);if(S(t))return R(n,function(e){return async function(t,n,r){if(void 0===e.ethereum)throw new Error("No Ethereum provider");return(await K(e.ethereum,t,r.methodHash+L(BigInt(n)))).slice(0,12)}}(e));const[r,o]=await V(t,n,e);return{...await I(r),owner:o}}}}const Y={name:"",description:"",image:""};function X(e){return e?function(e){return Array.isArray(e)&&2==e.length&&"ethers"===e[0]}(e)?O(e[1]):function(e){return Array.isArray(e)&&2==e.length&&"ethereum"===e[0]}(e)?Z(e[1]):e:{config:{},fetchNft:()=>Promise.resolve(Y)}}const ee=e.createContext(null),te=function({children:r,fetcher:o}){const[a,{cache:i}]=e.useMemo((()=>{const e=new Map;return[e,t(e)]}),[]),d={cacheStorage:a,fetcher:X(o)};return e.createElement(n,{value:{cache:i}},e.createElement(ee.Provider,{value:d},r))};const ne="#a669a2",re="#dddddd",oe="#000000";function ae({children:t}){return o(e.Fragment,null,o(i,{styles:a`
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
            color: ${ne};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${ne};
          }
          a:focus-visible {
            background: ${ne};
            color: ${re};
          }
        `}),o("main",{css:a`
          max-width: 1440px;
          min-width: 420px;
          margin: 0 auto;
          padding: 0 80px;
          @media (max-width: 900px) {
            padding: 0 40px;
          }
        `},t))}function ie({swap:e=!1}){const t=[o("a",{key:"by",href:"https://spectre.xyz/",target:"_blank",css:a`
        text-transform: lowercase;
      `},"by Spectre"),o("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return o("nav",{css:a`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},e?[...t].reverse():t)}function de(){return o("footer",{css:a`
        padding-top: 50px;
      `},o(ie,{swap:!0}))}const ce=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function se(){return ce[Math.floor(Math.random()*ce.length)]}function le(){const t=e.useRef(null);return e.useEffect((()=>function(e,t=1e3/60){const n="function"==typeof t?t:()=>t;let r,o=Date.now()-n();const a=()=>{r=requestAnimationFrame(a);const t=Date.now();t-o<n()||(o=t,e())};return a(),()=>cancelAnimationFrame(r)}((()=>{t.current&&(t.current.innerHTML=se())}),500)),[]),t}function ue(){return o("header",{css:a`
        position: relative;
        padding: 0 0 80px;
      `},o(ie,null),o(fe,null),o(pe,null))}function fe(){const e=le(),{below:t}=d(),n=t(1e3),r=t(800);return o("h1",{title:"useNft()",css:a`
        margin-top: 24px;
        font-size: ${n?"30px":"40px"};
        text-align: center;
      `},"let"," ",o("span",{ref:e,css:a`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},se())," ","= ",r&&o("br",null),"useNft()")}function pe(){return o("p",{css:a`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch metadata from any ",o("abbr",{title:"Non-fungible token"},"NFT"))}function me(t){const n=e.useRef(null);return e.useEffect((()=>{const e=n.current;null!==e&&(e.muted=!0,e.setAttribute("autoplay",""),e.setAttribute("playsinline",""))}),[]),o("video",{ref:n,...t,tabIndex:-1})}function he({contract:t,tokenId:n,service:a,url:i}){const{nft:d,loading:c,error:s,reload:l}=function(t,n){const o=e.useContext(ee);if(null===o)throw new Error("Please wrap your app with <NftProvider />");const{fetcher:a,cacheStorage:i}=o,d=e.useCallback((()=>a?a.fetchNft(t,n):{...Y}),[t,a,n]),c=i.has(t+n),s=r(t+n,d,{revalidateOnMount:!c,revalidateOnFocus:!1,revalidateOnReconnect:!1});return e.useMemo((()=>{const{error:e,data:t,revalidate:n}=s,r=()=>n();return void 0===e&&void 0===t?{error:void 0,loading:!0,nft:void 0,reload:r,status:"loading"}:void 0!==e?{error:e,loading:!1,nft:void 0,reload:r,status:"error"}:{error:void 0,loading:!1,nft:t,reload:r,status:"done"}}),[s])}(t,n);return o(ge,{url:d&&i,label:a},c?o(ve,null):s?o(be,{error:s,reload:l}):o(we,{nft:d}))}function ge({label:e,url:t,children:n}){return o("a",{...t?{href:t,target:"_blank"}:{},css:a`
        display: block;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;
        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${ne};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${ne};
          box-shadow: 0 0 0 2px ${ne};
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
              color: ${oe};
              background: ${ne};
            `},e))))}function ve(){return o("div",{css:a`
        display: grid;
        height: 100%;
        place-items: center;
      `},"Loading…")}function be({error:e,reload:t}){return o("div",{css:a`
        display: grid;
        height: 100%;
        place-items: center;
        text-align: center;
        line-height: 2;
      `},o("p",null,"Loading error.",o("br",null)," ",o("button",{onClick:t},"Retry?")))}function we({nft:t}){if(!t)return null;const{image:n}=t,r=t.name||"Untitled",i=t.description||"−";return o(e.Fragment,null,o("div",{css:a`
          width: 100%;
          height: 280px;
          background: ${ne};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        `},n.endsWith(".mp4")?o(me,{type:"video/mp4",src:`https://ik.imagekit.io/p/${n}?tr=n-card`,height:"280"}):n&&o("img",{src:n.startsWith("http")?`https://ik.imagekit.io/p/${n}?tr=n-card`:n,height:"280",alt:""})),o("h1",{css:a`
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
        `},o("span",{title:r},r)),o("p",{title:i,css:a`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `},i))}function ye({nfts:t}){const[n,r]=e.useState(0),i=c(t.length,{progress:n,config:{mass:.5,tension:400,friction:30}});return e.useEffect((()=>r(1)),[]),o("div",{css:a`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-auto-rows: 510px;
      `},i.map((({progress:e},n)=>{const[r,a,i,d]=t[n];return o(s.div,{key:r+a,style:{opacity:e,transform:e.to((e=>`translate3d(0, ${10*(1-e)}px, 0)`))}},o(he,{contract:r,service:i,tokenId:a,url:d}))})))}var xe=function(e){const t=[...e];for(let n=t.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}([["0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d","29264283555200707857850216239132066185199","Decentraland Parcels","https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/29264283555200707857850216239132066185199"],["0x959e104e1a4db6317fa58f8295f586e1a978c297","3168","Decentraland Estates","https://market.decentraland.org/contracts/0x959e104e1a4db6317fa58f8295f586e1a978c297/tokens/3168"],["0x32b7495895264ac9d0b12d32afd435453458b1c6","5055","Decentraland Wearables","https://market.decentraland.org/contracts/0x32b7495895264ac9d0b12d32afd435453458b1c6/tokens/4087"],["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2299"],["0x06012c8cf97bead5deae237070f9587f8e7a266d","1976426","CryptoKitties","https://www.cryptokitties.co/kitty/1976426"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"],["0x7c40c393dc0f283f318791d746d894ddd3693572","8549","MoonCats","https://opensea.io/assets/0x7c40c393dc0f283f318791d746d894ddd3693572/8549"],["0xfbeef911dc5821886e1dda71586d90ed28174b7d","307801","KnownOrigin","https://knownorigin.io/gallery/307800-red-forest-fires"],["0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756","52832","MakersPlace","https://makersplace.com/jeffreylee1/garden-delights-1-of-1-60178/"]]);const ke=["ethers",{ethers:{Contract:l},provider:u("homestead",{infura:{}.VITE_INFURA_KEY})}];function Ie(){return o(te,{fetcher:ke},o(ae,null,o(ue,null),o(ye,{nfts:xe}),o(de,null)))}f.render(o(e.StrictMode,null,o(p,null,o(Ie,null))),document.getElementById("root"));
