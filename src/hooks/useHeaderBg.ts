import { useEffect, useState } from 'react'

export const useHeaderBg = (scrollThreshold: number): boolean => {
  const [hasBackground, setHasBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setHasBackground(true)
      } else {
        setHasBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollThreshold])

  return hasBackground
}
