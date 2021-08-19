import type { Contract } from "@ethersproject/contracts"
import type { BaseProvider, JsonRpcProvider } from "@ethersproject/providers"
import type { Fetcher } from "../../types"

export type EthersContract = typeof Contract

export type EthersFetcherConfig = {
  ethers?: { Contract: EthersContract }
  provider: BaseProvider | JsonRpcProvider
}

export type EthersFetcherConfigEthersLoaded = EthersFetcherConfig & {
  ethers: { Contract: EthersContract }
}

export type EthersFetcher = Fetcher<EthersFetcherConfig>
