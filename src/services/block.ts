import EventBus from './event-bus.ts'
import {
  ChildrenType,
  ListsType,
  PropsType,
  TagNameType
} from '../types/types.ts'
import { v4 as makeUUID } from 'uuid'
import { templateCompile } from '../utils/template-compile.ts'
import Handlebars from 'handlebars'
import { EVENTS as EventsEnum } from '../constants/constants.ts'

interface BlockEvents {
  [key: string]: (...args: unknown[]) => void
  [EventsEnum.INIT]: () => void
  [EventsEnum.FLOW_CDM]: () => void
  [EventsEnum.FLOW_CDU]: (...args: Array<unknown>) => void
  [EventsEnum.FLOW_RENDER]: () => void
}

abstract class Block {
  static EVENTS = EventsEnum
  props: PropsType
  eventBus: () => EventBus<BlockEvents>
  _element: HTMLElement | null = null
  _id: string | null = null
  children: ChildrenType
  _lists: ListsType = {}

  protected constructor(propsAndChildren: PropsType) {
    const eventBus = new EventBus<BlockEvents>()
    const { children, props, lists } = this._getChildren(propsAndChildren)
    const isWithInternalID = props.withInternalID || false
    this._id = makeUUID()
    this.children = this._makePropsProxy(children, this) as ChildrenType
    this._lists = this._makePropsProxy(lists, this) as ListsType
    this.props = this._makePropsProxy(
      { ...props, __id: isWithInternalID ? this._id : null },
      this
    )
    this.eventBus = () => eventBus
    this._registerEvents(eventBus)
    eventBus.emit(Block.EVENTS.INIT)
  }
  _registerEvents(eventBus: EventBus<BlockEvents>) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(EventsEnum.FLOW_CDU, (oldProps, newProps) =>
      this._componentDidUpdate(oldProps as PropsType, newProps as PropsType)
    )
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }
  _createResources() {
    const { tagName, className, withInternalID } = this.props
    this._element = this._createDocumentElement(
      tagName,
      className,
      withInternalID
    )
  }

  init() {
    this._createResources()

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  _addEvents() {
    const { events = {} } = this.props

    Object.keys(events).forEach(eventName => {
      this._element!.addEventListener(eventName, events[eventName])
    })
  }
  _removeEvents() {
    const { events = {} } = this.props

    Object.keys(events).forEach(eventName => {
      this._element!.removeEventListener(eventName, events[eventName])
    })
  }
  _getChildren(propsAndChildren: PropsType) {
    const children: ChildrenType = {}
    const lists: ListsType = {}
    const props: PropsType = {}

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value
      } else if (
        Array.isArray(value) &&
        value.every(item => item instanceof Block)
      ) {
        lists[key] = value
      } else {
        props[key] = value
      }
    })

    return { children, lists, props }
  }

  compile(template: string, props: PropsType) {
    const propsAndStubs = { ...props }

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = new Handlebars.SafeString(
        `<div data-id="${child._id}"></div>`
      )
    })

    const fragment = this._createDocumentElement(
      'template'
    ) as HTMLTemplateElement

    fragment.innerHTML = templateCompile(template, propsAndStubs)

    Object.values(this.children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
      const content = child.getContent()

      if (stub) stub.replaceWith(content as HTMLElement)
    })

    return fragment.content
  }

  _componentDidMount() {
    this.componentDidMount()

    Object.values(this.children).forEach(child => {
      child.dispatchComponentDidMount()
    })
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  _componentDidUpdate(oldProps: PropsType, newProps: PropsType) {
    const response = this.componentDidUpdate(oldProps, newProps)
    if (!response) {
      return
    }
    this._render()
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(_oldProps: PropsType, _newProps: PropsType) {
    return true
  }
  setProps = (nextProps: PropsType) => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element() {
    return this._element
  }

  _render() {
    const block = this.render()
    this._removeEvents()
    this._element!.innerHTML = ''

    if (block instanceof Node) {
      this._element!.appendChild(block)
    }

    this._addEvents()
  }

  render(): string | DocumentFragment {
    return ''
  }

  getContent() {
    return this._element
  }

  // Добавляем этот ID в актуальные this.props компонента, чтобы можно было получить доступ к id везде
  _makePropsProxy(props: PropsType | ChildrenType | ListsType, context: Block) {
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as keyof PropsType]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set(target, prop, value) {
        target[prop as keyof PropsType] = value

        // Запускаем обновление компоненты
        context.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target)
        return true
      },
      deleteProperty() {
        throw new Error('Нет доступа')
      }
    })
  }

  _createDocumentElement(
    tagName: TagNameType = 'div',
    className?: string,
    withInternalID?: boolean
  ) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName)
    if (className) element.setAttribute('class', className)
    if (withInternalID && this._id) element.setAttribute('data-id', this._id)

    return element
  }
}

export default Block
