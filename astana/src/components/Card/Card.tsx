import link from '../../assets/svg/link.svg'

interface CardProps {
  id: string
  title: string,
  text: string | undefined,
  image: string | undefined,
  width?: string | number | undefined
  class: string
  link: string
}
const Card = (props: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [scrollActive, scrollActiveSet] = useState<number>(0)
  // useEffect(() => {
  //   window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY)));
  //   document.querySelector<HTMLElement>('#animated-text-stripOneCardTitle')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
  // }, [window.scrollY])

  return <div>

    <div id={props.id} className='animated'>
      {/* <div style={{ marginTop: '100px' }} > {props.title === 'Logo' ? <></> : <></>} </div> */}
      {props.title === 'Logo' ? <></> :
        <div className='card'
          id={props.class}
        >
          <div className='textCard'>
            {props.title}
          </div>

          <a href={props.link} >
            <img src={link} className='svgLink' alt="phone contact" color={'white'} />
            <img className='imgCard' src={props.image} width={props.width} />
          </a>
        </div>
      }
    </div>
  </div>
}

export default Card