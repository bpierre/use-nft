import type { Address, NftMetadata } from "./types"

// Some NFT minting services misinterpreted the JSON schema from the EIP as
// literal JSON, e.g. portion.io:
// https://ipfs.io/ipfs/QmNt5T9HSXKLXZ3kmciU4Tm6q9R8JEm5ifJkPoxapjyRUR
type NftMetadataMixedInJsonSchema = {
  title: string
  type: "object"
  properties: {
    name: { type: "string"; description: string }
    image: { type: "string"; description: string }
    description: { type: "string"; description: string }
  }
}

type IpfsUrlBuilder = (cid: string, path?: string) => string

const RARIBLE_MATCH_RE = /^https:\/\/rarible\.com\/token\/(0x[a-fA-F0-9]{40}):([0-9]+)/

export function isAddress(value: string): value is Address {
  return /^0x[a-fA-F0-9]{40}$/.test(value)
}

export function parseNftUrl(url: string): [string, string] | null {
  const raribleMatch = url.match(RARIBLE_MATCH_RE)
  if (raribleMatch) {
    return [raribleMatch[1], raribleMatch[2]]
  }
  return null
}

export function fetchImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = src
    image.crossOrigin = ""
    image.onload = () => resolve(image)
    image.onerror = (error) => reject(error)
  })
}

function ipfsUrlDefault(cid: string, path = ""): string {
  return `https://ipfs.io/ipfs/${cid}${path}`
}

export function ipfsUrl(
  url: string,
  ipfsUrl: IpfsUrlBuilder = ipfsUrlDefault
): string {
  const ipfsProtocolMatch = url.match(/^ipfs:\/\/ipfs\/([^\/]+)(\/.+)?$/)
  if (ipfsProtocolMatch) {
    const [, cid, path = ""] = ipfsProtocolMatch
    return ipfsUrl(cid, path)
  }

  // not perfect, but should be enough
  if (/^Qm[1-9A-HJ-NP-Za-km-z]{44}$/.test(url)) {
    return ipfsUrl(url)
  }

  return url
}

export function normalizeOpenSeaUrl(url: string, tokenId: string): string {
  // url can be anything so we need to try / catch to pass it to new URL()
  try {
    const _url = new URL(url)

    // 0x%7Bid%7D" = 0x{id} (url encoded)
    if (
      _url.host !== "api.opensea.io" ||
      !_url.pathname.includes("0x%7Bid%7D")
    ) {
      return url
    }

    _url.pathname = _url.pathname.replace(/0x%7Bid%7D/g, tokenId)
    _url.searchParams.set("format", "json")

    return String(_url)
  } catch (err) {
    return url
  }
}

export function normalizeNiftyGatewayUrl(url: string): string {
  try {
    const _url = new URL(url)

    if (_url.host !== "api.niftygateway.com") {
      return url
    }

    // Without final slash, the Nifty Gateway API server
    // doesn’t set the CORS headers properly.
    _url.pathname = _url.pathname + "/"
    return String(_url)
  } catch (err) {
    return url
  }
}

export function normalizeTokenUrl(url: string, tokenId: string): string {
  url = normalizeOpenSeaUrl(url, tokenId)
  url = normalizeNiftyGatewayUrl(url)
  url = ipfsUrl(url)
  return url
}

export function normalizeImageUrl(url: string): string {
  return ipfsUrl(url)
}

export function normalizeNftMetadata(data: NftMetadata): NftMetadata {
  return {
    ...data,
    image: normalizeImageUrl(data.image),
  }
}

// See NftMetadataMixedInJsonSchema for why this is needed.
export function isNftMetadataMixedInJsonSchema(
  data: unknown
): data is NftMetadataMixedInJsonSchema {
  if (!data || typeof data !== "object") {
    return false
  }
  const _data = data as NftMetadataMixedInJsonSchema
  return (
    _data.title === "Asset Metadata" &&
    _data.type === "object" &&
    typeof _data.properties?.name?.description === "string" &&
    typeof _data.properties?.image?.description === "string" &&
    typeof _data.properties?.description?.description === "string" &&
    _data.properties?.name?.type === "string" &&
    _data.properties?.image?.type === "string" &&
    _data.properties?.description?.type === "string"
  )
}

export function fixNftMetadataMixedInJsonSchema(
  data: NftMetadataMixedInJsonSchema
): NftMetadata {
  return {
    name: data?.properties?.name?.description || "",
    description: data?.properties?.description?.description || "",
    image: data?.properties?.image?.description || "",
  }
}

export function isNftMetadata(data: unknown): data is NftMetadata {
  if (!data || typeof data !== "object") {
    return false
  }
  const _data = data as NftMetadata

  // We don’t test for the exact type here, because some
  // NFT minting services set some of the fields as null.
  return "name" in _data && "image" in _data && "description" in _data
}

export function addressesEqual(addr1: Address, addr2: Address) {
  return addr1?.toLowerCase() === addr2?.toLowerCase()
}
