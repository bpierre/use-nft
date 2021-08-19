import type { ContractMethod } from "../../types"
import type { EthereumFetcherConfig } from "./types"

import { decodeString, ethCall, uint256Hex } from "./utils"

export function cryptoPunksImage(config: EthereumFetcherConfig) {
  return async function cryptoPunksImage(
    index: string,
    method: ContractMethod
  ): Promise<string> {
    if (config.ethereum === undefined) {
      throw new Error("No Ethereum provider")
    }
    return ethCall(
      config.ethereum,
      method.address,
      method.methodHash + uint256Hex(BigInt(index))
    ).then(decodeString)
  }
}
