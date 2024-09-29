import Checkin from '../../assets/checkin.png'
import Dnd from '../../assets/dnd1.png'
import Card from '../Card/Card'
const Page = () => {
  const titles = ['Car rental check in app for full fill missing data and add credit card and additional drivers.', 'Task Drag Organizer', 'ТЕХНОЛОГИЯ', 'ЕКИП', 'НОВИНИ', 'КОНТАКТИ']
  const ids = ['Checkin Car Rental', 'Task Drag', 'ТЕХНОЛОГИЯ', 'ЕКИП', 'НОВИНИ', 'КОНТАКТИ']

  return <>
    {/* <Card id={ids[0]} title={titles[0]} image={Checkin} text='https://checkin.ben.bg' width={650} /> */}
    <Card id={ids[0]} title={titles[0]} image={Checkin} text='https://checkin.ben.bg' width={650} />
    <Card id={ids[1]} title={titles[1]} image={Dnd} text='https://www.dnd.ben.bg' />
    <Card id={ids[2]} title={titles[2]} image={Checkin} text='https://checkin.ben.bg' width={650} />
    <Card id={ids[3]} title={titles[3]} image={Dnd} text='https://checkin.ben.bg' />
    <Card id={ids[4]} title={titles[4]} image={Checkin} text='https://checkin.ben.bg' width={650} />
    <Card id={ids[5]} title={titles[5]} image={Dnd} text='https://checkin.ben.bg' />

  </>
}

export default Page