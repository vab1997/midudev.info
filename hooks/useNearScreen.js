import { useEffect, useRef, useState } from 'react'

export default function useNearScreen ({ distance = '100px' } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, { rootMargin: distance })

    observer.observe(fromRef.current)

    return () => observer.disconnect()
  })

  return { isNearScreen, fromRef }
}
