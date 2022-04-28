import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig(async ({ mode }) => ({
  build: {
    target: ["es2020", "esnext"],
    outDir: "dist",
    lib: {
      entry: "src/index.tsx",
      formats: ["es", "cjs"],
      fileName: (format) => `use-nft.${format}.js`,
    },
    sourcemap: mode === "production" || "inline",
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `
      import { Fragment } from 'react'
    `,
    jsxFragment: "Fragment",
  },
  optimizeDeps: {
    entries: ["./src/index.tsx"],
  },
  plugins: [dts({ insertTypesEntry: true })],
  test: {
    environment: "happy-dom",
  },
}))
