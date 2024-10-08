import { languages } from "../../../helpers/cardsData"
import { useTranslation } from "react-i18next"
const LangDropDown = () => {
  const { i18n } = useTranslation()

  const changeLango = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  return <>
    <div className='langBox' >
      {
        Object.entries(languages).map((el) =>
          <img
            key={el[0]}
            className='flag'
            onClick={() => changeLango(el[0])}
            style={{ borderRadius: '10px' }}
            src={el[1]}
            alt={el[0]}
            width={22}
          />
        )
      }
    </div>
  </>
}

export default LangDropDown