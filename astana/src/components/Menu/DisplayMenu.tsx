import React, { useEffect, useRef, } from 'react'
import { scrollToSmoothly } from '../../helpers/helpers'
import { state, useStore } from '../../helpers/cardsData'
import i18next from 'i18next'

export type propTypeMenu = {
  el: { desc: string, el: string, id?: React.ReactNode }
  clickMenu: (id: string) => void
  colorMenu: string
}
// const { transcript } = useStore()
const DisplayMenu = ({ el, clickMenu, colorMenu }: propTypeMenu) => {
  const winHeight = useRef(window.innerHeight)
  const text = useStore((state) => state.transcript)

  // Fix scroll on diff text on lang change
  useEffect(() => {
    const elementStore = useStore.getState().element
    const el = document.getElementById(elementStore)
    scrollToSmoothly(Number(el?.offsetTop) - (winHeight.current / 2) + Number(el?.offsetHeight as number / 2), 900)
  }, [i18next.language])


  // useEffect(() => {
  //   // textSet(state.transcript)
  //   const element = document.getElementById(text)
  //   // console.log('In the Onchange :', text)
  //   // console.log('Scroll: ', useStore.getState().scroll)
  //   const el = document.getElementById(element)

  //   scrollToSmoothly(Number(el?.offsetTop) - (winHeight.current / 2) + Number(el?.offsetHeight as number / 2), 900)

  //   // console.log('Display Voice:', text)
  // }, [text])

  // const [currentScroll, currentScrollSet] = useState<number>(() => window.scrollY)
  // const [scrollEl, scrollElSet] = useState<number>(0)
  // const [elementId, elementIdSet] = useState<string>()
  // // get position on scroll


  useEffect(() => {
  }, [state.transcript])
  console.log('Test:', state.test)

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
            useStore.setState({ scroll: Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2) })
            useStore.setState({ element: el.el })

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