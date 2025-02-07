import Block from '../../../services/block.ts'
import { PropsType } from '../../../types/types.ts'
import FormButton from '../../form-button/form-button.ts'
import { default as ProfileFormEditTemplate } from './profile-form-edit.hbs?raw'
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
    console.log('this.lists.content', this.lists.content)
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
