import { useLayoutEffect, useState } from 'react'
import DisplayMenu from './DisplayMenu'
import Logo from '../Logo/LogoBen'

const Menu = () => {
  const menu = [
    { desc: 'Logo', el: <Logo /> },
    { desc: 'Checkin Car Rental', el: '', id: 'Checkin_Car_Rental' },
    { desc: 'Task Drag', el: '', id: 'Task_Drag' },
    { desc: 'Fast Track', el: '' },
    { desc: 'ЕКИП', el: '' },
    { desc: 'НОВИНИ', el: '' },
    { desc: 'Contact', el: '' },
    { desc: '', el: '' },
  ]

  const [colorMenu, colorMenuSet] = useState<string>('')
  // const [count, countSet] = useState<number>(0)
  const [, widthInnSet] = useState<string>('')

  const clickMenu = (id: string) => {
    console.log(id)
    colorMenuSet(id)
  }

  // useEffect(() => {
  //   const testArray = [1, 2, 3, 4, 5, 6, 7]
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   testArray.forEach((value, index): unknown =>
  //     setTimeout(() => // value === arr.length ? countSet(0) : 
  //       countSet(value), index * 1000)
  //   )
  // }, [count === 7])

  useLayoutEffect(() => {
    window.addEventListener("resize", () => widthInnSet(window.innerWidth.toString()));
    console.log('Width: ', window.innerWidth)
    // widthInnSet(window.innerWidth.toString())
    // window.innerWidth > 1000
  }, [window.innerWidth])

  return <>

    {
      <div className='navbar ' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
        {
          menu.map(el =>
            <span key={el.desc} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <DisplayMenu el={el} clickMenu={clickMenu} colorMenu={colorMenu} />
            </span>
          )
        }
      </div>
    }
  </>
}

export default Menu