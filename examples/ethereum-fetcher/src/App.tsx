import React from "react"
import { getDefaultProvider, Contract } from "ethers"
import { NftProvider, ethereumFetcher } from "use-nft"
import Base from "./Base"
import NftGrid from "./NftGrid"
import NoEthereum from "./NoEthereum"
import nfts from "./nfts"
import useEthereum from "./use-ethereum"

function App() {
  const ethereum = useEthereum()
  return (
    <NftProvider fetcher={ethereum && ethereumFetcher({ ethereum })}>
      <Base>
        {ethereum && ethereum?.isConnected() ? (
          <NftGrid nfts={nfts} />
        ) : (
          <NoEthereum />
        )}
      </Base>
    </NftProvider>
  )
}

export default App
