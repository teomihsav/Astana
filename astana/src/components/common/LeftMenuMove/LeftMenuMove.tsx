import leftArrow from '../../../assets/svg/arrowLeft.svg'
import { useStore } from '../../../helpers/cardsData'

const LeftMenuMove = () => {

  const move = () => {
    useStore.setState({ positionPx: useStore.getState().positionPx + 50 })
    document.querySelector<HTMLElement>('.navbarIn')!.style.transform = `translateX(${useStore.getState().positionPx}px)`
    console.log('Left: ', useStore.getState().positionPx)
  }
  return <>
    <div
      role='button'
      onClick={() => move()}
      className='leftMenuMove '
    >
      <img className='' src={leftArrow} alt={'arrow left'} width={24} />
    </div>
  </>
}

export default LeftMenuMove