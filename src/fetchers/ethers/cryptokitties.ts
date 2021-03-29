import type { Address, NftMetadata } from "../../types"

import { addressesEqual } from "../../utils"

const CRYPTOKITTIES_CONTRACT = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d"

export async function cryptoKittiesMetadata(id: string): Promise<NftMetadata> {
  try {
    const res = await fetch(`https://api.cryptokitties.co/v3/kitties/${id}`)
    const data = await res.json()
    return {
      name: data?.name || "Unknown",
      description: data?.bio || "−",
      image: data?.image_url || "",
    }
  } catch (err) {
    throw err
  }
}

export function isCryptoKitties(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, CRYPTOKITTIES_CONTRACT)
}
