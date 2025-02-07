import { default as ProfileEditLayoutTemplate } from './profile-edit-layout.hbs?raw'
import Block from '../../../services/block.ts'
import { PropsType } from '../../../types/types.ts'
import Avatar from '../../avatar/avatar.ts'
import ButtonArrow from '../../button-arrow/button-arrow.ts'
import './profile-edit-layout.css'

type Props = PropsType & {
  content: Array<Block> | Block
}
export default class ProfileEditLayout extends Block {
  constructor(props: Props) {
    const { content, ...rest } = props
    super({ ...rest, attributes: { class: 'profile-page' } })

    if (!this.children.avatar) {
      this.children.avatar = new Avatar({})
    }

    if (!this.children.buttonArrow) {
      this.children.buttonArrow = new ButtonArrow({ direction: 'left' })
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
  }

  render() {
    return this.compile(ProfileEditLayoutTemplate, this.props)
  }
}
