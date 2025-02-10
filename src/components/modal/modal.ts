import './modal.css'
import { default as ModalTemplate } from './modal.hbs?raw'
import Block from '../../services/block.ts'
import { ButtonType, PropsType } from '../../types/types.ts'

type Props = PropsType & {
  title: string
  button: ButtonType
}
export default class Modal extends Block {
  constructor(props: Props) {
    super({
      ...props,
      tagName: 'form',
      attributes: { class: 'modal' }
    })
  }

  render() {
    return this.compile(ModalTemplate, this.props)
  }
}
