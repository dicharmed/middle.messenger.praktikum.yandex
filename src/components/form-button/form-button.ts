import './form-button.css'
import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'

interface Props extends PropsType {
  name?: string
  title: string
}
export default class FormButton extends Block {
  constructor(props: Props) {
    super({
      ...props,
      tagName: 'input',
      attributes: {
        class: 'form-button',
        value: props.title,
        type: 'submit'
      }
    })
  }

  render() {
    return this.compile('', this.props)
  }
}
