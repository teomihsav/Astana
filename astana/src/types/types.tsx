import { ReactNode } from "react"

export interface CardProps {
  id: string
  title: string,
  text: string | undefined,
  image: string | ReactNode,
  width?: string | number | undefined
  class: string
  link: string
  stand: boolean
  empty: boolean
  line?: ReactNode,
}