import { useState } from 'react'
import email from '../../assets/svg/email.svg'

const Contact = () => {
  const [text, textSet] = useState<string>('')

  const copyToCLipboard = () => {
    navigator.clipboard.writeText('contact@ben.bg')
    textSet('Copied')
  }

  return <div className={window.innerWidth > 900 ? 'email-text' : ''}>
    <span style={{
      position: 'absolute', bottom: '70%', fontSize: '1vw', fontWeight: 700, color: 'lightgray',
      left: 0,
      right: 0,
      marginInline: 'auto',
      width: 'fitContent',

    }}>
      {window.innerWidth > 900 ? text : ''}
    </span>

    <span
      role='button'
      className='email'
      onClick={copyToCLipboard}
      onMouseOver={() => textSet('Click to Copy')}
      onMouseLeave={() => textSet('')}
    >
      {
        window.innerWidth > 900 && <img src={email} width={'10%'} className='svgEmail' alt="phone contact" color={'white'} />
      }
      {
        window.innerWidth < 900 ?
          <img src={email} width={'100%'} style={{}} className='' alt="phone contact" color={'white'} />
          : <div className='emailText'>contact@ben.bg</div>
      }
      {/* <div style={{ paddingLeft: '10px', color: 'red' }}>{count}</div> */}
    </span>
  </div>

}

export default Contact