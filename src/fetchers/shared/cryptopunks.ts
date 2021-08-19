import type { Address, ContractMethod, NftMetadata } from "../../types"

import { CRYPTOPUNKS, CRYPTOPUNKS_IMAGES } from "../../known-contracts"
import { addressesEqual } from "../../utils"

const CRYPTOPUNKS_DESCRIPTION = `
  10,000 unique collectible characters with proof of ownership stored on the
  Ethereum blockchain. The project that inspired the modern CryptoArt movement.
  The first "Non-Fungible Token," and inspiration for the Ethereum ERC-721
  standard that powers most digital art and collectibles.
`

const CRYPTOPUNKS_IMAGE_SVG: ContractMethod = {
  address: CRYPTOPUNKS_IMAGES,
  methodName: "punkImageSvg",
  methodHash: "0x74beb047",
  humanReadableAbi: [
    "function punkImageSvg(uint16 index) view returns (string svg)",
  ],
}

function encodeUriData(dataUri: string): string {
  const dataStart = dataUri.indexOf(",") + 1
  return (
    dataUri.slice(0, dataStart) +
      encodeURIComponent(dataUri.slice(dataStart)) ?? ""
  )
}

export async function cryptoPunksMetadata(
  index: string,
  cryptoPunksImage: (tokenId: string, method: ContractMethod) => Promise<string>
): Promise<NftMetadata> {
  const image = await cryptoPunksImage(index, CRYPTOPUNKS_IMAGE_SVG)

  return {
    description: CRYPTOPUNKS_DESCRIPTION,
    image: encodeUriData(image),
    imageType: "image",
    metadataUrl: "",
    name: `CryptoPunk ${index}`,
    owner: "",
    rawData: null,
  }
}

export function isCryptoPunks(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, CRYPTOPUNKS)
}
