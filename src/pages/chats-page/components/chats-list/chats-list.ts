import './chats-list.css'
import { default as ChatsListTemplate } from './chats-list.hbs?raw'
import Block from '../../../../services/block.ts'
import { ChatPreviewType, PropsType } from '../../../../types/types.ts'
import ChatPreview from '../chat-preview/chat-preview.ts'

type Props = PropsType & {
  chats: Array<ChatPreviewType>
}
export default class ChatsList extends Block {
  constructor(props: Props) {
    super({
      ...props,
      attributes: { class: 'chats' }
    })
    if (!this.lists.chatPreviewList) {
      this.lists.chatPreviewList = props.chats.map(chat => {
        return new ChatPreview({
          ...chat
        })
      })
    }
  }

  render() {
    return this.compile(ChatsListTemplate, this.props)
  }
}
