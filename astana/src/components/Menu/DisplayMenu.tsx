import React, { useEffect, useRef, } from 'react'
import { scrollToSmoothly } from '../../helpers/helpers'
import { useStore } from '../../helpers/cardsData'

export type propTypeMenu = {
  el: { desc: string, el: string, id?: React.ReactNode }
  clickMenu: (id: string) => void
  mobile: boolean
}
// const { transcript } = useStore()
const DisplayMenu = ({ el, clickMenu, mobile }: propTypeMenu) => {
  const text = useStore((state) => state.transcript) // get state value
  const winHeight = useRef(window.innerHeight)
  const textMenuZ = useStore((state) => state.element)

  useEffect(() => {
    // console.log('Element: ', textMenuZ === el.el ? el.desc : '')
    // console.log('Element: ', textMenuZ)
    // <span
    //   className={textMenuZ === el.el ? el.desc === 'Logo' ? 'logoUnderline' : 'underline' : el.desc === 'Logo' ? 'logoUnderline' : 'underlineHover'}
    // ></span>
  }, [textMenuZ])

  // console.log(el)

  return <div>
    <span
      className='menu '
      onClick={() => clickMenu(el.el)}
      onChange={() => clickMenu(text)}
    >

      <span style={{ paddingLeft: '10px', paddingRight: '0px' }}>
        <span
          className={textMenuZ === el.el ? el.desc === 'Logo' ? 'logoUnderline' : 'underline' : el.desc === 'Logo' ? 'logoUnderline' : 'underlineHover'}

          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault()
            const element = document.getElementById(el.el)
            scrollToSmoothly(Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2), 900)
            useStore.setState({ scroll: Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2) })
            useStore.setState({ element: el.el })
            useStore.setState({ textMenuZ: el.el })
          }}
        >
          {
            // window.innerWidth < 1100 ? <></> :
            el.el === 'Logo' ? mobile && el.id : window.innerWidth < 1100
              ?
              mobile && <span className={'fadeIn'}>{el.desc}</span>
              :
              // <div style={{ borderRadius: '50%', width: '10px', height: '10px', backgroundColor: '#5dd39e', display: 'inline-block', }}></div>
              // :
              <span className={'fadeIn'}>{el.desc}</span>
          }
        </span>
      </span>

    </span>
  </div>
}

export default DisplayMenu