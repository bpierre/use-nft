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

  let rawData

  try {
    rawData = (await res.json()) as Record<string, unknown>
  } catch (err) {
    // If it can’t be parsed as JSON, it must be an image URL
    rawData = { name: "", description: "", image: url }
  }

  let data = { ...rawData }

  if (isNftMetadataMixedInJsonSchema(data)) {
    data = fixNftMetadataMixedInJsonSchema(data)
  }

  data = fixIncorrectImageField(data)

  if (!isNftMetadata(data)) {
    throw new Error("Invalid data received")
  }

  return normalizeNftMetadata(
    {
      description: data.description || "",
      image: data.image || "",
      name: data.name || "",
      rawData,
    },
    fetchContext
  )
}
