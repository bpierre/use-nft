import "../../../jest-fetch-mock"
import { identity, ipfsUrlDefault, ipfsUrlFromString } from "../../../src/utils"
import { fetchMetadata } from "../../../src/fetchers/shared/fetch-metadata"

const FETCH_CONTEXT = {
  imageProxy: identity,
  ipfsUrl: ipfsUrlDefault,
  jsonProxy: identity,
}

// https://ipfs.io/ipfs/QmTFMJ17s35Y2fHSomdTh29m8CdBPK8Cv8trXnAWTVJ1hc
const METADATA_COMPLETE = {
  name: "The War on Crypto",
  description: "A Series by Award Winning Artist Rebecca Hendin",
  external_link: "http://pac.xyz/",
  image: "ipfs://QmQ7UHJGMdUVgDESYTMaeDfDu1pPyoqyaLfrAqqbfRceLX",
  attributes: [
    {
      trait_type: "Action NFT Type",
      value: "Common",
    },
  ],
}

// https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/6262
const METADATA_INCOMPLETE = {
  image: "ipfs://QmbnUuxBMEdpKsnfaR26JNxXSYWREfVvLhDUR2fJjGmpP4",
  attributes: [
    { trait_type: "Eyes", value: "Zombie" },
    { trait_type: "Background", value: "Aquamarine" },
    { trait_type: "Fur", value: "Blue" },
    { trait_type: "Hat", value: "Sushi Chef Headband" },
    { trait_type: "Mouth", value: "Bored Cigarette" },
    { trait_type: "Clothes", value: "Caveman Pelt" },
  ],
}

function dataUrl(data: unknown) {
  return "data:text/json," + encodeURIComponent(JSON.stringify(data))
}

// Below are two Boring Ape NFTs that error before expect() test. Note they
// both only have image and attributes keys in the metadata
describe("fetchMetadata()", () => {
  it("works with complete metadata", async () => {
    let data = await fetchMetadata(dataUrl(METADATA_COMPLETE), FETCH_CONTEXT)
    expect(data).toStrictEqual({
      name: METADATA_COMPLETE.name,
      description: METADATA_COMPLETE.description,
      image: ipfsUrlFromString(METADATA_COMPLETE.image, ipfsUrlDefault),
      rawData: METADATA_COMPLETE,
    })
  })

  it("works with incomplete metadata", async () => {
    const data1 = await fetchMetadata(
      dataUrl(METADATA_INCOMPLETE),
      FETCH_CONTEXT
    )
    expect(data1).toStrictEqual({
      name: "",
      description: "",
      image: ipfsUrlFromString(METADATA_INCOMPLETE.image, ipfsUrlDefault),
      rawData: METADATA_INCOMPLETE,
    })
  })
})
