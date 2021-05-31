import { EthereumProviderEip1193 } from "./types"

export declare global {
  interface Window {
    ethereum?: EthereumProviderEip1193
  }
}
