import { useState } from "react"
import { languages } from "../../../helpers/cardsData"
import { useTranslation } from "react-i18next"
const LangDropDown = () => {
  const { i18n } = useTranslation()
  const [tool, toolSet] = useState<string>('')
  const langMatch = {
    en: 'English',
    bg: 'Български',
  }

  const changeLango = (lang: string) => {
    i18n.changeLanguage(lang)
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