import type { ReactNode } from "react"
import type { NftMetadata } from "use-nft"

import React from "react"
import { useNft } from "use-nft"
import { css } from "@emotion/react"
import LoopVideo from "./LoopVideo"
import { colors } from "./styles"

type NftProps = {
  contract: string
  tokenId: string
  service: string
  url: string
}

function Nft({ contract, tokenId, service, url }: NftProps) {
  const nft = useNft(contract, tokenId)

  if (nft.loading) {
    return <Card>Loading…</Card>
  }

  if (nft.error) {
    return <Card>Error.</Card>
  }

  return (
    <Card url={url}>
      <NftDetails service={service} nft={nft.result} />
    </Card>
  )
}

function Card({ url, children }: { url?: string; children: ReactNode }) {
  const linkProps = url ? { href: url, target: "_blank" } : {}
  return (
    <a
      {...linkProps}
      css={css`
        display: block;
        overflow: hidden;
        border-radius: 5px;

        &:focus:not(:focus-visible) {
          background: transparent;
          color: ${colors.accent};
          box-shadow: none;
        }
        &:focus-visible {
          background: transparent;
          color: ${colors.accent};
          box-shadow: 0 0 0 2px ${colors.accent};
        }
      `}
    >
      <section
        css={css`
          display: grid;
          place-items: center;
          grid-template-columns: 100%;
          grid-template-rows: 100%;
          width: 400px;
          height: 430px;
          background: #123;
        `}
      >
        {children}
      </section>
    </a>
  )
}

function NftDetails({
  service,
  nft,
}: {
  service: string
  nft: NftMetadata | null
}) {
  const name = nft?.name || "Untitled"
  const description = nft?.description || "−"
  const image = nft?.image || ""
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 100%;
        position: relative;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 200px;
          background: ${colors.accent};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% calc(50% - 4px);
          }
        `}
      >
        {image.endsWith(".mp4") ? (
          <LoopVideo type="video/mp4" src={image} height="200" />
        ) : (
          <img src={image} height="200" alt="" />
        )}
      </div>
      <h1
        css={css`
          display: flex;
          align-items: center;
          width: 100%;
          height: 60px;
          margin: 0;
          padding: 0 20px;
          text-align: center;
          white-space: nowrap;

          // truncating
          span {
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}
      >
        <span title={name}>{name}</span>
      </h1>
      <p
        title={description}
        css={css`
          margin: 0;
          padding: 0 20px;
          line-height: 24px;

          // truncating
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
        `}
      >
        {description}
      </p>
      <div
        css={css`
          position: absolute;
          bottom: 0;
          padding: 2px 10px;
          border-radius: 0 0 0 3px;
          color: ${colors.accentOver2};
          background: ${colors.accent};
        `}
      >
        {service}
      </div>
    </div>
  )
}

export default Nft
