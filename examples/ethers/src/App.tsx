import React from "react"
import { NftProvider } from "use-nft"
import { getDefaultProvider, Contract } from "ethers"

import Base from "./Base"
import NftGrid from "./NftGrid"
import nfts from "../../nfts"

const ethersConfig = {
  ethers: { Contract },
  provider: getDefaultProvider("homestead"),
}

const imageProxy = (url) =>
  `https://ik.imagekit.io/p/${encodeURIComponent(url)}?tr=n-card`
const jsonProxy = (url) =>
  `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`

function App() {
  return (
    <NftProvider
      fetcher={["ethers", ethersConfig]}
      imageProxy={imageProxy}
      jsonProxy={jsonProxy}
    >
      <Base>
        <NftGrid nfts={nfts} />
      </Base>
    </NftProvider>
  )
}

export default App
