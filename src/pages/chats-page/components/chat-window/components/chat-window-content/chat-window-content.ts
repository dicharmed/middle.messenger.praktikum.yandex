import './chat-window-content.css'
import { default as ChatWindowContentTemplate } from './chat-window-content.hbs?raw'
import Block from '../../../../../../services/block.ts'
import { MessageType, PropsType } from '../../../../../../types/types.ts'
import ChatMessage from '../../../chat-message/chat-message.ts'

const message1: MessageType = {
  text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
  type: 'incoming',
  time: '12:30',
  status: 'sent',
  author: 'You'
}
const message2: MessageType = {
  text: 'Круто!',
  time: '12:31',
  status: 'seen',
  type: 'outcoming',
  author: 'Mike Henderson'
}
const messages = [message1, message2]

type Props = PropsType & {
  messages?: Array<MessageType>
}
export default class ChatWindowContent extends Block {
  constructor(props: Props) {
    super({
      ...props,
      attributes: { class: 'chat-window-content-dialogs' },
      messages: messages
    })

    if (!this.lists.chatMessageList) {
      this.lists.chatMessageList = messages.map((message: MessageType) => {
        return new ChatMessage({ message })
      })
    }
  }

  render() {
    return this.compile(ChatWindowContentTemplate, this.props)
  }
}
