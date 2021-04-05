import React, { useEffect, useRef } from "react"

type LoopVideoProps = {} & React.HTMLProps<HTMLVideoElement>

export default function LoopVideo(props: LoopVideoProps) {
  const ref = useRef<null | HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (el === null) return
    el.muted = true
    el.setAttribute("autoplay", "")
    el.setAttribute("playsinline", "")
  }, [])

  return <video ref={ref} {...props} tabIndex={-1} />
}
