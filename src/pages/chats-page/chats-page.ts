import { ChatMessage } from './components/chat-message/chat-message.ts'
import { ChatPreview } from './components/chat-preview/chat-preview.ts'
import { ChatWindow } from './components/chat-window/chat-window.ts'
import { ChatsList } from './components/chats-list/chats-list.ts'
import { SearchField } from './components/search-field/search-field.ts'
import { Sidebar } from './components/sidebar/sidebar.ts'
import './chats-page.css'
import { registerTemplate } from '../../utils/register-template.ts'

registerTemplate({
  ChatMessage,
  ChatPreview,
  ChatWindow,
  ChatsList,
  SearchField,
  Sidebar
})

export { default as ChatsPage } from './chats-page.hbs?raw'
