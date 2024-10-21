// import Projects from "../MenuLeftBtn/Projects"

import { useState } from "react"
import { useStore } from "../../../helpers/cardsData"

const MenuMobileButton = () => {
  const [backDrop, backDropSet] = useState<boolean>(false)

  // const { setBackDrop } = useStore()

  const change = () => {
    backDropSet(!backDrop)
    useStore.setState({ backDrop: !useStore.getState().backDrop })
    // setBackDrop({ backDrop: !useStore.getState().backDrop })
  }
  // console.log(backDrop)

  return <>
    <div
      className='menuMobile '
      onClick={change}
    >
      {backDrop ? <div className='x '></div> : <>
        <div className='menuMobileLines'></div>
        <div className='menuMobileLines'></div>
        <div className='menuMobileLines'></div>
      </>
      }
    </div>
  </>
}

export default MenuMobileButton