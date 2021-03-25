import React from "react"
import { ethers } from "ethers"
import { NftProvider, ethersFetcher } from "use-nft"
import Footer from "./Footer"
import NftGrid from "./NftGrid"
import Header from "./Header"
import nfts from "./nfts"

const nftFetcher = ethersFetcher({
  provider: ethers.getDefaultProvider("homestead", {
    infura: import.meta.env.VITE_INFURA_KEY,
  }),
})

function App() {
  return (
    <NftProvider fetcher={nftFetcher}>
      <Header />
      <NftGrid nfts={nfts} />
      <Footer />
    </NftProvider>
  )
}

export default App
