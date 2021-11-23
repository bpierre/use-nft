import{r as x,R as k,X as se,_ as ue,Z as le,j as f,c as h,G as de,u as fe,a as pe,b as me,I as he,d as ve,V as ge}from"./vendor.9bed3b05.js";const be=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}};be();const ye="modulepreload",$={},we="/",xe=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${we}${n}`,n in $)return;$[n]=!0;const i=n.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":ye,i||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),i)return new Promise((a,l)=>{c.addEventListener("load",a),c.addEventListener("error",l)})})).then(()=>t())};function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},A(e)}function j(e,t){return j=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r},j(e,t)}function Pe(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function O(e,t,r){return O=Pe()?Reflect.construct:function(n,i,o){var c=[null];c.push.apply(c,i);var a=new(Function.bind.apply(n,c));return o&&j(a,o.prototype),a},O.apply(null,arguments)}function C(e){var t=typeof Map=="function"?new Map:void 0;return C=function(r){if(r===null||Function.toString.call(r).indexOf("[native code]")===-1)return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(r))return t.get(r);t.set(r,n)}function n(){return O(r,arguments,A(this).constructor)}return n.prototype=Object.create(r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),j(n,r)},C(e)}function S(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function R(e){return/^0x[a-fA-F0-9]{40}$/.test(e)}function U(e){return e}function ke(e,t){return t===void 0&&(t=""),"https://ipfs.io/ipfs/"+e+t}var je=/^ipfs:\/\/(?:ipfs\/)?([^/]+)(\/.+)?$/,Ie=/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/;function D(e,t){var r=je.exec(e);if(r){var n=r[2];return t(r[1],n===void 0?"":n)}return Ie.test(e)?t(e):e}function M(e,t,r){return e=function(n,i){try{var o=new URL(n);return o.host!=="api.opensea.io"&&o.host!=="testnets-api.opensea.io"||!o.pathname.includes("0x%7Bid%7D")?n:(o.pathname=o.pathname.replace(/0x%7Bid%7D/g,i),o.searchParams.set("format","json"),String(o))}catch{return n}}(e,t),(e=D(e=function(n){try{var i=new URL(n);return i.host!=="api.niftygateway.com"?n:(i.pathname=i.pathname+"/",String(i))}catch{return n}}(e),r.ipfsUrl)).startsWith("http")&&(e=r.jsonProxy(e)),e}function Fe(e,t){return D(e,t.ipfsUrl)}function I(e,t){return(e==null?void 0:e.toLowerCase())===(t==null?void 0:t.toLowerCase())}function _(e){return L(Promise.all([].concat(e).map(L)))}function L(e){return new Promise(function(t,r){Promise.resolve(e).then(r,t)})}var q=function(e){var t,r;function n(i,o){var c;return(c=e.call(this,i)||this).errors=void 0,c.name="MultipleErrors",c.errors=o,c}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,j(t,r),n}(C(Error)),Ee=/\.(?:png|svg|jpg|jepg|gif|webp|jxl|avif)$/,Ae=/\.(?:mp4|mov|webm|ogv)$/;function z(e){return Ee.test(e)?"image":Ae.test(e)?"video":"unknown"}var H=function(e,t){try{return Promise.resolve(t(e,Ce)).then(function(r){return{description:Oe,image:(n=r,o=n.indexOf(",")+1,(i=n.slice(0,o)+encodeURIComponent(n.slice(o)))!=null?i:""),imageType:"image",metadataUrl:"",name:"CryptoPunk "+e,owner:"",rawData:null};var n,i,o})}catch(r){return Promise.reject(r)}},Oe=`
  10,000 unique collectible characters with proof of ownership stored on the
  Ethereum blockchain. The project that inspired the modern CryptoArt movement.
  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721
  standard that powers most digital art and collectibles.
