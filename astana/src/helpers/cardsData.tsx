import Checkin from '../assets/checkin.png'
import Dnd from '../assets/dnd1.png'
import Signage from '../assets/signage.png'
import Contact from '../components/Contact/Contact'
import Line from '../components/common/Line/Line'
import Damages from '../assets/damages.png'
import Logger from '../assets/logger.png'
import en from '../assets/en.png'
import bg from '../assets/bg.png'

export const state = {
  lang: 'en',
}

export const cardsData = [
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
    title: 'Car rental check in app for full fill missing data and add credit card and additional drivers.',
    text: 'Automation web app for updating client personal data and adding additional drivers for the current hired vehicles. The web app is created from scratch with Vite, React and context for app state store. Within 6 steps ( with "back" and "continue" buttons for navigation with auto save on every move ) the client can edit his personal data, driver license data, contact details data, reservation details data, add/edit/delete additional drivers, add payment method and preview all changed data. Calendars, countries in select and rest forms are translated to 5 languages with i18n.',
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
    title: 'Task Drag Organizer ',
    text: 'Task drag organizer. For store app state used Redux. For drag and drop is used DND library. Many custom hooks are in play.',
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
    title: 'Clients rented cars pick up shown on screen',
    text: 'Automation web app for showing clients their ready for taken hired vehicles. The web app is created from scratch with Vite, React. On the airport company counter TV are displayed names of clients which vehicles are ready for taking. The web app generates pages end rows dynamically depending how many clients vehicles are ready in the current hour, TV resolution is changed or zoom in the browser is changed and after the last “n” pages sticks a map page at the end.',
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
    title: 'Damages',
    text: 'Automation web app for describing vehicle damages before check out and after check in. The app is created from scratch with Vite, React and context for app state store',
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
    title: 'Log Time',
    text: 'App for logging time on a working projects.',
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

export const languages = {
  en: en,
  bg: bg,
}