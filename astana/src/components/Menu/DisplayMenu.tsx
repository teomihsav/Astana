import React, { ReactNode, useRef } from 'react'
import { scrollToSmoothly } from '../../helpers/helpers'
export type propTypeMenu = {
  el: { desc: string, el: string | ReactNode }
  clickMenu: (id: string) => void
  colorMenu: string
}
const DisplayMenu = ({ el, clickMenu, colorMenu }: propTypeMenu) => {
  const winHeight = useRef(window.innerHeight)
  const ref = useRef(null);
  // const [currentScroll, currentScrollSet] = useState<number>(() => window.scrollY)
  // const [scrollEl, scrollElSet] = useState<number>(0)
  // const [elementId, elementIdSet] = useState<string>()
  // // get position on scroll
  // useLayoutEffect(() => {
  //   const element = document.getElementById(el.desc)
  //   currentScrollSet(window.scrollY)
  //   scrollElSet(Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2) + 70)
  //   elementIdSet(element?.id)
  // }, [window.scrollY, elementId, scrollEl])

  return <div ref={ref}>
    <span
      className='menu'
      onClick={() => clickMenu(el.desc)}
    >

      {/* <span className={(elementId ? elementId : colorMenu === el) && (scrollEl > 267 && currentScroll > scrollEl) ? 'underline' : 'underlineHover'}  > */}
      {/* <span className={(colorMenu === el) ? 'underline' : 'underlineHover'}  > */}
      <span style={{ paddingRight: '10px' }}>
        <span
          className={colorMenu === el.desc ? el.desc === 'Logo' ? 'logoUnderline' : 'underline' : el.desc === 'Logo' ? 'logoUnderline' : 'underlineHover'}
          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault()
            const element = document.getElementById(el.desc)
            scrollToSmoothly(Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2), 900)
          }}
        >
          {el.desc === 'Logo' ? el.el : window.innerWidth < 900 ?
            <div style={{ borderRadius: '50%', width: '10px', height: '10px', backgroundColor: '#5dd39e', display: 'inline-block', }}></div>
            : el.desc}
        </span>

      </span>
    </span>
    {/* {currentScroll} '   '
    {scrollEl} */}

  </div>
}

export default DisplayMenu