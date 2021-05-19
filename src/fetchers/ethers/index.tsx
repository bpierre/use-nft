import type { Address, NftMetadata } from "../../types"
import type { EthersFetcher, EthersFetcherConfig } from "./types"

import { isAddress } from "../../utils"
import { fetchMetadata } from "../shared/fetch-metadata"
import { cryptoPunksMetadata, isCryptoPunks } from "../shared/cryptopunks"
import { cryptoKittiesMetadata, isCryptoKitties } from "../shared/cryptokitties"
import {
  isDecentralandEstate,
  decentralandEstateMetadata,
} from "../shared/decentraland-estate"
import {
  isDecentralandParcel,
  decentralandParcelMetadata,
} from "../shared/decentraland-parcel"
import { moonCatsMetadata, isMoonCats } from "../shared/mooncats"
import { moonCatsCatId } from "./mooncats"
import { fetchStandardNftContractData } from "./standard-nft"

export default function ethersFetcher(
  config: EthersFetcherConfig
): EthersFetcher {
  return {
    config,
    async fetchNft(
      contractAddress: Address,
      tokenId: string
    ): Promise<NftMetadata> {
      if (!isAddress(contractAddress)) {
        throw new Error(`Invalid contract address: ${contractAddress}`)
      }

      if (isDecentralandParcel(contractAddress)) {
        return decentralandParcelMetadata(tokenId)
      }

      if (isDecentralandEstate(contractAddress)) {
        return decentralandEstateMetadata(tokenId)
      }

      if (isCryptoPunks(contractAddress)) {
        return cryptoPunksMetadata(tokenId)
      }

      if (isCryptoKitties(contractAddress)) {
        return cryptoKittiesMetadata(tokenId)
      }

      if (isMoonCats(contractAddress)) {
        return moonCatsMetadata(tokenId, moonCatsCatId(config))
      }

      const [metadataUrl, owner] = await fetchStandardNftContractData(
        contractAddress,
        tokenId,
        config
      )

      const metadata = await fetchMetadata(metadataUrl)

      return { ...metadata, owner }
    },
  }
}
