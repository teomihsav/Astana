import { useEffect, useState } from 'react'

const Line = (props: { id: string }) => {

  const [, scrollActiveSet] = useState<number>(0)
  const [, elemSet] = useState<number>(0)
  const [bol, bolSet] = useState<number>(0)

  // const winHeight = useRef(window.innerHeight)

  // useEffect(() => {
  //   const el = document.querySelector<HTMLElement>('#' + props.id)
  //   console.log('elem', props.id, el)
  // }, [props.id])

  useEffect(() => {
    // const element = document.querySelector<HTMLElement>('.textDesc')
    // document.querySelector<HTMLElement>('.textDesc')!.style.transform = `translateY(${Number(window.scrollY <= 230 ? 100 : window.scrollY)}px)`;

    window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY)));
    const el = document.querySelector<HTMLElement>('#' + props.id)
    // console.log('elem', props.id, el)
    elemSet(Number(el))
    function isScrolledIntoView(el: HTMLElement) {
      const rect = el.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;

      // Only completely visible elements return true:
      const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
      // Partially visible elements return true:
      //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    }

    // console.log('isScrolledIntoView', isScrolledIntoView(el))
    bolSet(Number(isScrolledIntoView(el as HTMLElement)))
  }, [window.scrollY])

  return <div id={props.id} className='lineContainer'>
    <div className={bol ? 'lineMove' : 'line'} />
  </div>
}

export default Line