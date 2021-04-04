import type { Contract, ContractFunction } from "@ethersproject/contracts"
import type { Address, ContractMethod } from "../../types"
import type { EthersFetcherConfig } from "./types"

export function moonCatsCatId(config: EthersFetcherConfig) {
  return async function moonCatsCatId(
    contractAddress: Address,
    tokenId: string,
    method: ContractMethod
  ): Promise<string> {
    const wrappedContract = new config.ethers.Contract(
      contractAddress,
      method.humanReadableAbi,
      config.provider
    ) as InstanceType<typeof Contract> & {
      _tokenIDToCatID: ContractFunction<string>
    }
    const result = await wrappedContract[method.methodName](tokenId)
    return result ?? ""
  }
}
