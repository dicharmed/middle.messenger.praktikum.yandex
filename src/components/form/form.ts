import './form.css'
import { default as FormTemplate } from './form.hbs?raw'
import Block from '../../services/block.ts'
import { FormElementType, PropsType } from '../../types/types.ts'
import Handlebars from 'handlebars'
import { default as FormInputTemplate } from '../form-input/form-input.hbs?raw'
type Props = PropsType & FormElementType

export default class Form extends Block {
  constructor(props: Props) {
    super({
      ...props,
      tagName: 'form',
      attributes: { class: 'form' }
    })
  }

  render() {
    return this.compile(FormTemplate, this.props)
  }
}
Handlebars.registerPartial('Form', FormTemplate)
Handlebars.registerPartial('FormInput', FormInputTemplate)
Handlebars.registerPartial('content', '')
Handlebars.registerPartial('actions', '')
