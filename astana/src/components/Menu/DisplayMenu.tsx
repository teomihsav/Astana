import React, { } from 'react'

type propTypeMenu = {
  el: string
  clickMenu: (id: string) => void
  colorMenu: string
}
const DisplayMenu = ({ el, clickMenu, colorMenu }: propTypeMenu) => {

  // const refLink = useRef<HTMLDivElement | null>(null)
  function scrollToSmoothly(pos: number, time: number | null) {
    const currentPos = window.pageYOffset;
    let start: number | null = null;
    if (time == null) time = 500;
    pos = +pos, time = +time;
    window.requestAnimationFrame(function step(currentTime) {
      start = !start ? currentTime : start;
      const progress = currentTime - start;
      if (currentPos < pos) {
        window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
      } else {
        window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
      }
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, pos);
      }
    });
  }

  return <>

    <span
      style={{ color: 'white', fontSize: '14px', fontWeight: 700, marginRight: '20px' }}
      onClick={() => clickMenu(el)}
    >

      <span className={colorMenu === el ? 'underline' : 'underlineHover'}  >

        <span style={{ color: 'white', }} className={colorMenu === el ? 'underline' : 'underlineHover'}
          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault()
            const element = document.getElementById(el)
            console.log('element: ', element)
            // element?.scrollIntoView({ behavior: 'smooth' })
            // scrollToSmoothly(0, 500)
            scrollToSmoothly(element.offsetTop, 300)
          }}
        >
          {el}
        </span>

      </span>
    </span>

  </>
}

export default DisplayMenu