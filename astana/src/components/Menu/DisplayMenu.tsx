import React, { useEffect, useRef, useState, } from 'react'
import { scrollToSmoothly } from '../../helpers/helpers'
import { useStore } from '../../helpers/cardsData'

export type propTypeMenu = {
  el: { desc: string, el: string, id?: React.ReactNode }
  clickMenu: (id: string) => void
  textMenu: string
}
// const { transcript } = useStore()
const DisplayMenu = ({ el, clickMenu, textMenu }: propTypeMenu) => {
  const text = useStore((state) => state.transcript)
  const winHeight = useRef(window.innerHeight)
  const [, scrollActiveSet] = useState<number>(0)

  // useEffect(() => {
  // }, [state.transcript])
  // console.log('Test:', state.test)

  useEffect(() => {
    window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY)));
    document.querySelector<HTMLElement>('.navbarIn')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
    // document.querySelector<HTMLElement>('#animated-text-strip-reversed')!.style.transform = `translateX(${Number(-window.scrollY)}px)`;
    // document.querySelector<HTMLElement>('#animated-text-stripOne')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
    // document.querySelector<HTMLElement>('#animated-text-strip-reversedOne')!.style.transform = `translateX(${Number(-window.scrollY)}px)`;
    // document.querySelector<HTMLElement>('#animated-text-strip-reversedTwo')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
  }, [window.scrollY])

  return <div >
    <span
      className='menu '
      onClick={() => clickMenu(el.el)}
      onChange={() => clickMenu(text)}
    >
      <span style={{ paddingRight: '10px' }}>
        <span
          className={textMenu === el.el ? el.desc === 'Logo' ? 'logoUnderline' : 'underline' : el.desc === 'Logo' ? 'logoUnderline' : 'underlineHover'}

          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault()
            const element = document.getElementById(el.el)
            scrollToSmoothly(Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2), 900)
            useStore.setState({ scroll: Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2) })
            useStore.setState({ element: el.el })

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