import type { Contract, ContractFunction } from "@ethersproject/contracts"
import type { Address } from "../../types"
import type { EthersFetcherConfig } from "./types"

import { normalizeTokenUrl, promiseAny } from "../../utils"

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

async function url(contract: NftContract, tokenId: string): Promise<string> {
  const uri = await promiseAny([
    contract.tokenURI(tokenId),
    contract.uri(tokenId),
  ])
  return normalizeTokenUrl(uri, tokenId)
}

export async function fetchStandardNftContractData(
  contractAddress: Address,
  tokenId: string,
  config: EthersFetcherConfig
): Promise<[string, Address]> {
  const contract = new config.ethers.Contract(
    contractAddress,
    ABI,
    config.provider
  ) as NftContract

  return Promise.all([
    url(contract, tokenId),
    contract.ownerOf(tokenId).catch(() => ""),
  ])
}
