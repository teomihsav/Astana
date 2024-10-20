import { useEffect, useRef, useState } from "react"
import { useStore } from "../../../../helpers/cardsData"
// import { useTranslation } from "react-i18next"
import { scrollToSmoothly } from "../../../../helpers/helpers"
import i18next, { t } from "i18next"
import DisplayMenu from "../../../Menu/DisplayMenu"
import LogoBen from "../../../Logo/LogoBen"
const ProfileDropDown = () => {
  // const { i18n } = useTranslation()
  // const [tool, toolSet] = useState<string>('')
  const [, textMenuSet] = useState<string>('')

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

  const winHeight = useRef(window.innerHeight)

  // Fix scroll on diff text on lang change
  useEffect(() => {
    const elementStore = useStore.getState().element
    const el = document.getElementById(elementStore)
    scrollToSmoothly(Number(el?.offsetTop) - (winHeight.current / 2) + Number(el?.offsetHeight as number / 2), 900)
  }, [i18next.language])

  // const changeLango = (lang: string) => {
  //   i18n.changeLanguage(lang)
  //   state.test = !state.test
  // }
  // const toolTip = (lang: string) => {
  //   toolSet(langMatch[lang as keyof typeof langMatch])
  // }

  return <>
    <div className='profile' >
      {

        menu.map(el =>
          <span key={el.desc}>
            <DisplayMenu el={el} clickMenu={clickMenu} mobile={false} />
          </span>
        )
        // Object.entries(menuLeft.map((el) =>

        //   <div key={el.el} className='menu'>
        //     <a href={`#${el.el}`}>
        //       {el.desc}
        //     </a>
        //   </div>
        // )).map((el) => el[1])

      }
      {/* <div className='toolTipCont'>
        <div className='toolTip'>{tool}</div>
      </div> */}
    </div>
  </>
}

export default ProfileDropDown
// Object.entries(languages).map((el) =>
//   <img
//     key={el[0]}
//     className='flag'
//     onClick={() => changeLango(el[0])}
//     onMouseOver={() => toolTip(el[0])}
//     onMouseOut={() => toolTip('')}
//     style={{ borderRadius: '10px' }}
//     src={el[1]}
//     alt={el[0]}
//     width={22}
//   />
// )