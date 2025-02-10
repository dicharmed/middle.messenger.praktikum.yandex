import Block from '../services/block.ts'
import { render } from '../utils/render.ts'

export class Route {
  private _pathname: string
  private _blockClass: Block
  private _block: Block | null = null
  private _props: { rootQuery: string }

  constructor(pathname: string, view: Block, props: { rootQuery: string }) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave() {
    if (this._block) {
      this._block.hide()
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname)
  }

  render() {
    if (!this._block) {
      this._block = this._blockClass
      render(this._props.rootQuery, this._block)
      return
    }

    this._block.show()
  }
}

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs
}
