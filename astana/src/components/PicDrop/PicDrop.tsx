// import Logo from '../../assets/logo1.png'
import { useEffect } from 'react'
import me from '../../assets/meSm.jpg'

const PicDrop = () => {

  useEffect(() => {
    // document.querySelector<HTMLElement>('.contPic')!.style.setProperty('--x', `${10}%`),

    //  const zoomContainer = document.querySelector('.zoom-container');
    // const zoomImage = document.querySelector('.zoom-image');
    const zoomContainer = document.querySelector<HTMLElement>('.contPic')
    const zoomImage = document.querySelector<HTMLElement>('.picDrop')

    zoomContainer?.addEventListener('click', function (event) {
      const rect = zoomContainer.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;  // Get the X percent
      const y = ((event.clientY - rect.top) / rect.height) * 100;  // Get the Y percent

      if (!zoomContainer.classList.contains('zoomed')) {
        zoomImage!.style.setProperty('--x', `${x}%`);
        zoomImage!.style.setProperty('--y', `${y}%`);
        zoomContainer.classList.add('zoomed');
      } else {
        zoomContainer.classList.remove('zoomed'); // Toggle off zoom
      }
    });
  })

  return (
    <div>
      <img className='picDrop' width='300' src={me} alt={'picDrop'} />
    </div>
  )
}

export default PicDrop