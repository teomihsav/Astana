// import { useEffect } from 'react'
import i18next from 'i18next'
import { useState, useEffect } from 'react'
import link from '../../assets/svg/link.svg'
import { CardProps } from '../../types/types'
import { state } from '../../helpers/cardsData'
// import { useTranslation } from 'react-i18next'


const Card = (props: CardProps) => {
  // const { i18n } = useTranslation()

  const [changeLango, changeLangoSet] = useState<boolean>()
  useEffect(() => {
    changeLangoSet(!changeLango)
    // i18next.language === 'en' ? changeLangoSet(true) : changeLangoSet(false)
  }, [i18next.language])
  console.log('changeLango', changeLango, i18next.language, state.test)

  return <>

    <div id={props.id} className='animated'>
      {
        props.title === 'Logo' ? <div></div> : <div className={props.empty ? '' : 'card'} id={props.class}>

          <span className={state.test ? 'fadeIn' : 'fadeOut'}>
            <div className='textContainer'>
              <div className='textCard '>
                {props.title}
              </div>

              <div className='textDesc '>
                {props.text}
              </div>
            </div>
          </span>

          <div style={{ position: 'relative', }}>
            {
              typeof props.image === 'object'
                ?
                <div>
                  {props.image}
                </div>
                :
                <a href={props.link} >
                  {
                    window.innerWidth < 1000 ? <></> :
                      props.empty ? <></> : <img className='imgCard' src={props.image as string} width={props.width} />
                  }
                  {
                    props.empty ? <></> :
                      <img src={link} className='svgLink' alt="phone contact" color={'white'} />
                  } {/* Anchor svg inside the image to show that is a link */}
                </a>
            }

          </div>
        </div>
      }
    </div >

    {props.line}

  </>
}

export default Card