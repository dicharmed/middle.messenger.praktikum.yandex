import Block from '../services/block.ts'
import { FORM_FIELDS_NAMES } from '../constants/enums.ts'

export type CallbackType = (...args: Array<unknown>) => void
export type TagNameType = keyof HTMLElementTagNameMap
export type EventType = Record<keyof HTMLElementEventMap | string, CallbackType>
export type PropsType = Record<string, unknown> & {
  tagName?: TagNameType
  events?: EventType
  __id?: string | null
  withInternalID?: boolean
  attributes?: HtmlElementAttrsType
}
export type ListsType = Record<string, Array<Block | unknown>>
export type ChildrenType = Record<string, Block>
export type ClassNamesType = Array<string> | string
export type HtmlElementAttrsType = Record<string, string | Array<string>> & {
  class?: ClassNamesType
}
export type ButtonType = {
  title: string
  name: string
}
export type MessageType = {
  text: string
  status?: 'seen' | 'sent' | 'failed'
  type: 'incoming' | 'outcoming'
  time: string
  sender: {
    firstName: string
    lastName: string
  }
}
export type ChatPreviewType = {
  message: MessageType
  amount?: number
  active?: boolean
}
export type LinkType = { href: string; title: string }
export type FormElementType = {
  name: string
  type?: string
  value?: string
  placeholder?: string
  label?: string
}
export type ErrorType = {
  message: string
  status?: string
  userMessage?: string
}

export type FormErrorType = Partial<Record<FORM_FIELDS_NAMES, string>>

export type LoginFormDataType = {
  [FORM_FIELDS_NAMES.login]: string
  [FORM_FIELDS_NAMES.password]: string
}

export type SignUpFormDataType = {
  [FORM_FIELDS_NAMES.email]: string
  [FORM_FIELDS_NAMES.login]: string
  [FORM_FIELDS_NAMES.first_name]: string
  [FORM_FIELDS_NAMES.second_name]: string
  [FORM_FIELDS_NAMES.phone]: string
  [FORM_FIELDS_NAMES.password]: string
  [FORM_FIELDS_NAMES.passwordCheck]: string
}

export type ProfileFormDataType = {
  [FORM_FIELDS_NAMES.email]: string
  [FORM_FIELDS_NAMES.login]: string
  [FORM_FIELDS_NAMES.first_name]: string
  [FORM_FIELDS_NAMES.second_name]: string
  [FORM_FIELDS_NAMES.phone]: string
  [FORM_FIELDS_NAMES.display_name]: string
}

export type ProfileFormEditPswdDataType = {
  [FORM_FIELDS_NAMES.oldPassword]: string
  [FORM_FIELDS_NAMES.newPassword]: string
  [FORM_FIELDS_NAMES.newPasswordControl]: string
}

export type ChatFormMessageDataType = {
  [FORM_FIELDS_NAMES.message]: string
}

export type FormDataType =
  | LoginFormDataType
  | SignUpFormDataType
  | ProfileFormDataType
  | ProfileFormEditPswdDataType
  | ChatFormMessageDataType
