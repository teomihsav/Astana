import { useLayoutEffect, useState } from 'react'
import DisplayMenu from './DisplayMenu'
import Logo from '../Logo/LogoBen'
import LangDropDown from '../common/LangDropDown/LangDropDown'
import { useTranslation } from 'react-i18next'
import LangButton from '../common/LangButton/LangButton'

const Menu = () => {
  const { t } = useTranslation()

  const menu = [
    { desc: 'Logo', el: 'Logo', id: <Logo /> },
    { desc: t("CheckinCarRental"), el: 'Checkin Car Rental', },
    { desc: t('TaskDrag'), el: 'Task Drag', },
    { desc: t('FastTrack'), el: 'Fast Track' },
    { desc: t('Damages'), el: 'Damages' },
    { desc: t('LogTime'), el: 'Log Time' },
    { desc: t('Contact'), el: 'Contact' },
    // { desc: 'Lang', el: <LangDropDown /> },
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
    // console.log('Width: ', window.innerWidth)
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
    <LangButton />
  </>
}

export default Menu