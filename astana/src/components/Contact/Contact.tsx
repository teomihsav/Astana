import { useLayoutEffect, useState } from 'react'
import email from '../../assets/svg/email.svg'

const Contact = () => {
  const [text, textSet] = useState<string>('')
  const [, widthInnSet] = useState<string>('')

  useLayoutEffect(() => {
    window.addEventListener("resize", () => widthInnSet(window.innerWidth.toString()));
    // console.log('Width: ', window.innerWidth)
    // widthInnSet(window.innerWidth.toString())
    // window.innerWidth > 1000
  }, [window.innerWidth])

  const copyToCLipboard = () => {
    navigator.clipboard.writeText('contact@ben.bg')
    textSet('Copied')
  }

  return <div className={window.innerWidth > 1000 ? 'email-text' : 'email-text'}>
    <span className='textPopUp'>
      {/* {window.innerWidth > 1000 ? text : ''} */}
      <div className='textPopUpCont'>
        {text}
      </div>
    </span>

    <span
      role='button'
      className='email'
      onClick={copyToCLipboard}
      onMouseOver={() => textSet('Click to Copy')}
      onMouseLeave={() => textSet('')}
    >
      {
        // window.innerWidth > 1000 && 
        <img src={email} width={'10%'} className='svgEmail' alt="phone contact" color={'white'} />
      }
      {
        // window.innerWidth < 1000 ?
        // <img src={email} width={'100%'} style={{}} className='' alt="phone contact" color={'white'} />
        // : 
        <div className='emailText'>contact@ben.bg</div>
      }
    </span>
  </div>

}

export default Contact