import './form-button.css'
import Block from '../../services/block.ts'
import { FormElementType, PropsType } from '../../types/types.ts'

type Props = PropsType & FormElementType
export default class FormButton extends Block {
  constructor(props: Props) {
    super({
      ...props,
      tagName: 'input',
      attributes: {
        class: 'form-button',
        value: String(props.title),
        type: 'submit'
      }
    })
  }

  render() {
    return this.compile('', this.props)
  }
}
