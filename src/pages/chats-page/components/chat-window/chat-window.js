import Handlebars from 'handlebars'
import './chat-window.css'
import { ChatWindowHeader } from '../chat-window-header/chat-window-header.js'
import { ChatWindowContent } from '../chat-window-content/chat-window-content.js'
import { ChatWindowFooter } from '../chat-window-footer/chat-window-footer.js'

export const ChatWindow = `
<div class="chat-window">
    <div class="chat-window__header">{{> chatWindowHeader}}</div>
    <div class="chat-window__content">{{> chatWindowContent}}</div>
    <div class="chat-window__footer">{{> chatWindowFooter}}</div>
</div>
`
Handlebars.registerPartial('chatWindow', ChatWindow)
