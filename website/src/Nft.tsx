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
  const { nft, loading, error, reload } = useNft(contract, tokenId)

  return (
    <Card url={nft && url} label={service}>
      {(() => {
        if (loading) return <NftLoading />
        if (error) return <NftError error={error} reload={reload} />
        return <NftDetails nft={nft} />
      })()}
    </Card>
  )
}

function Card({
  label,
  url,
  children,
}: {
  label: string
  url?: string
  children: ReactNode
}) {
  const linkProps = url ? { href: url, target: "_blank" } : {}
  return (
    <a
      {...linkProps}
      css={css`
        display: block;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;
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
          height: 100%;
          place-items: center;
          grid-template-columns: 100%;
          background: #123;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            position: relative;
          `}
        >
          {children}
          <div
            css={css`
              position: absolute;
              bottom: 0;
              padding: 2px 10px;
              color: ${colors.accentOver2};
              background: ${colors.accent};
            `}
          >
            {label}
          </div>
        </div>
      </section>
    </a>
  )
}

function NftLoading() {
  return (
    <div
      css={css`
        display: grid;
        height: 100%;
        place-items: center;
      `}
    >
      Loading…
    </div>
  )
}

function NftError({ error, reload }: { error: Error; reload: () => void }) {
  return (
    <div
      css={css`
        display: grid;
        height: 100%;
        place-items: center;
        text-align: center;
        line-height: 2;
      `}
    >
      <p>
        Loading error.
        <br /> <button onClick={reload}>Retry?</button>
      </p>
    </div>
  )
}

function NftDetails({ nft }: { nft?: NftMetadata }) {
  if (!nft) {
    return null
  }

  const { image } = nft
  const name = nft.name || "Untitled"
  const description = nft.description || "−"
  return (
    <>
      <div
        css={css`
          width: 100%;
          height: 280px;
          background: ${colors.accent};
          img,
          video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        `}
      >
        {image.includes(".mp4") ? (
          <LoopVideo type="video/mp4" src={image} height="280" />
        ) : (
          image && <img src={image} height="280" alt="" />
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
    </>
  )
}

export default Nft
