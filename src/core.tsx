import type { FC, ReactNode } from "react"
import type {
  Address,
  FetchContext,
  Fetcher,
  FetcherDeclaration,
  FetcherDeclarationEthereum,
  FetcherDeclarationEthers,
  FetcherProp,
  ImageProxyFn,
  IpfsUrlFn,
  JsonProxyFn,
  NftMetadata,
  NftResult,
  NftResultDone,
  NftResultError,
  NftResultLoading,
} from "./types"
import type { EthersFetcherConfig } from "./fetchers/ethers/types"
import type { EthereumFetcherConfigDeclaration } from "./fetchers/ethereum/types"

import React, { createContext, useCallback, useContext, useMemo } from "react"
import useSWR, { SWRConfig, useSWRConfig } from "swr"
import ethersFetcher from "./fetchers/ethers"
import ethereumFetcher from "./fetchers/ethereum"
import { identity, ipfsUrlDefault } from "./utils"

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
  // ethers
  if (isFetcherDeclarationEthers(fetcher)) {
    return ethersFetcher(fetcher[1]) as Fetcher<EthersFetcherConfig>
  }

  // ethereum
  if (isFetcherDeclarationEthereum(fetcher)) {
    return ethereumFetcher(
      fetcher[1]
    ) as Fetcher<EthereumFetcherConfigDeclaration>
  }

  // custom fetcher (or wrong value)
  return fetcher
}

const NftContext = createContext<{
  fetcher: Fetcher<unknown> | null
  imageProxy: ImageProxyFn
  ipfsUrl: IpfsUrlFn
  jsonProxy: JsonProxyFn
} | null>(null)

const NftProvider: FC<{
  children: ReactNode
  fetcher: Fetcher<unknown> | FetcherDeclaration
  imageProxy?: ImageProxyFn
  ipfsUrl?: IpfsUrlFn
  jsonProxy?: JsonProxyFn
}> = function NftProvider({
  children,
  fetcher,
  imageProxy = identity,
  ipfsUrl = ipfsUrlDefault,
  jsonProxy = identity,
}) {
  if (!fetcher) {
    throw new Error("Please set the fetcher prop on <NftProvider />")
  }

  const context = {
    fetcher: normalizeFetcher(fetcher),
    imageProxy,
    ipfsUrl,
    jsonProxy,
  }

  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <NftContext.Provider value={context}>{children}</NftContext.Provider>
    </SWRConfig>
  )
}

function useNft(contractAddress: Address, tokenId: string): NftResult {
  const context = useContext(NftContext)
  if (context === null) {
    throw new Error("Please wrap your app with <NftProvider />")
  }

  const { fetcher, imageProxy, ipfsUrl, jsonProxy } = context
  const fetchContext = useMemo<FetchContext>(
    () => ({ imageProxy, ipfsUrl, jsonProxy }),
    [imageProxy, ipfsUrl, jsonProxy]
  )

  const fetchNft = useCallback(() => {
    return fetcher
      ? fetcher.fetchNft(contractAddress, tokenId, fetchContext)
      : { ...NFT_METADATA_DEFAULT }
  }, [contractAddress, fetcher, fetchContext, tokenId])

  const { cache } = useSWRConfig()
  const cached = (cache.get(contractAddress + tokenId) ?? false) as boolean

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
    const { error, data, mutate } = result

    const reload = () =>
      mutate()
        .then(() => true)
        .catch(() => false)

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
