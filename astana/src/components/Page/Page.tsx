import { useEffect, useLayoutEffect, useState } from 'react';
import Card from '../Card/Card'
import { cardsData } from '../../helpers/cardsData';
import TextAbove from '../TextAbove/TextAbove';


const Page = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, scrollActiveSet] = useState<number>(0)
  useLayoutEffect(() => {
    window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY)));
    document.querySelector<HTMLElement>('#animated-text-strip')!.style.transform = `translateX(${Number(- 500)}px)`;
    document.querySelector<HTMLElement>('#animated-text-strip-reversed')!.style.transform = `translateX(${Number(500)}px)`;
    document.querySelector<HTMLElement>('#animated-text-stripOne')!.style.transform = `translateX(${Number(-500)}px)`;
    document.querySelector<HTMLElement>('#animated-text-strip-reversedOne')!.style.transform = `translateX(${Number(500)}px)`;
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY)));
    document.querySelector<HTMLElement>('#animated-text-strip')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
    document.querySelector<HTMLElement>('#animated-text-strip-reversed')!.style.transform = `translateX(${Number(-window.scrollY)}px)`;
    document.querySelector<HTMLElement>('#animated-text-stripOne')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
    document.querySelector<HTMLElement>('#animated-text-strip-reversedOne')!.style.transform = `translateX(${Number(-window.scrollY)}px)`;
    // document.querySelector<HTMLElement>('#animated-text-strip-reversedTwo')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
  }, [window.scrollY])

  return <>
    <TextAbove />

    {cardsData.map(el => <Card  {...el} />)}

  </>
}

export default Page