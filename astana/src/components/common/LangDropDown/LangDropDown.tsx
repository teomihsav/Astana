import { useEffect, useRef, useState } from "react"
import { languages, state, useStore } from "../../../helpers/cardsData"
import { useTranslation } from "react-i18next"
import { scrollToSmoothly } from "../../../helpers/helpers"
import i18next from "i18next"
const LangDropDown = () => {
  const { i18n } = useTranslation()
  const [tool, toolSet] = useState<string>('')

  const langMatch = {
    en: 'English',
    bg: 'Български',
  }

  const winHeight = useRef(window.innerHeight)

  // Fix scroll on diff text on lang change
  useEffect(() => {
    const elementStore = useStore.getState().element
    const el = document.getElementById(elementStore)
    scrollToSmoothly(Number(el?.offsetTop) - (winHeight.current / 2) + Number(el?.offsetHeight as number / 2), 900)
  }, [i18next.language])

  const changeLango = (lang: string) => {
    i18n.changeLanguage(lang)
    state.test = !state.test
  }
  const toolTip = (lang: string) => {
    toolSet(langMatch[lang as keyof typeof langMatch])
  }

  return <>
    <div className='langBox' >
      {
        Object.entries(languages).map((el) =>
          <img
            key={el[0]}
            className='flag'
            onClick={() => changeLango(el[0])}
            onMouseOver={() => toolTip(el[0])}
            onMouseOut={() => toolTip('')}
            style={{ borderRadius: '10px' }}
            src={el[1]}
            alt={el[0]}
            width={22}
          />
        )
      }
      <div className='toolTipCont'>
        <div className='toolTip'>{tool}</div>
      </div>
    </div>
  </>
}

export default LangDropDown