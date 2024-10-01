import { useEffect, useState } from 'react';
import Checkin from '../../assets/checkin.png'
import Dnd from '../../assets/dnd1.png'
import Card from '../Card/Card'


const Page = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollActive, scrollActiveSet] = useState<number>(0)
  useEffect(() => {
    window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY)));
    document.querySelector<HTMLElement>('#animated-text-strip')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
    document.querySelector<HTMLElement>('#animated-text-strip-reversed')!.style.transform = `translateX(${Number(-window.scrollY)}px)`;
    document.querySelector<HTMLElement>('#animated-text-stripOne')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
    document.querySelector<HTMLElement>('#animated-text-strip-reversedOne')!.style.transform = `translateX(${Number(-window.scrollY)}px)`;

    // document.querySelector<HTMLElement>('#animated-text-strip-reversedOne')!.style.transform = `translateX(${Number(-window.scrollY)}px)`;
  }, [window.scrollY])

  const titles = ['Logo', 'Car rental check in app for full fill missing data and add credit card and additional drivers.', 'Task Drag Organizer', 'ТЕХНОЛОГИЯ', 'ЕКИП', 'НОВИНИ', 'КОНТАКТИ']
  const ids = ['Logo', 'Checkin Car Rental', 'Task Drag', 'ТЕХНОЛОГИЯ', 'ЕКИП', 'НОВИНИ', 'КОНТАКТИ']

  return <>
    <div style={{ paddingTop: '0%', paddingBottom: '10%', }} >
      <span id='animated-text-strip'>
        Front-End Developer
      </span>
      <span id='animated-text-strip-reversed'>
        Playground - Sofia, Bulgaria :). Focused on creating interactive digital experiences on the web.
      </span>
      <span id='animated-text-strip-reversedOne'>
        Has experience with many technologies and libraries.
      </span>
      <span id='animated-text-stripOne'>
        Working with new startups and big brands.
      </span>
    </div>

    {/* <div style={{ paddingTop: '1%' }} >
      <h2 id='animated-text-stripOne'>
        Car rental check in app for full fill missing data and add credit card and additional drivers.
      </h2>
    </div> */}

    <Card id={ids[0]} title={titles[0]} image={''} text='https://checkin.ben.bg' width={450} />

    <Card id={ids[1]} title={titles[1]} image={Checkin} text='https://checkin.ben.bg' width={450} />
    <Card id={ids[2]} title={titles[2]} image={Dnd} text='https://www.dnd.ben.bg' />
    <Card id={ids[3]} title={titles[3]} image={Checkin} text='https://checkin.ben.bg' width={450} />
    <Card id={ids[4]} title={titles[4]} image={Dnd} text='https://checkin.ben.bg' />
    <Card id={ids[5]} title={titles[5]} image={Checkin} text='https://checkin.ben.bg' width={450} />
    <Card id={ids[6]} title={titles[6]} image={Dnd} text='https://checkin.ben.bg' />
  </>
}

export default Page