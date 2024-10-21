import en from '../assets/en.png'
import bg from '../assets/bg.png'
import i18next, { } from 'i18next'
import { create } from 'zustand'

export const state = {
  lang: i18next.language,
  test: false,
  transcript: '',
  mobile: false,

}

//----------------- Zustand Store ------------------

type State = {
  transcript: string,
  scroll: number,
  element: string,
  textMenuZ: string,
  positionPx: number,
  alert: { left: boolean, right: boolean },
  backDrop: boolean
  lang: string
}
type Action = {
  setTranscript: (x: string) => void
  setMove: (x: number) => void
  setAlert: (x: { left: boolean, right: boolean }) => void
  setbackDrop: (x: boolean) => void
  setLang: (x: string) => void
}

export const useStore = create<State & Action>((set) => ({
  transcript: '',
  scroll: 0,
  element: '',
  textMenuZ: '',
  positionPx: 100,
  backDrop: false,
  lang: 'en',
  alert: { left: false, right: false },
  setTranscript: transcript => set(() => ({ transcript })),
  setMove: positionPx => set(() => ({ positionPx })),
  setAlert: alert => set(() => ({ alert })),
  setbackDrop: backDrop => set(() => ({ backDrop })),
  setLang: lang => set(() => ({ lang })),
}))

// ----------------------------------------

export const languages = {
  en: en,
  bg: bg,
}
export const langMatch = {
  en: 'English',
  bg: 'Български',
}


