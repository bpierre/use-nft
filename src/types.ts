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
  name: string
  description: string
  image: string
}
