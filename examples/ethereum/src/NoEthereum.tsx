import React, { useEffect } from "react"
import { css } from "@emotion/react"

function NoEthereum() {
  return (
    <div
      css={css`
        display: grid;
        place-items: center;
        width: 100%;
        height: 100vh;
        position: relative;
      `}
    >
      No Ethereum provider detected, please use a wallet like MetaMask.
    </div>
  )
}

export default NoEthereum
