import { useEffect } from 'react'
import link from '../../assets/svg/link.svg'
import { CardProps } from '../../types/types'


const Card = (props: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [scrollActive, scrollActiveSet] = useState<number>(0)
  // const [elem, elemSet] = useState<number>(0)
  // const [bol, bolSet] = useState<number>(0)

  // const winHeight = useRef(window.innerHeight)
  useEffect(() => {

  }, [window.innerWidth < 1000])

  return <>

    <div id={props.id} className='animated'>
      {
        props.title === 'Logo' ? <div></div> : <div className={props.empty ? '' : 'card'} id={props.class}>


          <div className='textContainer'>
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
                    window.innerWidth < 1000 ? <></> :
                      props.empty ? <></> : <img className='imgCard' src={props.image as string} width={props.width} />
                  }
                  {
                    props.empty ? <></> :
                      <img src={link} className='svgLink' alt="phone contact" color={'white'} />
                  } {/* Anchor svg inside the image to show that is a link */}
                </a>
            }

          </div>
        </div>
      }
    </div >

    {props.line}

  </>
}

export default Card