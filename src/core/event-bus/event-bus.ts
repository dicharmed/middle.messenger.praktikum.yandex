import { CallbackType, EventType } from '../../types/types.ts'

class EventBus {
  listeners: EventType = {}

  constructor() {
    this.listeners = {}
  }

  _checkEvent(event: string) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`)
    }
  }

  on(event: string, callback: CallbackType) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(callback)
  }
  off(event: string, callback: CallbackType) {
    this._checkEvent(event)

    this.listeners[event] = this.listeners[event].filter(
      (listener: CallbackType) => listener !== callback
    )
  }
  emit(event: string, ...args: Array<unknown>) {
    this._checkEvent(event)

    this.listeners[event].forEach((listener: CallbackType) => listener(...args))
  }
}

export default EventBus
