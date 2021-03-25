import type { ReactNode } from "react"
import type { Address, Loader, NftMetadata } from "./types"

import React, { createContext, useContext } from "react"

export type Fetcher<Config> = {
  config: Config
  useNft: (
    fetcher: Fetcher<Config>,
    contractAddress: Address,
    tokenId: string
  ) => Loader<NftMetadata>
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
  return context.fetcher.useNft(context.fetcher, contractAddress, tokenId)
}

export { useNft, NftProvider }
