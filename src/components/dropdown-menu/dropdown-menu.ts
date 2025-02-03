import './dropdown-menu.css'
import { default as DropdownMenuTemplate } from './dropdown-menu.hbs?raw'
import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'

type Props = PropsType & {
  addUser: () => void
  removeUser: () => void
}
export default class DropdownMenu extends Block {
  constructor(props: Props) {
    super({
      ...props,
      attributes: { class: 'dropdown-menu' }
    })
  }

  render() {
    return this.compile(DropdownMenuTemplate, this.props)
  }
}
