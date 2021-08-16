import type { Address, NftMetadata } from "../../types"

import { DECENTRALAND_PARCEL } from "../../known-contracts"
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
      parcel {
        x
        y
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

export async function decentralandParcelMetadata(
  tokenId: string
): Promise<NftMetadata> {
  const response = await fetch(ENDPOINT, {
    body: body(DECENTRALAND_PARCEL, tokenId),
    method: "POST",
  })

  const { data } = (await response.json()) as {
    data: {
      nfts: [
        {
          name: string
          image: string
          owner: { address: Address }
          parcel: {
            x: number
            y: number
            data: {
              description: string
            }
          }
        }
      ]
    }
  }

  const nft = data?.nfts?.[0]
  const parcel = nft?.parcel
  const image = nft?.image ?? ""

  return {
    description: parcel?.data?.description ?? "-",
    image,
    imageType: image ? "image" : "unknown",
    metadataUrl: "",
    name: nft?.name ?? `Parcel ${parcel?.x},${parcel?.y}`,
    owner: nft?.owner?.address ?? "",
    rawData: data,
  }
}

export function isDecentralandParcel(contractAddress: Address): boolean {
  return addressesEqual(contractAddress, DECENTRALAND_PARCEL)
}
