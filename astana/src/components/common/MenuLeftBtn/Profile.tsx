// import { useTranslation } from "react-i18next"
import MenuLeftDropDown from "./ProjectsDropDown/ProjectsDropDown"
import chevronDown from "../../../assets/svg/chevronDown.svg"

const Profile = () => {
  // const { t } = useTranslation()
  // const [swap, swapSet] = useState<boolean>(true)

  return <>

    <span
      // role='button'
      // onClick={() => swapSet(!swap)}
      className='leftMenuBtnProfile'
    >
      Profile
      <img className='leftMenuChevron' src={chevronDown} alt={'chevron down'} />
    </span>


    <MenuLeftDropDown />

  </>
}

export default Profile