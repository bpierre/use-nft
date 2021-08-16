import type { EthersFetcherConfig } from "./fetchers/ethers/types"
import type { EthereumFetcherConfigDeclaration } from "./fetchers/ethereum/types"

export type Address = string

export type NftResultLoading = {
  status: "loading"
  loading: true
  error: undefined
  nft: undefined
  reload: () => Promise<boolean>
}

export type NftResultError = {
  status: "error"
  loading: false
  error: Error
  nft: undefined
  reload: () => Promise<boolean>
}

export type NftResultDone = {
  status: "done"
  loading: false
  error: undefined
  nft: NftMetadata
  reload: () => Promise<boolean>
}

export type NftResult = NftResultLoading | NftResultError | NftResultDone

export type NftMetadata = {
  description: string
  image: string
  imageType: "image" | "video" | "unknown"
  metadataUrl: string
  name: string
  owner: Address
  rawData: Record<string, unknown> | null
}

export type NftJsonMetadata = {
  description: string
  image: string
  name: string
  rawData: Record<string, unknown> | null
}

export type ContractMethod = {
  address: string
  methodName: string
  methodHash: string
  humanReadableAbi: [string]
}

export type Fetcher<Config> = {
  config: Config
  fetchNft: (
    contractAddress: Address,
    tokenId: string,
    fetchContext: FetchContext
  ) => Promise<NftMetadata>
}

export type FetcherDeclarationEthers = ["ethers", EthersFetcherConfig]
export type FetcherDeclarationEthereum = [
  "ethereum",
  EthereumFetcherConfigDeclaration
]
export type FetcherDeclaration =
  | FetcherDeclarationEthers
  | FetcherDeclarationEthereum

export type FetcherProp = Fetcher<unknown> | FetcherDeclaration

export type ImageProxyFn = (url: string, metadata: NftMetadata) => string
export type JsonProxyFn = (url: string) => string
export type IpfsUrlFn = (cid: string, path?: string) => string

export type FetchContext = {
  imageProxy: ImageProxyFn
  ipfsUrl: IpfsUrlFn
  jsonProxy: JsonProxyFn
}
