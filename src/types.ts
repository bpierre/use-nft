import type { EthersFetcherConfig } from "./fetchers/ethers/types"
import type { EthereumFetcherConfig } from "./fetchers/ethereum/types"

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
  name: string
  owner: Address
}

export type NftJsonMetadata = {
  description: string
  image: string
  name: string
}

export type ContractMethod = {
  address: string
  methodName: string
  methodHash: string
  humanReadableAbi: [string]
}

export type Fetcher<Config> = {
  config: Config
  fetchNft: (contractAddress: Address, tokenId: string) => Promise<NftMetadata>
}

export type FetcherDeclarationEthers = [
  name: "ethers",
  config: EthersFetcherConfig
]
export type FetcherDeclarationEthereum = [
  name: "ethereum",
  config: EthereumFetcherConfig
]
export type FetcherDeclaration =
  | FetcherDeclarationEthers
  | FetcherDeclarationEthereum

export type FetcherProp =
  | Fetcher<unknown>
  | FetcherDeclaration
  | null
  | undefined
