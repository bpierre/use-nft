import { useState, useEffect } from "react"
import detectEthereumProvider from "@metamask/detect-provider"

type EthereumProviderEip1193 = {
  on: (event: string, callback: () => void) => void
  isConnected: () => boolean
  request: (args: {
    method: string
    params?: unknown[] | object
  }) => Promise<unknown>
}

export default function useEthereum(): EthereumProviderEip1193 | null {
  const [ethereum, setEthereum] = useState<EthereumProviderEip1193 | null>(null)

  useEffect(() => {
    let cancelled = false

    const init = async () => {
      const provider = (await detectEthereumProvider()) as EthereumProviderEip1193

      if (cancelled) {
        return
      }

      if (provider.isConnected()) {
        setEthereum(provider)
      } else {
        provider.on("connect", () => {
          setEthereum(provider)
        })
      }
    }
    init()

    return () => {
      cancelled = true
    }
  }, [])

  return ethereum
}
