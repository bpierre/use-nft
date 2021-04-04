import type { Address, ContractMethod } from "../../types"
import type { EthereumFetcherConfig } from "./types"

import { ethCall, uint256Hex } from "./utils"

export function moonCatsCatId(config: EthereumFetcherConfig) {
  return async function moonCatsCatId(
    contractAddress: Address,
    tokenId: string,
    method: ContractMethod
  ): Promise<string> {
    const result = await ethCall(
      config.ethereum,
      contractAddress,
      method.methodHash + uint256Hex(BigInt(tokenId))
    )
    return result.slice(0, 12) // 12 = 0x prefix + 5 bytes
  }
}
