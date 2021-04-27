export type {
  Address,
  ContractMethod,
  Fetcher,
  FetcherDeclaration,
  FetcherDeclarationEthereum,
  FetcherDeclarationEthers,
  FetcherProp,
  NftMetadata,
  NftResult,
  NftResultDone,
  NftResultError,
  NftResultLoading,
} from "./types"
export type { EthersFetcherConfig } from "./fetchers/ethers/types"
export type { EthereumFetcherConfig } from "./fetchers/ethereum/types"

export { NftProvider, useNft } from "./core"
export { FetchWrapper } from "./fetchWrapper"
export { default as ethereumFetcher } from "./fetchers/ethereum"
export { default as ethersFetcher } from "./fetchers/ethers"
export { parseNftUrl } from "./utils"
