import { useState, useEffect } from 'react'
import DisplayMenu from './DisplayMenu'
import Logo from '../Logo/Logo'
import phone from '../../assets/svg/phone.svg'
// import SmoothScroll from '../SmoothScroll/SmoothScroll'

const Menu = () => {
  const menu = ['НАЧАЛО', 'ПРОЕКТ', 'ТЕХНОЛОГИЯ', 'ЕКИП', 'НОВИНИ', 'КОНТАКТИ']

  const [colorMenu, colorMenuSet] = useState<string>('')
  const [count, countSet] = useState<number>(0)

  const clickMenu = (id: string) => {
    console.log(id)
    colorMenuSet(id)
  }

  useEffect(() => {
    const testArray = [1, 2, 3, 4, 5, 6, 7]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    testArray.forEach((value, index, arr?: unknown) =>
      setTimeout(() => // value === arr.length ? countSet(0) : 
        countSet(value), index * 1000)
    )
  }, [count === 7])

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
        <div style={{ paddingLeft: '10px', color: 'red' }}>{count}</div>
      </span>

    </div>

  </>
}

export default Menu