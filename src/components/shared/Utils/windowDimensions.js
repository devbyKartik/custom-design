import { useState, useEffect } from 'react'
import { BREAK_POINTS } from './constants'
/**
 *Get window dimensions
 *@returns {
    width,
    height
  }
 */
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = process.browser
    ? window
    : {
        width: BREAK_POINTS.xl,
        height: BREAK_POINTS.xl
      }
  return {
    width,
    height
  }
}

/**
 * window dimension hook to observe and get the client window dimensions
 * @returns {
    width,
    height
  }
 */
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    if (process.browser) {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowDimensions
}
