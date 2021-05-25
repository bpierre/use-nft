import type { Address } from "../../types"
import type { EthereumFetcherConfig } from "./types"

import { normalizeTokenUrl, promiseAny } from "../../utils"
import {
  decodeAddress,
  decodeString,
  ethCall,
  methodOwnerOfErc721,
  methodUriErc1155,
  methodUriErc721,
} from "./utils"

export async function fetchStandardNftContractData(
  contractAddress: Address,
  tokenId: string,
  { ethereum }: EthereumFetcherConfig
): Promise<[string, Address]> {
  if (!ethereum) {
    return ["", ""]
  }

  // call ownerOf() even on 1155 contracts, just in case it exists
  const ownerPromise = ethCall(
    ethereum,
    contractAddress,
    methodOwnerOfErc721(BigInt(tokenId))
  )
    .then(decodeAddress)
    .catch(() => "")

  const calls = [
    methodUriErc721(BigInt(tokenId)),
    methodUriErc1155(BigInt(tokenId)),
  ]

  try {
    return promiseAny(
      calls.map(async (callMethod) => {
        const urlString = await ethCall(ethereum, contractAddress, callMethod)
        const url = normalizeTokenUrl(decodeString(urlString), tokenId)
        return Promise.all([url, ownerPromise])
      })
    )
  } catch (err) {
    return ["", ""]
  }
}
