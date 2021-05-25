import type {
  Address,
  Fetcher,
  FetcherDeclaration,
  FetcherDeclarationEthers,
  FetcherDeclarationEthereum,
  FetcherProp,
  NftMetadata,
} from "./types"
import type { EthersFetcherConfig } from "./fetchers/ethers/types"
import type { EthereumFetcherConfig } from "./fetchers/ethereum/types"

import ethersFetcher from "./fetchers/ethers"
import ethereumFetcher from "./fetchers/ethereum"

const NFT_METADATA_DEFAULT = {
  name: "",
  description: "",
  image: "",
} as NftMetadata

export class FetchWrapper {
  private fetcher: Fetcher<unknown>

  constructor(fetcher: Fetcher<unknown> | FetcherDeclaration) {
    this.fetcher = this.normalizeFetcher(fetcher)
  }

  private normalizeFetcher(fetcher: FetcherProp): Fetcher<unknown> {
    // default fetcher
    if (!fetcher) {
      return {
        config: {},
        fetchNft: () => Promise.resolve(NFT_METADATA_DEFAULT),
      } as Fetcher<Record<string, never>>
    }

    // ethers
    if (this.isFetcherDeclarationEthers(fetcher)) {
      return ethersFetcher(fetcher[1]) as Fetcher<EthersFetcherConfig>
    }

    // ethereum
    if (this.isFetcherDeclarationEthereum(fetcher)) {
      return ethereumFetcher(fetcher[1]) as Fetcher<EthereumFetcherConfig>
    }

    // custom fetcher (or wrong value)
    return fetcher
  }

  private isFetcherDeclarationEthers(
    fetcher: FetcherProp
  ): fetcher is FetcherDeclarationEthers {
    return (
      Array.isArray(fetcher) && fetcher.length == 2 && fetcher[0] === "ethers"
    )
  }

  private isFetcherDeclarationEthereum(
    fetcher: FetcherProp
  ): fetcher is FetcherDeclarationEthereum {
    return (
      Array.isArray(fetcher) && fetcher.length == 2 && fetcher[0] === "ethereum"
    )
  }

  public async fetchNft(
    contractAddress: Address,
    tokenId: string
  ): Promise<NftMetadata> {
    return await this.fetcher.fetchNft(contractAddress, tokenId)
  }
}
