import { useState } from "react"
// import { useTranslation } from "react-i18next"
import MenuLeftDropDown from "./MenuLeftDropDown/MenuLeftDropDown"
// import MenuLeftDropDownTest from "./MenuLeftDropDownTest/MenuLeftDropDownTest"
import chevronDown from "../../../assets/svg/chevronDown.svg"

const LangButton = () => {
  // const { t } = useTranslation()
  const [swap, swapSet] = useState<boolean>(true)

  return <>
    <div
      role='button'
      onClick={() => swapSet(!swap)}
      className='leftMenuBtn '
    >
      Projects
      <img className='leftMenuChevron' src={chevronDown} alt={'chevron down'} />
    </div>
    {/* <div
      role='button'
      onClick={() => swapSet(!swap)}
      className='leftMenuBtnTest '
    >
      Test
    </div> */}
    <MenuLeftDropDown />
    {/* <MenuLeftDropDownTest /> */}

  </>
}

export default LangButton