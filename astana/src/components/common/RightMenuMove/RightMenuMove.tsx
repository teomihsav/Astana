import { } from 'react'
import rightArrow from '../../../assets/svg/arrowRight.svg'
import { useStore } from '../../../helpers/cardsData'
const RightMenuMove = () => {

  const move = () => {
    useStore.setState({ positionPx: useStore.getState().positionPx - 50 })
    document.querySelector<HTMLElement>('.navbarIn')!.style.transform = `translateX(${useStore.getState().positionPx}px)`
    console.log('Right: ', useStore.getState().positionPx)
  }

  return <>
    <div
      role='button'
      onClick={() => move()}
      // onMouseLeave={() => swapSet(-10)}
      className='rightMenuMove '
    >
      <img className='' src={rightArrow} alt={'arrow right'} width={24} />
    </div>
  </>
}

export default RightMenuMove