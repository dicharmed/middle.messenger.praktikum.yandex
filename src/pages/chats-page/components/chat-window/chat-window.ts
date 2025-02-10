import './chat-window.css'
import Block from '../../../../services/block.ts'
import { PropsType } from '../../../../types/types.ts'

import { default as ChatWindowTemplate } from './chat-window.hbs?raw'
import ChatWindowFooter from './components/chat-window-footer/chat-window-footer.ts'
import ChatWindowContent from './components/chat-window-content/chat-window-content.ts'
import ChatWindowHeader from './components/chat-window-header/chat-window-header.ts'

export default class ChatWindow extends Block {
  constructor(props: PropsType) {
    super({
      ...props,
      attributes: { class: 'chat-window' }
    })

    if (!this.children.header) {
      this.children.header = new ChatWindowHeader({
        sender: { firstName: 'Michael', lastName: '' }
      })
    }
    if (!this.children.content) {
      this.children.content = new ChatWindowContent({})
    }
    if (!this.children.footer) {
      this.children.footer = new ChatWindowFooter({})
    }
  }

  render() {
    return this.compile(ChatWindowTemplate, this.props)
  }
}
