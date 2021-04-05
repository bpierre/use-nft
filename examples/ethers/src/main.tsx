import React from "react"
import ReactDOM from "react-dom"
import { ViewportProvider } from "use-viewport"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <ViewportProvider>
      <App />
    </ViewportProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
