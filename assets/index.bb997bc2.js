import{r as t,m as e,j as n,G as o,c as r,u as i,a,b as c,C as s,g as d,d as l,V as u}from"./vendor.b89b410c.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(n){const o=new URL(t,location),r=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((n,i)=>{const a=new URL(t,o);if(self[e].moduleMap[a])return n(self[e].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${e}.moduleMap['${a}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){i(new Error(`Failed to import: ${t}`)),r(s)},onload(){n(self[e].moduleMap[a]),r(s)}});document.head.appendChild(s)})),self[e].moduleMap={}}}("/assets/");const p=t.createContext(null);function f({children:e,fetcher:n}){return t.createElement(p.Provider,{value:{fetcher:n}},e)}function h(t,e=""){return`https://ipfs.io/ipfs/${t}${e}`}function m(t,e=h){const n=t.match(/^ipfs:\/\/ipfs\/([^\/]+)(\/.+)?$/);if(n){const[,t,o=""]=n;return e(t,o)}return/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/.test(t)?`https://ipfs.io/ipfs/${t}`:t}function v(t,e){return t=m(t=function(t){try{const e=new URL(t);return"api.niftygateway.com"!==e.host?t:(e.pathname=e.pathname+"/",String(e))}catch(e){return t}}(t=function(t,e){try{const n=new URL(t);return"api.opensea.io"===n.host&&n.pathname.includes("0x%7Bid%7D")?(n.pathname=n.pathname.replace(/0x%7Bid%7D/g,e),n.searchParams.set("format","json"),String(n)):t}catch(n){return t}}(t,e)))}function g(t,e){return(null==t?void 0:t.toLowerCase())===(null==e?void 0:e.toLowerCase())}const b=["function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)"];async function w(t,n){var o;const r=new n.ethers.Contract("0x7c40c393dc0f283f318791d746d894ddd3693572",b,n.provider),i=await r._tokenIDToCatID(t);return{name:`Wrapped MoonCat #${t}`,description:`The (unofficial) wrapped version of MoonCats Rescue. catId: ${i}.`,image:null!==(o=function(t){const n=e(t),o=10*n.length,r=10*n[0].length,i=document.createElement("canvas");i.width=o,i.height=r;const a=i.getContext("2d",{antialias:!1});return null===a?null:(n.forEach(((t,e)=>{t.forEach(((t,n)=>{t&&(a.fillStyle=t,a.fillRect(Math.floor(10*e/2+o/4),Math.floor(10*n/2+r/4),Math.floor(5),Math.floor(5)))}))})),i.toDataURL())}(i))&&void 0!==o?o:""}}const x=["function tokenURI(uint256 _tokenId) external view returns (string)","function uri(uint256 _id) external view returns (string)"];async function y(t,e,n){const o=new n.ethers.Contract(e,x,n.provider);return async function(t){const e=await fetch(t);if(!e.ok)throw new Error("Error when trying to request "+t);let n;try{n=await e.json()}catch(o){n={name:"",description:"",image:t}}(function(t){var e,n,o,r,i,a,c,s,d,l,u,p;if(!t||"object"!=typeof t)return!1;const f=t;return"Asset Metadata"===f.title&&"object"===f.type&&"string"==typeof(null===(n=null===(e=f.properties)||void 0===e?void 0:e.name)||void 0===n?void 0:n.description)&&"string"==typeof(null===(r=null===(o=f.properties)||void 0===o?void 0:o.image)||void 0===r?void 0:r.description)&&"string"==typeof(null===(a=null===(i=f.properties)||void 0===i?void 0:i.description)||void 0===a?void 0:a.description)&&"string"===(null===(s=null===(c=f.properties)||void 0===c?void 0:c.name)||void 0===s?void 0:s.type)&&"string"===(null===(l=null===(d=f.properties)||void 0===d?void 0:d.image)||void 0===l?void 0:l.type)&&"string"===(null===(p=null===(u=f.properties)||void 0===u?void 0:u.description)||void 0===p?void 0:p.type)})(n)&&(n=function(t){var e,n,o,r,i,a;return{name:(null===(n=null===(e=null==t?void 0:t.properties)||void 0===e?void 0:e.name)||void 0===n?void 0:n.description)||"",description:(null===(r=null===(o=null==t?void 0:t.properties)||void 0===o?void 0:o.description)||void 0===r?void 0:r.description)||"",image:(null===(a=null===(i=null==t?void 0:t.properties)||void 0===i?void 0:i.image)||void 0===a?void 0:a.description)||""}}(n));if(!function(t){return!(!t||"object"!=typeof t)&&("name"in t&&"image"in t&&"description"in t)}(n))throw new Error("Invalid data received");return function(t){return{...t,image:(e=t.image,m(e))};var e}({name:n.name||"",image:n.image||"",description:n.description||""})}(v(await Promise.any([o.uri(t),o.tokenURI(t)]),t))}function k(e,n,o){return function(e,{retryDelay:n=2e3}={}){const[o,r]=t.useState({loading:!0,error:null,result:null});return t.useEffect((()=>{let t,o=!1;const i=async()=>{r({loading:!0,error:null,result:null});try{const t=await e();o||r({loading:!1,error:null,result:t})}catch(a){if(o)return;r({loading:!1,error:a,result:null}),t=setTimeout((()=>{o||i()}),n)}};return i(),()=>{clearTimeout(t),o=!0}}),[e,n]),o}(t.useCallback((async()=>{if(function(t){return g(t,"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb")}(n))return{name:`CryptoPunk ${t=o}`,description:'\n  10,000 unique collectible characters with proof of ownership stored on the\n  Ethereum blockchain. The project that inspired the modern CryptoArt movement.\n  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721\n  standard that powers most digital art and collectibles.\n',image:`https://www.larvalabs.com/cryptopunks/cryptopunk${t}.png`};var t;if(function(t){return g(t,"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d")}(n))return async function(t){try{const e=await fetch(`https://api.cryptokitties.co/v3/kitties/${t}`),n=await e.json();return{name:(null==n?void 0:n.name)||"Unknown",description:(null==n?void 0:n.bio)||"−",image:(null==n?void 0:n.image_url)||""}}catch(e){throw e}}(o);if(function(t){return g(t,"0x7c40c393dc0f283f318791d746d894ddd3693572")}(n))return w(o,e.config);if(function(t){return/^0x[a-fA-F0-9]{40}$/.test(t)}(n))return y(o,n,e.config);throw new Error("Invalid contract address or token ID provided")}),[n,o,e]))}const $="#a669a2",C="#dddddd",E="#000000";function M({children:e}){return n(t.Fragment,null,n(o,{styles:r`
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
            color: ${$};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${$};
          }
          a:focus-visible {
            background: ${$};
            color: ${C};
          }
          #root {
            display: grid;
            justify-content: center;
            padding: 0 80px;
            max-width: 1400px;
            margin: 0 auto;
          }
        `}),e)}function I({swap:t=!1}){const e=[n("a",{key:"by",href:"https://spectre.xyz/",target:"_blank"},"by spectre_"),n("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return n("nav",{css:r`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},t?[...e].reverse():e)}function R(){return n("footer",{css:r`
        padding-top: 60px;
      `},n(I,{swap:!0}))}const j=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function D(){return j[Math.floor(Math.random()*j.length)]}function A(){const e=t.useRef(null);return t.useEffect((()=>function(t,e=1e3/60){const n="function"==typeof e?e:()=>e;let o,r=Date.now()-n();const i=()=>{o=requestAnimationFrame(i);const e=Date.now();e-r<n()||(r=e,t())};return i(),()=>cancelAnimationFrame(o)}((()=>{e.current&&(e.current.innerHTML=D())}),500)),[]),e}function F(){return n("header",{css:r`
        position: relative;
        padding: 0 0 60px;
      `},n(I,null),n(U,null),n(_,null))}function U(){const t=A(),{below:e}=i(),o=e(1e3),a=e(800);return n("h1",{title:"useNft()",css:r`
        margin-top: 24px;
        font-size: ${o?"30px":"40px"};
        text-align: center;
      `},"let"," ",n("span",{ref:t,css:r`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},D())," ","= ",a&&n("br",null),"useNft(",a?"addr":"address",", id)")}function _(){return n("p",{css:r`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch NFTs from React − no matter how they were minted.")}function L(e){const o=t.useRef(null);return t.useEffect((()=>{const t=o.current;null!==t&&(t.muted=!0,t.setAttribute("autoplay",""),t.setAttribute("playsinline",""))}),[]),n("video",{ref:o,...e,tabIndex:-1})}function P({contract:e,tokenId:o,service:r,url:i}){const a=function(e,n){const o=t.useContext(p);if(null===o)throw new Error("Please wrap your app with <NftProvider />");return o.fetcher.useNft(o.fetcher,e,n)}(e,o);return a.loading?n(T,null,"Loading…"):a.error?n(T,null,"Error."):n(T,{url:i},n(B,{service:r,nft:a.result}))}function T({url:t,children:e}){return n("a",{...t?{href:t,target:"_blank"}:{},css:r`
        display: grid;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;

        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${$};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${$};
          box-shadow: 0 0 0 2px ${$};
        }
      `},n("section",{css:r`
          display: grid;
          height: 100%;
          place-items: center;
          grid-template-columns: 100%;
          background: #123;
        `},e))}function B({service:t,nft:e}){const o=(null==e?void 0:e.name)||"Untitled",i=(null==e?void 0:e.description)||"−",a=(null==e?void 0:e.image)||"";return n("div",{css:r`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: relative;
      `},n("div",{css:r`
          width: 100%;
          height: 200px;
          background: ${$};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% calc(50% - 4px);
          }
        `},a.endsWith(".mp4")?n(L,{type:"video/mp4",src:a,height:"200"}):n("img",{src:a,height:"200",alt:""})),n("h1",{css:r`
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
        `},i),n("div",{css:r`
          position: absolute;
          bottom: 0;
          padding: 2px 10px;
          border-radius: 0 0 0 3px;
          color: ${E};
          background: ${$};
        `},t))}function N({nfts:e}){const[o,i]=t.useState(0),s=a(e.length,{progress:o,config:{mass:.5,tension:400,friction:30}});return t.useEffect((()=>i(1)),[]),n("div",{css:r`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        grid-auto-rows: 430px;
      `},s.map((({progress:t},o)=>{const[r,i,a,s]=e[o];return n(c.div,{key:r+i,style:{opacity:t,transform:t.to((t=>`translate3d(0, ${10*(1-t)}px, 0)`))}},n(P,{contract:r,service:a,tokenId:i,url:s}))})))}var S=[["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2299"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"],["0x06012c8cf97bead5deae237070f9587f8e7a266d","1976426","CryptoKitties","https://www.cryptokitties.co/kitty/1976426"],["0x79986af15539de2db9a5086382daeda917a9cf0c","1162","Cryptovoxels","https://www.cryptovoxels.com/parcels/1162"],["0x7c40c393dc0f283f318791d746d894ddd3693572","7782","MoonCats","https://opensea.io/assets/0x7c40c393dc0f283f318791d746d894ddd3693572/5710"]];const z=function({ethers:t,provider:e}){return{config:{ethers:t,provider:e},useNft:k}}({ethers:{Contract:s},provider:d("homestead",{infura:{}.VITE_INFURA_KEY})});function q(){return n(f,{fetcher:z},n(M,null,n(F,null),n(N,{nfts:S}),n(R,null)))}l.render(n(t.StrictMode,null,n(u,null,n(q,null))),document.getElementById("root"));
