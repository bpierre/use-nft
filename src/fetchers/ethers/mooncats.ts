import type { Address, NftMetadata } from "../../types"
import type { EthersFetcherOptions } from "./types"

import mooncat from "mooncatparser"
import { addressesEqual } from "../../utils"

const MOONCATS_WRAPPED_CONTRACT = "0x7c40c393dc0f283f318791d746d894ddd3693572"

const MOONCATS_WRAPPED_ABI = [
  "function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)",
]

const CANVAS_SIZE = 10

function imageUrl(catId: string): string | null {
  const data = mooncat(catId)

  const width = CANVAS_SIZE * data.length
  const height = CANVAS_SIZE * data[0].length

  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext("2d", {
    antialias: false,
  }) as CanvasRenderingContext2D

  if (ctx === null) {
    return null
  }

  data.forEach((cells: string[], col: number) => {
    cells.forEach((color: string, row: number) => {
      if (color) {
        ctx.fillStyle = color
        ctx.fillRect(
          Math.floor((col * CANVAS_SIZE) / 2 + width / 4),
          Math.floor((row * CANVAS_SIZE) / 2 + height / 4),
          Math.floor(CANVAS_SIZE / 2),
          Math.floor(CANVAS_SIZE / 2)
        )
      }
    })
  })

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
  const image = imageUrl(catId) ?? ""

  return {
    name: `Wrapped MoonCat #${tokenId}`,
    description: `The (unofficial) wrapped version of MoonCats Rescue. catId: ${catId}.`,
    image,
  }
}

export function isMoonCats(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, MOONCATS_WRAPPED_CONTRACT)
}
