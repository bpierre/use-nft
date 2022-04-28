import type { NftMetadata } from "use-nft"

import React from "react"
import { providers } from "ethers"
import { NftProvider, FetcherDeclarationEthers } from "use-nft"
import Base from "./Base"
import Footer from "./Footer"
import Header from "./Header"
import NftGrid from "./NftGrid"
import nfts from "../../examples/nfts"

const INFURA_KEY = import.meta.env.VITE_IMAGEKIT_ENDPOINT
const IMAGEKIT_ENDPOINT = import.meta.env.VITE_IMAGEKIT_ENDPOINT

const fetcher: FetcherDeclarationEthers = [
  "ethers",
  { provider: new providers.InfuraProvider("homestead", INFURA_KEY) },
]

function imageProxy(url: string, metadata: NftMetadata) {
  if (metadata.imageType === "video") return url
  return IMAGEKIT_ENDPOINT
    ? `${IMAGEKIT_ENDPOINT}${encodeURIComponent(url)}?tr=n-card`
    : url
}

const jsonProxy = (url: string) =>
  `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`

function App() {
  return (
    <NftProvider
      fetcher={fetcher}
      imageProxy={imageProxy}
      jsonProxy={jsonProxy}
    >
      <Base>
        <Header />
        <NftGrid nfts={nfts} />
        <Footer />
      </Base>
    </NftProvider>
  )
}

export default App
