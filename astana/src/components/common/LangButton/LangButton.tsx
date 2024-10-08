import { useState } from "react"
import { languages } from "../../../helpers/cardsData"
import { useTranslation } from "react-i18next"
const LangButton = () => {
  const { i18n } = useTranslation()
  const [swap, swapSet] = useState<boolean>(true)

  return <>
    <div
      role='button'
      onClick={() => swapSet(!swap)}
      className='langBtn '
    >
      <img className='' src={languages[i18n.language as keyof typeof languages]} alt={`${i18n.language}`} width={22} />
    </div>
  </>
}

export default LangButton