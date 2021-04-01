import type { Address, NftMetadata } from "../../types"

import { addressesEqual } from "../../utils"

const CRYPTOKITTIES_CONTRACT = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d"

export async function cryptoKittiesMetadata(id: string): Promise<NftMetadata> {
  const res = await fetch(`https://api.cryptokitties.co/v3/kitties/${id}`)
  const data = (await res.json()) as {
    name: string
    bio: string
    image_url: string
  }
  return {
    name: data?.name ?? "Unknown",
    description: data?.bio ?? "−",
    image: data?.image_url ?? "",
  }
}

export function isCryptoKitties(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, CRYPTOKITTIES_CONTRACT)
}
