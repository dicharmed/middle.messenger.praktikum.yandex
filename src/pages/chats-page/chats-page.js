import Handlebars from 'handlebars'
import { Sidebar } from './components/sidebar/sidebar.js'
import { ChatWindow } from './components/chat-window/chat-window.js'
import './chats-page.css'

export const ChatsPage = `
<div class="chats-page">
    <div class="chats-page-left">{{> sidebar}}</div>
    <div class="chats-page-right">{{> chatWindow}}</div>
</div>
`
Handlebars.registerPartial('chatsPage', ChatsPage)
