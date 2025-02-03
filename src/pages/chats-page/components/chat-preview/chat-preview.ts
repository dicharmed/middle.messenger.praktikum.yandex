import './chat-preview.css'
import { default as ChatPreviewTemplate } from './chat-preview.hbs?raw'
import Block from '../../../../services/block.ts'
import { ChatPreviewType, PropsType } from '../../../../types/types.ts'
import { SIZE } from '../../../../constants/enums.ts'
import Avatar from '../../../../components/avatar/avatar.ts'

type Props = PropsType & ChatPreviewType

export default class ChatPreview extends Block {
  constructor(props: Props) {
    super({
      ...props,
      attributes: {
        class: ['chat', 'chats__item']
      }
    })

    if (!this.children.avatar) {
      this.children.avatar = new Avatar({ size: SIZE.medium })
    }
  }

  render() {
    return this.compile(ChatPreviewTemplate, this.props)
  }
}
