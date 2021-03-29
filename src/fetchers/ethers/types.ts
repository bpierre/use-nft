import type { Contract } from "@ethersproject/contracts"
import type { BaseProvider } from "@ethersproject/providers"
import type { Fetcher } from "../../core"

export type EthersFetcherOptions = {
  ethers: { Contract: typeof Contract }
  provider: BaseProvider
}
export type EthersFetcher = Fetcher<EthersFetcherOptions>
