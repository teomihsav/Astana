import { useState, useEffect } from 'react'
import DisplayMenu from './DisplayMenu'
import Logo from '../Logo/Logo'
// import phone from '../../assets/svg/phone.svg'
import email from '../../assets/svg/email.svg'
// import SmoothScroll from '../SmoothScroll/SmoothScroll'

const Menu = () => {
  const menu = ['НАЧАЛО', 'ПРОЕКТ', 'ТЕХНОЛОГИЯ', 'ЕКИП', 'НОВИНИ', 'КОНТАКТИ']

  const [colorMenu, colorMenuSet] = useState<string>('')
  const [count, countSet] = useState<number>(0)
  const [text, textSet] = useState<string>('')

  const clickMenu = (id: string) => {
    console.log(id)
    colorMenuSet(id)
  }
  const copyToCLipboard = () => {
    navigator.clipboard.writeText('contact@ben.bg')
    textSet('Copied')
  }
  useEffect(() => {
    const testArray = [1, 2, 3, 4, 5, 6, 7]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    testArray.forEach((value, index): unknown =>
      setTimeout(() => // value === arr.length ? countSet(0) : 
        countSet(value), index * 1000)
    )
  }, [count === 7])



  return <>

    <div className='navbar ' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >

      <Logo />
      <Logo />
      {
        menu.map(el =>
          <span key={el} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DisplayMenu el={el} clickMenu={clickMenu} colorMenu={colorMenu} />
          </span>
        )
      }

      <div style={{ position: 'relative', }}>

        <span style={{
          position: 'absolute', bottom: '25px', fontSize: '12px', fontWeight: 700, color: 'gray',
          left: 0,
          right: 0,
          marginInline: 'auto',
          width: 'fitContent',

        }}>
          {text}
        </span>

        <span
          role='button'
          className='email'
          onClick={copyToCLipboard}
          onMouseOver={() => textSet('Click to Copy')}
          onMouseLeave={() => textSet('')}
        >
          <img src={email} style={{ marginLeft: '30px', marginRight: '5px' }} alt="phone contact" color={'white'} />
          <div className='phoneText'>contact@ben.bg</div>
          {/* <div style={{ paddingLeft: '10px', color: 'red' }}>{count}</div> */}
        </span>

      </div>

    </div>

  </>
}

export default Menu