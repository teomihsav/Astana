import Checkin from '../assets/checkin.png'
import Dnd from '../assets/dnd1.png'
import Signage from '../assets/signage.png'
import Contact from '../components/Contact/Contact'

export const cards = [
  {
    id: 'Logo', title: 'Logo', text: '', link: '', image: '', width: 0, class: 'animated-text-stripOneCardTitle'
  },
  {
    id: 'Checkin Car Rental',
    title: 'Car rental check in app for full fill missing data and add credit card and additional drivers.',
    text: 'Automation web app for updating client personal data and adding additional drivers for the current hired vehicles. The web app is created from scratch with Vite, React and context for app state store. Within 6 steps ( with "back" and "continue" buttons for navigation with auto save on every move ) the client can edit his personal data, driver license data, contact details data, reservation details data, add/edit/delete additional drivers, add payment method and preview all changed data. Calendars, countries in select and rest forms are translated to 5 languages with i18n.',
    link: 'https://checkin.ben.bg', image: Checkin, width: 450, class: 'animated-text-stripOneCardTitle',
    stand: true
  },
  {
    id: 'Task Drag',
    title: 'Task Drag Organizer ',
    text: 'Task drag organizer. For store app state used Redux. For drag and drop is used DND library. Many custom hooks are in play.', link: 'https://www.dnd.ben.bg', image: Dnd, width: '', class: 'animated-text-stripOneCardTitle',
    stand: false
  },
  {
    id: 'Fast Track',
    title: 'Clients rented cars pick up shown on screen',
    text: 'Automation web app for showing clients their ready for taken hired vehicles. The web app is created from scratch with Vite, React. On the airport company counter TV are displayed names of clients which vehicles are ready for taking. The web app generates pages end rows dynamically depending how many clients vehicles are ready in the current hour, TV resolution is changed or zoom in the browser is changed and after the last “n” pages sticks a map page at the end.', link: 'https://checkin.ben.bg/?app=signage',
    image: Signage,
    width: 450,
    class: 'animated-text-stripOneCardTitle',
    stand: true
  },
  {
    id: 'Contact',
    title: '',
    text: '',
    link: '',
    image: <Contact />,
    width: '',
    class: 'animated-text-stripOneCardTitle',
    stand: false
  },
  {
    id: '',
    title: '',
    text: '',
    link: '',
    image: '',
    width: '',
    class: 'animated-text-stripOneCardTitle',
    stand: false
  },
  {
    id: '',
    title: '',
    text: '',
    link: '',
    image: '',
    width: '',
    class: 'animated-text-stripOneCardTitle',
    stand: false
  },
]