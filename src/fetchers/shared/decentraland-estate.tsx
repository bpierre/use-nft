import type { Address, NftMetadata } from "../../types"

import { DECENTRALAND_ESTATE } from "../../known-contracts"
import { addressesEqual } from "../../utils"

const ENDPOINT =
  "https://api.thegraph.com/subgraphs/name/decentraland/marketplace"

const QUERY = `
  query NFTByTokenId($contractAddress: String, $tokenId: String) {
    nfts(
      where: { contractAddress: $contractAddress, tokenId: $tokenId }
      first: 1
    ) {
      name
      image
      owner {
        address
      }
      estate {
        size
        data {
          description
        }
      }
    }
  }
`

function body(contractAddress: string, tokenId: string) {
  return JSON.stringify({
    operationName: "NFTByTokenId",
    variables: { contractAddress, tokenId },
    query: QUERY,
  })
}

export async function decentralandEstateMetadata(
  tokenId: string
): Promise<NftMetadata> {
  const response = await fetch(ENDPOINT, {
    body: body(DECENTRALAND_ESTATE, tokenId),
    method: "POST",
  })

  const { data } = (await response.json()) as {
    data: {
      nfts: [
        {
          name: string
          image: string
          owner: { address: Address }
          estate: {
            size: number
            data: { description: string }
          }
        }
      ]
    }
  }

  const nft = data?.nfts?.[0]
  const image = nft?.image ?? ""

  return {
    description: nft?.estate?.data?.description ?? "−",
    image,
    imageType: image ? "image" : "unknown",
    metadataUrl: "",
    name: nft?.name ?? "Unknown",
    owner: nft?.owner?.address ?? "",
    rawData: data,
  }
}

export function isDecentralandEstate(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, DECENTRALAND_ESTATE)
}
