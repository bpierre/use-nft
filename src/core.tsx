import type { ReactNode } from "react"
import type {
  Address,
  NftMetadata,
  NftResult,
  NftResultDone,
  NftResultError,
  NftResultLoading,
} from "./types"

import React, { createContext, useCallback, useContext, useMemo } from "react"
import useSWR from "swr"

export type Fetcher<Config> = {
  config: Config
  fetchNft: (contractAddress: Address, tokenId: string) => Promise<NftMetadata>
}

export type NftProviderType = {
  children: ReactNode
  fetcher?: Fetcher<unknown> | null
}

const NftContext = createContext<{
  fetcher?: Fetcher<unknown> | null
} | null>(null)

function NftProvider({ children, fetcher }: NftProviderType): JSX.Element {
  return (
    <NftContext.Provider value={{ fetcher }}>{children}</NftContext.Provider>
  )
}

const NFT_METADATA_DEFAULT = {
  name: "",
  description: "",
  image: "",
}

function useNft(contractAddress: Address, tokenId: string): NftResult {
  const context = useContext(NftContext)
  if (context === null) {
    throw new Error("Please wrap your app with <NftProvider />")
  }

  const { fetcher } = context

  const fetchNft = useCallback(
    () =>
      fetcher
        ? fetcher.fetchNft(contractAddress, tokenId)
        : { ...NFT_METADATA_DEFAULT },
    [contractAddress, fetcher, tokenId]
  )

  const result = useSWR<NftMetadata, Error>(contractAddress + tokenId, fetchNft)

  return useMemo(() => {
    const { error, data, revalidate } = result

    const reload = () => revalidate()

    if (error === undefined && data === undefined) {
      return {
        error: undefined,
        loading: true,
        nft: undefined,
        reload,
        status: "loading",
      } as NftResultLoading
    }

    if (error !== undefined) {
      return {
        error,
        loading: false,
        nft: undefined,
        reload,
        status: "error",
      } as NftResultError
    }

    return {
      error: undefined,
      loading: false,
      nft: data as NftMetadata,
      reload,
      status: "done",
    } as NftResultDone
  }, [result])
}

export { useNft, NftProvider }
