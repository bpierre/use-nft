import type { NextPage } from "next"

import { NftProvider } from "use-nft"
import { getDefaultProvider } from "ethers"
import nfts from "../nfts"
import Base from "../components/Base"
import NftGrid from "../components/NftGrid"

const provider = getDefaultProvider("homestead")

const jsonProxy = (url: string) =>
  `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`

const Home: NextPage = () => {
  return (
    <NftProvider fetcher={["ethers", { provider }]} jsonProxy={jsonProxy}>
      <Base>
        <NftGrid nfts={nfts} />
      </Base>
    </NftProvider>
  )
}

export default Home
