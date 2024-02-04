import React, { useState } from 'react'
import DisplayMenu from './DisplayMenu'
import Logo from '../Logo/Logo'
import phone from '../../assets/svg/phone.svg'
// import SmoothScroll from '../SmoothScroll/SmoothScroll'

const Menu = () => {
  const menu = ['НАЧАЛО', 'ПРОЕКТ', 'ТЕХНОЛОГИЯ', 'ЕКИП', 'НОВИНИ', 'КОНТАКТИ']

  const [colorMenu, colorMenuSet] = useState<string>('')

  const clickMenu = (id: string) => {
    console.log(id)
    colorMenuSet(id)
  }

  return <>

    <div className='navbar ' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >

      <Logo />
      {
        menu.map(el =>
          <span key={el} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DisplayMenu el={el} clickMenu={clickMenu} colorMenu={colorMenu} />
          </span>
        )
      }
      <span style={{ display: 'flex' }}>
        <img src={phone} style={{ marginLeft: '30px' }} alt="phone contact" color={'white'} />
        <div className='phoneText'>+359 9087546436</div>
      </span>

    </div>

  </>
}

export default Menu