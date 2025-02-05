import './chat-window-footer.css'
import { default as ChatWindowFooterTemplate } from './chat-window-footer.hbs?raw'
import Block from '../../../../../../services/block.ts'
import { PropsType } from '../../../../../../types/types.ts'
import InputMessage from '../../../../../../components/input-message/input-message.ts'
import ButtonArrow from '../../../../../../components/button-arrow/button-arrow.ts'

export default class ChatWindowFooter extends Block {
  constructor(props: PropsType) {
    super({
      ...props,
      attributes: { class: 'chat-window-footer' }
    })

    if (!this.children.inputMessage) {
      this.children.inputMessage = new InputMessage({
        name: 'message',
        placeholder: 'Сообщение'
      })
    }
    if (!this.children.buttonArrow) {
      this.children.buttonArrow = new ButtonArrow({
        direction: 'right',
        events: {
          click: () => {
            console.log(
              'message: ',
              (this.children.inputMessage as InputMessage).getValue()
            )
          }
        }
      })
    }
  }

  render() {
    return this.compile(ChatWindowFooterTemplate, this.props)
  }
}
