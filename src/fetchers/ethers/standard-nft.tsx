import type { Contract, ContractFunction } from "@ethersproject/contracts"
import type { Address, FetchContext, NftMetadata } from "../../types"
import type { EthersFetcherConfigEthersLoaded } from "./types"

import { fetchMetadata } from "../shared/fetch-metadata"
import {
  MultipleErrors,
  normalizeTokenUrl,
  promiseAny,
  urlExtensionType,
} from "../../utils"

const ABI = [
  // ERC-721
  "function tokenURI(uint256 _tokenId) external view returns (string)",
  "function ownerOf(uint256 _tokenId) external view returns (address)",
  // ERC-1155
  "function uri(uint256 _id) external view returns (string)",
]

type NftContract = InstanceType<typeof Contract> & {
  ownerOf: ContractFunction<string>
  tokenURI: ContractFunction<string>
  uri: ContractFunction<string>
}

async function url(
  contract: NftContract,
  tokenId: string,
  fetchContext: FetchContext
): Promise<string> {
  const uri = await promiseAny([
    contract.tokenURI(tokenId),
    contract.uri(tokenId),
  ]).catch((errors) => {
    throw new MultipleErrors(
      "An error occurred while trying to fetch the token URI from the NFT" +
        " contract. See the “errors” property on this error for details.",
      errors
    )
  })
  return normalizeTokenUrl(uri, tokenId, fetchContext)
}

export async function fetchStandardNftContractData(
  contractAddress: Address,
  tokenId: string,
  config: EthersFetcherConfigEthersLoaded,
  fetchContext: FetchContext
): Promise<NftMetadata> {
  const contract = new config.ethers.Contract(
    contractAddress,
    ABI,
    config.provider
  ) as NftContract

  const [metadataUrl, owner] = await Promise.all([
    url(contract, tokenId, fetchContext),
    contract.ownerOf(tokenId).catch(() => ""),
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
