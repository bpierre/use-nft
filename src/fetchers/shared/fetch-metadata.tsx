import type { NftMetadata } from "../../types"

import {
  fixNftMetadataMixedInJsonSchema,
  isNftMetadata,
  isNftMetadataMixedInJsonSchema,
  normalizeNftMetadata,
} from "../../utils"

export async function fetchMetadata(url: string): Promise<NftMetadata> {
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

  if (!isNftMetadata(data)) {
    throw new Error("Invalid data received")
  }

  return normalizeNftMetadata({
    name: data.name || "",
    image: data.image || "",
    description: data.description || "",
  })
}
