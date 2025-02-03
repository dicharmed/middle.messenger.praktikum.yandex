import Block from '../services/block.ts'

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
}
export type LinkType = { href: string; title: string; exact?: boolean }
export type FormElementType = {
  name: string
  title?: string
  type?: string
  value?: string
  placeholder?: string
}
export type ErrorType = {
  message: string
}
