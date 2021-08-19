import React from "react"
import { NftProvider } from "use-nft"
import { getDefaultProvider } from "ethers"

import Base from "./Base"
import NftGrid from "./NftGrid"
import nfts from "../../nfts"

const provider = getDefaultProvider("homestead")

const jsonProxy = (url: string) =>
  `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`

function App() {
  return (
    <NftProvider fetcher={["ethers", { provider }]} jsonProxy={jsonProxy}>
      <Base>
        <NftGrid nfts={nfts} />
      </Base>
    </NftProvider>
  )
}

export default App
