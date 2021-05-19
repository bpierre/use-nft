import{r as e,N as n,H as t,L as r,j as o,c as a,G as i,u as d,a as c,b as s,C as l,g as u,d as f,V as p}from"./vendor.5b83ee27.js";function m(e){return/^0x[a-fA-F0-9]{40}$/.test(e)}function h(e,n=""){return`https://ipfs.io/ipfs/${e}${n}`}!function(e=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(t){const r=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[n]=e=>new Promise(((t,a)=>{const i=new URL(e,r);if(self[n].moduleMap[i])return t(self[n].moduleMap[i]);const d=new Blob([`import * as m from '${i}';`,`${n}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){a(new Error(`Failed to import: ${e}`)),o(c)},onload(){t(self[n].moduleMap[i]),o(c)}});document.head.appendChild(c)})),self[n].moduleMap={}}}("/assets/");const g=/^ipfs:\/\/(?:ipfs\/)?([^/]+)(\/.+)?$/,v=/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/;function b(e,n=h){const t=g.exec(e);if(t){const[,e,r=""]=t;return n(e,r)}return v.test(e)?n(e):e}function w(e,n){return e=b(e=function(e){try{const n=new URL(e);return"api.niftygateway.com"!==n.host?e:(n.pathname=n.pathname+"/",String(n))}catch(n){return e}}(e=function(e,n){try{const t=new URL(e);return"api.opensea.io"!==t.host&&"testnets-api.opensea.io"!==t.host||!t.pathname.includes("0x%7Bid%7D")?e:(t.pathname=t.pathname.replace(/0x%7Bid%7D/g,n),t.searchParams.set("format","json"),String(t))}catch(t){return e}}(e,n)))}function y(e,n){return(null==e?void 0:e.toLowerCase())===(null==n?void 0:n.toLowerCase())}function x(e){return k(Promise.all([...e].map(k)))}function k(e){return new Promise(((n,t)=>{Promise.resolve(e).then(t,n)}))}async function I(e){const n=await fetch(e);if(!n.ok)throw new Error("Error when trying to request "+e);let t;try{t=await n.json()}catch(r){t={name:"",description:"",image:e}}if(function(e){var n,t,r,o,a,i,d,c,s,l,u,f;if(!e||"object"!=typeof e)return!1;const p=e;return"Asset Metadata"===p.title&&"object"===p.type&&"string"==typeof(null===(t=null===(n=p.properties)||void 0===n?void 0:n.name)||void 0===t?void 0:t.description)&&"string"==typeof(null===(o=null===(r=p.properties)||void 0===r?void 0:r.image)||void 0===o?void 0:o.description)&&"string"==typeof(null===(i=null===(a=p.properties)||void 0===a?void 0:a.description)||void 0===i?void 0:i.description)&&"string"===(null===(c=null===(d=p.properties)||void 0===d?void 0:d.name)||void 0===c?void 0:c.type)&&"string"===(null===(l=null===(s=p.properties)||void 0===s?void 0:s.image)||void 0===l?void 0:l.type)&&"string"===(null===(f=null===(u=p.properties)||void 0===u?void 0:u.description)||void 0===f?void 0:f.type)}(t)&&(t=function(e){var n,t,r,o,a,i;return{name:(null===(t=null===(n=null==e?void 0:e.properties)||void 0===n?void 0:n.name)||void 0===t?void 0:t.description)||"",description:(null===(o=null===(r=null==e?void 0:e.properties)||void 0===r?void 0:r.description)||void 0===o?void 0:o.description)||"",image:(null===(i=null===(a=null==e?void 0:e.properties)||void 0===a?void 0:a.image)||void 0===i?void 0:i.description)||""}}(t)),t=function(e){if(!e||"object"!=typeof e)return e;const n=e;return void 0===(null==n?void 0:n.image)&&"string"==typeof(null==n?void 0:n.imageUrl)?{...n,image:null==n?void 0:n.imageUrl}:e}(t),!function(e){return!(!e||"object"!=typeof e)&&("name"in e&&"image"in e&&"description"in e)}(t))throw new Error("Invalid data received");return function(e){return{...e,image:(n=e.image,b(n))};var n}({name:t.name||"",image:t.image||"",description:t.description||""})}function $(e){return{description:'\n  10,000 unique collectible characters with proof of ownership stored on the\n  Ethereum blockchain. The project that inspired the modern CryptoArt movement.\n  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721\n  standard that powers most digital art and collectibles.\n',image:`https://www.larvalabs.com/cryptopunks/cryptopunk${e}.png`,name:`CryptoPunk ${e}`,owner:""}}function A(e){return y(e,"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb")}async function E(e){var n,t,r;const o=await fetch(`https://api.cryptokitties.co/v3/kitties/${e}`),a=await o.json();return{description:null!==(n=null==a?void 0:a.bio)&&void 0!==n?n:"−",image:null!==(t=null==a?void 0:a.image_url)&&void 0!==t?t:"",name:null!==(r=null==a?void 0:a.name)&&void 0!==r?r:"Unknown",owner:""}}function B(e){return y(e,"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d")}function C(e,n){return JSON.stringify({operationName:"NFTByTokenId",variables:{contractAddress:e,tokenId:n},query:"\n  query NFTByTokenId($contractAddress: String, $tokenId: String) {\n    nfts(\n      where: { contractAddress: $contractAddress, tokenId: $tokenId }\n      first: 1\n    ) {\n      name\n      image\n      owner {\n        address\n      }\n      estate {\n        size\n        data {\n          description\n        }\n      }\n    }\n  }\n"})}async function M(e){var n,t,r,o,a,i,d,c;const s=await fetch("https://api.thegraph.com/subgraphs/name/decentraland/marketplace",{body:C("0x959e104E1a4dB6317fA58F8295F586e1A978c297",e),method:"POST"}),{data:l}=await s.json(),u=null===(n=null==l?void 0:l.nfts)||void 0===n?void 0:n[0];return{description:null!==(o=null===(r=null===(t=null==u?void 0:u.estate)||void 0===t?void 0:t.data)||void 0===r?void 0:r.description)&&void 0!==o?o:"−",image:null!==(a=null==u?void 0:u.image)&&void 0!==a?a:"",name:null!==(i=null==u?void 0:u.name)&&void 0!==i?i:"Unknown",owner:null!==(c=null===(d=null==u?void 0:u.owner)||void 0===d?void 0:d.address)&&void 0!==c?c:""}}function F(e){return y(e,"0x959e104E1a4dB6317fA58F8295F586e1A978c297")}function D(e,n){return JSON.stringify({operationName:"NFTByTokenId",variables:{contractAddress:e,tokenId:n},query:"\n  query NFTByTokenId($contractAddress: String, $tokenId: String) {\n    nfts(\n      where: { contractAddress: $contractAddress, tokenId: $tokenId }\n      first: 1\n    ) {\n      name\n      image\n      owner {\n        address\n      }\n      parcel {\n        x\n        y\n        data {\n          description\n        }\n      }\n    }\n  }\n"})}async function P(e){var n,t,r,o,a,i,d;const c=await fetch("https://api.thegraph.com/subgraphs/name/decentraland/marketplace",{body:D("0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d",e),method:"POST"}),{data:s}=await c.json(),l=null===(n=null==s?void 0:s.nfts)||void 0===n?void 0:n[0],u=null==l?void 0:l.parcel;return{description:null!==(r=null===(t=null==u?void 0:u.data)||void 0===t?void 0:t.description)&&void 0!==r?r:"−",image:null!==(o=null==l?void 0:l.image)&&void 0!==o?o:"",name:null!==(a=null==l?void 0:l.name)&&void 0!==a?a:`Parcel ${null==u?void 0:u.x},${null==u?void 0:u.y}`,owner:null!==(d=null===(i=null==l?void 0:l.owner)||void 0===i?void 0:i.address)&&void 0!==d?d:""}}function j(e){return y(e,"0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d")}const N={address:"0x7c40c393dc0f283f318791d746d894ddd3693572",methodName:"_tokenIDToCatID",methodHash:"0xfe294644",humanReadableAbi:["function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)"]};async function T(e){const n=b(`ipfs://ipfs/bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava/${e.slice(4,6)}/${e}.png`);var t;return function(e,{scale:n=1,padding:t=0}={}){const r=e.naturalWidth*n,o=e.naturalHeight*n,a=Math.max(r*t,o*t),i=document.createElement("canvas");i.width=r+2*a,i.height=o+2*a;const d=i.getContext("2d");return null===d?null:(d.imageSmoothingEnabled=!1,d.drawImage(e,a,a,r,o),i.toDataURL())}(await(t=n,new Promise(((e,n)=>{const r=new Image;r.src=t,r.crossOrigin="",r.onload=()=>e(r),r.onerror=e=>n(e)}))),{scale:4,padding:.125})}async function R(e,n){var t;const r=await n(N.address,e,N);return{name:`Wrapped MoonCat #${e}`,description:`The (unofficial) wrapped version of MoonCats Rescue. Original cat ID: ${r}.`,image:null!==(t=await T(r))&&void 0!==t?t:"",owner:""}}function S(e){return y(e,N.address)}const U=["function tokenURI(uint256 _tokenId) external view returns (string)","function ownerOf(uint256 _tokenId) external view returns (address)","function uri(uint256 _id) external view returns (string)","function supportsInterface(bytes4 interfaceID) external view returns (bool)"];async function _(e,n){return w(await x([e.uri(n),e.tokenURI(n)]),n)}function O(e){return{config:e,async fetchNft(n,t){if(!m(n))throw new Error(`Invalid contract address: ${n}`);if(j(n))return P(t);if(F(n))return M(t);if(A(n))return $(t);if(B(n))return E(t);if(S(n))return R(t,function(e){return async function(n,t,r){const o=new e.ethers.Contract(n,r.humanReadableAbi,e.provider),a=await o._tokenIDToCatID(t);return null!=a?a:""}}(e));const[r,o]=await async function(e,n,t){const r=new t.ethers.Contract(e,U,t.provider);return Promise.all([_(r,n),r.ownerOf(n).catch((()=>""))])}(n,t,e);return{...await I(r),owner:o}}}}function L(e){let n="";for(let t=0;t<32;++t)n+=("0"+(e>>BigInt(256-8*t-8)&BigInt(255)).toString(16)).slice(-2);return n}function q(e){let n=BigInt(0);for(const t of e)n=(n<<BigInt(8))+BigInt(t);return n}function z(e){var n;return e=e.replace(/^0x/,""),new Uint8Array((null!==(n=e.match(/.{1,2}/g))&&void 0!==n?n:[]).map((e=>parseInt(e,16))))}function H(e){return q(z(e))!==BigInt(0)}function J(e){const n=q(z(e).subarray(0,32));if(n>=BigInt(2)**BigInt(160))throw new Error(`Encoded value is bigger than the largest possible address.  Decoded value: 0x${n.toString(16)}.`);return`0x${n.toString(16)}`}function W(e){return"0xc87b56dd"+L(e)}function G(e){return"0x01ffc9a7"+e.replace(/^0x/,"").padEnd(64,"0")}function K(e,n,t){return e.request({method:"eth_call",params:[{data:t,to:n},"latest"]})}const Q=["0x79986aF15539de2db9A5086382daEdA917A9CF0C"];async function V(e,n,{ethereum:t}){if(!t)return["",""];const r=async r=>w(function(e){const n=z(e),t=Number(q(n.subarray(0,32))),r=Number(q(n.subarray(t,t+32))),o=n.subarray(t+32,t+32+r);return(new TextDecoder).decode(o)}(await K(t,e,r)),n),o=K(t,e,function(e){return"0x6352211e"+L(e)}(BigInt(n))).then(J).catch((()=>""));if(Q.some((n=>y(n,e))))return Promise.all([r(W(BigInt(n))),o]);const a=[[G("0x80ac58cd"),W(BigInt(n))],[G("0xd9b67a26"),(i=BigInt(n),"0x0e89341c"+L(i))]];var i;try{return x(a.map((async([n,a])=>{if(!(await K(t,e,n).then(H)))throw new Error("Unsupported method");return Promise.all([r(a),o])})))}catch(d){return["",""]}}function Z(e){return{config:e,async fetchNft(n,t){if(!m(n))throw new Error(`Invalid contract address: ${n}`);if(j(n))return P(t);if(F(n))return M(t);if(A(n))return $(t);if(B(n))return E(t);if(S(n))return R(t,function(e){return async function(n,t,r){if(void 0===e.ethereum)throw new Error("No Ethereum provider");return(await K(e.ethereum,n,r.methodHash+L(BigInt(t)))).slice(0,12)}}(e));const[r,o]=await V(n,t,e);return{...await I(r),owner:o}}}}const Y={name:"",description:"",image:""};function X(e){return e?function(e){return Array.isArray(e)&&2==e.length&&"ethers"===e[0]}(e)?O(e[1]):function(e){return Array.isArray(e)&&2==e.length&&"ethereum"===e[0]}(e)?Z(e[1]):e:{config:{},fetchNft:()=>Promise.resolve(Y)}}const ee=e.createContext(null),ne=function({children:r,fetcher:o}){const[a,{cache:i}]=e.useMemo((()=>{const e=new Map;return[e,n(e)]}),[]),d={cacheStorage:a,fetcher:X(o)};return e.createElement(t,{value:{cache:i}},e.createElement(ee.Provider,{value:d},r))};const te="#a669a2",re="#dddddd",oe="#000000";function ae({children:n}){return o(e.Fragment,null,o(i,{styles:a`
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
            color: ${te};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${te};
          }
          a:focus-visible {
            background: ${te};
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
        `},n))}function ie({swap:e=!1}){const n=[o("a",{key:"by",href:"https://spectre.xyz/",target:"_blank"},"by spectre_"),o("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return o("nav",{css:a`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},e?[...n].reverse():n)}function de(){return o("footer",{css:a`
        padding-top: 50px;
      `},o(ie,{swap:!0}))}const ce=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function se(){return ce[Math.floor(Math.random()*ce.length)]}function le(){const n=e.useRef(null);return e.useEffect((()=>function(e,n=1e3/60){const t="function"==typeof n?n:()=>n;let r,o=Date.now()-t();const a=()=>{r=requestAnimationFrame(a);const n=Date.now();n-o<t()||(o=n,e())};return a(),()=>cancelAnimationFrame(r)}((()=>{n.current&&(n.current.innerHTML=se())}),500)),[]),n}function ue(){return o("header",{css:a`
        position: relative;
        padding: 0 0 80px;
      `},o(ie,null),o(fe,null),o(pe,null))}function fe(){const e=le(),{below:n}=d(),t=n(1e3),r=n(800);return o("h1",{title:"useNft()",css:a`
        margin-top: 24px;
        font-size: ${t?"30px":"40px"};
        text-align: center;
      `},"let"," ",o("span",{ref:e,css:a`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},se())," ","= ",r&&o("br",null),"useNft(",r?"addr":"address",", id)")}function pe(){return o("p",{css:a`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch NFT metadata from anywhere.")}function me(n){const t=e.useRef(null);return e.useEffect((()=>{const e=t.current;null!==e&&(e.muted=!0,e.setAttribute("autoplay",""),e.setAttribute("playsinline",""))}),[]),o("video",{ref:t,...n,tabIndex:-1})}function he({contract:n,tokenId:t,service:a,url:i}){const{nft:d,loading:c,error:s,reload:l}=function(n,t){const o=e.useContext(ee);if(null===o)throw new Error("Please wrap your app with <NftProvider />");const{fetcher:a,cacheStorage:i}=o,d=e.useCallback((()=>a?a.fetchNft(n,t):{...Y}),[n,a,t]),c=i.has(n+t),s=r(n+t,d,{revalidateOnMount:!c,revalidateOnFocus:!1,revalidateOnReconnect:!1});return e.useMemo((()=>{const{error:e,data:n,revalidate:t}=s,r=()=>t();return void 0===e&&void 0===n?{error:void 0,loading:!0,nft:void 0,reload:r,status:"loading"}:void 0!==e?{error:e,loading:!1,nft:void 0,reload:r,status:"error"}:{error:void 0,loading:!1,nft:n,reload:r,status:"done"}}),[s])}(n,t);return o(ge,{url:d&&i,label:a},c?o(ve,null):s?o(be,{error:s,reload:l}):o(we,{nft:d}))}function ge({label:e,url:n,children:t}){return o("a",{...n?{href:n,target:"_blank"}:{},css:a`
        display: block;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;
        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${te};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${te};
          box-shadow: 0 0 0 2px ${te};
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
          `},t,o("div",{css:a`
              position: absolute;
              bottom: 0;
              padding: 2px 10px;
              color: ${oe};
              background: ${te};
            `},e))))}function ve(){return o("div",{css:a`
        display: grid;
        height: 100%;
        place-items: center;
      `},"Loading…")}function be({error:e,reload:n}){return o("div",{css:a`
        display: grid;
        height: 100%;
        place-items: center;
        text-align: center;
        line-height: 2;
      `},o("p",null,"Loading error.",o("br",null)," ",o("button",{onClick:n},"Retry?")))}function we({nft:n}){if(!n)return null;const{image:t}=n,r=n.name||"Untitled",i=n.description||"−";return o(e.Fragment,null,o("div",{css:a`
          width: 100%;
          height: 280px;
          background: ${te};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        `},t.endsWith(".mp4")?o(me,{type:"video/mp4",src:t,height:"280"}):t&&o("img",{src:t,height:"280",alt:""})),o("h1",{css:a`
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
        `},i))}function ye({nfts:n}){const[t,r]=e.useState(0),i=c(n.length,{progress:t,config:{mass:.5,tension:400,friction:30}});return e.useEffect((()=>r(1)),[]),o("div",{css:a`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-auto-rows: 510px;
      `},i.map((({progress:e},t)=>{const[r,a,i,d]=n[t];return o(s.div,{key:r+a,style:{opacity:e,transform:e.to((e=>`translate3d(0, ${10*(1-e)}px, 0)`))}},o(he,{contract:r,service:i,tokenId:a,url:d}))})))}var xe=function(e){const n=[...e];for(let t=n.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[n[t],n[e]]=[n[e],n[t]]}return n}([["0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d","29264283555200707857850216239132066185199","Decentraland Parcels","https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/29264283555200707857850216239132066185199"],["0x959e104e1a4db6317fa58f8295f586e1a978c297","3168","Decentraland Estates","https://market.decentraland.org/contracts/0x959e104e1a4db6317fa58f8295f586e1a978c297/tokens/3168"],["0x32b7495895264ac9d0b12d32afd435453458b1c6","5055","Decentraland Wearables","https://market.decentraland.org/contracts/0x32b7495895264ac9d0b12d32afd435453458b1c6/tokens/4087"],["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2299"],["0x06012c8cf97bead5deae237070f9587f8e7a266d","1976426","CryptoKitties","https://www.cryptokitties.co/kitty/1976426"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"],["0x7c40c393dc0f283f318791d746d894ddd3693572","8549","MoonCats","https://opensea.io/assets/0x7c40c393dc0f283f318791d746d894ddd3693572/8549"],["0xfbeef911dc5821886e1dda71586d90ed28174b7d","307801","KnownOrigin","https://knownorigin.io/gallery/307800-red-forest-fires"],["0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756","52832","MakersPlace","https://makersplace.com/jeffreylee1/garden-delights-1-of-1-60178/"]]);const ke=["ethers",{ethers:{Contract:l},provider:u("homestead",{infura:{}.VITE_INFURA_KEY})}];function Ie(){return o(ne,{fetcher:ke},o(ae,null,o(ue,null),o(ye,{nfts:xe}),o(de,null)))}f.render(o(e.StrictMode,null,o(p,null,o(Ie,null))),document.getElementById("root"));
