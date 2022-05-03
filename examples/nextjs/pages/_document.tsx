import { Html, Head, Main, NextScript } from "next/document"

const pattern = 'data:image/svg+xml,' + encodeURIComponent(`
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.4">
      <rect y="24.75" width="50" height="0.5" fill="#E693DD"/>
      <rect x="24.75" width="0.5" height="50" fill="#E693DD"/>
    </g>
  </svg>
`)

export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{ background: `url(${pattern}) 50% 0 repeat #111` }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
