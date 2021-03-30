import type { ReactNode } from "react"
import type { Address, Loader, NftMetadata } from "./types"

import React, { createContext, useCallback, useContext } from "react"
import { useLoad } from "./react-utils"

export type Fetcher<Config> = {
  config: Config
  fetchNft: (contractAddress: Address, tokenId: string) => Promise<NftMetadata>
}

export type NftProviderType = {
  children: ReactNode
  fetcher: Fetcher<any>
}

const NftContext = createContext<{
  fetcher: Fetcher<any>
} | null>(null)

function NftProvider({ children, fetcher }: NftProviderType) {
  return (
    <NftContext.Provider value={{ fetcher }}>{children}</NftContext.Provider>
  )
}

function useNft(
  contractAddress: Address,
  tokenId: string
): Loader<NftMetadata> {
  const context = useContext(NftContext)
  if (context === null) {
    throw new Error("Please wrap your app with <NftProvider />")
  }
  const { fetcher } = context
  return useLoad<NftMetadata>(
    useCallback(() => fetcher.fetchNft(contractAddress, tokenId), [
      contractAddress,
      fetcher,
      tokenId,
    ])
  )
}

export { useNft, NftProvider }
