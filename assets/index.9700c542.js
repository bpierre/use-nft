import{j as e,c as t,r as n,u as r,a,b as o,e as s,g as c,N as i,d}from"./vendor.6f4e7a62.js";function l({swap:n=!1}){const r=[e("a",{key:"by",href:"https://spectre.gallery/",target:"_blank"},"by spectre_"),e("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return e("nav",{css:t`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},n?[...r].reverse():r)}function p(){return e("footer",{css:t`
        padding-top: 60px;
      `},e(l,{swap:!0}))}function u(t){const r=n.useRef(null);return n.useEffect((()=>{const e=r.current;null!==e&&(e.muted=!0,e.setAttribute("autoplay",""),e.setAttribute("playsinline",""))}),[]),e("video",{ref:r,...t,tabIndex:-1})}function f({contract:t,tokenId:n,service:a,url:o}){const s=r(t,n);return s.loading?e(b,null,"Loading…"):s.error?e(b,null,"Error."):e(b,{url:o},e(h,{service:a,nft:s.result}))}function b({url:n,children:r}){const a=e("section",{css:t`
        display: grid;
        place-items: center;
        grid-template-columns: 100%;
        grid-template-rows: 100%;
        width: 400px;
        height: 430px;
        background: #123;
      `},r);return n?e("a",{href:n,target:"_blank",css:t`
        display: block;
        overflow: hidden;
        border-radius: 5px;

        &:focus:not(:focus-visible) {
          background: transparent;
          color: #b98fb4;
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: #b98fb4;
          box-shadow: 0 0 0 2px #b98fb4;
        }
      `},a):a}function h({service:n,nft:r}){const a=(null==r?void 0:r.name)||"Untitled",o=(null==r?void 0:r.description)||"−",s=(null==r?void 0:r.image)||"";return e("div",{css:t`
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 100%;
        position: relative;
      `},e("div",{css:t`
          width: 100%;
          height: 200px;
          background: #b98fb4;
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% calc(50% - 4px);
          }
        `},s.endsWith(".mp4")?e(u,{type:"video/mp4",src:s,height:"200"}):e("img",{src:s,height:"200",alt:""})),e("h1",{css:t`
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
        `},e("span",{title:a},a)),e("p",{title:o,css:t`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `},o),e("div",{css:t`
          position: absolute;
          bottom: 0;
          padding: 2px 10px;
          border-radius: 0 0 0 3px;
          color: #000;
          background: #b98fb4;
        `},n))}function m({nfts:r}){const[s,c]=n.useState(0),i=a(r.length,{progress:s,config:{mass:.5,tension:400,friction:30}});return n.useEffect((()=>c(1)),[]),e("div",{css:t`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
      `},i.map((({progress:t},n)=>{const[a,s,c,i]=r[n];return e(o.div,{key:a+s,style:{opacity:t,transform:t.to((e=>`translate3d(0, ${10*(1-e)}px, 0)`))}},e(f,{contract:a,service:c,tokenId:s,url:i}))})))}!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,o)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return n(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){o(new Error(`Failed to import: ${e}`)),a(i)},onload(){n(self[t].moduleMap[s]),a(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");const g=[..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"];function x(){return g[Math.floor(Math.random()*g.length)]}function w(){const e=n.useRef(null);return n.useEffect((()=>function(e,t=1e3/60){const n="function"==typeof t?t:()=>t;let r,a=Date.now()-n();const o=()=>{r=requestAnimationFrame(o);const t=Date.now();t-a<n()||(a=t,e())};return o(),()=>cancelAnimationFrame(r)}((()=>{e.current&&(e.current.innerHTML=x())}),500)),[]),e}function v(){return e("header",{css:t`
        position: relative;
        padding: 0 0 60px;
      `},e(l,null),e(y,null),e(k,null))}function y(){const n=w();return e("h1",{title:"useNft()",css:t`
        margin-top: 24px;
        font-size: 40px;
        text-align: center;
      `},"let"," ",e("span",{ref:n,css:t`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},x())," ","= useNft(address, id)")}function k(){return e("p",{css:t`
        margin: 0;
        text-align: center;
      `},"Fetch NFTs from React − no matter how they were minted.")}var R=[["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2442"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"]];const j=s({provider:c("homestead",{infura:{}.VITE_INFURA_KEY})});function E(){return e(i,{fetcher:j},e(v,null),e(m,{nfts:R}),e(p,null))}d.render(e(n.StrictMode,null,e(E,null)),document.getElementById("root"));
