import type { Address, NftMetadata } from "../../types"
import type { EthersFetcherOptions } from "./types"

import { addressesEqual, fetchImage, ipfsUrl } from "../../utils"

const MOONCATS_WRAPPED_CONTRACT = "0x7c40c393dc0f283f318791d746d894ddd3693572"

const MOONCATS_WRAPPED_ABI = [
  "function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)",
]

// See https://www.reddit.com/r/MoonCatRescue/comments/m5d7mx/svg_imagery_of_all_rescued_mooncats/
const MOONCATS_IPFS_CID =
  "bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava"

async function imageUrl(catId: string): Promise<string | null> {
  const dir = catId.slice(4, 6)
  const url = ipfsUrl(`ipfs://ipfs/${MOONCATS_IPFS_CID}/${dir}/${catId}.png`)

  const image = await fetchImage(url)
  const width = image.naturalWidth * 4
  const height = image.naturalHeight * 4
  const hPadding = width * 0.125
  const vPadding = height * 0.125

  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext("2d")

  if (ctx === null) {
    return null
  }

  ctx.imageSmoothingEnabled = false
  ctx.drawImage(
    image,
    hPadding,
    vPadding,
    width - hPadding * 2,
    height - vPadding * 2
  )

  return canvas.toDataURL()
}

export async function moonCatsMetadata(
  tokenId: string,
  config: EthersFetcherOptions
): Promise<NftMetadata> {
  const wrappedContract = new config.ethers.Contract(
    MOONCATS_WRAPPED_CONTRACT,
    MOONCATS_WRAPPED_ABI,
    config.provider
  )

  const catId = await wrappedContract._tokenIDToCatID(tokenId)
  const image = (await imageUrl(catId)) ?? ""

  return {
    name: `Wrapped MoonCat #${tokenId}`,
    description: `The (unofficial) wrapped version of MoonCats Rescue. catId: ${catId}.`,
    image,
  }
}

export function isMoonCats(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, MOONCATS_WRAPPED_CONTRACT)
}
