import React from "react"
import { providers, Contract } from "ethers"
import { NftProvider, FetcherDeclarationEthers } from "use-nft"
import Base from "./Base"
import Footer from "./Footer"
import Header from "./Header"
import NftGrid from "./NftGrid"
import nfts from "../../examples/nfts"

const fetcher = [
  "ethers",
  {
    ethers: { Contract },
    provider: new providers.InfuraProvider(
      "homestead",
      import.meta.env.VITE_INFURA_KEY
    ),
  },
]

function App() {
  return (
    <NftProvider fetcher={fetcher as FetcherDeclarationEthers}>
      <Base>
        <Header />
        <NftGrid nfts={nfts} />
        <Footer />
      </Base>
    </NftProvider>
  )
}

export default App
