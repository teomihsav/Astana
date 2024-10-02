import { useEffect, useState } from 'react';
import Card from '../Card/Card'
import { cards } from '../../helpers/data';


const Page = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, scrollActiveSet] = useState<number>(0)
  useEffect(() => {
    window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY)));
    document.querySelector<HTMLElement>('#animated-text-strip')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
    document.querySelector<HTMLElement>('#animated-text-strip-reversed')!.style.transform = `translateX(${Number(-window.scrollY)}px)`;
    document.querySelector<HTMLElement>('#animated-text-stripOne')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
    document.querySelector<HTMLElement>('#animated-text-strip-reversedOne')!.style.transform = `translateX(${Number(-window.scrollY)}px)`;
    // document.querySelector<HTMLElement>('#animated-text-strip-reversedTwo')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
  }, [window.scrollY])

  return <>
    <div style={{ paddingTop: '0px', paddingBottom: '0%', }} >
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
      {/* <span id='animated-text-strip-reversedTwo'>
        Working with new startups and big brands. Working with new startups and big brands.
      </span> */}
    </div>

    {
      cards.map(el => <Card
        key={el.id}
        id={el.id}
        title={el.title}
        text={el.text}
        link={el.link}
        image={el.image}
        width={el.width}
        class={el.class}
      />
      )
    }

  </>
}

export default Page