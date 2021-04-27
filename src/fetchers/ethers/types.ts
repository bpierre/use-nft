import type { Contract } from "@ethersproject/contracts"
import type { BaseProvider, JsonRpcProvider } from "@ethersproject/providers"
import type { Fetcher } from "../../types"

export type EthersFetcherConfig = {
  ethers: { Contract: typeof Contract }
  provider: BaseProvider | JsonRpcProvider
}
export type EthersFetcher = Fetcher<EthersFetcherConfig>
