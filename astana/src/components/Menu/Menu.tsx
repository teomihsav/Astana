import { useEffect, useLayoutEffect, useState } from 'react'
import DisplayMenu from './DisplayMenu'
import Logo from '../Logo/LogoBen'
import { useTranslation } from 'react-i18next'
import LangButton from '../common/LangButton/LangButton'
import VoiceToText from '../common/TextToVoice/VoiceToText'

const Menu = () => {
  const { t, } = useTranslation()

  const menu = [
    { desc: 'Logo', el: 'Logo', id: <Logo /> },
    { desc: t("Check.Check"), el: 'Check car rental', },
    { desc: t('TaskDrag.TaskDrag'), el: 'Task drag', },
    { desc: t('FastTrack.FastTrack'), el: 'Fast Track' },
    { desc: t('Damages.Damages'), el: 'Damages' },
    { desc: t('LogTime.LogTime'), el: 'Log time' },
    { desc: t('Contact.Contact'), el: 'Contact' },
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

  useLayoutEffect(() => {
    window.addEventListener("resize", () => widthInnSet(window.innerWidth.toString()));
  }, [window.innerWidth])

  return <>

    {
      <div className='navbar '>

        <div className='shadowLeft'></div>
        <div className='navbarInCover' >

          <div className='navbarIn '>

            {
              menu.map(el =>
                <span key={el.desc}>
                  <DisplayMenu el={el} clickMenu={clickMenu} textMenu={textMenu} />
                </span>
              )
            }

          </div>
        </div>
        <div className='shadowRight'></div>

      </div>
    }
    <LangButton />
    {(window.innerWidth > 1050 || window.innerWidth < 900) && <VoiceToText />}
  </>
}

export default Menu