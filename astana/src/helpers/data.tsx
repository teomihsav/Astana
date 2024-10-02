import Checkin from '../assets/checkin.png'
import Dnd from '../assets/dnd1.png'

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
    id: 'ТЕХНОЛОГИЯ',
    title: 'ТЕCar rental check in app for full fill missing data and add credit card and additional drivers.ХНОЛОГИЯ',
    text: 'Redux, hooks', link: 'https://checkin.ben.bg', image: Checkin, width: 450, class: 'animated-text-stripOneCardTitle',
    stand: true
  },
  // 'ТЕХНОЛОГИЯ',
  // 'ЕКИП',
  // 'НОВИНИ',
  // 'КОНТАКТИ'
]