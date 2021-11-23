import type {
  Address,
  FetchContext,
  IpfsUrlFn,
  NftJsonMetadata,
  NftMetadata,
} from "./types"

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

const RARIBLE_MATCH_RE =
  /^https:\/\/rarible\.com\/token\/(0x[a-fA-F0-9]{40}):([0-9]+)/

export function isAddress(value: string): value is Address {
  return /^0x[a-fA-F0-9]{40}$/.test(value)
}

export function identity<T = unknown>(arg: T): T {
  return arg
}

export function parseNftUrl(url: string): [string, string] | null {
  const raribleMatch = RARIBLE_MATCH_RE.exec(url)
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

// Scale the image and add some extra padding. Returns the image as base64.
// The padding and scale are expressed as proportions of the image size.
export function frameImage(
  image: HTMLImageElement,
  { scale = 1, padding = 0 } = {}
): string | null {
  const width = image.naturalWidth * scale
  const height = image.naturalHeight * scale
  const _padding = Math.max(width * padding, height * padding)

  const canvas = document.createElement("canvas")
  canvas.width = width + _padding * 2
  canvas.height = height + _padding * 2

  const ctx = canvas.getContext("2d")
  if (ctx === null) {
    return null
  }

  ctx.imageSmoothingEnabled = false
  ctx.drawImage(image, _padding, _padding, width, height)

  return canvas.toDataURL()
}

export function ipfsUrlDefault(cid: string, path = ""): string {
  return `https://ipfs.io/ipfs/${cid}${path}`
}

const IPFS_PROTOCOL_RE = /^ipfs:\/\/(?:ipfs\/)?([^/]+)(\/.+)?$/
const IPFS_HASH_RE = /^Qm[1-9A-HJ-NP-Za-km-z]{44}$/

export function ipfsUrlFromString(
  ipfsString: string,
  ipfsUrl: IpfsUrlFn
): string {
  // ipfs:// URI
  const ipfsProtocolMatch = IPFS_PROTOCOL_RE.exec(ipfsString)
  if (ipfsProtocolMatch) {
    const [, cid, path = ""] = ipfsProtocolMatch
    return ipfsUrl(cid, path)
  }

  // standalone cid, probably
  if (IPFS_HASH_RE.test(ipfsString)) {
    return ipfsUrl(ipfsString)
  }

  // maybe URL
  return ipfsString
}

export function normalizeOpenSeaUrl(url: string, tokenId: string): string {
  // url can be anything so we need to try / catch to pass it to new URL()
  try {
    const _url = new URL(url)

    // 0x%7Bid%7D" = 0x{id} (url encoded)
    if (
      (_url.host !== "api.opensea.io" &&
        _url.host !== "testnets-api.opensea.io") ||
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

export function normalizeTokenUrl(
  url: string,
  tokenId: string,
  fetchContext: FetchContext
): string {
  url = normalizeOpenSeaUrl(url, tokenId)
  url = normalizeNiftyGatewayUrl(url)
  url = ipfsUrlFromString(url, fetchContext.ipfsUrl)

  if (url.startsWith("http")) {
    url = fetchContext.jsonProxy(url)
  }

  return url
}

export function normalizeImageUrl(
  url: string,
  fetchContext: FetchContext
): string {
  return ipfsUrlFromString(url, fetchContext.ipfsUrl)
}

export function normalizeNftMetadata(
  data: NftJsonMetadata,
  fetchContext: FetchContext
): NftJsonMetadata {
  return {
    ...data,
    image: normalizeImageUrl(data.image, fetchContext),
  }
}

export function fixIncorrectImageField(
  data: Record<string, unknown>
): Record<string, unknown> {
  if (!data || typeof data !== "object") {
    return data
  }

  const _data = data as {
    image: string
    imageUrl: string
  }

  // makersplace.com is using `imageUrl` rather than `image`
  if (
    typeof _data?.image === "undefined" &&
    typeof _data?.imageUrl === "string"
  ) {
    return { ..._data, image: _data?.imageUrl }
  }

  return data
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
): NftJsonMetadata {
  return {
    name: data.properties?.name?.description || "",
    description: data.properties?.description?.description || "",
    image: data.properties?.image?.description || "",
    rawData: { ...data },
  }
}

export function isNftMetadata(data: unknown): data is NftMetadata {
  if (!data || typeof data !== "object") {
    return false
  }
  const _data = data as NftMetadata

  // We don’t test for the exact type here, because some NFT minting services
  // set some of the fields as null.
  // We also only test for the presence of either `name` or `image`, as some
  // NFT formats don’t declare them all (e.g. BAYC only declares `image`).
  return "name" in _data || "image" in _data
}

export function addressesEqual(addr1: Address, addr2: Address): boolean {
  return addr1?.toLowerCase() === addr2?.toLowerCase()
}

// Promise.any() implementation from https://github.com/m0ppers/promise-any
export function promiseAny<T>(promises: Promise<T>[]): Promise<T> {
  return reversePromise(
    Promise.all([...promises].map(reversePromise))
  ) as Promise<T>
}
export function reversePromise(promise: Promise<unknown>): Promise<unknown> {
  return new Promise((resolve, reject) => {
    Promise.resolve(promise).then(reject, resolve)
  })
}

// To replace with AggregateError when useNft() will target ES2021 environments
export class MultipleErrors extends Error {
  errors: Error[]
  constructor(message: string, errors: Error[]) {
    super(message)
    this.name = "MultipleErrors"
    this.errors = errors
  }
}

const IMAGE_EXT_RE = /\.(?:png|svg|jpg|jepg|gif|webp|jxl|avif)$/
const VIDEO_EXT_RE = /\.(?:mp4|mov|webm|ogv)$/

// Guess a file type from the extension used in a URL
export function urlExtensionType(url: string): NftMetadata["imageType"] {
  if (IMAGE_EXT_RE.test(url)) return "image"
  if (VIDEO_EXT_RE.test(url)) return "video"
  return "unknown"
}
