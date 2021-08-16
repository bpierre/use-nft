import type { Address, FetchContext, NftMetadata } from "../../types"
import type { EthereumFetcherConfig, EthereumProviderEip1193 } from "./types"

import { fetchMetadata } from "../shared/fetch-metadata"
import {
  MultipleErrors,
  normalizeTokenUrl,
  promiseAny,
  urlExtensionType,
} from "../../utils"
import {
  decodeAddress,
  decodeString,
  ethCall,
  methodOwnerOfErc721,
  methodUriErc1155,
  methodUriErc721,
} from "./utils"

function uriMethods(tokenId: string): string[] {
  return [methodUriErc721(BigInt(tokenId)), methodUriErc1155(BigInt(tokenId))]
}

async function url(
  contractAddress: Address,
  tokenId: string,
  ethereum: EthereumProviderEip1193,
  fetchContext: FetchContext
): Promise<string> {
  const uri = await promiseAny(
    uriMethods(tokenId).map((method) =>
      ethCall(ethereum, contractAddress, method)
    )
  ).catch((errors) => {
    throw new MultipleErrors(
      "An error occurred while trying to fetch the token URI from the NFT" +
        " contract. See the “errors” property on this error for details.",
      errors
    )
  })
  return normalizeTokenUrl(decodeString(uri), tokenId, fetchContext)
}

export async function fetchStandardNftContractData(
  contractAddress: Address,
  tokenId: string,
  { ethereum }: EthereumFetcherConfig,
  fetchContext: FetchContext
): Promise<NftMetadata> {
  const [metadataUrl, owner] = await Promise.all([
    url(contractAddress, tokenId, ethereum, fetchContext),
    ethCall(ethereum, contractAddress, methodOwnerOfErc721(BigInt(tokenId)))
      .then(decodeAddress)
      .catch(() => ""),
  ])

  const metadata = await fetchMetadata(metadataUrl, fetchContext)
  const imageType = urlExtensionType(metadata.image)

  return {
    ...metadata,
    imageType,
    metadataUrl,
    owner,
  }
}
