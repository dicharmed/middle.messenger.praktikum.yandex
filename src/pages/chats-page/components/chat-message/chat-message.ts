import './chat-message.css'
import { default as ChatMessageTemplate } from './chat-message.hbs?raw'
import Block from '../../../../services/block.ts'
import {
  ClassNamesType,
  MessageType,
  PropsType
} from '../../../../types/types.ts'
import { getChatMessageClassNames } from '../../utils/getChatMessageClassNames.ts'

type Props = PropsType & {
  message: MessageType
}
export default class ChatMessage extends Block {
  constructor(props: Props) {
    const classNames: ClassNamesType = getChatMessageClassNames(
      props.message.type
    )
    super({
      ...props,
      attributes: {
        class: classNames
      }
    })
  }

  render() {
    return this.compile(ChatMessageTemplate, this.props)
  }
}
