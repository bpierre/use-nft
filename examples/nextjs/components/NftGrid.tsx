import { useEffect, useState } from "react"
import { useTrail, animated } from "react-spring"
import Nft from "./Nft"

type NftGridProps = {
  nfts: Array<[string, string, string, string]>
}

function NftGrid({ nfts }: NftGridProps) {
  const [progress, setProgress] = useState(0)
  const trail = useTrail(nfts.length, {
    progress,
    config: {
      mass: 0.5,
      tension: 400,
      friction: 30,
    },
  })

  useEffect(() => setProgress(1), [])

  return (
    <div
      css={{
        display: "grid",
        gap: "40px",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gridAutoRows: "510px",
        padding: "80px 0",
      }}
    >
      {trail.map(({ progress }, index) => {
        const [contract, tokenId, service, url] = nfts[index]
        return (
          <animated.div
            key={contract + tokenId}
            style={{
              opacity: progress,
              transform: progress.to(
                (v) => `translate3d(0, ${(1 - v) * 10}px, 0)`
              ),
            }}
          >
            <Nft
              contract={contract}
              service={service}
              tokenId={tokenId}
              url={url}
            />
          </animated.div>
        )
      })}
    </div>
  )
}

export default NftGrid
