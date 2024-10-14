import { useEffect } from 'react'
import leftArrow from '../../../assets/svg/arrowLeft.svg'
import { useStore } from '../../../helpers/cardsData'

const LeftMenuMove = () => {

  const alert = useStore.getState().alert
  const { setAlert } = useStore()

  useEffect(() => {
    document.querySelector<HTMLElement>('.navbarIn')!.style.transform = `translateX(${useStore.getState().positionPx}px)`
  }, [])
  const move = () => {
    if (useStore.getState().positionPx < 99) {
      setAlert({ left: false, right: false })
      useStore.setState({ positionPx: useStore.getState().positionPx + 100 })
      document.querySelector<HTMLElement>('.navbarIn')!.style.transform = `translateX(${useStore.getState().positionPx}px)`
      console.log('Left: ', useStore.getState().positionPx)
    } else {
      setAlert({ left: true, right: false })
      console.log('End of list', alert)
    }
  }

  return <div className='contLeft'>
    <div
      role='button'
      onClick={() => move()}
      className='leftMenuMove '
    >
      <img className='' src={leftArrow} alt={'arrow left'} width={24} />
    </div>
    <span className={alert.left ? 'shadowLeftAlert' : 'shadowLeft'}></span>
  </div>
}

export default LeftMenuMove