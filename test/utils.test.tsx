import {
  fetchImage,
  identity,
  ipfsUrlDefault,
  ipfsUrlFromString,
  isAddress,
  normalizeImageUrl,
  normalizeNftMetadata,
  normalizeNiftyGatewayUrl,
  normalizeOpenSeaUrl,
  normalizeTokenUrl,
  parseNftUrl,
  urlExtensionType,
} from "../src/utils"

const IPFS_HASH_1 =
  "bafybeidi7zwejfcqc7whjlhzg7dj7bhhclgx4gbvllasl5uvkqbybkowqu"
const IPFS_HASH_2 = "Qma3dJMpFjcXQU9Ziwqa73ZmCdBajJzgbS26uUGwXP8NaV"

const FETCH_CONTEXT = {
  imageProxy: identity,
  ipfsUrl: ipfsUrlDefault,
  jsonProxy: identity,
}

describe("ipfsUrlFromString()", () => {
  it("normalizes IPFS protocol URLs", () => {
    expect(
      ipfsUrlFromString(`ipfs://ipfs/${IPFS_HASH_1}`, ipfsUrlDefault)
    ).toBe(`https://ipfs.io/ipfs/${IPFS_HASH_1}`)
  })
  it("normalizes IPFS hashes", () => {
    expect(ipfsUrlFromString(IPFS_HASH_2, ipfsUrlDefault)).toBe(
      `https://ipfs.io/ipfs/${IPFS_HASH_2}`
    )
  })
  it("lets unrecognized URLs pass", () => {
    expect(ipfsUrlFromString("http://example.com/", ipfsUrlDefault)).toBe(
      "http://example.com/"
    )
  })
  it("uses the IPFS URL builder when passed", () => {
    expect(
      ipfsUrlFromString(
        `ipfs://ipfs/${IPFS_HASH_1}/a/b/c`,
        (cid, path) => `_${cid}_${path}_`
      )
    ).toBe(`_${IPFS_HASH_1}_/a/b/c_`)
  })
})

describe("isAddress()", () => {
  it("validates checksum addresses", () => {
    expect(isAddress("0x3e346d19D73Cb3f07143c8d528D7Dd703B84ddA6")).toBe(true)
  })
  it("validates non-checksum addresses", () => {
    expect(isAddress("0x3e346d19d73cb3f07143c8d528d7dd703b84dda6")).toBe(true)
  })
  it("invalidates incorrect addresses", () => {
    expect(isAddress("0x3e346d19D73Cb3f07143c8d528D7Dd703B84ddA")).toBe(false)
    expect(isAddress("3e346d19D73Cb3f07143c8d528D7Dd703B84ddA6")).toBe(false)
    expect(isAddress("")).toBe(false)
  })
})

describe("parseNftUrl()", () => {
  it("parses Rarible URLs", () => {
    expect(
      parseNftUrl(
        "https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:90473"
      )
    ).toStrictEqual(["0xd07dc4262bcdbf85190c01c996b4c06a461d2430", "90473"])
  })
  it("returns null when it doesn’t recognize the URL", () => {
    expect(parseNftUrl("https://example.com/")).toBe(null)
  })
})

describe("fetchImage()", () => {
  it("fetches an existing image", () => {
    expect(
      fetchImage(
        "https://ipfs.io/ipfs/bafybeidk4zunuq56w2pf2sncexohlyqae62dzplljkbwswa7jwywh2dava/07/0x000770888d.png"
      )
    ).resolves.toBeInstanceOf(Image)
  })
  it("fails on a non existing image", () => {
    expect(fetchImage("")).rejects.toThrow()
  })
})

describe("normalizeOpenSeaUrl()", () => {
  it("normalizes OpenSea API URLs", () => {
    expect(
      normalizeOpenSeaUrl(
        "https://api.opensea.io/api/v1/metadata/0x495f947276749Ce646f68AC8c248420045cb7b5e/0x{id}",
        "1"
      )
    ).toBe(
      "https://api.opensea.io/api/v1/metadata/0x495f947276749Ce646f68AC8c248420045cb7b5e/1?format=json"
    )
  })
  it("returns other URLs", () => {
    expect(normalizeOpenSeaUrl("https://example.com/", "1")).toBe(
      "https://example.com/"
    )
  })
  it("returns malformed URLs", () => {
    expect(normalizeOpenSeaUrl("a", "1")).toBe("a")
  })
})

describe("normalizeNiftyGatewayUrl()", () => {
  it("normalizes Nifty Gateway API URLs", () => {
    expect(
      normalizeNiftyGatewayUrl("https://api.niftygateway.com/abcdef")
    ).toBe("https://api.niftygateway.com/abcdef/")
  })
  it("returns other URLs", () => {
    expect(normalizeNiftyGatewayUrl("https://example.com/abcdef")).toBe(
      "https://example.com/abcdef"
    )
  })
  it("returns malformed URLs", () => {
    expect(normalizeNiftyGatewayUrl("a")).toBe("a")
  })
})

describe("normalizeTokenUrl()", () => {
  it("normalizes Nifty Gateway API URLs", () => {
    expect(
      normalizeTokenUrl(
        "https://api.niftygateway.com/abcdef",
        "1",
        FETCH_CONTEXT
      )
    ).toBe("https://api.niftygateway.com/abcdef/")
  })
  it("normalizes OpenSea API URLs", () => {
    expect(
      normalizeTokenUrl(
        "https://api.opensea.io/api/v1/metadata/0x495f947276749Ce646f68AC8c248420045cb7b5e/0x{id}",
        "1",
        FETCH_CONTEXT
      )
    ).toBe(
      "https://api.opensea.io/api/v1/metadata/0x495f947276749Ce646f68AC8c248420045cb7b5e/1?format=json"
    )
  })
  it("normalizes IPFS URLs", () => {
    expect(
      normalizeTokenUrl(`ipfs://ipfs/${IPFS_HASH_1}`, "1", FETCH_CONTEXT)
    ).toBe(`https://ipfs.io/ipfs/${IPFS_HASH_1}`)
  })
  it("returns other URLs", () => {
    expect(
      normalizeTokenUrl("https://example.com/abcdef", "1", FETCH_CONTEXT)
    ).toBe("https://example.com/abcdef")
  })
  it("returns malformed URLs", () => {
    expect(normalizeTokenUrl("a", "1", FETCH_CONTEXT)).toBe("a")
  })
})

describe("normalizeImageUrl()", () => {
  it("normalizes IPFS URLs", () => {
    expect(normalizeImageUrl(`ipfs://ipfs/${IPFS_HASH_1}`, FETCH_CONTEXT)).toBe(
      `https://ipfs.io/ipfs/${IPFS_HASH_1}`
    )
  })
})

describe("normalizeNftMetadata()", () => {
  it("normalizes the NFT metadata", () => {
    expect(
      normalizeNftMetadata(
        {
          name: "",
          description: "",
          image: `ipfs://ipfs/${IPFS_HASH_1}`,
          rawData: null,
        },
        FETCH_CONTEXT
      )
    ).toStrictEqual({
      name: "",
      description: "",
      image: `https://ipfs.io/ipfs/${IPFS_HASH_1}`,
      rawData: null,
    })
  })
})

describe("urlExtensionType()", () => {
  it("guesses the asset type from the URL", () => {
    expect(urlExtensionType("something.jpg")).toBe("image")
    expect(urlExtensionType("something.mov")).toBe("video")
    expect(urlExtensionType("something.xyz")).toBe("unknown")
  })
})
