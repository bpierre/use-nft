import { defineConfig } from "vite"

export default defineConfig({
  resolve: { dedupe: ["react", "react-dom"] },
  build: {
    target: ["es2020", "esnext"],
  },
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `import { jsx } from '@emotion/react'`,
  },
})
