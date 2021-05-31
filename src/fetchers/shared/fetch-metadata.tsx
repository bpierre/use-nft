import type { FetchContext, NftJsonMetadata } from "../../types"

import {
  fixIncorrectImageField,
  fixNftMetadataMixedInJsonSchema,
  isNftMetadata,
  isNftMetadataMixedInJsonSchema,
  normalizeNftMetadata,
} from "../../utils"

export async function fetchMetadata(
  url: string,
  fetchContext: FetchContext
): Promise<NftJsonMetadata> {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("Error when trying to request " + url)
  }

  let data: unknown

  try {
    data = await res.json()
  } catch (err) {
    // If it can’t be parsed as JSON, it must be an image URL
    data = { name: "", description: "", image: url }
  }

  if (isNftMetadataMixedInJsonSchema(data)) {
    data = fixNftMetadataMixedInJsonSchema(data)
  }

  data = fixIncorrectImageField(data)

  if (!isNftMetadata(data)) {
    throw new Error("Invalid data received")
  }

  return normalizeNftMetadata(
    {
      name: data.name || "",
      image: data.image || "",
      description: data.description || "",
    },
    fetchContext
  )
}
