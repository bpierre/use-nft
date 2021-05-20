import React from "react"
import { css } from "@emotion/react"

function Navigation({ swap = false }: { swap?: boolean }) {
  const links = [
    <a
      key="by"
      href="https://spectre.xyz/"
      target="_blank"
      css={css`
        text-transform: lowercase;
      `}
    >
      by Spectre
    </a>,
    <a key="docs" href="https://github.com/spectrexyz/use-nft" target="_blank">
      code & docs
    </a>,
  ]
  return (
    <nav
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 96px;
      `}
    >
      {swap ? [...links].reverse() : links}
    </nav>
  )
}

export default Navigation