`,Ce={address:"0x16F5A35647D6F03D5D3da7b35409D65ba03aF3B2",methodName:"punkImageSvg",methodHash:"0x74beb047",humanReadableAbi:["function punkImageSvg(uint16 index) view returns (string svg)"]};function W(e){return I(e,"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb")}var V=function(e,t){var r=t.jsonProxy;try{var n=r("https://api.cryptokitties.co/v3/kitties/"+e);return Promise.resolve(fetch(n)).then(function(i){return Promise.resolve(i.json()).then(function(o){var c,a,l,s=(c=o==null?void 0:o.image_url)!=null?c:"";return{description:(a=o==null?void 0:o.bio)!=null?a:"\u2212",image:s,imageType:s?"image":"unknown",metadataUrl:n,name:(l=o==null?void 0:o.name)!=null?l:"Unknown",owner:"",rawData:o}})})}catch(i){return Promise.reject(i)}};function G(e){return I(e,"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d")}var J=function(e){try{return Promise.resolve(fetch(De,{body:Ne("0x959e104E1a4dB6317fA58F8295F586e1A978c297",e),method:"POST"})).then(function(t){return Promise.resolve(t.json()).then(function(r){var n,i,o,c,a,l,s,p,u=r.data,d=u==null||(n=u.nfts)==null?void 0:n[0],m=(i=d==null?void 0:d.image)!=null?i:"";return{description:(o=d==null||(c=d.estate)==null||(a=c.data)==null?void 0:a.description)!=null?o:"\u2212",image:m,imageType:m?"image":"unknown",metadataUrl:"",name:(l=d==null?void 0:d.name)!=null?l:"Unknown",owner:(s=d==null||(p=d.owner)==null?void 0:p.address)!=null?s:"",rawData:u}})})}catch(t){return Promise.reject(t)}},De="https://api.thegraph.com/subgraphs/name/decentraland/marketplace";function Ne(e,t){return JSON.stringify({operationName:"NFTByTokenId",variables:{contractAddress:e,tokenId:t},query:`
  query NFTByTokenId($contractAddress: String, $tokenId: String) {
    nfts(
      where: { contractAddress: $contractAddress, tokenId: $tokenId }
      first: 1
    ) {
      name
      image
      owner {
        address
      }
      estate {
        size
        data {
          description
        }
      }
    }
  }
`})}function Z(e){return I(e,"0x959e104E1a4dB6317fA58F8295F586e1A978c297")}var K=function(e){try{return Promise.resolve(fetch(Te,{body:Be("0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d",e),method:"POST"})).then(function(t){return Promise.resolve(t.json()).then(function(r){var n,i,o,c,a,l,s,p=r.data,u=p==null||(n=p.nfts)==null?void 0:n[0],d=u==null?void 0:u.parcel,m=(i=u==null?void 0:u.image)!=null?i:"";return{description:(o=d==null||(c=d.data)==null?void 0:c.description)!=null?o:"-",image:m,imageType:m?"image":"unknown",metadataUrl:"",name:(a=u==null?void 0:u.name)!=null?a:"Parcel "+(d==null?void 0:d.x)+","+(d==null?void 0:d.y),owner:(l=u==null||(s=u.owner)==null?void 0:s.address)!=null?l:"",rawData:p}})})}catch(t){return Promise.reject(t)}},Te="https://api.thegraph.com/subgraphs/name/decentraland/marketplace";function Be(e,t){return JSON.stringify({operationName:"NFTByTokenId",variables:{contractAddress:e,tokenId:t},query:`
  query NFTByTokenId($contractAddress: String, $tokenId: String) {
    nfts(
      where: { contractAddress: $contractAddress, tokenId: $tokenId }
      first: 1
    ) {
      name
      image
      owner {
        address
      }
      parcel {
        x
        y
        data {
          description
        }
      }
    }
  }
