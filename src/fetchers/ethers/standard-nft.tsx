import type { Contract, ContractFunction } from "@ethersproject/contracts"
import type { Address, NftMetadata } from "../../types"
import type { EthersFetcherOptions } from "./types"

import {
  fixNftMetadataMixedInJsonSchema,
  isAddress,
  isNftMetadata,
  isNftMetadataMixedInJsonSchema,
  normalizeNftMetadata,
  normalizeTokenUrl,
} from "../../utils"

const ABI = [
  // ERC-721
  "function tokenURI(uint256 _tokenId) external view returns (string)",
  // ERC-1155
  "function uri(uint256 _id) external view returns (string)",
]

export async function standardNftMetadata(
  tokenId: string,
  contractAddress: Address,
  config: EthersFetcherOptions
): Promise<NftMetadata> {
  const contract = new config.ethers.Contract(
    contractAddress,
    ABI,
    config.provider
  ) as InstanceType<typeof Contract> & {
    uri: ContractFunction<string>
    tokenURI: ContractFunction<string>
  }

  const url = await Promise.any([
    contract.uri(tokenId),
    contract.tokenURI(tokenId),
  ])

  return loadMetadata(normalizeTokenUrl(url, tokenId))
}

async function loadMetadata(url: string): Promise<NftMetadata> {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("Error when trying to request " + url)
  }

  let data: unknown

  try {
    data = await res.json()
  } catch (err) {
    // If it can’t be parsed as JSON, it must be an image URL
    data = { name: "", description: "", image: url }
  }

  if (isNftMetadataMixedInJsonSchema(data)) {
    data = fixNftMetadataMixedInJsonSchema(data)
  }

  if (!isNftMetadata(data)) {
    throw new Error("Invalid data received")
  }

  return normalizeNftMetadata({
    name: data.name || "",
    image: data.image || "",
    description: data.description || "",
  })
}

export function isStandardNft(contractAddress: Address): boolean {
  return isAddress(contractAddress)
}
