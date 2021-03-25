export type Address = string

export type Loader<T> =
  // loading
  | {
      loading: true
      error: null
      result: null
    }
  // error
  | {
      loading: false
      error: Error
      result: null
    }
  // done
  | {
      loading: false
      error: null
      result: null | T // result can be null − even when done
    }

export type NftMetadata = {
  name: string
  description: string
  image: string
}
