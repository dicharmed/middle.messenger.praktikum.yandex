import Block from '../../../services/block.ts'
import { PropsType } from '../../../types/types.ts'
import FormButton from '../../form-button/form-button.ts'
import { default as ProfileFormEditTemplate } from './profile-form-edit.hbs?raw'
import './profile-form-edit.css'

type Props = PropsType & {
  content: Array<Block>
  formButtonName: string
}
export class ProfileFormEdit extends Block {
  constructor(props: Props) {
    const { content, formButtonName, ...rest } = props
    super({ ...rest, tagName: 'form' })

    if (!this.lists.content) {
      this.lists.content = content.map(component => {
        return component
      })
    }
    if (!this.children.buttonForm) {
      this.children.buttonForm = new FormButton({
        name: formButtonName,
        title: 'Сохранить'
      })
    }
  }

  render() {
    return this.compile(ProfileFormEditTemplate, this.props)
  }
}
