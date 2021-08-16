import React from "react"
import { NftProvider } from "use-nft"

import Base from "./Base"
import NftGrid from "./NftGrid"
import NoEthereum from "./NoEthereum"
import nfts from "../../nfts"
import useEthereum from "./use-ethereum"

const jsonProxy = (url: string) =>
  `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`

function App() {
  const ethereum = useEthereum()
  const connected = ethereum?.isConnected()
  return (
    <NftProvider fetcher={["ethereum", { ethereum }]} jsonProxy={jsonProxy}>
      <Base>{connected ? <NftGrid nfts={nfts} /> : <NoEthereum />}</Base>
    </NftProvider>
  )
}

export default App
