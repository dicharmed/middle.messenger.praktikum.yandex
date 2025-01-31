class EventBus<
  TEvents extends Record<string, (...args: Array<unknown>) => void>
> {
  private listeners: Partial<{ [K in keyof TEvents]: Array<TEvents[K]> }> = {}

  constructor() {
    this.listeners = {}
  }

  private _checkEvent<K extends keyof TEvents>(event: K) {
    if (!this.listeners[event] || this.listeners[event]!.length === 0) {
      throw new Error(`Нет события: ${String(event)}`)
    }
  }

  on<K extends keyof TEvents>(event: K, callback: TEvents[K]) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event]!.push(callback)
  }

  off<K extends keyof TEvents>(event: K, callback: TEvents[K]) {
    this._checkEvent(event)

    this.listeners[event] = this.listeners[event]!.filter(
      listener => listener !== callback
    )
  }

  emit<K extends keyof TEvents>(event: K, ...args: Parameters<TEvents[K]>) {
    this._checkEvent(event)

    this.listeners[event]!.forEach(listener => listener(...args))
  }
}

export default EventBus
