import type { Address } from "../../types"
import type { EthereumFetcherConfig } from "./types"

import { addressesEqual, normalizeTokenUrl, promiseAny } from "../../utils"
import { CRYPTOVOXELS } from "../../known-contracts"
import {
  ERC1155_ID,
  ERC721_ID,
  decodeString,
  decodeBoolean,
  ethCall,
  methodUriErc1155,
  methodUriErc721,
  supportsInterfaceMethodErc165,
} from "./utils"

// Contracts implementing ERC721’s tokenURI()
// but are missing ERC165’s supportsInterface()
const KNOWN_ERC721_LIKE = [CRYPTOVOXELS]

export async function fetchStandardNftUrl(
  contractAddress: Address,
  tokenId: string,
  { ethereum }: EthereumFetcherConfig
): Promise<string> {
  if (!ethereum) {
    return ""
  }

  const urlCall = async (method: string): Promise<string> => {
    const result = await ethCall(ethereum, contractAddress, method)
    return normalizeTokenUrl(decodeString(result), tokenId)
  }

  const isKnown721 = KNOWN_ERC721_LIKE.some((address) =>
    addressesEqual(address, contractAddress)
  )
  if (isKnown721) {
    return urlCall(methodUriErc721(BigInt(tokenId)))
  }

  const calls = [
    [
      supportsInterfaceMethodErc165(ERC721_ID),
      methodUriErc721(BigInt(tokenId)),
    ],
    [
      supportsInterfaceMethodErc165(ERC1155_ID),
      methodUriErc1155(BigInt(tokenId)),
    ],
  ]

  try {
    return promiseAny(
      calls.map(async ([supportsMethod, uriMethod]) => {
        // Check if the interface is supported first
        const supported = await ethCall(
          ethereum,
          contractAddress,
          supportsMethod
        ).then(decodeBoolean)

        // throw for the Promise.any()
        if (!supported) {
          throw new Error("Unsupported method")
        }

        return urlCall(uriMethod)
      })
    )
  } catch (err) {
    return ""
  }
}
