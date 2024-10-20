/* eslint-disable no-inner-declarations */
import { SetStateAction, useEffect, useRef, useState } from 'react'
import DisplayMenu from './DisplayMenu'
import LangButton from '../common/LangButton/LangButton'
import VoiceToText from '../common/TextToVoice/VoiceToText'
import LeftMenuMove from '../common/LeftMenuMove/LeftMenuMove'
import RightMenuMove from '../common/RightMenuMove/RightMenuMove'
import BtnSlide from '../common/BtnSlide/BtnSlide'
import LogoBen from '../Logo/LogoBen'
import { t } from 'i18next'
import { useStore } from '../../helpers/cardsData'
import MenuMobileButton from '../common/MenuMobileButton/MenuMobileButton'

const Menu = () => {
  const [, scrollActiveSet] = useState<number>(0)
  // const [textMenu, textMenuSet] = useState<string>('')
  const [widthInn, widthInnSet] = useState<number>(window.outerWidth)
  const onMouseX = useRef()

  const clickMenu = (id: string) => {
    // console.log(id)
    // textMenuSet(id)
    useStore.setState({ textMenuZ: id })
    useStore.setState({ element: id })
  }
  const menu = [
    { desc: 'Logo', el: 'Logo', id: <LogoBen /> },
    { desc: t("Learning.Learning"), el: 'Learning', },
    { desc: t("Check.Check"), el: 'Check car rental', },
    { desc: t('FastTrack.FastTrack'), el: 'Fast Track' },
    { desc: t('Damages.Damages'), el: 'Damages' },
    { desc: t('TaskDrag.TaskDrag'), el: 'Task drag', },
    { desc: t('LogTime.LogTime'), el: 'Log time' },
    { desc: t('Cargo.Cargo'), el: 'Cargo' },
    { desc: t('Contact.Contact'), el: 'Contact' },
  ]
  // useEffect(() => {
  //   const testArray = [1, 2, 3, 4, 5, 6, 7]
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   testArray.forEach((value, index): unknown =>
  //     setTimeout(() => // value === arr.length ? countSet(0) : 
  //       countSet(value), index * 1000)
  //   )
  // }, [count === 7])

  useEffect(() => {
    const el = document.querySelector<HTMLElement>('.navbarIn')

    el?.addEventListener('wheel', function (event: WheelEvent) {
      event.preventDefault();
      document.querySelector<HTMLElement>('.navbarIn')!.style.transform = `translateX(${event.deltaY * 3}px)`
    })

  }, [])

  useEffect(() => {
    if (window.innerWidth > 1100) {
      const el = document.querySelector<HTMLElement>('.navbarIn')

      el?.addEventListener('mousedown', mouseDown,);
      el?.addEventListener('mouseup', mouseUp,);
      function divMove(e: { clientX: number }) {
        el!.style.cursor = 'grabbing'
        el!.style.userSelect = 'none'
        el!.style.transform = `translateX(${(e.clientX - (onMouseX.current as unknown as number) + 100)}px)`
      }
      function mouseDown(e: { clientX: SetStateAction<number> }) {
        (onMouseX.current as unknown) = e.clientX
        window.addEventListener('mousemove', divMove, true);
      }

      function mouseUp() {
        window.removeEventListener('mousemove', divMove, true);
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY)));
  }, [window.scrollY])

  useEffect(() => {
    window.addEventListener("resize", () => widthInnSet(widthInn));
    widthInnSet(widthInn)
  }, [widthInn < 1100])

  console.log('widthInn', widthInn)

  return <>
    {/* {
      backDrop && (
        <div
          role='button'
          className='backDrop'
          onClick={() => backDropSet(!backDrop)}
        >
          <div>
            {
              menu.map(el =>
                <span key={el.desc}>
                  <DisplayMenu el={el} clickMenu={clickMenu} mobile={true} />
                </span>
              )
            }
          </div>
        </div>
      )
    } */}

    {
      // <div className={widthInn < 1100 ? 'navbarSmall' : scrollActive > 30 ? 'shadowNavbar ' : 'navbar '}>
      <div className={window.innerWidth < 1100 ? 'navbarSmall' : 'navbar '}>
        {window.innerWidth < 1100 ? <></> : <LeftMenuMove />}

        <span className={window.innerWidth > 1100 ? ' navbarInCover' : ''} >

          <span id='animatedMenu' className='navbarIn '>

            {
              menu.map(el =>
                <span key={el.desc}>
                  <DisplayMenu el={el} clickMenu={clickMenu} mobile={false} />
                </span>
              )
            }

          </span>
          <MenuMobileButton />
        </span>


        {window.innerWidth < 1100 ? <></> : <RightMenuMove />}

      </div>
    }
    {(window.innerWidth > 1100) ? <BtnSlide /> : <></>}
    {(window.innerWidth > 900) && <VoiceToText />}
    <LangButton />
  </>
}

export default Menu