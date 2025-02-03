import './chats-list.css'
import { default as ChatsListTemplate } from './chats-list.hbs?raw'
import Block from '../../../../services/block.ts'
import { ChatPreviewType, PropsType } from '../../../../types/types.ts'
import ChatPreview from '../chat-preview/chat-preview.ts'

type Props = PropsType & {
  chats: Array<ChatPreviewType> | undefined
}
export default class ChatsList extends Block {
  constructor(props: Props) {
    super({
      ...props,
      attributes: { class: 'chats' }
    })
    if (!this.children.chatPreview) {
      this.children.chatPreview = new ChatPreview({
        message: {
          text: 'hello',
          status: 'seen',
          time: '12:30',
          type: 'outcoming',
          author: 'Mike Portman'
        }
      })
    }
  }

  render() {
    return this.compile(ChatsListTemplate, this.props)
  }
}
