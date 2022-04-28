import { vi } from "vitest"

// An incomplete fetch() mockup for vitest
const fetch = vi.fn((input: RequestInfo) => {
  if (typeof input !== "string" || !input.startsWith("data:text/json,")) {
    throw new Error(
      "Input type not implemented by the fetch() mock function, see jest-fetch-mock.ts"
    )
  }
  const response = {
    ok: true,
    status: 200,
    clone: () => response,
    async json() {
      return JSON.parse(await this.text())
    },
    async text() {
      return decodeURIComponent(input.split(",")[1])
    },
  }
  return response
})

vi.stubGlobal("fetch", fetch)
