import { useEffect, useLayoutEffect, useState } from 'react'
import DisplayMenu from './DisplayMenu'
import { useTranslation } from 'react-i18next'
import LangButton from '../common/LangButton/LangButton'
import VoiceToText from '../common/TextToVoice/VoiceToText'
import LeftMenuMove from '../common/LeftMenuMove/LeftMenuMove'
import RightMenuMove from '../common/RightMenuMove/RightMenuMove'
import LogoBen from '../Logo/LogoBen'

const Menu = () => {
  const { t, } = useTranslation()

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
    { desc: 'Logo', el: 'Logo', id: <LogoBen /> },
    // { desc: 'Lang', el: <LangDropDown /> },
  ]

  const [textMenu, textMenuSet] = useState<string>('')
  // const [count, countSet] = useState<number>(0)
  const [, widthInnSet] = useState<string>('')

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
    el?.addEventListener('wheel', function (event: WheelEvent) {
      event.preventDefault();
      // console.log('Element:', el, event.wheelDelta)
      document.querySelector<HTMLElement>('.navbarIn')!.style.transform = `translateX(${event.deltaY * 3}px)`

      // console.log('mousePosition: ', event)
      // div.style.left = (mousePosition.x + offset[0]) + 'px';
      // div.style.top = (mousePosition.y + offset[1]) + 'px';
    }
    )
  })

  useLayoutEffect(() => {
    window.addEventListener("resize", () => widthInnSet(window.innerWidth.toString()));
  }, [window.innerWidth])

  return <>
    {
      <div className='navbar '>
        <LeftMenuMove />

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

        <RightMenuMove />

      </div>
    }
    <LangButton />
    {(window.innerWidth > 1050 || window.innerWidth < 900) && <VoiceToText />}
    {/* <LogoBen /> */}

  </>
}

export default Menu