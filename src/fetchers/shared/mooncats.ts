import type {
  Address,
  ContractMethod,
  FetchContext,
  IpfsUrlFn,
  NftMetadata,
} from "../../types"

import {
  addressesEqual,
  fetchImage,
  frameImage,
  ipfsUrlFromString,
} from "../../utils"

const MOONCATS_WRAPPED: ContractMethod = {
  address: "0x7c40c393dc0f283f318791d746d894ddd3693572",
  methodName: "_tokenIDToCatID",
  methodHash: "0xfe294644",
  humanReadableAbi: [
    "function _tokenIDToCatID(uint256 tokenId) view returns (bytes5 catId)",
  ],
}

// See https://www.reddit.com/r/MoonCatRescue/comments/m5d7mx/svg_imagery_of_all_rescued_mooncats/
const MOONCATS_IPFS_CID =
  "bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava"

export async function imageUrl(
  catId: string,
  ipfsUrl: IpfsUrlFn
): Promise<string | null> {
  const dir = catId.slice(4, 6)
  const url = ipfsUrlFromString(
    `ipfs://ipfs/${MOONCATS_IPFS_CID}/${dir}/${catId}.png`,
    ipfsUrl
  )
  const image = await fetchImage(url)

  // Here we increase the resolution of the MoonCats PNG files (4x without
  // antialias) and add a some padding around it. Doing this image manipulation
  // rather than using CSS is needed because useNft() only deals with data and
  // doesn’t have any control over how the images get displayed.
  return frameImage(image, { scale: 4, padding: 0.125 })
}

export async function moonCatsMetadata(
  tokenId: string,
  getCatId: (tokenId: string, method: ContractMethod) => Promise<string>,
  fetchContext: FetchContext
): Promise<NftMetadata> {
  const catId = await getCatId(tokenId, MOONCATS_WRAPPED)

  const image = (await imageUrl(catId, fetchContext.ipfsUrl)) ?? ""
  return {
    description:
      `The (unofficial) wrapped version of MoonCats Rescue. ` +
      `Original cat ID: ${catId}.`,
    image,
    imageType: image ? "image" : "unknown",
    metadataUrl: "",
    name: `Wrapped MoonCat #${tokenId}`,
    owner: "",
    rawData: null,
  }
}

export function isMoonCats(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, MOONCATS_WRAPPED.address)
}
