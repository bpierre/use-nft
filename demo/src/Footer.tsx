import React from "react"
import { css } from "@emotion/react"
import Navigation from "./Navigation"

function Footer() {
  return (
    <footer
      css={css`
        padding-top: 60px;
      `}
    >
      <Navigation swap />
    </footer>
  )
}

export default Footer
