import { normalizeIpfsUrl } from "../src/utils"

const IPFS_HASH_1 =
  "bafybeidi7zwejfcqc7whjlhzg7dj7bhhclgx4gbvllasl5uvkqbybkowqu"
const IPFS_HASH_2 = "Qma3dJMpFjcXQU9Ziwqa73ZmCdBajJzgbS26uUGwXP8NaV"

describe("normalizeIpfsUrl", () => {
  it("normalizes IPFS protocol URLs", () => {
    expect(normalizeIpfsUrl(`ipfs://ipfs/${IPFS_HASH_1}`)).toBe(
      `https://ipfs.io/ipfs/${IPFS_HASH_1}`
    )
  })
  it("normalizes IPFS hashes", () => {
    expect(normalizeIpfsUrl(IPFS_HASH_2)).toBe(
      `https://ipfs.io/ipfs/${IPFS_HASH_2}`
    )
  })
  it("lets unrecognized URLs pass", () => {
    expect(normalizeIpfsUrl("http://example.com/")).toBe("http://example.com/")
  })
  it("uses the IPFS URL builder when passed", () => {
    expect(
      normalizeIpfsUrl(
        `ipfs://ipfs/${IPFS_HASH_1}/a/b/c`,
        (cid, path) => `_${cid}_${path}_`
      )
    ).toBe(`_${IPFS_HASH_1}_/a/b/c_`)
  })
})
