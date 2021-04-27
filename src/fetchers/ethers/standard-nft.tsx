import type { Contract, ContractFunction } from "@ethersproject/contracts"
import type { Address } from "../../types"
import type { EthersFetcherConfig } from "./types"

import { normalizeTokenUrl, promiseAny } from "../../utils"

const ABI = [
  // ERC-721
  "function tokenURI(uint256 _tokenId) external view returns (string)",
  // ERC-1155
  "function uri(uint256 _id) external view returns (string)",
  // ERC-165
  "function supportsInterface(bytes4 interfaceID) external view returns (bool)",
]

export async function fetchStandardNftUrl(
  contractAddress: Address,
  tokenId: string,
  config: EthersFetcherConfig
): Promise<string> {
  const contract = new config.ethers.Contract(
    contractAddress,
    ABI,
    config.provider
  ) as InstanceType<typeof Contract> & {
    uri: ContractFunction<string>
    tokenURI: ContractFunction<string>
    supportsInterface: ContractFunction<boolean>
  }

  const url = await promiseAny([
    contract.uri(tokenId),
    contract.tokenURI(tokenId),
  ])

  return normalizeTokenUrl(url, tokenId)
}
