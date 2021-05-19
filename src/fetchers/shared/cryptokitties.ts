import type { Address, NftMetadata } from "../../types"

import { CRYPTOKITTIES } from "../../known-contracts"
import { addressesEqual } from "../../utils"

export async function cryptoKittiesMetadata(id: string): Promise<NftMetadata> {
  const res = await fetch(`https://api.cryptokitties.co/v3/kitties/${id}`)
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
  }
}

export function isCryptoKitties(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, CRYPTOKITTIES)
}
