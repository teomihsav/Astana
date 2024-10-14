import en from '../assets/en.png'
import bg from '../assets/bg.png'
import i18next from 'i18next'
import { create } from 'zustand'

export const state = {
  lang: i18next.language,
  test: false,
  transcript: '',

}

//----------------- Zustand Store ------------------

type State = {
  transcript: string,
  scroll: number,
  element: string,
  positionPx: number,
  alert: { left: boolean, right: boolean },
}
type Action = {
  setTranscript: (x: string) => void
  setMove: (x: number) => void
  setAlert: (x: { left: boolean, right: boolean }) => void
}

export const useStore = create<State & Action>((set) => ({
  transcript: '',
  scroll: 0,
  element: '',
  positionPx: 100,
  alert: { left: false, right: false },
  setTranscript: transcript => set(() => ({ transcript })),
  setMove: positionPx => set(() => ({ positionPx })),
  setAlert: alert => set(() => ({ alert })),
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

