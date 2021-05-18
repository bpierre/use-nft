import React from "react"
import { NftProvider } from "use-nft"

import Base from "./Base"
import NftGrid from "./NftGrid"
import NoEthereum from "./NoEthereum"
import nfts from "../../nfts"
import useEthereum from "./use-ethereum"

function App() {
  const ethereum = useEthereum()
  const connected = ethereum?.isConnected()
  return (
    <NftProvider fetcher={["ethereum", { ethereum }]}>
      <Base>{connected ? <NftGrid nfts={nfts} /> : <NoEthereum />}</Base>
    </NftProvider>
  )
}

export default App
