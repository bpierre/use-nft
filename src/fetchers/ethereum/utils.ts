import type { Address } from "../../types"
import type { EthereumProviderEip1193 } from "./types"

// Pre encoded method names to avoid embedding a keccak256 library.
// See https://docs.soliditylang.org/en/v0.5.3/abi-spec.html#function-selector-and-argument-encoding
const URI_METHOD_ERC721 = "0xc87b56dd" // tokenURI(uint256)
const URI_METHOD_ERC1155 = "0x0e89341c" // uri(uint256)
const OWNER_OF_METHOD_ERC721 = "0x6352211e" // ownerOf(uint256)

// Utilities adapted from https://github.com/Zoltu/ethereum-abi-encoder/
export function uint256Hex(value: bigint): string {
  let result = ""
  for (let i = 0; i < 32; ++i) {
    result += (
      "0" + ((value >> BigInt(8 * 32 - i * 8 - 8)) & BigInt(255)).toString(16)
    ).slice(-2)
  }
  return result
}

export function bytesToBigInt(bytes: Uint8Array): bigint {
  let value = BigInt(0)
  for (const byte of bytes) {
    value = (value << BigInt(8)) + BigInt(byte)
  }
  return value
}

export function hexToUint8Array(hex: string): Uint8Array {
  hex = hex.replace(/^0x/, "")
  return new Uint8Array(
    (hex.match(/.{1,2}/g) ?? []).map((byte) => parseInt(byte, 16))
  )
}

export function decodeString(hex: string): string {
  const data = hexToUint8Array(hex)
  const pointer = Number(bytesToBigInt(data.subarray(0, 32)))
  const length = Number(bytesToBigInt(data.subarray(pointer, pointer + 32)))
  const bytes = data.subarray(pointer + 32, pointer + 32 + length)
  return new TextDecoder().decode(bytes)
}

export function decodeAddress(hex: string): string {
  const data = hexToUint8Array(hex)
  const bytes = data.subarray(0, 32)
  const decoded = bytesToBigInt(bytes)
  if (decoded >= BigInt(2) ** BigInt(160))
    throw new Error(
      `Encoded value is bigger than the largest possible address.  Decoded value: 0x${decoded.toString(
        16
      )}.`
    )
  return `0x${decoded.toString(16)}`
}

export function methodUriErc721(tokenId: bigint): string {
  return URI_METHOD_ERC721 + uint256Hex(tokenId)
}

export function methodUriErc1155(id: bigint): string {
  return URI_METHOD_ERC1155 + uint256Hex(id)
}

export function methodOwnerOfErc721(tokenId: bigint): string {
  return OWNER_OF_METHOD_ERC721 + uint256Hex(tokenId)
}

export function ethCall(
  ethereum: EthereumProviderEip1193,
  to: Address,
  data: string
): Promise<string> {
  return ethereum.request({
    method: "eth_call",
    params: [{ data, to }, "latest"],
  }) as Promise<string>
}
