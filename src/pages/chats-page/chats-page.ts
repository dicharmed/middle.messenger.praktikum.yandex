import './chats-page.css'
import Block from '../../services/block.ts'
import { PropsType } from '../../types/types.ts'
import Sidebar from './components/sidebar/sidebar.ts'
import ChatWindow from './components/chat-window/chat-window.ts'

import { default as ChatsPageTemplate } from './chats-page.hbs?raw'

class ChatsPageClass extends Block {
  constructor(props: PropsType) {
    super(props)

    if (!this.children.sidebar) {
      this.children.sidebar = new Sidebar({})
    }

    if (!this.children.chatWindow) {
      this.children.chatWindow = new ChatWindow({})
    }
  }

  render() {
    return this.compile(ChatsPageTemplate, this.props)
  }
}

export const ChatsPage = new ChatsPageClass({
  attributes: { class: 'chats-page' }
})
