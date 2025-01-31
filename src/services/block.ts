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
abstract class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  }
  props: PropsType
  eventBus: () => EventBus
  _element: HTMLElement | null = null
  _id: string
  _children: ChildrenType
  _lists: ListsType = {}

  protected constructor(propsAndChildren: PropsType) {
    const eventBus = new EventBus()
    const { children, props, lists } = this._getChildren(propsAndChildren)

    this._id = makeUUID()
    this._children = this._makePropsProxy(children, this) as ChildrenType
    this._lists = this._makePropsProxy(lists, this) as ListsType
    this.props = this._makePropsProxy({ ...props, __id: this._id }, this)

    this.eventBus = () => eventBus

    this._registerEvents(eventBus)
    eventBus.emit(Block.EVENTS.INIT)
  }
  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }
  _createResources() {
    const { tagName, className } = this.props
    this._element = this._createDocumentElement(tagName, className)
  }

  init() {
    this._createResources()

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
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

    Object.entries(this._children).forEach(([key, child]) => {
      propsAndStubs[key] = new Handlebars.SafeString(
        `<div data-id="${child._id}"></div>`
      )
    })

    const fragment = this._createDocumentElement(
      'template'
    ) as HTMLTemplateElement

    fragment.innerHTML = templateCompile(template, propsAndStubs)

    Object.values(this._children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
      const content = child.getContent()

      if (stub) stub.replaceWith(content as HTMLElement)
    })

    return fragment.content
  }

  _componentDidMount() {
    this.componentDidMount()

    Object.values(this._children).forEach(child => {
      child.dispatchComponentDidMount()
    })
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  _componentDidUpdate(oldProps: unknown, newProps: unknown) {
    const response = this.componentDidUpdate(oldProps, newProps)
    if (!response) {
      return
    }
    this._render()
  }

  componentDidUpdate(_oldProps: unknown, _newProps: unknown) {
    return true
  }
  setProps = (nextProps: unknown) => {
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

    this._element!.innerHTML = ''

    if (block instanceof Node) {
      this._element!.appendChild(block)
    }
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

  _createDocumentElement(tagName: TagNameType = 'div', className?: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName)
    if (className) element.setAttribute('class', className)
    element.setAttribute('data-id', this._id)

    return element
  }
}

export default Block
