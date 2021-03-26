import type { ReactNode } from "react"

import React from "react"
import { Global, css } from "@emotion/react"
import { colors } from "./styles"

type BaseProps = { children: ReactNode }

function Base({ children }, BaseProps) {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "IBM Plex Mono";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(IBMPlexMono.woff2) format("woff2");
          }
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
          body,
          h1 {
            margin: 0;
            font: 16px/1.4 "IBM Plex Mono", monospace;
          }
          body,
          a {
            color: ${colors.accent};
            text-decoration: none;
            outline: 0;
          }
          a:focus:not(:focus-visible) {
            background: transparent;
            color: ${colors.accent};
          }
          a:focus-visible {
            background: ${colors.accent};
            color: ${colors.accentOver};
          }
          #root {
            display: grid;
            justify-content: center;
            padding: 0 80px;
          }
        `}
      />
      {children}
    </>
  )
}

export default Base
