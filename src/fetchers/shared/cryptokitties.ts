import type { Address, FetchContext, NftMetadata } from "../../types"

import { CRYPTOKITTIES } from "../../known-contracts"
import { addressesEqual } from "../../utils"

export async function cryptoKittiesMetadata(
  id: string,
  { jsonProxy }: FetchContext
): Promise<NftMetadata> {
  const metadataUrl = jsonProxy(`https://api.cryptokitties.co/v3/kitties/${id}`)
  const res = await fetch(metadataUrl)
  const data = (await res.json()) as {
    name: string
    bio: string
    image_url: string
  }
  const image = data?.image_url ?? ""
  return {
    description: data?.bio ?? "−",
    image,
    imageType: image ? "image" : "unknown",
    metadataUrl,
    name: data?.name ?? "Unknown",
    owner: "",
    rawData: data,
  }
}

export function isCryptoKitties(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, CRYPTOKITTIES)
}
