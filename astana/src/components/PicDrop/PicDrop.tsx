// import Logo from '../../assets/logo1.png'
import { useEffect, useState } from 'react'
import me from '../../assets/meSm.jpg'

const PicDrop = () => {
  const [nameBool, nameBoolSet] = useState<boolean>()

  useEffect(() => {
    // document.querySelector<HTMLElement>('.contPic')!.style.setProperty('--x', `${10}%`),

    const zoomContainer = document.querySelector<HTMLElement>('.contPic')
    const zoomImage = document.querySelector<HTMLElement>('.picDrop')

    zoomContainer?.addEventListener('click', function (event) {

      const rect = zoomContainer.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      if (!zoomContainer.classList.contains('zoomed')) {
        zoomImage!.style.setProperty('--x', `${x}%`);
        zoomImage!.style.setProperty('--y', `${y}%`);
        zoomContainer.classList.add('zoomed');
      } else {
        zoomContainer.classList.remove('zoomed');
      }
    });
  }, [])

  useEffect(() => {
    nameBool ? document.querySelector<HTMLElement>('.animatedText')!.style.color = '#b2b2b2' : document.querySelector<HTMLElement>('.animatedText')!.style.color = '#464646'
  })

  return (
    <div>
      <img
        className='picDrop'
        onClick={() => nameBoolSet(!nameBool)}
        width='300'
        src={me}
        alt={'picDrop'}
      />
    </div>
  )
}

export default PicDrop