import type { Address, NftMetadata } from "../../types"
import type { EthersFetcher, EthersFetcherOptions } from "./types"

import { cryptoPunksMetadata, isCryptoPunks } from "./cryptopunks"
import { cryptoKittiesMetadata, isCryptoKitties } from "./cryptokitties"
import { moonCatsMetadata, isMoonCats } from "./mooncats"
import { standardNftMetadata, isStandardNft } from "./standard-nft"

export default function ethersFetcher({
  ethers,
  provider,
}: EthersFetcherOptions): EthersFetcher {
  const config = { ethers, provider }
  return {
    config,
    async fetchNft(
      contractAddress: Address,
      tokenId: string
    ): Promise<NftMetadata> {
      if (isCryptoPunks(contractAddress)) {
        return cryptoPunksMetadata(tokenId)
      }

      if (isCryptoKitties(contractAddress)) {
        return cryptoKittiesMetadata(tokenId)
      }

      if (isMoonCats(contractAddress)) {
        return moonCatsMetadata(tokenId, config)
      }

      if (isStandardNft(contractAddress)) {
        return standardNftMetadata(tokenId, contractAddress, config)
      }

      throw new Error("Invalid contract address or token ID provided")
    },
  }
}
