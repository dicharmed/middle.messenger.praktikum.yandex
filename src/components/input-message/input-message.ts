import './input-message.css'
import Block from '../../services/block.ts'
import { ErrorType, FormElementType, PropsType } from '../../types/types.ts'
import './input-message.css'

type Props = PropsType &
  FormElementType & {
    error?: ErrorType
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

  getValue() {
    return (this.element as HTMLInputElement).value
  }

  render() {
    return this.compile('', this.props)
  }
}
