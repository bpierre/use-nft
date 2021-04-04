import type { Address, NftMetadata } from "../../types"
import type { EthereumFetcher, EthereumFetcherConfig } from "./types"

import { isAddress } from "../../utils"
import { fetchMetadata } from "../shared/fetch-metadata"
import { cryptoPunksMetadata, isCryptoPunks } from "../shared/cryptopunks"
import { cryptoKittiesMetadata, isCryptoKitties } from "../shared/cryptokitties"
import { moonCatsMetadata, isMoonCats } from "../shared/mooncats"
import { moonCatsCatId } from "./mooncats"
import { fetchStandardNftUrl } from "./standard-nft"

export default function ethereumFetcher(
  config: EthereumFetcherConfig
): EthereumFetcher {
  return {
    config,
    async fetchNft(
      contractAddress: Address,
      tokenId: string
    ): Promise<NftMetadata> {
      if (!isAddress(contractAddress)) {
        throw new Error("Invalid contract address: " + contractAddress)
      }

      if (isCryptoPunks(contractAddress)) {
        return cryptoPunksMetadata(tokenId)
      }

      if (isCryptoKitties(contractAddress)) {
        return cryptoKittiesMetadata(tokenId)
      }

      if (isMoonCats(contractAddress)) {
        return moonCatsMetadata(tokenId, moonCatsCatId(config))
      }

      return fetchMetadata(
        await fetchStandardNftUrl(contractAddress, tokenId, config)
      )
    },
  }
}
