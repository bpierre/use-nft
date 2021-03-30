import type { Loader } from "./types"

import { useEffect, useState } from "react"

export function useLoad<T>(
  callback: () => Promise<T | null>,
  { retryDelay = 2000 } = {}
): Loader<T> {
  const [state, setState] = useState<Loader<T>>({
    loading: true,
    error: null,
    result: null,
  })

  useEffect(() => {
    let cancelled = false
    let retryTimer: ReturnType<typeof setTimeout>

    const load = async () => {
      setState({ loading: true, error: null, result: null })

      try {
        const result = await callback()

        if (!cancelled) {
          setState({ loading: false, error: null, result })
        }
      } catch (error) {
        if (cancelled) {
          return
        }

        setState({
          loading: false,
          error: error as Error,
          result: null,
        })

        // retry
        retryTimer = setTimeout(() => {
          if (!cancelled) {
            void load()
          }
        }, retryDelay)
      }
    }
    void load()

    return () => {
      clearTimeout(retryTimer)
      cancelled = true
    }
  }, [callback, retryDelay])

  return state
}
