export type CallbackType = (...args: Array<unknown>) => void
export type TagNameType = keyof HTMLElementTagNameMap
export type EventType = Record<string, Array<CallbackType>>
export type PropsType = {
  tagName?: TagNameType
  props: unknown
  events?: EventType
}
export type MetaType = Omit<PropsType, 'events'>
