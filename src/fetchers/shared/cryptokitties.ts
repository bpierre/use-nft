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
  return {
    description: data?.bio ?? "−",
    image: data?.image_url ?? "",
    name: data?.name ?? "Unknown",
    owner: "",
    metadataUrl,
  }
}

export function isCryptoKitties(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, CRYPTOKITTIES)
}
