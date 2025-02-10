import './button-icon.css'
import { default as ButtonIconTemplate } from './button-icon.hbs?raw'
import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'

type Props = PropsType & {
  url?: string
}
export default class ButtonIcon extends Block {
  constructor(props: Props) {
    super({ ...props, tagName: 'button', attributes: { class: 'button-icon' } })
  }

  render() {
    return this.compile(ButtonIconTemplate, this.props)
  }
}
