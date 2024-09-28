import React, { } from 'react'
import { scrollToSmoothly } from '../../helpers/helpers'

type propTypeMenu = {
  el: string
  clickMenu: (id: string) => void
  colorMenu: string
}
const DisplayMenu = ({ el, clickMenu, colorMenu }: propTypeMenu) => {

  return <>

    <span
      style={{ color: 'white', fontSize: '14px', fontWeight: 700, marginRight: '20px' }}
      onClick={() => clickMenu(el)}
    >

      <span className={colorMenu === el ? 'underline' : 'underlineHover'}  >

        <span style={{ color: 'gray', }} className={colorMenu === el ? 'underline' : 'underlineHover'}
          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault()
            const element = document.getElementById(el)
            // element?.scrollIntoView({ behavior: 'smooth' })
            // scrollToSmoothly(0, 500)
            scrollToSmoothly(element?.offsetTop as number, 300)
          }}
        >
          {el}
        </span>

      </span>
    </span>

  </>
}

export default DisplayMenu