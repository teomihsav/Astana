import { ReactNode } from 'react'
import link from '../../assets/svg/link.svg'

interface CardProps {
  id: string
  title: string,
  text: string | undefined,
  image: string | ReactNode,
  width?: string | number | undefined
  class: string
  link: string
}
const Card = (props: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [scrollActive, scrollActiveSet] = useState<number>(0)

  // const winHeight = useRef(window.innerHeight)
  // useEffect(() => {
  //   // const element = document.querySelector<HTMLElement>('.textDesc')
  //   window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY)));
  //   document.querySelector<HTMLElement>('.textDesc')!.style.transform = `translateY(${Number(window.scrollY <= 230 ? 100 : window.scrollY)}px)`;
  // }, [window.scrollY])

  return <div id={props.id} className='animated'>
    {/* <div style={{ marginTop: '100px', marginBottom: '100px', }} > {props.title === 'Logo' ? <></> : <></>} </div> */}
    {
      props.title === 'Logo' ? <></> : <div className='card' id={props.class}>

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
                <img className='imgCard' src={props.image as string} width={props.width} />
                <img src={link} className='svgLink' alt="phone contact" color={'white'} /> {/* Anchor svg inside the image to show that is a link */}
              </a>
          }
        </div>

      </div>
    }
    {/* {window.scrollY} */}
  </div>
}

export default Card