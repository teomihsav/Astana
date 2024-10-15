import { SetStateAction, useEffect, useLayoutEffect, useRef, useState } from 'react'
import DisplayMenu from './DisplayMenu'
import { useTranslation } from 'react-i18next'
import LangButton from '../common/LangButton/LangButton'
import VoiceToText from '../common/TextToVoice/VoiceToText'
import LeftMenuMove from '../common/LeftMenuMove/LeftMenuMove'
import RightMenuMove from '../common/RightMenuMove/RightMenuMove'
import LogoBen from '../Logo/LogoBen'

const Menu = () => {
  const { t, } = useTranslation()
  const [scrollActive, scrollActiveSet] = useState<number>(0)
  const [moveMouse, moveMouseSet] = useState<number>(0)
  const [mouseX, mouseXSet] = useState<number>(() => 0)
  const [textMenu, textMenuSet] = useState<string>('')
  const [, widthInnSet] = useState<string>('')
  // const winHeight = useRef(window.innerHeight)
  let onMouseX = useRef<number>()

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


  const clickMenu = (id: string) => {
    // console.log(id)
    textMenuSet(id)
  }

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
    el!.id = 'animatedMenu';

    el?.addEventListener('wheel', function (event: WheelEvent) {
      event.preventDefault();
      // console.log('Element:', el, event.wheelDelta)
      moveMouseSet(event.deltaY)
      document.querySelector<HTMLElement>('.navbarIn')!.style.transform = `translateX(${event.deltaY * 3}px)`

      // console.log('mousePosition: ', event)
      // div.style.left = (mousePosition.x + offset[0]) + 'px';
      // div.style.top = (mousePosition.y + offset[1]) + 'px';
    })

  }, [moveMouse])

  useEffect(() => {
    const el = document.querySelector<HTMLElement>('.navbarIn')

    el?.addEventListener('mousedown', mouseDown,);
    el?.addEventListener('mouseup', mouseUp,);
    // el?.addEventListener('mouseclick', mouseClick,);

    function mouseDown(e: { clientX: SetStateAction<number> }) {
      console.log(' Mouse Click: ', e.clientX,)
      onMouseX.current = e.clientX
      window.addEventListener('mousemove', divMove, true);
    }
    function mouseUp() {
      window.removeEventListener('mousemove', divMove, true);
    }
    // function mouseClick(e: { clientX: SetStateAction<number> }) {
    //   mouseXSet(e.clientX)
    //   window.addEventListener('mouseclick', divMove, true);
    // }
    function divMove(e: any) {
      // const ele = document.querySelector<HTMLElement>('.navbarIn')
      // el!.style.position = 'absolute'
      el!.style.cursor = 'grabbing'
      el!.style.userSelect = 'none'
      el!.removeAttribute('id');
      console.log(' X: ', el!.offsetWidth, onMouseX.current, e.clientX - onMouseX.current)
      el!.style.transform = `translateX(${(e.clientX - onMouseX.current + 100)}px)`
      // el!.style.left = e.clientX + 'px';
      // document.querySelector<HTMLElement>('.navbarIn')!.style.transform = `translateX(${e.clientX - 1000}px)`
    }

    // return () => el!.id = 'animatedMenu';
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY)));
    console.log('Scroll: ', window.scrollY)
  }, [window.scrollY])

  useLayoutEffect(() => {
    window.addEventListener("resize", () => widthInnSet(window.innerWidth.toString()));
  }, [window.innerWidth])


  return <>
    {
      <div className={scrollActive > 50 ? 'navbar shadowNavbar ' : 'navbar '}>
        {window.innerWidth < 1100 ? <></> : <LeftMenuMove />}

        <span className='navbarInCover' >

          <span id='animatedMenu' className='navbarIn '>

            {
              menu.map(el =>
                <span key={el.desc}>
                  <DisplayMenu el={el} clickMenu={clickMenu} textMenu={textMenu} />
                </span>
              )
            }

          </span>
        </span>

        {window.innerWidth < 1100 ? <></> : <RightMenuMove />}

      </div>
    }
    <LangButton />
    {(window.innerWidth > 1050 || window.innerWidth < 900) && <VoiceToText />}
    {/* <LogoBen /> */}

  </>
}

export default Menu