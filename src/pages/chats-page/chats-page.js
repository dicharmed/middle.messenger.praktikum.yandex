import { ChatMessage } from './components/chat-message/chat-message.js'
import { ChatPreview } from './components/chat-preview/chat-preview.js'
import { ChatWindow } from './components/chat-window/chat-window.js'
import { ChatsList } from './components/chats-list/chats-list.js'
import { SearchField } from './components/search-field/search-field.js'
import { Sidebar } from './components/sidebar/sidebar.js'
import './chats-page.css'
import { registerTemplate } from '../../utils/register-template.js'

registerTemplate({
  ChatMessage,
  ChatPreview,
  ChatWindow,
  ChatsList,
  SearchField,
  Sidebar
})

export { default as ChatsPage } from './chats-page.hbs?raw'
