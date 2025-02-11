import { default as ProfileEditLayoutTemplate } from './profile-edit-layout.hbs?raw'
import Block from '../../../services/block.ts'
import { PropsType } from '../../../types/types.ts'
import Avatar from '../../avatar/avatar.ts'
import ButtonArrow from '../../button-arrow/button-arrow.ts'
import './profile-edit-layout.css'
import FormButton from '../../form-button/form-button.ts'
import { router } from '../../../services/router.ts'

type Props = PropsType & {
  content: Array<Block> | Block
  formButtonName: string
}
export default class ProfileEditLayout extends Block {
  constructor(props: Props) {
    const { content, ...rest } = props
    super({ ...rest, attributes: { class: 'profile-page' } })

    if (!this.children.avatar) {
      this.children.avatar = new Avatar({})
    }

    if (!this.children.buttonArrow) {
      this.children.buttonArrow = new ButtonArrow({
        direction: 'left',
        events: {
          click: (e: unknown) => {
            ;(e as MouseEvent).preventDefault()
            router.back()
          }
        }
      })
    }

    if (content instanceof Array) {
      if (!this.lists.content) {
        this.lists.content = content.map(component => {
          return component
        })
      }
    } else {
      if (!this.children.content) {
        this.children.content = content
      }
    }

    if (!this.children.buttonForm) {
      this.children.buttonForm = new FormButton({
        name: this.props.formButtonName as string,
        title: 'Сохранить'
      })
    }
  }

  render() {
    return this.compile(ProfileEditLayoutTemplate, this.props)
  }
}
