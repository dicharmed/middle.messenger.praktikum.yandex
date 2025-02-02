import './form.css'
import { default as FormTemplate } from './form.hbs?raw'
import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'

interface Props extends PropsType {
  title: string
  name?: string
}
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
