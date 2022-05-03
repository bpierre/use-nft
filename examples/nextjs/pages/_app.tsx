import type { AppProps } from "next/app"
import { ViewportProvider } from "use-viewport"

function App({ Component, pageProps }: AppProps) {
  return (
    <ViewportProvider>
      <Component {...pageProps} />
    </ViewportProvider>
  )
}

export default App
