import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { scrollToSmoothly } from '../../helpers/helpers'
import { state } from '../../helpers/cardsData'

export type propTypeMenu = {
  el: { desc: string, el: string, id?: React.ReactNode }
  clickMenu: (id: string) => void
  colorMenu: string
}
const DisplayMenu = ({ el, clickMenu, colorMenu }: propTypeMenu) => {
  const winHeight = useRef(window.innerHeight)
  const [text, textSet] = useState<string>('')

  useEffect(() => {
    textSet(state.transcript)
    console.log('Display Voice :', text)
  }, [state.transcript])


  // const [currentScroll, currentScrollSet] = useState<number>(() => window.scrollY)
  // const [scrollEl, scrollElSet] = useState<number>(0)
  // const [elementId, elementIdSet] = useState<string>()
  // // get position on scroll

  const element = document.getElementById(text)
  console.log('In the Onchange :', text)
  scrollToSmoothly(Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2), 900)

  useEffect(() => {

  }, [state.transcript])
  // console.log('Test:', state.test)

  return <div>
    <span
      className='menu'
      onClick={() => clickMenu(el.el)}
      onChange={() => clickMenu(text)}
    >

      {/* <span className={(elementId ? elementId : colorMenu === el) && (scrollEl > 267 && currentScroll > scrollEl) ? 'underline' : 'underlineHover'}  > */}
      {/* <span className={(colorMenu === el) ? 'underline' : 'underlineHover'}  > */}
      <span style={{ paddingRight: '10px' }}>
        <span
          className={colorMenu === el.el ? el.desc === 'Logo' ? 'logoUnderline' : 'underline' : el.desc === 'Logo' ? 'logoUnderline' : 'underlineHover'}

          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault()
            const element = document.getElementById(el.el)
            scrollToSmoothly(Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2), 900)
          }}

        // onChange={(event: React.SyntheticEvent) => {
        //   event.preventDefault()
        //   const element = document.getElementById(text)
        //   console.log('In the Onchange:', text)
        //   scrollToSmoothly(Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2), 900)
        // }}

        >
          {
            el.el === 'Logo' ? el.id : window.innerWidth < 900
              ?
              <div style={{ borderRadius: '50%', width: '10px', height: '10px', backgroundColor: '#5dd39e', display: 'inline-block', }}></div>
              :
              <span className={'fadeIn'}>{el.desc}</span>
          }
        </span>
      </span>
    </span>
  </div>
}

export default DisplayMenu