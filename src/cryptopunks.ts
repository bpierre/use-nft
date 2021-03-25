import type { NftMetadata } from "./types"

export const CRYPTOPUNKS_CONTRACT = "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"

const CRYPTOPUNKS_DESCRIPTION = `
  10,000 unique collectible characters with proof of ownership stored on the
  Ethereum blockchain. The project that inspired the modern CryptoArt
  movement. Featured in Mashable, The Financial Times, The Paris Review,
  Salon, The Outline, BreakerMag, Christie's of London, Art|Basel, The PBS
  NewsHour and The New York Times. Currently showing at the ZKM Center for Art
  and Media in Karlsruhe, Germany as part of the Open Codes Exhibition. The
  first "Non-Fungible Token," and inspiration for the Ethereum ERC-721
  standard that powers most digital art and collectibles.
`

export function cryptoPunkMetadata(index: string): NftMetadata {
  return {
    name: `CryptoPunk ${index}`,
    description: CRYPTOPUNKS_DESCRIPTION,
    image: `https://www.larvalabs.com/cryptopunks/cryptopunk${index}.png`,
  }
}
