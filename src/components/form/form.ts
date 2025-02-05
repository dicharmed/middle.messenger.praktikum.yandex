import './form.css'
import { default as FormTemplate } from './form.hbs?raw'
import Block from '../../services/block.ts'
import { FormElementType, PropsType } from '../../types/types.ts'

type Props = PropsType & {
  formProps: FormElementType
  content: Array<Block>
  actions: Array<Block>
}

export default class Form extends Block {
  constructor(props: Props) {
    const { formProps, content, actions, ...rest } = props
    super({
      ...rest,
      tagName: 'form',
      attributes: { class: 'form', ...formProps }
    })

    if (!this.lists.content) {
      this.lists.content = content.map(component => {
        return component
      })
    }
    if (!this.lists.actions) {
      this.lists.actions = actions.map(component => {
        return component
      })
    }
  }

  render() {
    return this.compile(FormTemplate, this.props)
  }
}
