import Block from '../services/block.ts'

export type CallbackType = (...args: Array<unknown>) => void
export type TagNameType = keyof HTMLElementTagNameMap
export type EventType = Record<string, Array<CallbackType>>
export type PropsType = Record<string, unknown> & {
  tagName?: TagNameType
  className?: string
  events?: EventType
  __id?: string
}
export type ListsType = Record<string, Array<unknown>>
export type ChildrenType = Record<string, Block>
