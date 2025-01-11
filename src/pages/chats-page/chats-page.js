import Handlebars from 'handlebars'
import { Sidebar } from './components/sidebar/sidebar.js'
import './chats-page.css'

export const ChatsPage = `
<div class="chats-page">
    <div class="chats-page-left">{{> sidebar}}</div>
    <div class="chats-page-right">content</div>
</div>
`
Handlebars.registerPartial('chatsPage', ChatsPage)
