import { useEffect, useRef, useState } from 'react'
import link from '../../assets/svg/link.svg'
import { CardProps } from '../../types/types'


const Card = (props: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollActive, scrollActiveSet] = useState<number>(0)
  const [elem, elemSet] = useState<number>(0)
  const [bol, bolSet] = useState<number>(0)

  const winHeight = useRef(window.innerHeight)
  // useEffect(() => {
  //   // const element = document.querySelector<HTMLElement>('.textDesc')
  //   window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY)));
  //   document.querySelector<HTMLElement>('.textDesc')!.style.transform = `translateY(${Number(window.scrollY <= 230 ? 100 : window.scrollY)}px)`;
  //   const el = document.querySelector<HTMLElement>('#animated-text-stripOneCardTitleOne')!;
  //   elemSet(Number(el))
  //   function isScrolledIntoView(el: HTMLElement) {
  //     const rect = el.getBoundingClientRect();
  //     const elemTop = rect.top;
  //     const elemBottom = rect.bottom;

  //     // Only completely visible elements return true:
  //     const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  //     // Partially visible elements return true:
  //     //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  //     return isVisible;
  //   }

  //   console.log('isScrolledIntoView', isScrolledIntoView(el))
  //   bolSet(Number(isScrolledIntoView(el)))
  // }, [window.scrollY])


  return <div>

    {/* {'Element: '} : {elem}
    {'WinHeight '}: {winHeight.current} '   '
    {'Scroll '}:{window.scrollY} '   '
    {'Result '}:{winHeight.current - window.scrollY} */}

    <div id={props.id} className='animated'>
      {/* <div style={{ marginTop: '100px', marginBottom: '100px', }} > {props.title === 'Logo' ? <></> : <></>} </div> */}
      {
        props.title === 'Logo' ? <></> : <div className={props.empty ? '' : 'card'} id={props.class}>

          <div>
            <div className='textCard'>
              {props.title}
            </div>

            <div className='textDesc'>
              {props.text}
            </div>
          </div>

          <div style={{ position: 'relative', }}>
            {
              typeof props.image === 'object'
                ?
                <div>
                  {props.image}
                </div>
                :
                <a href={props.link} >
                  {
                    props.empty ? <></> : <img className='imgCard' src={props.image as string} width={props.width} />
                  }
                  {
                    props.empty ? <></> : <img src={link} className='svgLink' alt="phone contact" color={'white'} />
                  } {/* Anchor svg inside the image to show that is a link */}
                </a>
            }
          </div>

        </div>
      }
    </div>

    {props.line}

  </div>
}

export default Card