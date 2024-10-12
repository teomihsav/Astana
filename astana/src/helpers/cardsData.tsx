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
}
type Action = {
  setTranscript: (x: string) => void
}

export const useStore = create<State & Action>((set) => ({
  transcript: '',
  scroll: 0,
  element: '',
  setTranscript: transcript => set(() => ({ transcript })),
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

