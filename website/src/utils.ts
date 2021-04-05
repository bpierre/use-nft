export function raf(
  callback: () => void,
  interval: (() => number) | number = 1000 / 60
) {
  const _interval = typeof interval === "function" ? interval : () => interval

  let rafId: number
  let lastUpdate = Date.now() - _interval()

  const loop = () => {
    rafId = requestAnimationFrame(loop)

    const now = Date.now()
    if (now - lastUpdate < _interval()) {
      return
    }
    lastUpdate = now

    callback()
  }

  loop()

  return () => cancelAnimationFrame(rafId)
}
