import type { FC, ReactNode } from "react"
import type {
  Address,
  Fetcher,
  FetcherDeclaration,
  FetcherDeclarationEthers,
  FetcherDeclarationEthereum,
  FetcherProp,
  NftMetadata,
  NftResult,
  NftResultDone,
  NftResultError,
  NftResultLoading,
} from "./types"
import type { EthersFetcherConfig } from "./fetchers/ethers/types"
import type { EthereumFetcherConfig } from "./fetchers/ethereum/types"

import React, { createContext, useCallback, useContext, useMemo } from "react"
import useSWR, { SWRConfig, createCache } from "swr"
import ethersFetcher from "./fetchers/ethers"
import ethereumFetcher from "./fetchers/ethereum"

const NFT_METADATA_DEFAULT = {
  name: "",
  description: "",
  image: "",
} as NftMetadata

function isFetcherDeclarationEthers(
  fetcher: FetcherProp
): fetcher is FetcherDeclarationEthers {
  return (
    Array.isArray(fetcher) && fetcher.length == 2 && fetcher[0] === "ethers"
  )
}

function isFetcherDeclarationEthereum(
  fetcher: FetcherProp
): fetcher is FetcherDeclarationEthereum {
  return (
    Array.isArray(fetcher) && fetcher.length == 2 && fetcher[0] === "ethereum"
  )
}

function normalizeFetcher(fetcher: FetcherProp): Fetcher<unknown> {
  // default fetcher
  if (!fetcher) {
    return {
      config: {},
      fetchNft: () => Promise.resolve(NFT_METADATA_DEFAULT),
    } as Fetcher<Record<string, never>>
  }

  // ethers
  if (isFetcherDeclarationEthers(fetcher)) {
    return ethersFetcher(fetcher[1]) as Fetcher<EthersFetcherConfig>
  }

  // ethereum
  if (isFetcherDeclarationEthereum(fetcher)) {
    return ethereumFetcher(fetcher[1]) as Fetcher<EthereumFetcherConfig>
  }

  // custom fetcher (or wrong value)
  return fetcher
}

const NftContext = createContext<{
  fetcher?: Fetcher<unknown> | null
  cacheStorage: Map<string, unknown>
} | null>(null)

const NftProvider: FC<{
  children: ReactNode
  fetcher?: Fetcher<unknown> | FetcherDeclaration | null
}> = function NftProvider({ children, fetcher }) {
  const [cacheStorage, { cache: swrCache }] = useMemo(() => {
    const cache = new Map()
    return [cache, createCache(cache)]
  }, [])

  const contextValue = {
    cacheStorage,
    fetcher: normalizeFetcher(fetcher),
  }

  return (
    <SWRConfig value={{ cache: swrCache }}>
      <NftContext.Provider value={contextValue}>{children}</NftContext.Provider>
    </SWRConfig>
  )
}

function useNft(contractAddress: Address, tokenId: string): NftResult {
  const context = useContext(NftContext)
  if (context === null) {
    throw new Error("Please wrap your app with <NftProvider />")
  }

  const { fetcher, cacheStorage } = context

  const fetchNft = useCallback(() => {
    return fetcher
      ? fetcher.fetchNft(contractAddress, tokenId)
      : { ...NFT_METADATA_DEFAULT }
  }, [contractAddress, fetcher, tokenId])

  const cached = cacheStorage.has(contractAddress + tokenId)

  const result = useSWR<NftMetadata, Error>(
    contractAddress + tokenId,
    fetchNft,
    {
      revalidateOnMount: !cached,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

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
