import ButtonScrollTop from 'components/icons/ButtonToTop'
import UseIntersectionObserver from 'hooks/useIntersectionObserver'
import { useRef } from 'react'

export default function ScrollToTop ({ showButtonAt }) {
  const fromRef = useRef()
  const [isNearScreen] = UseIntersectionObserver({ elementRef: fromRef })

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div ref={fromRef} />
      <ButtonScrollTop
        fill='#000'
        height={45}
        onClick={handleClick}
        show={!isNearScreen}
        width={45}
      />
      <style jsx>{`
        div {
          opacity: 0;
          height: 1px;
          left: 1px;
          position: absolute;
          top: ${showButtonAt}px;
          width: 1px;
        }
      `}
      </style>
    </>
  )
}
