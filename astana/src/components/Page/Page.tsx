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
import Pap from '../../assets/pap1.png'
import Cargo from '../../assets/cargo.png'
import { useTranslation } from 'react-i18next';
import Projects from '../common/MenuLeftBtn/Projects';
// import VoiceToText from '../common/TextToVoice/VoiceToText';
const Page = () => {
  const { t } = useTranslation()
  const [, widthInnSet] = useState<string>('')
  // function translate(key: never | string) {
  //   return i18next.t(key);
  // }

  const cardsData = [
    {
      key: '0',
      id: 'Logo',
      title: 'Logo',
      text: '',
      link: '',
      image: '',
      width: 0,
      class: 'animated-text-stripOneCardTitle', stand: false,
      empty: true,
      line: <Line id={'ZeroZ'} />

    },
    {
      key: '1',
      id: 'Portfolio',
      title: t('Portfolio.title'),
      text: t('Portfolio.desc'),
      buildTitle: t('Portfolio.buildTitle'),
      build: t('Portfolio.build'),
      link: '',
      image: false,
      width: '',
      class: 'animated-text-stripOneCardTitle',
      stand: false,
      empty: false,
      line: <Line id={'Zero'} />
    },
    {
      key: '2.1',
      id: 'Learning',
      title: t('Learning.title'),
      text: t('Learning.desc'),
      buildTitle: t('Learning.buildTitle'),
      build: t('Learning.build'),
      link: '',
      image: Pap,
      width: '',
      class: 'animated-text-stripOneCardTitle',
      stand: false,
      empty: false,
      line: <Line id={'Zero'} />
    },
    {
      key: '2',
      id: 'Check car rental',
      title: t('Check.title'),
      text: t('Check.desc'),
      buildTitle: t('Check.buildTitle'),
      build: t('Check.build'),
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
      id: 'Task drag',
      title: t('TaskDrag.title'),
      text: t('TaskDrag.desc'),
      buildTitle: t('TaskDrag.buildTitle'),
      build: t('TaskDrag.build'),
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
      buildTitle: t('FastTrack.buildTitle'),
      build: t('FastTrack.build'),
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
      buildTitle: t('Damages.buildTitle'),
      build: t('Damages.build'),
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
      id: 'Log time',
      title: t('LogTime.title'),
      text: t('LogTime.desc'),
      buildTitle: t('LogTime.buildTitle'),
      build: t('LogTime.build'),
      link: '',
      image: Logger,
      width: 450,
      class: 'animated-text-stripOneCardTitle',
      stand: false,
      empty: false,
      line: <Line id={'Five'} />
    },
    {
      key: '6.5',
      id: 'Cargo',
      title: t('Cargo.title'),
      text: t('Cargo.desc'),
      buildTitle: t('Cargo.buildTitle'),
      build: t('Cargo.build'),
      link: 'http://dev.amartan.eu',
      image: Cargo,
      width: 650,
      class: 'animated-text-stripOneCardTitle',
      stand: false,
      empty: false,
      line: <Line id={'Six'} />
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
      empty: true,
      // line: <Line id={'Five'} />
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
  useLayoutEffect(() => {
    window.addEventListener("resize", () => widthInnSet(window.innerWidth.toString()));
    widthInnSet(window.innerWidth.toString())
  }, [window.innerWidth])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, scrollActiveSet] = useState<number>(0)

  useLayoutEffect(() => {
    window.innerWidth > 1100 && (window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY))),
      document.querySelector<HTMLElement>('#animated-text-strip')!.style.transform = `translateX(${Number(- 500)}px)`,
      document.querySelector<HTMLElement>('#animated-text-strip-reversed')!.style.transform = `translateX(${Number(500)}px)`,
      document.querySelector<HTMLElement>('#animated-text-stripOne')!.style.transform = `translateX(${Number(-500)}px)`,
      document.querySelector<HTMLElement>('#animated-text-strip-reversedOne')!.style.transform = `translateX(${Number(500)}px)`
    )
  }, [])

  useEffect(() => {
    window.innerWidth > 1100 && (window.addEventListener("scroll", () => scrollActiveSet(Number(window.scrollY))),
      document.querySelector<HTMLElement>('#animated-text-strip')!.style.transform = `translateX(${Number(window.scrollY)}px)`,
      document.querySelector<HTMLElement>('#animated-text-strip-reversed')!.style.transform = `translateX(${Number(-window.scrollY)}px)`,
      document.querySelector<HTMLElement>('#animated-text-stripOne')!.style.transform = `translateX(${Number(window.scrollY)}px)`,
      document.querySelector<HTMLElement>('#animated-text-strip-reversedOne')!.style.transform = `translateX(${Number(-window.scrollY)}px)`
      // document.querySelector<HTMLElement>('#animated-text-strip-reversedTwo')!.style.transform = `translateX(${Number(window.scrollY)}px)`;
    )
  }, [window.scrollY])

  return <>

    {(window.innerWidth > 1750) ? <Projects /> : <></>}
    {/* {(window.innerWidth > 1750) ? <Profile /> : <></>} */}
    <TextAbove />

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