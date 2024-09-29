
interface CardProps {
  id: string
  title: string,
  text: string | undefined,
  image: string | undefined,
  width?: string | number | undefined
}
const Card = (props: CardProps) => {
  return <div id={props.id} className='animated'>
    <h2>
      <div style={{ paddingTop: 100 }} > {props.title} </div>
    </h2>
    <div
      style={{
        border: '3px solid #5dd39e',
        borderRadius: '12px',
        padding: '6px',
        paddingBottom: '0px',
        margin: '10px',
        display: 'inline-block',
      }}
    >
      <a href={props.text}>
        <img style={{ borderRadius: '8px' }} src={props.image} width={props.width}></img>
      </a>
    </div>
  </div>
}

export default Card