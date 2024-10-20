// import Projects from "../MenuLeftBtn/Projects"

import { useState } from "react"

const MenuMobileButton = () => {
  const [backDrop, backDropSet] = useState<boolean>(false)

  console.log(backDrop)

  return <>
    <div
      className='menuMobile '
      onClick={() => backDropSet(!backDrop)}
    >
      {backDrop ? <div className='x'></div> : <>
        <div className='menuMobileLines'></div>
        <div className='menuMobileLines'></div>
        <div className='menuMobileLines'></div>
      </>
      }
    </div>
  </>
}

export default MenuMobileButton