import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { state } from '../../../helpers/cardsData'

const BtnSlide = () => {
  const { t, } = useTranslation()
  const [slide, slideSet] = React.useState<boolean>(false)

  useEffect(() => {
    const el = document.querySelector<HTMLElement>('.navbarIn')
    slide ? el!.removeAttribute('id') : el!.id = 'animatedMenu'
  })

  return <>
    <div className={state.test ? 'btnSlideCont fadeIn' : 'btnSlideCont fadeOut'}>

      <div
        className='btnSlide '
        onClick={() => slideSet(!slide)}
      >
        <div className='textBtn'>{t('animationOnOff')} - </div>
        <div
          className={slide ? 'btnSlideDot20 ' : 'btnSlideDot '}
        >
        </div>
      </div >

      <div className='textBelowMenu'>{t('textBelowMenu')}</div>

    </div>
  </>
}

export default BtnSlide