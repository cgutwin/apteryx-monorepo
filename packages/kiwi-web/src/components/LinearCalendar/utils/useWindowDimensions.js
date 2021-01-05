import { useEffect, useState } from "react"

// https://usehooks.com/useWindowSize/
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    function onResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener("resize", onResize)
    onResize()

    return () => window.removeEventListener("resize", onResize)
  }, [])

  return windowDimensions
}
