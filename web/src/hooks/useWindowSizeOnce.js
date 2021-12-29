import { useState } from "react"

export default function useWindowSizeOnce() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    })

  return windowSize
}