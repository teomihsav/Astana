
interface CardProps {
  id: string
  title: string,
  text: string | undefined,
  image: string | undefined,
  width?: string | number | undefined
}
const Card = (props: CardProps) => {
  return <>
    <div id={props.id} className='animated'>
      <h2>
        <div style={{ marginTop: '100px' }} > {props.title === 'Logo' ? <></> : props.title} </div>
      </h2>
      {props.title === 'Logo' ? <></> :
        <div
          style={{
            borderRadius: '12px',
            padding: '70px',
            paddingBottom: '60px',
            display: 'inline-block',
            background: '#333',
          }}
        >
          <a href={props.text}>
            <img style={{ borderRadius: '8px', border: '3px solid #5dd39e', boxShadow: '0px 0px 20px 0px black' }} src={props.image} width={props.width}></img>
          </a>
        </div>
      }
    </div>
  </>
}

export default Card