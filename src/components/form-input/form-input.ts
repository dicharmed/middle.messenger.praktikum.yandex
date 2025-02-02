import './form-input.css'
import { default as FormInputTemplate } from './form-input.hbs?raw'
import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'

interface Props extends PropsType {
  name: string
  title: string
  error: string
}
export default class FormInput extends Block {
  constructor(props: Props) {
    super({ ...props, attributes: { class: 'input' } })
  }

  render() {
    return this.compile(FormInputTemplate, this.props)
  }
}
