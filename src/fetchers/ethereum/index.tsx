import type {
  Address,
  FetchContext,
  ImageProxyFn,
  NftMetadata,
} from "../../types"
import type {
  EthereumFetcher,
  EthereumFetcherConfig,
  EthereumFetcherConfigDeclaration,
} from "./types"

import { isAddress } from "../../utils"
import { cryptoPunksMetadata, isCryptoPunks } from "../shared/cryptopunks"
import { cryptoKittiesMetadata, isCryptoKitties } from "../shared/cryptokitties"
import {
  decentralandEstateMetadata,
  isDecentralandEstate,
} from "../shared/decentraland-estate"
import {
  decentralandParcelMetadata,
  isDecentralandParcel,
} from "../shared/decentraland-parcel"
import { isMoonCats, moonCatsMetadata } from "../shared/mooncats"
import { cryptoPunksImage } from "./cryptopunks"
import { moonCatsCatId } from "./mooncats"
import { fetchStandardNftContractData } from "./standard-nft"

async function fetchNftMetadata(
  contractAddress: Address,
  tokenId: string,
  config: EthereumFetcherConfig,
  fetchContext: FetchContext
): Promise<NftMetadata> {
  if (isDecentralandParcel(contractAddress)) {
    return decentralandParcelMetadata(tokenId)
  }

  if (isDecentralandEstate(contractAddress)) {
    return decentralandEstateMetadata(tokenId)
  }

  if (isCryptoKitties(contractAddress)) {
    return cryptoKittiesMetadata(tokenId, fetchContext)
  }

  if (isCryptoPunks(contractAddress)) {
    return cryptoPunksMetadata(tokenId, cryptoPunksImage(config))
  }

  if (isMoonCats(contractAddress)) {
    return moonCatsMetadata(tokenId, moonCatsCatId(config), fetchContext)
  }

  return fetchStandardNftContractData(
    contractAddress,
    tokenId,
    config,
    fetchContext
  )
}

function addProxyImage(
  metadata: NftMetadata,
  imageProxy: ImageProxyFn
): NftMetadata {
  return metadata.image.startsWith("http")
    ? { ...metadata, image: imageProxy(metadata.image, metadata) }
    : metadata
}

function normalizeConfig(
  config: EthereumFetcherConfigDeclaration
): EthereumFetcherConfig {
  if (!config.ethereum) {
    if (window.ethereum) {
      config.ethereum = window.ethereum
    } else {
      throw new Error("Missing ethereum provider.")
    }
  }
  return config as EthereumFetcherConfig
}

export default function ethereumFetcher(
  config: EthereumFetcherConfigDeclaration
): EthereumFetcher {
  const _config = normalizeConfig(config)
  return {
    config: _config,
    async fetchNft(
      contractAddress: Address,
      tokenId: string,
      fetchContext: FetchContext
    ): Promise<NftMetadata> {
      if (!isAddress(contractAddress)) {
        throw new Error(`Invalid contract address: ${contractAddress}`)
      }
      const metadata = await fetchNftMetadata(
        contractAddress,
        tokenId,
        _config,
        fetchContext
      )
      return addProxyImage(metadata, fetchContext.imageProxy)
    },
  }
}
