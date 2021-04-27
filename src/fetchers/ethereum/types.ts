import type { Fetcher } from "../../types"

export type EthereumProviderEip1193 = {
  request: (args: {
    method: string
    params?: unknown[] | Record<string, unknown>
  }) => Promise<unknown>
}

export type EthereumFetcherConfig = {
  ethereum?: EthereumProviderEip1193
}

export type EthereumFetcher = Fetcher<EthereumFetcherConfig>
