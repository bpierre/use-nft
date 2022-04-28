import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ViewportProvider } from "use-viewport"
import App from "./App"

const rootElement = document.getElementById("root")
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ViewportProvider>
        <App />
      </ViewportProvider>
    </StrictMode>
  )
}
