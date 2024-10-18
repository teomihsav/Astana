// import { useTranslation } from "react-i18next"
import MenuLeftDropDown from "./ProjectsDropDown/ProjectsDropDown"
import chevronDown from "../../../assets/svg/chevronDown.svg"
import MenuTransformation from "./MenuTransformation/MenuTransformation"

const Projects = () => {
  // const { t } = useTranslation()
  // const [swap, swapSet] = useState<boolean>(true)

  return <div className="leftMenuProjectsCont">

    <div
      // role='button'
      // onClick={() => swapSet(!swap)}
      className='leftMenuProjects '
    >
      Projects
      <img className='leftMenuChevron' src={chevronDown} alt={'chevron down'} />
    </div>

    <MenuLeftDropDown />

    <MenuTransformation />
  </div>
}

export default Projects