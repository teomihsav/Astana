import React, { } from 'react'

type propTypeMenu = {
  el: string
  clickMenu: (id: string) => void
  colorMenu: string
}
const DisplayMenu = ({ el, clickMenu, colorMenu }: propTypeMenu) => {

  return <>
    <span style={{ fontSize: '14px', fontWeight: 700, marginRight: '20px' }} onClick={() => clickMenu(el)}>
      <span className={colorMenu === el ? 'underline' : 'underlineHover'}  >
        {el}
      </span>
    </span>

  </>
}

export default DisplayMenu