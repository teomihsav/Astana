import { useRef } from "react"
import { scrollToSmoothly } from "../../helpers/helpers"
import { propTypeMenu } from "../Menu/DisplayMenu"

const DropDown = ({ el, clickMenu, colorMenu }: propTypeMenu) => {
  const winHeight = useRef(window.innerHeight)
  const ref = useRef(null);

  return <div ref={ref}>
    <span
      className='menu'
      onClick={() => clickMenu(el.desc)}
    >

      {/* <span className={(elementId ? elementId : colorMenu === el) && (scrollEl > 267 && currentScroll > scrollEl) ? 'underline' : 'underlineHover'}  > */}
      {/* <span className={(colorMenu === el) ? 'underline' : 'underlineHover'}  > */}
      <span>
        <span
          className={colorMenu === el.desc ? el.desc === 'Logo' ? 'logoUnderline' : 'underline' : el.desc === 'Logo' ? 'logoUnderline' : 'underlineHover'}
          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault()
            const element = document.getElementById(el.desc)
            scrollToSmoothly(Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2), 900)
          }}
        >
          {el.desc === 'Logo' ? el.el : 'o'}
        </span>

      </span>
    </span>

    {/* {elementId} */}

  </div>
}

export default DropDown