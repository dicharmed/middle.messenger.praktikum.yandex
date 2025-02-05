import './form-input.css'
import { default as FormInputTemplate } from './form-input.hbs?raw'
import Block from '../../services/block.ts'
import { ErrorType, FormElementType, PropsType } from '../../types/types.ts'

type Props = PropsType &
  FormElementType & {
    error?: ErrorType
  }
export default class FormInput extends Block {
  constructor(props: Props) {
    super({
      ...props,
      attributes: { class: 'input' }
    })
  }
  getValue() {
    return (this.element?.firstElementChild as HTMLInputElement).value
  }
  render() {
    return this.compile(FormInputTemplate, this.props)
  }
}
