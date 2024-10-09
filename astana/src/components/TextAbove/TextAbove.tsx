import { t } from "i18next"
import { state } from "../../helpers/cardsData"

const TextAbove = () => {
  return <div>
    <span id='animated-text-strip' className={state.test ? 'fadeIn' : 'fadeOut'}>
      {t('frontText.one')}
    </span>
    <span id='animated-text-strip-reversed' className={state.test ? 'fadeIn' : 'fadeOut'}>
      {t('frontText.two')}
    </span>
    <span id='animated-text-strip-reversedOne' className={state.test ? 'fadeIn' : 'fadeOut'}>
      {t('frontText.three')}
    </span>
    <span id='animated-text-stripOne' className={state.test ? 'fadeIn' : 'fadeOut'}>
      {t('frontText.four')}
    </span>
    {/* <span id='animated-text-strip-reversedTwo'>
        Working with new startups and big brands. Working with new startups and big brands.
      </span> */}
  </div>
}

export default TextAbove