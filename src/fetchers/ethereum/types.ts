import type { Fetcher } from "../../core"

export type EthereumProviderEip1193 = {
  request: (arguments: {
    method: string
    params?: unknown[] | object
  }) => Promise<unknown>
}

export type EthereumFetcherConfig = {
  ethereum: EthereumProviderEip1193
}

export type EthereumFetcher = Fetcher<EthereumFetcherConfig>
