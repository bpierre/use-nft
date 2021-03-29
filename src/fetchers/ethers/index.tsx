import type { Address, Loader, NftMetadata } from "../../types"
import type { EthersFetcher, EthersFetcherOptions } from "./types"

import { useCallback } from "react"
import { useLoad } from "../../utils"
import { cryptoPunksMetadata, isCryptoPunks } from "./cryptopunks"
import { standardNftMetadata, isStandardNft } from "./standard-nft"

export function useNft(
  fetcher: EthersFetcher,
  contractAddress: Address,
  tokenId: string
): Loader<NftMetadata> {
  return useLoad<NftMetadata>(
    useCallback(async () => {
      if (isCryptoPunks(contractAddress)) {
        return cryptoPunksMetadata(tokenId)
      }

      if (isStandardNft(contractAddress)) {
        return standardNftMetadata(tokenId, contractAddress, fetcher.config)
      }

      throw new Error("Invalid contract address or token ID provided")
    }, [contractAddress, tokenId, fetcher])
  )
}

export function ethersFetcher({
  ethers,
  provider,
}: EthersFetcherOptions): EthersFetcher {
  return {
    config: { ethers, provider },
    useNft,
  }
}
