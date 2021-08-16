import type { Address, NftMetadata } from "../../types"

import { addressesEqual } from "../../utils"
import { CRYPTOPUNKS } from "../../known-contracts"

const CRYPTOPUNKS_DESCRIPTION = `
  10,000 unique collectible characters with proof of ownership stored on the
  Ethereum blockchain. The project that inspired the modern CryptoArt movement.
  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721
  standard that powers most digital art and collectibles.
`

export function cryptoPunksMetadata(index: string): NftMetadata {
  return {
    description: CRYPTOPUNKS_DESCRIPTION,
    image: `https://www.larvalabs.com/cryptopunks/cryptopunk${index}.png`,
    imageType: "image",
    metadataUrl: "",
    name: `CryptoPunk ${index}`,
    owner: "",
  }
}

export function isCryptoPunks(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, CRYPTOPUNKS)
}
