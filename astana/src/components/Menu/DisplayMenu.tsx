import React, { useEffect, useRef, } from 'react'
import { scrollToSmoothly } from '../../helpers/helpers'
import { useStore } from '../../helpers/cardsData'

export type propTypeMenu = {
  el: { desc: string, el: string, id?: React.ReactNode }
  clickMenu: (id: string) => void
}
// const { transcript } = useStore()
const DisplayMenu = ({ el, clickMenu }: propTypeMenu) => {
  const text = useStore((state) => state.transcript) // get state value
  const winHeight = useRef(window.innerHeight)
  const textMenuZ = useStore((state) => state.element)

  useEffect(() => {
    console.log('Element: ', textMenuZ === el.el ? el.desc : '')
    console.log('Element: ', textMenuZ)
    // <span
    //   className={textMenuZ === el.el ? el.desc === 'Logo' ? 'logoUnderline' : 'underline' : el.desc === 'Logo' ? 'logoUnderline' : 'underlineHover'}
    // ></span>
  }, [textMenuZ])
  // function dragoverHandler(ev: React.DragEvent<HTMLSpanElement>) {
  //   ev.preventDefault();
  //   ev.dataTransfer.dropEffect = "move";
  //   console.log(ev)
  // }

  // console.log(el)

  return <div id='drag'>
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