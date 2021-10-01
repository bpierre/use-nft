import type {
  Address,
  FetchContext,
  ImageProxyFn,
  NftMetadata,
} from "../../types"
import type {
  EthersFetcher,
  EthersFetcherConfig,
  EthersFetcherConfigEthersLoaded,
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

const ETHERS_NOT_FOUND =
  "Ethers couldn’t be imported. " +
  "Please add the ethers module to your project dependencies, " +
  "or inject it in the Ethers fetcher options."

async function loadEthers(
  config: EthersFetcherConfig
): Promise<EthersFetcherConfigEthersLoaded> {
  if (config.ethers?.Contract) {
    return config as EthersFetcherConfigEthersLoaded
  }

  try {
    const ethers = await import("@ethersproject/contracts")
    if (!ethers?.Contract) {
      throw new Error()
    }
    return { ...config, ethers }
  } catch (err) {
    throw new Error(ETHERS_NOT_FOUND)
  }
}

async function fetchNftMetadata(
  contractAddress: Address,
  tokenId: string,
  config: EthersFetcherConfig,
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

  const configWithEthersLoaded = await loadEthers(config)

  if (isCryptoPunks(contractAddress)) {
    return cryptoPunksMetadata(
      tokenId,
      cryptoPunksImage(configWithEthersLoaded)
    )
  }

  if (isMoonCats(contractAddress)) {
    return moonCatsMetadata(
      tokenId,
      moonCatsCatId(configWithEthersLoaded),
      fetchContext
    )
  }

  return fetchStandardNftContractData(
    contractAddress,
    tokenId,
    configWithEthersLoaded,
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

export default function ethersFetcher(
  config: EthersFetcherConfig
): EthersFetcher {
  return {
    config,
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
        config,
        fetchContext
      )
      return addProxyImage(metadata, fetchContext.imageProxy)
    },
  }
}
