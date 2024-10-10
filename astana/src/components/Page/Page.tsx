import { useEffect, useLayoutEffect, useState } from 'react';
import Card from '../Card/Card'
import TextAbove from '../TextAbove/TextAbove';
import Line from '../common/Line/Line';
import Contact from '../Contact/Contact';
import Checkin from '../../assets/checkin.png';
import Dnd from '../../assets/dnd1.png';
import Signage from '../../assets/signage.png';
import Damages from '../../assets/damages.png'
import Logger from '../../assets/logger.png'
import { useTranslation } from 'react-i18next';
import VoiceToText from '../common/TextToVoice/VoiceToText';
const Page = () => {
  const { t } = useTranslation()
  // function translate(key: never | string) {
  //   return i18next.t(key);
  // }

  const cardsData = [
    {
      key: '0', id: 'Logo', title: 'Logo', text: '', link: '', image: '', width: 0, class: 'animated-text-stripOneCardTitle', stand: false, empty: true,
    },
    {
      key: '1',
      id: '',
      title: '',
      text: '',
      link: '',
      image: '',
      width: '',
      class: '',
      stand: false,
      empty: true,
      line: <Line id={'Zero'} />
    },
    {
      key: '2',
      id: 'Checkin Car Rental',
      title: t('Checkin.title'),
      text: t('Checkin.desc'),
      buildTitle: t('Checkin.buildTitle'),
      build: t('Checkin.build'),
      link: 'https://checkin.ben.bg/?app=checkin',
      image: Checkin,
      width: 350,
      class: 'animated-text-stripOneCardTitle',
      stand: true,
      empty: false,
      line: <Line id={'One'} />
    },
    {
      key: '3',
      id: 'Task Drag',
      title: t('TaskDrag.title'),
      text: t('TaskDrag.desc'),
      link: 'https://www.dnd.ben.bg',
      image: Dnd,
      width: 450,
      class: 'animated-text-stripOneCardTitle',
      stand: false,
      empty: false,
      line: <Line id={'Two'} />
    },
    {
      key: '4',
      id: 'Fast Track',
      title: t('FastTrack.title'),
      text: t('FastTrack.desc'),
      link: 'https://checkin.ben.bg/?app=signage',
      image: Signage,
      width: 350,
      class: 'animated-text-stripOneCardTitle',
      stand: true,
      empty: false,
      line: <Line id={'Three'} />
    },
    {
      key: '5',
      id: 'Damages',
      title: t('Damages.title'),
      text: t('Damages.desc'),
      link: 'https://damages.ben.bg',
      image: Damages,
      width: 450,
      class: 'animated-text-stripOneCardTitle',
      stand: true,
      empty: false,
      line: <Line id={'Four'} />
    },
    {
      key: '6',
      id: 'Log Time',
      title: t('LogTime.title'),
      text: t('LogTime.desc'),
      link: '',
      image: Logger,
      width: 450,
      class: 'animated-text-stripOneCardTitle',
      stand: false,
      empty: false,
      line: <Line id={'Five'} />
    },
    {
      key: '7',
      id: 'Contact',
      title: '',
      text: '',
      link: '',
      image: <Contact />,
      width: '',
      class: '',
      stand: false,
      empty: false,
    },
    {
      key: '8',
      id: '',
      title: '',
      text: '',
      link: '',
      image: '',
      width: '',
      class: '',
      stand: false,
      empty: true,
    },
    {
      key: '9',
      id: '',
      title: '',
      text: '',
      link: '',
      image: '',
      width: '',
      class: '',
      stand: false,
      empty: true,
    },
    {
      key: '10',
      id: '',
      title: '',
      text: '',
      link: '',
      image: '',
      width: '',
      class: '',
      stand: false,
      empty: true,
    },
  ]

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

    <VoiceToText />

    <div className='para'>
      Front-End Developer
    </div>
    {/* <div className='paraOne'>
      TEXT One
    </div> */}

    {cardsData.map(el => <Card  {...el} />)}

  </>
}

export default Page