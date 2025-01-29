import EventBus from '../event-bus/event-bus.ts'
import { MetaType, PropsType, TagNameType } from '../../types/types.ts'

abstract class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  }
  props: PropsType
  private eventBus: () => EventBus
  private _element: HTMLElement | null = null
  private _meta: MetaType = { tagName: 'div', props: null }

  constructor({ tagName, props, events }: PropsType) {
    const eventBus = new EventBus()
    this._meta = {
      tagName,
      props
    }

    this.props = this._makePropsProxy({ tagName, props, events }, this)

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
    const { tagName = 'div' } = this._meta
    this._element = this._createDocumentElement(tagName)
  }

  init() {
    this._createResources()

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  _componentDidMount() {
    this.componentDidMount()
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
    const block: string = this.render()
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    if (this._element) this._element.innerHTML = block
  }

  render() {
    return ''
  }

  getContent() {
    if (this.element) return this.element
  }

  _makePropsProxy(props: PropsType, context: Block) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as keyof PropsType]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set(target, prop, value) {
        target[prop as keyof PropsType] = value

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
        context.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target)
        return true
      },
      deleteProperty() {
        throw new Error('Нет доступа')
      }
    })
  }

  _createDocumentElement(tagName: TagNameType) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName)
  }
}

export default Block
