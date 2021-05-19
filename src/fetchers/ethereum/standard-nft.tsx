import type { Address } from "../../types"
import type { EthereumFetcherConfig } from "./types"

import { addressesEqual, normalizeTokenUrl, promiseAny } from "../../utils"
import { CRYPTOVOXELS } from "../../known-contracts"
import {
  ERC1155_ID,
  ERC721_ID,
  decodeAddress,
  decodeBoolean,
  decodeString,
  ethCall,
  methodOwnerOfErc721,
  methodUriErc1155,
  methodUriErc721,
  supportsInterfaceMethodErc165,
} from "./utils"

// Contracts implementing ERC721’s tokenURI()
// but are missing ERC165’s supportsInterface()
const KNOWN_ERC721_LIKE = [CRYPTOVOXELS]

export async function fetchStandardNftContractData(
  contractAddress: Address,
  tokenId: string,
  { ethereum }: EthereumFetcherConfig
): Promise<[string, Address]> {
  if (!ethereum) {
    return ["", ""]
  }

  const urlCall = async (method: string): Promise<string> => {
    const result = await ethCall(ethereum, contractAddress, method)
    return normalizeTokenUrl(decodeString(result), tokenId)
  }

  // call ownerOf() even on 1155 contracts, just in case it exists
  const ownerPromise = ethCall(
    ethereum,
    contractAddress,
    methodOwnerOfErc721(BigInt(tokenId))
  )
    .then(decodeAddress)
    .catch(() => "")

  const isKnown721Like = KNOWN_ERC721_LIKE.some((address) =>
    addressesEqual(address, contractAddress)
  )
  if (isKnown721Like) {
    return Promise.all([
      urlCall(methodUriErc721(BigInt(tokenId))),
      ownerPromise,
    ])
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

        // throw for the Promise.any() to skip this branch
        if (!supported) {
          throw new Error("Unsupported method")
        }

        return Promise.all([urlCall(uriMethod), ownerPromise])
      })
    )
  } catch (err) {
    return ["", ""]
  }
}
