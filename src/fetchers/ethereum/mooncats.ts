import type { ContractMethod } from "../../types"
import type { EthereumFetcherConfig } from "./types"

import { ethCall, uint256Hex } from "./utils"

export function moonCatsCatId(config: EthereumFetcherConfig) {
  return async function moonCatsCatId(
    tokenId: string,
    method: ContractMethod
  ): Promise<string> {
    if (config.ethereum === undefined) {
      throw new Error("No Ethereum provider")
    }
    const result = await ethCall(
      config.ethereum,
      method.address,
      method.methodHash + uint256Hex(BigInt(tokenId))
    )
    return result.slice(0, 12) // 12 = 0x prefix + 5 bytes
  }
}
