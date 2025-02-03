import './input-message.css'
import Block from '../../services/block.ts'
import { FormElementType, PropsType } from '../../types/types.ts'

type Props = PropsType & FormElementType
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
