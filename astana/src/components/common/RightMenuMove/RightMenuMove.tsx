import rightArrow from '../../../assets/svg/arrowRight.svg'
import { useStore } from '../../../helpers/cardsData'
const RightMenuMove = () => {

  const alert = useStore.getState().alert
  const { setAlert } = useStore()

  const move = () => {
    if (useStore.getState().positionPx > -99) {
      setAlert({ left: false, right: false })
      useStore.setState({ positionPx: useStore.getState().positionPx - 100 })
      document.querySelector<HTMLElement>('.navbarIn')!.style.transform = `translateX(${useStore.getState().positionPx}px)`
      console.log('Right: ', useStore.getState().positionPx, alert)
    } else {
      setAlert({ left: false, right: true })
      console.log('End of list', alert)
    }
  }

  return <div className='contRight'>
    <div
      role='button'
      onClick={() => move()}
      className='rightMenuMove '
    >
      <img className='' src={rightArrow} alt={'arrow right'} width={24} />
    </div>
    <span className={alert.right ? 'shadowRightAlert' : 'shadowRight'}></span>
  </div>
}

export default RightMenuMove