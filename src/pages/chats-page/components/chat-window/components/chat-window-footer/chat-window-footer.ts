import './chat-window-footer.css'
import { default as ChatWindowFooterTemplate } from './chat-window-footer.hbs?raw'
import Block from '../../../../../../services/block.ts'
import {
  ChatFormMessageDataType,
  PropsType
} from '../../../../../../types/types.ts'
import InputMessage from '../../../../../../components/input-message/input-message.ts'
import ButtonArrow from '../../../../../../components/button-arrow/button-arrow.ts'
import { FORM_FIELDS_NAMES } from '../../../../../../constants/enums.ts'
import { validateForm } from '../../../../../../utils/validateForm.ts'

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
          click: () => handleClick(this),
          blur: () => handleBlur(this)
        }
      })
    }
  }

  render() {
    return this.compile(ChatWindowFooterTemplate, this.props)
  }
}

const getMessage = (context: Block) => {
  return {
    [FORM_FIELDS_NAMES.message]: (
      context.children.inputMessage as InputMessage
    ).getValue()
  }
}

const handleClick = (context: Block) => {
  const data = getMessage(context)
  const errors = validateForm(data as ChatFormMessageDataType)
  if (errors) {
    console.error(errors)
  }
}

const handleBlur = (context: Block) => {
  const data = getMessage(context)
  const errors = validateForm(data as ChatFormMessageDataType)
  if (errors) {
    console.error(errors)
  }
}
