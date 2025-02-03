import './chat-preview.css'
import { default as ChatPreviewTemplate } from './chat-preview.hbs?raw'
import Block from '../../../../services/block.ts'
import { ChatPreviewType, PropsType } from '../../../../types/types.ts'

type Props = PropsType & ChatPreviewType
export default class ChatPreview extends Block {
  constructor(props: Props) {
    super({
      ...props,
      attributes: {
        class: 'chat'
      }
    })
  }

  render() {
    return this.compile(ChatPreviewTemplate, this.props)
  }
}
