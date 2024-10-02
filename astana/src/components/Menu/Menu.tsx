import { useEffect, useState } from 'react'
import DisplayMenu from './DisplayMenu'
import Logo from '../Logo/LogoBen'
// import phone from '../../assets/svg/phone.svg'
import email from '../../assets/svg/email.svg'
import DropDown from '../DropDown/DropDown'
// import SmoothScroll from '../SmoothScroll/SmoothScroll'

const Menu = () => {
  const menu = [
    { desc: 'Logo', el: <Logo /> },
    { desc: 'Checkin Car Rental', el: '' },
    { desc: 'Task Drag', el: '' },
    { desc: 'ТЕХНОЛОГИЯ', el: '' },
    { desc: 'ЕКИП', el: '' },
    { desc: 'НОВИНИ', el: '' },
    { desc: 'КОНТАКТИ', el: '' },
  ]

  const [colorMenu, colorMenuSet] = useState<string>('')
  // const [count, countSet] = useState<number>(0)
  const [text, textSet] = useState<string>('')

  const clickMenu = (id: string) => {
    console.log(id)
    colorMenuSet(id)
  }
  const copyToCLipboard = () => {
    navigator.clipboard.writeText('contact@ben.bg')
    textSet('Copied')
  }
  // useEffect(() => {
  //   const testArray = [1, 2, 3, 4, 5, 6, 7]
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   testArray.forEach((value, index): unknown =>
  //     setTimeout(() => // value === arr.length ? countSet(0) : 
  //       countSet(value), index * 1000)
  //   )
  // }, [count === 7])

  // useEffect(() => {
  //   window.innerWidth > 900
  // })
  return <>

    {
      window.innerWidth > 900 ? <div className='navbar ' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
        {
          menu.map(el =>
            <span key={el.desc} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <DisplayMenu el={el} clickMenu={clickMenu} colorMenu={colorMenu} />
            </span>
          )
        }

        <div className='email-text'>

          <span style={{
            position: 'absolute', bottom: '70%', fontSize: '1vw', fontWeight: 700, color: 'lightgray',
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
            <img src={email} width={'10%'} className='svgEmail' alt="phone contact" color={'white'} />
            <div className='phoneText'>contact@ben.bg</div>
            {/* <div style={{ paddingLeft: '10px', color: 'red' }}>{count}</div> */}
          </span>

        </div>
      </div>
        : <>
          {
            menu.map(el =>
              // <div key={el.desc} >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <DropDown title={el.desc} />
              </div>
              // </div>
            )
          }
        </>
    }
  </>
}

export default Menu