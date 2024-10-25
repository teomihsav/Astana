import { ReactNode } from "react"

export interface CardProps {
  id: string
  title: string,
  text: string,
  image: string | ReactNode,
  width?: string | number | undefined
  class: string
  link: string
  stand: boolean
  empty: boolean
  line?: ReactNode,
  buildTitle?: string
  build?: string
}

export interface SSO {
  message: string,
  user: {
    aud: string,
    azp: string,
    email: string,
    email_verified: boolean,
    exp: number,
    family_name: string,
    given_name: string,
    iat: number,
    iss: string,
    jti: string,
    name: string,
    nbf: number,
    picture: string,
    sub: string
  }
}
export interface CredentialResponse {
  credential?: string;
  select_by?: 'auto' | 'user' | 'user_1tap' | 'user_2tap' | 'btn' | 'btn_confirm' | 'btn_add_session' | 'btn_confirm_add_session';
  clientId?: string;
}