import type { Contract, ContractFunction } from "@ethersproject/contracts"
import type { ContractMethod } from "../../types"
import type { EthersFetcherConfigEthersLoaded } from "./types"

export function cryptoPunksImage(config: EthersFetcherConfigEthersLoaded) {
  return async function cryptoPunksImage(
    index: string,
    method: ContractMethod
  ): Promise<string> {
    const contract = new config.ethers.Contract(
      method.address,
      method.humanReadableAbi,
      config.provider
    ) as InstanceType<typeof Contract> & {
      punkImageSvg: ContractFunction<string>
    }
    return contract.punkImageSvg(index)
  }
}
