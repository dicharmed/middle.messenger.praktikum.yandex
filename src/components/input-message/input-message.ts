import './input-message.css'
import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'

interface Props extends PropsType {
  name: string
  placeholder?: string
}
export default class InputMessage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      tagName: 'input',
      attributes: {
        class: 'input-message',
        type: 'text'
      }
    })
  }

  render() {
    return this.compile('', this.props)
  }
}
