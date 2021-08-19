import type { NftMetadata } from "use-nft"

import React from "react"
import { providers } from "ethers"
import { NftProvider, FetcherDeclarationEthers } from "use-nft"
import Base from "./Base"
import Footer from "./Footer"
import Header from "./Header"
import NftGrid from "./NftGrid"
import nfts from "../../examples/nfts"

const fetcher = [
  "ethers",
  {
    provider: new providers.InfuraProvider(
      "homestead",
      import.meta.env.VITE_INFURA_KEY
    ),
  },
]

const imageProxy = (url: string, metadata: NftMetadata) =>
  metadata.imageType === "video"
    ? url
    : `https://ik.imagekit.io/p/${encodeURIComponent(url)}?tr=n-card`

const jsonProxy = (url: string) =>
  `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`

function App() {
  return (
    <NftProvider
      fetcher={fetcher as FetcherDeclarationEthers}
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
