import { useEffect, useRef, useState } from "react"
import { langMatch, languages, state, useStore } from "../../../helpers/cardsData"
import { useTranslation } from "react-i18next"
import { scrollToSmoothly } from "../../../helpers/helpers"
const LangDropDown = () => {
  const { i18n } = useTranslation()
  const [tool, toolSet] = useState<string>('')
  const winHeight = useRef(window.innerHeight)

  const changeLango = (lang: string) => {
    i18n.changeLanguage(lang)
    state.test = !state.test
    scrollToSmoothly(useStore.getState().scroll, 900)
    console.log('Lango Scroll: ', useStore.getState().scroll)
  }
  const toolTip = (lang: string) => {
    toolSet(langMatch[lang as keyof typeof langMatch])
  }

  return <>
    <div className='langBox'>
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