import React, { useEffect, useRef, useState } from 'react'
import { scrollToSmoothly } from '../../helpers/helpers'

type propTypeMenu = {
  el: string
  clickMenu: (id: string) => void
  colorMenu: string
}
const DisplayMenu = ({ el, clickMenu, colorMenu }: propTypeMenu) => {
  const winHeight = useRef(window.innerHeight)
  const ref = useRef(null);
  const [currentScroll, currentScrollSet] = useState<number>(() => window.scrollY)
  const [scrollEl, scrollElSet] = useState<number>(0)
  const [elementId, elementIdSet] = useState<string>()
  // const [arrScrollElPoints, arrScrollElPointsSet] = useState<number[]>([])
  // const arrScrollElPoints: number[] = []
  // get position on scroll
  useEffect(() => {
    // console.log('Scroll: ', 'colorMenu:', colorMenu, 'el: ', el, window.scrollY)

    const element = document.getElementById(el)
    // arrScrollElPointsSet([...arrScrollElPoints, Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2) + 70])

    console.log('Element: ', element?.id, el, currentScroll, Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2) + 70)
    // arrScrollElPoints.push(Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2) + 70)
    currentScrollSet(window.scrollY)
    scrollElSet(Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2) + 70)
    elementIdSet(element?.id)
  }, [window.scrollY, elementId,])
  // console.log(arrScrollElPoints)

  return <div ref={ref}>
    <span
      style={{ color: 'white', fontSize: '14px', fontWeight: 700, marginRight: '20px' }}
      onClick={() => clickMenu(el)}
    >

      {/* <span className={(elementId ? elementId : colorMenu === el) && (scrollEl > 267 && currentScroll > scrollEl) ? 'underline' : 'underlineHover'}  > */}
      <span className={(colorMenu === el) ? 'underline' : 'underlineHover'}  >

        <span style={{ color: 'gray', }} className={colorMenu === el ? 'underline' : 'underlineHover'}
          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault()
            const element = document.getElementById(el)
            // console.log('Offset: ', colorMenu, el, winHeight, winWidth, element?.offsetHeight, element?.offsetTop, Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2) + 70)
            // scrollToSmoothly(0, 500)
            // scrollToSmoothly(element?.offsetTop as number, 900)
            scrollToSmoothly(Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2) + 70, 900)
          }}
        >
          {el}
        </span>

      </span>
    </span>

    {/* {elementId} */}

  </div>
}

export default DisplayMenu