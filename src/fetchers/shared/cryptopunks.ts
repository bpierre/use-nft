import type { Address, NftMetadata } from "../../types"

import { addressesEqual } from "../../utils"

const CRYPTOPUNKS_CONTRACT = "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"

const CRYPTOPUNKS_DESCRIPTION = `
  10,000 unique collectible characters with proof of ownership stored on the
  Ethereum blockchain. The project that inspired the modern CryptoArt movement.
  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721
  standard that powers most digital art and collectibles.
`

export function cryptoPunksMetadata(index: string): NftMetadata {
  return {
    name: `CryptoPunk ${index}`,
    description: CRYPTOPUNKS_DESCRIPTION,
    image: `https://www.larvalabs.com/cryptopunks/cryptopunk${index}.png`,
  }
}

export function isCryptoPunks(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, CRYPTOPUNKS_CONTRACT)
}