`})}function Q(e){return I(e,"0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d")}var X=function(e,t,r){try{return Promise.resolve(t(e,Y)).then(function(n){return Promise.resolve($e(n,r.ipfsUrl)).then(function(i){return{description:"The (unofficial) wrapped version of MoonCats Rescue. Original cat ID: "+n+".",image:i,imageType:i?"image":"unknown",metadataUrl:"",name:"Wrapped MoonCat #"+e,owner:"",rawData:null}})})}catch(n){return Promise.reject(n)}},$e=function(e,t){try{var r=e.slice(4,6),n=D("ipfs://ipfs/"+Se+"/"+r+"/"+e+".png",t);return Promise.resolve((i=n,new Promise(function(o,c){var a=new Image;a.src=i,a.crossOrigin="",a.onload=function(){return o(a)},a.onerror=function(l){return c(l)}}))).then(function(o){return function(c,a){var l=a===void 0?{}:a,s=l.scale,p=s===void 0?1:s,u=l.padding,d=u===void 0?0:u,m=c.naturalWidth*p,v=c.naturalHeight*p,g=Math.max(m*d,v*d),w=document.createElement("canvas");w.width=m+2*g,w.height=v+2*g;var b=w.getContext("2d");return b===null?null:(b.imageSmoothingEnabled=!1,b.drawImage(c,g,g,m,v),w.toDataURL())}(o,{scale:4,padding:.125})})}catch(o){return Promise.reject(o)}var i},Y={address:"0x7c40c393dc0f283f318791d746d894ddd3693572",methodName:"_tokenIDToCatID",methodHash:"0xfe294644",humanReadableAbi:["function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)"]},Se="bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava";function ee(e){return I(e,Y.address)}var te=function(e,t){try{return Promise.resolve(fetch(e)).then(function(r){function n(){var c=y({},i);if(function(a){var l,s,p,u,d,m,v,g,w,b,T,B;return!(!a||typeof a!="object")&&a.title==="Asset Metadata"&&a.type==="object"&&typeof((l=a.properties)==null||(s=l.name)==null?void 0:s.description)=="string"&&typeof((p=a.properties)==null||(u=p.image)==null?void 0:u.description)=="string"&&typeof((d=a.properties)==null||(m=d.description)==null?void 0:m.description)=="string"&&((v=a.properties)==null||(g=v.name)==null?void 0:g.type)==="string"&&((w=a.properties)==null||(b=w.image)==null?void 0:b.type)==="string"&&((T=a.properties)==null||(B=T.description)==null?void 0:B.type)==="string"}(c)&&(c=function(a){var l,s,p,u,d,m;return{name:((l=a.properties)==null||(s=l.name)==null?void 0:s.description)||"",description:((p=a.properties)==null||(u=p.description)==null?void 0:u.description)||"",image:((d=a.properties)==null||(m=d.image)==null?void 0:m.description)||"",rawData:y({},a)}}(c)),!function(a){return!(!a||typeof a!="object")&&("name"in a||"image"in a)}(c=function(a){return a&&typeof a=="object"&&(a==null?void 0:a.image)===void 0&&typeof(a==null?void 0:a.imageUrl)=="string"?y({},a,{image:a==null?void 0:a.imageUrl}):a}(c)))throw new Error("Invalid data received");return function(a,l){return y({},a,{image:Fe(a.image,l)})}({description:c.description||"",image:c.image||"",name:c.name||"",rawData:i},t)}if(!r.ok)throw new Error("Error when trying to request "+e);var i,o=function(c,a){try{var l=Promise.resolve(r.json()).then(function(s){i=s})}catch{return a()}return l&&l.then?l.then(void 0,a):l}(0,function(){i={name:"",description:"",image:e}});return o&&o.then?o.then(n):n()})}catch(r){return Promise.reject(r)}},Re=function(e,t,r){try{return Promise.resolve(_([e.tokenURI(t),e.uri(t)]).catch(function(n){throw new q("An error occurred while trying to fetch the token URI from the NFT contract. See the \u201Cerrors\u201D property on this error for details.",n)})).then(function(n){return M(n,t,r)})}catch(n){return Promise.reject(n)}},Ue=["function tokenURI(uint256 _tokenId) external view returns (string)","function ownerOf(uint256 _tokenId) external view returns (address)","function uri(uint256 _id) external view returns (string)"];function Me(e){return{config:e,fetchNft:function(t,r,n){try{if(!R(t))throw new Error("Invalid contract address: "+t);return Promise.resolve(function(i,o,c,a){try{return Q(i)?Promise.resolve(K(o)):Z(i)?Promise.resolve(J(o)):G(i)?Promise.resolve(V(o,a)):Promise.resolve(function(l){try{var s;return(s=l.ethers)!=null&&s.Contract?Promise.resolve(l):Promise.resolve(function(p,u){try{var d=Promise.resolve(xe(()=>import("./vendor.9bed3b05.js").then(function(m){return m.i}),[])).then(function(m){if(m==null||!m.Contract)throw new Error;return y({},l,{ethers:m})})}catch{return u()}return d&&d.then?d.then(void 0,u):d}(0,function(){throw new Error("Ethers couldn\u2019t be imported. Please add the ethers module to your project dependencies, or inject it in the Ethers fetcher options.")}))}catch(p){return Promise.reject(p)}}(c)).then(function(l){return W(i)?H(o,function(s){return function(p,u){try{var d=new s.ethers.Contract(u.address,u.humanReadableAbi,s.provider);return Promise.resolve(d.punkImageSvg(p))}catch(m){return Promise.reject(m)}}}(l)):ee(i)?X(o,function(s){return function(p,u){try{var d=new s.ethers.Contract(u.address,u.humanReadableAbi,s.provider);return Promise.resolve(d._tokenIDToCatID(p)).then(function(m){return m??""})}catch(m){return Promise.reject(m)}}}(l),a):function(s,p,u,d){try{var m=new u.ethers.Contract(s,Ue,u.provider);return Promise.resolve(Promise.all([Re(m,p,d),m.ownerOf(p).catch(function(){return""})])).then(function(v){var g=v[0],w=v[1];return Promise.resolve(te(g,d)).then(function(b){return y({},b,{imageType:z(b.image),metadataUrl:g,owner:w})})})}catch(v){return Promise.reject(v)}}(i,o,l,a)})}catch(l){return Promise.reject(l)}}(t,r,e,n)).then(function(i){return function(o,c){return o.image.startsWith("http")?y({},o,{image:c(o.image,o)}):o}(i,n.imageProxy)})}catch(i){return Promise.reject(i)}}}}function F(e){for(var t="",r=0;r<32;++r)t+=("0"+(e>>BigInt(256-8*r-8)&BigInt(255)).toString(16)).slice(-2);return t}function N(e){for(var t,r=BigInt(0),n=function(o,c){var a=typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(a)return(a=a.call(o)).next.bind(a);if(Array.isArray(o)||(a=function(s,p){if(s){if(typeof s=="string")return S(s,p);var u=Object.prototype.toString.call(s).slice(8,-1);return u==="Object"&&s.constructor&&(u=s.constructor.name),u==="Map"||u==="Set"?Array.from(s):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?S(s,p):void 0}}(o))){a&&(o=a);var l=0;return function(){return l>=o.length?{done:!0}:{done:!1,value:o[l++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(e);!(t=n()).done;){var i=t.value;r=(r<<BigInt(8))+BigInt(i)}return r}function re(e){var t;return e=e.replace(/^0x/,""),new Uint8Array(((t=e.match(/.{1,2}/g))!=null?t:[]).map(function(r){return parseInt(r,16)}))}function ne(e){var t=re(e),r=Number(N(t.subarray(0,32))),n=Number(N(t.subarray(r,r+32))),i=t.subarray(r+32,r+32+n);return new TextDecoder().decode(i)}function _e(e){var t=N(re(e).subarray(0,32));if(t>=Math.pow(BigInt(2),BigInt(160)))throw new Error("Encoded value is bigger than the largest possible address.  Decoded value: 0x"+t.toString(16)+".");return"0x"+t.toString(16)}function Le(e){return"0xc87b56dd"+F(e)}function qe(e){return"0x6352211e"+F(e)}function E(e,t,r){return e.request({method:"eth_call",params:[{data:r,to:t},"latest"]})}var ze=function(e,t,r,n){try{return Promise.resolve(_(function(i){return[Le(BigInt(i)),(o=BigInt(i),"0x0e89341c"+F(o))];var o}(t).map(function(i){return E(r,e,i)})).catch(function(i){throw new q("An error occurred while trying to fetch the token URI from the NFT contract. See the \u201Cerrors\u201D property on this error for details.",i)})).then(function(i){return M(ne(i),t,n)})}catch(i){return Promise.reject(i)}};function He(e){var t=function(r){if(!r.ethereum){if(!window.ethereum)throw new Error("Missing ethereum provider.");r.ethereum=window.ethereum}return r}(e);return{config:t,fetchNft:function(r,n,i){try{if(!R(r))throw new Error("Invalid contract address: "+r);return Promise.resolve(function(o,c,a,l){try{return Q(o)?Promise.resolve(K(c)):Z(o)?Promise.resolve(J(c)):G(o)?Promise.resolve(V(c,l)):W(o)?Promise.resolve(H(c,function(s){return function(p,u){try{if(s.ethereum===void 0)throw new Error("No Ethereum provider");return Promise.resolve(E(s.ethereum,u.address,u.methodHash+F(BigInt(p))).then(ne))}catch(d){return Promise.reject(d)}}}(a))):ee(o)?Promise.resolve(X(c,function(s){return function(p,u){try{if(s.ethereum===void 0)throw new Error("No Ethereum provider");return Promise.resolve(E(s.ethereum,u.address,u.methodHash+F(BigInt(p)))).then(function(d){return d.slice(0,12)})}catch(d){return Promise.reject(d)}}}(a),l)):Promise.resolve(function(s,p,u,d){var m=u.ethereum;try{return Promise.resolve(Promise.all([ze(s,p,m,d),E(m,s,qe(BigInt(p))).then(_e).catch(function(){return""})])).then(function(v){var g=v[0],w=v[1];return Promise.resolve(te(g,d)).then(function(b){return y({},b,{imageType:z(b.image),metadataUrl:g,owner:w})})})}catch(v){return Promise.reject(v)}}(o,c,a,l))}catch(s){return Promise.reject(s)}}(r,n,t,i)).then(function(o){return function(c,a){return c.image.startsWith("http")?y({},c,{image:a(c.image,c)}):c}(o,i.imageProxy)})}catch(o){return Promise.reject(o)}}}}var We={name:"",description:"",image:""};function Ve(e){return function(t){return Array.isArray(t)&&t.length==2&&t[0]==="ethers"}(e)?Me(e[1]):function(t){return Array.isArray(t)&&t.length==2&&t[0]==="ethereum"}(e)?He(e[1]):e}var oe=x.exports.createContext(null),Ge=function(e){var t=e.children,r=e.fetcher,n=e.imageProxy,i=n===void 0?U:n,o=e.ipfsUrl,c=o===void 0?ke:o,a=e.jsonProxy,l=a===void 0?U:a;if(!r)throw new Error("Please set the fetcher prop on <NftProvider />");var s={fetcher:Ve(r),imageProxy:i,ipfsUrl:c,jsonProxy:l};return k.createElement(se,{value:{provider:function(){return new Map}}},k.createElement(oe.Provider,{value:s},t))};function Je(e,t){var r,n=x.exports.useContext(oe);if(n===null)throw new Error("Please wrap your app with <NftProvider />");var i=n.fetcher,o=n.imageProxy,c=n.ipfsUrl,a=n.jsonProxy,l=x.exports.useMemo(function(){return{imageProxy:o,ipfsUrl:c,jsonProxy:a}},[o,c,a]),s=x.exports.useCallback(function(){return i?i.fetchNft(e,t,l):y({},We)},[e,i,l,t]),p=(r=ue().cache.get(e+t))!=null&&r,u=le(e+t,s,{revalidateOnMount:!p,revalidateOnFocus:!1,revalidateOnReconnect:!1});return x.exports.useMemo(function(){var d=u.error,m=u.data,v=u.mutate,g=function(){return v().then(function(){return!0}).catch(function(){return!1})};return d===void 0&&m===void 0?{error:void 0,loading:!0,nft:void 0,reload:g,status:"loading"}:d!==void 0?{error:d,loading:!1,nft:void 0,reload:g,status:"error"}:{error:void 0,loading:!1,nft:m,reload:g,status:"done"}},[u])}const P={background:"#111111",accent:"#a669a2",accentOver:"#dddddd",accentOver2:"#000000"};function Ze({children:e}){return f(k.Fragment,null,f(de,{styles:h`
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
            color: ${P.accent};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${P.accent};
          }
          a:focus-visible {
            background: ${P.accent};
            color: ${P.accentOver};
          }
        `}),f("main",{css:h`
          max-width: 1440px;
          min-width: 420px;
          margin: 0 auto;
          padding: 0 80px;
          @media (max-width: 900px) {
            padding: 0 40px;
          }
        `},e))}function ie({swap:e=!1}){const t=[f("a",{key:"by",href:"https://spectre.xyz/",target:"_blank",css:h`
        text-transform: lowercase;
      `},"by Spectre"),f("a",{key:"docs",href:"https://github.com/spectrexyz/use-nft",target:"_blank"},"code & docs")];return f("nav",{css:h`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `},e?[...t].reverse():t)}function Ke(){return f("footer",{css:h`
        padding-top: 50px;
      `},f(ie,{swap:!0}))}function Qe(e,t=1e3/60){const r=typeof t=="function"?t:()=>t;let n,i=Date.now()-r();const o=()=>{n=requestAnimationFrame(o);const c=Date.now();c-i<r()||(i=c,e())};return o(),()=>cancelAnimationFrame(n)}const ae=[..."\u{1F308}\u{1F33C}\u{1F338}\u{1F354}\u{1F35F}\u{1F355}\u{1F32E}\u{1F95E}\u{1F950}\u{1F32D}\u{1F36B}\u{1F369}\u{1F36A}\u{1F37F}\u{1F363}\u{1F96A}\u{1F35C}\u{1F95F}\u{1F36C}\u{1F36E}\u{1F49B}\u{1F496}\u{1F961}\u{1F48A}\u{1F381}\u{1F380}"];function ce(){return ae[Math.floor(Math.random()*ae.length)]}function Xe(){const e=x.exports.useRef(null);return x.exports.useEffect(()=>Qe(()=>{e.current&&(e.current.innerHTML=ce())},1e3/2),[]),e}function Ye(){return f("header",{css:h`
        position: relative;
        padding: 0 0 80px;
      `},f(ie,null),f(et,null),f(tt,null))}function et(){const e=Xe(),{below:t}=fe(),r=t(1e3),n=t(800);return f("h1",{title:"useNft()",css:h`
        margin-top: 24px;
        font-size: ${r?"30px":"40px"};
        text-align: center;
      `},"let"," ",f("span",{ref:e,css:h`
          display: inline-block;
          width: 50px;
          text-align: center;
        `},ce())," ","= ",n&&f("br",null),"useNft()")}function tt(){return f("p",{css:h`
        margin: 12px 0 0;
        text-align: center;
      `},"Fetch metadata from any ",f("abbr",{title:"Non-fungible token"},"NFT"))}function rt(e){const t=x.exports.useRef(null);return x.exports.useEffect(()=>{const r=t.current;r!==null&&(r.muted=!0,r.setAttribute("autoplay",""),r.setAttribute("playsinline",""))},[]),f("video",{ref:t,...e,tabIndex:-1})}function nt({contract:e,tokenId:t,service:r,url:n}){const{nft:i,loading:o,error:c,reload:a}=Je(e,t);return f(ot,{url:i&&n,label:r},(()=>o?f(it,null):c?f(at,{error:c,reload:a}):f(ct,{nft:i}))())}function ot({label:e,url:t,children:r}){return f("a",{...t?{href:t,target:"_blank"}:{},css:h`
        display: block;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;
        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${P.accent};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${P.accent};
          box-shadow: 0 0 0 2px ${P.accent};
        }
      `},f("section",{css:h`
          display: grid;
          height: 100%;
          place-items: center;
          grid-template-columns: 100%;
          background: #123;
        `},f("div",{css:h`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            position: relative;
          `},r,f("div",{css:h`
              position: absolute;
              bottom: 0;
              padding: 2px 10px;
              color: ${P.accentOver2};
              background: ${P.accent};
            `},e))))}function it(){return f("div",{css:h`
        display: grid;
        height: 100%;
        place-items: center;
      `},"Loading\u2026")}function at({error:e,reload:t}){return f("div",{css:h`
        display: grid;
        height: 100%;
        place-items: center;
        text-align: center;
        line-height: 2;
      `},f("p",null,"Loading error.",f("br",null)," ",f("button",{onClick:t},"Retry?")))}function ct({nft:e}){if(!e)return null;const{image:t}=e,r=e.name||"Untitled",n=e.description||"\u2212";return f(k.Fragment,null,f("div",{css:h`
          width: 100%;
          height: 280px;
          background: ${P.accent};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        `},t.includes(".mp4")?f(rt,{type:"video/mp4",src:t,height:"280"}):t&&f("img",{src:t,height:"280",alt:""})),f("h1",{css:h`
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
        `},f("span",{title:r},r)),f("p",{title:n,css:h`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `},n))}function st({nfts:e}){const[t,r]=x.exports.useState(0),n=pe(e.length,{progress:t,config:{mass:.5,tension:400,friction:30}});return x.exports.useEffect(()=>r(1),[]),f("div",{css:h`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-auto-rows: 510px;
      `},n.map(({progress:i},o)=>{const[c,a,l,s]=e[o];return f(me.div,{key:c+a,style:{opacity:i,transform:i.to(p=>`translate3d(0, ${(1-p)*10}px, 0)`)}},f(nt,{contract:c,service:l,tokenId:a,url:s}))}))}var ut=lt([["0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d","29264283555200707857850216239132066185199","Decentraland Parcels","https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/29264283555200707857850216239132066185199"],["0x959e104e1a4db6317fa58f8295f586e1a978c297","3168","Decentraland Estates","https://market.decentraland.org/contracts/0x959e104e1a4db6317fa58f8295f586e1a978c297/tokens/3168"],["0x32b7495895264ac9d0b12d32afd435453458b1c6","5055","Decentraland Wearables","https://market.decentraland.org/contracts/0x32b7495895264ac9d0b12d32afd435453458b1c6/tokens/4087"],["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","90473","Rarible","https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"],["0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405","13201","Foundation","https://foundation.app/jenstark/multiverse-13201"],["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb","2914","CryptoPunks","https://www.larvalabs.com/cryptopunks/details/2914"],["0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0","22072","SuperRare","https://superrare.co/artwork-v2/pool-22072"],["0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7","2299","Zora","https://zora.co/leafilipo/2299"],["0x06012c8cf97bead5deae237070f9587f8e7a266d","1976426","CryptoKitties","https://www.cryptokitties.co/kitty/1976426"],["0xda98f59e1edecb2545d7b07b794e704ed6cf1f7a","139","Portion.io","https://app.portion.io/#exchange?ID=QmYdqAwiMsb7s1mCTgVE4ZQwohjf8nvUdGnra1J6dx5TDd"],["0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432","11000010018","Nifty Gateway","https://niftygateway.com/itemdetail/secondary/0x1a9efe6d9a7a977a938f03b1a549bdd9cd316432/11000010006"],["0x495f947276749ce646f68ac8c248420045cb7b5e","63990428236934811571513178702512145453357596655980286527887248477662016962561","OpenSea","https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/63990428236934811571513178702512145453357596655980286527887248477662016962561"],["0xb6dae651468e9593e4581705a09c10a76ac1e0c8","1230","Async Art","https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-1230"],["0x7c40c393dc0f283f318791d746d894ddd3693572","8549","MoonCats","https://opensea.io/assets/0x7c40c393dc0f283f318791d746d894ddd3693572/8549"],["0xfbeef911dc5821886e1dda71586d90ed28174b7d","307801","KnownOrigin","https://knownorigin.io/gallery/307800-red-forest-fires"],["0xb55c5cac5014c662fdbf21a2c59cd45403c482fd","0x555559a5669969a96a656a995aa55555","Clovers","https://clovers.network/clovers/0xdfffdfffd557fd7ff55fdfdffff7ffff"],["0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756","52832","MakersPlace","https://makersplace.com/jeffreylee1/garden-delights-1-of-1-60178/"],["0xd07dc4262bcdbf85190c01c996b4c06a461d2430","344495","Aito","https://thisisaito.xyz/n/0xd07dc4262bcdbf85190c01c996b4c06a461d2430/344495"],["0x6c7B6cc55d4098400aC787C8793205D3E86C37C9","84","JOYWORLD","https://www.joy.world/joy/the-fry-cult"],["0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7","13396","Meebit","https://meebits.larvalabs.com/meebits/detail?index=13396"]]);function lt(e){const t=[...e];for(let r=t.length-1;r>0;r--){const n=Math.floor(Math.random()*(r+1));[t[r],t[n]]=[t[n],t[r]]}return t}const dt=["ethers",{provider:new he("homestead","7236f6a36152476ba61279266233a49c")}],ft=(e,t)=>t.imageType==="video"?e:`https://ik.imagekit.io/p/${encodeURIComponent(e)}?tr=n-card`,pt=e=>`https://api.allorigins.win/raw?url=${encodeURIComponent(e)}`;function mt(){return f(Ge,{fetcher:dt,imageProxy:ft,jsonProxy:pt},f(Ze,null,f(Ye,null),f(st,{nfts:ut}),f(Ke,null)))}ve.render(f(k.StrictMode,null,f(ge,null,f(mt,null))),document.getElementById("root"));
