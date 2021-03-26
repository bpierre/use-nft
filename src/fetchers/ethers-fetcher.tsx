import type { BaseProvider } from "@ethersproject/providers"
import type { Contract } from "@ethersproject/contracts"
import type { Address, Loader, NftMetadata } from "../types"
import type { Fetcher } from "../core"

import { useCallback } from "react"
import {
  fixNftMetadataMixedInJsonSchema,
  isNftMetadata,
  isNftMetadataMixedInJsonSchema,
  normalizeTokenUrl,
  normalizeNftMetadata,
  useLoad,
} from "../utils"
import { CRYPTOPUNKS_CONTRACT, cryptoPunkMetadata } from "../cryptopunks"

type EthersFetcherOptions = {
  ethers: { Contract: typeof Contract }
  provider: BaseProvider
}
type EthersFetcher = Fetcher<EthersFetcherOptions>

const ABI = [
  // ERC-721
  "function tokenURI(uint256 _tokenId) external view returns (string)",
  // ERC-1155
  "function uri(uint256 _id) external view returns (string)",
]

async function loadMetadata(url: string): Promise<NftMetadata> {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("Error when trying to request " + url)
  }

  const hasJsonType = res.headers.get("content-type") === "application/json"

  let data = hasJsonType
    ? await res.json()
    : { name: "", description: "", image: url }

  if (isNftMetadataMixedInJsonSchema(data)) {
    data = fixNftMetadataMixedInJsonSchema(data)
  }

  if (!isNftMetadata(data)) {
    throw new Error("Invalid data received")
  }

  return normalizeNftMetadata({
    name: data.name || "",
    image: data.image || "",
    description: data.description || "",
  })
}

export function useNft(
  fetcher: EthersFetcher,
  contractAddress: Address,
  tokenId: string
): Loader<NftMetadata> {
  return useLoad<NftMetadata>(
    useCallback(async () => {
      if (contractAddress === CRYPTOPUNKS_CONTRACT) {
        return cryptoPunkMetadata(tokenId)
      }

      const contract = new fetcher.config.ethers.Contract(
        contractAddress,
        ABI,
        fetcher.config.provider
      )

      const url = await Promise.any([
        contract.uri(tokenId),
        contract.tokenURI(tokenId),
      ])

      return loadMetadata(normalizeTokenUrl(url, tokenId))
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
