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

function App() {
  return (
    <NftProvider fetcher={["ethers", ethersConfig]}>
      <Base>
        <NftGrid nfts={nfts} />
      </Base>
    </NftProvider>
  )
}

export default App
