import{j as e,G as t,c as n,r as o,u as r,a,b as s,d as i,e as c,C as d,g as l,N as p,f as u,V as f}from"./vendor.be892496.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,a)=>{const s=new URL(e,o);if(self[t].moduleMap[s])return n(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){a(new Error(`Failed to import: ${e}`)),r(c)},onload(){n(self[t].moduleMap[s]),r(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const b="#a669a2",m="#dddddd",h="#000000";function g({children:r}){return e(o.Fragment,null,e(t,{styles:n`
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
            color: ${b};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${b};
          }
          a:focus-visible {
            background: ${b};
            color: ${m};
          }
          #root {
            display: grid;
            justify-content: center;
            padding: 0 80px;
            max-width: 1400px;
            margin: 0 auto;
          }
        `}),r)}function x({swap:t=!1}){const o=[e("a",{key:"by",href:"https://spectre.xyz/",target:"_blank"},"by spectre_"),e("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return e("nav",{css:n`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},t?[...o].reverse():o)}function w(){return e("footer",{css:n`
        padding-top: 60px;
      `},e(x,{swap:!0}))}const y=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function v(){return y[Math.floor(Math.random()*y.length)]}function k(){const e=o.useRef(null);return o.useEffect((()=>function(e,t=1e3/60){const n="function"==typeof t?t:()=>t;let o,r=Date.now()-n();const a=()=>{o=requestAnimationFrame(a);const t=Date.now();t-r<n()||(r=t,e())};return a(),()=>cancelAnimationFrame(o)}((()=>{e.current&&(e.current.innerHTML=v())}),500)),[]),e}function M(){return e("header",{css:n`
        position: relative;
        padding: 0 0 60px;
      `},e(x,null),e($,null),e(j,null))}function $(){const t=k(),{below:o}=r(),a=o(1e3),s=o(800);return e("h1",{title:"useNft()",css:n`
        margin-top: 24px;
        font-size: ${a?"30px":"40px"};
        text-align: center;
      `},"let"," ",e("span",{ref:t,css:n`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},v())," ","= ",s&&e("br",null),"useNft(",s?"addr":"address",", id)")}function j(){return e("p",{css:n`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch NFTs from React − no matter how they were minted.")}function F(t){const n=o.useRef(null);return o.useEffect((()=>{const e=n.current;null!==e&&(e.muted=!0,e.setAttribute("autoplay",""),e.setAttribute("playsinline",""))}),[]),e("video",{ref:n,...t,tabIndex:-1})}function R({contract:t,tokenId:n,service:o,url:r}){const s=a(t,n);return s.loading?e(E,null,"Loading…"):s.error?e(E,null,"Error."):e(E,{url:r},e(A,{service:o,nft:s.result}))}function E({url:t,children:o}){return e("a",{...t?{href:t,target:"_blank"}:{},css:n`
        display: grid;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;

        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${b};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${b};
          box-shadow: 0 0 0 2px ${b};
        }
      `},e("section",{css:n`
          display: grid;
          height: 100%;
          place-items: center;
          grid-template-columns: 100%;
          background: #123;
        `},o))}function A({service:t,nft:o}){const r=(null==o?void 0:o.name)||"Untitled",a=(null==o?void 0:o.description)||"−",s=(null==o?void 0:o.image)||"";return e("div",{css:n`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: relative;
      `},e("div",{css:n`
          width: 100%;
          height: 200px;
          background: ${b};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% calc(50% - 4px);
          }
        `},s.endsWith(".mp4")?e(F,{type:"video/mp4",src:s,height:"200"}):e("img",{src:s,height:"200",alt:""})),e("h1",{css:n`
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
        `},e("span",{title:r},r)),e("p",{title:a,css:n`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `},a),e("div",{css:n`
          position: absolute;
          bottom: 0;
          padding: 2px 10px;
          border-radius: 0 0 0 3px;
          color: ${h};
          background: ${b};
        `},t))}function I({nfts:t}){const[r,a]=o.useState(0),c=s(t.length,{progress:r,config:{mass:.5,tension:400,friction:30}});return o.useEffect((()=>a(1)),[]),e("div",{css:n`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        grid-auto-rows: 430px;
      `},c.map((({progress:n},o)=>{const[r,a,s,c]=t[o];return e(i.div,{key:r+a,style:{opacity:n,transform:n.to((e=>`translate3d(0, ${10*(1-e)}px, 0)`))}},e(R,{contract:r,service:s,tokenId:a,url:c}))})))}var _=[["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2442"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"]];const U=c({ethers:{Contract:d},provider:l("homestead",{infura:{}.VITE_INFURA_KEY})});function B(){return e(p,{fetcher:U},e(g,null,e(M,null),e(I,{nfts:_}),e(w,null)))}u.render(e(o.StrictMode,null,e(f,null,e(B,null))),document.getElementById("root"));
