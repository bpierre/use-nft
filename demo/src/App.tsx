import React from "react"
import { ethers } from "ethers"
import { NftProvider, ethersFetcher } from "use-nft"
import Base from "./Base"
import Footer from "./Footer"
import Header from "./Header"
import NftGrid from "./NftGrid"
import nfts from "./nfts"

const nftFetcher = ethersFetcher({
  provider: ethers.getDefaultProvider("homestead", {
    infura: import.meta.env.VITE_INFURA_KEY,
  }),
})

function App() {
  return (
    <NftProvider fetcher={nftFetcher}>
      <Base>
        <Header />
        <NftGrid nfts={nfts} />
        <Footer />
      </Base>
    </NftProvider>
  )
}

export default App
